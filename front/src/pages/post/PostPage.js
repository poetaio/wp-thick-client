import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BaseSpinner } from '../../components/base';
import { CenterInnerLayoutV } from '../../components/layout';
import { getPost } from '../../logic/http/postApi';
import "../../assets/css/post.css";

const PostPage = () => {
  const { postId } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  const getThisPost = async () => {
    const post = await getPost(postId);
    setPost(post);
  }

  useEffect(() => {
    getThisPost().then(() => setLoading(false));
  }, []);

  if (loading) {
    return <CenterInnerLayoutV><BaseSpinner/></CenterInnerLayoutV>
  }

  return (
    <div className="post">
      <div className="post__info">
        <div className="post__info_title">
          {post.title}
        </div>
        <div className="post__info_created_date">
          Posted on {new Date(post.createdAt).toDateString().substring(0, 15)}
        </div>
        <div className="post__info_text">
          {post.text}
        </div>
      </div>
      <div className="post__author">
        <div className="post__author_header">Author</div>
        <div className="post__author_icon"></div>
        <div className="post__author_username">
          @{post.user.username}
        </div>
        <div className="post__author_name">
          {post.user.firstName} {post.user.lastName}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
