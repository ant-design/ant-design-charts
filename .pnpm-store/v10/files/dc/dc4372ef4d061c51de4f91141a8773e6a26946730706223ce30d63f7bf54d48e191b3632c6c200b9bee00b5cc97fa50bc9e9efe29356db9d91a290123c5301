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

// src/commands/verify-commit.ts
var verify_commit_exports = {};
__export(verify_commit_exports, {
  default: () => verify_commit_default
});
module.exports = __toCommonJS(verify_commit_exports);
var import_utils = require("@umijs/utils");
var import_assert = __toESM(require("assert"));
var import_fs = require("fs");
var verify_commit_default = (api) => {
  api.describe({
    key: "verifyCommit",
    config: {
      schema({ zod }) {
        return zod.object({
          scope: zod.array(zod.string()),
          allowEmoji: zod.boolean()
        }).deepPartial();
      }
    }
  });
  api.registerCommand({
    name: "verify-commit",
    description: "verify the commit message, which is usually used with husky.",
    configResolveMode: "loose",
    fn({ args }) {
      var _a, _b;
      api.logger.info("verify-commit");
      const msgPath = args._[0] || process.env.GIT_PARAMS;
      (0, import_assert.default)(msgPath, "msgPath is required");
      let msg = (0, import_fs.readFileSync)(msgPath, "utf-8").trim();
      msg = removeComment(msg);
      const emoji = `((?:[#*0-9]️?⃣|[©®‼⁉™ℹ↔-↙↩↪⌚⌛⌨⏏⏭-⏯⏱⏲⏸-⏺Ⓜ▪▫▶◀◻◼◾☀-☄☎☑☔☕☘☠☢☣☦☪☮☯☸-☺♀♂♈-♓♟♠♣♥♦♨♻♾♿⚒⚔-⚗⚙⚛⚜⚠⚧⚪⚰⚱⚽⚾⛄⛈⛏⛑⛓⛩⛰-⛵⛷⛸⛺✂✈✉✏✒✔✖✝✡✳✴❄❇❗❣➡⤴⤵⬅-⬇⬛⬜⭕〰〽㊗㊙]️?|[☝✌✍](?:️|\uD83C[\uDFFB-\uDFFF])?|[✊✋](?:\uD83C[\uDFFB-\uDFFF])?|[⏩-⏬⏰⏳◽⚓⚡⚫⛅⛎⛔⛪⛽✅✨❌❎❓-❕➕-➗➰➿⭐]|⛹(?:️|\uD83C[\uDFFB-\uDFFF])?(?:‍[♀♂]️?)?|❤️?(?:‍(?:🔥|🩹))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]️?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:‍[♀♂]️?)?|[\uDFCB\uDFCC](?:️|\uD83C[\uDFFB-\uDFFF])?(?:‍[♀♂]️?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4🇲|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6🇦|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD🇰|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3️?(?:‍(?:⚧️?|🌈))?|\uDFF4(?:‍☠️?|󠁧󠁢\uDB40(?:\uDC65󠁮󠁧|\uDC73󠁣󠁴|\uDC77󠁬󠁳)󠁿)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]️?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:‍[♀♂]️?)?|[\uDD74\uDD90](?:️|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDD-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:‍⬛)?|\uDC15(?:‍🦺)?|\uDC3B(?:‍❄️?)?|\uDC41️?(?:‍🗨️?)?|\uDC68(?:‍(?:[⚕⚖✈]️?|❤️?‍\uD83D(?:\uDC8B‍\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]‍\uD83D(?:\uDC66(?:‍👦)?|\uDC67(?:‍\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:‍👦)?|\uDC67(?:‍\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:‍(?:[⚕⚖✈]️?|❤️?‍\uD83D(?:\uDC8B‍\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D‍👨\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:‍(?:[⚕⚖✈]️?|❤️?‍\uD83D(?:\uDC8B‍\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D‍👨\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:‍(?:[⚕⚖✈]️?|❤️?‍\uD83D(?:\uDC8B‍\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D‍👨\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:‍(?:[⚕⚖✈]️?|❤️?‍\uD83D(?:\uDC8B‍\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D‍👨\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:‍(?:[⚕⚖✈]️?|❤️?‍\uD83D(?:\uDC8B‍\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D‍👨\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:‍(?:[⚕⚖✈]️?|❤️?‍\uD83D(?:\uDC8B‍\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:‍👦)?|\uDC67(?:‍\uD83D[\uDC66\uDC67])?|\uDC69‍\uD83D(?:\uDC66(?:‍👦)?|\uDC67(?:‍\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:‍(?:[⚕⚖✈]️?|❤️?‍\uD83D(?:[\uDC68\uDC69]|\uDC8B‍\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D‍\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:‍(?:[⚕⚖✈]️?|❤️?‍\uD83D(?:[\uDC68\uDC69]|\uDC8B‍\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D‍\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:‍(?:[⚕⚖✈]️?|❤️?‍\uD83D(?:[\uDC68\uDC69]|\uDC8B‍\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D‍\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:‍(?:[⚕⚖✈]️?|❤️?‍\uD83D(?:[\uDC68\uDC69]|\uDC8B‍\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D‍\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:‍(?:[⚕⚖✈]️?|❤️?‍\uD83D(?:[\uDC68\uDC69]|\uDC8B‍\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D‍\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:‍[♀♂]️?)?|\uDD75(?:️|\uD83C[\uDFFB-\uDFFF])?(?:‍[♀♂]️?)?|\uDE2E(?:‍💨)?|\uDE35(?:‍💫)?|\uDE36(?:‍🌫️?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF6](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:‍[♀♂]️?)?|[\uDDDE\uDDDF](?:‍[♀♂]️?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC2\uDED0-\uDED9\uDEE0-\uDEE7]|\uDD3C(?:‍[♀♂]️?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:‍(?:[⚕⚖✈]️?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D‍🧑))|\uD83C(?:\uDFFB(?:‍(?:[⚕⚖✈]️?|❤️?‍(?:💋‍)?🧑\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D‍🧑\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:‍(?:[⚕⚖✈]️?|❤️?‍(?:💋‍)?🧑\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D‍🧑\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:‍(?:[⚕⚖✈]️?|❤️?‍(?:💋‍)?🧑\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D‍🧑\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:‍(?:[⚕⚖✈]️?|❤️?‍(?:💋‍)?🧑\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D‍🧑\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:‍(?:[⚕⚖✈]️?|❤️?‍(?:💋‍)?🧑\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D‍🧑\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:‍🫲\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:‍🫲\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:‍🫲\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:‍🫲\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:‍🫲\uD83C[\uDFFB-\uDFFE])?))?)) )?`;
      const scope = ((_a = api.config.verifyCommit) == null ? void 0 : _a.scope) || [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "workflow",
        "build",
        "ci",
        "chore",
        "types",
        "wip",
        "release",
        "dep",
        "deps",
        "example",
        "examples",
        "merge",
        "revert"
      ];
      const commitRE = new RegExp(
        `^((${((_b = api.config.verifyCommit) == null ? void 0 : _b.allowEmoji) ? emoji : ""}(${scope.join(
          "|"
        )})(\\(.+\\))?:)|(Merge|Revert|Version)) .{1,50}`,
        "i"
      );
      if (!commitRE.test(msg)) {
        console.log();
        console.log(`Error: ${import_utils.chalk.red(`Invalid commit message format.`)}`);
        console.log();
        console.log(
          `Proper commit message format is required for automated changelog generation.`
        );
        console.log(`Examples:`);
        console.log();
        console.log(import_utils.chalk.green(`  chore(release): update changelog`));
        console.log(
          import_utils.chalk.green(`  fix(core): handle events on blur (close #28)`)
        );
        console.log();
        process.exit(1);
      }
    }
  });
};
function removeComment(msg) {
  return msg.replace(/^#.*[\n\r]*/gm, "");
}
