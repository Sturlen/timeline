import { tweenNum, TweenableNumber } from "./TweenableNumber"

test("tween between 0 and 1 by 0.75 shall be 0.5", () => {
  expect(tweenNum(0, 10, 0.75)).toBe(7.5)
})

test("tween between 1 and 0 by 0.75 shall be 0.5", () => {
  expect(tweenNum(10, 0, 0.75)).toBe(2.5)
})

test("Create a tweenable number, then get the tweened number at 50%", () => {
  const t = new TweenableNumber(0, 2)
  expect(t.getPosition(0.5)).toBe(1)
})

test("At a factor equal to the starting position, return the starting value", () => {
  const t = new TweenableNumber(-2, 2)
  expect(t.getPosition(0.0)).toBe(-2)
})

test("At a factor equal to the ending position, return the ending value", () => {
  const t = new TweenableNumber(0, 2)
  expect(t.getPosition(1)).toBe(2)
})
