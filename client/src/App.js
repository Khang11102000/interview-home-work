import "./App.css";
import Navbar from "./app/components/Navbar/navbar";
import { Content } from "antd/es/layout/layout";
import Post from "./app/components/Post/post";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";
import { Spin } from "antd";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DetailPost from "./app/pages/DetailPost";
import { getPostByTitle } from "./apis/apiService";

function App() {
  const { posts, isLoading } = useSelector((state) => state.PostReducer);
  const { user, isLoading2 } = useSelector((state) => state.UserReducer);
  const [userCurrent, setUserCurrent] = useState({});
  const [listPosts, setListPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "GET_ALL_POSTS" });
    dispatch({ type: "GET_USER" });
  }, []);
  useEffect(() => {
    if (!isLoading && posts?.length > 0) {
      setListPost(posts);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading2 && !userCurrent["name"]) {
      setUserCurrent(user);
    }
  }, [isLoading2]);

  const handleClickPost = (e, postId) => {
    if (postId > 0) {
      navigate(`/${postId}`);
    }
  };
  const handleSearch = (e, text) => {
    if (text.length > 0) {
      getPostByTitle(text).then((res) => {
        setListPost(res.data.posts);
      });
    } else {
      setListPost(posts);
    }
  };

  return (
    <div className="App">
      <Navbar name={userCurrent.name} onSearch={handleSearch}></Navbar>
      {isLoading && isLoading2 ? (
        <Spin spinning={true} fullscreen />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Content className="main-content-container">
                {listPosts?.length > 0 &&
                  listPosts.map((post, index) => {
                    if (index >= (currentPage - 1) * 5 && index < currentPage * 5)
                      return (
                        <Post
                          key={post["id"]}
                          id={post["id"]}
                          title={post["title"]}
                          content={post["content"]}
                          owner={post["owner"]}
                          created_at={post["created_at"]}
                          tags={post["tags"]}
                          onClick={handleClickPost}
                        />
                      );
                  })}
              </Content>
            }
          ></Route>
          <Route path="/:postId" element={<DetailPost />}></Route>

          <Route path="notfound" element={<div>Not found</div>}></Route>
        </Routes>
      )}
      <Content className="paging-container">
        <Pagination
          defaultCurrent={currentPage}
          total={listPosts.length}
          onChange={(page) => {
            setCurrentPage(page);
          }}
        ></Pagination>
      </Content>
    </div>
  );
}

export default App;
