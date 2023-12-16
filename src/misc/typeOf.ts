import type { Nulleable } from '@/types/Nulleable'

export function typeOf<T> (value: Nulleable<T>): string {
  if (value === null) return 'null'
  if (value === undefined) return 'undefined'
  return typeof value
}
