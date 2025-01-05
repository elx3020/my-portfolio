import React from 'react'

export default function PageIndex(props: { ids: string[] }) {

  const indices = props.ids.map((id, index) => {
    return (
      <li key={index} style={{ marginBottom: 'px' }}>
        <a href={`#${id}`} >
          <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '0.95rem', margin: '0' }}>
            {id}
          </p>
        </a>
      </li>
    )
  })

  return (
    <div style={{ position: 'sticky', top: '10vh', width: '320px', height: '90vh', border: '1px solid white', padding: '10px', borderRadius: '5px', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div style={{ borderBottom: '1px solid white', marginBottom: '10px', paddingBottom: '5px' }}>
        <p>
          <span>Blogs:</span>
        </p>
      </div>
      <ul>
        {indices}
      </ul>
    </div>
  )
}
