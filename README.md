
# prisma enum value generator

This tool allows you to get the value of the enum table from prisma.


## Installation

Install @redredgroup/prisma-enum-generator with npm OR yarn

```bash
  npm install -D @redredgroup/prisma-enum-generator
  //or
  yarn add -D @redredgroup/prisma-enum-generator
```
    
    
## Usage/Examples

Please add enum module as below.

```prisma
generator client {
  provider = "prisma-client-js"
}

generator enum {
  provider = "node node_modules/@redredgroup/prisma-enum-generator"
  output = "./generated"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

```bash
//And 
npx prisma db pull
//Build
npx prisma generate
```

Done!
## Environment Variables

The two options below are optional, but can be modified if the properties below and the table names used are different.

`ENUM_PREFIX` enum table start prefix

`ENUM_TABLE_COLUMN` Value column for table enum (Default: value)


## Warning
v0.0.1 version only supports postgres SQL relational databases. Please note.

## License

[MIT](https://choosealicense.com/licenses/mit/)

