import { generatorHandler } from "@prisma/generator-helper";
import { getPostgresEnumTableValue } from "./database";

generatorHandler({
  onManifest() {
    return {
      defaultOutput: "./types",
      prettyName: "Prisma Enum Value Generator",
    };
  },

  async onGenerate(options) {
      const outputPath = options.generator.output?.value;
      const dbProviders = options.datasources[0].provider
      const dbUrl = options.datasources[0].url.value
      const enumPrefix = process.env.ENUM_PREFIX || 'enum_';
      const enumTableColumn = process.env.ENUM_TABLE_COLUMN || 'value'

      if(!outputPath) {
        throw new Error('Enum Exports Failed.')
      }
  
      switch(dbProviders) {
        case "postgresql" : 
          await getPostgresEnumTableValue({
            databaseUrl: dbUrl,
            enumPrefix,
            enumTableColumn,
            outputPath
          })
          break;
        default : 
        throw new Error('This version only supports the postgres SQL database.')
      }
    }
  })

