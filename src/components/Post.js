import React from 'react'

const Post = ({title, content}) => {
  return (
    <div>
        <article className="my-4 p-4 border rounded">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-2">{content}</p>
        </article>
    </div>
  )
}

export default Post