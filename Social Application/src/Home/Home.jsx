import React from 'react'
import "./Home.css"
import Stories from '../Component/Stories/Stories'
import Post from '../Component/Post/Post'

export default function Home() {
  return (
    <div className="home">
      <Stories/>
      <Post/>
    </div>
  )
}
