import { CPFValidation } from '@/validator/CPFValidator'
import { expect, test, describe } from 'vitest'

describe('validator CPF suite', () => {
  test('validate my CPF validator in vitest with valid CPF', () => {
    const input = "762.970.174-84";
    expect(CPFValidation(input)).toBe(true)
  })

  test('must return false an invalid CPF with all chars the same', () => {
    const input = '11111111111';
    expect(CPFValidation(input)).toBe(false);
  });

  test('must return false a CPF with format invalid', () => {
    const input = 'abc123def45';
    expect(CPFValidation(input)).toBe(false);
  });
})