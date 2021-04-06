import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Badge, Container } from '@material-ui/core'
import { ShoppingBasket } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { cartSelector } from '../../features/cart/cartSlice'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const cart = useSelector(cartSelector)

  return (
    <Container maxWidth='lg' fixed>
      <AppBar position='fixed' color='secondary'>
        <Toolbar>
          <Typography variant='h6' style={{ marginRight: 'auto' }}>
            SAAD'S SHOP
          </Typography>
          <div
            style={{
              display: 'flex',
              width: '120px',
              justifyContent: 'space-between',
            }}
          >
            <NavLink to='/' end>
              Products
            </NavLink>
            <Badge color='primary' badgeContent={cart.length}>
              <NavLink to='/cart'>
                <ShoppingBasket />
              </NavLink>
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default Header
