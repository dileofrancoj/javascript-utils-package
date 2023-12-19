import { isString } from '@/check/isString'

export function includes (stringValue: string, searchableValue: string): boolean {
  if (isString(stringValue)) {
    return stringValue.includes(searchableValue)
  }

  return false
}
