import React, { Fragment } from "react";
import ListItem from "../components/List/ListItem";
import LetterSpan from "../components/functional/LetterSpan";

function ProjectDetails<T extends UIProjectData>(arrayId: T[], id: string): T {
  let arr = arrayId.filter((item) => item.id === id);
  return arr[0];
}

function mapToList(array: ProjectDataT[]) {
  const htmlElemt = array.map((item) => {
    return (
      <ListItem
        data={{
          description: item.description,
          id: item.id,
          project_url: item.project_url,
          project_Name: item.project_Name,
          image_Url: item.image_Url
        }}
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
  const elements = className.map<any>((item) => {

    return document.querySelector(`.${item}`);

  });

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


export function string_with_span_at(index: number[], string: string) {
  let newString = string.split("");
  const list_char = newString.map((item, i) => {
    return (<LetterSpan key={i} index={i} emphasisIndex={index} letter={item} />);
  });
  return list_char;



}