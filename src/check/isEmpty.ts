type objectProp = Record<string, unknown> | unknown[]

const isArray = (element: objectProp): boolean => Array.isArray(element)

export function isEmpty (object: unknown): boolean {
  const safeObject = (object as objectProp) || {}

  const isCountable =
    safeObject && (safeObject instanceof Object || isArray(safeObject))

  if (!isCountable) return true

  return !Object.entries(safeObject).length
}
