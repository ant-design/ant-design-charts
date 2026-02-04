var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/zod.ts
var zod_exports = {};
__export(zod_exports, {
  zodToTs: () => zodToTs
});
module.exports = __toCommonJS(zod_exports);
var zodToTs = (opts) => {
  const { zod, identifier = "Identifier", options = {} } = opts;
  const { typeName } = zod == null ? void 0 : zod._def;
  const props = { identifier, options };
  switch (typeName) {
    case "ZodString":
      return "string";
    case "ZodNumber":
      return "number";
    case "ZodBigInt":
      return "bigint";
    case "ZodBoolean":
      return "boolean";
    case "ZodDate":
      return "Date";
    case "ZodUndefined":
      return "undefined";
    case "ZodNull":
      return "null";
    case "ZodVoid":
      return "(void | undefined)";
    case "ZodAny":
      return "any";
    case "ZodUnknown":
      return "unknown";
    case "ZodNever":
      return "never";
    case "ZodLazy": {
      return "any";
    }
    case "ZodLiteral": {
      let literal;
      const literalValue = zod._def.value;
      switch (typeof literalValue) {
        case "number":
          literal = "number";
          break;
        case "boolean":
          if (literalValue === true) {
            literal = "true";
          } else {
            literal = "false";
          }
          break;
        default:
          literal = `"${literalValue}"`;
          break;
      }
      return literal;
    }
    case "ZodObject": {
      const properties = Object.entries(zod._def.shape());
      const members = properties.map(([key, value]) => {
        const nextZodNode = value;
        const type = zodToTs({
          zod: nextZodNode,
          ...props
        });
        const { typeName: nextZodNodeTypeName } = nextZodNode._def;
        const isOptional = nextZodNodeTypeName === "ZodOptional" || nextZodNode.isOptional();
        let desc;
        if (nextZodNode.description) {
          desc = nextZodNode.description;
        }
        if (key.includes("-")) {
          key = `"${key}"`;
        }
        if (isOptional) {
          key = `${key}?`;
        }
        return [key, type, desc];
      });
      return `{
${members.map(([key, type, desc]) => {
        return [
          (desc == null ? void 0 : desc.length) && `    /** ${desc} */`,
          /*           */
          `    ${key}: ${type};`
        ].filter(Boolean).join("\n");
      }).join("\n")}
}`;
    }
    case "ZodArray": {
      const type = zodToTs({ zod: zod._def.type, ...props });
      const node = `Array<${type}>`;
      return node;
    }
    case "ZodEnum": {
      const types = zod._def.values.map((value) => {
        return `"${value}"`;
      });
      const union = types.join(" | ");
      return union;
    }
    case "ZodUnion": {
      const options2 = zod._def.options;
      const types = options2.map((option) => zodToTs({ zod: option }));
      return types.join(" | ");
    }
    case "ZodDiscriminatedUnion": {
      const options2 = [...zod._def.options.values()];
      const types = options2.map(
        (option) => zodToTs({ zod: option, ...props })
      );
      return types.join(" | ");
    }
    case "ZodEffects": {
      const node = zodToTs({
        zod: zod._def.schema,
        ...props
      });
      return node;
    }
    case "ZodNativeEnum": {
      return "any";
    }
    case "ZodOptional": {
      const innerType = zodToTs({
        zod: zod._def.innerType,
        ...props
      });
      return `(${innerType} | undefined)`;
    }
    case "ZodNullable": {
      const innerType = zodToTs({
        zod: zod._def.innerType,
        ...props
      });
      return `(${innerType} | null)`;
    }
    case "ZodTuple": {
      const types = zod._def.items.map(
        (option) => zodToTs({ zod: option, ...props })
      );
      return `[${types.join(", ")}]`;
    }
    case "ZodRecord": {
      const valueType = zodToTs({
        zod: zod._def.valueType,
        ...props
      });
      return `{ [x: string]: ${valueType} }`;
    }
    case "ZodMap": {
      const valueType = zodToTs({
        zod: zod._def.valueType,
        ...props
      });
      const keyType = zodToTs({
        zod: zod._def.keyType,
        ...props
      });
      return `Map<${keyType}, ${valueType}>`;
    }
    case "ZodSet": {
      const type = zodToTs({
        zod: zod._def.valueType,
        ...props
      });
      return `Set<${type}>`;
    }
    case "ZodIntersection": {
      const left = zodToTs({
        zod: zod._def.left,
        ...props
      });
      const right = zodToTs({
        zod: zod._def.right,
        ...props
      });
      return `${left} & ${right}`;
    }
    case "ZodPromise": {
      const type = zodToTs({
        zod: zod._def.type,
        ...props
      });
      return `Promise<${type}>`;
    }
    case "ZodFunction": {
      const argTypes = zod._def.args._def.items.map(
        (arg, index) => {
          const argType = zodToTs({
            zod: arg,
            ...props
          });
          return `args_${index}: ${argType}`;
        }
      );
      argTypes.push("...args: any[]");
      const returnType = zodToTs({
        zod: zod._def.returns,
        ...props
      });
      return `((${argTypes.join(", ")}) => ${returnType})`;
    }
    case "ZodDefault": {
      const type = zodToTs({
        zod: zod._def.innerType,
        ...props
      });
      return type;
    }
  }
  return "any";
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  zodToTs
});
