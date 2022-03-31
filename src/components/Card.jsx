import React from 'react'
export default function Card(props) {

    const { project_name, image_Url, project_description } = props.projectData;


  return (
      <div className='card-showcase'>
          <img src={image_Url} alt={image_Url}></img>
          <div>
          <h1>{project_name}</h1>
          <p>{project_description}</p>
          </div>
          
    </div>
  )
}
