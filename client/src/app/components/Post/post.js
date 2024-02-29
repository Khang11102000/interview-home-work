import React, { useEffect, useState, useContext } from "react";
import { Content } from "antd/es/layout/layout";
import { Typography } from "antd";
import { Input } from "antd";
import Comment from "../Comment/comment";

import "./post.css";
import { getCommentsByPost, getUserById } from "../../../apis/apiService";
const { Title } = Typography;
const { Text, Link } = Typography;

function Post({ id, owner, title, content, created_at, tags, onClick }) {
  const [listComments, setListComments] = useState([]);
  const [user, setUser] = useState({});
  const [isFullText, setFullText] = useState(0);
  useEffect(() => {
    getCommentsByPost(id).then((res) => {
      setListComments(res.data.comments);
    });
    getUserById(owner).then((res) => {
      setUser(res.data.user);
    });
  }, []);

  return (
    <Content className="post-container" id={id} key={id}>
      <Title className="post-title">{title}</Title>
      <Content className="post-info">
        <Text
          strong
          className="p-fs-20"
          style={{ marginTop: 0, marginBottom: 0 }}
        >
          Author: {user["name"]}
        </Text>
        <Text
          strong
          className="p-fs-20"
          style={{ marginTop: 0, marginBottom: 0 }}
        >
          Create at: {created_at}
        </Text>
      </Content>
      <Content className="post-content">
        <Text
          strong
          className="p-fs-20"
          style={{ overflow: "hidden", textOverflow: "ellipsis" }}
        >
          
          {isFullText === id ? <>{content}</> : <>{content.slice(0, 100)} <Link onClick={(e) => {setFullText(id)}}>...Xem thêm</Link></>}
        </Text>
      </Content>
      <Content>
        <Input
          value={listComments?.length + " replies"}
          style={{
            whiteSpace: "nowrap",
            textAlign: "start",
            cursor: "pointer",
          }}
          type="button"
          onClick={(e) => onClick(e, id)}
        />
        {listComments?.length > 0 &&
          listComments.map((comment) => {
            return (
              <Comment
                key={comment["id"]}
                id={comment["id"]}
                owner={comment["owner"]}
                post={comment["post"]}
                content={comment["content"]}
                create_at={comment["created_at"]}
              />
            );
          })}
      </Content>
    </Content>
  );
}
export default Post;
