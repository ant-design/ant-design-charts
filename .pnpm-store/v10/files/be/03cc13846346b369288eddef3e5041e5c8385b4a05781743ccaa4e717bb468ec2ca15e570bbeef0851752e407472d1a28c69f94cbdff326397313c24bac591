d3-binarytree
==============

[![NPM package][npm-img]][npm-url]
[![Build Size][build-size-img]][build-size-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]

Ported version of D3's [Quadtree](https://github.com/d3/d3-quadtree), to use with one-dimensional data structures, by removing the y coordinate.

A [binary tree](https://en.wikipedia.org/wiki/Binary_tree) recursively partitions arrays into segments, dividing each array into two equally-sized halves. Each distinct point exists in a unique leaf [node](#nodes); coincident points are represented by a linked list. Binary trees can accelerate various spatial operations, such as the [Barnes–Hut approximation](https://en.wikipedia.org/wiki/Barnes–Hut_simulation) for computing many-body forces, collision detection, and searching for nearby points.

See also [d3-quadtree](https://github.com/d3/d3-quadtree) and [d3-octree](https://github.com/vasturiano/d3-octree).

## Installing

If you use npm, `npm install d3-binarytree`. You can also load directly from the global [npmJS](https://npmjs.com) registry, as a bundled [standalone library](https://unpkg.com/d3-binarytree). In vanilla, a `d3` global is exported:

```html
<script src="https://unpkg.com/d3-binarytree"></script>
<script>

const binarytree = d3.binarytree();

</script>
```

## API Reference

<a name="binarytree" href="#binarytree">#</a> d3.<b>binarytree</b>([<i>data</i>[, <i>x</i>]])
 [<>](https://github.com/d3/d3-binarytree/blob/master/src/binarytree.js#L13 "Source")

Creates a new, empty binarytree with an empty [extent](#binarytree_extent) and the default [*x*-](#binarytree_x)accessor. If *data* is specified, [adds](#binarytree_addAll) the specified array of data to the binarytree. This is equivalent to:

```js
const tree = d3.binarytree()
    .addAll(data);
```

If *x* is also specified, sets the [*x*-](#binarytree_x) accessor to the specified functions before adding the specified array of data to the binarytree, equivalent to:

```js
const tree = d3.binarytree()
    .x(x)
    .addAll(data);
```

<a name="binarytree_x" href="#binarytree_x">#</a> <i>binarytree</i>.<b>x</b>([<i>x</i>]) [<>](https://github.com/d3/d3-binarytree/blob/master/src/x.js "Source")

If *x* is specified, sets the current *x*-coordinate accessor and returns the binarytree. If *x* is not specified, returns the current *x*-accessor, which defaults to:

```js
function x(d) {
  return d[0];
}
```

The *x*-acccessor is used to derive the *x*-coordinate of data when [adding](#binarytree_add) to and [removing](#binarytree_remove) from the tree. It is also used when [finding](#binarytree_find) to re-access the coordinates of data previously added to the tree; therefore, the *x*-accessor must be consistent, returning the same value given the same input.

<a name="binarytree_extent" href="#binarytree_extent">#</a> <i>binarytree</i>.<b>extent</b>([*extent*])
 [<>](https://github.com/d3/d3-binarytree/blob/master/src/extent.js "Source")

If *extent* is specified, expands the binarytree to [cover](#binarytree_cover) the specified points [[*x0*], [*x1*]] and returns the binarytree. If *extent* is not specified, returns the binarytree’s current extent [[*x0*], [*x1*]], where *x0* is the inclusive lower bound and *x1* is the inclusive upper bound, or undefined if the binarytree has no extent. The extent may also be expanded by calling [*binarytree*.cover](#binarytree_cover) or [*binarytree*.add](#binarytree_add).

<a name="binarytree_cover" href="#binarytree_cover">#</a> <i>binarytree</i>.<b>cover</b>(<i>x</i>)
 [<>](https://github.com/d3/d3-binarytree/blob/master/src/cover.js "Source")

Expands the binarytree to cover the specified point ⟨*x*⟩, and returns the binarytree. If the binarytree’s extent already covers the specified point, this method does nothing. If the binarytree has an extent, the extent is repeatedly doubled to cover the specified point, wrapping the [root](#binarytree_root) [node](#nodes) as necessary; if the binarytree is empty, the extent is initialized to the extent [[⌊*x*⌋], [⌈*x*⌉]]. (Rounding is necessary such that if the extent is later doubled, the boundaries of existing segments do not change due to floating point error.)

<a name="binarytree_add" href="#binarytree_add">#</a> <i>binarytree</i>.<b>add</b>(<i>datum</i>)
 [<>](https://github.com/d3/d3-binarytree/blob/master/src/add.js "Source")

Adds the specified *datum* to the binarytree, deriving its coordinates ⟨*x*⟩ using the current [*x*-](#binarytree_x)accessor, and returns the binarytree. If the new point is outside the current [extent](#binarytree_extent) of the binarytree, the binarytree is automatically expanded to [cover](#binarytree_cover) the new point.

<a name="binarytree_addAll" href="#binarytree_addAll">#</a> <i>binarytree</i>.<b>addAll</b>(<i>data</i>)
 [<>](https://github.com/d3/d3-binarytree/blob/master/src/add.js#L41 "Source")

Adds the specified array of *data* to the binarytree, deriving each element’s coordinates ⟨*x*⟩ using the current [*x*-](#binarytree_x)accessor, and return this binarytree. This is approximately equivalent to calling [*binarytree*.add](#binarytree_add) repeatedly:

```js
for (let i = 0, n = data.length; i < n; ++i) {
  binarytree.add(data[i]);
}
```

However, this method results in a more compact binarytree because the extent of the *data* is computed first before adding the data.

<a name="binarytree_remove" href="#binarytree_remove">#</a> <i>binarytree</i>.<b>remove</b>(<i>datum</i>)
 [<>](https://github.com/d3/d3-binarytree/blob/master/src/remove.js "Source")

Removes the specified *datum* to the binarytree, deriving its coordinates ⟨*x*⟩ using the current [*x*-](#binarytree_x)accessor, and returns the binarytree. If the specified *datum* does not exist in this binarytree, this method does nothing.

<a name="binarytree_removeAll" href="#binarytree_removeAll">#</a> <i>binarytree</i>.<b>removeAll</b>(<i>data</i>)
 [<>](https://github.com/d3/d3-binarytree/blob/master/src/remove.js#L53 "Source")

Removes the specified *data* from the binarytree, deriving their coordinates ⟨*x*⟩ using the current [*x*-](#binarytree_x)accessor, and returns the binarytree. If a specified *datum* does not exist in this binarytree, it is ignored.

<a name="binarytree_copy" href="#binarytree_copy">#</a> <i>binarytree</i>.<b>copy</b>()

Returns a copy of the binarytree. All [nodes](#nodes) in the returned binarytree are identical copies of the corresponding node in the binarytree; however, any data in the binarytree is shared by reference and not copied.

<a name="binarytree_root" href="#binarytree_root">#</a> <i>binarytree</i>.<b>root</b>()
 [<>](https://github.com/d3/d3-binarytree/blob/master/src/root.js "Source")

Returns the root [node](#nodes) of the binarytree.

<a name="binarytree_data" href="#binarytree_data">#</a> <i>binarytree</i>.<b>data</b>()
 [<>](https://github.com/d3/d3-binarytree/blob/master/src/data.js "Source")

Returns an array of all data in the binarytree.

<a name="binarytree_size" href="#binarytree_size">#</a> <i>binarytree</i>.<b>size</b>()
 [<>](https://github.com/d3/d3-binarytree/blob/master/src/size.js "Source")

Returns the total number of data in the binarytree.

<a name="binarytree_find" href="#binarytree_find">#</a> <i>binarytree</i>.<b>find</b>(<i>x</i>[, <i>radius</i>])
 [<>](https://github.com/d3/d3-binarytree/blob/master/src/find.js "Source")

Returns the datum closest to the position ⟨*x*⟩ with the given search *radius*. If *radius* is not specified, it defaults to infinity. If there is no datum within the search area, returns undefined.

<a name="binarytree_visit" href="#binarytree_visit">#</a> <i>binarytree</i>.<b>visit</b>(<i>callback</i>)
 [<>](https://github.com/d3/d3-binarytree/blob/master/src/visit.js "Source")

Visits each [node](#nodes) in the binarytree in pre-order traversal, invoking the specified *callback* with arguments *node*, *x0*, *x1* for each node, where *node* is the node being visited, ⟨*x0*⟩ is the lower bound of the node, and ⟨*x1*⟩ is the upper bound, and returns the binarytree. (Assuming that positive *x* is right, ⟨*x0*⟩ is the left boundary and ⟨*x1*⟩ is the right boundary; however, the coordinate system is arbitrary, so more formally *x0* <= *x1*.)

If the *callback* returns true for a given node, then the children of that node are not visited; otherwise, all child nodes are visited. This can be used to quickly visit only parts of the tree, for example when using the [Barnes–Hut approximation](https://en.wikipedia.org/wiki/Barnes–Hut_simulation). Note, however, that child segments are always visited in sibling order: left, right. In cases such as [search](#binarytree_find), visiting siblings in a specific order may be faster.

As an example, the following visits the binarytree and returns all the nodes within a range [xmin, xmax], ignoring segments that cannot possibly contain any such node:

```js
function search(binarytree, xmin, xmax) {
  const results = [];
  binarytree.visit(function(node, x1, x2) {
    if (!node.length) {
      do {
        const d = node.data;
        if (d[0] >= xmin && d[0] < xmax) {
          results.push(d);
        }
      } while (node = node.next);
    }
    return x1 >= xmax || x2 < xmin;
  });
  return results;
}
```

<a name="binarytree_visitAfter" href="#binarytree_visitAfter">#</a> <i>binarytree</i>.<b>visitAfter</b>(<i>callback</i>)
 [<>](https://github.com/d3/d3-binarytree/blob/master/src/visitAfter.js "Source")

Visits each [node](#nodes) in the binarytree in post-order traversal, invoking the specified *callback* with arguments *node*, *x0*, *x1* for each node, where *node* is the node being visited, ⟨*x0*⟩ is the lower bound of the node, and ⟨*x1*⟩ are the upper bound, and returns the binarytree. (Assuming that positive *x* is right, ⟨*x0*⟩ is the left boundary and ⟨*x1*⟩ is the right boundary; however, the coordinate system is arbitrary, so more formally *x0* <= *x1*.) Returns *root*.

### Nodes

Internal nodes of the binarytree are represented as two-element arrays in left-to-right order:

* `0` - the left half, if any.
* `1` - the right half, if any.

A child half may be undefined if it is empty.

Leaf nodes are represented as objects with the following properties:

* `data` - the data associated with this point, as passed to [*binarytree*.add](#binarytree_add).
* `next` - the next datum in this leaf, if any.

The `length` property may be used to distinguish leaf nodes from internal nodes: it is undefined for leaf nodes, and 4 for internal nodes. For example, to iterate over all data in a leaf node:

```js
if (!node.length) do console.log(node.data); while (node = node.next);
```

The point’s *x*--coordinate **must not be modified** while the point is in the binarytree. To update a point’s position, [remove](#binarytree_remove) the point and then re-[add](#binarytree_add) it to the binarytree at the new position. Alternatively, you may discard the existing binarytree entirely and create a new one from scratch; this may be more efficient if many of the points have moved.


[npm-img]: https://img.shields.io/npm/v/d3-binarytree
[npm-url]: https://npmjs.org/package/d3-binarytree
[build-size-img]: https://img.shields.io/bundlephobia/minzip/d3-binarytree
[build-size-url]: https://bundlephobia.com/result?p=d3-binarytree
[npm-downloads-img]: https://img.shields.io/npm/dt/d3-binarytree
[npm-downloads-url]: https://www.npmtrends.com/d3-binarytree
