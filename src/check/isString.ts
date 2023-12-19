import { typeOf } from '..'

export function isString (s: string): boolean {
  return typeOf(s) === 'string'
}
