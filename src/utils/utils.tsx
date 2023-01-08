import React from "react";
import ListItem from "../components/List/ListItem";

function ProjectDetails(arrayId, id) {
  let arr = arrayId.filter((item) => item.id === id);
  return arr[0];
}

function mapToList(array) {
  const htmlElemt = array.map((item) => {
    return (
      <ListItem
        key={item.id}
        description={item.description}
        projectId={item.id}
        arrId={item.arr_Id}
        project_url={item.project_url}
        project_Name={item.project_Name}
      />
    );
  });
  return htmlElemt;
}

function addClass(className, classtoAdd, state, setState) {
  // check input
  if (!className instanceof Array) {
    console.error(
      "The function required a className parameter the type Array[string]"
    );
    return;
  }
  const elements = className.map((item) => {
    if (typeof item !== "string") {
      console.error(
        "The function required a className parameter the type Array[string]"
      );
      return null;
    } else {
      return document.querySelector(`.${item}`);
    }
  });

  // elements.forEach((element) => {
  //   if (!state) {
  //     element.classList.add(classtoAdd);
  //     setState((prev) => (prev = !prev));
  //   }
  // });

  for (let i = 0; i < elements.length; i++) {
    if (!state) {
      elements[i].classList.add(classtoAdd);
      setState(true);
    } else {
      elements[i].classList.remove(classtoAdd);
      setState(false);
    }
  }
}

export { ProjectDetails, mapToList, addClass };
