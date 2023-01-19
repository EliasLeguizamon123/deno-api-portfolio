
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/index')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.8.1
 * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
 */
Prisma.prismaVersion = {
  client: "4.8.1",
  engine: "d6e67a83f971b175a593ccc12e15c4a757f93ffe"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "generated/client",
    "client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ProjectsScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  description: 'description',
  images: 'images',
  tools: 'tools',
  demo: 'demo',
  repo: 'repo'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SectionsScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TecnologiesScalarFieldEnum = makeEnum({
  id: 'id',
  logo: 'logo',
  name: 'name',
  url: 'url'
});

exports.Prisma.TimelineScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  cardTitle: 'cardTitle',
  url: 'url',
  cardSubtitle: 'cardSubtitle',
  cardDetailedText: 'cardDetailedText'
});


exports.Prisma.ModelName = makeEnum({
  sections: 'sections',
  tecnologies: 'tecnologies',
  projects: 'projects',
  timeline: 'timeline'
});

const compressedDMMF = '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='
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/frontend/Desktop/work/denoTest/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.8.1",
  "engineVersion": "d6e67a83f971b175a593ccc12e15c4a757f93ffe",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBwcmV2aWV3RmVhdHVyZXMgPSBbImRlbm8iXQogIG91dHB1dCA9ICIuLi9nZW5lcmF0ZWQvY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJtb25nb2RiIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9CgoKLy8gY29tbWFuZCB0byBhZGQgbmV3IG1vZGVscyBpbiBwcmlzbWE6Ci8vICAgICAgZGVubyBydW4gLUEgLS11bnN0YWJsZSBucG06cHJpc21hIGRiIHB1c2ggIAovLyAgICAgIGRlbm8gcnVuIC1BIC0tdW5zdGFibGUgbnBtOnByaXNtYSBnZW5lcmF0ZQoKbW9kZWwgc2VjdGlvbnMgewogIGlkICAgIFN0cmluZyBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKICB0aXRsZSBTdHJpbmcKfQoKbW9kZWwgdGVjbm9sb2dpZXMgewogIGlkICAgU3RyaW5nIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZAogIGxvZ28gU3RyaW5nCiAgbmFtZSBTdHJpbmcKICB1cmwgIFN0cmluZwp9Cgptb2RlbCBwcm9qZWN0cyB7CiAgaWQgICAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkCiAgdGl0bGUgICAgICAgU3RyaW5nICAgQGRlZmF1bHQoIiIpCiAgZGVzY3JpcHRpb24gU3RyaW5nICAgQGRlZmF1bHQoIiIpCiAgaW1hZ2VzICAgICAgU3RyaW5nW10KICB0b29scyAgICAgICBTdHJpbmdbXQogIGRlbW8gICAgICAgIFN0cmluZyAgIEBkZWZhdWx0KCIiKQogIHJlcG8gICAgICAgIFN0cmluZyAgIEBkZWZhdWx0KCIiKQp9Cgptb2RlbCB0aW1lbGluZSB7CiAgaWQgICAgICAgICAgICAgICBTdHJpbmcgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkCiAgdGl0bGUgICAgICAgICAgICBTdHJpbmcgQGRlZmF1bHQoIiIpLy90aGlzIGlzIGEgZGF0ZSwgeWVhciB0byB5ZWFyCiAgY2FyZFRpdGxlICAgICAgICBTdHJpbmcgQGRlZmF1bHQoIiIpLy90aGlzIGlzIHRoZSB0aXRsZSBjb21wYW55CiAgdXJsICAgICAgICAgICAgICBTdHJpbmcgQGRlZmF1bHQoIiIpLy90aGlzIGlzIHRoZSB1cmwgb2YgdGhlIGNvbXBhbnkKICBjYXJkU3VidGl0bGUgICAgIFN0cmluZyBAZGVmYXVsdCgiIikvL3RoaXMgaXMgbXkgcG9zaXRpb24gbmFtZQogIGNhcmREZXRhaWxlZFRleHQgU3RyaW5nIEBkZWZhdWx0KCIiKS8vdGhpcyBpcyB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHBvc2l0aW9uCn0='
config.inlineSchemaHash = '7bb152d463e369abe8bd5c5e04ee64142811b052752ba78071c3417c55b384d5'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}


const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

