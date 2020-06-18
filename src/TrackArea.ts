import { Tweenable, TweenFunc } from "./Tweenable"
import TrackKey from "./TrackKey"

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
