import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../../store'
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Logout from '@mui/icons-material/Logout'
import history from '../../history'
import {ThemeProvider} from '@material-ui/core'
import theme from '../theme'

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 65px;
  color: #fff;
  font-size: 14px;
  border-bottom: 1px solid #fff;
  align-items: center;

  a {
    color: #fff;
    margin-right: 1rem;
  }
  a:visited {
    color: #fff;
  }

  @media (max-width: 800px) {
    border: none;
    background: #132A4A;
    padding: 0rem 1rem 0rem 1rem;
  }

`
const LogoWrapper = styled.div`
  justify-content: center;
  width: 33%;
  text-align: center;
`
const ProfileWrapper = styled.div`
  width: 33%;
  div {
    float: right;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 33%;
`
const DesktopMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 33%;

  @media (max-width: 800px) {
    display: none;
  }
`
const Logo = styled.img`
  height: 30px;
  width: auto;
  cursor: pointer;
`
const MobileMenu = styled.ul`
  display: none;
  list-style-type: none;
  
  @media (max-width: 800px) {
    display: block;
  }
`
const HamburgerMenu = styled.div`
  width: 30%;
  z-index: 20;
  display: none;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    z-index: 20;
    left: 20px;
    top: 25px;
  }
`
const Bar = styled.div`
  cursor: pointer;
  background-color: #fff;
  height: 4px;
  width: 30px;
  display: block;
  margin-bottom: 5px;
  border-radius: 2px;
`

const Navbar = () => {
  const user = useSelector(state => state.user)
  const isLoggedIn = user.id

  const dispatch = useDispatch()

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
    history.go('/login')
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Nav>
      <DesktopMenu>
        <Link to="/membership">Membership</Link>
        <Link to="/home">Account</Link>
        {/* <Link to="/benefits">Benefits</Link>
        <Link to="/feed">Feed</Link> */}
      </DesktopMenu>
      <HamburgerMenu
          onClick={() => setDisplay(display === 'flex' ? 'none' : 'flex')}
        >
          <Bar />
          <Bar />
          <Bar />
      </HamburgerMenu>
      <LogoWrapper>
        <Link to="/home">
          <Logo src="./images/fdlogo.png" />
        </Link>
      </LogoWrapper>
      <ProfileWrapper>
        <ThemeProvider theme={theme}>
          <Box
            sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ml: 2}}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{width: 36, height: 36}}>
                  {user.firstName[0]}
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0
                }
              }
            }}
            transformOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          >
            <MenuItem>
              <Avatar />
              {user.firstName + ' ' + user.lastName}
            </MenuItem>
            <MobileMenu className="mobileMenu">
              <li>
                <MenuItem onClick={() => history.push('/membership')}>
                  Membership
                </MenuItem>
              </li>
              <li>
                <MenuItem onClick={() => history.push('/home')}>
                  Account
                </MenuItem>
              </li>
              {/* <li>
                <MenuItem onClick={() => history.push('/benefits')}>
                  Benefits
                </MenuItem>
              </li>
              <li>
                <MenuItem onClick={() => history.push('/feed')}>Feed</MenuItem>
              </li> */}
            </MobileMenu>
            <MenuItem onClick={(e) => handleLogout(e)}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </ThemeProvider>
      </ProfileWrapper>
    </Nav>
  )
}

export default Navbar
