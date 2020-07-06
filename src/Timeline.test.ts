import Timeline, { TimelineTrack } from "./Timeline"
import { tweenNum } from "./TweenableTypes/TweenableNumber"
import { lerpColor } from "./TweenableTypes/TweenableColor"
import Color from "color"

const basic_color: TimelineTrack<Color> = {
  name: "basic_color",
  tweener: lerpColor,
  keys: [
    { position: 0, value: Color("white") },
    { position: 1, value: Color("black") },
  ],
}
const basic_number: TimelineTrack<number> = {
  name: "time",
  tweener: tweenNum,
  keys: [
    { position: 0, value: 0 },
    { position: 1, value: 1 },
  ],
}

it("is created from the keys you want to tween", () => {
  const t = new Timeline([basic_color, basic_number])
  expect(t).toBeInstanceOf(Timeline)
})
