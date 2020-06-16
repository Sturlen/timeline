interface Tweener<T> {
  (start: T, end: T, factor: number): T
}

export const tweenNum: Tweener<number> = (start, end, factor) => {
  return (1 - factor) * start + factor * end
}
