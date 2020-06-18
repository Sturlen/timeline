import { TrackArea } from "./TrackArea"
import { tweenNum } from "./TweenableTypes/TweenableNumber"

describe("TrackArea", () => {
  it("with two keys, fromKeys creates a single area", () => {
    const areas = TrackArea.fromKeys(
      [
        { position: 1, value: 0 },
        { position: 2, value: 10 },
      ],
      tweenNum
    )
    expect(areas[0].getPosition(0)).toBe(0)
    expect(areas[0].getPosition(1)).toBe(10)
    expect(areas[1]).toBeUndefined()
  })
  it("with four keys, fromKeys creates three areas", () => {
    const areas = TrackArea.fromKeys(
      [
        { position: 1, value: 0 },
        { position: 2, value: 10 },
        { position: 3, value: 20 },
        { position: 4, value: 30 },
      ],
      tweenNum
    )
    expect(areas[0].getPosition(0)).toBe(0)
    expect(areas[0].getPosition(1)).toBe(10)
    expect(areas[1].getPosition(0)).toBe(10)
    expect(areas[1].getPosition(1)).toBe(20)
    expect(areas[2].getPosition(0)).toBe(20)
    expect(areas[2].getPosition(1)).toBe(30)
    expect(areas[3]).toBeUndefined()
  })
  it.todo("fromKeys gives an exception if there is less than two keys")
  it.todo("fromKeys")
})
