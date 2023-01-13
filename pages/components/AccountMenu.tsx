import * as React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import { User } from '../../interfaces'
import Link from 'next/link'
import { styled } from '@mui/system'
import { getAuth, signOut } from "firebase/auth";
import { app } from '../../firebase'
import { useContext } from 'react'
import { UserContext } from '../providers/user-provider'


interface AccountMenuProps {
  user: User
}

const StyledLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
  verticalAlign: 'center'
})

export const AccountMenu: React.FC<AccountMenuProps> = ({user}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const auth = getAuth(app)
  const { setUser } = useContext(UserContext);

  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogout = async () => {
    await signOut(auth)
    setUser({} as User)
  }
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {user.id && <Typography sx={{ color: '#009688', fontWeight: 800, minWidth: 100 }}>{user.displayName}</Typography>}
        <Tooltip title="Account settings">
          <IconButton
            color='primary'
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar  sx={{ width: 32, height: 32 }}>
              { user.displayName && user.displayName[0]}
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
              mr: 1,
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
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* TODO: create a isLoggedIn utility function */}
        {
          user?.id ? (
            <div>
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
              <Divider />
            </div>
          ) : (
            <div>
              <MenuItem>
                <StyledLink href="signup">Sign up</StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink href="login">Login</StyledLink>
              </MenuItem>
            </div>
          )
        }
          <MenuItem>Help</MenuItem>
          {
            user.id && (
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            )
          }
      </Menu>
    </>
  )
}