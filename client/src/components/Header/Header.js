import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import  Navigation from '../Navigation/Navigation'
import AuthNavigation from '../Navigation/AuthNavigation'
import { useTheme } from '@mui/material/styles'
import { Menu, Close } from '@mui/icons-material'
import Logo from '../Logo/Logo'
import AuthUser from '../AuthUser/AuthUser'

const Header =  () => {
  const [visibleMenu, setVisibleMenu] = useState(false)
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))
  const user = JSON.parse(localStorage.getItem('token'));
  return (
    <Box sx={{ backgroundColor: 'background.paper' }}>
      <Container sx={{ py: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo variant="primary" />
          <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}>
            <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
              <Menu />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', md: 'row' },

              transition: (theme) => theme.transitions.create(['top']),
              ...(matchMobileView && {
                py: 6,
                backgroundColor: 'background.paper',
                zIndex: 'appBar',
                position: 'fixed',
                height: { xs: '100vh', md: 'auto' },
                top: visibleMenu ? 0 : '-120vh',
                left: 0,
              }),
            }}
          >
            <Box /> {/* Magic space */}
            <Navigation />
            {user? <AuthUser user={user}/>:<AuthNavigation />}
          
            {visibleMenu && matchMobileView && (
              <IconButton
                sx={{
                  position: 'fixed',
                  top: 10,
                  right: 10,
                }}
                onClick={() => setVisibleMenu(!visibleMenu)}
              >
                <Close />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Header