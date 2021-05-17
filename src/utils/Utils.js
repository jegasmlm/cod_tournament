
function toList(data) {
  if(!data) return []
  const list = [];
  Object.keys(data).forEach((key) => {
    list.push(data[key]);
  })
  return list;
}

export { toList }
