import { RGBColor } from "./Color"

describe("Creating a color object", () => {
  it("Creates a color from seperate RGB values", () => {
    const col = new RGBColor(100, 150, 200)
    expect(col.red).toEqual(100)
    expect(col.green).toEqual(150)
    expect(col.blue).toEqual(200)
  })
})
