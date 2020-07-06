import { TweenFunc } from "./Tweenable"
import TrackKey from "./TrackKey"
import { Track } from "./index"

export interface TimelineTrack<T> {
  name: string
  tweener: TweenFunc<T>
  keys: TrackKey<T>[]
}

/**
 * Contains and syncronizes several tracks.
 * TODO: Better typing
 */
export default class Timeline {
  public tracks: Track<unknown>[]
  constructor(tracks: TimelineTrack<unknown>[]) {
    this.tracks = tracks.map(<T>(input: TimelineTrack<T>) => {
      return new Track<T>(0, 0, input.keys, input.tweener)
    })
  }
}
