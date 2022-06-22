import prettier from "prettier";
import fs from "fs";
import path from "path";
import { tableEnumDataT } from "../database";
import { firstUpper } from "./tools";

export const enumGenrator = async (enumValues: tableEnumDataT[], enumPath: string) => {
  await fs.promises.mkdir(enumPath, {
    recursive: true,
  });
  fs.writeFileSync(path.join(enumPath, "enums.d.ts"), '')
  enumValues.forEach(async (item)=> {
    try {
    const enumLists = item.enumData.map((enumValue)=>{
      return `"${firstUpper(enumValue)}" = "${enumValue}"\n`
    })

    const tableResult = `
      export enum ${firstUpper(item.tableName)}_Enum {\n
        ${enumLists}
      }`;

    const prettierEnum = prettier.format(tableResult, {
      trailingComma: "es5",
      tabWidth: 2,
      semi: true,
      singleQuote: false,
      useTabs: false,
      parser: "typescript",
    })

    fs.appendFileSync(path.join(enumPath, "enums.d.ts"),prettierEnum )
  } catch (e) {
   console.error(e)
  }
  })
}


