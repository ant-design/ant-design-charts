import { vec3, mat3, mat4, vec4 } from 'gl-matrix';

export type TransformCallback = (x: number, y: number, width: number, height: number) => Transformer;
export type Transform3DCallback = (
  x: number,
  y: number,
  z: number,
  width: number,
  height: number,
  depth: number,
) => Transformer3D;

type Translate = ['translate', number, number];
type Cartesian = ['cartesian'];
type Custom = ['custom', TransformCallback];
type Matrix = ['matrix', Matrix3];
type Polar = ['polar', number, number, number, number];
type Transpose = ['transpose'];
type Scale = ['scale', number, number];
type ShearX = ['shear.x', number];
type ShearY = ['shear.y', number];
type Reflect = ['reflect'];
type ReflectX = ['reflect.x'];
type ReflectY = ['reflect.y'];
type Rotate = ['rotate', number];
type Helix = ['helix', number, number, number, number];
type Parallel = ['parallel', number, number, number, number];
type Fisheye = ['fisheye', number, number, number, number, boolean?];
type FisheyeX = ['fisheye.x', number, number, boolean?];
type FisheyeY = ['fisheye.y', number, number, boolean?];
type FisheyeCircular = ['fisheye.circular', number, number, number, number, boolean?];

type Cartesian3D = ['cartesian3D'];
type Translate3D = ['translate3D', number, number, number];
type Transpose3D = ['transpose3D'];
type Scale3D = ['scale3D', number, number, number];

export type Transformation =
  | Translate
  | Cartesian
  | Custom
  | Matrix
  | Polar
  | Transpose
  | Scale
  | ShearX
  | ShearY
  | Reflect
  | ReflectX
  | ReflectY
  | Rotate
  | Helix
  | Parallel
  | Fisheye
  | FisheyeX
  | FisheyeY
  | FisheyeCircular;
export type Transformation3D = Cartesian3D | Translate3D | Scale3D | Transpose3D;

export type Options = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  transformations?: Transformation[];
};
export type Options3D = {
  x?: number;
  y?: number;
  z?: number;
  width?: number;
  height?: number;
  depth?: number;
  transformations?: Transformation3D[];
};

export type Vector2 = [number, number];
export type Vector3 = vec3;
export type Vector4 = vec4;

export type Vector = number[];

export type Matrix3 = mat3;
export type Matrix4 = mat4;

export type Transform = (vector: Vector2 | Vector) => Vector2 | Vector;
export type Transform3D = (vector: Vector3 | Vector) => Vector3 | Vector;

export type Transformer = {
  transform?: Transform;
  untransform?: Transform;
};
export type Transformer3D = {
  transform?: Transform3D;
  untransform?: Transform3D;
};

export type CreateTransformer = (
  params: number[] | (number | boolean)[] | [TransformCallback] | [Matrix3],
  x: number,
  y: number,
  width: number,
  height: number,
) => Transformer | Matrix3;
export type CreateTransformer3D = (
  params: number[] | (number | boolean)[] | [TransformCallback] | [Matrix3],
  x: number,
  y: number,
  z: number,
  width: number,
  height: number,
  depth: number,
) => Transformer3D | Matrix4;
