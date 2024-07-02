import React from 'react'
import "./Post.css"

export default function Post() {
    const data = [
        {
            id: 1,
            name: "Shayam",
            image1: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png",
            content: "Ldsvlisdnv sdvidsnvds vdslvikdsnvdv dsvdsvidsvpdsovndsv dv dvdsvdsvpd svds d ewfwwefwdf wfewf ewfewfewf ewfw e few fwe few fw ge dsvldnvp onpo npnpinipnoubo o oh ou hbo b u b iub iub",
            image2: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png"
        },
        {
            id: 2,
            name: "Shayam",
            image1: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png",
            content: "Ldsvlisdnv sdvidsnvds vdslvikdsnvdv dsvdsvidsvpdsovndsv dv dvdsvdsvpd svds d ewfwwefwdf wfewf ewfewfewf ewfw e few fwe few fw ge dsvldnvp onpo npnpinipnoubo o oh ou hbo b u b iub iub",
            image2: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png"
        },
        {
            id: 3,
            name: "Shayam",
            image1: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png",
            content: "Ldsvlisdnv sdvidsnvds vdslvikdsnvdv dsvdsvidsvpdsovndsv dv dvdsvdsvpd svds d ewfwwefwdf wfewf ewfewfewf ewfw e few fwe few fw ge dsvldnvp onpo npnpinipnoubo o oh ou hbo b u b iub iub",
            image2: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png"
        },
        {
            id: 4,
            name: "Shayam",
            image1: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png",
            content: "Ldsvlisdnv sdvidsnvds vdslvikdsnvdv dsvdsvidsvpdsovndsv dv dvdsvdsvpd svds d ewfwwefwdf wfewf ewfewfewf ewfw e few fwe few fw ge dsvldnvp onpo npnpinipnoubo o oh ou hbo b u b iub iub",
            image2: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png"
        },
        {
            id: 5,
            name: "Shayam",
            image1: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png",
            content: "Ldsvlisdnv sdvidsnvds vdslvikdsnvdv dsvdsvidsvpdsovndsv dv dvdsvdsvpd svds d ewfwwefwdf wfewf ewfewfewf ewfw e few fwe few fw ge dsvldnvp onpo npnpinipnoubo o oh ou hbo b u b iub iub",
            image2: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png"
        },
    ]
  return (
    <div className="posts">
        {data.map(story=>(
            <div className="story">
                <img src={story.image1} alt="image" />
                <span>{story.name}</span>
                <div className="body1">
                    <span>{story.content}</span>
                    <img src={story.image2} alt="image" />
                </div>
            </div>
        ))}
    </div>
  )
}
