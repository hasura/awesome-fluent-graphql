/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    /** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: {
	_eq?:boolean,
	_gt?:boolean,
	_gte?:boolean,
	_in?:boolean[],
	_is_null?:boolean,
	_lt?:boolean,
	_lte?:boolean,
	_neq?:boolean,
	_nin?:boolean[]
};
	["CacheControlScope"]:CacheControlScope;
	/** conflict action */
["conflict_action"]:conflict_action;
	/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
["Int_comparison_exp"]: {
	_eq?:number,
	_gt?:number,
	_gte?:number,
	_in?:number[],
	_is_null?:boolean,
	_lt?:number,
	_lte?:number,
	_neq?:number,
	_nin?:number[]
};
	/** mutation root */
["mutation_root"]: AliasType<{
delete_todos?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["todos_bool_exp"]},ValueTypes["todos_mutation_response"]],
delete_users?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["users_bool_exp"]},ValueTypes["users_mutation_response"]],
insert_todos?: [{	/** the rows to be inserted */
	objects:ValueTypes["todos_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["todos_on_conflict"]},ValueTypes["todos_mutation_response"]],
insert_users?: [{	/** the rows to be inserted */
	objects:ValueTypes["users_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["users_on_conflict"]},ValueTypes["users_mutation_response"]],
update_todos?: [{	/** increments the integer columns with given value of the filtered values */
	_inc?:ValueTypes["todos_inc_input"],	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["todos_set_input"],	/** filter the rows which have to be updated */
	where:ValueTypes["todos_bool_exp"]},ValueTypes["todos_mutation_response"]],
update_users?: [{	/** increments the integer columns with given value of the filtered values */
	_inc?:ValueTypes["users_inc_input"],	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["users_set_input"],	/** filter the rows which have to be updated */
	where:ValueTypes["users_bool_exp"]},ValueTypes["users_mutation_response"]]
		__typename?: true
}>;
	/** column ordering options */
["order_by"]:order_by;
	["Query"]: AliasType<{
	hello?:true
		__typename?: true
}>;
	/** query root */
["query_root"]: AliasType<{
	hello?:true,
todos?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["todos_select_column"][],	/** limit the nuber of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["todos_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["todos_bool_exp"]},ValueTypes["todos"]],
todos_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["todos_select_column"][],	/** limit the nuber of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["todos_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["todos_bool_exp"]},ValueTypes["todos_aggregate"]],
todos_by_pk?: [{	id:number},ValueTypes["todos"]],
users?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["users_select_column"][],	/** limit the nuber of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["users_bool_exp"]},ValueTypes["users"]],
users_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["users_select_column"][],	/** limit the nuber of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["users_bool_exp"]},ValueTypes["users_aggregate"]],
users_by_pk?: [{	id:number},ValueTypes["users"]]
		__typename?: true
}>;
	/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
	_eq?:string,
	_gt?:string,
	_gte?:string,
	_ilike?:string,
	_in?:string[],
	_is_null?:boolean,
	_like?:string,
	_lt?:string,
	_lte?:string,
	_neq?:string,
	_nilike?:string,
	_nin?:string[],
	_nlike?:string,
	_nsimilar?:string,
	_similar?:string
};
	/** subscription root */
["subscription_root"]: AliasType<{
todos?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["todos_select_column"][],	/** limit the nuber of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["todos_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["todos_bool_exp"]},ValueTypes["todos"]],
todos_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["todos_select_column"][],	/** limit the nuber of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["todos_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["todos_bool_exp"]},ValueTypes["todos_aggregate"]],
todos_by_pk?: [{	id:number},ValueTypes["todos"]],
users?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["users_select_column"][],	/** limit the nuber of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["users_bool_exp"]},ValueTypes["users"]],
users_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["users_select_column"][],	/** limit the nuber of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["users_bool_exp"]},ValueTypes["users_aggregate"]],
users_by_pk?: [{	id:number},ValueTypes["users"]]
		__typename?: true
}>;
	/** columns and relationships of "todos" */
["todos"]: AliasType<{
	id?:true,
	is_completed?:true,
	text?:true,
	/** An object relationship */
	user?:ValueTypes["users"],
	user_authID?:true
		__typename?: true
}>;
	/** aggregated selection of "todos" */
["todos_aggregate"]: AliasType<{
	aggregate?:ValueTypes["todos_aggregate_fields"],
	nodes?:ValueTypes["todos"]
		__typename?: true
}>;
	/** aggregate fields of "todos" */
["todos_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["todos_avg_fields"],
count?: [{	columns?:ValueTypes["todos_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["todos_max_fields"],
	min?:ValueTypes["todos_min_fields"],
	stddev?:ValueTypes["todos_stddev_fields"],
	stddev_pop?:ValueTypes["todos_stddev_pop_fields"],
	stddev_samp?:ValueTypes["todos_stddev_samp_fields"],
	sum?:ValueTypes["todos_sum_fields"],
	var_pop?:ValueTypes["todos_var_pop_fields"],
	var_samp?:ValueTypes["todos_var_samp_fields"],
	variance?:ValueTypes["todos_variance_fields"]
		__typename?: true
}>;
	/** order by aggregate values of table "todos" */
["todos_aggregate_order_by"]: {
	avg?:ValueTypes["todos_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["todos_max_order_by"],
	min?:ValueTypes["todos_min_order_by"],
	stddev?:ValueTypes["todos_stddev_order_by"],
	stddev_pop?:ValueTypes["todos_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["todos_stddev_samp_order_by"],
	sum?:ValueTypes["todos_sum_order_by"],
	var_pop?:ValueTypes["todos_var_pop_order_by"],
	var_samp?:ValueTypes["todos_var_samp_order_by"],
	variance?:ValueTypes["todos_variance_order_by"]
};
	/** input type for inserting array relation for remote table "todos" */
["todos_arr_rel_insert_input"]: {
	data:ValueTypes["todos_insert_input"][],
	on_conflict?:ValueTypes["todos_on_conflict"]
};
	/** aggregate avg on columns */
["todos_avg_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	/** order by avg() on columns of table "todos" */
["todos_avg_order_by"]: {
	id?:ValueTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
["todos_bool_exp"]: {
	_and?:(ValueTypes["todos_bool_exp"] | undefined)[],
	_not?:ValueTypes["todos_bool_exp"],
	_or?:(ValueTypes["todos_bool_exp"] | undefined)[],
	id?:ValueTypes["Int_comparison_exp"],
	is_completed?:ValueTypes["Boolean_comparison_exp"],
	text?:ValueTypes["String_comparison_exp"],
	user?:ValueTypes["users_bool_exp"],
	user_authID?:ValueTypes["String_comparison_exp"]
};
	/** unique or primary key constraints on table "todos" */
["todos_constraint"]:todos_constraint;
	/** input type for incrementing integer columne in table "todos" */
["todos_inc_input"]: {
	id?:number
};
	/** input type for inserting data into table "todos" */
["todos_insert_input"]: {
	id?:number,
	is_completed?:boolean,
	text?:string,
	user?:ValueTypes["users_obj_rel_insert_input"],
	user_authID?:string
};
	/** aggregate max on columns */
["todos_max_fields"]: AliasType<{
	id?:true,
	text?:true,
	user_authID?:true
		__typename?: true
}>;
	/** order by max() on columns of table "todos" */
["todos_max_order_by"]: {
	id?:ValueTypes["order_by"],
	text?:ValueTypes["order_by"],
	user_authID?:ValueTypes["order_by"]
};
	/** aggregate min on columns */
["todos_min_fields"]: AliasType<{
	id?:true,
	text?:true,
	user_authID?:true
		__typename?: true
}>;
	/** order by min() on columns of table "todos" */
["todos_min_order_by"]: {
	id?:ValueTypes["order_by"],
	text?:ValueTypes["order_by"],
	user_authID?:ValueTypes["order_by"]
};
	/** response of any mutation on the table "todos" */
["todos_mutation_response"]: AliasType<{
	/** number of affected rows by the mutation */
	affected_rows?:true,
	/** data of the affected rows by the mutation */
	returning?:ValueTypes["todos"]
		__typename?: true
}>;
	/** input type for inserting object relation for remote table "todos" */
["todos_obj_rel_insert_input"]: {
	data:ValueTypes["todos_insert_input"],
	on_conflict?:ValueTypes["todos_on_conflict"]
};
	/** on conflict condition type for table "todos" */
["todos_on_conflict"]: {
	constraint:ValueTypes["todos_constraint"],
	update_columns:ValueTypes["todos_update_column"][]
};
	/** ordering options when selecting data from "todos" */
["todos_order_by"]: {
	id?:ValueTypes["order_by"],
	is_completed?:ValueTypes["order_by"],
	text?:ValueTypes["order_by"],
	user?:ValueTypes["users_order_by"],
	user_authID?:ValueTypes["order_by"]
};
	/** select columns of table "todos" */
["todos_select_column"]:todos_select_column;
	/** input type for updating data in table "todos" */
["todos_set_input"]: {
	id?:number,
	is_completed?:boolean,
	text?:string,
	user_authID?:string
};
	/** aggregate stddev on columns */
["todos_stddev_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	/** order by stddev() on columns of table "todos" */
["todos_stddev_order_by"]: {
	id?:ValueTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["todos_stddev_pop_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	/** order by stddev_pop() on columns of table "todos" */
["todos_stddev_pop_order_by"]: {
	id?:ValueTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["todos_stddev_samp_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	/** order by stddev_samp() on columns of table "todos" */
["todos_stddev_samp_order_by"]: {
	id?:ValueTypes["order_by"]
};
	/** aggregate sum on columns */
["todos_sum_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	/** order by sum() on columns of table "todos" */
["todos_sum_order_by"]: {
	id?:ValueTypes["order_by"]
};
	/** update columns of table "todos" */
["todos_update_column"]:todos_update_column;
	/** aggregate var_pop on columns */
["todos_var_pop_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	/** order by var_pop() on columns of table "todos" */
["todos_var_pop_order_by"]: {
	id?:ValueTypes["order_by"]
};
	/** aggregate var_samp on columns */
["todos_var_samp_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	/** order by var_samp() on columns of table "todos" */
["todos_var_samp_order_by"]: {
	id?:ValueTypes["order_by"]
};
	/** aggregate variance on columns */
["todos_variance_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	/** order by variance() on columns of table "todos" */
["todos_variance_order_by"]: {
	id?:ValueTypes["order_by"]
};
	/** The `Upload` scalar type represents a file upload. */
["Upload"]:unknown;
	/** columns and relationships of "users" */
["users"]: AliasType<{
	authID?:true,
	id?:true,
	name?:true,
todos?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["todos_select_column"][],	/** limit the nuber of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["todos_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["todos_bool_exp"]},ValueTypes["todos"]],
todos_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["todos_select_column"][],	/** limit the nuber of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["todos_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["todos_bool_exp"]},ValueTypes["todos_aggregate"]]
		__typename?: true
}>;
	/** aggregated selection of "users" */
["users_aggregate"]: AliasType<{
	aggregate?:ValueTypes["users_aggregate_fields"],
	nodes?:ValueTypes["users"]
		__typename?: true
}>;
	/** aggregate fields of "users" */
["users_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["users_avg_fields"],
count?: [{	columns?:ValueTypes["users_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["users_max_fields"],
	min?:ValueTypes["users_min_fields"],
	stddev?:ValueTypes["users_stddev_fields"],
	stddev_pop?:ValueTypes["users_stddev_pop_fields"],
	stddev_samp?:ValueTypes["users_stddev_samp_fields"],
	sum?:ValueTypes["users_sum_fields"],
	var_pop?:ValueTypes["users_var_pop_fields"],
	var_samp?:ValueTypes["users_var_samp_fields"],
	variance?:ValueTypes["users_variance_fields"]
		__typename?: true
}>;
	/** order by aggregate values of table "users" */
["users_aggregate_order_by"]: {
	avg?:ValueTypes["users_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["users_max_order_by"],
	min?:ValueTypes["users_min_order_by"],
	stddev?:ValueTypes["users_stddev_order_by"],
	stddev_pop?:ValueTypes["users_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["users_stddev_samp_order_by"],
	sum?:ValueTypes["users_sum_order_by"],
	var_pop?:ValueTypes["users_var_pop_order_by"],
	var_samp?:ValueTypes["users_var_samp_order_by"],
	variance?:ValueTypes["users_variance_order_by"]
};
	/** input type for inserting array relation for remote table "users" */
["users_arr_rel_insert_input"]: {
	data:ValueTypes["users_insert_input"][],
	on_conflict?:ValueTypes["users_on_conflict"]
};
	/** aggregate avg on columns */
["users_avg_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	/** order by avg() on columns of table "users" */
["users_avg_order_by"]: {
	id?:ValueTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
["users_bool_exp"]: {
	_and?:(ValueTypes["users_bool_exp"] | undefined)[],
	_not?:ValueTypes["users_bool_exp"],
	_or?:(ValueTypes["users_bool_exp"] | undefined)[],
	authID?:ValueTypes["String_comparison_exp"],
	id?:ValueTypes["Int_comparison_exp"],
	name?:ValueTypes["String_comparison_exp"],
	todos?:ValueTypes["todos_bool_exp"]
};
	/** unique or primary key constraints on table "users" */
["users_constraint"]:users_constraint;
	/** input type for incrementing integer columne in table "users" */
["users_inc_input"]: {
	id?:number
};
	/** input type for inserting data into table "users" */
["users_insert_input"]: {
	authID?:string,
	id?:number,
	name?:string,
	todos?:ValueTypes["todos_arr_rel_insert_input"]
};
	/** aggregate max on columns */
["users_max_fields"]: AliasType<{
	authID?:true,
	id?:true,
	name?:true
		__typename?: true
}>;
	/** order by max() on columns of table "users" */
["users_max_order_by"]: {
	authID?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"]
};
	/** aggregate min on columns */
["users_min_fields"]: AliasType<{
	authID?:true,
	id?:true,
	name?:true
		__typename?: true
}>;
	/** order by min() on columns of table "users" */
["users_min_order_by"]: {
	authID?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"]
};
	/** response of any mutation on the table "users" */
["users_mutation_response"]: AliasType<{
	/** number of affected rows by the mutation */
	affected_rows?:true,
	/** data of the affected rows by the mutation */
	returning?:ValueTypes["users"]
		__typename?: true
}>;
	/** input type for inserting object relation for remote table "users" */
["users_obj_rel_insert_input"]: {
	data:ValueTypes["users_insert_input"],
	on_conflict?:ValueTypes["users_on_conflict"]
};
	/** on conflict condition type for table "users" */
["users_on_conflict"]: {
	constraint:ValueTypes["users_constraint"],
	update_columns:ValueTypes["users_update_column"][]
};
	/** ordering options when selecting data from "users" */
["users_order_by"]: {
	authID?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"],
	todos_aggregate?:ValueTypes["todos_aggregate_order_by"]
};
	/** select columns of table "users" */
["users_select_column"]:users_select_column;
	/** input type for updating data in table "users" */
["users_set_input"]: {
	authID?:string,
	id?:number,
	name?:string
};
	/** aggregate stddev on columns */
["users_stddev_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	/** order by stddev() on columns of table "users" */
["users_stddev_order_by"]: {
	id?:ValueTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["users_stddev_pop_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	/** order by stddev_pop() on columns of table "users" */
["users_stddev_pop_order_by"]: {
	id?:ValueTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["users_stddev_samp_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	/** order by stddev_samp() on columns of table "users" */
["users_stddev_samp_order_by"]: {
	id?:ValueTypes["order_by"]
};
	/** aggregate sum on columns */
["users_sum_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	/** order by sum() on columns of table "users" */
["users_sum_order_by"]: {
	id?:ValueTypes["order_by"]
};
	/** update columns of table "users" */
["users_update_column"]:users_update_column;
	/** aggregate var_pop on columns */
["users_var_pop_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	/** order by var_pop() on columns of table "users" */
["users_var_pop_order_by"]: {
	id?:ValueTypes["order_by"]
};
	/** aggregate var_samp on columns */
["users_var_samp_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	/** order by var_samp() on columns of table "users" */
["users_var_samp_order_by"]: {
	id?:ValueTypes["order_by"]
};
	/** aggregate variance on columns */
["users_variance_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	/** order by variance() on columns of table "users" */
["users_variance_order_by"]: {
	id?:ValueTypes["order_by"]
}
  }

export type PartialObjects = {
    /** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: {
	_eq?:boolean,
	_gt?:boolean,
	_gte?:boolean,
	_in?:boolean[],
	_is_null?:boolean,
	_lt?:boolean,
	_lte?:boolean,
	_neq?:boolean,
	_nin?:boolean[]
},
	["CacheControlScope"]:CacheControlScope,
	/** conflict action */
["conflict_action"]:conflict_action,
	/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
["Int_comparison_exp"]: {
	_eq?:number,
	_gt?:number,
	_gte?:number,
	_in?:number[],
	_is_null?:boolean,
	_lt?:number,
	_lte?:number,
	_neq?:number,
	_nin?:number[]
},
	/** mutation root */
["mutation_root"]: {
		__typename?: "mutation_root";
			/** delete data from the table: "todos" */
	delete_todos?:PartialObjects["todos_mutation_response"],
			/** delete data from the table: "users" */
	delete_users?:PartialObjects["users_mutation_response"],
			/** insert data into the table: "todos" */
	insert_todos?:PartialObjects["todos_mutation_response"],
			/** insert data into the table: "users" */
	insert_users?:PartialObjects["users_mutation_response"],
			/** update data of the table: "todos" */
	update_todos?:PartialObjects["todos_mutation_response"],
			/** update data of the table: "users" */
	update_users?:PartialObjects["users_mutation_response"]
	},
	/** column ordering options */
["order_by"]:order_by,
	["Query"]: {
		__typename?: "Query";
			hello?:string
	},
	/** query root */
["query_root"]: {
		__typename?: "query_root";
			hello?:string,
			/** fetch data from the table: "todos" */
	todos?:PartialObjects["todos"][],
			/** fetch aggregated fields from the table: "todos" */
	todos_aggregate?:PartialObjects["todos_aggregate"],
			/** fetch data from the table: "todos" using primary key columns */
	todos_by_pk?:PartialObjects["todos"],
			/** fetch data from the table: "users" */
	users?:PartialObjects["users"][],
			/** fetch aggregated fields from the table: "users" */
	users_aggregate?:PartialObjects["users_aggregate"],
			/** fetch data from the table: "users" using primary key columns */
	users_by_pk?:PartialObjects["users"]
	},
	/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
	_eq?:string,
	_gt?:string,
	_gte?:string,
	_ilike?:string,
	_in?:string[],
	_is_null?:boolean,
	_like?:string,
	_lt?:string,
	_lte?:string,
	_neq?:string,
	_nilike?:string,
	_nin?:string[],
	_nlike?:string,
	_nsimilar?:string,
	_similar?:string
},
	/** subscription root */
["subscription_root"]: {
		__typename?: "subscription_root";
			/** fetch data from the table: "todos" */
	todos?:PartialObjects["todos"][],
			/** fetch aggregated fields from the table: "todos" */
	todos_aggregate?:PartialObjects["todos_aggregate"],
			/** fetch data from the table: "todos" using primary key columns */
	todos_by_pk?:PartialObjects["todos"],
			/** fetch data from the table: "users" */
	users?:PartialObjects["users"][],
			/** fetch aggregated fields from the table: "users" */
	users_aggregate?:PartialObjects["users_aggregate"],
			/** fetch data from the table: "users" using primary key columns */
	users_by_pk?:PartialObjects["users"]
	},
	/** columns and relationships of "todos" */
["todos"]: {
		__typename?: "todos";
			id?:number,
			is_completed?:boolean,
			text?:string,
			/** An object relationship */
	user?:PartialObjects["users"],
			user_authID?:string
	},
	/** aggregated selection of "todos" */
["todos_aggregate"]: {
		__typename?: "todos_aggregate";
			aggregate?:PartialObjects["todos_aggregate_fields"],
			nodes?:PartialObjects["todos"][]
	},
	/** aggregate fields of "todos" */
["todos_aggregate_fields"]: {
		__typename?: "todos_aggregate_fields";
			avg?:PartialObjects["todos_avg_fields"],
			count?:number,
			max?:PartialObjects["todos_max_fields"],
			min?:PartialObjects["todos_min_fields"],
			stddev?:PartialObjects["todos_stddev_fields"],
			stddev_pop?:PartialObjects["todos_stddev_pop_fields"],
			stddev_samp?:PartialObjects["todos_stddev_samp_fields"],
			sum?:PartialObjects["todos_sum_fields"],
			var_pop?:PartialObjects["todos_var_pop_fields"],
			var_samp?:PartialObjects["todos_var_samp_fields"],
			variance?:PartialObjects["todos_variance_fields"]
	},
	/** order by aggregate values of table "todos" */
["todos_aggregate_order_by"]: {
	avg?:PartialObjects["todos_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["todos_max_order_by"],
	min?:PartialObjects["todos_min_order_by"],
	stddev?:PartialObjects["todos_stddev_order_by"],
	stddev_pop?:PartialObjects["todos_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["todos_stddev_samp_order_by"],
	sum?:PartialObjects["todos_sum_order_by"],
	var_pop?:PartialObjects["todos_var_pop_order_by"],
	var_samp?:PartialObjects["todos_var_samp_order_by"],
	variance?:PartialObjects["todos_variance_order_by"]
},
	/** input type for inserting array relation for remote table "todos" */
["todos_arr_rel_insert_input"]: {
	data:PartialObjects["todos_insert_input"][],
	on_conflict?:PartialObjects["todos_on_conflict"]
},
	/** aggregate avg on columns */
["todos_avg_fields"]: {
		__typename?: "todos_avg_fields";
			id?:number
	},
	/** order by avg() on columns of table "todos" */
["todos_avg_order_by"]: {
	id?:PartialObjects["order_by"]
},
	/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
["todos_bool_exp"]: {
	_and?:(PartialObjects["todos_bool_exp"] | undefined)[],
	_not?:PartialObjects["todos_bool_exp"],
	_or?:(PartialObjects["todos_bool_exp"] | undefined)[],
	id?:PartialObjects["Int_comparison_exp"],
	is_completed?:PartialObjects["Boolean_comparison_exp"],
	text?:PartialObjects["String_comparison_exp"],
	user?:PartialObjects["users_bool_exp"],
	user_authID?:PartialObjects["String_comparison_exp"]
},
	/** unique or primary key constraints on table "todos" */
["todos_constraint"]:todos_constraint,
	/** input type for incrementing integer columne in table "todos" */
["todos_inc_input"]: {
	id?:number
},
	/** input type for inserting data into table "todos" */
["todos_insert_input"]: {
	id?:number,
	is_completed?:boolean,
	text?:string,
	user?:PartialObjects["users_obj_rel_insert_input"],
	user_authID?:string
},
	/** aggregate max on columns */
["todos_max_fields"]: {
		__typename?: "todos_max_fields";
			id?:number,
			text?:string,
			user_authID?:string
	},
	/** order by max() on columns of table "todos" */
["todos_max_order_by"]: {
	id?:PartialObjects["order_by"],
	text?:PartialObjects["order_by"],
	user_authID?:PartialObjects["order_by"]
},
	/** aggregate min on columns */
["todos_min_fields"]: {
		__typename?: "todos_min_fields";
			id?:number,
			text?:string,
			user_authID?:string
	},
	/** order by min() on columns of table "todos" */
["todos_min_order_by"]: {
	id?:PartialObjects["order_by"],
	text?:PartialObjects["order_by"],
	user_authID?:PartialObjects["order_by"]
},
	/** response of any mutation on the table "todos" */
["todos_mutation_response"]: {
		__typename?: "todos_mutation_response";
			/** number of affected rows by the mutation */
	affected_rows?:number,
			/** data of the affected rows by the mutation */
	returning?:PartialObjects["todos"][]
	},
	/** input type for inserting object relation for remote table "todos" */
["todos_obj_rel_insert_input"]: {
	data:PartialObjects["todos_insert_input"],
	on_conflict?:PartialObjects["todos_on_conflict"]
},
	/** on conflict condition type for table "todos" */
["todos_on_conflict"]: {
	constraint:PartialObjects["todos_constraint"],
	update_columns:PartialObjects["todos_update_column"][]
},
	/** ordering options when selecting data from "todos" */
["todos_order_by"]: {
	id?:PartialObjects["order_by"],
	is_completed?:PartialObjects["order_by"],
	text?:PartialObjects["order_by"],
	user?:PartialObjects["users_order_by"],
	user_authID?:PartialObjects["order_by"]
},
	/** select columns of table "todos" */
["todos_select_column"]:todos_select_column,
	/** input type for updating data in table "todos" */
["todos_set_input"]: {
	id?:number,
	is_completed?:boolean,
	text?:string,
	user_authID?:string
},
	/** aggregate stddev on columns */
["todos_stddev_fields"]: {
		__typename?: "todos_stddev_fields";
			id?:number
	},
	/** order by stddev() on columns of table "todos" */
["todos_stddev_order_by"]: {
	id?:PartialObjects["order_by"]
},
	/** aggregate stddev_pop on columns */
["todos_stddev_pop_fields"]: {
		__typename?: "todos_stddev_pop_fields";
			id?:number
	},
	/** order by stddev_pop() on columns of table "todos" */
["todos_stddev_pop_order_by"]: {
	id?:PartialObjects["order_by"]
},
	/** aggregate stddev_samp on columns */
["todos_stddev_samp_fields"]: {
		__typename?: "todos_stddev_samp_fields";
			id?:number
	},
	/** order by stddev_samp() on columns of table "todos" */
["todos_stddev_samp_order_by"]: {
	id?:PartialObjects["order_by"]
},
	/** aggregate sum on columns */
["todos_sum_fields"]: {
		__typename?: "todos_sum_fields";
			id?:number
	},
	/** order by sum() on columns of table "todos" */
["todos_sum_order_by"]: {
	id?:PartialObjects["order_by"]
},
	/** update columns of table "todos" */
["todos_update_column"]:todos_update_column,
	/** aggregate var_pop on columns */
["todos_var_pop_fields"]: {
		__typename?: "todos_var_pop_fields";
			id?:number
	},
	/** order by var_pop() on columns of table "todos" */
["todos_var_pop_order_by"]: {
	id?:PartialObjects["order_by"]
},
	/** aggregate var_samp on columns */
["todos_var_samp_fields"]: {
		__typename?: "todos_var_samp_fields";
			id?:number
	},
	/** order by var_samp() on columns of table "todos" */
["todos_var_samp_order_by"]: {
	id?:PartialObjects["order_by"]
},
	/** aggregate variance on columns */
["todos_variance_fields"]: {
		__typename?: "todos_variance_fields";
			id?:number
	},
	/** order by variance() on columns of table "todos" */
["todos_variance_order_by"]: {
	id?:PartialObjects["order_by"]
},
	/** The `Upload` scalar type represents a file upload. */
["Upload"]:any,
	/** columns and relationships of "users" */
["users"]: {
		__typename?: "users";
			authID?:string,
			id?:number,
			name?:string,
			/** An array relationship */
	todos?:PartialObjects["todos"][],
			/** An aggregated array relationship */
	todos_aggregate?:PartialObjects["todos_aggregate"]
	},
	/** aggregated selection of "users" */
["users_aggregate"]: {
		__typename?: "users_aggregate";
			aggregate?:PartialObjects["users_aggregate_fields"],
			nodes?:PartialObjects["users"][]
	},
	/** aggregate fields of "users" */
["users_aggregate_fields"]: {
		__typename?: "users_aggregate_fields";
			avg?:PartialObjects["users_avg_fields"],
			count?:number,
			max?:PartialObjects["users_max_fields"],
			min?:PartialObjects["users_min_fields"],
			stddev?:PartialObjects["users_stddev_fields"],
			stddev_pop?:PartialObjects["users_stddev_pop_fields"],
			stddev_samp?:PartialObjects["users_stddev_samp_fields"],
			sum?:PartialObjects["users_sum_fields"],
			var_pop?:PartialObjects["users_var_pop_fields"],
			var_samp?:PartialObjects["users_var_samp_fields"],
			variance?:PartialObjects["users_variance_fields"]
	},
	/** order by aggregate values of table "users" */
["users_aggregate_order_by"]: {
	avg?:PartialObjects["users_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["users_max_order_by"],
	min?:PartialObjects["users_min_order_by"],
	stddev?:PartialObjects["users_stddev_order_by"],
	stddev_pop?:PartialObjects["users_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["users_stddev_samp_order_by"],
	sum?:PartialObjects["users_sum_order_by"],
	var_pop?:PartialObjects["users_var_pop_order_by"],
	var_samp?:PartialObjects["users_var_samp_order_by"],
	variance?:PartialObjects["users_variance_order_by"]
},
	/** input type for inserting array relation for remote table "users" */
["users_arr_rel_insert_input"]: {
	data:PartialObjects["users_insert_input"][],
	on_conflict?:PartialObjects["users_on_conflict"]
},
	/** aggregate avg on columns */
["users_avg_fields"]: {
		__typename?: "users_avg_fields";
			id?:number
	},
	/** order by avg() on columns of table "users" */
["users_avg_order_by"]: {
	id?:PartialObjects["order_by"]
},
	/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
["users_bool_exp"]: {
	_and?:(PartialObjects["users_bool_exp"] | undefined)[],
	_not?:PartialObjects["users_bool_exp"],
	_or?:(PartialObjects["users_bool_exp"] | undefined)[],
	authID?:PartialObjects["String_comparison_exp"],
	id?:PartialObjects["Int_comparison_exp"],
	name?:PartialObjects["String_comparison_exp"],
	todos?:PartialObjects["todos_bool_exp"]
},
	/** unique or primary key constraints on table "users" */
["users_constraint"]:users_constraint,
	/** input type for incrementing integer columne in table "users" */
["users_inc_input"]: {
	id?:number
},
	/** input type for inserting data into table "users" */
["users_insert_input"]: {
	authID?:string,
	id?:number,
	name?:string,
	todos?:PartialObjects["todos_arr_rel_insert_input"]
},
	/** aggregate max on columns */
["users_max_fields"]: {
		__typename?: "users_max_fields";
			authID?:string,
			id?:number,
			name?:string
	},
	/** order by max() on columns of table "users" */
["users_max_order_by"]: {
	authID?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"]
},
	/** aggregate min on columns */
["users_min_fields"]: {
		__typename?: "users_min_fields";
			authID?:string,
			id?:number,
			name?:string
	},
	/** order by min() on columns of table "users" */
["users_min_order_by"]: {
	authID?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"]
},
	/** response of any mutation on the table "users" */
["users_mutation_response"]: {
		__typename?: "users_mutation_response";
			/** number of affected rows by the mutation */
	affected_rows?:number,
			/** data of the affected rows by the mutation */
	returning?:PartialObjects["users"][]
	},
	/** input type for inserting object relation for remote table "users" */
["users_obj_rel_insert_input"]: {
	data:PartialObjects["users_insert_input"],
	on_conflict?:PartialObjects["users_on_conflict"]
},
	/** on conflict condition type for table "users" */
["users_on_conflict"]: {
	constraint:PartialObjects["users_constraint"],
	update_columns:PartialObjects["users_update_column"][]
},
	/** ordering options when selecting data from "users" */
["users_order_by"]: {
	authID?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"],
	todos_aggregate?:PartialObjects["todos_aggregate_order_by"]
},
	/** select columns of table "users" */
["users_select_column"]:users_select_column,
	/** input type for updating data in table "users" */
["users_set_input"]: {
	authID?:string,
	id?:number,
	name?:string
},
	/** aggregate stddev on columns */
["users_stddev_fields"]: {
		__typename?: "users_stddev_fields";
			id?:number
	},
	/** order by stddev() on columns of table "users" */
["users_stddev_order_by"]: {
	id?:PartialObjects["order_by"]
},
	/** aggregate stddev_pop on columns */
["users_stddev_pop_fields"]: {
		__typename?: "users_stddev_pop_fields";
			id?:number
	},
	/** order by stddev_pop() on columns of table "users" */
["users_stddev_pop_order_by"]: {
	id?:PartialObjects["order_by"]
},
	/** aggregate stddev_samp on columns */
["users_stddev_samp_fields"]: {
		__typename?: "users_stddev_samp_fields";
			id?:number
	},
	/** order by stddev_samp() on columns of table "users" */
["users_stddev_samp_order_by"]: {
	id?:PartialObjects["order_by"]
},
	/** aggregate sum on columns */
["users_sum_fields"]: {
		__typename?: "users_sum_fields";
			id?:number
	},
	/** order by sum() on columns of table "users" */
["users_sum_order_by"]: {
	id?:PartialObjects["order_by"]
},
	/** update columns of table "users" */
["users_update_column"]:users_update_column,
	/** aggregate var_pop on columns */
["users_var_pop_fields"]: {
		__typename?: "users_var_pop_fields";
			id?:number
	},
	/** order by var_pop() on columns of table "users" */
["users_var_pop_order_by"]: {
	id?:PartialObjects["order_by"]
},
	/** aggregate var_samp on columns */
["users_var_samp_fields"]: {
		__typename?: "users_var_samp_fields";
			id?:number
	},
	/** order by var_samp() on columns of table "users" */
["users_var_samp_order_by"]: {
	id?:PartialObjects["order_by"]
},
	/** aggregate variance on columns */
["users_variance_fields"]: {
		__typename?: "users_variance_fields";
			id?:number
	},
	/** order by variance() on columns of table "users" */
["users_variance_order_by"]: {
	id?:PartialObjects["order_by"]
}
  }

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_comparison_exp = {
		_eq?:boolean,
	_gt?:boolean,
	_gte?:boolean,
	_in?:boolean[],
	_is_null?:boolean,
	_lt?:boolean,
	_lte?:boolean,
	_neq?:boolean,
	_nin?:boolean[]
}

export enum CacheControlScope {
	PRIVATE = "PRIVATE",
	PUBLIC = "PUBLIC"
}

/** conflict action */
export enum conflict_action {
	ignore = "ignore",
	update = "update"
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_comparison_exp = {
		_eq?:number,
	_gt?:number,
	_gte?:number,
	_in?:number[],
	_is_null?:boolean,
	_lt?:number,
	_lte?:number,
	_neq?:number,
	_nin?:number[]
}

/** mutation root */
export type mutation_root = {
	__typename?: "mutation_root",
	/** delete data from the table: "todos" */
	delete_todos?:todos_mutation_response,
	/** delete data from the table: "users" */
	delete_users?:users_mutation_response,
	/** insert data into the table: "todos" */
	insert_todos?:todos_mutation_response,
	/** insert data into the table: "users" */
	insert_users?:users_mutation_response,
	/** update data of the table: "todos" */
	update_todos?:todos_mutation_response,
	/** update data of the table: "users" */
	update_users?:users_mutation_response
}

/** column ordering options */
export enum order_by {
	asc = "asc",
	asc_nulls_first = "asc_nulls_first",
	asc_nulls_last = "asc_nulls_last",
	desc = "desc",
	desc_nulls_first = "desc_nulls_first",
	desc_nulls_last = "desc_nulls_last"
}

export type Query = {
	__typename?: "Query",
	hello?:string
}

/** query root */
export type query_root = {
	__typename?: "query_root",
	hello?:string,
	/** fetch data from the table: "todos" */
	todos:todos[],
	/** fetch aggregated fields from the table: "todos" */
	todos_aggregate:todos_aggregate,
	/** fetch data from the table: "todos" using primary key columns */
	todos_by_pk?:todos,
	/** fetch data from the table: "users" */
	users:users[],
	/** fetch aggregated fields from the table: "users" */
	users_aggregate:users_aggregate,
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?:users
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_comparison_exp = {
		_eq?:string,
	_gt?:string,
	_gte?:string,
	_ilike?:string,
	_in?:string[],
	_is_null?:boolean,
	_like?:string,
	_lt?:string,
	_lte?:string,
	_neq?:string,
	_nilike?:string,
	_nin?:string[],
	_nlike?:string,
	_nsimilar?:string,
	_similar?:string
}

/** subscription root */
export type subscription_root = {
	__typename?: "subscription_root",
	/** fetch data from the table: "todos" */
	todos:todos[],
	/** fetch aggregated fields from the table: "todos" */
	todos_aggregate:todos_aggregate,
	/** fetch data from the table: "todos" using primary key columns */
	todos_by_pk?:todos,
	/** fetch data from the table: "users" */
	users:users[],
	/** fetch aggregated fields from the table: "users" */
	users_aggregate:users_aggregate,
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?:users
}

/** columns and relationships of "todos" */
export type todos = {
	__typename?: "todos",
	id:number,
	is_completed:boolean,
	text:string,
	/** An object relationship */
	user:users,
	user_authID:string
}

/** aggregated selection of "todos" */
export type todos_aggregate = {
	__typename?: "todos_aggregate",
	aggregate?:todos_aggregate_fields,
	nodes:todos[]
}

/** aggregate fields of "todos" */
export type todos_aggregate_fields = {
	__typename?: "todos_aggregate_fields",
	avg?:todos_avg_fields,
	count?:number,
	max?:todos_max_fields,
	min?:todos_min_fields,
	stddev?:todos_stddev_fields,
	stddev_pop?:todos_stddev_pop_fields,
	stddev_samp?:todos_stddev_samp_fields,
	sum?:todos_sum_fields,
	var_pop?:todos_var_pop_fields,
	var_samp?:todos_var_samp_fields,
	variance?:todos_variance_fields
}

/** order by aggregate values of table "todos" */
export type todos_aggregate_order_by = {
		avg?:todos_avg_order_by,
	count?:order_by,
	max?:todos_max_order_by,
	min?:todos_min_order_by,
	stddev?:todos_stddev_order_by,
	stddev_pop?:todos_stddev_pop_order_by,
	stddev_samp?:todos_stddev_samp_order_by,
	sum?:todos_sum_order_by,
	var_pop?:todos_var_pop_order_by,
	var_samp?:todos_var_samp_order_by,
	variance?:todos_variance_order_by
}

/** input type for inserting array relation for remote table "todos" */
export type todos_arr_rel_insert_input = {
		data:todos_insert_input[],
	on_conflict?:todos_on_conflict
}

/** aggregate avg on columns */
export type todos_avg_fields = {
	__typename?: "todos_avg_fields",
	id?:number
}

/** order by avg() on columns of table "todos" */
export type todos_avg_order_by = {
		id?:order_by
}

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type todos_bool_exp = {
		_and?:(todos_bool_exp | undefined)[],
	_not?:todos_bool_exp,
	_or?:(todos_bool_exp | undefined)[],
	id?:Int_comparison_exp,
	is_completed?:Boolean_comparison_exp,
	text?:String_comparison_exp,
	user?:users_bool_exp,
	user_authID?:String_comparison_exp
}

/** unique or primary key constraints on table "todos" */
export enum todos_constraint {
	todos_pkey = "todos_pkey"
}

/** input type for incrementing integer columne in table "todos" */
export type todos_inc_input = {
		id?:number
}

/** input type for inserting data into table "todos" */
export type todos_insert_input = {
		id?:number,
	is_completed?:boolean,
	text?:string,
	user?:users_obj_rel_insert_input,
	user_authID?:string
}

/** aggregate max on columns */
export type todos_max_fields = {
	__typename?: "todos_max_fields",
	id?:number,
	text?:string,
	user_authID?:string
}

/** order by max() on columns of table "todos" */
export type todos_max_order_by = {
		id?:order_by,
	text?:order_by,
	user_authID?:order_by
}

/** aggregate min on columns */
export type todos_min_fields = {
	__typename?: "todos_min_fields",
	id?:number,
	text?:string,
	user_authID?:string
}

/** order by min() on columns of table "todos" */
export type todos_min_order_by = {
		id?:order_by,
	text?:order_by,
	user_authID?:order_by
}

/** response of any mutation on the table "todos" */
export type todos_mutation_response = {
	__typename?: "todos_mutation_response",
	/** number of affected rows by the mutation */
	affected_rows:number,
	/** data of the affected rows by the mutation */
	returning:todos[]
}

/** input type for inserting object relation for remote table "todos" */
export type todos_obj_rel_insert_input = {
		data:todos_insert_input,
	on_conflict?:todos_on_conflict
}

/** on conflict condition type for table "todos" */
export type todos_on_conflict = {
		constraint:todos_constraint,
	update_columns:todos_update_column[]
}

/** ordering options when selecting data from "todos" */
export type todos_order_by = {
		id?:order_by,
	is_completed?:order_by,
	text?:order_by,
	user?:users_order_by,
	user_authID?:order_by
}

/** select columns of table "todos" */
export enum todos_select_column {
	id = "id",
	is_completed = "is_completed",
	text = "text",
	user_authID = "user_authID"
}

/** input type for updating data in table "todos" */
export type todos_set_input = {
		id?:number,
	is_completed?:boolean,
	text?:string,
	user_authID?:string
}

/** aggregate stddev on columns */
export type todos_stddev_fields = {
	__typename?: "todos_stddev_fields",
	id?:number
}

/** order by stddev() on columns of table "todos" */
export type todos_stddev_order_by = {
		id?:order_by
}

/** aggregate stddev_pop on columns */
export type todos_stddev_pop_fields = {
	__typename?: "todos_stddev_pop_fields",
	id?:number
}

/** order by stddev_pop() on columns of table "todos" */
export type todos_stddev_pop_order_by = {
		id?:order_by
}

/** aggregate stddev_samp on columns */
export type todos_stddev_samp_fields = {
	__typename?: "todos_stddev_samp_fields",
	id?:number
}

/** order by stddev_samp() on columns of table "todos" */
export type todos_stddev_samp_order_by = {
		id?:order_by
}

/** aggregate sum on columns */
export type todos_sum_fields = {
	__typename?: "todos_sum_fields",
	id?:number
}

/** order by sum() on columns of table "todos" */
export type todos_sum_order_by = {
		id?:order_by
}

/** update columns of table "todos" */
export enum todos_update_column {
	id = "id",
	is_completed = "is_completed",
	text = "text",
	user_authID = "user_authID"
}

/** aggregate var_pop on columns */
export type todos_var_pop_fields = {
	__typename?: "todos_var_pop_fields",
	id?:number
}

/** order by var_pop() on columns of table "todos" */
export type todos_var_pop_order_by = {
		id?:order_by
}

/** aggregate var_samp on columns */
export type todos_var_samp_fields = {
	__typename?: "todos_var_samp_fields",
	id?:number
}

/** order by var_samp() on columns of table "todos" */
export type todos_var_samp_order_by = {
		id?:order_by
}

/** aggregate variance on columns */
export type todos_variance_fields = {
	__typename?: "todos_variance_fields",
	id?:number
}

/** order by variance() on columns of table "todos" */
export type todos_variance_order_by = {
		id?:order_by
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any

/** columns and relationships of "users" */
export type users = {
	__typename?: "users",
	authID:string,
	id:number,
	name:string,
	/** An array relationship */
	todos:todos[],
	/** An aggregated array relationship */
	todos_aggregate:todos_aggregate
}

/** aggregated selection of "users" */
export type users_aggregate = {
	__typename?: "users_aggregate",
	aggregate?:users_aggregate_fields,
	nodes:users[]
}

/** aggregate fields of "users" */
export type users_aggregate_fields = {
	__typename?: "users_aggregate_fields",
	avg?:users_avg_fields,
	count?:number,
	max?:users_max_fields,
	min?:users_min_fields,
	stddev?:users_stddev_fields,
	stddev_pop?:users_stddev_pop_fields,
	stddev_samp?:users_stddev_samp_fields,
	sum?:users_sum_fields,
	var_pop?:users_var_pop_fields,
	var_samp?:users_var_samp_fields,
	variance?:users_variance_fields
}

/** order by aggregate values of table "users" */
export type users_aggregate_order_by = {
		avg?:users_avg_order_by,
	count?:order_by,
	max?:users_max_order_by,
	min?:users_min_order_by,
	stddev?:users_stddev_order_by,
	stddev_pop?:users_stddev_pop_order_by,
	stddev_samp?:users_stddev_samp_order_by,
	sum?:users_sum_order_by,
	var_pop?:users_var_pop_order_by,
	var_samp?:users_var_samp_order_by,
	variance?:users_variance_order_by
}

/** input type for inserting array relation for remote table "users" */
export type users_arr_rel_insert_input = {
		data:users_insert_input[],
	on_conflict?:users_on_conflict
}

/** aggregate avg on columns */
export type users_avg_fields = {
	__typename?: "users_avg_fields",
	id?:number
}

/** order by avg() on columns of table "users" */
export type users_avg_order_by = {
		id?:order_by
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type users_bool_exp = {
		_and?:(users_bool_exp | undefined)[],
	_not?:users_bool_exp,
	_or?:(users_bool_exp | undefined)[],
	authID?:String_comparison_exp,
	id?:Int_comparison_exp,
	name?:String_comparison_exp,
	todos?:todos_bool_exp
}

/** unique or primary key constraints on table "users" */
export enum users_constraint {
	users_authID_key = "users_authID_key",
	users_pkey = "users_pkey"
}

/** input type for incrementing integer columne in table "users" */
export type users_inc_input = {
		id?:number
}

/** input type for inserting data into table "users" */
export type users_insert_input = {
		authID?:string,
	id?:number,
	name?:string,
	todos?:todos_arr_rel_insert_input
}

/** aggregate max on columns */
export type users_max_fields = {
	__typename?: "users_max_fields",
	authID?:string,
	id?:number,
	name?:string
}

/** order by max() on columns of table "users" */
export type users_max_order_by = {
		authID?:order_by,
	id?:order_by,
	name?:order_by
}

/** aggregate min on columns */
export type users_min_fields = {
	__typename?: "users_min_fields",
	authID?:string,
	id?:number,
	name?:string
}

/** order by min() on columns of table "users" */
export type users_min_order_by = {
		authID?:order_by,
	id?:order_by,
	name?:order_by
}

/** response of any mutation on the table "users" */
export type users_mutation_response = {
	__typename?: "users_mutation_response",
	/** number of affected rows by the mutation */
	affected_rows:number,
	/** data of the affected rows by the mutation */
	returning:users[]
}

/** input type for inserting object relation for remote table "users" */
export type users_obj_rel_insert_input = {
		data:users_insert_input,
	on_conflict?:users_on_conflict
}

/** on conflict condition type for table "users" */
export type users_on_conflict = {
		constraint:users_constraint,
	update_columns:users_update_column[]
}

/** ordering options when selecting data from "users" */
export type users_order_by = {
		authID?:order_by,
	id?:order_by,
	name?:order_by,
	todos_aggregate?:todos_aggregate_order_by
}

/** select columns of table "users" */
export enum users_select_column {
	authID = "authID",
	id = "id",
	name = "name"
}

/** input type for updating data in table "users" */
export type users_set_input = {
		authID?:string,
	id?:number,
	name?:string
}

/** aggregate stddev on columns */
export type users_stddev_fields = {
	__typename?: "users_stddev_fields",
	id?:number
}

/** order by stddev() on columns of table "users" */
export type users_stddev_order_by = {
		id?:order_by
}

/** aggregate stddev_pop on columns */
export type users_stddev_pop_fields = {
	__typename?: "users_stddev_pop_fields",
	id?:number
}

/** order by stddev_pop() on columns of table "users" */
export type users_stddev_pop_order_by = {
		id?:order_by
}

/** aggregate stddev_samp on columns */
export type users_stddev_samp_fields = {
	__typename?: "users_stddev_samp_fields",
	id?:number
}

/** order by stddev_samp() on columns of table "users" */
export type users_stddev_samp_order_by = {
		id?:order_by
}

/** aggregate sum on columns */
export type users_sum_fields = {
	__typename?: "users_sum_fields",
	id?:number
}

/** order by sum() on columns of table "users" */
export type users_sum_order_by = {
		id?:order_by
}

/** update columns of table "users" */
export enum users_update_column {
	authID = "authID",
	id = "id",
	name = "name"
}

/** aggregate var_pop on columns */
export type users_var_pop_fields = {
	__typename?: "users_var_pop_fields",
	id?:number
}

/** order by var_pop() on columns of table "users" */
export type users_var_pop_order_by = {
		id?:order_by
}

/** aggregate var_samp on columns */
export type users_var_samp_fields = {
	__typename?: "users_var_samp_fields",
	id?:number
}

/** order by var_samp() on columns of table "users" */
export type users_var_samp_order_by = {
		id?:order_by
}

/** aggregate variance on columns */
export type users_variance_fields = {
	__typename?: "users_variance_fields",
	id?:number
}

/** order by variance() on columns of table "users" */
export type users_variance_order_by = {
		id?:order_by
}


type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export type MapInterface<SRC, DST> = SRC extends {
  __interface: infer INTERFACE;
  __resolve: infer IMPLEMENTORS;
}
  ? ObjectToUnion<
      Omit<
        {
          [Key in keyof Omit<DST, keyof INTERFACE | '__typename'>]: Key extends keyof IMPLEMENTORS
            ? MapType<IMPLEMENTORS[Key], DST[Key]> &
                Omit<
                  {
                    [Key in keyof Omit<
                      DST,
                      keyof IMPLEMENTORS | '__typename'
                    >]: Key extends keyof INTERFACE
                      ? LastMapTypeSRCResolver<INTERFACE[Key], DST[Key]>
                      : never;
                  },
                  keyof IMPLEMENTORS
                > &
                (DST extends { __typename: any }
                  ? MapType<IMPLEMENTORS[Key], { __typename: true }>
                  : {})
            : never;
        },
        keyof INTERFACE | '__typename'
      >
    >
  : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };


type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z>(o: Z | V) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;


export declare function Chain(
  ...options: fetchOptions
):{
  query: OperationToGraphQL<ValueTypes["query_root"],query_root>,mutation: OperationToGraphQL<ValueTypes["mutation_root"],mutation_root>,subscription: OperationToGraphQL<ValueTypes["subscription_root"],subscription_root>
}

export declare const Zeus: {
  query: (o: ValueTypes["query_root"]) => string,mutation: (o: ValueTypes["mutation_root"]) => string,subscription: (o: ValueTypes["subscription_root"]) => string
}

export declare const Cast: {
  query: CastToGraphQL<
  ValueTypes["query_root"],
  query_root
>,mutation: CastToGraphQL<
  ValueTypes["mutation_root"],
  mutation_root
>,subscription: CastToGraphQL<
  ValueTypes["subscription_root"],
  subscription_root
>
}

export declare const Gql: ReturnType<typeof Chain>
