import Track from "./Track"
import TrackKey from "./TrackKey"
import { TweenFunc } from "./Tweenable"
import { tweenNum } from "./TweenableTypes/TweenableNumber"

export default class NumberTrack extends Track<number> {
  constructor(
    start: number,
    end: number,
    keys: TrackKey<number>[],
    tweener: TweenFunc<number> = tweenNum
  ) {
    super(start, end, keys, tweener)
  }
}
