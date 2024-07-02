import React from 'react';
import "./RightBar.css";

export default function RightBar() {
  return (
    <div className="right-bar">
      <div className="right-bar-container">
        
        <div className="friend-requests">
          <span>Friend Requests</span>
          <div className="friend-request-item">
            <div className="friend-info">
              <img src="https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png" alt="User" />
              <span>Shayam</span>
            </div>
            <button className="follow-btn">Follow</button>
            <button className="reject-btn">Reject</button>
          </div>
          <div className="friend-request-item">
            <div className="friend-info">
              <img src="https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png" alt="User" />
              <span>Shayam</span>
            </div>
            <button className="follow-btn">Follow</button>
            <button className="reject-btn">Reject</button>
          </div>
        </div>

        <div className="online-friends">
          <span>Online Friends</span>
          <div className="online-friend-item">
            <div className="online-friend-info">
              <img src="https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png" alt="User" />
              <span>Shayam</span>
            </div>
            <div className="online-status"></div>
          </div>
          <div className="online-friend-item">
            <div className="online-friend-info">
              <img src="https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png" alt="User" />
              <span>Shayam</span>
            </div>
            <div className="online-status"></div>
          </div>
          <div className="online-friend-item">
            <div className="online-friend-info">
              <img src="https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png" alt="User" />
              <span>Shayam</span>
            </div>
            <div className="online-status"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
