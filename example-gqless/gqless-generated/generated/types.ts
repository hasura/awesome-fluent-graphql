import * as extensions from "../extensions";
import {
  TypeData,
  ScalarType,
  EnumType,
  FieldsType,
  FieldsTypeArg
} from "gqless";

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any;

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<"Boolean">
>;

/**
 * @name Boolean_comparison_exp
 * @type INPUT_OBJECT
 */
export type Boolean_comparison_exp = {
  _eq: boolean | null;
  _gt: boolean | null;
  _gte: boolean | null;
  _in: boolean[] | null;
  _is_null: boolean | null;
  _lt: boolean | null;
  _lte: boolean | null;
  _neq: boolean | null;
  _nin: boolean[] | null;
};

/**
 * @name CacheControlScope
 * @type ENUM
 */
type t_CacheControlScope = EnumType<"PRIVATE" | "PUBLIC">;

/**
 * @name Float
 * @type SCALAR
 */
type t_Float<T extends number = number> = ScalarType<T, Extension<"Float">>;

/**
 * @name ID
 * @type SCALAR
 */
type t_ID<T extends string = string> = ScalarType<T, Extension<"ID">>;

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<"Int">>;

/**
 * @name Int_comparison_exp
 * @type INPUT_OBJECT
 */
export type Int_comparison_exp = {
  _eq: number | null;
  _gt: number | null;
  _gte: number | null;
  _in: number[] | null;
  _is_null: boolean | null;
  _lt: number | null;
  _lte: number | null;
  _neq: number | null;
  _nin: number[] | null;
};

/**
 * @name Query
 * @type OBJECT
 */
type t_Query = FieldsType<
  {
    __typename: t_String<"Query">;
    hello: t_String | null;
  },
  Extension<"Query">
>;

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<"String">>;

/**
 * @name String_comparison_exp
 * @type INPUT_OBJECT
 */
export type String_comparison_exp = {
  _eq: string | null;
  _gt: string | null;
  _gte: string | null;
  _ilike: string | null;
  _in: string[] | null;
  _is_null: boolean | null;
  _like: string | null;
  _lt: string | null;
  _lte: string | null;
  _neq: string | null;
  _nilike: string | null;
  _nin: string[] | null;
  _nlike: string | null;
  _nsimilar: string | null;
  _similar: string | null;
};

/**
 * @name Upload
 * @type SCALAR
 */
type t_Upload<T extends any = any> = ScalarType<T, Extension<"Upload">>;

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<"__Directive">;
    args: t___InputValue[];
    description: t_String | null;
    locations: t___DirectiveLocation[];
    name: t_String;
  },
  Extension<"__Directive">
>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | "ARGUMENT_DEFINITION"
  | "ENUM"
  | "ENUM_VALUE"
  | "FIELD"
  | "FIELD_DEFINITION"
  | "FRAGMENT_DEFINITION"
  | "FRAGMENT_SPREAD"
  | "INLINE_FRAGMENT"
  | "INPUT_FIELD_DEFINITION"
  | "INPUT_OBJECT"
  | "INTERFACE"
  | "MUTATION"
  | "OBJECT"
  | "QUERY"
  | "SCALAR"
  | "SCHEMA"
  | "SUBSCRIPTION"
  | "UNION"
>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<"__EnumValue">;
    deprecationReason: t_String | null;
    description: t_String | null;
    isDeprecated: t_Boolean;
    name: t_String;
  },
  Extension<"__EnumValue">
>;

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<"__Field">;
    args: t___InputValue[];
    deprecationReason: t_String | null;
    description: t_String | null;
    isDeprecated: t_Boolean;
    name: t_String;
    type: t___Type;
  },
  Extension<"__Field">
>;

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<"__InputValue">;
    defaultValue: t_String | null;
    description: t_String | null;
    name: t_String;
    type: t___Type;
  },
  Extension<"__InputValue">
>;

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<"__Schema">;
    directives: t___Directive[];
    mutationType: t___Type | null;
    queryType: t___Type;
    subscriptionType: t___Type | null;
    types: t___Type[];
  },
  Extension<"__Schema">
>;

/**
 * @name __Type
 * @type OBJECT
 */
type t___Type = FieldsType<
  {
    __typename: t_String<"__Type">;
    description: t_String | null;
    enumValues: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___EnumValue[] | null
    >;
    fields: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___Field[] | null
    >;
    inputFields: t___InputValue[] | null;
    interfaces: t___Type[] | null;
    kind: t___TypeKind;
    name: t_String | null;
    ofType: t___Type | null;
    possibleTypes: t___Type[] | null;
  },
  Extension<"__Type">
>;

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | "ENUM"
  | "INPUT_OBJECT"
  | "INTERFACE"
  | "LIST"
  | "NON_NULL"
  | "OBJECT"
  | "SCALAR"
  | "UNION"
>;

/**
 * @name conflict_action
 * @type ENUM
 */
type t_conflict_action = EnumType<"ignore" | "update">;

/**
 * @name mutation_root
 * @type OBJECT
 */
type t_mutation_root = FieldsType<
  {
    __typename: t_String<"mutation_root">;

    /**
     * delete data from the table: "todos"
     */
    delete_todos: FieldsTypeArg<
      { where: todos_bool_exp },
      t_todos_mutation_response | null
    >;

    /**
     * delete data from the table: "users"
     */
    delete_users: FieldsTypeArg<
      { where: users_bool_exp },
      t_users_mutation_response | null
    >;

    /**
     * insert data into the table: "todos"
     */
    insert_todos: FieldsTypeArg<
      { objects: todos_insert_input[]; on_conflict?: todos_on_conflict | null },
      t_todos_mutation_response | null
    >;

    /**
     * insert data into the table: "users"
     */
    insert_users: FieldsTypeArg<
      { objects: users_insert_input[]; on_conflict?: users_on_conflict | null },
      t_users_mutation_response | null
    >;

    /**
     * update data of the table: "todos"
     */
    update_todos: FieldsTypeArg<
      {
        _inc?: todos_inc_input | null;
        _set?: todos_set_input | null;
        where: todos_bool_exp;
      },
      t_todos_mutation_response | null
    >;

    /**
     * update data of the table: "users"
     */
    update_users: FieldsTypeArg<
      {
        _inc?: users_inc_input | null;
        _set?: users_set_input | null;
        where: users_bool_exp;
      },
      t_users_mutation_response | null
    >;
  },
  Extension<"mutation_root">
>;

/**
 * @name order_by
 * @type ENUM
 */
type t_order_by = EnumType<
  | "asc"
  | "asc_nulls_first"
  | "asc_nulls_last"
  | "desc"
  | "desc_nulls_first"
  | "desc_nulls_last"
>;

/**
 * @name query_root
 * @type OBJECT
 */
type t_query_root = FieldsType<
  {
    __typename: t_String<"query_root">;
    hello: t_String | null;

    /**
     * fetch data from the table: "todos"
     */
    todos: FieldsTypeArg<
      {
        distinct_on?: todos_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: todos_order_by[] | null;
        where?: todos_bool_exp | null;
      },
      t_todos[]
    >;

    /**
     * fetch aggregated fields from the table: "todos"
     */
    todos_aggregate: FieldsTypeArg<
      {
        distinct_on?: todos_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: todos_order_by[] | null;
        where?: todos_bool_exp | null;
      },
      t_todos_aggregate
    >;

    /**
     * fetch data from the table: "todos" using primary key columns
     */
    todos_by_pk: FieldsTypeArg<{ id: number }, t_todos | null>;

    /**
     * fetch data from the table: "users"
     */
    users: FieldsTypeArg<
      {
        distinct_on?: users_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: users_order_by[] | null;
        where?: users_bool_exp | null;
      },
      t_users[]
    >;

    /**
     * fetch aggregated fields from the table: "users"
     */
    users_aggregate: FieldsTypeArg<
      {
        distinct_on?: users_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: users_order_by[] | null;
        where?: users_bool_exp | null;
      },
      t_users_aggregate
    >;

    /**
     * fetch data from the table: "users" using primary key columns
     */
    users_by_pk: FieldsTypeArg<{ id: number }, t_users | null>;
  },
  Extension<"query_root">
>;

/**
 * @name subscription_root
 * @type OBJECT
 */
type t_subscription_root = FieldsType<
  {
    __typename: t_String<"subscription_root">;

    /**
     * fetch data from the table: "todos"
     */
    todos: FieldsTypeArg<
      {
        distinct_on?: todos_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: todos_order_by[] | null;
        where?: todos_bool_exp | null;
      },
      t_todos[]
    >;

    /**
     * fetch aggregated fields from the table: "todos"
     */
    todos_aggregate: FieldsTypeArg<
      {
        distinct_on?: todos_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: todos_order_by[] | null;
        where?: todos_bool_exp | null;
      },
      t_todos_aggregate
    >;

    /**
     * fetch data from the table: "todos" using primary key columns
     */
    todos_by_pk: FieldsTypeArg<{ id: number }, t_todos | null>;

    /**
     * fetch data from the table: "users"
     */
    users: FieldsTypeArg<
      {
        distinct_on?: users_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: users_order_by[] | null;
        where?: users_bool_exp | null;
      },
      t_users[]
    >;

    /**
     * fetch aggregated fields from the table: "users"
     */
    users_aggregate: FieldsTypeArg<
      {
        distinct_on?: users_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: users_order_by[] | null;
        where?: users_bool_exp | null;
      },
      t_users_aggregate
    >;

    /**
     * fetch data from the table: "users" using primary key columns
     */
    users_by_pk: FieldsTypeArg<{ id: number }, t_users | null>;
  },
  Extension<"subscription_root">
>;

/**
 * @name todos
 * @type OBJECT
 */
type t_todos = FieldsType<
  {
    __typename: t_String<"todos">;
    id: t_Int;
    is_completed: t_Boolean;
    text: t_String;

    /**
     * An object relationship
     */
    user: t_users;
    user_authID: t_String;
  },
  Extension<"todos">
>;

/**
 * @name todos_aggregate
 * @type OBJECT
 */
type t_todos_aggregate = FieldsType<
  {
    __typename: t_String<"todos_aggregate">;
    aggregate: t_todos_aggregate_fields | null;
    nodes: t_todos[];
  },
  Extension<"todos_aggregate">
>;

/**
 * @name todos_aggregate_fields
 * @type OBJECT
 */
type t_todos_aggregate_fields = FieldsType<
  {
    __typename: t_String<"todos_aggregate_fields">;
    avg: t_todos_avg_fields | null;
    count: FieldsTypeArg<
      { columns?: todos_select_column[] | null; distinct?: boolean | null },
      t_Int | null
    >;
    max: t_todos_max_fields | null;
    min: t_todos_min_fields | null;
    stddev: t_todos_stddev_fields | null;
    stddev_pop: t_todos_stddev_pop_fields | null;
    stddev_samp: t_todos_stddev_samp_fields | null;
    sum: t_todos_sum_fields | null;
    var_pop: t_todos_var_pop_fields | null;
    var_samp: t_todos_var_samp_fields | null;
    variance: t_todos_variance_fields | null;
  },
  Extension<"todos_aggregate_fields">
>;

/**
 * @name todos_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type todos_aggregate_order_by = {
  avg: todos_avg_order_by | null;
  count: order_by | null;
  max: todos_max_order_by | null;
  min: todos_min_order_by | null;
  stddev: todos_stddev_order_by | null;
  stddev_pop: todos_stddev_pop_order_by | null;
  stddev_samp: todos_stddev_samp_order_by | null;
  sum: todos_sum_order_by | null;
  var_pop: todos_var_pop_order_by | null;
  var_samp: todos_var_samp_order_by | null;
  variance: todos_variance_order_by | null;
};

/**
 * @name todos_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type todos_arr_rel_insert_input = {
  data: todos_insert_input[];
  on_conflict: todos_on_conflict | null;
};

/**
 * @name todos_avg_fields
 * @type OBJECT
 */
type t_todos_avg_fields = FieldsType<
  {
    __typename: t_String<"todos_avg_fields">;
    id: t_Float | null;
  },
  Extension<"todos_avg_fields">
>;

/**
 * @name todos_avg_order_by
 * @type INPUT_OBJECT
 */
export type todos_avg_order_by = { id: order_by | null };

/**
 * @name todos_bool_exp
 * @type INPUT_OBJECT
 */
export type todos_bool_exp = {
  _and: (todos_bool_exp | null)[] | null;
  _not: todos_bool_exp | null;
  _or: (todos_bool_exp | null)[] | null;
  id: Int_comparison_exp | null;
  is_completed: Boolean_comparison_exp | null;
  text: String_comparison_exp | null;
  user: users_bool_exp | null;
  user_authID: String_comparison_exp | null;
};

/**
 * @name todos_constraint
 * @type ENUM
 */
type t_todos_constraint = EnumType<"todos_pkey">;

/**
 * @name todos_inc_input
 * @type INPUT_OBJECT
 */
export type todos_inc_input = { id: number | null };

/**
 * @name todos_insert_input
 * @type INPUT_OBJECT
 */
export type todos_insert_input = {
  id: number | null;
  is_completed: boolean | null;
  text: string | null;
  user: users_obj_rel_insert_input | null;
  user_authID: string | null;
};

/**
 * @name todos_max_fields
 * @type OBJECT
 */
type t_todos_max_fields = FieldsType<
  {
    __typename: t_String<"todos_max_fields">;
    id: t_Int | null;
    text: t_String | null;
    user_authID: t_String | null;
  },
  Extension<"todos_max_fields">
>;

/**
 * @name todos_max_order_by
 * @type INPUT_OBJECT
 */
export type todos_max_order_by = {
  id: order_by | null;
  text: order_by | null;
  user_authID: order_by | null;
};

/**
 * @name todos_min_fields
 * @type OBJECT
 */
type t_todos_min_fields = FieldsType<
  {
    __typename: t_String<"todos_min_fields">;
    id: t_Int | null;
    text: t_String | null;
    user_authID: t_String | null;
  },
  Extension<"todos_min_fields">
>;

/**
 * @name todos_min_order_by
 * @type INPUT_OBJECT
 */
export type todos_min_order_by = {
  id: order_by | null;
  text: order_by | null;
  user_authID: order_by | null;
};

/**
 * @name todos_mutation_response
 * @type OBJECT
 */
type t_todos_mutation_response = FieldsType<
  {
    __typename: t_String<"todos_mutation_response">;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_todos[];
  },
  Extension<"todos_mutation_response">
>;

/**
 * @name todos_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type todos_obj_rel_insert_input = {
  data: todos_insert_input;
  on_conflict: todos_on_conflict | null;
};

/**
 * @name todos_on_conflict
 * @type INPUT_OBJECT
 */
export type todos_on_conflict = {
  constraint: todos_constraint;
  update_columns: todos_update_column[];
};

/**
 * @name todos_order_by
 * @type INPUT_OBJECT
 */
export type todos_order_by = {
  id: order_by | null;
  is_completed: order_by | null;
  text: order_by | null;
  user: users_order_by | null;
  user_authID: order_by | null;
};

/**
 * @name todos_select_column
 * @type ENUM
 */
type t_todos_select_column = EnumType<
  "id" | "is_completed" | "text" | "user_authID"
>;

/**
 * @name todos_set_input
 * @type INPUT_OBJECT
 */
export type todos_set_input = {
  id: number | null;
  is_completed: boolean | null;
  text: string | null;
  user_authID: string | null;
};

/**
 * @name todos_stddev_fields
 * @type OBJECT
 */
type t_todos_stddev_fields = FieldsType<
  {
    __typename: t_String<"todos_stddev_fields">;
    id: t_Float | null;
  },
  Extension<"todos_stddev_fields">
>;

/**
 * @name todos_stddev_order_by
 * @type INPUT_OBJECT
 */
export type todos_stddev_order_by = { id: order_by | null };

/**
 * @name todos_stddev_pop_fields
 * @type OBJECT
 */
type t_todos_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<"todos_stddev_pop_fields">;
    id: t_Float | null;
  },
  Extension<"todos_stddev_pop_fields">
>;

/**
 * @name todos_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type todos_stddev_pop_order_by = { id: order_by | null };

/**
 * @name todos_stddev_samp_fields
 * @type OBJECT
 */
type t_todos_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<"todos_stddev_samp_fields">;
    id: t_Float | null;
  },
  Extension<"todos_stddev_samp_fields">
>;

/**
 * @name todos_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type todos_stddev_samp_order_by = { id: order_by | null };

/**
 * @name todos_sum_fields
 * @type OBJECT
 */
type t_todos_sum_fields = FieldsType<
  {
    __typename: t_String<"todos_sum_fields">;
    id: t_Int | null;
  },
  Extension<"todos_sum_fields">
>;

/**
 * @name todos_sum_order_by
 * @type INPUT_OBJECT
 */
export type todos_sum_order_by = { id: order_by | null };

/**
 * @name todos_update_column
 * @type ENUM
 */
type t_todos_update_column = EnumType<
  "id" | "is_completed" | "text" | "user_authID"
>;

/**
 * @name todos_var_pop_fields
 * @type OBJECT
 */
type t_todos_var_pop_fields = FieldsType<
  {
    __typename: t_String<"todos_var_pop_fields">;
    id: t_Float | null;
  },
  Extension<"todos_var_pop_fields">
>;

/**
 * @name todos_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type todos_var_pop_order_by = { id: order_by | null };

/**
 * @name todos_var_samp_fields
 * @type OBJECT
 */
type t_todos_var_samp_fields = FieldsType<
  {
    __typename: t_String<"todos_var_samp_fields">;
    id: t_Float | null;
  },
  Extension<"todos_var_samp_fields">
>;

/**
 * @name todos_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type todos_var_samp_order_by = { id: order_by | null };

/**
 * @name todos_variance_fields
 * @type OBJECT
 */
type t_todos_variance_fields = FieldsType<
  {
    __typename: t_String<"todos_variance_fields">;
    id: t_Float | null;
  },
  Extension<"todos_variance_fields">
>;

/**
 * @name todos_variance_order_by
 * @type INPUT_OBJECT
 */
export type todos_variance_order_by = { id: order_by | null };

/**
 * @name users
 * @type OBJECT
 */
type t_users = FieldsType<
  {
    __typename: t_String<"users">;
    authID: t_String;
    id: t_Int;
    name: t_String;

    /**
     * An array relationship
     */
    todos: FieldsTypeArg<
      {
        distinct_on?: todos_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: todos_order_by[] | null;
        where?: todos_bool_exp | null;
      },
      t_todos[]
    >;

    /**
     * An aggregated array relationship
     */
    todos_aggregate: FieldsTypeArg<
      {
        distinct_on?: todos_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: todos_order_by[] | null;
        where?: todos_bool_exp | null;
      },
      t_todos_aggregate
    >;
  },
  Extension<"users">
>;

/**
 * @name users_aggregate
 * @type OBJECT
 */
type t_users_aggregate = FieldsType<
  {
    __typename: t_String<"users_aggregate">;
    aggregate: t_users_aggregate_fields | null;
    nodes: t_users[];
  },
  Extension<"users_aggregate">
>;

/**
 * @name users_aggregate_fields
 * @type OBJECT
 */
type t_users_aggregate_fields = FieldsType<
  {
    __typename: t_String<"users_aggregate_fields">;
    avg: t_users_avg_fields | null;
    count: FieldsTypeArg<
      { columns?: users_select_column[] | null; distinct?: boolean | null },
      t_Int | null
    >;
    max: t_users_max_fields | null;
    min: t_users_min_fields | null;
    stddev: t_users_stddev_fields | null;
    stddev_pop: t_users_stddev_pop_fields | null;
    stddev_samp: t_users_stddev_samp_fields | null;
    sum: t_users_sum_fields | null;
    var_pop: t_users_var_pop_fields | null;
    var_samp: t_users_var_samp_fields | null;
    variance: t_users_variance_fields | null;
  },
  Extension<"users_aggregate_fields">
>;

/**
 * @name users_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type users_aggregate_order_by = {
  avg: users_avg_order_by | null;
  count: order_by | null;
  max: users_max_order_by | null;
  min: users_min_order_by | null;
  stddev: users_stddev_order_by | null;
  stddev_pop: users_stddev_pop_order_by | null;
  stddev_samp: users_stddev_samp_order_by | null;
  sum: users_sum_order_by | null;
  var_pop: users_var_pop_order_by | null;
  var_samp: users_var_samp_order_by | null;
  variance: users_variance_order_by | null;
};

/**
 * @name users_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type users_arr_rel_insert_input = {
  data: users_insert_input[];
  on_conflict: users_on_conflict | null;
};

/**
 * @name users_avg_fields
 * @type OBJECT
 */
type t_users_avg_fields = FieldsType<
  {
    __typename: t_String<"users_avg_fields">;
    id: t_Float | null;
  },
  Extension<"users_avg_fields">
>;

/**
 * @name users_avg_order_by
 * @type INPUT_OBJECT
 */
export type users_avg_order_by = { id: order_by | null };

/**
 * @name users_bool_exp
 * @type INPUT_OBJECT
 */
export type users_bool_exp = {
  _and: (users_bool_exp | null)[] | null;
  _not: users_bool_exp | null;
  _or: (users_bool_exp | null)[] | null;
  authID: String_comparison_exp | null;
  id: Int_comparison_exp | null;
  name: String_comparison_exp | null;
  todos: todos_bool_exp | null;
};

/**
 * @name users_constraint
 * @type ENUM
 */
type t_users_constraint = EnumType<"users_authID_key" | "users_pkey">;

/**
 * @name users_inc_input
 * @type INPUT_OBJECT
 */
export type users_inc_input = { id: number | null };

/**
 * @name users_insert_input
 * @type INPUT_OBJECT
 */
export type users_insert_input = {
  authID: string | null;
  id: number | null;
  name: string | null;
  todos: todos_arr_rel_insert_input | null;
};

/**
 * @name users_max_fields
 * @type OBJECT
 */
type t_users_max_fields = FieldsType<
  {
    __typename: t_String<"users_max_fields">;
    authID: t_String | null;
    id: t_Int | null;
    name: t_String | null;
  },
  Extension<"users_max_fields">
>;

/**
 * @name users_max_order_by
 * @type INPUT_OBJECT
 */
export type users_max_order_by = {
  authID: order_by | null;
  id: order_by | null;
  name: order_by | null;
};

/**
 * @name users_min_fields
 * @type OBJECT
 */
type t_users_min_fields = FieldsType<
  {
    __typename: t_String<"users_min_fields">;
    authID: t_String | null;
    id: t_Int | null;
    name: t_String | null;
  },
  Extension<"users_min_fields">
>;

/**
 * @name users_min_order_by
 * @type INPUT_OBJECT
 */
export type users_min_order_by = {
  authID: order_by | null;
  id: order_by | null;
  name: order_by | null;
};

/**
 * @name users_mutation_response
 * @type OBJECT
 */
type t_users_mutation_response = FieldsType<
  {
    __typename: t_String<"users_mutation_response">;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_users[];
  },
  Extension<"users_mutation_response">
>;

/**
 * @name users_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type users_obj_rel_insert_input = {
  data: users_insert_input;
  on_conflict: users_on_conflict | null;
};

/**
 * @name users_on_conflict
 * @type INPUT_OBJECT
 */
export type users_on_conflict = {
  constraint: users_constraint;
  update_columns: users_update_column[];
};

/**
 * @name users_order_by
 * @type INPUT_OBJECT
 */
export type users_order_by = {
  authID: order_by | null;
  id: order_by | null;
  name: order_by | null;
  todos_aggregate: todos_aggregate_order_by | null;
};

/**
 * @name users_select_column
 * @type ENUM
 */
type t_users_select_column = EnumType<"authID" | "id" | "name">;

/**
 * @name users_set_input
 * @type INPUT_OBJECT
 */
export type users_set_input = {
  authID: string | null;
  id: number | null;
  name: string | null;
};

/**
 * @name users_stddev_fields
 * @type OBJECT
 */
type t_users_stddev_fields = FieldsType<
  {
    __typename: t_String<"users_stddev_fields">;
    id: t_Float | null;
  },
  Extension<"users_stddev_fields">
>;

/**
 * @name users_stddev_order_by
 * @type INPUT_OBJECT
 */
export type users_stddev_order_by = { id: order_by | null };

/**
 * @name users_stddev_pop_fields
 * @type OBJECT
 */
type t_users_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<"users_stddev_pop_fields">;
    id: t_Float | null;
  },
  Extension<"users_stddev_pop_fields">
>;

/**
 * @name users_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type users_stddev_pop_order_by = { id: order_by | null };

/**
 * @name users_stddev_samp_fields
 * @type OBJECT
 */
type t_users_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<"users_stddev_samp_fields">;
    id: t_Float | null;
  },
  Extension<"users_stddev_samp_fields">
>;

/**
 * @name users_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type users_stddev_samp_order_by = { id: order_by | null };

/**
 * @name users_sum_fields
 * @type OBJECT
 */
type t_users_sum_fields = FieldsType<
  {
    __typename: t_String<"users_sum_fields">;
    id: t_Int | null;
  },
  Extension<"users_sum_fields">
>;

/**
 * @name users_sum_order_by
 * @type INPUT_OBJECT
 */
export type users_sum_order_by = { id: order_by | null };

/**
 * @name users_update_column
 * @type ENUM
 */
type t_users_update_column = EnumType<"authID" | "id" | "name">;

/**
 * @name users_var_pop_fields
 * @type OBJECT
 */
type t_users_var_pop_fields = FieldsType<
  {
    __typename: t_String<"users_var_pop_fields">;
    id: t_Float | null;
  },
  Extension<"users_var_pop_fields">
>;

/**
 * @name users_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type users_var_pop_order_by = { id: order_by | null };

/**
 * @name users_var_samp_fields
 * @type OBJECT
 */
type t_users_var_samp_fields = FieldsType<
  {
    __typename: t_String<"users_var_samp_fields">;
    id: t_Float | null;
  },
  Extension<"users_var_samp_fields">
>;

/**
 * @name users_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type users_var_samp_order_by = { id: order_by | null };

/**
 * @name users_variance_fields
 * @type OBJECT
 */
type t_users_variance_fields = FieldsType<
  {
    __typename: t_String<"users_variance_fields">;
    id: t_Float | null;
  },
  Extension<"users_variance_fields">
>;

/**
 * @name users_variance_order_by
 * @type INPUT_OBJECT
 */
export type users_variance_order_by = { id: order_by | null };

/**
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>;

/**
 * @name CacheControlScope
 * @type ENUM
 */
export type CacheControlScope = TypeData<t_CacheControlScope>;

/**
 * @name Float
 * @type SCALAR
 */
export type Float = TypeData<t_Float>;

/**
 * @name ID
 * @type SCALAR
 */
export type ID = TypeData<t_ID>;

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>;

/**
 * @name Query
 * @type OBJECT
 */
export type Query = TypeData<t_Query>;

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>;

/**
 * @name Upload
 * @type SCALAR
 */
export type Upload = TypeData<t_Upload>;

/**
 * @name __Directive
 * @type OBJECT
 */
export type __Directive = TypeData<t___Directive>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
export type __DirectiveLocation = TypeData<t___DirectiveLocation>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>;

/**
 * @name __Field
 * @type OBJECT
 */
export type __Field = TypeData<t___Field>;

/**
 * @name __InputValue
 * @type OBJECT
 */
export type __InputValue = TypeData<t___InputValue>;

/**
 * @name __Schema
 * @type OBJECT
 */
export type __Schema = TypeData<t___Schema>;

/**
 * @name __Type
 * @type OBJECT
 */
export type __Type = TypeData<t___Type>;

/**
 * @name __TypeKind
 * @type ENUM
 */
export type __TypeKind = TypeData<t___TypeKind>;

/**
 * @name conflict_action
 * @type ENUM
 */
export type conflict_action = TypeData<t_conflict_action>;

/**
 * @name mutation_root
 * @type OBJECT
 */
export type mutation_root = TypeData<t_mutation_root>;

/**
 * @name order_by
 * @type ENUM
 */
export type order_by = TypeData<t_order_by>;

/**
 * @name query_root
 * @type OBJECT
 */
export type query_root = TypeData<t_query_root>;

/**
 * @name subscription_root
 * @type OBJECT
 */
export type subscription_root = TypeData<t_subscription_root>;

/**
 * @name todos
 * @type OBJECT
 */
export type todos = TypeData<t_todos>;

/**
 * @name todos_aggregate
 * @type OBJECT
 */
export type todos_aggregate = TypeData<t_todos_aggregate>;

/**
 * @name todos_aggregate_fields
 * @type OBJECT
 */
export type todos_aggregate_fields = TypeData<t_todos_aggregate_fields>;

/**
 * @name todos_avg_fields
 * @type OBJECT
 */
export type todos_avg_fields = TypeData<t_todos_avg_fields>;

/**
 * @name todos_constraint
 * @type ENUM
 */
export type todos_constraint = TypeData<t_todos_constraint>;

/**
 * @name todos_max_fields
 * @type OBJECT
 */
export type todos_max_fields = TypeData<t_todos_max_fields>;

/**
 * @name todos_min_fields
 * @type OBJECT
 */
export type todos_min_fields = TypeData<t_todos_min_fields>;

/**
 * @name todos_mutation_response
 * @type OBJECT
 */
export type todos_mutation_response = TypeData<t_todos_mutation_response>;

/**
 * @name todos_select_column
 * @type ENUM
 */
export type todos_select_column = TypeData<t_todos_select_column>;

/**
 * @name todos_stddev_fields
 * @type OBJECT
 */
export type todos_stddev_fields = TypeData<t_todos_stddev_fields>;

/**
 * @name todos_stddev_pop_fields
 * @type OBJECT
 */
export type todos_stddev_pop_fields = TypeData<t_todos_stddev_pop_fields>;

/**
 * @name todos_stddev_samp_fields
 * @type OBJECT
 */
export type todos_stddev_samp_fields = TypeData<t_todos_stddev_samp_fields>;

/**
 * @name todos_sum_fields
 * @type OBJECT
 */
export type todos_sum_fields = TypeData<t_todos_sum_fields>;

/**
 * @name todos_update_column
 * @type ENUM
 */
export type todos_update_column = TypeData<t_todos_update_column>;

/**
 * @name todos_var_pop_fields
 * @type OBJECT
 */
export type todos_var_pop_fields = TypeData<t_todos_var_pop_fields>;

/**
 * @name todos_var_samp_fields
 * @type OBJECT
 */
export type todos_var_samp_fields = TypeData<t_todos_var_samp_fields>;

/**
 * @name todos_variance_fields
 * @type OBJECT
 */
export type todos_variance_fields = TypeData<t_todos_variance_fields>;

/**
 * @name users
 * @type OBJECT
 */
export type users = TypeData<t_users>;

/**
 * @name users_aggregate
 * @type OBJECT
 */
export type users_aggregate = TypeData<t_users_aggregate>;

/**
 * @name users_aggregate_fields
 * @type OBJECT
 */
export type users_aggregate_fields = TypeData<t_users_aggregate_fields>;

/**
 * @name users_avg_fields
 * @type OBJECT
 */
export type users_avg_fields = TypeData<t_users_avg_fields>;

/**
 * @name users_constraint
 * @type ENUM
 */
export type users_constraint = TypeData<t_users_constraint>;

/**
 * @name users_max_fields
 * @type OBJECT
 */
export type users_max_fields = TypeData<t_users_max_fields>;

/**
 * @name users_min_fields
 * @type OBJECT
 */
export type users_min_fields = TypeData<t_users_min_fields>;

/**
 * @name users_mutation_response
 * @type OBJECT
 */
export type users_mutation_response = TypeData<t_users_mutation_response>;

/**
 * @name users_select_column
 * @type ENUM
 */
export type users_select_column = TypeData<t_users_select_column>;

/**
 * @name users_stddev_fields
 * @type OBJECT
 */
export type users_stddev_fields = TypeData<t_users_stddev_fields>;

/**
 * @name users_stddev_pop_fields
 * @type OBJECT
 */
export type users_stddev_pop_fields = TypeData<t_users_stddev_pop_fields>;

/**
 * @name users_stddev_samp_fields
 * @type OBJECT
 */
export type users_stddev_samp_fields = TypeData<t_users_stddev_samp_fields>;

/**
 * @name users_sum_fields
 * @type OBJECT
 */
export type users_sum_fields = TypeData<t_users_sum_fields>;

/**
 * @name users_update_column
 * @type ENUM
 */
export type users_update_column = TypeData<t_users_update_column>;

/**
 * @name users_var_pop_fields
 * @type OBJECT
 */
export type users_var_pop_fields = TypeData<t_users_var_pop_fields>;

/**
 * @name users_var_samp_fields
 * @type OBJECT
 */
export type users_var_samp_fields = TypeData<t_users_var_samp_fields>;

/**
 * @name users_variance_fields
 * @type OBJECT
 */
export type users_variance_fields = TypeData<t_users_variance_fields>;
