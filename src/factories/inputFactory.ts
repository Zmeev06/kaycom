export type InputType = 'text' | 'phone' | 'checkbox' | 'range' | 'number'

export function formatPhone(input: string): string {
  const digits = input.replace(/\D/g, '').slice(0, 10)

  if (digits.length === 0) return ''

  let formatted = ''

  if (digits.length > 0) formatted += '+7'

  if (digits.length > 1) formatted += ` (${digits.slice(1, 4)}`
  if (digits.length >= 4) formatted += `) ${digits.slice(4, 7)}`
  if (digits.length >= 7) formatted += `-${digits.slice(7, 9)}`
  if (digits.length >= 9) formatted += `-${digits.slice(9, 10)}`

  return formatted
}

interface InputConfig {
  type: InputType
  label: string
  placeholder?: string
  values?: number[]
  required?: boolean
}

export function createInput(
  type: InputType,
  label: string,
  placeholder?: string,
  required?: boolean,
  values?: number[],
): InputConfig {
  return { type, label, placeholder, required, values }
}
