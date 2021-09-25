import React, { useState } from 'react'
import { Card, Layout, Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd'
import ReCAPTCHA from 'react-google-recaptcha'

const { Header, Footer, Sider, Content } = Layout
const { Option } = Select

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  }

  const [autoCompleteResult, setAutoCompleteResult] = useState([])

  const onRecaptcha = async v => {
    console.log(v)

    const requestOptions = {
      method: 'POST',
      headers: { "Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json' },
      body: JSON.stringify({ recaptchaAnswerFromClient: v })
  }

    const response = await fetch(`http://localhost:4000/users/recaptcha`, requestOptions)

    const result = await response.json()

    console.log(result)
  }

  return (
    <Row justify='center' align='middle'>
      <Card title="Welcome to RemoteAssembly!" bordered={false} style={{ width: 500 }}>
        <Form
          layout="vertical"
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="Enter your email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Create a password"
            rules={[
              {
                required: true,
                message: 'Please enter a password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }

                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="username"
            label="Enter a username"
            tooltip="What other will see you as"
            rules={[
              {
                required: true,
                message: 'Please enter your Username!',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>

        <Form.Item>
          <ReCAPTCHA
            sitekey='6LcQFmYcAAAAAFC-Ye_UolCyqz2XIFYRiAlyQVWc'
            onChange={onRecaptcha}
          />
        </Form.Item>

      </Card>
    </Row>
  )
}

export default Register