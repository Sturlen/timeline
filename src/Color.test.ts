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
  it(" A color value of undef, null, NaN, -Infinity should be the minimi. Infinity should be the maximum", () => {
    const col1 = new RGBColor(undefined, null, -Infinity)
    const col2 = new RGBColor(NaN, null, +Infinity)
    expect(col1.red).toEqual(0)
    expect(col1.green).toEqual(0)
    expect(col1.blue).toEqual(0)
    expect(col2.red).toEqual(0)
    expect(col2.green).toEqual(0)
    expect(col2.blue).toEqual(255)
  })
  it("Can be created from an Array", () => {
    const col1 = RGBColor.fromArray([0, 100, 255])
    expect(col1.red).toEqual(0)
    expect(col1.green).toEqual(100)
    expect(col1.blue).toEqual(255)
  })
  it("Provides the RGB values in an array", () => {
    const col1 = new RGBColor(-1, 150, 500)
    const rgb = col1.getRGB()
    expect(rgb[0]).toEqual(0)
    expect(rgb[1]).toEqual(150)
    expect(rgb[2]).toEqual(255)
  })
})
