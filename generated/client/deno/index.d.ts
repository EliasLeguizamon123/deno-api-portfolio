
/**
 * Client
**/

import * as runtime from '.././runtime/index.d.ts';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model sections
 * 
 */
export type sections = {
  id: string
  title: string
}

/**
 * Model tecnologies
 * 
 */
export type tecnologies = {
  id: string
  logo: string
  name: string
  url: string
}

/**
 * Model projects
 * 
 */
export type projects = {
  id: string
  title: string
  description: string
  images: string[]
  tools: string[]
  demo: string
  repo: string
}

/**
 * Model timeline
 * 
 */
export type timeline = {
  id: string
  title: string
  cardTitle: string
  url: string
  cardSubtitle: string
  cardDetailedText: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sections
 * const sections = await prisma.sections.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sections
   * const sections = await prisma.sections.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number}): Promise<R>;

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>;

      /**
   * `prisma.sections`: Exposes CRUD operations for the **sections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.sections.findMany()
    * ```
    */
  get sections(): Prisma.sectionsDelegate<GlobalReject>;

  /**
   * `prisma.tecnologies`: Exposes CRUD operations for the **tecnologies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tecnologies
    * const tecnologies = await prisma.tecnologies.findMany()
    * ```
    */
  get tecnologies(): Prisma.tecnologiesDelegate<GlobalReject>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.projectsDelegate<GlobalReject>;

  /**
   * `prisma.timeline`: Exposes CRUD operations for the **timeline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timelines
    * const timelines = await prisma.timeline.findMany()
    * ```
    */
  get timeline(): Prisma.timelineDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.1
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    sections: 'sections',
    tecnologies: 'tecnologies',
    projects: 'projects',
    timeline: 'timeline'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model sections
   */


  export type AggregateSections = {
    _count: SectionsCountAggregateOutputType | null
    _min: SectionsMinAggregateOutputType | null
    _max: SectionsMaxAggregateOutputType | null
  }

  export type SectionsMinAggregateOutputType = {
    id: string | null
    title: string | null
  }

  export type SectionsMaxAggregateOutputType = {
    id: string | null
    title: string | null
  }

  export type SectionsCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type SectionsMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type SectionsMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type SectionsCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type SectionsAggregateArgs = {
    /**
     * Filter which sections to aggregate.
     * 
    **/
    where?: sectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     * 
    **/
    orderBy?: Enumerable<sectionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: sectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sections
    **/
    _count?: true | SectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionsMaxAggregateInputType
  }

  export type GetSectionsAggregateType<T extends SectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSections[P]>
      : GetScalarType<T[P], AggregateSections[P]>
  }




  export type SectionsGroupByArgs = {
    where?: sectionsWhereInput
    orderBy?: Enumerable<sectionsOrderByWithAggregationInput>
    by: Array<SectionsScalarFieldEnum>
    having?: sectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionsCountAggregateInputType | true
    _min?: SectionsMinAggregateInputType
    _max?: SectionsMaxAggregateInputType
  }


  export type SectionsGroupByOutputType = {
    id: string
    title: string
    _count: SectionsCountAggregateOutputType | null
    _min: SectionsMinAggregateOutputType | null
    _max: SectionsMaxAggregateOutputType | null
  }

  type GetSectionsGroupByPayload<T extends SectionsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionsGroupByOutputType[P]>
            : GetScalarType<T[P], SectionsGroupByOutputType[P]>
        }
      >
    >


  export type sectionsSelect = {
    id?: boolean
    title?: boolean
  }


  export type sectionsGetPayload<S extends boolean | null | undefined | sectionsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? sections :
    S extends undefined ? never :
    S extends { include: any } & (sectionsArgs | sectionsFindManyArgs)
    ? sections 
    : S extends { select: any } & (sectionsArgs | sectionsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof sections ? sections[P] : never
  } 
      : sections


  type sectionsCountArgs = Merge<
    Omit<sectionsFindManyArgs, 'select' | 'include'> & {
      select?: SectionsCountAggregateInputType | true
    }
  >

  export interface sectionsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Sections that matches the filter.
     * @param {sectionsFindUniqueArgs} args - Arguments to find a Sections
     * @example
     * // Get one Sections
     * const sections = await prisma.sections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends sectionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, sectionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'sections'> extends True ? Prisma__sectionsClient<sectionsGetPayload<T>> : Prisma__sectionsClient<sectionsGetPayload<T> | null, null>

    /**
     * Find one Sections that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {sectionsFindUniqueOrThrowArgs} args - Arguments to find a Sections
     * @example
     * // Get one Sections
     * const sections = await prisma.sections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends sectionsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, sectionsFindUniqueOrThrowArgs>
    ): Prisma__sectionsClient<sectionsGetPayload<T>>

    /**
     * Find the first Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionsFindFirstArgs} args - Arguments to find a Sections
     * @example
     * // Get one Sections
     * const sections = await prisma.sections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends sectionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, sectionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'sections'> extends True ? Prisma__sectionsClient<sectionsGetPayload<T>> : Prisma__sectionsClient<sectionsGetPayload<T> | null, null>

    /**
     * Find the first Sections that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionsFindFirstOrThrowArgs} args - Arguments to find a Sections
     * @example
     * // Get one Sections
     * const sections = await prisma.sections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends sectionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, sectionsFindFirstOrThrowArgs>
    ): Prisma__sectionsClient<sectionsGetPayload<T>>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.sections.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.sections.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionsWithIdOnly = await prisma.sections.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends sectionsFindManyArgs>(
      args?: SelectSubset<T, sectionsFindManyArgs>
    ): PrismaPromise<Array<sectionsGetPayload<T>>>

    /**
     * Create a Sections.
     * @param {sectionsCreateArgs} args - Arguments to create a Sections.
     * @example
     * // Create one Sections
     * const Sections = await prisma.sections.create({
     *   data: {
     *     // ... data to create a Sections
     *   }
     * })
     * 
    **/
    create<T extends sectionsCreateArgs>(
      args: SelectSubset<T, sectionsCreateArgs>
    ): Prisma__sectionsClient<sectionsGetPayload<T>>

    /**
     * Create many Sections.
     *     @param {sectionsCreateManyArgs} args - Arguments to create many Sections.
     *     @example
     *     // Create many Sections
     *     const sections = await prisma.sections.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends sectionsCreateManyArgs>(
      args?: SelectSubset<T, sectionsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Sections.
     * @param {sectionsDeleteArgs} args - Arguments to delete one Sections.
     * @example
     * // Delete one Sections
     * const Sections = await prisma.sections.delete({
     *   where: {
     *     // ... filter to delete one Sections
     *   }
     * })
     * 
    **/
    delete<T extends sectionsDeleteArgs>(
      args: SelectSubset<T, sectionsDeleteArgs>
    ): Prisma__sectionsClient<sectionsGetPayload<T>>

    /**
     * Update one Sections.
     * @param {sectionsUpdateArgs} args - Arguments to update one Sections.
     * @example
     * // Update one Sections
     * const sections = await prisma.sections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends sectionsUpdateArgs>(
      args: SelectSubset<T, sectionsUpdateArgs>
    ): Prisma__sectionsClient<sectionsGetPayload<T>>

    /**
     * Delete zero or more Sections.
     * @param {sectionsDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.sections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends sectionsDeleteManyArgs>(
      args?: SelectSubset<T, sectionsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const sections = await prisma.sections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends sectionsUpdateManyArgs>(
      args: SelectSubset<T, sectionsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Sections.
     * @param {sectionsUpsertArgs} args - Arguments to update or create a Sections.
     * @example
     * // Update or create a Sections
     * const sections = await prisma.sections.upsert({
     *   create: {
     *     // ... data to create a Sections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sections we want to update
     *   }
     * })
    **/
    upsert<T extends sectionsUpsertArgs>(
      args: SelectSubset<T, sectionsUpsertArgs>
    ): Prisma__sectionsClient<sectionsGetPayload<T>>

    /**
     * Find zero or more Sections that matches the filter.
     * @param {sectionsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const sections = await prisma.sections.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: sectionsFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Sections.
     * @param {sectionsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const sections = await prisma.sections.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: sectionsAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionsCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.sections.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends sectionsCountArgs>(
      args?: Subset<T, sectionsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectionsAggregateArgs>(args: Subset<T, SectionsAggregateArgs>): PrismaPromise<GetSectionsAggregateType<T>>

    /**
     * Group by Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionsGroupByArgs['orderBy'] }
        : { orderBy?: SectionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for sections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__sectionsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * sections base type for findUnique actions
   */
  export type sectionsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the sections
     * 
    **/
    select?: sectionsSelect | null
    /**
     * Filter, which sections to fetch.
     * 
    **/
    where: sectionsWhereUniqueInput
  }

  /**
   * sections findUnique
   */
  export interface sectionsFindUniqueArgs extends sectionsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * sections findUniqueOrThrow
   */
  export type sectionsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the sections
     * 
    **/
    select?: sectionsSelect | null
    /**
     * Filter, which sections to fetch.
     * 
    **/
    where: sectionsWhereUniqueInput
  }


  /**
   * sections base type for findFirst actions
   */
  export type sectionsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the sections
     * 
    **/
    select?: sectionsSelect | null
    /**
     * Filter, which sections to fetch.
     * 
    **/
    where?: sectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     * 
    **/
    orderBy?: Enumerable<sectionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sections.
     * 
    **/
    cursor?: sectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sections.
     * 
    **/
    distinct?: Enumerable<SectionsScalarFieldEnum>
  }

  /**
   * sections findFirst
   */
  export interface sectionsFindFirstArgs extends sectionsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * sections findFirstOrThrow
   */
  export type sectionsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the sections
     * 
    **/
    select?: sectionsSelect | null
    /**
     * Filter, which sections to fetch.
     * 
    **/
    where?: sectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     * 
    **/
    orderBy?: Enumerable<sectionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sections.
     * 
    **/
    cursor?: sectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sections.
     * 
    **/
    distinct?: Enumerable<SectionsScalarFieldEnum>
  }


  /**
   * sections findMany
   */
  export type sectionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the sections
     * 
    **/
    select?: sectionsSelect | null
    /**
     * Filter, which sections to fetch.
     * 
    **/
    where?: sectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     * 
    **/
    orderBy?: Enumerable<sectionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sections.
     * 
    **/
    cursor?: sectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SectionsScalarFieldEnum>
  }


  /**
   * sections create
   */
  export type sectionsCreateArgs = {
    /**
     * Select specific fields to fetch from the sections
     * 
    **/
    select?: sectionsSelect | null
    /**
     * The data needed to create a sections.
     * 
    **/
    data: XOR<sectionsCreateInput, sectionsUncheckedCreateInput>
  }


  /**
   * sections createMany
   */
  export type sectionsCreateManyArgs = {
    /**
     * The data used to create many sections.
     * 
    **/
    data: Enumerable<sectionsCreateManyInput>
  }


  /**
   * sections update
   */
  export type sectionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the sections
     * 
    **/
    select?: sectionsSelect | null
    /**
     * The data needed to update a sections.
     * 
    **/
    data: XOR<sectionsUpdateInput, sectionsUncheckedUpdateInput>
    /**
     * Choose, which sections to update.
     * 
    **/
    where: sectionsWhereUniqueInput
  }


  /**
   * sections updateMany
   */
  export type sectionsUpdateManyArgs = {
    /**
     * The data used to update sections.
     * 
    **/
    data: XOR<sectionsUpdateManyMutationInput, sectionsUncheckedUpdateManyInput>
    /**
     * Filter which sections to update
     * 
    **/
    where?: sectionsWhereInput
  }


  /**
   * sections upsert
   */
  export type sectionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the sections
     * 
    **/
    select?: sectionsSelect | null
    /**
     * The filter to search for the sections to update in case it exists.
     * 
    **/
    where: sectionsWhereUniqueInput
    /**
     * In case the sections found by the `where` argument doesn't exist, create a new sections with this data.
     * 
    **/
    create: XOR<sectionsCreateInput, sectionsUncheckedCreateInput>
    /**
     * In case the sections was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<sectionsUpdateInput, sectionsUncheckedUpdateInput>
  }


  /**
   * sections delete
   */
  export type sectionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the sections
     * 
    **/
    select?: sectionsSelect | null
    /**
     * Filter which sections to delete.
     * 
    **/
    where: sectionsWhereUniqueInput
  }


  /**
   * sections deleteMany
   */
  export type sectionsDeleteManyArgs = {
    /**
     * Filter which sections to delete
     * 
    **/
    where?: sectionsWhereInput
  }


  /**
   * sections findRaw
   */
  export type sectionsFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * sections aggregateRaw
   */
  export type sectionsAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * sections without action
   */
  export type sectionsArgs = {
    /**
     * Select specific fields to fetch from the sections
     * 
    **/
    select?: sectionsSelect | null
  }



  /**
   * Model tecnologies
   */


  export type AggregateTecnologies = {
    _count: TecnologiesCountAggregateOutputType | null
    _min: TecnologiesMinAggregateOutputType | null
    _max: TecnologiesMaxAggregateOutputType | null
  }

  export type TecnologiesMinAggregateOutputType = {
    id: string | null
    logo: string | null
    name: string | null
    url: string | null
  }

  export type TecnologiesMaxAggregateOutputType = {
    id: string | null
    logo: string | null
    name: string | null
    url: string | null
  }

  export type TecnologiesCountAggregateOutputType = {
    id: number
    logo: number
    name: number
    url: number
    _all: number
  }


  export type TecnologiesMinAggregateInputType = {
    id?: true
    logo?: true
    name?: true
    url?: true
  }

  export type TecnologiesMaxAggregateInputType = {
    id?: true
    logo?: true
    name?: true
    url?: true
  }

  export type TecnologiesCountAggregateInputType = {
    id?: true
    logo?: true
    name?: true
    url?: true
    _all?: true
  }

  export type TecnologiesAggregateArgs = {
    /**
     * Filter which tecnologies to aggregate.
     * 
    **/
    where?: tecnologiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tecnologies to fetch.
     * 
    **/
    orderBy?: Enumerable<tecnologiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: tecnologiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tecnologies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tecnologies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tecnologies
    **/
    _count?: true | TecnologiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TecnologiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TecnologiesMaxAggregateInputType
  }

  export type GetTecnologiesAggregateType<T extends TecnologiesAggregateArgs> = {
        [P in keyof T & keyof AggregateTecnologies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTecnologies[P]>
      : GetScalarType<T[P], AggregateTecnologies[P]>
  }




  export type TecnologiesGroupByArgs = {
    where?: tecnologiesWhereInput
    orderBy?: Enumerable<tecnologiesOrderByWithAggregationInput>
    by: Array<TecnologiesScalarFieldEnum>
    having?: tecnologiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TecnologiesCountAggregateInputType | true
    _min?: TecnologiesMinAggregateInputType
    _max?: TecnologiesMaxAggregateInputType
  }


  export type TecnologiesGroupByOutputType = {
    id: string
    logo: string
    name: string
    url: string
    _count: TecnologiesCountAggregateOutputType | null
    _min: TecnologiesMinAggregateOutputType | null
    _max: TecnologiesMaxAggregateOutputType | null
  }

  type GetTecnologiesGroupByPayload<T extends TecnologiesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TecnologiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TecnologiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TecnologiesGroupByOutputType[P]>
            : GetScalarType<T[P], TecnologiesGroupByOutputType[P]>
        }
      >
    >


  export type tecnologiesSelect = {
    id?: boolean
    logo?: boolean
    name?: boolean
    url?: boolean
  }


  export type tecnologiesGetPayload<S extends boolean | null | undefined | tecnologiesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? tecnologies :
    S extends undefined ? never :
    S extends { include: any } & (tecnologiesArgs | tecnologiesFindManyArgs)
    ? tecnologies 
    : S extends { select: any } & (tecnologiesArgs | tecnologiesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof tecnologies ? tecnologies[P] : never
  } 
      : tecnologies


  type tecnologiesCountArgs = Merge<
    Omit<tecnologiesFindManyArgs, 'select' | 'include'> & {
      select?: TecnologiesCountAggregateInputType | true
    }
  >

  export interface tecnologiesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Tecnologies that matches the filter.
     * @param {tecnologiesFindUniqueArgs} args - Arguments to find a Tecnologies
     * @example
     * // Get one Tecnologies
     * const tecnologies = await prisma.tecnologies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tecnologiesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tecnologiesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tecnologies'> extends True ? Prisma__tecnologiesClient<tecnologiesGetPayload<T>> : Prisma__tecnologiesClient<tecnologiesGetPayload<T> | null, null>

    /**
     * Find one Tecnologies that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tecnologiesFindUniqueOrThrowArgs} args - Arguments to find a Tecnologies
     * @example
     * // Get one Tecnologies
     * const tecnologies = await prisma.tecnologies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tecnologiesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, tecnologiesFindUniqueOrThrowArgs>
    ): Prisma__tecnologiesClient<tecnologiesGetPayload<T>>

    /**
     * Find the first Tecnologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tecnologiesFindFirstArgs} args - Arguments to find a Tecnologies
     * @example
     * // Get one Tecnologies
     * const tecnologies = await prisma.tecnologies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tecnologiesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tecnologiesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tecnologies'> extends True ? Prisma__tecnologiesClient<tecnologiesGetPayload<T>> : Prisma__tecnologiesClient<tecnologiesGetPayload<T> | null, null>

    /**
     * Find the first Tecnologies that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tecnologiesFindFirstOrThrowArgs} args - Arguments to find a Tecnologies
     * @example
     * // Get one Tecnologies
     * const tecnologies = await prisma.tecnologies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tecnologiesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, tecnologiesFindFirstOrThrowArgs>
    ): Prisma__tecnologiesClient<tecnologiesGetPayload<T>>

    /**
     * Find zero or more Tecnologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tecnologiesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tecnologies
     * const tecnologies = await prisma.tecnologies.findMany()
     * 
     * // Get first 10 Tecnologies
     * const tecnologies = await prisma.tecnologies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tecnologiesWithIdOnly = await prisma.tecnologies.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends tecnologiesFindManyArgs>(
      args?: SelectSubset<T, tecnologiesFindManyArgs>
    ): PrismaPromise<Array<tecnologiesGetPayload<T>>>

    /**
     * Create a Tecnologies.
     * @param {tecnologiesCreateArgs} args - Arguments to create a Tecnologies.
     * @example
     * // Create one Tecnologies
     * const Tecnologies = await prisma.tecnologies.create({
     *   data: {
     *     // ... data to create a Tecnologies
     *   }
     * })
     * 
    **/
    create<T extends tecnologiesCreateArgs>(
      args: SelectSubset<T, tecnologiesCreateArgs>
    ): Prisma__tecnologiesClient<tecnologiesGetPayload<T>>

    /**
     * Create many Tecnologies.
     *     @param {tecnologiesCreateManyArgs} args - Arguments to create many Tecnologies.
     *     @example
     *     // Create many Tecnologies
     *     const tecnologies = await prisma.tecnologies.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tecnologiesCreateManyArgs>(
      args?: SelectSubset<T, tecnologiesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tecnologies.
     * @param {tecnologiesDeleteArgs} args - Arguments to delete one Tecnologies.
     * @example
     * // Delete one Tecnologies
     * const Tecnologies = await prisma.tecnologies.delete({
     *   where: {
     *     // ... filter to delete one Tecnologies
     *   }
     * })
     * 
    **/
    delete<T extends tecnologiesDeleteArgs>(
      args: SelectSubset<T, tecnologiesDeleteArgs>
    ): Prisma__tecnologiesClient<tecnologiesGetPayload<T>>

    /**
     * Update one Tecnologies.
     * @param {tecnologiesUpdateArgs} args - Arguments to update one Tecnologies.
     * @example
     * // Update one Tecnologies
     * const tecnologies = await prisma.tecnologies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tecnologiesUpdateArgs>(
      args: SelectSubset<T, tecnologiesUpdateArgs>
    ): Prisma__tecnologiesClient<tecnologiesGetPayload<T>>

    /**
     * Delete zero or more Tecnologies.
     * @param {tecnologiesDeleteManyArgs} args - Arguments to filter Tecnologies to delete.
     * @example
     * // Delete a few Tecnologies
     * const { count } = await prisma.tecnologies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tecnologiesDeleteManyArgs>(
      args?: SelectSubset<T, tecnologiesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tecnologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tecnologiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tecnologies
     * const tecnologies = await prisma.tecnologies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tecnologiesUpdateManyArgs>(
      args: SelectSubset<T, tecnologiesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tecnologies.
     * @param {tecnologiesUpsertArgs} args - Arguments to update or create a Tecnologies.
     * @example
     * // Update or create a Tecnologies
     * const tecnologies = await prisma.tecnologies.upsert({
     *   create: {
     *     // ... data to create a Tecnologies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tecnologies we want to update
     *   }
     * })
    **/
    upsert<T extends tecnologiesUpsertArgs>(
      args: SelectSubset<T, tecnologiesUpsertArgs>
    ): Prisma__tecnologiesClient<tecnologiesGetPayload<T>>

    /**
     * Find zero or more Tecnologies that matches the filter.
     * @param {tecnologiesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tecnologies = await prisma.tecnologies.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: tecnologiesFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Tecnologies.
     * @param {tecnologiesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tecnologies = await prisma.tecnologies.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: tecnologiesAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Tecnologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tecnologiesCountArgs} args - Arguments to filter Tecnologies to count.
     * @example
     * // Count the number of Tecnologies
     * const count = await prisma.tecnologies.count({
     *   where: {
     *     // ... the filter for the Tecnologies we want to count
     *   }
     * })
    **/
    count<T extends tecnologiesCountArgs>(
      args?: Subset<T, tecnologiesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TecnologiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tecnologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnologiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TecnologiesAggregateArgs>(args: Subset<T, TecnologiesAggregateArgs>): PrismaPromise<GetTecnologiesAggregateType<T>>

    /**
     * Group by Tecnologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnologiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TecnologiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TecnologiesGroupByArgs['orderBy'] }
        : { orderBy?: TecnologiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TecnologiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTecnologiesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tecnologies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tecnologiesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tecnologies base type for findUnique actions
   */
  export type tecnologiesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the tecnologies
     * 
    **/
    select?: tecnologiesSelect | null
    /**
     * Filter, which tecnologies to fetch.
     * 
    **/
    where: tecnologiesWhereUniqueInput
  }

  /**
   * tecnologies findUnique
   */
  export interface tecnologiesFindUniqueArgs extends tecnologiesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tecnologies findUniqueOrThrow
   */
  export type tecnologiesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tecnologies
     * 
    **/
    select?: tecnologiesSelect | null
    /**
     * Filter, which tecnologies to fetch.
     * 
    **/
    where: tecnologiesWhereUniqueInput
  }


  /**
   * tecnologies base type for findFirst actions
   */
  export type tecnologiesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the tecnologies
     * 
    **/
    select?: tecnologiesSelect | null
    /**
     * Filter, which tecnologies to fetch.
     * 
    **/
    where?: tecnologiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tecnologies to fetch.
     * 
    **/
    orderBy?: Enumerable<tecnologiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tecnologies.
     * 
    **/
    cursor?: tecnologiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tecnologies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tecnologies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tecnologies.
     * 
    **/
    distinct?: Enumerable<TecnologiesScalarFieldEnum>
  }

  /**
   * tecnologies findFirst
   */
  export interface tecnologiesFindFirstArgs extends tecnologiesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tecnologies findFirstOrThrow
   */
  export type tecnologiesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tecnologies
     * 
    **/
    select?: tecnologiesSelect | null
    /**
     * Filter, which tecnologies to fetch.
     * 
    **/
    where?: tecnologiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tecnologies to fetch.
     * 
    **/
    orderBy?: Enumerable<tecnologiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tecnologies.
     * 
    **/
    cursor?: tecnologiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tecnologies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tecnologies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tecnologies.
     * 
    **/
    distinct?: Enumerable<TecnologiesScalarFieldEnum>
  }


  /**
   * tecnologies findMany
   */
  export type tecnologiesFindManyArgs = {
    /**
     * Select specific fields to fetch from the tecnologies
     * 
    **/
    select?: tecnologiesSelect | null
    /**
     * Filter, which tecnologies to fetch.
     * 
    **/
    where?: tecnologiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tecnologies to fetch.
     * 
    **/
    orderBy?: Enumerable<tecnologiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tecnologies.
     * 
    **/
    cursor?: tecnologiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tecnologies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tecnologies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TecnologiesScalarFieldEnum>
  }


  /**
   * tecnologies create
   */
  export type tecnologiesCreateArgs = {
    /**
     * Select specific fields to fetch from the tecnologies
     * 
    **/
    select?: tecnologiesSelect | null
    /**
     * The data needed to create a tecnologies.
     * 
    **/
    data: XOR<tecnologiesCreateInput, tecnologiesUncheckedCreateInput>
  }


  /**
   * tecnologies createMany
   */
  export type tecnologiesCreateManyArgs = {
    /**
     * The data used to create many tecnologies.
     * 
    **/
    data: Enumerable<tecnologiesCreateManyInput>
  }


  /**
   * tecnologies update
   */
  export type tecnologiesUpdateArgs = {
    /**
     * Select specific fields to fetch from the tecnologies
     * 
    **/
    select?: tecnologiesSelect | null
    /**
     * The data needed to update a tecnologies.
     * 
    **/
    data: XOR<tecnologiesUpdateInput, tecnologiesUncheckedUpdateInput>
    /**
     * Choose, which tecnologies to update.
     * 
    **/
    where: tecnologiesWhereUniqueInput
  }


  /**
   * tecnologies updateMany
   */
  export type tecnologiesUpdateManyArgs = {
    /**
     * The data used to update tecnologies.
     * 
    **/
    data: XOR<tecnologiesUpdateManyMutationInput, tecnologiesUncheckedUpdateManyInput>
    /**
     * Filter which tecnologies to update
     * 
    **/
    where?: tecnologiesWhereInput
  }


  /**
   * tecnologies upsert
   */
  export type tecnologiesUpsertArgs = {
    /**
     * Select specific fields to fetch from the tecnologies
     * 
    **/
    select?: tecnologiesSelect | null
    /**
     * The filter to search for the tecnologies to update in case it exists.
     * 
    **/
    where: tecnologiesWhereUniqueInput
    /**
     * In case the tecnologies found by the `where` argument doesn't exist, create a new tecnologies with this data.
     * 
    **/
    create: XOR<tecnologiesCreateInput, tecnologiesUncheckedCreateInput>
    /**
     * In case the tecnologies was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<tecnologiesUpdateInput, tecnologiesUncheckedUpdateInput>
  }


  /**
   * tecnologies delete
   */
  export type tecnologiesDeleteArgs = {
    /**
     * Select specific fields to fetch from the tecnologies
     * 
    **/
    select?: tecnologiesSelect | null
    /**
     * Filter which tecnologies to delete.
     * 
    **/
    where: tecnologiesWhereUniqueInput
  }


  /**
   * tecnologies deleteMany
   */
  export type tecnologiesDeleteManyArgs = {
    /**
     * Filter which tecnologies to delete
     * 
    **/
    where?: tecnologiesWhereInput
  }


  /**
   * tecnologies findRaw
   */
  export type tecnologiesFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * tecnologies aggregateRaw
   */
  export type tecnologiesAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * tecnologies without action
   */
  export type tecnologiesArgs = {
    /**
     * Select specific fields to fetch from the tecnologies
     * 
    **/
    select?: tecnologiesSelect | null
  }



  /**
   * Model projects
   */


  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    demo: string | null
    repo: string | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    demo: string | null
    repo: string | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    images: number
    tools: number
    demo: number
    repo: number
    _all: number
  }


  export type ProjectsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    demo?: true
    repo?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    demo?: true
    repo?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    images?: true
    tools?: true
    demo?: true
    repo?: true
    _all?: true
  }

  export type ProjectsAggregateArgs = {
    /**
     * Filter which projects to aggregate.
     * 
    **/
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     * 
    **/
    orderBy?: Enumerable<projectsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type ProjectsGroupByArgs = {
    where?: projectsWhereInput
    orderBy?: Enumerable<projectsOrderByWithAggregationInput>
    by: Array<ProjectsScalarFieldEnum>
    having?: projectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }


  export type ProjectsGroupByOutputType = {
    id: string
    title: string
    description: string
    images: string[]
    tools: string[]
    demo: string
    repo: string
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends ProjectsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type projectsSelect = {
    id?: boolean
    title?: boolean
    description?: boolean
    images?: boolean
    tools?: boolean
    demo?: boolean
    repo?: boolean
  }


  export type projectsGetPayload<S extends boolean | null | undefined | projectsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? projects :
    S extends undefined ? never :
    S extends { include: any } & (projectsArgs | projectsFindManyArgs)
    ? projects 
    : S extends { select: any } & (projectsArgs | projectsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof projects ? projects[P] : never
  } 
      : projects


  type projectsCountArgs = Merge<
    Omit<projectsFindManyArgs, 'select' | 'include'> & {
      select?: ProjectsCountAggregateInputType | true
    }
  >

  export interface projectsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Projects that matches the filter.
     * @param {projectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends projectsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, projectsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'projects'> extends True ? Prisma__projectsClient<projectsGetPayload<T>> : Prisma__projectsClient<projectsGetPayload<T> | null, null>

    /**
     * Find one Projects that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {projectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends projectsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, projectsFindUniqueOrThrowArgs>
    ): Prisma__projectsClient<projectsGetPayload<T>>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends projectsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, projectsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'projects'> extends True ? Prisma__projectsClient<projectsGetPayload<T>> : Prisma__projectsClient<projectsGetPayload<T> | null, null>

    /**
     * Find the first Projects that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends projectsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, projectsFindFirstOrThrowArgs>
    ): Prisma__projectsClient<projectsGetPayload<T>>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends projectsFindManyArgs>(
      args?: SelectSubset<T, projectsFindManyArgs>
    ): PrismaPromise<Array<projectsGetPayload<T>>>

    /**
     * Create a Projects.
     * @param {projectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
    **/
    create<T extends projectsCreateArgs>(
      args: SelectSubset<T, projectsCreateArgs>
    ): Prisma__projectsClient<projectsGetPayload<T>>

    /**
     * Create many Projects.
     *     @param {projectsCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const projects = await prisma.projects.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends projectsCreateManyArgs>(
      args?: SelectSubset<T, projectsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Projects.
     * @param {projectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
    **/
    delete<T extends projectsDeleteArgs>(
      args: SelectSubset<T, projectsDeleteArgs>
    ): Prisma__projectsClient<projectsGetPayload<T>>

    /**
     * Update one Projects.
     * @param {projectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends projectsUpdateArgs>(
      args: SelectSubset<T, projectsUpdateArgs>
    ): Prisma__projectsClient<projectsGetPayload<T>>

    /**
     * Delete zero or more Projects.
     * @param {projectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends projectsDeleteManyArgs>(
      args?: SelectSubset<T, projectsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends projectsUpdateManyArgs>(
      args: SelectSubset<T, projectsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Projects.
     * @param {projectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
    **/
    upsert<T extends projectsUpsertArgs>(
      args: SelectSubset<T, projectsUpsertArgs>
    ): Prisma__projectsClient<projectsGetPayload<T>>

    /**
     * Find zero or more Projects that matches the filter.
     * @param {projectsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const projects = await prisma.projects.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: projectsFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Projects.
     * @param {projectsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const projects = await prisma.projects.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: projectsAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectsCountArgs>(
      args?: Subset<T, projectsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectsGroupByArgs['orderBy'] }
        : { orderBy?: ProjectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__projectsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * projects base type for findUnique actions
   */
  export type projectsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the projects
     * 
    **/
    select?: projectsSelect | null
    /**
     * Filter, which projects to fetch.
     * 
    **/
    where: projectsWhereUniqueInput
  }

  /**
   * projects findUnique
   */
  export interface projectsFindUniqueArgs extends projectsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * projects findUniqueOrThrow
   */
  export type projectsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the projects
     * 
    **/
    select?: projectsSelect | null
    /**
     * Filter, which projects to fetch.
     * 
    **/
    where: projectsWhereUniqueInput
  }


  /**
   * projects base type for findFirst actions
   */
  export type projectsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the projects
     * 
    **/
    select?: projectsSelect | null
    /**
     * Filter, which projects to fetch.
     * 
    **/
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     * 
    **/
    orderBy?: Enumerable<projectsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     * 
    **/
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     * 
    **/
    distinct?: Enumerable<ProjectsScalarFieldEnum>
  }

  /**
   * projects findFirst
   */
  export interface projectsFindFirstArgs extends projectsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * projects findFirstOrThrow
   */
  export type projectsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the projects
     * 
    **/
    select?: projectsSelect | null
    /**
     * Filter, which projects to fetch.
     * 
    **/
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     * 
    **/
    orderBy?: Enumerable<projectsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     * 
    **/
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     * 
    **/
    distinct?: Enumerable<ProjectsScalarFieldEnum>
  }


  /**
   * projects findMany
   */
  export type projectsFindManyArgs = {
    /**
     * Select specific fields to fetch from the projects
     * 
    **/
    select?: projectsSelect | null
    /**
     * Filter, which projects to fetch.
     * 
    **/
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     * 
    **/
    orderBy?: Enumerable<projectsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     * 
    **/
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProjectsScalarFieldEnum>
  }


  /**
   * projects create
   */
  export type projectsCreateArgs = {
    /**
     * Select specific fields to fetch from the projects
     * 
    **/
    select?: projectsSelect | null
    /**
     * The data needed to create a projects.
     * 
    **/
    data: XOR<projectsCreateInput, projectsUncheckedCreateInput>
  }


  /**
   * projects createMany
   */
  export type projectsCreateManyArgs = {
    /**
     * The data used to create many projects.
     * 
    **/
    data: Enumerable<projectsCreateManyInput>
  }


  /**
   * projects update
   */
  export type projectsUpdateArgs = {
    /**
     * Select specific fields to fetch from the projects
     * 
    **/
    select?: projectsSelect | null
    /**
     * The data needed to update a projects.
     * 
    **/
    data: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
    /**
     * Choose, which projects to update.
     * 
    **/
    where: projectsWhereUniqueInput
  }


  /**
   * projects updateMany
   */
  export type projectsUpdateManyArgs = {
    /**
     * The data used to update projects.
     * 
    **/
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     * 
    **/
    where?: projectsWhereInput
  }


  /**
   * projects upsert
   */
  export type projectsUpsertArgs = {
    /**
     * Select specific fields to fetch from the projects
     * 
    **/
    select?: projectsSelect | null
    /**
     * The filter to search for the projects to update in case it exists.
     * 
    **/
    where: projectsWhereUniqueInput
    /**
     * In case the projects found by the `where` argument doesn't exist, create a new projects with this data.
     * 
    **/
    create: XOR<projectsCreateInput, projectsUncheckedCreateInput>
    /**
     * In case the projects was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
  }


  /**
   * projects delete
   */
  export type projectsDeleteArgs = {
    /**
     * Select specific fields to fetch from the projects
     * 
    **/
    select?: projectsSelect | null
    /**
     * Filter which projects to delete.
     * 
    **/
    where: projectsWhereUniqueInput
  }


  /**
   * projects deleteMany
   */
  export type projectsDeleteManyArgs = {
    /**
     * Filter which projects to delete
     * 
    **/
    where?: projectsWhereInput
  }


  /**
   * projects findRaw
   */
  export type projectsFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * projects aggregateRaw
   */
  export type projectsAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * projects without action
   */
  export type projectsArgs = {
    /**
     * Select specific fields to fetch from the projects
     * 
    **/
    select?: projectsSelect | null
  }



  /**
   * Model timeline
   */


  export type AggregateTimeline = {
    _count: TimelineCountAggregateOutputType | null
    _min: TimelineMinAggregateOutputType | null
    _max: TimelineMaxAggregateOutputType | null
  }

  export type TimelineMinAggregateOutputType = {
    id: string | null
    title: string | null
    cardTitle: string | null
    url: string | null
    cardSubtitle: string | null
    cardDetailedText: string | null
  }

  export type TimelineMaxAggregateOutputType = {
    id: string | null
    title: string | null
    cardTitle: string | null
    url: string | null
    cardSubtitle: string | null
    cardDetailedText: string | null
  }

  export type TimelineCountAggregateOutputType = {
    id: number
    title: number
    cardTitle: number
    url: number
    cardSubtitle: number
    cardDetailedText: number
    _all: number
  }


  export type TimelineMinAggregateInputType = {
    id?: true
    title?: true
    cardTitle?: true
    url?: true
    cardSubtitle?: true
    cardDetailedText?: true
  }

  export type TimelineMaxAggregateInputType = {
    id?: true
    title?: true
    cardTitle?: true
    url?: true
    cardSubtitle?: true
    cardDetailedText?: true
  }

  export type TimelineCountAggregateInputType = {
    id?: true
    title?: true
    cardTitle?: true
    url?: true
    cardSubtitle?: true
    cardDetailedText?: true
    _all?: true
  }

  export type TimelineAggregateArgs = {
    /**
     * Filter which timeline to aggregate.
     * 
    **/
    where?: timelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timelines to fetch.
     * 
    **/
    orderBy?: Enumerable<timelineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: timelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timelines from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timelines.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned timelines
    **/
    _count?: true | TimelineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimelineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimelineMaxAggregateInputType
  }

  export type GetTimelineAggregateType<T extends TimelineAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeline[P]>
      : GetScalarType<T[P], AggregateTimeline[P]>
  }




  export type TimelineGroupByArgs = {
    where?: timelineWhereInput
    orderBy?: Enumerable<timelineOrderByWithAggregationInput>
    by: Array<TimelineScalarFieldEnum>
    having?: timelineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimelineCountAggregateInputType | true
    _min?: TimelineMinAggregateInputType
    _max?: TimelineMaxAggregateInputType
  }


  export type TimelineGroupByOutputType = {
    id: string
    title: string
    cardTitle: string
    url: string
    cardSubtitle: string
    cardDetailedText: string
    _count: TimelineCountAggregateOutputType | null
    _min: TimelineMinAggregateOutputType | null
    _max: TimelineMaxAggregateOutputType | null
  }

  type GetTimelineGroupByPayload<T extends TimelineGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TimelineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimelineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimelineGroupByOutputType[P]>
            : GetScalarType<T[P], TimelineGroupByOutputType[P]>
        }
      >
    >


  export type timelineSelect = {
    id?: boolean
    title?: boolean
    cardTitle?: boolean
    url?: boolean
    cardSubtitle?: boolean
    cardDetailedText?: boolean
  }


  export type timelineGetPayload<S extends boolean | null | undefined | timelineArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? timeline :
    S extends undefined ? never :
    S extends { include: any } & (timelineArgs | timelineFindManyArgs)
    ? timeline 
    : S extends { select: any } & (timelineArgs | timelineFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof timeline ? timeline[P] : never
  } 
      : timeline


  type timelineCountArgs = Merge<
    Omit<timelineFindManyArgs, 'select' | 'include'> & {
      select?: TimelineCountAggregateInputType | true
    }
  >

  export interface timelineDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Timeline that matches the filter.
     * @param {timelineFindUniqueArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends timelineFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, timelineFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'timeline'> extends True ? Prisma__timelineClient<timelineGetPayload<T>> : Prisma__timelineClient<timelineGetPayload<T> | null, null>

    /**
     * Find one Timeline that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {timelineFindUniqueOrThrowArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends timelineFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, timelineFindUniqueOrThrowArgs>
    ): Prisma__timelineClient<timelineGetPayload<T>>

    /**
     * Find the first Timeline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timelineFindFirstArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends timelineFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, timelineFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'timeline'> extends True ? Prisma__timelineClient<timelineGetPayload<T>> : Prisma__timelineClient<timelineGetPayload<T> | null, null>

    /**
     * Find the first Timeline that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timelineFindFirstOrThrowArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends timelineFindFirstOrThrowArgs>(
      args?: SelectSubset<T, timelineFindFirstOrThrowArgs>
    ): Prisma__timelineClient<timelineGetPayload<T>>

    /**
     * Find zero or more Timelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timelineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timelines
     * const timelines = await prisma.timeline.findMany()
     * 
     * // Get first 10 Timelines
     * const timelines = await prisma.timeline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timelineWithIdOnly = await prisma.timeline.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends timelineFindManyArgs>(
      args?: SelectSubset<T, timelineFindManyArgs>
    ): PrismaPromise<Array<timelineGetPayload<T>>>

    /**
     * Create a Timeline.
     * @param {timelineCreateArgs} args - Arguments to create a Timeline.
     * @example
     * // Create one Timeline
     * const Timeline = await prisma.timeline.create({
     *   data: {
     *     // ... data to create a Timeline
     *   }
     * })
     * 
    **/
    create<T extends timelineCreateArgs>(
      args: SelectSubset<T, timelineCreateArgs>
    ): Prisma__timelineClient<timelineGetPayload<T>>

    /**
     * Create many Timelines.
     *     @param {timelineCreateManyArgs} args - Arguments to create many Timelines.
     *     @example
     *     // Create many Timelines
     *     const timeline = await prisma.timeline.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends timelineCreateManyArgs>(
      args?: SelectSubset<T, timelineCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Timeline.
     * @param {timelineDeleteArgs} args - Arguments to delete one Timeline.
     * @example
     * // Delete one Timeline
     * const Timeline = await prisma.timeline.delete({
     *   where: {
     *     // ... filter to delete one Timeline
     *   }
     * })
     * 
    **/
    delete<T extends timelineDeleteArgs>(
      args: SelectSubset<T, timelineDeleteArgs>
    ): Prisma__timelineClient<timelineGetPayload<T>>

    /**
     * Update one Timeline.
     * @param {timelineUpdateArgs} args - Arguments to update one Timeline.
     * @example
     * // Update one Timeline
     * const timeline = await prisma.timeline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends timelineUpdateArgs>(
      args: SelectSubset<T, timelineUpdateArgs>
    ): Prisma__timelineClient<timelineGetPayload<T>>

    /**
     * Delete zero or more Timelines.
     * @param {timelineDeleteManyArgs} args - Arguments to filter Timelines to delete.
     * @example
     * // Delete a few Timelines
     * const { count } = await prisma.timeline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends timelineDeleteManyArgs>(
      args?: SelectSubset<T, timelineDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timelineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timelines
     * const timeline = await prisma.timeline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends timelineUpdateManyArgs>(
      args: SelectSubset<T, timelineUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Timeline.
     * @param {timelineUpsertArgs} args - Arguments to update or create a Timeline.
     * @example
     * // Update or create a Timeline
     * const timeline = await prisma.timeline.upsert({
     *   create: {
     *     // ... data to create a Timeline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timeline we want to update
     *   }
     * })
    **/
    upsert<T extends timelineUpsertArgs>(
      args: SelectSubset<T, timelineUpsertArgs>
    ): Prisma__timelineClient<timelineGetPayload<T>>

    /**
     * Find zero or more Timelines that matches the filter.
     * @param {timelineFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const timeline = await prisma.timeline.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: timelineFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Timeline.
     * @param {timelineAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const timeline = await prisma.timeline.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: timelineAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timelineCountArgs} args - Arguments to filter Timelines to count.
     * @example
     * // Count the number of Timelines
     * const count = await prisma.timeline.count({
     *   where: {
     *     // ... the filter for the Timelines we want to count
     *   }
     * })
    **/
    count<T extends timelineCountArgs>(
      args?: Subset<T, timelineCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimelineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimelineAggregateArgs>(args: Subset<T, TimelineAggregateArgs>): PrismaPromise<GetTimelineAggregateType<T>>

    /**
     * Group by Timeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimelineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimelineGroupByArgs['orderBy'] }
        : { orderBy?: TimelineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimelineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimelineGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for timeline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__timelineClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * timeline base type for findUnique actions
   */
  export type timelineFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the timeline
     * 
    **/
    select?: timelineSelect | null
    /**
     * Filter, which timeline to fetch.
     * 
    **/
    where: timelineWhereUniqueInput
  }

  /**
   * timeline findUnique
   */
  export interface timelineFindUniqueArgs extends timelineFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * timeline findUniqueOrThrow
   */
  export type timelineFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the timeline
     * 
    **/
    select?: timelineSelect | null
    /**
     * Filter, which timeline to fetch.
     * 
    **/
    where: timelineWhereUniqueInput
  }


  /**
   * timeline base type for findFirst actions
   */
  export type timelineFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the timeline
     * 
    **/
    select?: timelineSelect | null
    /**
     * Filter, which timeline to fetch.
     * 
    **/
    where?: timelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timelines to fetch.
     * 
    **/
    orderBy?: Enumerable<timelineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timelines.
     * 
    **/
    cursor?: timelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timelines from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timelines.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timelines.
     * 
    **/
    distinct?: Enumerable<TimelineScalarFieldEnum>
  }

  /**
   * timeline findFirst
   */
  export interface timelineFindFirstArgs extends timelineFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * timeline findFirstOrThrow
   */
  export type timelineFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the timeline
     * 
    **/
    select?: timelineSelect | null
    /**
     * Filter, which timeline to fetch.
     * 
    **/
    where?: timelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timelines to fetch.
     * 
    **/
    orderBy?: Enumerable<timelineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timelines.
     * 
    **/
    cursor?: timelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timelines from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timelines.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timelines.
     * 
    **/
    distinct?: Enumerable<TimelineScalarFieldEnum>
  }


  /**
   * timeline findMany
   */
  export type timelineFindManyArgs = {
    /**
     * Select specific fields to fetch from the timeline
     * 
    **/
    select?: timelineSelect | null
    /**
     * Filter, which timelines to fetch.
     * 
    **/
    where?: timelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timelines to fetch.
     * 
    **/
    orderBy?: Enumerable<timelineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing timelines.
     * 
    **/
    cursor?: timelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timelines from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timelines.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TimelineScalarFieldEnum>
  }


  /**
   * timeline create
   */
  export type timelineCreateArgs = {
    /**
     * Select specific fields to fetch from the timeline
     * 
    **/
    select?: timelineSelect | null
    /**
     * The data needed to create a timeline.
     * 
    **/
    data: XOR<timelineCreateInput, timelineUncheckedCreateInput>
  }


  /**
   * timeline createMany
   */
  export type timelineCreateManyArgs = {
    /**
     * The data used to create many timelines.
     * 
    **/
    data: Enumerable<timelineCreateManyInput>
  }


  /**
   * timeline update
   */
  export type timelineUpdateArgs = {
    /**
     * Select specific fields to fetch from the timeline
     * 
    **/
    select?: timelineSelect | null
    /**
     * The data needed to update a timeline.
     * 
    **/
    data: XOR<timelineUpdateInput, timelineUncheckedUpdateInput>
    /**
     * Choose, which timeline to update.
     * 
    **/
    where: timelineWhereUniqueInput
  }


  /**
   * timeline updateMany
   */
  export type timelineUpdateManyArgs = {
    /**
     * The data used to update timelines.
     * 
    **/
    data: XOR<timelineUpdateManyMutationInput, timelineUncheckedUpdateManyInput>
    /**
     * Filter which timelines to update
     * 
    **/
    where?: timelineWhereInput
  }


  /**
   * timeline upsert
   */
  export type timelineUpsertArgs = {
    /**
     * Select specific fields to fetch from the timeline
     * 
    **/
    select?: timelineSelect | null
    /**
     * The filter to search for the timeline to update in case it exists.
     * 
    **/
    where: timelineWhereUniqueInput
    /**
     * In case the timeline found by the `where` argument doesn't exist, create a new timeline with this data.
     * 
    **/
    create: XOR<timelineCreateInput, timelineUncheckedCreateInput>
    /**
     * In case the timeline was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<timelineUpdateInput, timelineUncheckedUpdateInput>
  }


  /**
   * timeline delete
   */
  export type timelineDeleteArgs = {
    /**
     * Select specific fields to fetch from the timeline
     * 
    **/
    select?: timelineSelect | null
    /**
     * Filter which timeline to delete.
     * 
    **/
    where: timelineWhereUniqueInput
  }


  /**
   * timeline deleteMany
   */
  export type timelineDeleteManyArgs = {
    /**
     * Filter which timelines to delete
     * 
    **/
    where?: timelineWhereInput
  }


  /**
   * timeline findRaw
   */
  export type timelineFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * timeline aggregateRaw
   */
  export type timelineAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * timeline without action
   */
  export type timelineArgs = {
    /**
     * Select specific fields to fetch from the timeline
     * 
    **/
    select?: timelineSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ProjectsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    images: 'images',
    tools: 'tools',
    demo: 'demo',
    repo: 'repo'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SectionsScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type SectionsScalarFieldEnum = (typeof SectionsScalarFieldEnum)[keyof typeof SectionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TecnologiesScalarFieldEnum: {
    id: 'id',
    logo: 'logo',
    name: 'name',
    url: 'url'
  };

  export type TecnologiesScalarFieldEnum = (typeof TecnologiesScalarFieldEnum)[keyof typeof TecnologiesScalarFieldEnum]


  export const TimelineScalarFieldEnum: {
    id: 'id',
    title: 'title',
    cardTitle: 'cardTitle',
    url: 'url',
    cardSubtitle: 'cardSubtitle',
    cardDetailedText: 'cardDetailedText'
  };

  export type TimelineScalarFieldEnum = (typeof TimelineScalarFieldEnum)[keyof typeof TimelineScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type sectionsWhereInput = {
    AND?: Enumerable<sectionsWhereInput>
    OR?: Enumerable<sectionsWhereInput>
    NOT?: Enumerable<sectionsWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
  }

  export type sectionsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type sectionsWhereUniqueInput = {
    id?: string
  }

  export type sectionsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: sectionsCountOrderByAggregateInput
    _max?: sectionsMaxOrderByAggregateInput
    _min?: sectionsMinOrderByAggregateInput
  }

  export type sectionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<sectionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<sectionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<sectionsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
  }

  export type tecnologiesWhereInput = {
    AND?: Enumerable<tecnologiesWhereInput>
    OR?: Enumerable<tecnologiesWhereInput>
    NOT?: Enumerable<tecnologiesWhereInput>
    id?: StringFilter | string
    logo?: StringFilter | string
    name?: StringFilter | string
    url?: StringFilter | string
  }

  export type tecnologiesOrderByWithRelationInput = {
    id?: SortOrder
    logo?: SortOrder
    name?: SortOrder
    url?: SortOrder
  }

  export type tecnologiesWhereUniqueInput = {
    id?: string
  }

  export type tecnologiesOrderByWithAggregationInput = {
    id?: SortOrder
    logo?: SortOrder
    name?: SortOrder
    url?: SortOrder
    _count?: tecnologiesCountOrderByAggregateInput
    _max?: tecnologiesMaxOrderByAggregateInput
    _min?: tecnologiesMinOrderByAggregateInput
  }

  export type tecnologiesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tecnologiesScalarWhereWithAggregatesInput>
    OR?: Enumerable<tecnologiesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tecnologiesScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    logo?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
  }

  export type projectsWhereInput = {
    AND?: Enumerable<projectsWhereInput>
    OR?: Enumerable<projectsWhereInput>
    NOT?: Enumerable<projectsWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    description?: StringFilter | string
    images?: StringNullableListFilter
    tools?: StringNullableListFilter
    demo?: StringFilter | string
    repo?: StringFilter | string
  }

  export type projectsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    images?: SortOrder
    tools?: SortOrder
    demo?: SortOrder
    repo?: SortOrder
  }

  export type projectsWhereUniqueInput = {
    id?: string
  }

  export type projectsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    images?: SortOrder
    tools?: SortOrder
    demo?: SortOrder
    repo?: SortOrder
    _count?: projectsCountOrderByAggregateInput
    _max?: projectsMaxOrderByAggregateInput
    _min?: projectsMinOrderByAggregateInput
  }

  export type projectsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<projectsScalarWhereWithAggregatesInput>
    OR?: Enumerable<projectsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<projectsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    images?: StringNullableListFilter
    tools?: StringNullableListFilter
    demo?: StringWithAggregatesFilter | string
    repo?: StringWithAggregatesFilter | string
  }

  export type timelineWhereInput = {
    AND?: Enumerable<timelineWhereInput>
    OR?: Enumerable<timelineWhereInput>
    NOT?: Enumerable<timelineWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    cardTitle?: StringFilter | string
    url?: StringFilter | string
    cardSubtitle?: StringFilter | string
    cardDetailedText?: StringFilter | string
  }

  export type timelineOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    cardTitle?: SortOrder
    url?: SortOrder
    cardSubtitle?: SortOrder
    cardDetailedText?: SortOrder
  }

  export type timelineWhereUniqueInput = {
    id?: string
  }

  export type timelineOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    cardTitle?: SortOrder
    url?: SortOrder
    cardSubtitle?: SortOrder
    cardDetailedText?: SortOrder
    _count?: timelineCountOrderByAggregateInput
    _max?: timelineMaxOrderByAggregateInput
    _min?: timelineMinOrderByAggregateInput
  }

  export type timelineScalarWhereWithAggregatesInput = {
    AND?: Enumerable<timelineScalarWhereWithAggregatesInput>
    OR?: Enumerable<timelineScalarWhereWithAggregatesInput>
    NOT?: Enumerable<timelineScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    cardTitle?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    cardSubtitle?: StringWithAggregatesFilter | string
    cardDetailedText?: StringWithAggregatesFilter | string
  }

  export type sectionsCreateInput = {
    id?: string
    title: string
  }

  export type sectionsUncheckedCreateInput = {
    id?: string
    title: string
  }

  export type sectionsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type sectionsUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type sectionsCreateManyInput = {
    id?: string
    title: string
  }

  export type sectionsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type sectionsUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type tecnologiesCreateInput = {
    id?: string
    logo: string
    name: string
    url: string
  }

  export type tecnologiesUncheckedCreateInput = {
    id?: string
    logo: string
    name: string
    url: string
  }

  export type tecnologiesUpdateInput = {
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type tecnologiesUncheckedUpdateInput = {
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type tecnologiesCreateManyInput = {
    id?: string
    logo: string
    name: string
    url: string
  }

  export type tecnologiesUpdateManyMutationInput = {
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type tecnologiesUncheckedUpdateManyInput = {
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type projectsCreateInput = {
    id?: string
    title?: string
    description?: string
    images?: projectsCreateimagesInput | Enumerable<string>
    tools?: projectsCreatetoolsInput | Enumerable<string>
    demo?: string
    repo?: string
  }

  export type projectsUncheckedCreateInput = {
    id?: string
    title?: string
    description?: string
    images?: projectsCreateimagesInput | Enumerable<string>
    tools?: projectsCreatetoolsInput | Enumerable<string>
    demo?: string
    repo?: string
  }

  export type projectsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: projectsUpdateimagesInput | Enumerable<string>
    tools?: projectsUpdatetoolsInput | Enumerable<string>
    demo?: StringFieldUpdateOperationsInput | string
    repo?: StringFieldUpdateOperationsInput | string
  }

  export type projectsUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: projectsUpdateimagesInput | Enumerable<string>
    tools?: projectsUpdatetoolsInput | Enumerable<string>
    demo?: StringFieldUpdateOperationsInput | string
    repo?: StringFieldUpdateOperationsInput | string
  }

  export type projectsCreateManyInput = {
    id?: string
    title?: string
    description?: string
    images?: projectsCreateimagesInput | Enumerable<string>
    tools?: projectsCreatetoolsInput | Enumerable<string>
    demo?: string
    repo?: string
  }

  export type projectsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: projectsUpdateimagesInput | Enumerable<string>
    tools?: projectsUpdatetoolsInput | Enumerable<string>
    demo?: StringFieldUpdateOperationsInput | string
    repo?: StringFieldUpdateOperationsInput | string
  }

  export type projectsUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: projectsUpdateimagesInput | Enumerable<string>
    tools?: projectsUpdatetoolsInput | Enumerable<string>
    demo?: StringFieldUpdateOperationsInput | string
    repo?: StringFieldUpdateOperationsInput | string
  }

  export type timelineCreateInput = {
    id?: string
    title?: string
    cardTitle?: string
    url?: string
    cardSubtitle?: string
    cardDetailedText?: string
  }

  export type timelineUncheckedCreateInput = {
    id?: string
    title?: string
    cardTitle?: string
    url?: string
    cardSubtitle?: string
    cardDetailedText?: string
  }

  export type timelineUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    cardTitle?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    cardSubtitle?: StringFieldUpdateOperationsInput | string
    cardDetailedText?: StringFieldUpdateOperationsInput | string
  }

  export type timelineUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    cardTitle?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    cardSubtitle?: StringFieldUpdateOperationsInput | string
    cardDetailedText?: StringFieldUpdateOperationsInput | string
  }

  export type timelineCreateManyInput = {
    id?: string
    title?: string
    cardTitle?: string
    url?: string
    cardSubtitle?: string
    cardDetailedText?: string
  }

  export type timelineUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    cardTitle?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    cardSubtitle?: StringFieldUpdateOperationsInput | string
    cardDetailedText?: StringFieldUpdateOperationsInput | string
  }

  export type timelineUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    cardTitle?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    cardSubtitle?: StringFieldUpdateOperationsInput | string
    cardDetailedText?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type sectionsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type sectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type sectionsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type tecnologiesCountOrderByAggregateInput = {
    id?: SortOrder
    logo?: SortOrder
    name?: SortOrder
    url?: SortOrder
  }

  export type tecnologiesMaxOrderByAggregateInput = {
    id?: SortOrder
    logo?: SortOrder
    name?: SortOrder
    url?: SortOrder
  }

  export type tecnologiesMinOrderByAggregateInput = {
    id?: SortOrder
    logo?: SortOrder
    name?: SortOrder
    url?: SortOrder
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type projectsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    images?: SortOrder
    tools?: SortOrder
    demo?: SortOrder
    repo?: SortOrder
  }

  export type projectsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    demo?: SortOrder
    repo?: SortOrder
  }

  export type projectsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    demo?: SortOrder
    repo?: SortOrder
  }

  export type timelineCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cardTitle?: SortOrder
    url?: SortOrder
    cardSubtitle?: SortOrder
    cardDetailedText?: SortOrder
  }

  export type timelineMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cardTitle?: SortOrder
    url?: SortOrder
    cardSubtitle?: SortOrder
    cardDetailedText?: SortOrder
  }

  export type timelineMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cardTitle?: SortOrder
    url?: SortOrder
    cardSubtitle?: SortOrder
    cardDetailedText?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type projectsCreateimagesInput = {
    set: Enumerable<string>
  }

  export type projectsCreatetoolsInput = {
    set: Enumerable<string>
  }

  export type projectsUpdateimagesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type projectsUpdatetoolsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}