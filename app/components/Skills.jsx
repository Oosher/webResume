import React from 'react'

export default function Skills({translations}) {
  return (
    <div className='skills'>
        <h1>{translations?.Title}</h1>
        <p>{translations?.Type1} JavaScript(ES6+), Java, C, C#, Lua, TypeScript</p>
        <p>{translations?.Type2} HTML5, CSS, Sass, React</p>
        <p>{translations?.Type3} Node.js, Express.js</p>
        <p>{translations?.Type4} SQL, MongoDB</p>
        <p>{translations?.Type5} Git , Bitbucket</p>
        <p>{translations?.Type6} RESTful APIs,AJAX</p>
        <div className="horizontalLine"></div>
    </div>
  )
}
