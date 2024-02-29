import React, { useEffect, useState, useContext } from "react";
import { Flex } from "antd";
import { Content } from "antd/es/layout/layout";
import { Typography } from "antd";
import { Avatar } from "antd";
import avt from "../../../assets/avt.jpg";
import logo from "../../../assets/logo.png";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

import "./navbar.css";

const { Text } = Typography;

function Navbar({ id, username, name, onSearch }) {
  useEffect(() => {}, []);
  const [inputText, setInputText] = useState("");
  const handleChangeInput = (e) => {
    setInputText(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(e, inputText);
    }
  };
  return (
    <Content className="navbar-container">
      <Flex gap="middle" vertical style={{ height: "inherit" }}>
        <Flex
          vertical={false}
          justify={"space-between"}
          style={{ height: "inherit" }}
        >
          <Content className="logo-container" key="logo">
            <Content>
              <Avatar src={logo} size={50} />
              <Text className="fs-20" strong style={{ paddingLeft: 5 }}>
                Logo
              </Text>
            </Content>

            <Space.Compact size="large" style={{ paddingRight: 15 }}>
              <Input
                addonBefore={<SearchOutlined />}
                placeholder="Enter để tìm kiếm"
                onKeyDown={handleKeyDown}
                onChange={handleChangeInput}
                value={inputText}
              />
            </Space.Compact>
          </Content>
          <Text strong key="blogs" className="blogs-container fs-20">
            Blogs
          </Text>
          <Content className="info-container" key="info">
            <Avatar src={avt} size={50} />
            <Text
              strong
              className="fs-20"
              style={{ width: "40%", paddingLeft: 5, paddingRight: 5 }}
            >
              {name}
            </Text>
          </Content>
        </Flex>
      </Flex>
    </Content>
  );
}
export default Navbar;
