import { RGBColor } from "./Color"

describe("Creating a color object", () => {
  it("Creates a color from seperate RGB values", () => {
    const col = new RGBColor(100, 150, 200)
    expect(col.red).toEqual(100)
    expect(col.green).toEqual(150)
    expect(col.blue).toEqual(200)
  })
  it("Limits inputs between 0 and 255", () => {
    const col = new RGBColor(-100, 100, 555)
    expect(col.red).toEqual(0)
    expect(col.green).toEqual(100)
    expect(col.blue).toEqual(255)
  })
  it("Rounds inputs to nearest ints", () => {
    const col = new RGBColor(0.111213, 23.33333, 90.909)
    expect(col.red).toEqual(0)
    expect(col.green).toEqual(23)
    expect(col.blue).toEqual(91)
  })
  it.todo(
    "Anything larger than or equal to zero becomes zero (undef, null, NaN"
  )
})
