var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key]: value });
}
function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign(object, { [key]: value })
  return object
}