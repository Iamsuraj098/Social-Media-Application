import React from 'react'
import "./Stories.css"

export default function Stories() {

    const data = [
        {
            id: 1,
            name: "Shayam",
            image: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png"
        },
        {
            id: 2,
            name: "Shayam",
            image: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png"
        },
        {
            id: 3,
            name: "Shayam",
            image: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png"
        },
        {
            id: 4,
            name: "Shayam",
            image: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png"
        },
        {
            id: 5,
            name: "Shayam",
            image: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png"
        },
    ]
  return (
    <div className="stories">
        {data.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.image} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}
