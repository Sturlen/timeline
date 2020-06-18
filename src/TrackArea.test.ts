import { TrackArea } from "./TrackArea"
import { tweenNum } from "./TweenableTypes/TweenableNumber"

describe(".fromKeys", () => {
  it("with two keys, creates a single area", () => {
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
  it("with four keys, creates three areas", () => {
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
  it.todo("gives an exception if there is less than two keys")
  it.todo("fromKeys sorts keys by position")
})

describe("getValue", () => {
  it("at a progress equal or lower than start, return start value", () => {
    const area = new TrackArea(
      { position: 1, value: 5 },
      { position: 2, value: 10 },
      tweenNum
    )
    expect(area.getValue(0)).toEqual(5)
    expect(area.getValue(1)).toEqual(5)
  })
  it("at a progress equal or higher than end, return end value", () => {
    const area = new TrackArea(
      { position: 1, value: 5 },
      { position: 2, value: 10 },
      tweenNum
    )
    expect(area.getValue(2)).toEqual(10)
    expect(area.getValue(3)).toEqual(10)
  })
  it("at a progress within start and end, return the blended value", () => {
    const area = new TrackArea(
      { position: 1, value: 0 },
      { position: 2, value: 10 },
      tweenNum
    )
    expect(area.getValue(1.25)).toEqual(2.5)
    expect(area.getValue(1.5)).toEqual(5)
    expect(area.getValue(1.75)).toEqual(7.5)
  })
})
