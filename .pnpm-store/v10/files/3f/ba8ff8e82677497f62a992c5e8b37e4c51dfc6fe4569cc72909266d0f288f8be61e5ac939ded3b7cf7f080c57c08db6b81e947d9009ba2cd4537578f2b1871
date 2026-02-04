export default class Quad {
    constructor(params) {
        /**
         * the center position of this quad
         * @type  {number}
         */
        this.xmid = params.xmid;
        /**
         * the center position of this quad
         * @type  {number}
         */
        this.ymid = params.ymid;
        /**
         * the length of this quad
         * @type  {number}
         */
        this.length = params.length;
        /**
         * the mass center of this quad
         * @type  {number}
         */
        this.massCenter = params.massCenter || [0, 0];
        /**
         * the mass of this quad
         * @type  {number}
         */
        this.mass = params.mass || 1;
    }
    getLength() {
        return this.length;
    }
    contains(x, y) {
        const halfLen = this.length / 2;
        return (x <= this.xmid + halfLen &&
            x >= this.xmid - halfLen &&
            y <= this.ymid + halfLen &&
            y >= this.ymid - halfLen);
    }
    // northwest quadrant
    // tslint:disable-next-line
    NW() {
        const x = this.xmid - this.length / 4;
        const y = this.ymid + this.length / 4;
        const len = this.length / 2;
        const params = {
            xmid: x,
            ymid: y,
            length: len,
        };
        const NW = new Quad(params);
        return NW;
    }
    // northeast
    // tslint:disable-next-line
    NE() {
        const x = this.xmid + this.length / 4;
        const y = this.ymid + this.length / 4;
        const len = this.length / 2;
        const params = {
            xmid: x,
            ymid: y,
            length: len,
        };
        const NE = new Quad(params);
        return NE;
    }
    // southwest
    // tslint:disable-next-line
    SW() {
        const x = this.xmid - this.length / 4;
        const y = this.ymid - this.length / 4;
        const len = this.length / 2;
        const params = {
            xmid: x,
            ymid: y,
            length: len,
        };
        const SW = new Quad(params);
        return SW;
    }
    // southeast
    // tslint:disable-next-line
    SE() {
        const x = this.xmid + this.length / 4;
        const y = this.ymid - this.length / 4;
        const len = this.length / 2;
        const params = {
            xmid: x,
            ymid: y,
            length: len,
        };
        const SE = new Quad(params);
        return SE;
    }
}
//# sourceMappingURL=quad.js.map