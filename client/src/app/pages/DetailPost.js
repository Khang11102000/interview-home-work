import React, { useEffect, useState, useContext, useMemo } from "react";
import { Content } from "antd/es/layout/layout";
import { Typography } from "antd";
import { Input } from "antd";
import Comment from "../components/Comment/comment";
import { useParams } from "react-router-dom";

import "./detail-post.css";
import {
  getAllCommentsByPost,
  getPostById,
  getUserById,
} from "../../apis/apiService";
const { Title } = Typography;
const { Text, Link } = Typography;

function DetailPost() {
  const [listComments, setListComments] = useState([]);
  const [user, setUser] = useState({});
  const [postDetail, setPostDetail] = useState({});
  let { postId } = useParams();

  useMemo(() => {
    if (postId) {
      getPostById(postId).then((res) => {
        setPostDetail(res.data.post[0]);
      });
      getAllCommentsByPost(postId).then((res) => {
        setListComments(res.data.comments);
      });
    }
  }, [postId]);

  useMemo(() => {
    if (postDetail?.owner > 0) {
      getUserById(postDetail.owner).then((res) => {
        setUser(res.data.user);
      });
    }
  }, [postDetail?.owner]);
  
  return (
    <Content className="post-container" id={postDetail?.id} key={postDetail?.id} style={{paddingTop: 64, paddingBottom: 54}}>
      <Title className="post-title">{postDetail?.title}</Title>
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
          Create at: {postDetail?.created_at}
        </Text>
      </Content>
      <Content className="post-content">
        <Text strong className="p-fs-20">
          {postDetail?.content}
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
export default DetailPost;
