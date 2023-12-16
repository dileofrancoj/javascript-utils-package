import type { Nulleable } from '@/types/Nulleable'

export function isNullOrUndefined<T> (value: Nulleable<T>): value is (null | undefined) {
  return value === null || value === undefined
}
