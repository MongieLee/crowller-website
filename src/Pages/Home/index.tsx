import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Button, message } from "antd";
import { Redirect } from "react-router-dom";
import Echarts from "../Charts";

interface CrowlleItem {
  title: string;
  grade: number;
  time: string;
}

const Home: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [lineData, setLineData] = useState<CrowlleItem[]>([]);
  useEffect(() => {
    axios.get("/api/isLogin").then((res) => {
      if (!res.data?.data) {
        setIsLogin(false);
      }
      setIsLoading(true);
    });

    axios.get("/api/showData").then((res) => {
      if (res.data?.data) {
        setLineData(res.data.data);
      }
    });
  }, []);

  const handleLogout = () => {
    axios.get("/api/logout").then((res) => {
      if (res.data?.data) {
        setIsLogin(false);
      }
    });
  };

  const handleCrowllerClick = () => {
    axios.get("/api/getData").then((res) => {
      if (res.data?.data) {
        message.success("爬取成功");
        axios.get("/api/showData").then((res) => {
          if (res.data?.data) {
            setLineData(res.data.data);
          }
        });
      }
    });
  };

  if (isLogin) {
    if (isLoading) {
      return (
        <div className="home-page">
          <div style={{ marginBottom: 20, marginTop: 20, textAlign: "center" }}>
            <Button
              type="primary"
              style={{ marginRight: "25px" }}
              onClick={handleCrowllerClick}
            >
              获取内容
            </Button>
            <Button onClick={handleLogout} type="primary">
              退出登录
            </Button>
          </div>
          <Echarts data={lineData} />
        </div>
      );
    }
    return null;
  }
  return <Redirect to="/login" />;
};

export default Home;
