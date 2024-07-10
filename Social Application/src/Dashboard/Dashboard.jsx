import React from 'react'
import "./Dashboard.css"
import Stories from '../Component/Stories/Stories'
import Post from '../Component/Post/Post'
import Posts from '../Component/Posts/Posts'

export default function Dashboard() {
  return (
    <div className="home">
      <Stories/>
      <Posts/>
    </div>
  )
}
