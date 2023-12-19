import { isFunction } from '../isFunction'

describe('isFunction', () => {
  test.each([
    ['some string', false],
    [4, false],
    [true, false]
  ])('should return falsy if the prop is not a function', (element, expectedResult) => {
    expect(isFunction(element)).toBe(expectedResult)
  })

  test.each([
    [() => {}],
    [function () {}]
  ])('should return true if the prop is a function', (element) => {
    expect(isFunction(element)).toBe(true)
  })
})
