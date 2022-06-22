export declare const pgFindEnumTables: (EnumTablePrefix: string) => string;
declare type pgFindEnumTableValuesT = {
    EnumTableName: string;
    EnumTableColum: string;
};
export declare const pgFindEnumTableValues: ({ EnumTableName, EnumTableColum }: pgFindEnumTableValuesT) => string;
export {};
