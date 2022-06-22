"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgFindEnumTableValues = exports.pgFindEnumTables = void 0;
var pgFindEnumTables = function (EnumTablePrefix) { return "\n        select table_schema, table_name\n          from information_schema.tables\n            where table_name like '".concat(EnumTablePrefix, "%'\n              and table_schema not in ('information_schema', 'pg_catalog')\n            and table_type = 'BASE TABLE'\n          order by table_name,\n        table_schema;\n      "); };
exports.pgFindEnumTables = pgFindEnumTables;
var pgFindEnumTableValues = function (_a) {
    var EnumTableName = _a.EnumTableName, EnumTableColum = _a.EnumTableColum;
    return "select ".concat(EnumTableColum, " from ").concat(EnumTableName);
};
exports.pgFindEnumTableValues = pgFindEnumTableValues;
//# sourceMappingURL=sql.js.map