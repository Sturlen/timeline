import Track from "./Track"
import TrackKey from "./TrackKey"
import { TweenFunc } from "./Tweenable"
import Color from "color"
import { lerpColor } from "./TweenableTypes/TweenableColor"

export default class ColorTrack extends Track<Color> {
  constructor(
    start: number,
    end: number,
    keys: TrackKey<Color>[],
    tweener: TweenFunc<Color> = lerpColor
  ) {
    super(start, end, keys, tweener)
  }
}
