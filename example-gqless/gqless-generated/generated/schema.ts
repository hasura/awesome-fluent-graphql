// @ts-nocheck
import * as extensions from "../extensions";
import { lazyGetters } from "@gqless/utils";
import {
  ScalarNode,
  InputNode,
  InputNodeField,
  ArrayNode,
  EnumNode,
  ObjectNode,
  FieldNode,
  Arguments,
  ArgumentsField
} from "gqless";

export const schema = {
  get Boolean() {
    return new ScalarNode({
      name: "Boolean",
      extension: ((extensions as any) || {}).Boolean
    });
  },
  get Boolean_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _gt() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _gte() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.Boolean, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lte() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _neq() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.Boolean, true), true);
        }
      },
      { name: "Boolean_comparison_exp" }
    );
  },
  get CacheControlScope() {
    return new EnumNode({ name: "CacheControlScope" });
  },
  get Float() {
    return new ScalarNode({
      name: "Float",
      extension: ((extensions as any) || {}).Float
    });
  },
  get ID() {
    return new ScalarNode({
      name: "ID",
      extension: ((extensions as any) || {}).ID
    });
  },
  get Int() {
    return new ScalarNode({
      name: "Int",
      extension: ((extensions as any) || {}).Int
    });
  },
  get Int_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.Int, true);
        },
        get _gt() {
          return new InputNodeField(schema.Int, true);
        },
        get _gte() {
          return new InputNodeField(schema.Int, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.Int, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.Int, true);
        },
        get _lte() {
          return new InputNodeField(schema.Int, true);
        },
        get _neq() {
          return new InputNodeField(schema.Int, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.Int, true), true);
        }
      },
      { name: "Int_comparison_exp" }
    );
  },
  get Query() {
    return new ObjectNode(
      {
        get hello() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "Query", extension: ((extensions as any) || {}).Query }
    );
  },
  get String() {
    return new ScalarNode({
      name: "String",
      extension: ((extensions as any) || {}).String
    });
  },
  get String_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.String, true);
        },
        get _gt() {
          return new InputNodeField(schema.String, true);
        },
        get _gte() {
          return new InputNodeField(schema.String, true);
        },
        get _ilike() {
          return new InputNodeField(schema.String, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _like() {
          return new InputNodeField(schema.String, true);
        },
        get _lt() {
          return new InputNodeField(schema.String, true);
        },
        get _lte() {
          return new InputNodeField(schema.String, true);
        },
        get _neq() {
          return new InputNodeField(schema.String, true);
        },
        get _nilike() {
          return new InputNodeField(schema.String, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get _nlike() {
          return new InputNodeField(schema.String, true);
        },
        get _nsimilar() {
          return new InputNodeField(schema.String, true);
        },
        get _similar() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "String_comparison_exp" }
    );
  },
  get Upload() {
    return new ScalarNode({
      name: "Upload",
      extension: ((extensions as any) || {}).Upload
    });
  },
  get __Directive() {
    return new ObjectNode(
      {
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false
          );
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        }
      },
      {
        name: "__Directive",
        extension: ((extensions as any) || {}).__Directive
      }
    );
  },
  get __DirectiveLocation() {
    return new EnumNode({ name: "__DirectiveLocation" });
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        }
      },
      {
        name: "__EnumValue",
        extension: ((extensions as any) || {}).__EnumValue
      }
    );
  },
  get __Field() {
    return new ObjectNode(
      {
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        }
      },
      { name: "__Field", extension: ((extensions as any) || {}).__Field }
    );
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        }
      },
      {
        name: "__InputValue",
        extension: ((extensions as any) || {}).__InputValue
      }
    );
  },
  get __Schema() {
    return new ObjectNode(
      {
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false
          );
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false
          );
        }
      },
      { name: "__Schema", extension: ((extensions as any) || {}).__Schema }
    );
  },
  get __Type() {
    return new ObjectNode(
      {
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true
          );
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        }
      },
      { name: "__Type", extension: ((extensions as any) || {}).__Type }
    );
  },
  get __TypeKind() {
    return new EnumNode({ name: "__TypeKind" });
  },
  get conflict_action() {
    return new EnumNode({ name: "conflict_action" });
  },
  get mutation_root() {
    return new ObjectNode(
      {
        get delete_todos() {
          return new FieldNode(
            schema.todos_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.todos_bool_exp, false);
                }
              },
              true
            ),
            true
          );
        },
        get delete_users() {
          return new FieldNode(
            schema.users_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.users_bool_exp, false);
                }
              },
              true
            ),
            true
          );
        },
        get insert_todos() {
          return new FieldNode(
            schema.todos_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.todos_insert_input, false),
                  false
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.todos_on_conflict, true);
              }
            }),
            true
          );
        },
        get insert_users() {
          return new FieldNode(
            schema.users_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_insert_input, false),
                  false
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.users_on_conflict, true);
              }
            }),
            true
          );
        },
        get update_todos() {
          return new FieldNode(
            schema.todos_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.todos_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.todos_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.todos_bool_exp, false);
              }
            }),
            true
          );
        },
        get update_users() {
          return new FieldNode(
            schema.users_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.users_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.users_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.users_bool_exp, false);
              }
            }),
            true
          );
        }
      },
      {
        name: "mutation_root",
        extension: ((extensions as any) || {}).mutation_root
      }
    );
  },
  get order_by() {
    return new EnumNode({ name: "order_by" });
  },
  get query_root() {
    return new ObjectNode(
      {
        get hello() {
          return new FieldNode(schema.String, undefined, true);
        },
        get todos() {
          return new FieldNode(
            new ArrayNode(schema.todos, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.todos_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.todos_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.todos_bool_exp, true);
              }
            }),
            false
          );
        },
        get todos_aggregate() {
          return new FieldNode(
            schema.todos_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.todos_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.todos_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.todos_bool_exp, true);
              }
            }),
            false
          );
        },
        get todos_by_pk() {
          return new FieldNode(
            schema.todos,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                }
              },
              true
            ),
            true
          );
        },
        get users() {
          return new FieldNode(
            new ArrayNode(schema.users, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.users_bool_exp, true);
              }
            }),
            false
          );
        },
        get users_aggregate() {
          return new FieldNode(
            schema.users_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.users_bool_exp, true);
              }
            }),
            false
          );
        },
        get users_by_pk() {
          return new FieldNode(
            schema.users,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                }
              },
              true
            ),
            true
          );
        }
      },
      { name: "query_root", extension: ((extensions as any) || {}).query_root }
    );
  },
  get subscription_root() {
    return new ObjectNode(
      {
        get todos() {
          return new FieldNode(
            new ArrayNode(schema.todos, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.todos_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.todos_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.todos_bool_exp, true);
              }
            }),
            false
          );
        },
        get todos_aggregate() {
          return new FieldNode(
            schema.todos_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.todos_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.todos_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.todos_bool_exp, true);
              }
            }),
            false
          );
        },
        get todos_by_pk() {
          return new FieldNode(
            schema.todos,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                }
              },
              true
            ),
            true
          );
        },
        get users() {
          return new FieldNode(
            new ArrayNode(schema.users, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.users_bool_exp, true);
              }
            }),
            false
          );
        },
        get users_aggregate() {
          return new FieldNode(
            schema.users_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.users_bool_exp, true);
              }
            }),
            false
          );
        },
        get users_by_pk() {
          return new FieldNode(
            schema.users,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                }
              },
              true
            ),
            true
          );
        }
      },
      {
        name: "subscription_root",
        extension: ((extensions as any) || {}).subscription_root
      }
    );
  },
  get todos() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get is_completed() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get text() {
          return new FieldNode(schema.String, undefined, false);
        },
        get user() {
          return new FieldNode(schema.users, undefined, false);
        },
        get user_authID() {
          return new FieldNode(schema.String, undefined, false);
        }
      },
      { name: "todos", extension: ((extensions as any) || {}).todos }
    );
  },
  get todos_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(schema.todos_aggregate_fields, undefined, true);
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.todos, false),
            undefined,
            false
          );
        }
      },
      {
        name: "todos_aggregate",
        extension: ((extensions as any) || {}).todos_aggregate
      }
    );
  },
  get todos_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.todos_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.todos_select_column, true),
                  true
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get max() {
          return new FieldNode(schema.todos_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.todos_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(schema.todos_stddev_fields, undefined, true);
        },
        get stddev_pop() {
          return new FieldNode(schema.todos_stddev_pop_fields, undefined, true);
        },
        get stddev_samp() {
          return new FieldNode(
            schema.todos_stddev_samp_fields,
            undefined,
            true
          );
        },
        get sum() {
          return new FieldNode(schema.todos_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(schema.todos_var_pop_fields, undefined, true);
        },
        get var_samp() {
          return new FieldNode(schema.todos_var_samp_fields, undefined, true);
        },
        get variance() {
          return new FieldNode(schema.todos_variance_fields, undefined, true);
        }
      },
      {
        name: "todos_aggregate_fields",
        extension: ((extensions as any) || {}).todos_aggregate_fields
      }
    );
  },
  get todos_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.todos_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.todos_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.todos_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.todos_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(schema.todos_stddev_pop_order_by, true);
        },
        get stddev_samp() {
          return new InputNodeField(schema.todos_stddev_samp_order_by, true);
        },
        get sum() {
          return new InputNodeField(schema.todos_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.todos_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(schema.todos_var_samp_order_by, true);
        },
        get variance() {
          return new InputNodeField(schema.todos_variance_order_by, true);
        }
      },
      { name: "todos_aggregate_order_by" }
    );
  },
  get todos_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.todos_insert_input, false),
            false
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.todos_on_conflict, true);
        }
      },
      { name: "todos_arr_rel_insert_input" }
    );
  },
  get todos_avg_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "todos_avg_fields",
        extension: ((extensions as any) || {}).todos_avg_fields
      }
    );
  },
  get todos_avg_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "todos_avg_order_by" }
    );
  },
  get todos_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.todos_bool_exp, true),
            true
          );
        },
        get _not() {
          return new InputNodeField(schema.todos_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.todos_bool_exp, true),
            true
          );
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get is_completed() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get text() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get user() {
          return new InputNodeField(schema.users_bool_exp, true);
        },
        get user_authID() {
          return new InputNodeField(schema.String_comparison_exp, true);
        }
      },
      { name: "todos_bool_exp" }
    );
  },
  get todos_constraint() {
    return new EnumNode({ name: "todos_constraint" });
  },
  get todos_inc_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        }
      },
      { name: "todos_inc_input" }
    );
  },
  get todos_insert_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get is_completed() {
          return new InputNodeField(schema.Boolean, true);
        },
        get text() {
          return new InputNodeField(schema.String, true);
        },
        get user() {
          return new InputNodeField(schema.users_obj_rel_insert_input, true);
        },
        get user_authID() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "todos_insert_input" }
    );
  },
  get todos_max_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get text() {
          return new FieldNode(schema.String, undefined, true);
        },
        get user_authID() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "todos_max_fields",
        extension: ((extensions as any) || {}).todos_max_fields
      }
    );
  },
  get todos_max_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get text() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_authID() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "todos_max_order_by" }
    );
  },
  get todos_min_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get text() {
          return new FieldNode(schema.String, undefined, true);
        },
        get user_authID() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "todos_min_fields",
        extension: ((extensions as any) || {}).todos_min_fields
      }
    );
  },
  get todos_min_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get text() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_authID() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "todos_min_order_by" }
    );
  },
  get todos_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.todos, false),
            undefined,
            false
          );
        }
      },
      {
        name: "todos_mutation_response",
        extension: ((extensions as any) || {}).todos_mutation_response
      }
    );
  },
  get todos_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.todos_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.todos_on_conflict, true);
        }
      },
      { name: "todos_obj_rel_insert_input" }
    );
  },
  get todos_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.todos_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.todos_update_column, false),
            false
          );
        }
      },
      { name: "todos_on_conflict" }
    );
  },
  get todos_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get is_completed() {
          return new InputNodeField(schema.order_by, true);
        },
        get text() {
          return new InputNodeField(schema.order_by, true);
        },
        get user() {
          return new InputNodeField(schema.users_order_by, true);
        },
        get user_authID() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "todos_order_by" }
    );
  },
  get todos_select_column() {
    return new EnumNode({ name: "todos_select_column" });
  },
  get todos_set_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get is_completed() {
          return new InputNodeField(schema.Boolean, true);
        },
        get text() {
          return new InputNodeField(schema.String, true);
        },
        get user_authID() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "todos_set_input" }
    );
  },
  get todos_stddev_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "todos_stddev_fields",
        extension: ((extensions as any) || {}).todos_stddev_fields
      }
    );
  },
  get todos_stddev_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "todos_stddev_order_by" }
    );
  },
  get todos_stddev_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "todos_stddev_pop_fields",
        extension: ((extensions as any) || {}).todos_stddev_pop_fields
      }
    );
  },
  get todos_stddev_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "todos_stddev_pop_order_by" }
    );
  },
  get todos_stddev_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "todos_stddev_samp_fields",
        extension: ((extensions as any) || {}).todos_stddev_samp_fields
      }
    );
  },
  get todos_stddev_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "todos_stddev_samp_order_by" }
    );
  },
  get todos_sum_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      {
        name: "todos_sum_fields",
        extension: ((extensions as any) || {}).todos_sum_fields
      }
    );
  },
  get todos_sum_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "todos_sum_order_by" }
    );
  },
  get todos_update_column() {
    return new EnumNode({ name: "todos_update_column" });
  },
  get todos_var_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "todos_var_pop_fields",
        extension: ((extensions as any) || {}).todos_var_pop_fields
      }
    );
  },
  get todos_var_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "todos_var_pop_order_by" }
    );
  },
  get todos_var_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "todos_var_samp_fields",
        extension: ((extensions as any) || {}).todos_var_samp_fields
      }
    );
  },
  get todos_var_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "todos_var_samp_order_by" }
    );
  },
  get todos_variance_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "todos_variance_fields",
        extension: ((extensions as any) || {}).todos_variance_fields
      }
    );
  },
  get todos_variance_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "todos_variance_order_by" }
    );
  },
  get users() {
    return new ObjectNode(
      {
        get authID() {
          return new FieldNode(schema.String, undefined, false);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get todos() {
          return new FieldNode(
            new ArrayNode(schema.todos, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.todos_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.todos_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.todos_bool_exp, true);
              }
            }),
            false
          );
        },
        get todos_aggregate() {
          return new FieldNode(
            schema.todos_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.todos_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.todos_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.todos_bool_exp, true);
              }
            }),
            false
          );
        }
      },
      { name: "users", extension: ((extensions as any) || {}).users }
    );
  },
  get users_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(schema.users_aggregate_fields, undefined, true);
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.users, false),
            undefined,
            false
          );
        }
      },
      {
        name: "users_aggregate",
        extension: ((extensions as any) || {}).users_aggregate
      }
    );
  },
  get users_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.users_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_select_column, true),
                  true
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get max() {
          return new FieldNode(schema.users_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.users_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(schema.users_stddev_fields, undefined, true);
        },
        get stddev_pop() {
          return new FieldNode(schema.users_stddev_pop_fields, undefined, true);
        },
        get stddev_samp() {
          return new FieldNode(
            schema.users_stddev_samp_fields,
            undefined,
            true
          );
        },
        get sum() {
          return new FieldNode(schema.users_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(schema.users_var_pop_fields, undefined, true);
        },
        get var_samp() {
          return new FieldNode(schema.users_var_samp_fields, undefined, true);
        },
        get variance() {
          return new FieldNode(schema.users_variance_fields, undefined, true);
        }
      },
      {
        name: "users_aggregate_fields",
        extension: ((extensions as any) || {}).users_aggregate_fields
      }
    );
  },
  get users_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.users_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.users_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.users_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.users_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(schema.users_stddev_pop_order_by, true);
        },
        get stddev_samp() {
          return new InputNodeField(schema.users_stddev_samp_order_by, true);
        },
        get sum() {
          return new InputNodeField(schema.users_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.users_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(schema.users_var_samp_order_by, true);
        },
        get variance() {
          return new InputNodeField(schema.users_variance_order_by, true);
        }
      },
      { name: "users_aggregate_order_by" }
    );
  },
  get users_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.users_insert_input, false),
            false
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.users_on_conflict, true);
        }
      },
      { name: "users_arr_rel_insert_input" }
    );
  },
  get users_avg_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "users_avg_fields",
        extension: ((extensions as any) || {}).users_avg_fields
      }
    );
  },
  get users_avg_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "users_avg_order_by" }
    );
  },
  get users_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.users_bool_exp, true),
            true
          );
        },
        get _not() {
          return new InputNodeField(schema.users_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.users_bool_exp, true),
            true
          );
        },
        get authID() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get todos() {
          return new InputNodeField(schema.todos_bool_exp, true);
        }
      },
      { name: "users_bool_exp" }
    );
  },
  get users_constraint() {
    return new EnumNode({ name: "users_constraint" });
  },
  get users_inc_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        }
      },
      { name: "users_inc_input" }
    );
  },
  get users_insert_input() {
    return new InputNode(
      {
        get authID() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get todos() {
          return new InputNodeField(schema.todos_arr_rel_insert_input, true);
        }
      },
      { name: "users_insert_input" }
    );
  },
  get users_max_fields() {
    return new ObjectNode(
      {
        get authID() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "users_max_fields",
        extension: ((extensions as any) || {}).users_max_fields
      }
    );
  },
  get users_max_order_by() {
    return new InputNode(
      {
        get authID() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "users_max_order_by" }
    );
  },
  get users_min_fields() {
    return new ObjectNode(
      {
        get authID() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "users_min_fields",
        extension: ((extensions as any) || {}).users_min_fields
      }
    );
  },
  get users_min_order_by() {
    return new InputNode(
      {
        get authID() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "users_min_order_by" }
    );
  },
  get users_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.users, false),
            undefined,
            false
          );
        }
      },
      {
        name: "users_mutation_response",
        extension: ((extensions as any) || {}).users_mutation_response
      }
    );
  },
  get users_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.users_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.users_on_conflict, true);
        }
      },
      { name: "users_obj_rel_insert_input" }
    );
  },
  get users_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.users_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.users_update_column, false),
            false
          );
        }
      },
      { name: "users_on_conflict" }
    );
  },
  get users_order_by() {
    return new InputNode(
      {
        get authID() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get todos_aggregate() {
          return new InputNodeField(schema.todos_aggregate_order_by, true);
        }
      },
      { name: "users_order_by" }
    );
  },
  get users_select_column() {
    return new EnumNode({ name: "users_select_column" });
  },
  get users_set_input() {
    return new InputNode(
      {
        get authID() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "users_set_input" }
    );
  },
  get users_stddev_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "users_stddev_fields",
        extension: ((extensions as any) || {}).users_stddev_fields
      }
    );
  },
  get users_stddev_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "users_stddev_order_by" }
    );
  },
  get users_stddev_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "users_stddev_pop_fields",
        extension: ((extensions as any) || {}).users_stddev_pop_fields
      }
    );
  },
  get users_stddev_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "users_stddev_pop_order_by" }
    );
  },
  get users_stddev_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "users_stddev_samp_fields",
        extension: ((extensions as any) || {}).users_stddev_samp_fields
      }
    );
  },
  get users_stddev_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "users_stddev_samp_order_by" }
    );
  },
  get users_sum_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      {
        name: "users_sum_fields",
        extension: ((extensions as any) || {}).users_sum_fields
      }
    );
  },
  get users_sum_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "users_sum_order_by" }
    );
  },
  get users_update_column() {
    return new EnumNode({ name: "users_update_column" });
  },
  get users_var_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "users_var_pop_fields",
        extension: ((extensions as any) || {}).users_var_pop_fields
      }
    );
  },
  get users_var_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "users_var_pop_order_by" }
    );
  },
  get users_var_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "users_var_samp_fields",
        extension: ((extensions as any) || {}).users_var_samp_fields
      }
    );
  },
  get users_var_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "users_var_samp_order_by" }
    );
  },
  get users_variance_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "users_variance_fields",
        extension: ((extensions as any) || {}).users_variance_fields
      }
    );
  },
  get users_variance_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "users_variance_order_by" }
    );
  }
};

lazyGetters(schema);
