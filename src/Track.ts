import TrackKey from "./TrackKey"
import { TrackArea } from "./TrackArea"
import { TweenFunc } from "./Tweenable"

/**
 * Blends between multple keys or states, pased on their positions on a line
 */
export default class Track<T> {
  private start: number
  private end: number
  private keys: TrackKey<T>[]
  /** Areas in ascending order */
  private areas: TrackArea<T>[]

  constructor(
    start: number,
    end: number,
    keys: TrackKey<T>[],
    tweener: TweenFunc<T>
  ) {
    this.start = start
    this.end = end
    this.keys = sortKeysAsceding(keys)
    this.areas = TrackArea.fromKeys(this.keys, tweener)
  }

  public getKeys(): TrackKey<T>[] {
    return this.keys
  }

  public getArea(position: number): TrackArea<T> {
    const first_position = this.areas[0].start_key.position
    const last_position = this.areas[this.areas.length - 1].end_key.position
    if (position <= first_position) {
      // Before track
      return this.areas[0]
    } else if (position >= last_position) {
      // After track
      return this.areas[this.areas.length - 1]
    } else {
      // Within range
      for (const area of this.areas) {
        if (
          position >= area.start_key.position &&
          position < area.end_key.position
        ) {
          return area
        } else {
          //try again in area after
        }
      }
    }

    throw new Error("No area found")
  }

  public getValue(position: number): T {
    const area = this.getArea(position)
    return area.getValue(position)
  }
}

function sortKeysAsceding<T>(keys: TrackKey<T>[]): TrackKey<T>[] {
  return keys.sort((a, b) => a.position - b.position)
}
