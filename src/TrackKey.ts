/**
 * Represents a single point in time, wtih a given state
 */
export default interface TrackKey<T> {
  position: number
  value: T
}

export interface NumberKey extends TrackKey<number> {
  value: number
}
