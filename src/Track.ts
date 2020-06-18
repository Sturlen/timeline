/**
 * Represents a single point in time, wtih a given state
 */
export interface TrackKey<T> {
  position: number
  value: T
}

export interface NumberKey extends TrackKey<number> {
  value: number
}

/**
 * Blends between multple keys or states, pased on their positions on a line
 */
export default class Track<T> {
  private start: number
  private end: number
  private keys: TrackKey<T>[]
  constructor(start: number, end: number, keys: TrackKey<T>[]) {
    this.start = start
    this.end = end
    this.keys = sortKeysAsceding(keys)
  }

  public getKeys(): TrackKey<T>[] {
    return this.keys
  }

  public getArea(progress: number): TrackArea<T> {}

  public getValue(progress: number): T {
    return this.keys[0].value
  }
}

function sortKeysAsceding<T>(keys: TrackKey<T>[]): TrackKey<T>[] {
  return keys.sort((a, b) => a.position - b.position)
}
