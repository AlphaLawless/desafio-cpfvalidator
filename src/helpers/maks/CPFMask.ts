export const CPFMask = (value: string) => {
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4') 
}