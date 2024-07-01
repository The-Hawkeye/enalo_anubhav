import React from 'react';
import "./RegisterForm.css"
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const RegisterForm = () => (
  <Form
    name="basic"
    // labelCol={{
    //   span: 8,
    // }}
    // wrapperCol={{
    //   span: 16,
    // }}
    style={{
      // maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    layout='vertical'
  >
    <Form.Item
      // label="Username"
      name="username"
      style={{width:"100%"}}
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      // label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      // label="Re Enter Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
    <div className='checkBox'>
    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
    <p>Forgot Password</p>
    </div>
    

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" styles={{width :"100%"}}>
        Login
      </Button>
    </Form.Item>
  </Form>
);
export default RegisterForm;