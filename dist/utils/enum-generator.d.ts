import { tableEnumDataT } from "../database";
declare type EnumGeneratorT = {
    enumValues: tableEnumDataT[];
    enumPath: string;
    enumFileName: string;
};
export declare const enumGenrator: ({ enumValues, enumPath, enumFileName }: EnumGeneratorT) => Promise<void>;
export {};
