/**
 * Blends between multple keys or states, pased on their positions on a line
 */
export default class Track<T> {
  private start: number
  private end: number
  private keys: TrackKey<T>[]
  /** Areas in ascending order */
  private areas: TrackArea<T>[]

  constructor(start: number, end: number, keys: TrackKey<T>[]) {
    this.start = start
    this.end = end
    this.keys = sortKeysAsceding(keys)
    this.areas = makeAreas(keys)
  }

  public getKeys(): TrackKey<T>[] {
    return this.keys
  }

  public getArea(progress: number): TrackArea<T> {
    //Assume areas are ascending
    for (const area of this.areas) {
      if (progress < area.start) {
        return
      }
    }
  }

  public getValue(progress: number): T {
    return this.keys[0].value
  }
}

export function makeAreaList<T>(keys: TrackKey<T>[]): TrackArea<T>[] {
  const areas: TrackArea<T>[] = []
  keys.forEach((key) => {
    areas.push()
  })
  return areas
}

function sortKeysAsceding<T>(keys: TrackKey<T>[]): TrackKey<T>[] {
  return keys.sort((a, b) => a.position - b.position)
}
