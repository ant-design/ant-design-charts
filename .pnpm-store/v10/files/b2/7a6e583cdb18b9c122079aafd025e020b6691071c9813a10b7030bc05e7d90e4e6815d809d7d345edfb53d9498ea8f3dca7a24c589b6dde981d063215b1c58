var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/getExportProps/propertyResolver.ts
var propertyResolver_exports = {};
__export(propertyResolver_exports, {
  LITERAL_NODE_RESOLVERS: () => LITERAL_NODE_RESOLVERS,
  NODE_RESOLVERS: () => NODE_RESOLVERS,
  findArrayElements: () => findArrayElements,
  findArrayLiteralElements: () => findArrayLiteralElements,
  findClassStaticProperty: () => findClassStaticProperty,
  findObjectLiteralProperties: () => findObjectLiteralProperties,
  findObjectMembers: () => findObjectMembers
});
module.exports = __toCommonJS(propertyResolver_exports);
var t = __toESM(require("@umijs/bundler-utils/compiled/babel/types"));
var StringResolver = {
  is(src) {
    return t.isStringLiteral(src);
  },
  get(src) {
    return src.value;
  }
};
var NumberResolver = {
  is(src) {
    return t.isNumericLiteral(src);
  },
  get(src) {
    return src.value;
  }
};
var BooleanResolver = {
  is(src) {
    return t.isBooleanLiteral(src);
  },
  get(src) {
    return src.value;
  }
};
var NullResolver = {
  is(src) {
    return t.isNullLiteral(src);
  },
  get() {
    return null;
  }
};
var UndefinedResolver = {
  is(src) {
    return t.isIdentifier(src) && src.name === "undefined";
  },
  get() {
    return void 0;
  }
};
var ObjectLiteralResolver = {
  is(src) {
    return t.isObjectExpression(src);
  },
  get(src) {
    return findObjectLiteralProperties(src);
  }
};
var ObjectResolver = {
  is(src) {
    return t.isObjectExpression(src);
  },
  get(src) {
    return findObjectMembers(src);
  }
};
var ClassResolver = {
  is(src) {
    return t.isClass(src);
  },
  get(src) {
    return findClassStaticProperty(src);
  }
};
var ArrayLiteralResolver = {
  is(src) {
    return t.isArrayExpression(src);
  },
  get(src) {
    return findArrayLiteralElements(src);
  }
};
var ArrayResolver = {
  is(src) {
    return t.isArrayExpression(src);
  },
  get(src) {
    return findArrayElements(src);
  }
};
var FunctionResolver = {
  is(src) {
    return t.isFunctionExpression(src);
  },
  get() {
    return function() {
    };
  }
};
var ArrowFunctionResolver = {
  is(src) {
    return t.isArrowFunctionExpression(src);
  },
  get() {
    return () => {
    };
  }
};
var LITERAL_NODE_RESOLVERS = [
  StringResolver,
  NumberResolver,
  BooleanResolver,
  NullResolver,
  UndefinedResolver,
  ObjectLiteralResolver,
  ArrayLiteralResolver
];
var NODE_RESOLVERS = [
  StringResolver,
  NumberResolver,
  BooleanResolver,
  NullResolver,
  UndefinedResolver,
  ObjectResolver,
  ArrayResolver,
  ClassResolver,
  FunctionResolver,
  ArrowFunctionResolver
];
function findObjectLiteralProperties(node) {
  const target = {};
  node.properties.forEach((p) => {
    if (t.isObjectProperty(p) && t.isIdentifier(p.key)) {
      const resolver = LITERAL_NODE_RESOLVERS.find(
        (resolver2) => resolver2.is(p.value)
      );
      if (resolver) {
        target[p.key.name] = resolver.get(p.value);
      }
    }
  });
  return target;
}
function findObjectMembers(node) {
  const target = {};
  node.properties.forEach((p) => {
    if (t.isObjectMember(p) && t.isIdentifier(p.key)) {
      if (t.isObjectMethod(p)) {
        target[p.key.name] = () => {
        };
      } else {
        const resolver = NODE_RESOLVERS.find(
          (resolver2) => resolver2.is(p.value)
        );
        if (resolver) {
          target[p.key.name] = resolver.get(p.value);
        }
      }
    }
  });
  return target;
}
function findClassStaticProperty(node) {
  function isStaticNode(p) {
    return "static" in p && p.static === true;
  }
  let body = node.body;
  if (!t.isClassBody(body))
    return;
  const target = {};
  body.body.forEach((p) => {
    if (isStaticNode(p) && t.isIdentifier(p.key)) {
      if (t.isMethod(p) || t.isTSDeclareMethod(p)) {
        target[p.key.name] = () => {
        };
      } else {
        const resolver = NODE_RESOLVERS.find(
          (resolver2) => resolver2.is(p.value)
        );
        if (resolver) {
          target[p.key.name] = resolver.get(p.value);
        }
      }
    }
  });
  return target;
}
function findArrayLiteralElements(node) {
  const target = [];
  node.elements.forEach((p) => {
    const resolver = LITERAL_NODE_RESOLVERS.find((resolver2) => resolver2.is(p));
    if (resolver) {
      target.push(resolver.get(p));
    }
  });
  return target;
}
function findArrayElements(node) {
  const target = [];
  node.elements.forEach((p) => {
    const resolver = NODE_RESOLVERS.find((resolver2) => resolver2.is(p));
    if (resolver) {
      target.push(resolver.get(p));
    }
  });
  return target;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LITERAL_NODE_RESOLVERS,
  NODE_RESOLVERS,
  findArrayElements,
  findArrayLiteralElements,
  findClassStaticProperty,
  findObjectLiteralProperties,
  findObjectMembers
});
