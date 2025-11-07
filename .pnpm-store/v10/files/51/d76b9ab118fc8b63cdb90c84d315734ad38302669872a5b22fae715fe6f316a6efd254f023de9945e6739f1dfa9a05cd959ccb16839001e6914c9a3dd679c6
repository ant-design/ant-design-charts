"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNICODE_EXTENSION_SEQUENCE_REGEX = void 0;
exports.invariant = invariant;
exports.findMatchingDistance = findMatchingDistance;
exports.findBestMatch = findBestMatch;
var tslib_1 = require("tslib");
var languageMatching_1 = require("./languageMatching");
var regions_generated_1 = require("./regions.generated");
exports.UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
function invariant(condition, message, Err) {
    if (Err === void 0) { Err = Error; }
    if (!condition) {
        throw new Err(message);
    }
}
// This is effectively 2 languages in 2 different regions in the same cluster
var DEFAULT_MATCHING_THRESHOLD = 838;
var PROCESSED_DATA;
function processData() {
    var _a, _b;
    if (!PROCESSED_DATA) {
        var paradigmLocales = (_b = (_a = languageMatching_1.data.supplemental.languageMatching['written-new'][0]) === null || _a === void 0 ? void 0 : _a.paradigmLocales) === null || _b === void 0 ? void 0 : _b._locales.split(' ');
        var matchVariables = languageMatching_1.data.supplemental.languageMatching['written-new'].slice(1, 5);
        var data = languageMatching_1.data.supplemental.languageMatching['written-new'].slice(5);
        var matches = data.map(function (d) {
            var key = Object.keys(d)[0];
            var value = d[key];
            return {
                supported: key,
                desired: value._desired,
                distance: +value._distance,
                oneway: value.oneway === 'true' ? true : false,
            };
        }, {});
        PROCESSED_DATA = {
            matches: matches,
            matchVariables: matchVariables.reduce(function (all, d) {
                var key = Object.keys(d)[0];
                var value = d[key];
                all[key.slice(1)] = value._value.split('+');
                return all;
            }, {}),
            paradigmLocales: tslib_1.__spreadArray(tslib_1.__spreadArray([], paradigmLocales, true), paradigmLocales.map(function (l) {
                return new Intl.Locale(l.replace(/_/g, '-')).maximize().toString();
            }), true),
        };
    }
    return PROCESSED_DATA;
}
function isMatched(locale, languageMatchInfoLocale, matchVariables) {
    var _a = languageMatchInfoLocale.split('-'), language = _a[0], script = _a[1], region = _a[2];
    var matches = true;
    if (region && region[0] === '$') {
        var shouldInclude = region[1] !== '!';
        var matchRegions = shouldInclude
            ? matchVariables[region.slice(1)]
            : matchVariables[region.slice(2)];
        var expandedMatchedRegions = matchRegions
            .map(function (r) { return regions_generated_1.regions[r] || [r]; })
            .reduce(function (all, list) { return tslib_1.__spreadArray(tslib_1.__spreadArray([], all, true), list, true); }, []);
        matches && (matches = !(expandedMatchedRegions.indexOf(locale.region || '') > -1 !=
            shouldInclude));
    }
    else {
        matches && (matches = locale.region
            ? region === '*' || region === locale.region
            : true);
    }
    matches && (matches = locale.script ? script === '*' || script === locale.script : true);
    matches && (matches = locale.language
        ? language === '*' || language === locale.language
        : true);
    return matches;
}
function serializeLSR(lsr) {
    return [lsr.language, lsr.script, lsr.region].filter(Boolean).join('-');
}
function findMatchingDistanceForLSR(desired, supported, data) {
    for (var _i = 0, _a = data.matches; _i < _a.length; _i++) {
        var d = _a[_i];
        var matches = isMatched(desired, d.desired, data.matchVariables) &&
            isMatched(supported, d.supported, data.matchVariables);
        if (!d.oneway && !matches) {
            matches =
                isMatched(desired, d.supported, data.matchVariables) &&
                    isMatched(supported, d.desired, data.matchVariables);
        }
        if (matches) {
            var distance = d.distance * 10;
            if (data.paradigmLocales.indexOf(serializeLSR(desired)) > -1 !=
                data.paradigmLocales.indexOf(serializeLSR(supported)) > -1) {
                return distance - 1;
            }
            return distance;
        }
    }
    throw new Error('No matching distance found');
}
function findMatchingDistance(desired, supported) {
    var desiredLocale = new Intl.Locale(desired).maximize();
    var supportedLocale = new Intl.Locale(supported).maximize();
    var desiredLSR = {
        language: desiredLocale.language,
        script: desiredLocale.script || '',
        region: desiredLocale.region || '',
    };
    var supportedLSR = {
        language: supportedLocale.language,
        script: supportedLocale.script || '',
        region: supportedLocale.region || '',
    };
    var matchingDistance = 0;
    var data = processData();
    if (desiredLSR.language !== supportedLSR.language) {
        matchingDistance += findMatchingDistanceForLSR({
            language: desiredLocale.language,
            script: '',
            region: '',
        }, {
            language: supportedLocale.language,
            script: '',
            region: '',
        }, data);
    }
    if (desiredLSR.script !== supportedLSR.script) {
        matchingDistance += findMatchingDistanceForLSR({
            language: desiredLocale.language,
            script: desiredLSR.script,
            region: '',
        }, {
            language: supportedLocale.language,
            script: supportedLSR.script,
            region: '',
        }, data);
    }
    if (desiredLSR.region !== supportedLSR.region) {
        matchingDistance += findMatchingDistanceForLSR(desiredLSR, supportedLSR, data);
    }
    return matchingDistance;
}
function findBestMatch(requestedLocales, supportedLocales, threshold) {
    if (threshold === void 0) { threshold = DEFAULT_MATCHING_THRESHOLD; }
    var lowestDistance = Infinity;
    var result = {
        matchedDesiredLocale: '',
        distances: {},
    };
    requestedLocales.forEach(function (desired, i) {
        if (!result.distances[desired]) {
            result.distances[desired] = {};
        }
        supportedLocales.forEach(function (supported) {
            // Add some weight to the distance based on the order of the supported locales
            // Add penalty for the order of the requested locales, which currently is 0 since ECMA-402
            // doesn't really have room for weighted locales like `en; q=0.1`
            var distance = findMatchingDistance(desired, supported) + 0 + i * 40;
            result.distances[desired][supported] = distance;
            if (distance < lowestDistance) {
                lowestDistance = distance;
                result.matchedDesiredLocale = desired;
                result.matchedSupportedLocale = supported;
            }
        });
    });
    if (lowestDistance >= threshold) {
        result.matchedDesiredLocale = undefined;
        result.matchedSupportedLocale = undefined;
    }
    return result;
}
