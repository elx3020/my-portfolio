
// to have global types do not use any import or export statement in the file
type DataIndentity = {
    id: string,
    arr_Id: string,
    project_Name: string,
}

type ProjectDataT = DataIndentity & {
    description: string,
    project_url: string,
    image_Url?: string,
    imageAlt?: string
}

// arr_Id, id, project_Name, image_Url, imageAlt

type UIProjectData = {
    id: string,
    arr_Id: string,
    project_Name: string,
    image_Url: string,
    imageAlt: string
    description?: string,
    imageCollection?: string[],
}

type UIProjectDataT = ProjectDataT & {
    imageCollection: string[],

}

type GlobalDataT = {
    showcase_Data: ProjectDataT[],
    mini_projects: ProjectDataT[],
    web_Proj_Large: ProjectDataT[],
    web_Proj_Mini: ProjectDataT[],
    ui_projects: UIProjectDataT[],

}

type ClassMode = 'single' | 'multiple'

type ComponentBT<T extends ClassMode> = {
    className: T extends 'single' ? string : string[],
    image_Url?: string,
    title?: string,
    textContent?: string,
    children?: any
    styleOptions?: React.CSSProperties
}



