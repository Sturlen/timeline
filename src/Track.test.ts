import Track, { NumberKey, TrackArea } from "./Track"
import { tweenNum } from "./TweenableTypes/TweenableNumber"

describe("TrackArea", () => {
  it("with two keys, fromKeys creates a single area, with the first key at pos 0 and and last key at pos 1", () => {
    const areas = TrackArea.fromKeys(
      [
        { position: 1, value: 0 },
        { position: 2, value: 10 },
      ],
      tweenNum
    )
    expect(areas[0].getPosition(0)).toBe(0)
    expect(areas[0].getPosition(1)).toBe(10)
  })
  it.todo("fromKeys gives an exception if there is less than two keys")
})

describe("The Track object", () => {
  it("Gives the list of keys in the order they exist on the timeline", () => {
    const a: NumberKey = {
      position: 0,
      value: 0,
    }
    const b: NumberKey = {
      position: 1,
      value: 2,
    }
    const keys = [b, a]
    const sorted = new Track(0, 2, keys).getKeys()
    expect(sorted[0].value).toBe(0)
    expect(sorted[1].value).toBe(2)
  })
  it("Gives the area that is at a given position", () => {
    const key1: NumberKey = {
      position: 0,
      value: 0,
    }
    const key2: NumberKey = {
      position: 1,
      value: 10,
    }
    const key3: NumberKey = {
      position: 2,
      value: 20,
    }
    const keys = [key1, key2, key3]
    const t = new Track(0, 1, keys)
    const position1 = 0.5
    expect(t.getArea(position1).start).toBe(0)
    expect(t.getArea(position1).end).toBe(1)
  })
  it("With Keys A at 0 and B at 2, at 50% progress, value should be 1", () => {
    const a: NumberKey = {
      position: 0,
      value: 0,
    }
    const b: NumberKey = {
      position: 1,
      value: 2,
    }
    const keys = [a, b]
    const t = new Track(0, 2, keys)
    expect(t.getValue(0.5)).toBe(1)
  })
  it("With Keys A at -1, B at 1 and C at 3, at 75% progress, value should be 1", () => {
    const a: NumberKey = {
      position: 0,
      value: -1,
    }
    const b: NumberKey = {
      position: 1,
      value: 3,
    }
    const c: NumberKey = {
      position: 2,
      value: 5,
    }
    const keys = [a, b, c]
    const t = new Track(-1, 2, keys)
    expect(t.getValue(0.75)).toBe(4)
  })
})
