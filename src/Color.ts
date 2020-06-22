export interface Color {
  red: number
  green: number
  blue: number
  getRGB(): [number, number, number]
}

type RGBInput = number | null | undefined

/**
 * Color represeted by 0 to 255 for Red, Green and Blue values.
 */
export class RGBColor implements Color {
  constructor(red: RGBInput, green: RGBInput, blue: RGBInput) {
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

  public static fromArray(arr: [RGBInput, RGBInput, RGBInput]): RGBColor {
    return new RGBColor(arr[0], arr[1], arr[2])
  }
}

const RGB_MIN = 0
const RGB_MAX = 255

/** Clamps colors to values a browser will accept*/
const clampRGBValues = (RGB_val: RGBInput): number => {
  const num = typeof RGB_val === "number" ? RGB_val : 0
  const non_nan_num = isNaN(num) ? 0 : num

  return Math.min(Math.max(Math.round(non_nan_num), RGB_MIN), RGB_MAX)
}
