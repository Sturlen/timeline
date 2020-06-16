import { tweenNum } from "./tween"

test("tween between 0 and 1 by 0.5 shall be 0.5", () => {
  expect(tweenNum(0, 1, 0.5)).toBe(1)
})
