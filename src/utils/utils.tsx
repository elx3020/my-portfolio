import React from "react";
import ListItem from "../components/List/ListItem";
import { GlobalDataT, ProjectDataT } from "../types/globalTypes";

function ProjectDetails<T extends ProjectDataT>(arrayId: T[], id: string): T  {
  let arr = arrayId.filter((item) => item.id === id);
  return arr[0];
}

function mapToList(array: ProjectDataT[]) {
  const htmlElemt = array.map((item) => {
    return (
      <ListItem
      data={{description: item.description, 
        id: item.id, 
        project_url: item.project_url,
        arr_Id: item.arr_Id,
        project_Name: item.project_Name,
        image_Url: item.image_Url}}
        key={item.id}
      />
    );
  });
  return htmlElemt;
}

function addClass(className: string[], classtoAdd: string, state: boolean, setState: Function) {
  // check input
  if (!Array.isArray(className)) {
    console.error(
      "The function required a className parameter the type Array[string]"
    );
    return;
  }
  const elements = className.map((item) => {

      return document.querySelector(`.${item}`);
  
  });

  // elements.forEach((element) => {
  //   if (!state) {
  //     element.classList.add(classtoAdd);
  //     setState((prev) => (prev = !prev));
  //   }
  // });

  for (let i = 0; i < elements.length; i++) {
    if (!state) {
      // @ts-ignore
      elements[i].classList.add(classtoAdd);
      setState(true);
    } else {
      // @ts-ignore
      elements[i].classList.remove(classtoAdd);
      setState(false);
    }
  }
}

export { ProjectDetails, mapToList, addClass };
