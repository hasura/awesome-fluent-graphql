import { Observable } from 'graphql-typed-client'

/** query root */
export interface query_root {
  hello: String | null
  /** fetch data from the table: "todos" */
  todos: todos[]
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: todos_aggregate
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk: todos | null
  /** fetch data from the table: "users" */
  users: users[]
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: users_aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: users | null
  __typename: 'query_root'
}

/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String = string

/** select columns of table "todos" */
export enum todos_select_column {
  /** column name */
  id = 'id',
  /** column name */
  is_completed = 'is_completed',
  /** column name */
  text = 'text',
  /** column name */
  user_authID = 'user_authID',
}

/** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
export type Int = number

/** column ordering options */
export enum order_by {
  /** in the ascending order, nulls last */
  asc = 'asc',
  /** in the ascending order, nulls first */
  asc_nulls_first = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  asc_nulls_last = 'asc_nulls_last',
  /** in the descending order, nulls first */
  desc = 'desc',
  /** in the descending order, nulls first */
  desc_nulls_first = 'desc_nulls_first',
  /** in the descending order, nulls last */
  desc_nulls_last = 'desc_nulls_last',
}

/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean = boolean

/** columns and relationships of "todos" */
export interface todos {
  id: Int
  is_completed: Boolean
  text: String
  /** An object relationship */
  user: users
  user_authID: String
  __typename: 'todos'
}

/** columns and relationships of "users" */
export interface users {
  authID: String
  id: Int
  name: String
  /** An array relationship */
  todos: todos[]
  /** An aggregated array relationship */
  todos_aggregate: todos_aggregate
  __typename: 'users'
}

/** aggregated selection of "todos" */
export interface todos_aggregate {
  aggregate: todos_aggregate_fields | null
  nodes: todos[]
  __typename: 'todos_aggregate'
}

/** aggregate fields of "todos" */
export interface todos_aggregate_fields {
  avg: todos_avg_fields | null
  count: Int | null
  max: todos_max_fields | null
  min: todos_min_fields | null
  stddev: todos_stddev_fields | null
  stddev_pop: todos_stddev_pop_fields | null
  stddev_samp: todos_stddev_samp_fields | null
  sum: todos_sum_fields | null
  var_pop: todos_var_pop_fields | null
  var_samp: todos_var_samp_fields | null
  variance: todos_variance_fields | null
  __typename: 'todos_aggregate_fields'
}

/** aggregate avg on columns */
export interface todos_avg_fields {
  id: Float | null
  __typename: 'todos_avg_fields'
}

/** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
export type Float = number

/** aggregate max on columns */
export interface todos_max_fields {
  id: Int | null
  text: String | null
  user_authID: String | null
  __typename: 'todos_max_fields'
}

/** aggregate min on columns */
export interface todos_min_fields {
  id: Int | null
  text: String | null
  user_authID: String | null
  __typename: 'todos_min_fields'
}

/** aggregate stddev on columns */
export interface todos_stddev_fields {
  id: Float | null
  __typename: 'todos_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface todos_stddev_pop_fields {
  id: Float | null
  __typename: 'todos_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface todos_stddev_samp_fields {
  id: Float | null
  __typename: 'todos_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface todos_sum_fields {
  id: Int | null
  __typename: 'todos_sum_fields'
}

/** aggregate var_pop on columns */
export interface todos_var_pop_fields {
  id: Float | null
  __typename: 'todos_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface todos_var_samp_fields {
  id: Float | null
  __typename: 'todos_var_samp_fields'
}

/** aggregate variance on columns */
export interface todos_variance_fields {
  id: Float | null
  __typename: 'todos_variance_fields'
}

/** select columns of table "users" */
export enum users_select_column {
  /** column name */
  authID = 'authID',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
}

/** aggregated selection of "users" */
export interface users_aggregate {
  aggregate: users_aggregate_fields | null
  nodes: users[]
  __typename: 'users_aggregate'
}

/** aggregate fields of "users" */
export interface users_aggregate_fields {
  avg: users_avg_fields | null
  count: Int | null
  max: users_max_fields | null
  min: users_min_fields | null
  stddev: users_stddev_fields | null
  stddev_pop: users_stddev_pop_fields | null
  stddev_samp: users_stddev_samp_fields | null
  sum: users_sum_fields | null
  var_pop: users_var_pop_fields | null
  var_samp: users_var_samp_fields | null
  variance: users_variance_fields | null
  __typename: 'users_aggregate_fields'
}

/** aggregate avg on columns */
export interface users_avg_fields {
  id: Float | null
  __typename: 'users_avg_fields'
}

/** aggregate max on columns */
export interface users_max_fields {
  authID: String | null
  id: Int | null
  name: String | null
  __typename: 'users_max_fields'
}

/** aggregate min on columns */
export interface users_min_fields {
  authID: String | null
  id: Int | null
  name: String | null
  __typename: 'users_min_fields'
}

/** aggregate stddev on columns */
export interface users_stddev_fields {
  id: Float | null
  __typename: 'users_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface users_stddev_pop_fields {
  id: Float | null
  __typename: 'users_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface users_stddev_samp_fields {
  id: Float | null
  __typename: 'users_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface users_sum_fields {
  id: Int | null
  __typename: 'users_sum_fields'
}

/** aggregate var_pop on columns */
export interface users_var_pop_fields {
  id: Float | null
  __typename: 'users_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface users_var_samp_fields {
  id: Float | null
  __typename: 'users_var_samp_fields'
}

/** aggregate variance on columns */
export interface users_variance_fields {
  id: Float | null
  __typename: 'users_variance_fields'
}

/** mutation root */
export interface mutation_root {
  /** delete data from the table: "todos" */
  delete_todos: todos_mutation_response | null
  /** delete data from the table: "users" */
  delete_users: users_mutation_response | null
  /** insert data into the table: "todos" */
  insert_todos: todos_mutation_response | null
  /** insert data into the table: "users" */
  insert_users: users_mutation_response | null
  /** update data of the table: "todos" */
  update_todos: todos_mutation_response | null
  /** update data of the table: "users" */
  update_users: users_mutation_response | null
  __typename: 'mutation_root'
}

/** response of any mutation on the table "todos" */
export interface todos_mutation_response {
  /** number of affected rows by the mutation */
  affected_rows: Int
  /** data of the affected rows by the mutation */
  returning: todos[]
  __typename: 'todos_mutation_response'
}

/** response of any mutation on the table "users" */
export interface users_mutation_response {
  /** number of affected rows by the mutation */
  affected_rows: Int
  /** data of the affected rows by the mutation */
  returning: users[]
  __typename: 'users_mutation_response'
}

/** unique or primary key constraints on table "todos" */
export enum todos_constraint {
  /** unique or primary key constraint */
  todos_pkey = 'todos_pkey',
}

/** update columns of table "todos" */
export enum todos_update_column {
  /** column name */
  id = 'id',
  /** column name */
  is_completed = 'is_completed',
  /** column name */
  text = 'text',
  /** column name */
  user_authID = 'user_authID',
}

/** unique or primary key constraints on table "users" */
export enum users_constraint {
  /** unique or primary key constraint */
  users_authID_key = 'users_authID_key',
  /** unique or primary key constraint */
  users_pkey = 'users_pkey',
}

/** update columns of table "users" */
export enum users_update_column {
  /** column name */
  authID = 'authID',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
}

/** subscription root */
export interface subscription_root {
  /** fetch data from the table: "todos" */
  todos: todos[]
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: todos_aggregate
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk: todos | null
  /** fetch data from the table: "users" */
  users: users[]
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: users_aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: users | null
  __typename: 'subscription_root'
}

export enum CacheControlScope {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC',
}

/** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
export type ID = string

export interface Query {
  hello: String | null
  __typename: 'Query'
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any

/** conflict action */
export enum conflict_action {
  /** ignore the insert on this row */
  ignore = 'ignore',
  /** update the row with the given values */
  update = 'update',
}

/** query root */
export interface query_rootRequest {
  hello?: boolean | number
  /** fetch data from the table: "todos" */
  todos?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: todos_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: todos_order_by[] | null
          /** filter the rows returned */
          where?: todos_bool_exp | null
        },
        todosRequest,
      ]
    | todosRequest
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: todos_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: todos_order_by[] | null
          /** filter the rows returned */
          where?: todos_bool_exp | null
        },
        todos_aggregateRequest,
      ]
    | todos_aggregateRequest
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: [{ id: Int }, todosRequest]
  /** fetch data from the table: "users" */
  users?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: users_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: users_order_by[] | null
          /** filter the rows returned */
          where?: users_bool_exp | null
        },
        usersRequest,
      ]
    | usersRequest
  /** fetch aggregated fields from the table: "users" */
  users_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: users_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: users_order_by[] | null
          /** filter the rows returned */
          where?: users_bool_exp | null
        },
        users_aggregateRequest,
      ]
    | users_aggregateRequest
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: [{ id: Int }, usersRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** ordering options when selecting data from "todos" */
export interface todos_order_by {
  id?: order_by | null
  is_completed?: order_by | null
  text?: order_by | null
  user?: users_order_by | null
  user_authID?: order_by | null
}

/** ordering options when selecting data from "users" */
export interface users_order_by {
  authID?: order_by | null
  id?: order_by | null
  name?: order_by | null
  todos_aggregate?: todos_aggregate_order_by | null
}

/** order by aggregate values of table "todos" */
export interface todos_aggregate_order_by {
  avg?: todos_avg_order_by | null
  count?: order_by | null
  max?: todos_max_order_by | null
  min?: todos_min_order_by | null
  stddev?: todos_stddev_order_by | null
  stddev_pop?: todos_stddev_pop_order_by | null
  stddev_samp?: todos_stddev_samp_order_by | null
  sum?: todos_sum_order_by | null
  var_pop?: todos_var_pop_order_by | null
  var_samp?: todos_var_samp_order_by | null
  variance?: todos_variance_order_by | null
}

/** order by avg() on columns of table "todos" */
export interface todos_avg_order_by {
  id?: order_by | null
}

/** order by max() on columns of table "todos" */
export interface todos_max_order_by {
  id?: order_by | null
  text?: order_by | null
  user_authID?: order_by | null
}

/** order by min() on columns of table "todos" */
export interface todos_min_order_by {
  id?: order_by | null
  text?: order_by | null
  user_authID?: order_by | null
}

/** order by stddev() on columns of table "todos" */
export interface todos_stddev_order_by {
  id?: order_by | null
}

/** order by stddev_pop() on columns of table "todos" */
export interface todos_stddev_pop_order_by {
  id?: order_by | null
}

/** order by stddev_samp() on columns of table "todos" */
export interface todos_stddev_samp_order_by {
  id?: order_by | null
}

/** order by sum() on columns of table "todos" */
export interface todos_sum_order_by {
  id?: order_by | null
}

/** order by var_pop() on columns of table "todos" */
export interface todos_var_pop_order_by {
  id?: order_by | null
}

/** order by var_samp() on columns of table "todos" */
export interface todos_var_samp_order_by {
  id?: order_by | null
}

/** order by variance() on columns of table "todos" */
export interface todos_variance_order_by {
  id?: order_by | null
}

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export interface todos_bool_exp {
  _and?: (todos_bool_exp | null)[] | null
  _not?: todos_bool_exp | null
  _or?: (todos_bool_exp | null)[] | null
  id?: Int_comparison_exp | null
  is_completed?: Boolean_comparison_exp | null
  text?: String_comparison_exp | null
  user?: users_bool_exp | null
  user_authID?: String_comparison_exp | null
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {
  _eq?: Int | null
  _gt?: Int | null
  _gte?: Int | null
  _in?: Int[] | null
  _is_null?: Boolean | null
  _lt?: Int | null
  _lte?: Int | null
  _neq?: Int | null
  _nin?: Int[] | null
}

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {
  _eq?: Boolean | null
  _gt?: Boolean | null
  _gte?: Boolean | null
  _in?: Boolean[] | null
  _is_null?: Boolean | null
  _lt?: Boolean | null
  _lte?: Boolean | null
  _neq?: Boolean | null
  _nin?: Boolean[] | null
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: String | null
  _gt?: String | null
  _gte?: String | null
  _ilike?: String | null
  _in?: String[] | null
  _is_null?: Boolean | null
  _like?: String | null
  _lt?: String | null
  _lte?: String | null
  _neq?: String | null
  _nilike?: String | null
  _nin?: String[] | null
  _nlike?: String | null
  _nsimilar?: String | null
  _similar?: String | null
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface users_bool_exp {
  _and?: (users_bool_exp | null)[] | null
  _not?: users_bool_exp | null
  _or?: (users_bool_exp | null)[] | null
  authID?: String_comparison_exp | null
  id?: Int_comparison_exp | null
  name?: String_comparison_exp | null
  todos?: todos_bool_exp | null
}

/** columns and relationships of "todos" */
export interface todosRequest {
  id?: boolean | number
  is_completed?: boolean | number
  text?: boolean | number
  /** An object relationship */
  user?: usersRequest
  user_authID?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** columns and relationships of "users" */
export interface usersRequest {
  authID?: boolean | number
  id?: boolean | number
  name?: boolean | number
  /** An array relationship */
  todos?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: todos_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: todos_order_by[] | null
          /** filter the rows returned */
          where?: todos_bool_exp | null
        },
        todosRequest,
      ]
    | todosRequest
  /** An aggregated array relationship */
  todos_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: todos_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: todos_order_by[] | null
          /** filter the rows returned */
          where?: todos_bool_exp | null
        },
        todos_aggregateRequest,
      ]
    | todos_aggregateRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "todos" */
export interface todos_aggregateRequest {
  aggregate?: todos_aggregate_fieldsRequest
  nodes?: todosRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "todos" */
export interface todos_aggregate_fieldsRequest {
  avg?: todos_avg_fieldsRequest
  count?: [{ columns?: todos_select_column[] | null; distinct?: Boolean | null }] | boolean | number
  max?: todos_max_fieldsRequest
  min?: todos_min_fieldsRequest
  stddev?: todos_stddev_fieldsRequest
  stddev_pop?: todos_stddev_pop_fieldsRequest
  stddev_samp?: todos_stddev_samp_fieldsRequest
  sum?: todos_sum_fieldsRequest
  var_pop?: todos_var_pop_fieldsRequest
  var_samp?: todos_var_samp_fieldsRequest
  variance?: todos_variance_fieldsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface todos_avg_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate max on columns */
export interface todos_max_fieldsRequest {
  id?: boolean | number
  text?: boolean | number
  user_authID?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface todos_min_fieldsRequest {
  id?: boolean | number
  text?: boolean | number
  user_authID?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev on columns */
export interface todos_stddev_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface todos_stddev_pop_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface todos_stddev_samp_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate sum on columns */
export interface todos_sum_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_pop on columns */
export interface todos_var_pop_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface todos_var_samp_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface todos_variance_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "users" */
export interface users_aggregateRequest {
  aggregate?: users_aggregate_fieldsRequest
  nodes?: usersRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "users" */
export interface users_aggregate_fieldsRequest {
  avg?: users_avg_fieldsRequest
  count?: [{ columns?: users_select_column[] | null; distinct?: Boolean | null }] | boolean | number
  max?: users_max_fieldsRequest
  min?: users_min_fieldsRequest
  stddev?: users_stddev_fieldsRequest
  stddev_pop?: users_stddev_pop_fieldsRequest
  stddev_samp?: users_stddev_samp_fieldsRequest
  sum?: users_sum_fieldsRequest
  var_pop?: users_var_pop_fieldsRequest
  var_samp?: users_var_samp_fieldsRequest
  variance?: users_variance_fieldsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface users_avg_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate max on columns */
export interface users_max_fieldsRequest {
  authID?: boolean | number
  id?: boolean | number
  name?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface users_min_fieldsRequest {
  authID?: boolean | number
  id?: boolean | number
  name?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev on columns */
export interface users_stddev_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface users_stddev_pop_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface users_stddev_samp_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate sum on columns */
export interface users_sum_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_pop on columns */
export interface users_var_pop_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface users_var_samp_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface users_variance_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** mutation root */
export interface mutation_rootRequest {
  /** delete data from the table: "todos" */
  delete_todos?: [
    {
      /** filter the rows which have to be deleted */
      where: todos_bool_exp
    },
    todos_mutation_responseRequest,
  ]
  /** delete data from the table: "users" */
  delete_users?: [
    {
      /** filter the rows which have to be deleted */
      where: users_bool_exp
    },
    users_mutation_responseRequest,
  ]
  /** insert data into the table: "todos" */
  insert_todos?: [
    {
      /** the rows to be inserted */
      objects: todos_insert_input[]
      /** on conflict condition */
      on_conflict?: todos_on_conflict | null
    },
    todos_mutation_responseRequest,
  ]
  /** insert data into the table: "users" */
  insert_users?: [
    {
      /** the rows to be inserted */
      objects: users_insert_input[]
      /** on conflict condition */
      on_conflict?: users_on_conflict | null
    },
    users_mutation_responseRequest,
  ]
  /** update data of the table: "todos" */
  update_todos?: [
    {
      /** increments the integer columns with given value of the filtered values */
      _inc?: todos_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: todos_set_input | null
      /** filter the rows which have to be updated */
      where: todos_bool_exp
    },
    todos_mutation_responseRequest,
  ]
  /** update data of the table: "users" */
  update_users?: [
    {
      /** increments the integer columns with given value of the filtered values */
      _inc?: users_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: users_set_input | null
      /** filter the rows which have to be updated */
      where: users_bool_exp
    },
    users_mutation_responseRequest,
  ]
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "todos" */
export interface todos_mutation_responseRequest {
  /** number of affected rows by the mutation */
  affected_rows?: boolean | number
  /** data of the affected rows by the mutation */
  returning?: todosRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "users" */
export interface users_mutation_responseRequest {
  /** number of affected rows by the mutation */
  affected_rows?: boolean | number
  /** data of the affected rows by the mutation */
  returning?: usersRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting data into table "todos" */
export interface todos_insert_input {
  id?: Int | null
  is_completed?: Boolean | null
  text?: String | null
  user?: users_obj_rel_insert_input | null
  user_authID?: String | null
}

/** input type for inserting object relation for remote table "users" */
export interface users_obj_rel_insert_input {
  data: users_insert_input
  on_conflict?: users_on_conflict | null
}

/** input type for inserting data into table "users" */
export interface users_insert_input {
  authID?: String | null
  id?: Int | null
  name?: String | null
  todos?: todos_arr_rel_insert_input | null
}

/** input type for inserting array relation for remote table "todos" */
export interface todos_arr_rel_insert_input {
  data: todos_insert_input[]
  on_conflict?: todos_on_conflict | null
}

/** on conflict condition type for table "todos" */
export interface todos_on_conflict {
  constraint: todos_constraint
  update_columns: todos_update_column[]
}

/** on conflict condition type for table "users" */
export interface users_on_conflict {
  constraint: users_constraint
  update_columns: users_update_column[]
}

/** input type for incrementing integer columne in table "todos" */
export interface todos_inc_input {
  id?: Int | null
}

/** input type for updating data in table "todos" */
export interface todos_set_input {
  id?: Int | null
  is_completed?: Boolean | null
  text?: String | null
  user_authID?: String | null
}

/** input type for incrementing integer columne in table "users" */
export interface users_inc_input {
  id?: Int | null
}

/** input type for updating data in table "users" */
export interface users_set_input {
  authID?: String | null
  id?: Int | null
  name?: String | null
}

/** subscription root */
export interface subscription_rootRequest {
  /** fetch data from the table: "todos" */
  todos?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: todos_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: todos_order_by[] | null
          /** filter the rows returned */
          where?: todos_bool_exp | null
        },
        todosRequest,
      ]
    | todosRequest
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: todos_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: todos_order_by[] | null
          /** filter the rows returned */
          where?: todos_bool_exp | null
        },
        todos_aggregateRequest,
      ]
    | todos_aggregateRequest
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: [{ id: Int }, todosRequest]
  /** fetch data from the table: "users" */
  users?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: users_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: users_order_by[] | null
          /** filter the rows returned */
          where?: users_bool_exp | null
        },
        usersRequest,
      ]
    | usersRequest
  /** fetch aggregated fields from the table: "users" */
  users_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: users_select_column[] | null
          /** limit the nuber of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: users_order_by[] | null
          /** filter the rows returned */
          where?: users_bool_exp | null
        },
        users_aggregateRequest,
      ]
    | users_aggregateRequest
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: [{ id: Int }, usersRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface QueryRequest {
  hello?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "todos" */
export interface todos_obj_rel_insert_input {
  data: todos_insert_input
  on_conflict?: todos_on_conflict | null
}

/** order by aggregate values of table "users" */
export interface users_aggregate_order_by {
  avg?: users_avg_order_by | null
  count?: order_by | null
  max?: users_max_order_by | null
  min?: users_min_order_by | null
  stddev?: users_stddev_order_by | null
  stddev_pop?: users_stddev_pop_order_by | null
  stddev_samp?: users_stddev_samp_order_by | null
  sum?: users_sum_order_by | null
  var_pop?: users_var_pop_order_by | null
  var_samp?: users_var_samp_order_by | null
  variance?: users_variance_order_by | null
}

/** order by avg() on columns of table "users" */
export interface users_avg_order_by {
  id?: order_by | null
}

/** order by max() on columns of table "users" */
export interface users_max_order_by {
  authID?: order_by | null
  id?: order_by | null
  name?: order_by | null
}

/** order by min() on columns of table "users" */
export interface users_min_order_by {
  authID?: order_by | null
  id?: order_by | null
  name?: order_by | null
}

/** order by stddev() on columns of table "users" */
export interface users_stddev_order_by {
  id?: order_by | null
}

/** order by stddev_pop() on columns of table "users" */
export interface users_stddev_pop_order_by {
  id?: order_by | null
}

/** order by stddev_samp() on columns of table "users" */
export interface users_stddev_samp_order_by {
  id?: order_by | null
}

/** order by sum() on columns of table "users" */
export interface users_sum_order_by {
  id?: order_by | null
}

/** order by var_pop() on columns of table "users" */
export interface users_var_pop_order_by {
  id?: order_by | null
}

/** order by var_samp() on columns of table "users" */
export interface users_var_samp_order_by {
  id?: order_by | null
}

/** order by variance() on columns of table "users" */
export interface users_variance_order_by {
  id?: order_by | null
}

/** input type for inserting array relation for remote table "users" */
export interface users_arr_rel_insert_input {
  data: users_insert_input[]
  on_conflict?: users_on_conflict | null
}

const query_root_possibleTypes = ['query_root']
export const isquery_root = (obj: { __typename: String }): obj is query_root => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return query_root_possibleTypes.includes(obj.__typename)
}

const todos_possibleTypes = ['todos']
export const istodos = (obj: { __typename: String }): obj is todos => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_possibleTypes.includes(obj.__typename)
}

const users_possibleTypes = ['users']
export const isusers = (obj: { __typename: String }): obj is users => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_possibleTypes.includes(obj.__typename)
}

const todos_aggregate_possibleTypes = ['todos_aggregate']
export const istodos_aggregate = (obj: { __typename: String }): obj is todos_aggregate => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_aggregate_possibleTypes.includes(obj.__typename)
}

const todos_aggregate_fields_possibleTypes = ['todos_aggregate_fields']
export const istodos_aggregate_fields = (obj: { __typename: String }): obj is todos_aggregate_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const todos_avg_fields_possibleTypes = ['todos_avg_fields']
export const istodos_avg_fields = (obj: { __typename: String }): obj is todos_avg_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_avg_fields_possibleTypes.includes(obj.__typename)
}

const todos_max_fields_possibleTypes = ['todos_max_fields']
export const istodos_max_fields = (obj: { __typename: String }): obj is todos_max_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_max_fields_possibleTypes.includes(obj.__typename)
}

const todos_min_fields_possibleTypes = ['todos_min_fields']
export const istodos_min_fields = (obj: { __typename: String }): obj is todos_min_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_min_fields_possibleTypes.includes(obj.__typename)
}

const todos_stddev_fields_possibleTypes = ['todos_stddev_fields']
export const istodos_stddev_fields = (obj: { __typename: String }): obj is todos_stddev_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_stddev_fields_possibleTypes.includes(obj.__typename)
}

const todos_stddev_pop_fields_possibleTypes = ['todos_stddev_pop_fields']
export const istodos_stddev_pop_fields = (obj: { __typename: String }): obj is todos_stddev_pop_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const todos_stddev_samp_fields_possibleTypes = ['todos_stddev_samp_fields']
export const istodos_stddev_samp_fields = (obj: { __typename: String }): obj is todos_stddev_samp_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const todos_sum_fields_possibleTypes = ['todos_sum_fields']
export const istodos_sum_fields = (obj: { __typename: String }): obj is todos_sum_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_sum_fields_possibleTypes.includes(obj.__typename)
}

const todos_var_pop_fields_possibleTypes = ['todos_var_pop_fields']
export const istodos_var_pop_fields = (obj: { __typename: String }): obj is todos_var_pop_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const todos_var_samp_fields_possibleTypes = ['todos_var_samp_fields']
export const istodos_var_samp_fields = (obj: { __typename: String }): obj is todos_var_samp_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const todos_variance_fields_possibleTypes = ['todos_variance_fields']
export const istodos_variance_fields = (obj: { __typename: String }): obj is todos_variance_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_variance_fields_possibleTypes.includes(obj.__typename)
}

const users_aggregate_possibleTypes = ['users_aggregate']
export const isusers_aggregate = (obj: { __typename: String }): obj is users_aggregate => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_aggregate_possibleTypes.includes(obj.__typename)
}

const users_aggregate_fields_possibleTypes = ['users_aggregate_fields']
export const isusers_aggregate_fields = (obj: { __typename: String }): obj is users_aggregate_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const users_avg_fields_possibleTypes = ['users_avg_fields']
export const isusers_avg_fields = (obj: { __typename: String }): obj is users_avg_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_avg_fields_possibleTypes.includes(obj.__typename)
}

const users_max_fields_possibleTypes = ['users_max_fields']
export const isusers_max_fields = (obj: { __typename: String }): obj is users_max_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_max_fields_possibleTypes.includes(obj.__typename)
}

const users_min_fields_possibleTypes = ['users_min_fields']
export const isusers_min_fields = (obj: { __typename: String }): obj is users_min_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_min_fields_possibleTypes.includes(obj.__typename)
}

const users_stddev_fields_possibleTypes = ['users_stddev_fields']
export const isusers_stddev_fields = (obj: { __typename: String }): obj is users_stddev_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_stddev_fields_possibleTypes.includes(obj.__typename)
}

const users_stddev_pop_fields_possibleTypes = ['users_stddev_pop_fields']
export const isusers_stddev_pop_fields = (obj: { __typename: String }): obj is users_stddev_pop_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const users_stddev_samp_fields_possibleTypes = ['users_stddev_samp_fields']
export const isusers_stddev_samp_fields = (obj: { __typename: String }): obj is users_stddev_samp_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const users_sum_fields_possibleTypes = ['users_sum_fields']
export const isusers_sum_fields = (obj: { __typename: String }): obj is users_sum_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_sum_fields_possibleTypes.includes(obj.__typename)
}

const users_var_pop_fields_possibleTypes = ['users_var_pop_fields']
export const isusers_var_pop_fields = (obj: { __typename: String }): obj is users_var_pop_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const users_var_samp_fields_possibleTypes = ['users_var_samp_fields']
export const isusers_var_samp_fields = (obj: { __typename: String }): obj is users_var_samp_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const users_variance_fields_possibleTypes = ['users_variance_fields']
export const isusers_variance_fields = (obj: { __typename: String }): obj is users_variance_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_variance_fields_possibleTypes.includes(obj.__typename)
}

const mutation_root_possibleTypes = ['mutation_root']
export const ismutation_root = (obj: { __typename: String }): obj is mutation_root => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return mutation_root_possibleTypes.includes(obj.__typename)
}

const todos_mutation_response_possibleTypes = ['todos_mutation_response']
export const istodos_mutation_response = (obj: { __typename: String }): obj is todos_mutation_response => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_mutation_response_possibleTypes.includes(obj.__typename)
}

const users_mutation_response_possibleTypes = ['users_mutation_response']
export const isusers_mutation_response = (obj: { __typename: String }): obj is users_mutation_response => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_mutation_response_possibleTypes.includes(obj.__typename)
}

const subscription_root_possibleTypes = ['subscription_root']
export const issubscription_root = (obj: { __typename: String }): obj is subscription_root => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return subscription_root_possibleTypes.includes(obj.__typename)
}

const Query_possibleTypes = ['Query']
export const isQuery = (obj: { __typename: String }): obj is Query => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Query_possibleTypes.includes(obj.__typename)
}

/** query root */
export interface query_rootPromiseChain {
  hello: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  /** fetch data from the table: "todos" */
  todos: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => { execute: (request: todosRequest, defaultValue?: todos[]) => Promise<todos[]> }) & {
    execute: (request: todosRequest, defaultValue?: todos[]) => Promise<todos[]>
  }
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => todos_aggregatePromiseChain & {
    execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Promise<todos_aggregate>
  }) &
    (todos_aggregatePromiseChain & {
      execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Promise<todos_aggregate>
    })
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk: (args: {
    id: Int
  }) => todosPromiseChain & { execute: (request: todosRequest, defaultValue?: todos | null) => Promise<todos | null> }
  /** fetch data from the table: "users" */
  users: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => { execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]> }) & {
    execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]>
  }
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => users_aggregatePromiseChain & {
    execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Promise<users_aggregate>
  }) &
    (users_aggregatePromiseChain & {
      execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Promise<users_aggregate>
    })
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: (args: {
    id: Int
  }) => usersPromiseChain & { execute: (request: usersRequest, defaultValue?: users | null) => Promise<users | null> }
}

/** query root */
export interface query_rootObservableChain {
  hello: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  /** fetch data from the table: "todos" */
  todos: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => { execute: (request: todosRequest, defaultValue?: todos[]) => Observable<todos[]> }) & {
    execute: (request: todosRequest, defaultValue?: todos[]) => Observable<todos[]>
  }
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => todos_aggregateObservableChain & {
    execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Observable<todos_aggregate>
  }) &
    (todos_aggregateObservableChain & {
      execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Observable<todos_aggregate>
    })
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk: (args: {
    id: Int
  }) => todosObservableChain & { execute: (request: todosRequest, defaultValue?: todos | null) => Observable<todos | null> }
  /** fetch data from the table: "users" */
  users: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => { execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]> }) & {
    execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]>
  }
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => users_aggregateObservableChain & {
    execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Observable<users_aggregate>
  }) &
    (users_aggregateObservableChain & {
      execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Observable<users_aggregate>
    })
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: (args: {
    id: Int
  }) => usersObservableChain & { execute: (request: usersRequest, defaultValue?: users | null) => Observable<users | null> }
}

/** columns and relationships of "todos" */
export interface todosPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  is_completed: { execute: (request?: boolean | number, defaultValue?: Boolean) => Promise<Boolean> }
  text: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  /** An object relationship */
  user: usersPromiseChain & { execute: (request: usersRequest, defaultValue?: users) => Promise<users> }
  user_authID: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

/** columns and relationships of "todos" */
export interface todosObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  is_completed: { execute: (request?: boolean | number, defaultValue?: Boolean) => Observable<Boolean> }
  text: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  /** An object relationship */
  user: usersObservableChain & { execute: (request: usersRequest, defaultValue?: users) => Observable<users> }
  user_authID: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

/** columns and relationships of "users" */
export interface usersPromiseChain {
  authID: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  /** An array relationship */
  todos: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => { execute: (request: todosRequest, defaultValue?: todos[]) => Promise<todos[]> }) & {
    execute: (request: todosRequest, defaultValue?: todos[]) => Promise<todos[]>
  }
  /** An aggregated array relationship */
  todos_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => todos_aggregatePromiseChain & {
    execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Promise<todos_aggregate>
  }) &
    (todos_aggregatePromiseChain & {
      execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Promise<todos_aggregate>
    })
}

/** columns and relationships of "users" */
export interface usersObservableChain {
  authID: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  /** An array relationship */
  todos: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => { execute: (request: todosRequest, defaultValue?: todos[]) => Observable<todos[]> }) & {
    execute: (request: todosRequest, defaultValue?: todos[]) => Observable<todos[]>
  }
  /** An aggregated array relationship */
  todos_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => todos_aggregateObservableChain & {
    execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Observable<todos_aggregate>
  }) &
    (todos_aggregateObservableChain & {
      execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Observable<todos_aggregate>
    })
}

/** aggregated selection of "todos" */
export interface todos_aggregatePromiseChain {
  aggregate: todos_aggregate_fieldsPromiseChain & {
    execute: (
      request: todos_aggregate_fieldsRequest,
      defaultValue?: todos_aggregate_fields | null,
    ) => Promise<todos_aggregate_fields | null>
  }
  nodes: { execute: (request: todosRequest, defaultValue?: todos[]) => Promise<todos[]> }
}

/** aggregated selection of "todos" */
export interface todos_aggregateObservableChain {
  aggregate: todos_aggregate_fieldsObservableChain & {
    execute: (
      request: todos_aggregate_fieldsRequest,
      defaultValue?: todos_aggregate_fields | null,
    ) => Observable<todos_aggregate_fields | null>
  }
  nodes: { execute: (request: todosRequest, defaultValue?: todos[]) => Observable<todos[]> }
}

/** aggregate fields of "todos" */
export interface todos_aggregate_fieldsPromiseChain {
  avg: todos_avg_fieldsPromiseChain & {
    execute: (request: todos_avg_fieldsRequest, defaultValue?: todos_avg_fields | null) => Promise<todos_avg_fields | null>
  }
  count: ((args?: {
    columns?: todos_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }) & {
    execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null>
  }
  max: todos_max_fieldsPromiseChain & {
    execute: (request: todos_max_fieldsRequest, defaultValue?: todos_max_fields | null) => Promise<todos_max_fields | null>
  }
  min: todos_min_fieldsPromiseChain & {
    execute: (request: todos_min_fieldsRequest, defaultValue?: todos_min_fields | null) => Promise<todos_min_fields | null>
  }
  stddev: todos_stddev_fieldsPromiseChain & {
    execute: (
      request: todos_stddev_fieldsRequest,
      defaultValue?: todos_stddev_fields | null,
    ) => Promise<todos_stddev_fields | null>
  }
  stddev_pop: todos_stddev_pop_fieldsPromiseChain & {
    execute: (
      request: todos_stddev_pop_fieldsRequest,
      defaultValue?: todos_stddev_pop_fields | null,
    ) => Promise<todos_stddev_pop_fields | null>
  }
  stddev_samp: todos_stddev_samp_fieldsPromiseChain & {
    execute: (
      request: todos_stddev_samp_fieldsRequest,
      defaultValue?: todos_stddev_samp_fields | null,
    ) => Promise<todos_stddev_samp_fields | null>
  }
  sum: todos_sum_fieldsPromiseChain & {
    execute: (request: todos_sum_fieldsRequest, defaultValue?: todos_sum_fields | null) => Promise<todos_sum_fields | null>
  }
  var_pop: todos_var_pop_fieldsPromiseChain & {
    execute: (
      request: todos_var_pop_fieldsRequest,
      defaultValue?: todos_var_pop_fields | null,
    ) => Promise<todos_var_pop_fields | null>
  }
  var_samp: todos_var_samp_fieldsPromiseChain & {
    execute: (
      request: todos_var_samp_fieldsRequest,
      defaultValue?: todos_var_samp_fields | null,
    ) => Promise<todos_var_samp_fields | null>
  }
  variance: todos_variance_fieldsPromiseChain & {
    execute: (
      request: todos_variance_fieldsRequest,
      defaultValue?: todos_variance_fields | null,
    ) => Promise<todos_variance_fields | null>
  }
}

/** aggregate fields of "todos" */
export interface todos_aggregate_fieldsObservableChain {
  avg: todos_avg_fieldsObservableChain & {
    execute: (
      request: todos_avg_fieldsRequest,
      defaultValue?: todos_avg_fields | null,
    ) => Observable<todos_avg_fields | null>
  }
  count: ((args?: {
    columns?: todos_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }) & {
    execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null>
  }
  max: todos_max_fieldsObservableChain & {
    execute: (
      request: todos_max_fieldsRequest,
      defaultValue?: todos_max_fields | null,
    ) => Observable<todos_max_fields | null>
  }
  min: todos_min_fieldsObservableChain & {
    execute: (
      request: todos_min_fieldsRequest,
      defaultValue?: todos_min_fields | null,
    ) => Observable<todos_min_fields | null>
  }
  stddev: todos_stddev_fieldsObservableChain & {
    execute: (
      request: todos_stddev_fieldsRequest,
      defaultValue?: todos_stddev_fields | null,
    ) => Observable<todos_stddev_fields | null>
  }
  stddev_pop: todos_stddev_pop_fieldsObservableChain & {
    execute: (
      request: todos_stddev_pop_fieldsRequest,
      defaultValue?: todos_stddev_pop_fields | null,
    ) => Observable<todos_stddev_pop_fields | null>
  }
  stddev_samp: todos_stddev_samp_fieldsObservableChain & {
    execute: (
      request: todos_stddev_samp_fieldsRequest,
      defaultValue?: todos_stddev_samp_fields | null,
    ) => Observable<todos_stddev_samp_fields | null>
  }
  sum: todos_sum_fieldsObservableChain & {
    execute: (
      request: todos_sum_fieldsRequest,
      defaultValue?: todos_sum_fields | null,
    ) => Observable<todos_sum_fields | null>
  }
  var_pop: todos_var_pop_fieldsObservableChain & {
    execute: (
      request: todos_var_pop_fieldsRequest,
      defaultValue?: todos_var_pop_fields | null,
    ) => Observable<todos_var_pop_fields | null>
  }
  var_samp: todos_var_samp_fieldsObservableChain & {
    execute: (
      request: todos_var_samp_fieldsRequest,
      defaultValue?: todos_var_samp_fields | null,
    ) => Observable<todos_var_samp_fields | null>
  }
  variance: todos_variance_fieldsObservableChain & {
    execute: (
      request: todos_variance_fieldsRequest,
      defaultValue?: todos_variance_fields | null,
    ) => Observable<todos_variance_fields | null>
  }
}

/** aggregate avg on columns */
export interface todos_avg_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate avg on columns */
export interface todos_avg_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate max on columns */
export interface todos_max_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  text: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  user_authID: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate max on columns */
export interface todos_max_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  text: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  user_authID: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate min on columns */
export interface todos_min_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  text: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  user_authID: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate min on columns */
export interface todos_min_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  text: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  user_authID: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate stddev on columns */
export interface todos_stddev_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev on columns */
export interface todos_stddev_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface todos_stddev_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface todos_stddev_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface todos_stddev_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface todos_stddev_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate sum on columns */
export interface todos_sum_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
}

/** aggregate sum on columns */
export interface todos_sum_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
}

/** aggregate var_pop on columns */
export interface todos_var_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_pop on columns */
export interface todos_var_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate var_samp on columns */
export interface todos_var_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_samp on columns */
export interface todos_var_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate variance on columns */
export interface todos_variance_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate variance on columns */
export interface todos_variance_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregated selection of "users" */
export interface users_aggregatePromiseChain {
  aggregate: users_aggregate_fieldsPromiseChain & {
    execute: (
      request: users_aggregate_fieldsRequest,
      defaultValue?: users_aggregate_fields | null,
    ) => Promise<users_aggregate_fields | null>
  }
  nodes: { execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]> }
}

/** aggregated selection of "users" */
export interface users_aggregateObservableChain {
  aggregate: users_aggregate_fieldsObservableChain & {
    execute: (
      request: users_aggregate_fieldsRequest,
      defaultValue?: users_aggregate_fields | null,
    ) => Observable<users_aggregate_fields | null>
  }
  nodes: { execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]> }
}

/** aggregate fields of "users" */
export interface users_aggregate_fieldsPromiseChain {
  avg: users_avg_fieldsPromiseChain & {
    execute: (request: users_avg_fieldsRequest, defaultValue?: users_avg_fields | null) => Promise<users_avg_fields | null>
  }
  count: ((args?: {
    columns?: users_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }) & {
    execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null>
  }
  max: users_max_fieldsPromiseChain & {
    execute: (request: users_max_fieldsRequest, defaultValue?: users_max_fields | null) => Promise<users_max_fields | null>
  }
  min: users_min_fieldsPromiseChain & {
    execute: (request: users_min_fieldsRequest, defaultValue?: users_min_fields | null) => Promise<users_min_fields | null>
  }
  stddev: users_stddev_fieldsPromiseChain & {
    execute: (
      request: users_stddev_fieldsRequest,
      defaultValue?: users_stddev_fields | null,
    ) => Promise<users_stddev_fields | null>
  }
  stddev_pop: users_stddev_pop_fieldsPromiseChain & {
    execute: (
      request: users_stddev_pop_fieldsRequest,
      defaultValue?: users_stddev_pop_fields | null,
    ) => Promise<users_stddev_pop_fields | null>
  }
  stddev_samp: users_stddev_samp_fieldsPromiseChain & {
    execute: (
      request: users_stddev_samp_fieldsRequest,
      defaultValue?: users_stddev_samp_fields | null,
    ) => Promise<users_stddev_samp_fields | null>
  }
  sum: users_sum_fieldsPromiseChain & {
    execute: (request: users_sum_fieldsRequest, defaultValue?: users_sum_fields | null) => Promise<users_sum_fields | null>
  }
  var_pop: users_var_pop_fieldsPromiseChain & {
    execute: (
      request: users_var_pop_fieldsRequest,
      defaultValue?: users_var_pop_fields | null,
    ) => Promise<users_var_pop_fields | null>
  }
  var_samp: users_var_samp_fieldsPromiseChain & {
    execute: (
      request: users_var_samp_fieldsRequest,
      defaultValue?: users_var_samp_fields | null,
    ) => Promise<users_var_samp_fields | null>
  }
  variance: users_variance_fieldsPromiseChain & {
    execute: (
      request: users_variance_fieldsRequest,
      defaultValue?: users_variance_fields | null,
    ) => Promise<users_variance_fields | null>
  }
}

/** aggregate fields of "users" */
export interface users_aggregate_fieldsObservableChain {
  avg: users_avg_fieldsObservableChain & {
    execute: (
      request: users_avg_fieldsRequest,
      defaultValue?: users_avg_fields | null,
    ) => Observable<users_avg_fields | null>
  }
  count: ((args?: {
    columns?: users_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }) & {
    execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null>
  }
  max: users_max_fieldsObservableChain & {
    execute: (
      request: users_max_fieldsRequest,
      defaultValue?: users_max_fields | null,
    ) => Observable<users_max_fields | null>
  }
  min: users_min_fieldsObservableChain & {
    execute: (
      request: users_min_fieldsRequest,
      defaultValue?: users_min_fields | null,
    ) => Observable<users_min_fields | null>
  }
  stddev: users_stddev_fieldsObservableChain & {
    execute: (
      request: users_stddev_fieldsRequest,
      defaultValue?: users_stddev_fields | null,
    ) => Observable<users_stddev_fields | null>
  }
  stddev_pop: users_stddev_pop_fieldsObservableChain & {
    execute: (
      request: users_stddev_pop_fieldsRequest,
      defaultValue?: users_stddev_pop_fields | null,
    ) => Observable<users_stddev_pop_fields | null>
  }
  stddev_samp: users_stddev_samp_fieldsObservableChain & {
    execute: (
      request: users_stddev_samp_fieldsRequest,
      defaultValue?: users_stddev_samp_fields | null,
    ) => Observable<users_stddev_samp_fields | null>
  }
  sum: users_sum_fieldsObservableChain & {
    execute: (
      request: users_sum_fieldsRequest,
      defaultValue?: users_sum_fields | null,
    ) => Observable<users_sum_fields | null>
  }
  var_pop: users_var_pop_fieldsObservableChain & {
    execute: (
      request: users_var_pop_fieldsRequest,
      defaultValue?: users_var_pop_fields | null,
    ) => Observable<users_var_pop_fields | null>
  }
  var_samp: users_var_samp_fieldsObservableChain & {
    execute: (
      request: users_var_samp_fieldsRequest,
      defaultValue?: users_var_samp_fields | null,
    ) => Observable<users_var_samp_fields | null>
  }
  variance: users_variance_fieldsObservableChain & {
    execute: (
      request: users_variance_fieldsRequest,
      defaultValue?: users_variance_fields | null,
    ) => Observable<users_variance_fields | null>
  }
}

/** aggregate avg on columns */
export interface users_avg_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate avg on columns */
export interface users_avg_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate max on columns */
export interface users_max_fieldsPromiseChain {
  authID: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate max on columns */
export interface users_max_fieldsObservableChain {
  authID: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate min on columns */
export interface users_min_fieldsPromiseChain {
  authID: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate min on columns */
export interface users_min_fieldsObservableChain {
  authID: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate stddev on columns */
export interface users_stddev_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev on columns */
export interface users_stddev_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface users_stddev_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface users_stddev_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface users_stddev_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface users_stddev_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate sum on columns */
export interface users_sum_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
}

/** aggregate sum on columns */
export interface users_sum_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
}

/** aggregate var_pop on columns */
export interface users_var_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_pop on columns */
export interface users_var_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate var_samp on columns */
export interface users_var_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_samp on columns */
export interface users_var_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate variance on columns */
export interface users_variance_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate variance on columns */
export interface users_variance_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** mutation root */
export interface mutation_rootPromiseChain {
  /** delete data from the table: "todos" */
  delete_todos: (args: {
    /** filter the rows which have to be deleted */
    where: todos_bool_exp
  }) => todos_mutation_responsePromiseChain & {
    execute: (
      request: todos_mutation_responseRequest,
      defaultValue?: todos_mutation_response | null,
    ) => Promise<todos_mutation_response | null>
  }
  /** delete data from the table: "users" */
  delete_users: (args: {
    /** filter the rows which have to be deleted */
    where: users_bool_exp
  }) => users_mutation_responsePromiseChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Promise<users_mutation_response | null>
  }
  /** insert data into the table: "todos" */
  insert_todos: (args: {
    /** the rows to be inserted */
    objects: todos_insert_input[]
    /** on conflict condition */
    on_conflict?: todos_on_conflict | null
  }) => todos_mutation_responsePromiseChain & {
    execute: (
      request: todos_mutation_responseRequest,
      defaultValue?: todos_mutation_response | null,
    ) => Promise<todos_mutation_response | null>
  }
  /** insert data into the table: "users" */
  insert_users: (args: {
    /** the rows to be inserted */
    objects: users_insert_input[]
    /** on conflict condition */
    on_conflict?: users_on_conflict | null
  }) => users_mutation_responsePromiseChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Promise<users_mutation_response | null>
  }
  /** update data of the table: "todos" */
  update_todos: (args: {
    /** increments the integer columns with given value of the filtered values */
    _inc?: todos_inc_input | null
    /** sets the columns of the filtered rows to the given values */
    _set?: todos_set_input | null
    /** filter the rows which have to be updated */
    where: todos_bool_exp
  }) => todos_mutation_responsePromiseChain & {
    execute: (
      request: todos_mutation_responseRequest,
      defaultValue?: todos_mutation_response | null,
    ) => Promise<todos_mutation_response | null>
  }
  /** update data of the table: "users" */
  update_users: (args: {
    /** increments the integer columns with given value of the filtered values */
    _inc?: users_inc_input | null
    /** sets the columns of the filtered rows to the given values */
    _set?: users_set_input | null
    /** filter the rows which have to be updated */
    where: users_bool_exp
  }) => users_mutation_responsePromiseChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Promise<users_mutation_response | null>
  }
}

/** mutation root */
export interface mutation_rootObservableChain {
  /** delete data from the table: "todos" */
  delete_todos: (args: {
    /** filter the rows which have to be deleted */
    where: todos_bool_exp
  }) => todos_mutation_responseObservableChain & {
    execute: (
      request: todos_mutation_responseRequest,
      defaultValue?: todos_mutation_response | null,
    ) => Observable<todos_mutation_response | null>
  }
  /** delete data from the table: "users" */
  delete_users: (args: {
    /** filter the rows which have to be deleted */
    where: users_bool_exp
  }) => users_mutation_responseObservableChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Observable<users_mutation_response | null>
  }
  /** insert data into the table: "todos" */
  insert_todos: (args: {
    /** the rows to be inserted */
    objects: todos_insert_input[]
    /** on conflict condition */
    on_conflict?: todos_on_conflict | null
  }) => todos_mutation_responseObservableChain & {
    execute: (
      request: todos_mutation_responseRequest,
      defaultValue?: todos_mutation_response | null,
    ) => Observable<todos_mutation_response | null>
  }
  /** insert data into the table: "users" */
  insert_users: (args: {
    /** the rows to be inserted */
    objects: users_insert_input[]
    /** on conflict condition */
    on_conflict?: users_on_conflict | null
  }) => users_mutation_responseObservableChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Observable<users_mutation_response | null>
  }
  /** update data of the table: "todos" */
  update_todos: (args: {
    /** increments the integer columns with given value of the filtered values */
    _inc?: todos_inc_input | null
    /** sets the columns of the filtered rows to the given values */
    _set?: todos_set_input | null
    /** filter the rows which have to be updated */
    where: todos_bool_exp
  }) => todos_mutation_responseObservableChain & {
    execute: (
      request: todos_mutation_responseRequest,
      defaultValue?: todos_mutation_response | null,
    ) => Observable<todos_mutation_response | null>
  }
  /** update data of the table: "users" */
  update_users: (args: {
    /** increments the integer columns with given value of the filtered values */
    _inc?: users_inc_input | null
    /** sets the columns of the filtered rows to the given values */
    _set?: users_set_input | null
    /** filter the rows which have to be updated */
    where: users_bool_exp
  }) => users_mutation_responseObservableChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Observable<users_mutation_response | null>
  }
}

/** response of any mutation on the table "todos" */
export interface todos_mutation_responsePromiseChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: todosRequest, defaultValue?: todos[]) => Promise<todos[]> }
}

/** response of any mutation on the table "todos" */
export interface todos_mutation_responseObservableChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: todosRequest, defaultValue?: todos[]) => Observable<todos[]> }
}

/** response of any mutation on the table "users" */
export interface users_mutation_responsePromiseChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]> }
}

/** response of any mutation on the table "users" */
export interface users_mutation_responseObservableChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]> }
}

/** subscription root */
export interface subscription_rootPromiseChain {
  /** fetch data from the table: "todos" */
  todos: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => { execute: (request: todosRequest, defaultValue?: todos[]) => Promise<todos[]> }) & {
    execute: (request: todosRequest, defaultValue?: todos[]) => Promise<todos[]>
  }
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => todos_aggregatePromiseChain & {
    execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Promise<todos_aggregate>
  }) &
    (todos_aggregatePromiseChain & {
      execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Promise<todos_aggregate>
    })
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk: (args: {
    id: Int
  }) => todosPromiseChain & { execute: (request: todosRequest, defaultValue?: todos | null) => Promise<todos | null> }
  /** fetch data from the table: "users" */
  users: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => { execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]> }) & {
    execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]>
  }
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => users_aggregatePromiseChain & {
    execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Promise<users_aggregate>
  }) &
    (users_aggregatePromiseChain & {
      execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Promise<users_aggregate>
    })
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: (args: {
    id: Int
  }) => usersPromiseChain & { execute: (request: usersRequest, defaultValue?: users | null) => Promise<users | null> }
}

/** subscription root */
export interface subscription_rootObservableChain {
  /** fetch data from the table: "todos" */
  todos: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => { execute: (request: todosRequest, defaultValue?: todos[]) => Observable<todos[]> }) & {
    execute: (request: todosRequest, defaultValue?: todos[]) => Observable<todos[]>
  }
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => todos_aggregateObservableChain & {
    execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Observable<todos_aggregate>
  }) &
    (todos_aggregateObservableChain & {
      execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Observable<todos_aggregate>
    })
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk: (args: {
    id: Int
  }) => todosObservableChain & { execute: (request: todosRequest, defaultValue?: todos | null) => Observable<todos | null> }
  /** fetch data from the table: "users" */
  users: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => { execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]> }) & {
    execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]>
  }
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the nuber of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => users_aggregateObservableChain & {
    execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Observable<users_aggregate>
  }) &
    (users_aggregateObservableChain & {
      execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Observable<users_aggregate>
    })
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: (args: {
    id: Int
  }) => usersObservableChain & { execute: (request: usersRequest, defaultValue?: users | null) => Observable<users | null> }
}

export interface QueryPromiseChain {
  hello: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

export interface QueryObservableChain {
  hello: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}
