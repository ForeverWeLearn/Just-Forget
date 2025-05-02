export function charsCount(input: string): number {
  const matches = input.match(/[a-zA-Z0-9]/g);
  return matches ? matches.length : 0;
}
