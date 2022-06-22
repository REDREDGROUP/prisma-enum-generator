export type getPostgresEnumTableValueT = {
  databaseUrl: string;
  enumPrefix: string 
  enumTableColumn: string;
  outputPath: string
}

export type tableEnumDataT = {
  tableName: string,
  enumData: string[]
}
