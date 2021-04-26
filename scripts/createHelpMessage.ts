import { writeFile } from "fs/promises";
import { getCommands } from "../src/utils/getCommands";

(async () => {
  let helpMessage = "xacti's commands list:\n";
  const commands = await Promise.all(await getCommands());
  commands.flatMap((command) => {
    helpMessage += `${command.name.padEnd(10, " ")}: ${command.description}${"\n"}`;
  });
  writeFile(`${process.cwd()}/assets/helpMessage`, helpMessage.trimEnd());
})();
