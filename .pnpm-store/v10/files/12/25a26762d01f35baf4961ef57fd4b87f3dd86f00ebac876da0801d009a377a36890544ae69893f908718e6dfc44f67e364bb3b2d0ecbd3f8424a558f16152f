d3-octree
==============

[![NPM package][npm-img]][npm-url]
[![Build Size][build-size-img]][build-size-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]

Ported version of D3's [Quadtree](https://github.com/d3/d3-quadtree), to use with three dimensional data structures, by adding the z coordinate.

An [octree](https://en.wikipedia.org/wiki/Octree) recursively partitions three-dimensional space into cubes, dividing each cube into eight equally-sized cubes. Each distinct point exists in a unique leaf [node](#nodes); coincident points are represented by a linked list. Octrees can accelerate various spatial operations, such as the [Barnes–Hut approximation](https://en.wikipedia.org/wiki/Barnes–Hut_simulation) for computing many-body forces, collision detection, and searching for nearby points.

See also [d3-binarytree](https://github.com/vasturiano/d3-binarytree) and [d3-quadtree](https://github.com/d3/d3-quadtree).

## Installing

If you use npm, `npm install d3-octree`. You can also load directly from the global [npmJS](https://npmjs.com) registry, as a bundled [standalone library](https://unpkg.com/d3-octree). In vanilla, a `d3` global is exported:

```html
<script src="https://unpkg.com/d3-octree"></script>
<script>

const octree = d3.octree();

</script>
```

## API Reference

<a name="octree" href="#octree">#</a> d3.<b>octree</b>([<i>data</i>[, <i>x</i>, <i>y</i>, <i>z</i>]])
 [<>](https://github.com/vasturiano/d3-octree/blob/master/src/octree.js#L15 "Source")

Creates a new, empty octree with an empty [extent](#octree_extent) and the default [*x*-](#octree_x), [*y*-](#octree_y) and [*z*-](#octree_z)accessors. If *data* is specified, [adds](#octree_addAll) the specified array of data to the octree. This is equivalent to:

```js
const tree = d3.octree()
    .addAll(data);
```

If *x*, *y* and *z* are also specified, sets the [*x*-](#octree_x), [*y*-](#octree_y) and [*z*-](#octree_z) accessors to the specified functions before adding the specified array of data to the octree, equivalent to:

```js
const tree = d3.octree()
    .x(x)
    .y(y)
    .z(z)
    .addAll(data);
```

<a name="octree_x" href="#octree_x">#</a> <i>octree</i>.<b>x</b>([<i>x</i>]) [<>](https://github.com/vasturiano/d3-octree/blob/master/src/x.js "Source")

If *x* is specified, sets the current *x*-coordinate accessor and returns the octree. If *x* is not specified, returns the current *x*-accessor, which defaults to:

```js
function x(d) {
  return d[0];
}
```

The *x*-acccessor is used to derive the *x*-coordinate of data when [adding](#octree_add) to and [removing](#octree_remove) from the tree. It is also used when [finding](#octree_find) to re-access the coordinates of data previously added to the tree; therefore, the *x*-, *y*- and *z*-accessors must be consistent, returning the same value given the same input.

<a name="octree_y" href="#octree_y">#</a> <i>octree</i>.<b>y</b>([<i>y</i>])
 [<>](https://github.com/vasturiano/d3-octree/blob/master/src/y.js "Source")

If *y* is specified, sets the current *y*-coordinate accessor and returns the octree. If *y* is not specified, returns the current *y*-accessor, which defaults to:

```js
function y(d) {
  return d[1];
}
```

The *y*-acccessor is used to derive the *y*-coordinate of data when [adding](#octree_add) to and [removing](#octree_remove) from the tree. It is also used when [finding](#octree_find) to re-access the coordinates of data previously added to the tree; therefore, the *x*-, *y*- and *z*-accessors must be consistent, returning the same value given the same input.

<a name="octree_z" href="#octree_z">#</a> <i>octree</i>.<b>z</b>([<i>z</i>])
 [<>](https://github.com/vasturiano/d3-octree/blob/master/src/z.js "Source")

If *z* is specified, sets the current *z*-coordinate accessor and returns the octree. If *z* is not specified, returns the current *z*-accessor, which defaults to:

```js
function z(d) {
  return d[2];
}
```

The *z*-acccessor is used to derive the *z*-coordinate of data when [adding](#octree_add) to and [removing](#octree_remove) from the tree. It is also used when [finding](#octree_find) to re-access the coordinates of data previously added to the tree; therefore, the *x*-, *y*- and *z*-accessors must be consistent, returning the same value given the same input.

<a name="octree_extent" href="#octree_extent">#</a> <i>octree</i>.<b>extent</b>([*extent*])
 [<>](https://github.com/vasturiano/d3-octree/blob/master/src/extent.js "Source")

If *extent* is specified, expands the octree to [cover](#octree_cover) the specified points [[*x0*, *y0*, *z0*], [*x1*, *y1*, *z1*]] and returns the octree. If *extent* is not specified, returns the octree’s current extent [[*x0*, *y0*, *z0*], [*x1*, *y1*, *z1*]], where *x0*, *y0* and *z0* are the inclusive lower bounds and *x1*, *y1* and *z1* are the inclusive upper bounds, or undefined if the octree has no extent. The extent may also be expanded by calling [*octree*.cover](#octree_cover) or [*octree*.add](#octree_add).

<a name="octree_cover" href="#octree_cover">#</a> <i>octree</i>.<b>cover</b>(<i>x</i>, <i>y</i>, <i>z</i>)
 [<>](https://github.com/vasturiano/d3-octree/blob/master/src/cover.js "Source")

Expands the octree to cover the specified point ⟨*x*,*y*,*z*⟩, and returns the octree. If the octree’s extent already covers the specified point, this method does nothing. If the octree has an extent, the extent is repeatedly doubled to cover the specified point, wrapping the [root](#octree_root) [node](#nodes) as necessary; if the octree is empty, the extent is initialized to the extent [[⌊*x*⌋, ⌊*y*⌋, ⌊*z*⌋], [⌈*x*⌉, ⌈*y*⌉, ⌈*z*⌉]]. (Rounding is necessary such that if the extent is later doubled, the boundaries of existing octants do not change due to floating point error.)

<a name="octree_add" href="#octree_add">#</a> <i>octree</i>.<b>add</b>(<i>datum</i>)
 [<>](https://github.com/vasturiano/d3-octree/blob/master/src/add.js "Source")

Adds the specified *datum* to the octree, deriving its coordinates ⟨*x*,*y*,*z*⟩ using the current [*x*-](#octree_x), [*y*-](#octree_y) and [*z*-](#octree_z)accessors, and returns the octree. If the new point is outside the current [extent](#octree_extent) of the octree, the octree is automatically expanded to [cover](#octree_cover) the new point.

<a name="octree_addAll" href="#octree_addAll">#</a> <i>octree</i>.<b>addAll</b>(<i>data</i>)
 [<>](https://github.com/vasturiano/d3-octree/blob/master/src/add.js#L59 "Source")

Adds the specified array of *data* to the octree, deriving each element’s coordinates ⟨*x*,*y*,*z*⟩ using the current [*x*-](#octree_x), [*y*-](#octree_y) and [*z*-](#octree_z)accessors, and return this octree. This is approximately equivalent to calling [*octree*.add](#octree_add) repeatedly:

```js
for (let i = 0, n = data.length; i < n; ++i) {
  octree.add(data[i]);
}
```

However, this method results in a more compact octree because the extent of the *data* is computed first before adding the data.

<a name="octree_remove" href="#octree_remove">#</a> <i>octree</i>.<b>remove</b>(<i>datum</i>)
 [<>](https://github.com/vasturiano/d3-octree/blob/master/src/remove.js "Source")

Removes the specified *datum* to the octree, deriving its coordinates ⟨*x*,*y*,*z*⟩ using the current [*x*-](#octree_x), [*y*-](#octree_y) and [*z*-](#octree_z)accessors, and returns the octree. If the specified *datum* does not exist in this octree, this method does nothing.

<a name="octree_removeAll" href="#octree_removeAll">#</a> <i>octree</i>.<b>removeAll</b>(<i>data</i>)
 [<>](https://github.com/vasturiano/d3-octree/blob/master/src/remove.js#L65 "Source")

Removes the specified *data* from the octree, deriving their coordinates ⟨*x*,*y*,*z*⟩ using the current [*x*-](#octree_x), [*y*-](#octree_y) and [*z*-](#octree_z)accessors, and returns the octree. If a specified *datum* does not exist in this octree, it is ignored.

<a name="octree_copy" href="#octree_copy">#</a> <i>octree</i>.<b>copy</b>()

Returns a copy of the octree. All [nodes](#nodes) in the returned octree are identical copies of the corresponding node in the octree; however, any data in the octree is shared by reference and not copied.

<a name="octree_root" href="#octree_root">#</a> <i>octree</i>.<b>root</b>()
 [<>](https://github.com/vasturiano/d3-octree/blob/master/src/root.js "Source")

Returns the root [node](#nodes) of the octree.

<a name="octree_data" href="#octree_data">#</a> <i>octree</i>.<b>data</b>()
 [<>](https://github.com/vasturiano/d3-octree/blob/master/src/data.js "Source")

Returns an array of all data in the octree.

<a name="octree_size" href="#octree_size">#</a> <i>octree</i>.<b>size</b>()
 [<>](https://github.com/vasturiano/d3-octree/blob/master/src/size.js "Source")

Returns the total number of data in the octree.

<a name="octree_find" href="#octree_find">#</a> <i>octree</i>.<b>find</b>(<i>x</i>, <i>y</i>, <i>z</i>[, <i>radius</i>])
 [<>](https://github.com/vasturiano/d3-octree/blob/master/src/find.js "Source")

Returns the datum closest to the position ⟨*x*,*y*,*z*⟩ with the given search *radius*. If *radius* is not specified, it defaults to infinity. If there is no datum within the search area, returns undefined.

<a name="octree_findAllWithinRadius" href="#octree_findAllWithinRadius">#</a> <i>octree</i>.<b>findAllWithinRadius</b>(<i>x</i>, <i>y</i>, <i>z</i>, <i>radius</i>)
 [<>](https://github.com/vasturiano/d3-octree/blob/master/src/findAll.js "Source")

Returns all the data points within the given search *radius* of the position ⟨*x*,*y*,*z*⟩. If there is no data points within the search area, returns an empty array.

<a name="octree_visit" href="#octree_visit">#</a> <i>octree</i>.<b>visit</b>(<i>callback</i>)
 [<>](https://github.com/vasturiano/d3-octree/blob/master/src/visit.js "Source")

Visits each [node](#nodes) in the octree in pre-order traversal, invoking the specified *callback* with arguments *node*, *x0*, *y0*, *z0*, *x1*, *y1*, *z1* for each node, where *node* is the node being visited, ⟨*x0*, *y0*, *z0*⟩ are the lower bounds of the node, and ⟨*x1*, *y1*, *z1*⟩ are the upper bounds, and returns the octree. (Assuming that positive *x* is right, positive *y* is down and positive *z* is far, as is typically the case, ⟨*x0*, *y0*, *z0*⟩ is the top-left-front corner and ⟨*x1*, *y1*, *z1*⟩ is the lower-right-back corner; however, the coordinate system is arbitrary, so more formally *x0* <= *x1*, *y0* <= *y1* and *z0* <= *z1*.)

If the *callback* returns true for a given node, then the children of that node are not visited; otherwise, all child nodes are visited. This can be used to quickly visit only parts of the tree, for example when using the [Barnes–Hut approximation](https://en.wikipedia.org/wiki/Barnes–Hut_simulation). Note, however, that child octants are always visited in sibling order: top-left-front, top-right-front, bottom-left-front, bottom-right-front, top-left-back, top-right-back, bottom-left-back, bottom-right-back. In cases such as [search](#octree_find), visiting siblings in a specific order may be faster.

As an example, the following visits the octree and returns all the nodes within a cubic extent [xmin, ymin, zmin, xmax, ymax, zmax], ignoring octants that cannot possibly contain any such node:

```js
function search(octree, xmin, ymin, zmin, xmax, ymax, zmax) {
  const results = [];
  octree.visit(function(node, x1, y1, z1, x2, y2, z2) {
    if (!node.length) {
      do {
        const d = node.data;
        if (d[0] >= xmin && d[0] < xmax && d[1] >= ymin && d[1] < ymax && d[2] >= zmin && d[2] < zmax) {
          results.push(d);
        }
      } while (node = node.next);
    }
    return x1 >= xmax || y1 >= ymax || z1 >= zmax || x2 < xmin || y2 < ymin || z2 < zmin;
  });
  return results;
}
```

<a name="octree_visitAfter" href="#octree_visitAfter">#</a> <i>octree</i>.<b>visitAfter</b>(<i>callback</i>)
 [<>](https://github.com/vasturiano/d3-octree/blob/master/src/visitAfter.js "Source")

Visits each [node](#nodes) in the octree in post-order traversal, invoking the specified *callback* with arguments *node*, *x0*, *y0*, *z0*, *x1*, *y1*, *z1* for each node, where *node* is the node being visited, ⟨*x0*, *y0*, *z0*⟩ are the lower bounds of the node, and ⟨*x1*, *y1*, *z1*⟩ are the upper bounds, and returns the octree. (Assuming that positive *x* is right, positive *y* is down and positive *z* is far, as is typically the case, ⟨*x0*, *y0*, *z0*⟩ is the top-left-front corner and ⟨*x1*, *y1*, *z1*⟩ is the lower-right-back corner; however, the coordinate system is arbitrary, so more formally *x0* <= *x1*, *y0* <= *y1* and *z0* <= *z1*.) Returns *root*.

### Nodes

Internal nodes of the octree are represented as eight-element arrays in left-to-right, top-to-bottom, front-to-back order:

* `0` - the top-left-front octant, if any.
* `1` - the top-right-front octant, if any.
* `2` - the bottom-left-front octant, if any.
* `3` - the bottom-right-front octant, if any.
* `4` - the top-left-back octant, if any.
* `5` - the top-right-back octant, if any.
* `6` - the bottom-left-back octant, if any.
* `7` - the bottom-right-back octant, if any.

A child octant may be undefined if it is empty.

Leaf nodes are represented as objects with the following properties:

* `data` - the data associated with this point, as passed to [*octree*.add](#octree_add).
* `next` - the next datum in this leaf, if any.

The `length` property may be used to distinguish leaf nodes from internal nodes: it is undefined for leaf nodes, and 8 for internal nodes. For example, to iterate over all data in a leaf node:

```js
if (!node.length) do console.log(node.data); while (node = node.next);
```

The point’s *x*-, *y*- and *z*-coordinates **must not be modified** while the point is in the octree. To update a point’s position, [remove](#octree_remove) the point and then re-[add](#octree_add) it to the octree at the new position. Alternatively, you may discard the existing octree entirely and create a new one from scratch; this may be more efficient if many of the points have moved.


[npm-img]: https://img.shields.io/npm/v/d3-octree
[npm-url]: https://npmjs.org/package/d3-octree
[build-size-img]: https://img.shields.io/bundlephobia/minzip/d3-octree
[build-size-url]: https://bundlephobia.com/result?p=d3-octree
[npm-downloads-img]: https://img.shields.io/npm/dt/d3-octree
[npm-downloads-url]: https://www.npmtrends.com/d3-octree
