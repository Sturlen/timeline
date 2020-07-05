import { TweenFunc } from "./Tweenable";
import TrackKey from "./TrackKey";

export interface TimelineTrack<T> {
    name: string
    tweener: TweenFunc<T>,
    keys: TrackKey<T>[]
}

/**
 * Contains and syncronizes several tracks.
 * TODO: Better typing
 */
export default class Timeline {
    public tracks: TimelineTrack<any>[]
    constructor(tracks: TimelineTrack<any>[]) {
        this.tracks = tracks
    }

}