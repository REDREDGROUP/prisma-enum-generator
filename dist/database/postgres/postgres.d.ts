import { getPostgresEnumTableValueT, tableEnumDataT } from "./type";
export declare const getPostgresEnumTableValue: ({ databaseUrl, enumPrefix, enumTableColumn, outputPath }: getPostgresEnumTableValueT) => Promise<tableEnumDataT[] | undefined>;
