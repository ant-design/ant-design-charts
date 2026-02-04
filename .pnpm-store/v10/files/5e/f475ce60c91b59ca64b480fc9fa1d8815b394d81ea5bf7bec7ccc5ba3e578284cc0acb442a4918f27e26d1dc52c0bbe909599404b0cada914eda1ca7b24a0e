/**
 * 判断是不是一个 url
 * @param  {string|undefined} path
 * @returns boolean
 */
export var isUrl = function isUrl(path) {
  if (!path) return false;
  if (!path.startsWith('http')) {
    return false;
  }
  try {
    var url = new URL(path);
    return !!url;
  } catch (error) {
    return false;
  }
};