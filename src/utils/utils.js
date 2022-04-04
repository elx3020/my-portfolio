function ProjectDetails(arrayId, id) {
  let arr = arrayId.filter((item) => item.id === id);
  return arr[0];
}

export { ProjectDetails };
