export interface Color {
  red: number
  green: number
  blue: number
  getRGB(): [number, number, number]
}

/**
 * Color represeted by 0 to 255 for Red, Green and Blue values.
 */
export class RGBColor implements Color {
  constructor(red: number, green: number, blue: number) {
    this.red = clampRGBValues(red)
    this.green = clampRGBValues(green)
    this.blue = clampRGBValues(blue)
  }

  public readonly red: number
  public readonly green: number
  public readonly blue: number

  public getRGB(): [number, number, number] {
    return [this.red, this.green, this.blue]
  }
}

const RGB_MIN = 0
const RGB_MAX = 255

/** Clamps colors to values a browser will accept*/
const clampRGBValues = (val: number): number => {
  return Math.min(Math.max(Math.round(val), RGB_MIN), RGB_MAX)
}
