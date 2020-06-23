import Color from "color"

describe("Creating a color object", () => {
  it("Creates a color from seperate RGB values", () => {
    const col = Color.rgb(100, 150, 200)
    expect(col.red()).toEqual(100)
    expect(col.green()).toEqual(150)
    expect(col.blue()).toEqual(200)
  })
  it("Limits inputs between 0 and 255", () => {
    const col = Color.rgb(-100, 100, 555)
    expect(col.red()).toEqual(0)
    expect(col.green()).toEqual(100)
    expect(col.blue()).toEqual(255)
  })
  it("A color value of undef, null, NaN, -Infinity and Infinity should be zero", () => {
    const col1 = Color.rgb(undefined, null, -Infinity)

    expect(col1.red()).toEqual(0)
    expect(col1.green()).toEqual(0)
    expect(col1.blue()).toEqual(0)

    const col2 = Color.rgb(undefined, null, +Infinity)
    expect(col2.red()).toEqual(0)
    expect(col2.green()).toEqual(0)
    expect(col2.blue()).toEqual(0)
  })
  it("Returns NaN when given NaN", () => {
    const col = Color.rgb(NaN, 0, 0)
    expect(col.red()).toBeNaN()
  })
  it("Can be created from an Array", () => {
    const col1 = Color([0, 100, 255])
    expect(col1.red()).toEqual(0)
    expect(col1.green()).toEqual(100)
    expect(col1.blue()).toEqual(255)
  })
  it("Provides the RGB values in an array", () => {
    const col1 = Color.rgb(-1, 150, 500)
    const rgb = col1.rgb().array()
    expect(rgb[0]).toEqual(0)
    expect(rgb[1]).toEqual(150)
    expect(rgb[2]).toEqual(255)
  })
  it("Provides the RGB has a hex value", () => {
    const col1 = Color([0, 100, 255])
    expect(col1.hex()).toEqual("#0064FF")
  })
})
