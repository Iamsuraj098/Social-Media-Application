import React from 'react'
import "./Post.scss"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link } from '@mui/material';
import { useState } from 'react';
import Comments from "../Comment/Comment";

export default function Post({ post }) {
  if (!post) return null;

  const [commentOpen, setCommentOpen] = useState(false);
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userinfo">
            <img src={`${post.profilePic}`} alt="image" />
            <Link to={`/Profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
              <span>{post.name}</span>
              <span>1min ago</span>
            </Link>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          {post.description}
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  )
}
