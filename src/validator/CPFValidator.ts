const patterns_black_list = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999'
]

export function CPFValidation(value: string) {
  if (!value) return false

  let cpf = String(value).replace(/[^\d]+/g, '')

  if (patterns_black_list.includes(cpf) || cpf.length !== 11) return false

  let checksum, mod
  checksum = 0

  for (let i = 1; i <= 9; i++) checksum = checksum + parseInt(cpf.substring(i - 1, i)) * (11 - i)
  mod = (checksum * 10) % 11

  if (mod == 10 || mod == 11) mod = 0
  if (mod != parseInt(cpf.substring(9, 10))) return false

  checksum = 0
  for (let i = 1; i <= 10; i++) checksum = checksum + parseInt(cpf.substring(i - 1, i)) * (12 - i)
  mod = (checksum * 10) % 11

  if (mod == 10 || mod == 11) mod = 0
  if (mod != parseInt(cpf.substring(10, 11))) return false

  return true
}