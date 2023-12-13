

import React from 'react'

export default function Projects({translation}) {
    const desc2 = translation?.Description2.split("-");
  return (
    <div   className="projects">
        <h1>{translation?.Title}</h1>
        <h3><a href="https://career.dev.noviopus.com/" target='_blank'>{translation?.Proj1}</a></h3>
        <p>&#183;{translation?.Description1}</p>
        <h3><a href="https://osherbenzaken.cyclic.app/" target='_blank'>{translation?.Proj2}</a></h3>
        {desc2?.map((proj)=><p key={proj}>&#183;{proj}</p>)}
    </div>
  )
}
