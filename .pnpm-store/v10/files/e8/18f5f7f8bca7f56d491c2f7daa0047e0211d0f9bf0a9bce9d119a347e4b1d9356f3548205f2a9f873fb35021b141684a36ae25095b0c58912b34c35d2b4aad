/* eslint-disable @typescript-eslint/no-explicit-any */

type ComparatorFunction = (left: string, right: string) => number

interface Options {
  readonly sortOrder?: readonly string[] | ComparatorFunction
}

export interface SortPackageJson {
  /**
   * Sort packageJson object.
   *
   * @param packageJson - A packageJson.
   * @param options - An options object.
   * @returns Sorted packageJson object.
   */
  <T extends Record<any, any>>(packageJson: T, options?: Options): T

  /**
   * Sort packageJson string.
   *
   * @param packageJson - A packageJson string.
   * @param options - An options object.
   * @returns Sorted packageJson string.
   */
  (packageJson: string, options?: Options): string
}

declare const sortPackageJsonDefault: SortPackageJson
export default sortPackageJsonDefault

export const sortPackageJson: SortPackageJson
export const sortOrder: string[]
