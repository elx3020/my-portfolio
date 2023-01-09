export type DataIndentity = {
    id: string, 
    arr_Id: string, 
    project_Name: string, 
}

export type ProjectDataT = DataIndentity & {
    description: string, 
    project_url: string, 
    image_Url?: string,
    imageAlt?: string
}

export type UIProjectDataT = ProjectDataT & {
    imageCollection: string[],

}



export type GlobalDataT = {
    showcase_Data: ProjectDataT[], 
    mini_projects: ProjectDataT[],  
    web_Proj_Large: ProjectDataT[], 
    web_Proj_Mini: ProjectDataT[],
    ui_projects: UIProjectDataT[],
    
}

type ClassMode = 'single' | 'multiple'

export type ComponentBT<T extends ClassMode> = {
    className: T extends 'single' ? string : string[] ,
    image_Url?: string,
    title?: string,
    textContent?: string,
    children?: any 
    styleOptions?: React.CSSProperties 
}


