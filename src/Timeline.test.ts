import Timeline, { TimelineKey } from "./Timeline"
describe("The Timeline object", () => {
  it("With Keys A at 0 and B at 2, at 50% progress, value should be 1", () => {
    const a: TimelineKey = {
      position: 0,
      value: 0,
    }
    const b: TimelineKey = {
      position: 1,
      value: 2,
    }
    const keys = [a, b]
    const t = Timeline({ begin: 0, end: 2, keys })
    expect(t.getValue(0.5)).toBe(1)
  })
  it("With Keys A at -1, B at 1 and C at 3, at 75% progress, value should be 1", () => {
    const a: TimelineKey = {
      position: 0,
      value: -1,
    }
    const b: TimelineKey = {
      position: 1,
      value: 3,
    }
    const c: TimelineKey = {
      position: 2,
      value: 5,
    }
    const keys = [a, b, c]
    const t = Timeline({ begin: -1, end: 2, keys })
    expect(t.getValue(0.75)).toBe(4)
  })
})
