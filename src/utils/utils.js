import ListItem from "../components/List/ListItem";

function ProjectDetails(arrayId, id) {
  let arr = arrayId.filter((item) => item.id === id);
  return arr[0];
}

function mapToList(array) {
  const htmlElemt = array.map((item) => {
    return (
      <ListItem
        imageUrl={item.imageUrl}
        imageAlt={item.imageAlt}
        description={item.description}
        projectId={item.id}
        arrId={item.arr_Id}
        project_Name={item.project_Name}
      />
    );
  });
  return htmlElemt;
}

export { ProjectDetails, mapToList };
