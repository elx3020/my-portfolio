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
    <nav className='page-index'>
      <div className='content'>
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
