/**
 * from: https://github.com/zqlu/svg2marker
 * translate svg string to G.Marker
 */
import svgPathParser from 'svg-path-parser';

type IPointPair = [number | undefined, number | undefined];

type ISVGPathCmd = {
  code: string;
  command: string;
  relative?: boolean;
  x?: number;
  y?: number;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
};

/**
 *  Return function to register a Marker Symbol for give SVG Path
 *
 * @param svgPath SVG Path string
 * @param viewBoxWidth SVG view box width, default to 1024
 * @param viewBoxHeight SVG view box height, default to 1024
 */
export function path2marker(
  svgPath: string,
  viewBoxWidth: number = 1024,
  viewBoxHeight: number = 1014
): (x: number, y: number, r: number) => (string | number)[][] {
  return (x: number, y: number, r: number): (string | number)[][] => {
    // @ts-ignore
    const paths: ISVGPathCmd[] = svgPathParser(svgPath);

    return paths.map((path: ISVGPathCmd) => {
      const arr: (string | number)[] = [];
      arr.push(path.relative === true ? path.code.toLowerCase() : path.code.toUpperCase());
      const pairs: IPointPair[] = [
        [path.x1, path.y1],
        [path.x2, path.y2],
        [path.x, path.y],
      ];
      pairs.forEach((pair: IPointPair) => {
        const [px, py] = pair;
        if (px !== undefined) {
          arr.push(path.relative === true ? (px / viewBoxWidth) * 2 * r : x - r + r * 2 * (px / viewBoxWidth));
        }
        if (py !== undefined) {
          arr.push(path.relative === true ? (py / viewBoxHeight) * 2 * r : y - r + r * 2 * (py / viewBoxHeight));
        }
      });

      return arr;
    });
  };
}

/**
 * Return function to register a Marker symbol for give svg file
 *
 * @param icon SVG file content
 */
export function svg2marker(icon: string): (x: number, y: number, r: number) => (string | number)[][] {
  const pathMatch: RegExpMatchArray | null = /<path\s+d="(.*?)"/i.exec(icon);
  const viewBoxMatch: RegExpExecArray | null = /viewBox="\d+\s+\d+\s+(\d+)\s+(\d+)"/i.exec(icon);
  if (pathMatch === null || pathMatch.length < 2) {
    return (): (string | number)[][] => [];
  }
  let width: number = 1024;
  let height: number = 1024;
  if (viewBoxMatch !== null && viewBoxMatch.length >= 3) {
    if (!Number.isNaN(parseInt(viewBoxMatch[1], 10))) {
      width = parseInt(viewBoxMatch[1], 10);
    }
    if (!Number.isNaN(parseInt(viewBoxMatch[2], 10))) {
      height = parseInt(viewBoxMatch[2], 10);
    }
  }

  return path2marker(pathMatch[1], width, height);
}
