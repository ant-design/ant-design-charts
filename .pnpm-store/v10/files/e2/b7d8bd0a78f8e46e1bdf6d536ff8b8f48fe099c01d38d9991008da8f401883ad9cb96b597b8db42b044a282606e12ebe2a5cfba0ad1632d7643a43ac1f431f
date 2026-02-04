var regexLG = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i;
var regexRG = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i;
var regexColorStop = /[\d.]+:(#[^\s]+|[^)]+\))/gi;
function isGradientColor(val) {
    return /^[r,R,L,l]{1}[\s]*\(/.test(val);
}
/**
 * 将 g 渐变转换为 css 渐变
 */
export function toCSSGradient(gradientColor) {
    if (isGradientColor(gradientColor)) {
        var cssColor_1;
        var steps = void 0;
        if (gradientColor[0] === 'l') {
            // 线性渐变
            var arr = regexLG.exec(gradientColor);
            var angle = +arr[1] + 90; // css 和 g 的渐变起始角度不同
            steps = arr[2];
            cssColor_1 = "linear-gradient(".concat(angle, "deg, ");
        }
        else if (gradientColor[0] === 'r') {
            // 径向渐变
            cssColor_1 = 'radial-gradient(';
            var arr = regexRG.exec(gradientColor);
            steps = arr[4];
        }
        var colorStops_1 = steps.match(regexColorStop);
        colorStops_1.forEach(function (item, index) {
            var itemArr = item.split(':');
            cssColor_1 += "".concat(itemArr[1], " ").concat(Number(itemArr[0]) * 100, "%");
            if (index !== colorStops_1.length - 1) {
                cssColor_1 += ', ';
            }
        });
        cssColor_1 += ')';
        return cssColor_1;
    }
    return gradientColor;
}
//# sourceMappingURL=tocssgradient.js.map