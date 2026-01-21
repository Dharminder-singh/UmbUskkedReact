import React from 'react'

function Content({ content }) {
 return content && <div>{ content.title }</div> 
}

export default Content