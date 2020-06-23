import { lerpColor, TweenableColor } from "./TweenableColor"
import Color from "color"

it("Returns grey when tweening White and Black, with a factor of 50%", () => {
  const color = lerpColor(Color("white"), Color("black"), 0.5)
  expect(color.hsv().array()).toEqual(
    Color([127.5, 127.5, 127.5]).hsv().array()
  )
})

it("Returns Black when tweening White and Black, with a factor of 100%", () => {
  const color = lerpColor(Color("white"), Color("black"), 1)
  expect(color.hsv().array()).toEqual(Color("black").hsv().array())
})

it("Returns White when tweening White and Black, with a factor of 0%", () => {
  const color = lerpColor(Color("white"), Color("black"), 0)
  expect(color.hsv().array()).toEqual(Color("white").hsv().array())
})

it("Returns a blend of when tweening Red and Blue, with a factor of 50%", () => {
  const color = lerpColor(Color("red"), Color("blue"), 0.5)
  expect(color.rgb().object()).toEqual(Color([0, 255, 0]).rgb().object())
})

it("instatiates with a valid Color objext, with default as lerp", () => {
  const tc = new TweenableColor(Color("red"), Color("blue"))
  const color = tc.getPosition(0.5)
  expect(color.rgb().object()).toEqual(Color([0, 255, 0]).rgb().object())
})
