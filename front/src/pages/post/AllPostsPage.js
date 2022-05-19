import React, { useEffect, useState } from 'react';
import { Button, Pagination } from 'react-bootstrap';
import { BaseSpinner } from '../../components/base';
import { CenterInnerLayoutV } from '../../components/layout';
import PostItem from '../../components/posts/PostItem';
import { getAllPostsPaginated, makePost, deletePost } from '../../logic/http/postApi';
import "../../assets/css/posts.css";
import AddPostModal from '../../components/posts/AddPostModal';
import { getUserFromToken } from '../../logic/auth';

const AllPostsPage = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(null);
  const [pagesNum, setPagesNum] = useState(null);
  const [addPostModalShown, setAddPostModalShown] = useState(false);
  const [user, setUser] = useState(null);

  const addPost = async (title, text) => {
    await makePost(title, text);
    await getPosts();
    setPage(pagesNum);
  }

  const onDeletePost = async (e, postId) => {
    e.stopPropagation();
    await deletePost(postId);
    getPosts();
  }

  const getPosts = async () => {
    const { count, posts } = await getAllPostsPaginated(page, limit);
    setPosts(posts);
    setCount(count);
    const newPagesNum = Math.ceil(count / limit);
    setPagesNum(newPagesNum);
    if (newPagesNum < page) {
      setPage(newPagesNum);
    }
  }

  useEffect(() => {
    setLoading(true);
    getPosts().then(async () => {
      try {
      setUser(await getUserFromToken());
      } catch (e) {}
      setLoading(false);
    });
  }, [page]);

  if (loading) {
    return <CenterInnerLayoutV><BaseSpinner/></CenterInnerLayoutV>
  }

  return (
    <div style={{alignItems: "center", justifyContent: "flex-start", flex: "1 1"}} className="posts  d-flex flex-column">
      {user && <Button className="posts__add_button" onClick={() => setAddPostModalShown(true)}>+</Button>}
      <div className="posts__list">
        {posts.map(({postId, title, text}) => (
          <PostItem user={user} key={postId} postId={postId} title={title} text={text} onDelete={onDeletePost}/>
        ))}
      </div>
      <Pagination style={{display: "flex", marginTop: "auto"}}>
        <Pagination.First onClick={() => page !== 1 && setPage(1)} />
        <Pagination.Prev onClick={() => page !== 1 && setPage(page - 1)} />
        <Pagination.Item active>
          {page}
        </Pagination.Item>
        <Pagination.Next onClick={() => page !== pagesNum && setPage(page + 1)} />
        <Pagination.Last onClick={() => page !== pagesNum && setPage(pagesNum)}  />
      </Pagination>
      {user && <AddPostModal show={addPostModalShown} handleClose={() => setAddPostModalShown(false)} onAddPost={addPost}/>}
    </div>
  );
};

export default AllPostsPage;