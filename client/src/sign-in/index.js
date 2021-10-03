import { Form, Input, Button, Checkbox, Row, Card } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

export const SignIn = () => {
	const onFinish = (values) => {
		console.log('Received values of form: ', values)
	}

	return (
		<Row justify='center' align='middle'>
			<Card title="" bordered={false} style={{ width: 500 }}>

				<Form
					name="login-form"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Password"
						name="password"
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item>
						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>

						<a className="login-form-forgot" href="">
							Forgot password
						</a>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button">
							Log in
						</Button>

					</Form.Item>
				</Form>
			</Card>
		</Row>
	)
}

export default SignIn