import fern from './fern.svg'
import { Switch, Route, NavLink, useLocation } from 'react-router-dom'
import Register from '../register'
import { Listings } from '../listings'
import { ListingDetail } from '../listing-detail'
import { SignIn } from '../sign-in'
import css from './nav-style.module.css'
import { Layout, Menu, Input, Row, Col, Divider } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { Theme } from '../theme-manager/theme'

const { Header, Content, Footer } = Layout

const Navigation = () => {
  const onSearch = value => console.log(value)

  const location = useLocation()

  console.log(location.pathname)

  return (
    <Layout>
      <Header className={css[Theme]}
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%'
        }}>
        <Row justify='space-between'>
          <Col xs={0} sm={0} md={2} span={2}>
            <NavLink className={css.logo} to="/">
              <img
                alt=""
                src={fern}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{''}</NavLink>
            <Divider type="vertical" />
          </Col>
          <Col span={12}>
            {
              location?.pathname === '/listings' &&
              <Input placeholder="search a class" prefix={<SearchOutlined />} />
            }
          </Col>
          <Col span={10} push={3}>
            <Menu theme={Theme} mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"><NavLink to="/listings">All Classes</NavLink></Menu.Item>
              <Menu.Item key="2"><NavLink to="/register">register</NavLink></Menu.Item>
              <Menu.Item key="3"><NavLink to="/signIn">Sign in</NavLink></Menu.Item>
            </Menu>
          </Col>

        </Row>
      </Header>
      <Content className={css['site-layout']} style={{ padding: '0 50px', marginTop: 64 }}>
        <div className={css['site-layout-background']} style={{ padding: 24, minHeight: 380 }}>
          <Switch>
            <Route exact path="/" component={Listings} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/register" component={Register} />
            <Route path="/listings/:id" component={ListingDetail} />
            <Route path="/listings" component={Listings} />
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Remote Assembly ©2021 Created by Barin | Icons by <a href='https://www.flaticon.com/authors/smashicons'>
          Flaticon</a>
      </Footer>
    </Layout>
  )
}

export default Navigation