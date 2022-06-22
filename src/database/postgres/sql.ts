export const pgFindEnumTables = (EnumTablePrefix: string) => `
        select table_schema, table_name
          from information_schema.tables
            where table_name like '${EnumTablePrefix}%'
              and table_schema not in ('information_schema', 'pg_catalog')
            and table_type = 'BASE TABLE'
          order by table_name,
        table_schema;
      `

type pgFindEnumTableValuesT = {
  EnumTableName: string; 
  EnumTableColum: string;
}

export const pgFindEnumTableValues = ({EnumTableName, EnumTableColum}: pgFindEnumTableValuesT) => 
   `select ${EnumTableColum} from ${EnumTableName}`
