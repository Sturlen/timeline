import { Tweenable, TweenFunc } from "../Tweenable"

export class TweenableNumber extends Tweenable<number> {
  constructor(
    start: number,
    end: number,
    tweener: TweenFunc<number> = tweenNum
  ) {
    super(start, end, tweener)
  }
}

export const tweenNum: TweenFunc<number> = (start, end, factor) => {
  return (1 - factor) * start + factor * end
}
