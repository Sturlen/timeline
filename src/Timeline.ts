import { Tweenable, TweenFunc } from "./Tweenable"

interface TimelineArgs {
  begin: number
  end: number
  keys: TimelineKey[]
}

export interface TimelineKey<T> {
  label?: string
  position: number
  value: T
}

export interface Timeline {
  getValue(progress: number): number
}

class Area {
  public getStart: () => number
  public getEnd: () => number
  private start_key: TimelineKey
  private end_key: TimelineKey
}

/**
 * Timelines work on arbitrary time or progress and tween between differtent keys.
 */
export default function Timeline({ begin, end, keys }: TimelineArgs): Timeline {
  /**
   * Sorted by value, lowest first
   */
  const sorted_keys: TimelineKey[] = keys.sort((a, b) => a.value - b.value)

  const areas: Area[] = []
  sorted_keys.forEach((key, i) => {
    const is_last_key = i + 1 === sorted_keys.length

    if (!is_last_key) {
      const area = {
        start: key.value,
        end: sorted_keys[i + 1].value,
      }
      areas.push(area)
    }
  })

  const getArea = (pos: number): Area => {
    // eslint-disable-next-line no-undef
    console.log(areas)
    return areas[0]
  }

  return {
    getValue: (p) => {
      const area = getArea(p)
      return tweenNum(area.start, area.end, p)
    },
  }
}

class TrackArea<T> {
  private readonly start_pos: number
  private readonly end_pos: number
  constructor(start_key: TimelineKey<T>, end_key: number, tween: Tweener<T>) {
    this.start_pos = start_position
    this.end_pos = end_position
  }
}
