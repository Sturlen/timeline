export interface TweenFunc<T> {
  (start: T, end: T, factor: number): T
}

/**
 * Tween between two values, given a factor between 0 and 1.
 */
export abstract class Tweenable<T> {
  constructor(start: T, end: T, tweener: TweenFunc<T>) {
    this.start = start
    this.end = end
    this.tweener = tweener
  }
  public readonly start: T
  public readonly end: T
  public readonly tweener: TweenFunc<T>
  public getPosition(factor: number): T {
    return this.tweener(this.start, this.end, factor)
  }
}
