export var isDropdownValueType = function isDropdownValueType(valueType) {
  var isDropdown = false;
  if (typeof valueType === 'string' && valueType.startsWith('date') && !valueType.endsWith('Range') || valueType === 'select' || valueType === 'time') {
    isDropdown = true;
  }
  return isDropdown;
};