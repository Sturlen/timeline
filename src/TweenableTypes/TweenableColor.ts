import { Tweenable, TweenFunc } from "../Tweenable"
import { tweenNum } from "./TweenableNumber"
import Color from "color"

export class TweenableColor extends Tweenable<Color> {
  constructor(start: Color, end: Color, tweener: TweenFunc<Color> = lerpColor) {
    super(start, end, tweener)
  }
}

/**
 * Converts via HSV to create more natual looking blends.
 */
export const lerpColor: TweenFunc<Color> = (start, end, factor) => {
  //Converts inputs to arrays of H, S, V
  const hsv_start = start.hsv().array()
  const hsv_end = end.hsv().array()

  // Adds dummy alpha channels if missing to ensure alpha gets blended
  if (hsv_start.length === 3) {
    hsv_start.push(1)
  }
  if (hsv_end.length === 3) {
    hsv_end.push(1)
  }

  return Color(
    hsv_start.map((start_channel, i) =>
      tweenNum(start_channel, hsv_end[i], factor)
    ),
    "hsv"
  )
}
