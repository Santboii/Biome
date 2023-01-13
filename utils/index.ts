export type noop = () => Promise<void> | void
export function noop(): void {}

export const camelToReadable = (camelCase: string): string =>  {
  let result = camelCase.replace(/[A-Z]/g, (match) => ` ${match}`)
  return result.charAt(0).toUpperCase() + result.slice(1)
}
