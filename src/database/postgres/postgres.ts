import { Pool } from "pg"
import { enumGenrator } from "../../utils"
import { pgFindEnumTables, pgFindEnumTableValues } from "./sql"
import { getPostgresEnumTableValueT, tableEnumDataT } from "./type"

export const getPostgresEnumTableValue = async({ databaseUrl, enumPrefix, enumTableColumn, outputPath, enumFileName }: getPostgresEnumTableValueT) => {
  const pool = new Pool({
    connectionString: databaseUrl,
  })
  const getEnumTables = await pool.query(pgFindEnumTables(enumPrefix))
  const tableEnumData: tableEnumDataT[] = []
    if(getEnumTables.rows) {
      for (const item of getEnumTables.rows){
        const getEnumValues = await pool.query(
          pgFindEnumTableValues({
                EnumTableName: item.table_name,
                EnumTableColum: enumTableColumn
              })
            )
          tableEnumData.push({
            tableName : item.table_name,
            enumData: getEnumValues.rows.map((item)=> { return  item[enumTableColumn] })
          })
        }
        if(!tableEnumData.length) {
          throw new Error('Enum Table does not exist.')
        }
        await enumGenrator({
          enumValues: tableEnumData, 
          enumPath: outputPath,
          enumFileName
        });
      } else {
      return tableEnumData
      }
}