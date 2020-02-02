"use strict";
exports.__esModule = true;
// @ts-nocheck
var extensions = require("../extensions");
var utils_1 = require("@gqless/utils");
var gqless_1 = require("gqless");
exports.schema = {
    get Boolean() {
        return new gqless_1.ScalarNode({
            name: "Boolean",
            extension: (extensions || {}).Boolean
        });
    },
    get Boolean_comparison_exp() {
        return new gqless_1.InputNode({
            get _eq() {
                return new gqless_1.InputNodeField(exports.schema.Boolean, true);
            },
            get _gt() {
                return new gqless_1.InputNodeField(exports.schema.Boolean, true);
            },
            get _gte() {
                return new gqless_1.InputNodeField(exports.schema.Boolean, true);
            },
            get _in() {
                return new gqless_1.InputNodeField(new gqless_1.ArrayNode(exports.schema.Boolean, true), true);
            },
            get _is_null() {
                return new gqless_1.InputNodeField(exports.schema.Boolean, true);
            },
            get _lt() {
                return new gqless_1.InputNodeField(exports.schema.Boolean, true);
            },
            get _lte() {
                return new gqless_1.InputNodeField(exports.schema.Boolean, true);
            },
            get _neq() {
                return new gqless_1.InputNodeField(exports.schema.Boolean, true);
            },
            get _nin() {
                return new gqless_1.InputNodeField(new gqless_1.ArrayNode(exports.schema.Boolean, true), true);
            }
        }, { name: "Boolean_comparison_exp" });
    },
    get CacheControlScope() {
        return new gqless_1.EnumNode({ name: "CacheControlScope" });
    },
    get Float() {
        return new gqless_1.ScalarNode({
            name: "Float",
            extension: (extensions || {}).Float
        });
    },
    get ID() {
        return new gqless_1.ScalarNode({
            name: "ID",
            extension: (extensions || {}).ID
        });
    },
    get Int() {
        return new gqless_1.ScalarNode({
            name: "Int",
            extension: (extensions || {}).Int
        });
    },
    get Int_comparison_exp() {
        return new gqless_1.InputNode({
            get _eq() {
                return new gqless_1.InputNodeField(exports.schema.Int, true);
            },
            get _gt() {
                return new gqless_1.InputNodeField(exports.schema.Int, true);
            },
            get _gte() {
                return new gqless_1.InputNodeField(exports.schema.Int, true);
            },
            get _in() {
                return new gqless_1.InputNodeField(new gqless_1.ArrayNode(exports.schema.Int, true), true);
            },
            get _is_null() {
                return new gqless_1.InputNodeField(exports.schema.Boolean, true);
            },
            get _lt() {
                return new gqless_1.InputNodeField(exports.schema.Int, true);
            },
            get _lte() {
                return new gqless_1.InputNodeField(exports.schema.Int, true);
            },
            get _neq() {
                return new gqless_1.InputNodeField(exports.schema.Int, true);
            },
            get _nin() {
                return new gqless_1.InputNodeField(new gqless_1.ArrayNode(exports.schema.Int, true), true);
            }
        }, { name: "Int_comparison_exp" });
    },
    get Query() {
        return new gqless_1.ObjectNode({
            get hello() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            }
        }, { name: "Query", extension: (extensions || {}).Query });
    },
    get String() {
        return new gqless_1.ScalarNode({
            name: "String",
            extension: (extensions || {}).String
        });
    },
    get String_comparison_exp() {
        return new gqless_1.InputNode({
            get _eq() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            },
            get _gt() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            },
            get _gte() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            },
            get _ilike() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            },
            get _in() {
                return new gqless_1.InputNodeField(new gqless_1.ArrayNode(exports.schema.String, true), true);
            },
            get _is_null() {
                return new gqless_1.InputNodeField(exports.schema.Boolean, true);
            },
            get _like() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            },
            get _lt() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            },
            get _lte() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            },
            get _neq() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            },
            get _nilike() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            },
            get _nin() {
                return new gqless_1.InputNodeField(new gqless_1.ArrayNode(exports.schema.String, true), true);
            },
            get _nlike() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            },
            get _nsimilar() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            },
            get _similar() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            }
        }, { name: "String_comparison_exp" });
    },
    get Upload() {
        return new gqless_1.ScalarNode({
            name: "Upload",
            extension: (extensions || {}).Upload
        });
    },
    get __Directive() {
        return new gqless_1.ObjectNode({
            get args() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.__InputValue, false), undefined, false);
            },
            get description() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            },
            get locations() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.__DirectiveLocation, false), undefined, false);
            },
            get name() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, false);
            }
        }, {
            name: "__Directive",
            extension: (extensions || {}).__Directive
        });
    },
    get __DirectiveLocation() {
        return new gqless_1.EnumNode({ name: "__DirectiveLocation" });
    },
    get __EnumValue() {
        return new gqless_1.ObjectNode({
            get deprecationReason() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            },
            get description() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            },
            get isDeprecated() {
                return new gqless_1.FieldNode(exports.schema.Boolean, undefined, false);
            },
            get name() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, false);
            }
        }, {
            name: "__EnumValue",
            extension: (extensions || {}).__EnumValue
        });
    },
    get __Field() {
        return new gqless_1.ObjectNode({
            get args() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.__InputValue, false), undefined, false);
            },
            get deprecationReason() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            },
            get description() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            },
            get isDeprecated() {
                return new gqless_1.FieldNode(exports.schema.Boolean, undefined, false);
            },
            get name() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, false);
            },
            get type() {
                return new gqless_1.FieldNode(exports.schema.__Type, undefined, false);
            }
        }, { name: "__Field", extension: (extensions || {}).__Field });
    },
    get __InputValue() {
        return new gqless_1.ObjectNode({
            get defaultValue() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            },
            get description() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            },
            get name() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, false);
            },
            get type() {
                return new gqless_1.FieldNode(exports.schema.__Type, undefined, false);
            }
        }, {
            name: "__InputValue",
            extension: (extensions || {}).__InputValue
        });
    },
    get __Schema() {
        return new gqless_1.ObjectNode({
            get directives() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.__Directive, false), undefined, false);
            },
            get mutationType() {
                return new gqless_1.FieldNode(exports.schema.__Type, undefined, true);
            },
            get queryType() {
                return new gqless_1.FieldNode(exports.schema.__Type, undefined, false);
            },
            get subscriptionType() {
                return new gqless_1.FieldNode(exports.schema.__Type, undefined, true);
            },
            get types() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.__Type, false), undefined, false);
            }
        }, { name: "__Schema", extension: (extensions || {}).__Schema });
    },
    get __Type() {
        return new gqless_1.ObjectNode({
            get description() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            },
            get enumValues() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.__EnumValue, true), new gqless_1.Arguments({
                    get includeDeprecated() {
                        return new gqless_1.ArgumentsField(exports.schema.Boolean, true);
                    }
                }), true);
            },
            get fields() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.__Field, true), new gqless_1.Arguments({
                    get includeDeprecated() {
                        return new gqless_1.ArgumentsField(exports.schema.Boolean, true);
                    }
                }), true);
            },
            get inputFields() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.__InputValue, true), undefined, true);
            },
            get interfaces() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.__Type, true), undefined, true);
            },
            get kind() {
                return new gqless_1.FieldNode(exports.schema.__TypeKind, undefined, false);
            },
            get name() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            },
            get ofType() {
                return new gqless_1.FieldNode(exports.schema.__Type, undefined, true);
            },
            get possibleTypes() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.__Type, true), undefined, true);
            }
        }, { name: "__Type", extension: (extensions || {}).__Type });
    },
    get __TypeKind() {
        return new gqless_1.EnumNode({ name: "__TypeKind" });
    },
    get conflict_action() {
        return new gqless_1.EnumNode({ name: "conflict_action" });
    },
    get mutation_root() {
        return new gqless_1.ObjectNode({
            get delete_todos() {
                return new gqless_1.FieldNode(exports.schema.todos_mutation_response, new gqless_1.Arguments({
                    get where() {
                        return new gqless_1.ArgumentsField(exports.schema.todos_bool_exp, false);
                    }
                }, true), true);
            },
            get delete_users() {
                return new gqless_1.FieldNode(exports.schema.users_mutation_response, new gqless_1.Arguments({
                    get where() {
                        return new gqless_1.ArgumentsField(exports.schema.users_bool_exp, false);
                    }
                }, true), true);
            },
            get insert_todos() {
                return new gqless_1.FieldNode(exports.schema.todos_mutation_response, new gqless_1.Arguments({
                    get objects() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.todos_insert_input, false), false);
                    },
                    get on_conflict() {
                        return new gqless_1.ArgumentsField(exports.schema.todos_on_conflict, true);
                    }
                }), true);
            },
            get insert_users() {
                return new gqless_1.FieldNode(exports.schema.users_mutation_response, new gqless_1.Arguments({
                    get objects() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.users_insert_input, false), false);
                    },
                    get on_conflict() {
                        return new gqless_1.ArgumentsField(exports.schema.users_on_conflict, true);
                    }
                }), true);
            },
            get update_todos() {
                return new gqless_1.FieldNode(exports.schema.todos_mutation_response, new gqless_1.Arguments({
                    get _inc() {
                        return new gqless_1.ArgumentsField(exports.schema.todos_inc_input, true);
                    },
                    get _set() {
                        return new gqless_1.ArgumentsField(exports.schema.todos_set_input, true);
                    },
                    get where() {
                        return new gqless_1.ArgumentsField(exports.schema.todos_bool_exp, false);
                    }
                }), true);
            },
            get update_users() {
                return new gqless_1.FieldNode(exports.schema.users_mutation_response, new gqless_1.Arguments({
                    get _inc() {
                        return new gqless_1.ArgumentsField(exports.schema.users_inc_input, true);
                    },
                    get _set() {
                        return new gqless_1.ArgumentsField(exports.schema.users_set_input, true);
                    },
                    get where() {
                        return new gqless_1.ArgumentsField(exports.schema.users_bool_exp, false);
                    }
                }), true);
            }
        }, {
            name: "mutation_root",
            extension: (extensions || {}).mutation_root
        });
    },
    get order_by() {
        return new gqless_1.EnumNode({ name: "order_by" });
    },
    get query_root() {
        return new gqless_1.ObjectNode({
            get hello() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            },
            get todos() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.todos, false), new gqless_1.Arguments({
                    get distinct_on() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.todos_select_column, true), true);
                    },
                    get limit() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get offset() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get order_by() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.todos_order_by, true), true);
                    },
                    get where() {
                        return new gqless_1.ArgumentsField(exports.schema.todos_bool_exp, true);
                    }
                }), false);
            },
            get todos_aggregate() {
                return new gqless_1.FieldNode(exports.schema.todos_aggregate, new gqless_1.Arguments({
                    get distinct_on() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.todos_select_column, true), true);
                    },
                    get limit() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get offset() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get order_by() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.todos_order_by, true), true);
                    },
                    get where() {
                        return new gqless_1.ArgumentsField(exports.schema.todos_bool_exp, true);
                    }
                }), false);
            },
            get todos_by_pk() {
                return new gqless_1.FieldNode(exports.schema.todos, new gqless_1.Arguments({
                    get id() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, false);
                    }
                }, true), true);
            },
            get users() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.users, false), new gqless_1.Arguments({
                    get distinct_on() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.users_select_column, true), true);
                    },
                    get limit() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get offset() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get order_by() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.users_order_by, true), true);
                    },
                    get where() {
                        return new gqless_1.ArgumentsField(exports.schema.users_bool_exp, true);
                    }
                }), false);
            },
            get users_aggregate() {
                return new gqless_1.FieldNode(exports.schema.users_aggregate, new gqless_1.Arguments({
                    get distinct_on() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.users_select_column, true), true);
                    },
                    get limit() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get offset() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get order_by() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.users_order_by, true), true);
                    },
                    get where() {
                        return new gqless_1.ArgumentsField(exports.schema.users_bool_exp, true);
                    }
                }), false);
            },
            get users_by_pk() {
                return new gqless_1.FieldNode(exports.schema.users, new gqless_1.Arguments({
                    get id() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, false);
                    }
                }, true), true);
            }
        }, { name: "query_root", extension: (extensions || {}).query_root });
    },
    get subscription_root() {
        return new gqless_1.ObjectNode({
            get todos() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.todos, false), new gqless_1.Arguments({
                    get distinct_on() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.todos_select_column, true), true);
                    },
                    get limit() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get offset() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get order_by() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.todos_order_by, true), true);
                    },
                    get where() {
                        return new gqless_1.ArgumentsField(exports.schema.todos_bool_exp, true);
                    }
                }), false);
            },
            get todos_aggregate() {
                return new gqless_1.FieldNode(exports.schema.todos_aggregate, new gqless_1.Arguments({
                    get distinct_on() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.todos_select_column, true), true);
                    },
                    get limit() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get offset() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get order_by() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.todos_order_by, true), true);
                    },
                    get where() {
                        return new gqless_1.ArgumentsField(exports.schema.todos_bool_exp, true);
                    }
                }), false);
            },
            get todos_by_pk() {
                return new gqless_1.FieldNode(exports.schema.todos, new gqless_1.Arguments({
                    get id() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, false);
                    }
                }, true), true);
            },
            get users() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.users, false), new gqless_1.Arguments({
                    get distinct_on() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.users_select_column, true), true);
                    },
                    get limit() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get offset() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get order_by() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.users_order_by, true), true);
                    },
                    get where() {
                        return new gqless_1.ArgumentsField(exports.schema.users_bool_exp, true);
                    }
                }), false);
            },
            get users_aggregate() {
                return new gqless_1.FieldNode(exports.schema.users_aggregate, new gqless_1.Arguments({
                    get distinct_on() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.users_select_column, true), true);
                    },
                    get limit() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get offset() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get order_by() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.users_order_by, true), true);
                    },
                    get where() {
                        return new gqless_1.ArgumentsField(exports.schema.users_bool_exp, true);
                    }
                }), false);
            },
            get users_by_pk() {
                return new gqless_1.FieldNode(exports.schema.users, new gqless_1.Arguments({
                    get id() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, false);
                    }
                }, true), true);
            }
        }, {
            name: "subscription_root",
            extension: (extensions || {}).subscription_root
        });
    },
    get todos() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Int, undefined, false);
            },
            get is_completed() {
                return new gqless_1.FieldNode(exports.schema.Boolean, undefined, false);
            },
            get text() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, false);
            },
            get user() {
                return new gqless_1.FieldNode(exports.schema.users, undefined, false);
            },
            get user_authID() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, false);
            }
        }, { name: "todos", extension: (extensions || {}).todos });
    },
    get todos_aggregate() {
        return new gqless_1.ObjectNode({
            get aggregate() {
                return new gqless_1.FieldNode(exports.schema.todos_aggregate_fields, undefined, true);
            },
            get nodes() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.todos, false), undefined, false);
            }
        }, {
            name: "todos_aggregate",
            extension: (extensions || {}).todos_aggregate
        });
    },
    get todos_aggregate_fields() {
        return new gqless_1.ObjectNode({
            get avg() {
                return new gqless_1.FieldNode(exports.schema.todos_avg_fields, undefined, true);
            },
            get count() {
                return new gqless_1.FieldNode(exports.schema.Int, new gqless_1.Arguments({
                    get columns() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.todos_select_column, true), true);
                    },
                    get distinct() {
                        return new gqless_1.ArgumentsField(exports.schema.Boolean, true);
                    }
                }), true);
            },
            get max() {
                return new gqless_1.FieldNode(exports.schema.todos_max_fields, undefined, true);
            },
            get min() {
                return new gqless_1.FieldNode(exports.schema.todos_min_fields, undefined, true);
            },
            get stddev() {
                return new gqless_1.FieldNode(exports.schema.todos_stddev_fields, undefined, true);
            },
            get stddev_pop() {
                return new gqless_1.FieldNode(exports.schema.todos_stddev_pop_fields, undefined, true);
            },
            get stddev_samp() {
                return new gqless_1.FieldNode(exports.schema.todos_stddev_samp_fields, undefined, true);
            },
            get sum() {
                return new gqless_1.FieldNode(exports.schema.todos_sum_fields, undefined, true);
            },
            get var_pop() {
                return new gqless_1.FieldNode(exports.schema.todos_var_pop_fields, undefined, true);
            },
            get var_samp() {
                return new gqless_1.FieldNode(exports.schema.todos_var_samp_fields, undefined, true);
            },
            get variance() {
                return new gqless_1.FieldNode(exports.schema.todos_variance_fields, undefined, true);
            }
        }, {
            name: "todos_aggregate_fields",
            extension: (extensions || {}).todos_aggregate_fields
        });
    },
    get todos_aggregate_order_by() {
        return new gqless_1.InputNode({
            get avg() {
                return new gqless_1.InputNodeField(exports.schema.todos_avg_order_by, true);
            },
            get count() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            },
            get max() {
                return new gqless_1.InputNodeField(exports.schema.todos_max_order_by, true);
            },
            get min() {
                return new gqless_1.InputNodeField(exports.schema.todos_min_order_by, true);
            },
            get stddev() {
                return new gqless_1.InputNodeField(exports.schema.todos_stddev_order_by, true);
            },
            get stddev_pop() {
                return new gqless_1.InputNodeField(exports.schema.todos_stddev_pop_order_by, true);
            },
            get stddev_samp() {
                return new gqless_1.InputNodeField(exports.schema.todos_stddev_samp_order_by, true);
            },
            get sum() {
                return new gqless_1.InputNodeField(exports.schema.todos_sum_order_by, true);
            },
            get var_pop() {
                return new gqless_1.InputNodeField(exports.schema.todos_var_pop_order_by, true);
            },
            get var_samp() {
                return new gqless_1.InputNodeField(exports.schema.todos_var_samp_order_by, true);
            },
            get variance() {
                return new gqless_1.InputNodeField(exports.schema.todos_variance_order_by, true);
            }
        }, { name: "todos_aggregate_order_by" });
    },
    get todos_arr_rel_insert_input() {
        return new gqless_1.InputNode({
            get data() {
                return new gqless_1.InputNodeField(new gqless_1.ArrayNode(exports.schema.todos_insert_input, false), false);
            },
            get on_conflict() {
                return new gqless_1.InputNodeField(exports.schema.todos_on_conflict, true);
            }
        }, { name: "todos_arr_rel_insert_input" });
    },
    get todos_avg_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Float, undefined, true);
            }
        }, {
            name: "todos_avg_fields",
            extension: (extensions || {}).todos_avg_fields
        });
    },
    get todos_avg_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "todos_avg_order_by" });
    },
    get todos_bool_exp() {
        return new gqless_1.InputNode({
            get _and() {
                return new gqless_1.InputNodeField(new gqless_1.ArrayNode(exports.schema.todos_bool_exp, true), true);
            },
            get _not() {
                return new gqless_1.InputNodeField(exports.schema.todos_bool_exp, true);
            },
            get _or() {
                return new gqless_1.InputNodeField(new gqless_1.ArrayNode(exports.schema.todos_bool_exp, true), true);
            },
            get id() {
                return new gqless_1.InputNodeField(exports.schema.Int_comparison_exp, true);
            },
            get is_completed() {
                return new gqless_1.InputNodeField(exports.schema.Boolean_comparison_exp, true);
            },
            get text() {
                return new gqless_1.InputNodeField(exports.schema.String_comparison_exp, true);
            },
            get user() {
                return new gqless_1.InputNodeField(exports.schema.users_bool_exp, true);
            },
            get user_authID() {
                return new gqless_1.InputNodeField(exports.schema.String_comparison_exp, true);
            }
        }, { name: "todos_bool_exp" });
    },
    get todos_constraint() {
        return new gqless_1.EnumNode({ name: "todos_constraint" });
    },
    get todos_inc_input() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.Int, true);
            }
        }, { name: "todos_inc_input" });
    },
    get todos_insert_input() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.Int, true);
            },
            get is_completed() {
                return new gqless_1.InputNodeField(exports.schema.Boolean, true);
            },
            get text() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            },
            get user() {
                return new gqless_1.InputNodeField(exports.schema.users_obj_rel_insert_input, true);
            },
            get user_authID() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            }
        }, { name: "todos_insert_input" });
    },
    get todos_max_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Int, undefined, true);
            },
            get text() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            },
            get user_authID() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            }
        }, {
            name: "todos_max_fields",
            extension: (extensions || {}).todos_max_fields
        });
    },
    get todos_max_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            },
            get text() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            },
            get user_authID() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "todos_max_order_by" });
    },
    get todos_min_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Int, undefined, true);
            },
            get text() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            },
            get user_authID() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            }
        }, {
            name: "todos_min_fields",
            extension: (extensions || {}).todos_min_fields
        });
    },
    get todos_min_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            },
            get text() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            },
            get user_authID() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "todos_min_order_by" });
    },
    get todos_mutation_response() {
        return new gqless_1.ObjectNode({
            get affected_rows() {
                return new gqless_1.FieldNode(exports.schema.Int, undefined, false);
            },
            get returning() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.todos, false), undefined, false);
            }
        }, {
            name: "todos_mutation_response",
            extension: (extensions || {}).todos_mutation_response
        });
    },
    get todos_obj_rel_insert_input() {
        return new gqless_1.InputNode({
            get data() {
                return new gqless_1.InputNodeField(exports.schema.todos_insert_input, false);
            },
            get on_conflict() {
                return new gqless_1.InputNodeField(exports.schema.todos_on_conflict, true);
            }
        }, { name: "todos_obj_rel_insert_input" });
    },
    get todos_on_conflict() {
        return new gqless_1.InputNode({
            get constraint() {
                return new gqless_1.InputNodeField(exports.schema.todos_constraint, false);
            },
            get update_columns() {
                return new gqless_1.InputNodeField(new gqless_1.ArrayNode(exports.schema.todos_update_column, false), false);
            }
        }, { name: "todos_on_conflict" });
    },
    get todos_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            },
            get is_completed() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            },
            get text() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            },
            get user() {
                return new gqless_1.InputNodeField(exports.schema.users_order_by, true);
            },
            get user_authID() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "todos_order_by" });
    },
    get todos_select_column() {
        return new gqless_1.EnumNode({ name: "todos_select_column" });
    },
    get todos_set_input() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.Int, true);
            },
            get is_completed() {
                return new gqless_1.InputNodeField(exports.schema.Boolean, true);
            },
            get text() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            },
            get user_authID() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            }
        }, { name: "todos_set_input" });
    },
    get todos_stddev_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Float, undefined, true);
            }
        }, {
            name: "todos_stddev_fields",
            extension: (extensions || {}).todos_stddev_fields
        });
    },
    get todos_stddev_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "todos_stddev_order_by" });
    },
    get todos_stddev_pop_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Float, undefined, true);
            }
        }, {
            name: "todos_stddev_pop_fields",
            extension: (extensions || {}).todos_stddev_pop_fields
        });
    },
    get todos_stddev_pop_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "todos_stddev_pop_order_by" });
    },
    get todos_stddev_samp_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Float, undefined, true);
            }
        }, {
            name: "todos_stddev_samp_fields",
            extension: (extensions || {}).todos_stddev_samp_fields
        });
    },
    get todos_stddev_samp_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "todos_stddev_samp_order_by" });
    },
    get todos_sum_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Int, undefined, true);
            }
        }, {
            name: "todos_sum_fields",
            extension: (extensions || {}).todos_sum_fields
        });
    },
    get todos_sum_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "todos_sum_order_by" });
    },
    get todos_update_column() {
        return new gqless_1.EnumNode({ name: "todos_update_column" });
    },
    get todos_var_pop_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Float, undefined, true);
            }
        }, {
            name: "todos_var_pop_fields",
            extension: (extensions || {}).todos_var_pop_fields
        });
    },
    get todos_var_pop_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "todos_var_pop_order_by" });
    },
    get todos_var_samp_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Float, undefined, true);
            }
        }, {
            name: "todos_var_samp_fields",
            extension: (extensions || {}).todos_var_samp_fields
        });
    },
    get todos_var_samp_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "todos_var_samp_order_by" });
    },
    get todos_variance_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Float, undefined, true);
            }
        }, {
            name: "todos_variance_fields",
            extension: (extensions || {}).todos_variance_fields
        });
    },
    get todos_variance_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "todos_variance_order_by" });
    },
    get users() {
        return new gqless_1.ObjectNode({
            get authID() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, false);
            },
            get id() {
                return new gqless_1.FieldNode(exports.schema.Int, undefined, false);
            },
            get name() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, false);
            },
            get todos() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.todos, false), new gqless_1.Arguments({
                    get distinct_on() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.todos_select_column, true), true);
                    },
                    get limit() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get offset() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get order_by() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.todos_order_by, true), true);
                    },
                    get where() {
                        return new gqless_1.ArgumentsField(exports.schema.todos_bool_exp, true);
                    }
                }), false);
            },
            get todos_aggregate() {
                return new gqless_1.FieldNode(exports.schema.todos_aggregate, new gqless_1.Arguments({
                    get distinct_on() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.todos_select_column, true), true);
                    },
                    get limit() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get offset() {
                        return new gqless_1.ArgumentsField(exports.schema.Int, true);
                    },
                    get order_by() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.todos_order_by, true), true);
                    },
                    get where() {
                        return new gqless_1.ArgumentsField(exports.schema.todos_bool_exp, true);
                    }
                }), false);
            }
        }, { name: "users", extension: (extensions || {}).users });
    },
    get users_aggregate() {
        return new gqless_1.ObjectNode({
            get aggregate() {
                return new gqless_1.FieldNode(exports.schema.users_aggregate_fields, undefined, true);
            },
            get nodes() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.users, false), undefined, false);
            }
        }, {
            name: "users_aggregate",
            extension: (extensions || {}).users_aggregate
        });
    },
    get users_aggregate_fields() {
        return new gqless_1.ObjectNode({
            get avg() {
                return new gqless_1.FieldNode(exports.schema.users_avg_fields, undefined, true);
            },
            get count() {
                return new gqless_1.FieldNode(exports.schema.Int, new gqless_1.Arguments({
                    get columns() {
                        return new gqless_1.ArgumentsField(new gqless_1.ArrayNode(exports.schema.users_select_column, true), true);
                    },
                    get distinct() {
                        return new gqless_1.ArgumentsField(exports.schema.Boolean, true);
                    }
                }), true);
            },
            get max() {
                return new gqless_1.FieldNode(exports.schema.users_max_fields, undefined, true);
            },
            get min() {
                return new gqless_1.FieldNode(exports.schema.users_min_fields, undefined, true);
            },
            get stddev() {
                return new gqless_1.FieldNode(exports.schema.users_stddev_fields, undefined, true);
            },
            get stddev_pop() {
                return new gqless_1.FieldNode(exports.schema.users_stddev_pop_fields, undefined, true);
            },
            get stddev_samp() {
                return new gqless_1.FieldNode(exports.schema.users_stddev_samp_fields, undefined, true);
            },
            get sum() {
                return new gqless_1.FieldNode(exports.schema.users_sum_fields, undefined, true);
            },
            get var_pop() {
                return new gqless_1.FieldNode(exports.schema.users_var_pop_fields, undefined, true);
            },
            get var_samp() {
                return new gqless_1.FieldNode(exports.schema.users_var_samp_fields, undefined, true);
            },
            get variance() {
                return new gqless_1.FieldNode(exports.schema.users_variance_fields, undefined, true);
            }
        }, {
            name: "users_aggregate_fields",
            extension: (extensions || {}).users_aggregate_fields
        });
    },
    get users_aggregate_order_by() {
        return new gqless_1.InputNode({
            get avg() {
                return new gqless_1.InputNodeField(exports.schema.users_avg_order_by, true);
            },
            get count() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            },
            get max() {
                return new gqless_1.InputNodeField(exports.schema.users_max_order_by, true);
            },
            get min() {
                return new gqless_1.InputNodeField(exports.schema.users_min_order_by, true);
            },
            get stddev() {
                return new gqless_1.InputNodeField(exports.schema.users_stddev_order_by, true);
            },
            get stddev_pop() {
                return new gqless_1.InputNodeField(exports.schema.users_stddev_pop_order_by, true);
            },
            get stddev_samp() {
                return new gqless_1.InputNodeField(exports.schema.users_stddev_samp_order_by, true);
            },
            get sum() {
                return new gqless_1.InputNodeField(exports.schema.users_sum_order_by, true);
            },
            get var_pop() {
                return new gqless_1.InputNodeField(exports.schema.users_var_pop_order_by, true);
            },
            get var_samp() {
                return new gqless_1.InputNodeField(exports.schema.users_var_samp_order_by, true);
            },
            get variance() {
                return new gqless_1.InputNodeField(exports.schema.users_variance_order_by, true);
            }
        }, { name: "users_aggregate_order_by" });
    },
    get users_arr_rel_insert_input() {
        return new gqless_1.InputNode({
            get data() {
                return new gqless_1.InputNodeField(new gqless_1.ArrayNode(exports.schema.users_insert_input, false), false);
            },
            get on_conflict() {
                return new gqless_1.InputNodeField(exports.schema.users_on_conflict, true);
            }
        }, { name: "users_arr_rel_insert_input" });
    },
    get users_avg_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Float, undefined, true);
            }
        }, {
            name: "users_avg_fields",
            extension: (extensions || {}).users_avg_fields
        });
    },
    get users_avg_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "users_avg_order_by" });
    },
    get users_bool_exp() {
        return new gqless_1.InputNode({
            get _and() {
                return new gqless_1.InputNodeField(new gqless_1.ArrayNode(exports.schema.users_bool_exp, true), true);
            },
            get _not() {
                return new gqless_1.InputNodeField(exports.schema.users_bool_exp, true);
            },
            get _or() {
                return new gqless_1.InputNodeField(new gqless_1.ArrayNode(exports.schema.users_bool_exp, true), true);
            },
            get authID() {
                return new gqless_1.InputNodeField(exports.schema.String_comparison_exp, true);
            },
            get id() {
                return new gqless_1.InputNodeField(exports.schema.Int_comparison_exp, true);
            },
            get name() {
                return new gqless_1.InputNodeField(exports.schema.String_comparison_exp, true);
            },
            get todos() {
                return new gqless_1.InputNodeField(exports.schema.todos_bool_exp, true);
            }
        }, { name: "users_bool_exp" });
    },
    get users_constraint() {
        return new gqless_1.EnumNode({ name: "users_constraint" });
    },
    get users_inc_input() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.Int, true);
            }
        }, { name: "users_inc_input" });
    },
    get users_insert_input() {
        return new gqless_1.InputNode({
            get authID() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            },
            get id() {
                return new gqless_1.InputNodeField(exports.schema.Int, true);
            },
            get name() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            },
            get todos() {
                return new gqless_1.InputNodeField(exports.schema.todos_arr_rel_insert_input, true);
            }
        }, { name: "users_insert_input" });
    },
    get users_max_fields() {
        return new gqless_1.ObjectNode({
            get authID() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            },
            get id() {
                return new gqless_1.FieldNode(exports.schema.Int, undefined, true);
            },
            get name() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            }
        }, {
            name: "users_max_fields",
            extension: (extensions || {}).users_max_fields
        });
    },
    get users_max_order_by() {
        return new gqless_1.InputNode({
            get authID() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            },
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            },
            get name() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "users_max_order_by" });
    },
    get users_min_fields() {
        return new gqless_1.ObjectNode({
            get authID() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            },
            get id() {
                return new gqless_1.FieldNode(exports.schema.Int, undefined, true);
            },
            get name() {
                return new gqless_1.FieldNode(exports.schema.String, undefined, true);
            }
        }, {
            name: "users_min_fields",
            extension: (extensions || {}).users_min_fields
        });
    },
    get users_min_order_by() {
        return new gqless_1.InputNode({
            get authID() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            },
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            },
            get name() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "users_min_order_by" });
    },
    get users_mutation_response() {
        return new gqless_1.ObjectNode({
            get affected_rows() {
                return new gqless_1.FieldNode(exports.schema.Int, undefined, false);
            },
            get returning() {
                return new gqless_1.FieldNode(new gqless_1.ArrayNode(exports.schema.users, false), undefined, false);
            }
        }, {
            name: "users_mutation_response",
            extension: (extensions || {}).users_mutation_response
        });
    },
    get users_obj_rel_insert_input() {
        return new gqless_1.InputNode({
            get data() {
                return new gqless_1.InputNodeField(exports.schema.users_insert_input, false);
            },
            get on_conflict() {
                return new gqless_1.InputNodeField(exports.schema.users_on_conflict, true);
            }
        }, { name: "users_obj_rel_insert_input" });
    },
    get users_on_conflict() {
        return new gqless_1.InputNode({
            get constraint() {
                return new gqless_1.InputNodeField(exports.schema.users_constraint, false);
            },
            get update_columns() {
                return new gqless_1.InputNodeField(new gqless_1.ArrayNode(exports.schema.users_update_column, false), false);
            }
        }, { name: "users_on_conflict" });
    },
    get users_order_by() {
        return new gqless_1.InputNode({
            get authID() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            },
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            },
            get name() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            },
            get todos_aggregate() {
                return new gqless_1.InputNodeField(exports.schema.todos_aggregate_order_by, true);
            }
        }, { name: "users_order_by" });
    },
    get users_select_column() {
        return new gqless_1.EnumNode({ name: "users_select_column" });
    },
    get users_set_input() {
        return new gqless_1.InputNode({
            get authID() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            },
            get id() {
                return new gqless_1.InputNodeField(exports.schema.Int, true);
            },
            get name() {
                return new gqless_1.InputNodeField(exports.schema.String, true);
            }
        }, { name: "users_set_input" });
    },
    get users_stddev_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Float, undefined, true);
            }
        }, {
            name: "users_stddev_fields",
            extension: (extensions || {}).users_stddev_fields
        });
    },
    get users_stddev_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "users_stddev_order_by" });
    },
    get users_stddev_pop_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Float, undefined, true);
            }
        }, {
            name: "users_stddev_pop_fields",
            extension: (extensions || {}).users_stddev_pop_fields
        });
    },
    get users_stddev_pop_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "users_stddev_pop_order_by" });
    },
    get users_stddev_samp_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Float, undefined, true);
            }
        }, {
            name: "users_stddev_samp_fields",
            extension: (extensions || {}).users_stddev_samp_fields
        });
    },
    get users_stddev_samp_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "users_stddev_samp_order_by" });
    },
    get users_sum_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Int, undefined, true);
            }
        }, {
            name: "users_sum_fields",
            extension: (extensions || {}).users_sum_fields
        });
    },
    get users_sum_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "users_sum_order_by" });
    },
    get users_update_column() {
        return new gqless_1.EnumNode({ name: "users_update_column" });
    },
    get users_var_pop_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Float, undefined, true);
            }
        }, {
            name: "users_var_pop_fields",
            extension: (extensions || {}).users_var_pop_fields
        });
    },
    get users_var_pop_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "users_var_pop_order_by" });
    },
    get users_var_samp_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Float, undefined, true);
            }
        }, {
            name: "users_var_samp_fields",
            extension: (extensions || {}).users_var_samp_fields
        });
    },
    get users_var_samp_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "users_var_samp_order_by" });
    },
    get users_variance_fields() {
        return new gqless_1.ObjectNode({
            get id() {
                return new gqless_1.FieldNode(exports.schema.Float, undefined, true);
            }
        }, {
            name: "users_variance_fields",
            extension: (extensions || {}).users_variance_fields
        });
    },
    get users_variance_order_by() {
        return new gqless_1.InputNode({
            get id() {
                return new gqless_1.InputNodeField(exports.schema.order_by, true);
            }
        }, { name: "users_variance_order_by" });
    }
};
utils_1.lazyGetters(exports.schema);
