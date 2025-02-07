export function findClosestValue(inputValue: number, values: number[]): number {
  const closestIndex = values.reduce(
    (prev, curr, index) =>
      Math.abs(curr - inputValue) < Math.abs(values[prev] - inputValue) ? index : prev,
    0,
  )
  return values[closestIndex]
}

export function calculateStep(minValue: number, maxValue: number, values: number[]): number {
  if (values.length < 2) return 1
  const range = maxValue - minValue
  return range / (values.length - 1)
}

export function getLabelPosition(index: number, valuesLength: number): string {
  const percent = (index / (valuesLength - 1)) * 100
  return `${percent}%`
}
