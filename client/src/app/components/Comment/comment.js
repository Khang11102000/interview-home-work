import React, { useEffect, useState, useContext } from "react";
import { Flex } from "antd";

import { Typography } from "antd";

import Layout, { Content } from "antd/es/layout/layout";
import { Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserById } from "../../../apis/apiService";

import "./comment.css";
const { Text, Link } = Typography;

function Comment({id, owner, post, content, create_at}) {
  const [user, setUser] = useState({})
  useEffect(() => {
    getUserById(id).then((res) => {
      setUser(res.data.user);
    });
  }, []);

  return (
    <Content className="comment-container" id={id}>
      <Flex gap="middle" vertical>
        <Flex vertical={false}>
          <Content className="comment-avatar-container">
            <Avatar size={64} icon={<UserOutlined />} />
          </Content>
          <Content className="comment-content-container">
            <Content style={{ display: "flex" }}>
              <Text strong type="secondary">
                {user.name}
              </Text>
              <Text type="secondary" style={{ marginLeft: 5 }}>
                {create_at}
              </Text>
            </Content>
            <Content>
              <Text>
                {content}
              </Text>
            </Content>
            <Text type="secondary">Reply to</Text>
          </Content>
        </Flex>
      </Flex>
    </Content>
  );
}
export default Comment;
