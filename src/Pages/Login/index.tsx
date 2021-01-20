import { Form, Input, Button, Checkbox } from "antd";
import { useState, useEffect } from "react";
import "./index.css";
import qs from "qs";
import axios from "axios";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const App: React.FC = () => {
  useEffect(() => {}, []);
  const onFinish = (values: any) => {
    console.log("Success:", values);
    axios
      .post(
        "/api/login",
        qs.stringify({
          password: values.password,
        }),
        {
          headers: {
            "Content-type": "application/x-www-form-urlencode",
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: "请输入密码!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
