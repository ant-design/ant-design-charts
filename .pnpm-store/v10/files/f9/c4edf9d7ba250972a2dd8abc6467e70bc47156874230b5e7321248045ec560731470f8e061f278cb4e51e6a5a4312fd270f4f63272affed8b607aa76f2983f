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

// src/features/locales.ts
var locales_exports = {};
__export(locales_exports, {
  default: () => locales_default
});
module.exports = __toCommonJS(locales_exports);
var import_constants = require("../constants");
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
var locales_default = (api) => {
  var _a;
  api.describe({
    config: {
      default: [
        {
          id: "zh-CN",
          name: "中文",
          // only apply default base for non-suffix mode
          ...((_a = api.userConfig.locales) == null ? void 0 : _a[0]) && "suffix" in api.userConfig.locales[0] ? {} : { base: "/" }
        }
      ],
      schema: (Joi) => {
        const basicOpts = { id: Joi.string(), name: Joi.string() };
        return Joi.alternatives(
          // base mode
          Joi.array().items(
            Joi.object({
              ...basicOpts,
              base: Joi.string().optional()
            })
          ),
          // suffix mode
          Joi.array().items(
            Joi.object({
              ...basicOpts,
              suffix: Joi.string().allow("")
            })
          )
        );
      }
    }
  });
  api.onCheck(() => {
    if (api.config.locales) {
      api.config.locales.slice(1).forEach((locale) => {
        if ("base" in locale && locale.base === "/") {
          assert(
            false,
            `Only the first locale item is allowed to set base: '/', you can move ${locale.id} to the front as default locale. See more: See https://d.umijs.org/config#locales`
          );
        }
      });
    }
  });
  api.register({
    key: "modifyConfig",
    stage: Infinity,
    fn: (memo) => {
      var _a2;
      (_a2 = memo.locales) == null ? void 0 : _a2.forEach((locale, i) => {
        if (!("suffix" in locale)) {
          locale.base ?? (locale.base = i ? `/${locale.id}` : "/");
        }
      });
      return memo;
    }
  });
  api.onGenerateFiles(() => {
    api.writeTmpFile({
      noPluginDir: true,
      path: "dumi/locales/config.ts",
      content: `export const locales = ${JSON.stringify(
        api.config.locales,
        null,
        2
      )};
export const messages = ${JSON.stringify(
        api.service.themeData.locales,
        null,
        2
      )};`
    });
    api.writeTmpFile({
      noPluginDir: true,
      path: "dumi/locales/runtime.tsx",
      content: `
import { history } from 'dumi';
import React, { useState, useLayoutEffect, useCallback, type ReactNode } from 'react';
import { RawIntlProvider, createIntl, createIntlCache } from '${(0, import_plugin_utils.winPath)(
        import_path.default.dirname(require.resolve("react-intl/package"))
      )}';
import { useIsomorphicLayoutEffect } from '${(0, import_plugin_utils.winPath)(
        require.resolve("../client/theme-api/utils")
      )}'
import { locales, messages } from './config';

const cache = createIntlCache();

const LocalesContainer: FC<{ children: ReactNode }> = (props) => {
  const getIntl = useCallback(() => {
    const base = "${api.config.base.replace(/\/$/, "")}"
    const matched = locales.slice().reverse().find((locale) => (
      'suffix' in locale
        // suffix mode
        ? history.location.pathname.replace(/([^/])\\/$/, '$1').endsWith(locale.suffix)
        // base mode
        : history.location.pathname.replace(/([^/])\\/$/, '$1')
          .startsWith(base + locale.base)
    ));
    let locale = matched ? matched.id : locales[0].id;
    // using query on demos
    if(history.location.pathname.startsWith(base + '/${import_constants.SP_ROUTE_PREFIX}demos')){
        const params = new URLSearchParams(history.location.search);
        // match the locale of the query
        if (params.get('locale')){
          locale = params.get('locale');
        }
    }
    const localeMessages = messages[locale] || {};

    // append internal message, for use intl as string template util
    localeMessages['$internal.edit.link'] = ${JSON.stringify(
        api.config.themeConfig.editLink
      )};

    localeMessages['$internal.api.sourceLink'] = ${JSON.stringify(
        api.config.themeConfig.sourceLink
      )};

    return createIntl({ locale, messages: localeMessages }, cache);
  }, []);
  const [intl, setIntl] = useState(() => getIntl());

  useIsomorphicLayoutEffect(() => {
    return history.listen(() => {
      setIntl(getIntl());
    });
  }, []);

  return <RawIntlProvider value={intl} key={intl.locale}>{props.children}</RawIntlProvider>;
}

export function i18nProvider(container: Element) {
  return React.createElement(LocalesContainer, null, container);
}
`
    });
  });
  api.addRuntimePlugin(() => "@@/dumi/locales/runtime.tsx");
};
