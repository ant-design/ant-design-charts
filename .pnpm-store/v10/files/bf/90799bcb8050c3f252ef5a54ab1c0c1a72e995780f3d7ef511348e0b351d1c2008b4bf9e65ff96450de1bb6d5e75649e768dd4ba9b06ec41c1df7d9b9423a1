"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conjugateGradient = conjugateGradient;
exports.conjugateGradientSolve = conjugateGradientSolve;
const blas1_1 = require("./blas1");
const linesearch_1 = require("./linesearch");
function conjugateGradient(f, initial, params) {
    // allocate all memory up front here, keep out of the loop for perfomance
    // reasons
    let current = { x: initial.slice(), fx: 0, fxprime: initial.slice() };
    let next = { x: initial.slice(), fx: 0, fxprime: initial.slice() };
    const yk = initial.slice();
    let temp;
    let a = 1;
    params = params || {};
    const maxIterations = params.maxIterations || initial.length * 20;
    current.fx = f(current.x, current.fxprime);
    const pk = current.fxprime.slice();
    (0, blas1_1.scale)(pk, current.fxprime, -1);
    for (let i = 0; i < maxIterations; ++i) {
        a = (0, linesearch_1.wolfeLineSearch)(f, pk, current, next, a);
        // todo: history in wrong spot?
        if (params.history) {
            params.history.push({
                x: current.x.slice(),
                fx: current.fx,
                fxprime: current.fxprime.slice(),
                alpha: a,
            });
        }
        if (!a) {
            // faiiled to find point that satifies wolfe conditions.
            // reset direction for next iteration
            (0, blas1_1.scale)(pk, current.fxprime, -1);
        }
        else {
            // update direction using Polak–Ribiere CG method
            (0, blas1_1.weightedSum)(yk, 1, next.fxprime, -1, current.fxprime);
            const delta_k = (0, blas1_1.dot)(current.fxprime, current.fxprime);
            const beta_k = Math.max(0, (0, blas1_1.dot)(yk, next.fxprime) / delta_k);
            (0, blas1_1.weightedSum)(pk, beta_k, pk, -1, next.fxprime);
            temp = current;
            current = next;
            next = temp;
        }
        if ((0, blas1_1.norm2)(current.fxprime) <= 1e-5) {
            break;
        }
    }
    if (params.history) {
        params.history.push({
            x: current.x.slice(),
            fx: current.fx,
            fxprime: current.fxprime.slice(),
            alpha: a,
        });
    }
    return current;
}
/// Solves a system of lienar equations Ax =b for x
/// using the conjugate gradient method.
function conjugateGradientSolve(A, b, x, history) {
    const r = x.slice();
    const Ap = x.slice();
    let rsold;
    let rsnew;
    let alpha;
    // r = b - A*x
    (0, blas1_1.gemv)(Ap, A, x);
    (0, blas1_1.weightedSum)(r, 1, b, -1, Ap);
    const p = r.slice();
    rsold = (0, blas1_1.dot)(r, r);
    for (let i = 0; i < b.length; ++i) {
        (0, blas1_1.gemv)(Ap, A, p);
        alpha = rsold / (0, blas1_1.dot)(p, Ap);
        if (history) {
            history.push({ x: x.slice(), p: p.slice(), alpha: alpha });
        }
        //x=x+alpha*p;
        (0, blas1_1.weightedSum)(x, 1, x, alpha, p);
        // r=r-alpha*Ap;
        (0, blas1_1.weightedSum)(r, 1, r, -alpha, Ap);
        rsnew = (0, blas1_1.dot)(r, r);
        if (Math.sqrt(rsnew) <= 1e-10)
            break;
        // p=r+(rsnew/rsold)*p;
        (0, blas1_1.weightedSum)(p, 1, r, rsnew / rsold, p);
        rsold = rsnew;
    }
    if (history) {
        history.push({ x: x.slice(), p: p.slice(), alpha: alpha });
    }
    return x;
}
//# sourceMappingURL=conjugateGradient.js.map