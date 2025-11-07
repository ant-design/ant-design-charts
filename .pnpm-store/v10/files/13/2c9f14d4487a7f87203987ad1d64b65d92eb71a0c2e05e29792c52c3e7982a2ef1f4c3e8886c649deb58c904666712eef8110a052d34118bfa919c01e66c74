/*
 * Parser for SVG transform.
 * Based on http://www.w3.org/TR/SVG/coords.html#TransformAttribute
 */

transformList
  = wsp* ts:transforms? wsp* { return ts; }

transforms
  = t:transform commaWsp+ ts:transforms { return t.concat(ts) }
    / transform

transform
  = matrix
    / translate
    / scale
    / rotate
    / skewX
    / skewY

matrix
  = "matrix" wsp* "(" wsp*
       a:number commaWsp
       b:number commaWsp
       c:number commaWsp
       d:number commaWsp
       e:number commaWsp
       f:number wsp* ")" {
      return [{type: 'matrix', a: a, b: b, c: c, d: d, e: e, f: f}];
    }

translate
  = "translate" wsp* "(" wsp* tx:number ty:commaWspNumber? wsp* ")" {
      var t = {type: 'translate', tx: tx};
      if (ty) t.ty = ty;
      return [t];
    }

scale
  = "scale" wsp* "(" wsp* sx:number sy:commaWspNumber? wsp* ")" {
      var s = {type:'scale', sx: sx};
      if (sy) s.sy = sy;
      return [s];
    }

rotate
  = "rotate" wsp* "(" wsp* angle:number c:commaWspTwoNumbers? wsp* ")" {
      var r = {type:'rotate', angle: angle};
      if (c) {
        r.cx = c[0];
        r.cy = c[1];
      }
      return [r];
    }

skewX
  = "skewX" wsp* "(" wsp* angle:number wsp* ")" {
      return [{type: 'skewX', angle: angle}];
    }

skewY
  = "skewY" wsp* "(" wsp* angle:number wsp* ")" {
      return [{type: 'skewY', angle: angle}];
    }

number
  = f:(sign? floatingPointConstant) { return parseFloat(f.join("")); }
    / i:(sign? integerConstant) { return parseInt(i.join("")); }

commaWspNumber
  = commaWsp n:number { return n; }

commaWspTwoNumbers
  = commaWsp n1:number commaWsp n2:number { return [n1, n2]; }

commaWsp
  = (wsp+ comma? wsp*) / (comma wsp*)

comma
  = ","

integerConstant
  = ds:digitSequence { return ds.join(""); }

floatingPointConstant
  = f:fractionalConstant e:exponent? { return [f, e || null].join("")}
    / d:digitSequence e:exponent { return [d, e].join("")}

fractionalConstant "fractionalConstant"
  = d1:digitSequence? "." d2:digitSequence { return [d1 ? d1.join("") : null, ".", d2.join("")].join(""); }
    / d:digitSequence "." { return d.join(""); }

exponent
  =  [eE] s:sign? d:digitSequence { return ['e', s, d.join("")].join("") }

sign
  = [+-]

digitSequence
  = digit+

digit
  = [0-9]

wsp
  = [\u0020\u0009\u000D\u000A]
