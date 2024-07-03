import React from 'react'
import Post from '../Post/Post.jsx'

export default function Posts() {
    const data = [
        {
            id: 1,
            name: "Shayam",
            userId: 1,
            profilePic: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png",
            description: "Ldsvlisdnv sdvidsnvds vdslvikdsnvdv dsvdsvidsvpdsovndsv dv dvdsvdsvpd svds d ewfwwefwdf wfewf ewfewfewf ewfw e few fwe few fw ge dsvldnvp onpo npnpinipnoubo o oh ou hbo b u b iub iub",
            img: "https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            name: "Shayam",
            userId: 2,
            profilePic: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png",
            description: "Ldsvlisdnv sdvidsnvds vdslvikdsnvdv dsvdsvidsvpdsovndsv dv dvdsvdsvpd svds d ewfwwefwdf wfewf ewfewfewf ewfw e few fwe few fw ge dsvldnvp onpo npnpinipnoubo o oh ou hbo b u b iub iub",
            img: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png"
        },
        {
            id: 3,
            name: "Shayam",
            userId: 3,
            profilePic: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png",
            description: "Ldsvlisdnv sdvidsnvds vdslvikdsnvdv dsvdsvidsvpdsovndsv dv dvdsvdsvpd svds d ewfwwefwdf wfewf ewfewfewf ewfw e few fwe few fw ge dsvldnvp onpo npnpinipnoubo o oh ou hbo b u b iub iub",
            img: "https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            name: "Shayam",
            userId: 4,
            profilePic: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png",
            description: "Ldsvlisdnv sdvidsnvds vdslvikdsnvdv dsvdsvidsvpdsovndsv dv dvdsvdsvpd svds d ewfwwefwdf wfewf ewfewfewf ewfw e few fwe few fw ge dsvldnvp onpo npnpinipnoubo o oh ou hbo b u b iub iub",
            img: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png"
        },
        {
            id: 5,
            name: "Shayam",
            userId: 5,
            profilePic: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png",
            description: "Ldsvlisdnv sdvidsnvds vdslvikdsnvdv dsvdsvidsvpdsovndsv dv dvdsvdsvpd svds d ewfwwefwdf wfewf ewfewfewf ewfw e few fwe few fw ge dsvldnvp onpo npnpinipnoubo o oh ou hbo b u b iub iub",
            img: "https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png"
        },
    ];
    return (
    <div className="posts">
        {data.map(post=>(
            <Post post={post} key={post.id}/>
        ))}
    </div>
  )
}
