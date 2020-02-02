/* tslint:disable */
/* eslint-disable */
import fetch from "node-fetch";

export const AllTypesProps = {
  Boolean_comparison_exp: {
    _eq: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false
    },
    _gt: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false
    },
    _gte: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false
    },
    _in: {
      type: "Boolean",
      array: true,
      arrayRequired: false,
      required: true
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false
    },
    _lt: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false
    },
    _lte: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false
    },
    _neq: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false
    },
    _nin: {
      type: "Boolean",
      array: true,
      arrayRequired: false,
      required: true
    }
  },
  CacheControlScope: "enum",
  conflict_action: "enum",
  Int_comparison_exp: {
    _eq: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false
    },
    _gt: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false
    },
    _gte: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false
    },
    _in: {
      type: "Int",
      array: true,
      arrayRequired: false,
      required: true
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false
    },
    _lt: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false
    },
    _lte: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false
    },
    _neq: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false
    },
    _nin: {
      type: "Int",
      array: true,
      arrayRequired: false,
      required: true
    }
  },
  mutation_root: {
    delete_todos: {
      where: {
        type: "todos_bool_exp",
        array: false,
        arrayRequired: false,
        required: true
      }
    },
    delete_users: {
      where: {
        type: "users_bool_exp",
        array: false,
        arrayRequired: false,
        required: true
      }
    },
    insert_todos: {
      objects: {
        type: "todos_insert_input",
        array: true,
        arrayRequired: true,
        required: true
      },
      on_conflict: {
        type: "todos_on_conflict",
        array: false,
        arrayRequired: false,
        required: false
      }
    },
    insert_users: {
      objects: {
        type: "users_insert_input",
        array: true,
        arrayRequired: true,
        required: true
      },
      on_conflict: {
        type: "users_on_conflict",
        array: false,
        arrayRequired: false,
        required: false
      }
    },
    update_todos: {
      _inc: {
        type: "todos_inc_input",
        array: false,
        arrayRequired: false,
        required: false
      },
      _set: {
        type: "todos_set_input",
        array: false,
        arrayRequired: false,
        required: false
      },
      where: {
        type: "todos_bool_exp",
        array: false,
        arrayRequired: false,
        required: true
      }
    },
    update_users: {
      _inc: {
        type: "users_inc_input",
        array: false,
        arrayRequired: false,
        required: false
      },
      _set: {
        type: "users_set_input",
        array: false,
        arrayRequired: false,
        required: false
      },
      where: {
        type: "users_bool_exp",
        array: false,
        arrayRequired: false,
        required: true
      }
    }
  },
  order_by: "enum",
  query_root: {
    todos: {
      distinct_on: {
        type: "todos_select_column",
        array: true,
        arrayRequired: false,
        required: true
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      order_by: {
        type: "todos_order_by",
        array: true,
        arrayRequired: false,
        required: true
      },
      where: {
        type: "todos_bool_exp",
        array: false,
        arrayRequired: false,
        required: false
      }
    },
    todos_aggregate: {
      distinct_on: {
        type: "todos_select_column",
        array: true,
        arrayRequired: false,
        required: true
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      order_by: {
        type: "todos_order_by",
        array: true,
        arrayRequired: false,
        required: true
      },
      where: {
        type: "todos_bool_exp",
        array: false,
        arrayRequired: false,
        required: false
      }
    },
    todos_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true
      }
    },
    users: {
      distinct_on: {
        type: "users_select_column",
        array: true,
        arrayRequired: false,
        required: true
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      order_by: {
        type: "users_order_by",
        array: true,
        arrayRequired: false,
        required: true
      },
      where: {
        type: "users_bool_exp",
        array: false,
        arrayRequired: false,
        required: false
      }
    },
    users_aggregate: {
      distinct_on: {
        type: "users_select_column",
        array: true,
        arrayRequired: false,
        required: true
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      order_by: {
        type: "users_order_by",
        array: true,
        arrayRequired: false,
        required: true
      },
      where: {
        type: "users_bool_exp",
        array: false,
        arrayRequired: false,
        required: false
      }
    },
    users_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true
      }
    }
  },
  String_comparison_exp: {
    _eq: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    },
    _gt: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    },
    _gte: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    },
    _ilike: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    },
    _in: {
      type: "String",
      array: true,
      arrayRequired: false,
      required: true
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false
    },
    _like: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    },
    _lt: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    },
    _lte: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    },
    _neq: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    },
    _nilike: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    },
    _nin: {
      type: "String",
      array: true,
      arrayRequired: false,
      required: true
    },
    _nlike: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    },
    _nsimilar: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    },
    _similar: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  subscription_root: {
    todos: {
      distinct_on: {
        type: "todos_select_column",
        array: true,
        arrayRequired: false,
        required: true
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      order_by: {
        type: "todos_order_by",
        array: true,
        arrayRequired: false,
        required: true
      },
      where: {
        type: "todos_bool_exp",
        array: false,
        arrayRequired: false,
        required: false
      }
    },
    todos_aggregate: {
      distinct_on: {
        type: "todos_select_column",
        array: true,
        arrayRequired: false,
        required: true
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      order_by: {
        type: "todos_order_by",
        array: true,
        arrayRequired: false,
        required: true
      },
      where: {
        type: "todos_bool_exp",
        array: false,
        arrayRequired: false,
        required: false
      }
    },
    todos_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true
      }
    },
    users: {
      distinct_on: {
        type: "users_select_column",
        array: true,
        arrayRequired: false,
        required: true
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      order_by: {
        type: "users_order_by",
        array: true,
        arrayRequired: false,
        required: true
      },
      where: {
        type: "users_bool_exp",
        array: false,
        arrayRequired: false,
        required: false
      }
    },
    users_aggregate: {
      distinct_on: {
        type: "users_select_column",
        array: true,
        arrayRequired: false,
        required: true
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      order_by: {
        type: "users_order_by",
        array: true,
        arrayRequired: false,
        required: true
      },
      where: {
        type: "users_bool_exp",
        array: false,
        arrayRequired: false,
        required: false
      }
    },
    users_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true
      }
    }
  },
  todos_aggregate_fields: {
    count: {
      columns: {
        type: "todos_select_column",
        array: true,
        arrayRequired: false,
        required: true
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false
      }
    }
  },
  todos_aggregate_order_by: {
    avg: {
      type: "todos_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    max: {
      type: "todos_max_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    min: {
      type: "todos_min_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    stddev: {
      type: "todos_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    stddev_pop: {
      type: "todos_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    stddev_samp: {
      type: "todos_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    sum: {
      type: "todos_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    var_pop: {
      type: "todos_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    var_samp: {
      type: "todos_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    variance: {
      type: "todos_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  todos_arr_rel_insert_input: {
    data: {
      type: "todos_insert_input",
      array: true,
      arrayRequired: true,
      required: true
    },
    on_conflict: {
      type: "todos_on_conflict",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  todos_avg_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  todos_bool_exp: {
    _and: {
      type: "todos_bool_exp",
      array: true,
      arrayRequired: false,
      required: false
    },
    _not: {
      type: "todos_bool_exp",
      array: false,
      arrayRequired: false,
      required: false
    },
    _or: {
      type: "todos_bool_exp",
      array: true,
      arrayRequired: false,
      required: false
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false
    },
    is_completed: {
      type: "Boolean_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false
    },
    text: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false
    },
    user: {
      type: "users_bool_exp",
      array: false,
      arrayRequired: false,
      required: false
    },
    user_authID: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  todos_constraint: "enum",
  todos_inc_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  todos_insert_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false
    },
    is_completed: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false
    },
    text: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    },
    user: {
      type: "users_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false
    },
    user_authID: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  todos_max_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    text: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    user_authID: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  todos_min_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    text: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    user_authID: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  todos_obj_rel_insert_input: {
    data: {
      type: "todos_insert_input",
      array: false,
      arrayRequired: false,
      required: true
    },
    on_conflict: {
      type: "todos_on_conflict",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  todos_on_conflict: {
    constraint: {
      type: "todos_constraint",
      array: false,
      arrayRequired: false,
      required: true
    },
    update_columns: {
      type: "todos_update_column",
      array: true,
      arrayRequired: true,
      required: true
    }
  },
  todos_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    is_completed: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    text: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    user: {
      type: "users_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    user_authID: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  todos_select_column: "enum",
  todos_set_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false
    },
    is_completed: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false
    },
    text: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    },
    user_authID: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  todos_stddev_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  todos_stddev_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  todos_stddev_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  todos_sum_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  todos_update_column: "enum",
  todos_var_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  todos_var_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  todos_variance_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  Upload: "String",
  users: {
    todos: {
      distinct_on: {
        type: "todos_select_column",
        array: true,
        arrayRequired: false,
        required: true
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      order_by: {
        type: "todos_order_by",
        array: true,
        arrayRequired: false,
        required: true
      },
      where: {
        type: "todos_bool_exp",
        array: false,
        arrayRequired: false,
        required: false
      }
    },
    todos_aggregate: {
      distinct_on: {
        type: "todos_select_column",
        array: true,
        arrayRequired: false,
        required: true
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false
      },
      order_by: {
        type: "todos_order_by",
        array: true,
        arrayRequired: false,
        required: true
      },
      where: {
        type: "todos_bool_exp",
        array: false,
        arrayRequired: false,
        required: false
      }
    }
  },
  users_aggregate_fields: {
    count: {
      columns: {
        type: "users_select_column",
        array: true,
        arrayRequired: false,
        required: true
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false
      }
    }
  },
  users_aggregate_order_by: {
    avg: {
      type: "users_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    max: {
      type: "users_max_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    min: {
      type: "users_min_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    stddev: {
      type: "users_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    stddev_pop: {
      type: "users_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    stddev_samp: {
      type: "users_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    sum: {
      type: "users_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    var_pop: {
      type: "users_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    var_samp: {
      type: "users_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    variance: {
      type: "users_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  users_arr_rel_insert_input: {
    data: {
      type: "users_insert_input",
      array: true,
      arrayRequired: true,
      required: true
    },
    on_conflict: {
      type: "users_on_conflict",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  users_avg_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  users_bool_exp: {
    _and: {
      type: "users_bool_exp",
      array: true,
      arrayRequired: false,
      required: false
    },
    _not: {
      type: "users_bool_exp",
      array: false,
      arrayRequired: false,
      required: false
    },
    _or: {
      type: "users_bool_exp",
      array: true,
      arrayRequired: false,
      required: false
    },
    authID: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false
    },
    name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false
    },
    todos: {
      type: "todos_bool_exp",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  users_constraint: "enum",
  users_inc_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  users_insert_input: {
    authID: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    },
    todos: {
      type: "todos_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  users_max_order_by: {
    authID: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  users_min_order_by: {
    authID: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  users_obj_rel_insert_input: {
    data: {
      type: "users_insert_input",
      array: false,
      arrayRequired: false,
      required: true
    },
    on_conflict: {
      type: "users_on_conflict",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  users_on_conflict: {
    constraint: {
      type: "users_constraint",
      array: false,
      arrayRequired: false,
      required: true
    },
    update_columns: {
      type: "users_update_column",
      array: true,
      arrayRequired: true,
      required: true
    }
  },
  users_order_by: {
    authID: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    },
    todos_aggregate: {
      type: "todos_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  users_select_column: "enum",
  users_set_input: {
    authID: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  users_stddev_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  users_stddev_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  users_stddev_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  users_sum_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  users_update_column: "enum",
  users_var_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  users_var_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  },
  users_variance_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false
    }
  }
};

export const ReturnTypes = {
  mutation_root: {
    delete_todos: "todos_mutation_response",
    delete_users: "users_mutation_response",
    insert_todos: "todos_mutation_response",
    insert_users: "users_mutation_response",
    update_todos: "todos_mutation_response",
    update_users: "users_mutation_response"
  },
  Query: {
    hello: "String"
  },
  query_root: {
    hello: "String",
    todos: "todos",
    todos_aggregate: "todos_aggregate",
    todos_by_pk: "todos",
    users: "users",
    users_aggregate: "users_aggregate",
    users_by_pk: "users"
  },
  subscription_root: {
    todos: "todos",
    todos_aggregate: "todos_aggregate",
    todos_by_pk: "todos",
    users: "users",
    users_aggregate: "users_aggregate",
    users_by_pk: "users"
  },
  todos: {
    id: "Int",
    is_completed: "Boolean",
    text: "String",
    user: "users",
    user_authID: "String"
  },
  todos_aggregate: {
    aggregate: "todos_aggregate_fields",
    nodes: "todos"
  },
  todos_aggregate_fields: {
    avg: "todos_avg_fields",
    count: "Int",
    max: "todos_max_fields",
    min: "todos_min_fields",
    stddev: "todos_stddev_fields",
    stddev_pop: "todos_stddev_pop_fields",
    stddev_samp: "todos_stddev_samp_fields",
    sum: "todos_sum_fields",
    var_pop: "todos_var_pop_fields",
    var_samp: "todos_var_samp_fields",
    variance: "todos_variance_fields"
  },
  todos_avg_fields: {
    id: "Float"
  },
  todos_max_fields: {
    id: "Int",
    text: "String",
    user_authID: "String"
  },
  todos_min_fields: {
    id: "Int",
    text: "String",
    user_authID: "String"
  },
  todos_mutation_response: {
    affected_rows: "Int",
    returning: "todos"
  },
  todos_stddev_fields: {
    id: "Float"
  },
  todos_stddev_pop_fields: {
    id: "Float"
  },
  todos_stddev_samp_fields: {
    id: "Float"
  },
  todos_sum_fields: {
    id: "Int"
  },
  todos_var_pop_fields: {
    id: "Float"
  },
  todos_var_samp_fields: {
    id: "Float"
  },
  todos_variance_fields: {
    id: "Float"
  },
  users: {
    authID: "String",
    id: "Int",
    name: "String",
    todos: "todos",
    todos_aggregate: "todos_aggregate"
  },
  users_aggregate: {
    aggregate: "users_aggregate_fields",
    nodes: "users"
  },
  users_aggregate_fields: {
    avg: "users_avg_fields",
    count: "Int",
    max: "users_max_fields",
    min: "users_min_fields",
    stddev: "users_stddev_fields",
    stddev_pop: "users_stddev_pop_fields",
    stddev_samp: "users_stddev_samp_fields",
    sum: "users_sum_fields",
    var_pop: "users_var_pop_fields",
    var_samp: "users_var_samp_fields",
    variance: "users_variance_fields"
  },
  users_avg_fields: {
    id: "Float"
  },
  users_max_fields: {
    authID: "String",
    id: "Int",
    name: "String"
  },
  users_min_fields: {
    authID: "String",
    id: "Int",
    name: "String"
  },
  users_mutation_response: {
    affected_rows: "Int",
    returning: "users"
  },
  users_stddev_fields: {
    id: "Float"
  },
  users_stddev_pop_fields: {
    id: "Float"
  },
  users_stddev_samp_fields: {
    id: "Float"
  },
  users_sum_fields: {
    id: "Int"
  },
  users_var_pop_fields: {
    id: "Float"
  },
  users_var_samp_fields: {
    id: "Float"
  },
  users_variance_fields: {
    id: "Float"
  }
};

export class GraphQLError extends Error {
  constructor(response) {
    super("");
    this.response = response;
    console.error(response);
  }
  toString() {
    return "GraphQL Response Error";
  }
}

export const ScalarResolver = (scalar, value) => {
  switch (scalar) {
    case "String":
      return `"${value.replace(/"/g, '\\"')}"`;
    case "Int":
      return `${value}`;
    case "Float":
      return `${value}`;
    case "Boolean":
      return `${value}`;
    case "ID":
      return `"${value}"`;
    case "enum":
      return `${value}`;
    case "scalar":
      return `${value}`;
    default:
      return false;
  }
};

export const TypesPropsResolver = ({ value, type, name, key, blockArrays }) => {
  if (value === null) {
    return `null`;
  }
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  if (!resolvedValue) {
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ""}`);
  }
  const typeResolved = resolvedValue.type;
  const isArray = resolvedValue.array;
  if (isArray && !blockArrays) {
    return `[${value
      .map(v =>
        TypesPropsResolver({ value: v, type, name, key, blockArrays: true })
      )
      .join(",")}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === "object") {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter(ak => value[ak] !== undefined)
        .map(
          ak =>
            `${ak}:${TypesPropsResolver({
              value: value[ak],
              type: typeResolved,
              name: ak
            })}`
        )}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value);
  }
  return reslovedScalar;
};

const isArrayFunction = (parent, a) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values);

  if (!keys.length) {
    return keyValues.length > 0
      ? `(${keyValues
          .map(
            v =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: mainKey,
                name: key,
                key: v
              })}`
          )
          .join(",")})${r ? traverseToSeekArrays(parent, r) : ""}`
      : traverseToSeekArrays(parent, r);
  }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            v =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(",")})${r ? traverseToSeekArrays(parent, r) : ""}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (k, v) =>
  typeof v === "boolean"
    ? k
    : typeof v === "object"
    ? `${k}{${objectToTree(v)}}`
    : `${k}${v}`;

const objectToTree = o =>
  `{${Object.keys(o)
    .map(k => `${resolveKV(k, o[k])}`)
    .join(" ")}}`;

const traverseToSeekArrays = (parent, a) => {
  if (!a) return "";
  if (Object.keys(a).length === 0) {
    return "";
  }
  let b = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === "object") {
      Object.keys(a).map(k => {
        if (k === "__alias") {
          Object.keys(a[k]).map(aliasKey => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays(
              [...parent, aliasOperationName],
              aliasOperation
            );
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return "";
    }
  }
  return objectToTree(b);
};

const buildQuery = (type, a) => traverseToSeekArrays([type], a);

const queryConstruct = (t, tName) => o =>
  `${t.toLowerCase()}${buildQuery(tName, o)}`;

const fullChainConstruct = options => (t, tName) => o =>
  apiFetch(options, queryConstruct(t, tName)(o));

const seekForAliases = o => {
  if (typeof o === "object" && o) {
    const keys = Object.keys(o);
    if (keys.length < 1) {
      return;
    }
    keys.forEach(k => {
      const value = o[k];
      if (k.indexOf("__alias__") !== -1) {
        const [operation, alias] = k.split("__alias__");
        o[alias] = {
          [operation]: value
        };
        delete o[k];
      } else {
        if (Array.isArray(value)) {
          value.forEach(seekForAliases);
        } else {
          if (typeof value === "object") {
            seekForAliases(value);
          }
        }
      }
    });
  }
};

const handleFetchResponse = response => {
  if (!response.ok) {
    return new Promise((resolve, reject) => {
      response
        .text()
        .then(text => {
          try {
            reject(JSON.parse(text));
          } catch (err) {
            reject(text);
          }
        })
        .catch(reject);
    });
  }
  return response.json();
};

const apiFetch = (options, query) => {
  const fetchFunction = fetch;
  let queryString = query;
  let fetchOptions = options[1] || {};
  if (fetchOptions.method && fetchOptions.method === "GET") {
    queryString = encodeURIComponent(query);
    return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
      .then(handleFetchResponse)
      .then(response => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        seekForAliases(response.data);
        return response.data;
      });
  }
  return fetchFunction(`${options[0]}`, {
    body: JSON.stringify({ query: queryString }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer MY_TOKEN"
    },
    ...fetchOptions
  })
    .then(handleFetchResponse)
    .then(response => {
      if (response.errors) {
        throw new GraphQLError(response);
      }
      seekForAliases(response.data);
      return response.data;
    });
};

export const Chain = (...options) => ({
  query: o =>
    fullChainConstruct(options)("query", "query_root")(o).then(
      response => response
    ),
  mutation: o =>
    fullChainConstruct(options)("mutation", "mutation_root")(o).then(
      response => response
    ),
  subscription: o =>
    fullChainConstruct(options)("subscription", "subscription_root")(o).then(
      response => response
    )
});
export const Zeus = {
  query: o => queryConstruct("query", "query_root")(o),
  mutation: o => queryConstruct("mutation", "mutation_root")(o),
  subscription: o => queryConstruct("subscription", "subscription_root")(o)
};
export const Cast = {
  query: o => b => o,
  mutation: o => b => o,
  subscription: o => b => o
};

export const Gql = Chain("MY_GRAPHQL_ENDPOINT");
