import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Button } from "antd";
import { Redirect } from "react-router-dom";

const Home: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios.get("/api/isLogin").then((res) => {
      if (!res.data?.data) {
        setIsLogin(false);
        setIsLoading(true);
      }
    });
  }, []);
  if (isLogin && isLoading) {
    return (
      <div className="home-page">
        <Button type="primary">获取内容</Button>
        <Button type="primary">展示内容</Button>
        <Button type="primary">退出登录</Button>
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
};

export default Home;
