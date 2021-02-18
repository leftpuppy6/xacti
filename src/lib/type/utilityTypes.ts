/**
 * SetSameTypeObject forces an object to have the type in Key and Value.
 * 
 * @example
 * Here's a simple example:
 * ```
 * type Commands = "invite" | "help"
 * 
 * const commands: SetSameTypeObject<Commands> = {
 *   invite: "invite",
 *   help: "help",
 *   hi: "hi", // error
 * };
 * ```
 */
export type SetSameTypeObject<T extends string> = {
  [P in T]: P
}
