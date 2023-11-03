import React from "react";
import { Avatar, Typography, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../assets/images/cryptocurrency.png";

const Navbar = () => {
  return (
    <section className="nav-container">
      <figure className="logo-container">
        <Avatar src={icon} size="large"/>
        <figcaption>
          <Typography.Title level={2} className="logo">
            <Link to="/">CryptoWorld</Link>
          </Typography.Title>
        </figcaption>
      </figure>
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined/>}>
            <Link to="/" >Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">CryptoCurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
    </section>
  );
};

export default Navbar;
