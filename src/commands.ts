import {SetSameTypeObject} from "./lib/type/utilityTypes"

/**
 * Commands represent the xacti commands.
 * 
 * @internal this type might move to a type file.
 */
type Commands = "invite" | "help"

export const commands: SetSameTypeObject<Commands> = {
  invite: "invite",
  help: "help",
};
