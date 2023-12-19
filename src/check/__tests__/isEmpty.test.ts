import { isEmpty } from '../isEmpty'

describe('isEmpty', () => {
  test('Should return false for a no empty array', () => {
    const element = ['first item']
    expect(isEmpty(element)).toBe(false)
  })

  test('Should return false for a non empty object', () => {
    const element = { name: 'john' }
    expect(isEmpty(element)).toBe(false)
  })

  test('Should return false for an empty matrix', () => {
    const element = [[]]
    expect(isEmpty(element)).toBe(false)
  })

  test('Should return true for an empty array', () => {
    const element: unknown = []
    expect(isEmpty(element)).toBeTruthy()
  })

  test('Should return true for an empty object', () => {
    const element: unknown = {}
    expect(isEmpty(element)).toBeTruthy()
  })
})
