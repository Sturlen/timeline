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

export function sortKeysAsceding<T>(keys: TrackKey<T>[]): TrackKey<T>[] {
  return keys.sort((a, b) => a.position - b.position)
}
