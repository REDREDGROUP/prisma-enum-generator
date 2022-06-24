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
      const dbUrl = options.datasources[0].url.value || process.env[options.datasources[0].url.fromEnvVar || 0]
      const enumPrefix = process.env.ENUM_PREFIX || 'enum_';
      const enumTableColumn = process.env.ENUM_TABLE_COLUMN || 'value'
      const enumFileName = process.env.ENUM_FILE_NAME ? process.env.ENUM_FILE_NAME+'.ts' : "enums.ts"
      if(!outputPath) {
        throw new Error('Enum Exports Failed.')
      }

      if(!dbUrl) {
        throw new Error('SQL address is not specified as string or environment variable.')
      }
  
      switch(dbProviders) {
        case "postgresql" : 
          await getPostgresEnumTableValue({
            databaseUrl: dbUrl,
            enumPrefix,
            enumTableColumn,
            enumFileName,
            outputPath
          })
          break;
        default : 
        throw new Error('This version only supports the postgres SQL database.')
      }
    }
  })

