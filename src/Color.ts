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
    this.red = red
    this.green = green
    this.blue = blue
  }

  public red: number
  public green: number
  public blue: number

  public getRGB(): [number, number, number] {
    return [this.red, this.green, this.blue]
  }
}
