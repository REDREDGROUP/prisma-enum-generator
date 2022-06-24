import { getPostgresEnumTableValueT, tableEnumDataT } from "./type";
export declare const getPostgresEnumTableValue: ({ databaseUrl, enumPrefix, enumTableColumn, outputPath, enumFileName }: getPostgresEnumTableValueT) => Promise<tableEnumDataT[] | undefined>;
