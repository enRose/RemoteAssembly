import fern from './fern.svg'
import { Switch, Route, NavLink } from 'react-router-dom'
import Register from '../register'
import { Listings } from '../listings'
import { ListingDetail } from '../listing-detail'
import css from './nav-style.module.css'
import { Layout, Menu } from 'antd'
import classNames from 'classnames'

const { Header, Content, Footer } = Layout

//Attribution icon
{/* <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

const themeConfig = 'light'

const theme = classNames({
  'light': themeConfig === 'light',
  'dark': themeConfig === 'dark'
})

const Navigation = () => {
  return (
    <Layout>
      <Header className={css[theme]}
        style={{ 
        position: 'fixed', 
        zIndex: 1, 
        width: '100%'
        }}>
        <NavLink className={css.logo} to="/"><img
          alt=""
          src={fern}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}</NavLink>
        <Menu theme={theme} mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><NavLink to="/listings">All Classes</NavLink></Menu.Item>
          <Menu.Item key="2"><NavLink to="/register">register</NavLink></Menu.Item>
        </Menu>
      </Header>

      <Content className={css['site-layout']} style={{ padding: '0 50px', marginTop: 64 }}>
        <div className={css['site-layout-background']} style={{ padding: 24, minHeight: 380 }}>
          <Switch>
            <Route exact path="/" component={Listings} />
            <Route path="/register" component={Register} />
            <Route path="/listings/:id" component={ListingDetail} />
            <Route path="/listings" component={Listings} />
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Remote Assembly ©2021 Created by Barin</Footer>
    </Layout>
  )
}

export default Navigation