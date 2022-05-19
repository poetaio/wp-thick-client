import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const TEXT_MAX_LENGTH = 150;

const PostItem = ({ user, postId, title, text, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className='posts__item' onClick={() => navigate(`/posts/${postId}`)}>
      {user && <div className="posts__delete_button" onClick={(e) => onDelete(e, postId)}/>}
      <div className='posts__item_title'>{title}</div>
      <div className='posts__item_text'>
        {text.length > TEXT_MAX_LENGTH
          ? <div>
              {text.substring(0, TEXT_MAX_LENGTH)}...&nbsp;
              <Link to={`/posts/${postId}`}>Read more</Link>
            </div>
          : text
        }
      </div>
    </div>
  );
};

export default PostItem;