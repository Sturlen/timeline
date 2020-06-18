import Track from "./Track"
import { tweenNum } from "./TweenableTypes/TweenableNumber"

describe("getKeys", () => {
  it("Gives the list of keys in the order they exist on the timeline", () => {
    const a = {
      position: 0,
      value: 0,
    }
    const b = {
      position: 1,
      value: 2,
    }
    const keys = [b, a]
    const sorted = new Track(0, 2, keys, tweenNum).getKeys()
    expect(sorted[0].value).toBe(0)
    expect(sorted[1].value).toBe(2)
  })
})
describe("getArea", () => {
  it("Gives the area that is at a given position", () => {
    const key1 = {
      position: 0,
      value: 0,
    }
    const key2 = {
      position: 1,
      value: 10,
    }
    const key3 = {
      position: 2,
      value: 20,
    }
    const keys = [key1, key2, key3]
    const t = new Track(0, 1, keys, tweenNum)
    const position1 = 0.5
    const position2 = 1.5
    expect(t.getArea(position1).start).toBe(key1.value)
    expect(t.getArea(position1).end).toBe(key2.value)
    expect(t.getArea(position2).start).toBe(key2.value)
    expect(t.getArea(position2).end).toBe(key3.value)
  })
})

describe("getValue", () => {
  it("With Keys A at 0 and B at 2, at 50% progress, value should be 1", () => {
    const a = {
      position: 0,
      value: 0,
    }
    const b = {
      position: 1,
      value: 2,
    }
    const keys = [a, b]
    const t = new Track(0, 2, keys, tweenNum)
    expect(t.getValue(0.5)).toBe(1)
  })
  it("With Keys A at -1, B at 1 and C at 3, at 75% progress, value should be 1", () => {
    const a = {
      position: 0,
      value: -1,
    }
    const b = {
      position: 1,
      value: 3,
    }
    const c = {
      position: 2,
      value: 5,
    }
    const keys = [a, b, c]
    const t = new Track(-1, 2, keys, tweenNum)
    expect(t.getValue(0.75)).toBe(4)
  })
})
