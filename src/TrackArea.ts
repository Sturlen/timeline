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
  public readonly start_key: TrackKey<T>
  public readonly end_key: TrackKey<T>

  public getValue(position: number): T {
    const tween = (factor: number): T => {
      return this.tweener(this.start_key.value, this.end_key.value, factor)
    }
    const start_pos = this.start_key.position
    const end_pos = this.end_key.position
    const relative_start_pos = start_pos - start_pos
    const relative_end_pos = end_pos - start_pos
    const relative_current_pos = position - start_pos

    if (relative_current_pos <= relative_start_pos) {
      //Before Area
      return tween(0)
    } else if (relative_current_pos >= relative_end_pos) {
      //After Area
      return tween(1)
    } else {
      //Within Area
      return tween(relative_current_pos / relative_end_pos)
    }
  }

  public toString(): string {
    return `[TrackArea]: From ${this.start_key.position} to ${this.end_key.position}`
  }

  /**
   *  Create an array of areas in order of key positions. Requires two keys or more.
   * @param keys Keys to tween between.
   * @param tweener Tweening function to use between keys
   */
  public static fromKeys<T>(
    keys: TrackKey<T>[],
    tweener: TweenFunc<T>
  ): TrackArea<T>[] {
    const areas: TrackArea<T>[] = []

    if (keys.length <= 1) {
      throw new Error(
        "TrackArea.fromKeys requires atleast two keys to create an area"
      )
    }

    keys.forEach((key, i) => {
      const next_key = keys[i + 1]
      if (next_key) {
        areas.push(new TrackArea<T>(key, next_key, tweener))
        return
      } else {
        //Last key does not create an area, since its the end key of the previous
        return
      }
    })
    return areas
  }
}
