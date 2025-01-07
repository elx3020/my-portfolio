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
    <nav style={{ position: 'fixed', top: '8vh', width: '320px', height: '90vh', borderRight: '1px solid white', padding: '20px', }}>
      <div style={{ borderBottom: '1px solid white', marginBottom: '10px', paddingBottom: '5px' }}>
        <p>
          <span>Index:</span>
        </p>
      </div>
      <ul>
        {indices}
      </ul>
    </nav>
  )
}
