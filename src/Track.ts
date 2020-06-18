import { TweenFunc, Tweenable } from "./Tweenable"
import { tweenNum } from "./TweenableTypes/TweenableNumber"

/**
 * Represents a single point in time, wtih a given state
 */
export interface TrackKey<T> {
  position: number
  value: T
}

export interface NumberKey extends TrackKey<number> {
  value: number
}

/**
 * An area between two keyframes.
 * At a factor of zero it returns the start value. At a factor of 1 it returns the end value
 */
export class TrackArea<T> extends Tweenable<T> {
  constructor(start: TrackKey<T>, end: TrackKey<T>, tweener: TweenFunc<T>) {
    super(start.value, end.value, tweener)
    this.start_key = start
    this.end_key = end
  }
  private start_key: TrackKey<T>
  private end_key: TrackKey<T>

  public getValue(progress: number): T {
    return this.start_key.value
  }

  public toString(): string {
    return `[TrackArea]: From ${this.start_key.position} to ${this.end_key.position}`
  }

  public static fromKeys<T>(
    keys: TrackKey<T>[],
    tweener: TweenFunc<T>
  ): TrackArea<T>[] {
    const areas: TrackArea<T>[] = []
    keys.forEach((key, i) => {
      const next_key = keys[i + 1]
      if (next_key) {
        areas.push(new TrackArea<T>(key, next_key, tweener))
        return
      } else {
        //Last key
        return
      }
    })
    return areas
  }
}

/**
 * Blends between multple keys or states, pased on their positions on a line
 */
export default class Track<T> {
  private start: number
  private end: number
  private keys: TrackKey<T>[]
  /** Areas in ascending order */
  private areas: TrackArea<T>[]

  constructor(start: number, end: number, keys: TrackKey<T>[]) {
    this.start = start
    this.end = end
    this.keys = sortKeysAsceding(keys)
    this.areas = makeAreas(keys)
  }

  public getKeys(): TrackKey<T>[] {
    return this.keys
  }

  public getArea(progress: number): TrackArea<T> {
    //Assume areas are ascending
    for (const area of this.areas) {
      if (progress < area.start) {
        return
      }
    }
  }

  public getValue(progress: number): T {
    return this.keys[0].value
  }
}

export function makeAreaList<T>(keys: TrackKey<T>[]): TrackArea<T>[] {
  const areas: TrackArea<T>[] = []
  keys.forEach((key) => {
    areas.push()
  })
  return areas
}

function sortKeysAsceding<T>(keys: TrackKey<T>[]): TrackKey<T>[] {
  return keys.sort((a, b) => a.position - b.position)
}
