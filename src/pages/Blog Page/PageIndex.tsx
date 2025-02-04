import React from 'react'

export default function PageIndex(props: { ids: string[] }) {

  const idsNoUndersore = props.ids.map((id) => id.replace(/_/g, ' '))
  const indices = props.ids.map((id, index) => {
    return (
      <li key={index} style={{ marginBottom: 'px' }}>
        <a href={`#${id}`} >
          <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '0.95rem', margin: '0' }}>
            {idsNoUndersore[index]}
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
