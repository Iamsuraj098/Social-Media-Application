import React from 'react'
import "./Left.css"

export default function LeftBar() {
  return (
    <div className="LeftBar">
      <div className="top">
        <div className="user">
          <img src="https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png" alt="" />
          <span>User</span>
        </div>
        <div className="friend">
          <img src="https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png" alt="" />
          <span>Friends</span>
        </div>
        <div className="groups">
          <img src="https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png" alt="" />
          <span>Groups</span>
        </div>
      </div>
      <div className="bottom">
        <div className="share">
          <img src="https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png" alt="" />
          <span>Buttons</span>
        </div>
        <div className="setting">
          <img src="https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png" alt="" />
          <span>Settings</span>
        </div>
      </div>
    </div>
  )
}
