import React from 'react';
import styled, { css } from 'styled-components';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import Frame75 from '../component/Images/Frame 75.png';
import Frame82 from '../component/Images/Frame 82.png';
import Frame100 from '../component/Images/Frame 100.png'
import Frame101 from '../component/Images/Frame 101.png'
import Frame102 from '../component/Images/Frame 102.png'
import CountdownTimer from './CountdownTimer';

const CustomMenuItem = styled(MenuItem)`
  && {
    color: #E2B0FF;
  }
`;

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <CustomMenuItem onClick={handleMenuClose}>
        <img src={Frame100} alt="" style={{ width: 50, height: 50 }} />
      </CustomMenuItem>
      <CustomMenuItem onClick={handleMenuClose}>
        <img src={Frame101} alt="" style={{ width: 50, height: 50 }} />
      </CustomMenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundColor: ' rgb(255 255 255 / 0%)',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        flexShrink: 0,
        position: 'static',
        boxShadow: 'none', // Remove the box-shadow
      }}>
        <Toolbar>
          <Typography noWrap sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', position: 'relative' }}>
            <img src={Frame75} alt="" style={{ width: 50, height: 50, position: 'relative', zIndex: 1, marginRight: 'Auto' }} />
            <Box
              sx={{
                width: '157px',
                height: '39px',
                backgroundColor: '#E2B0FF',
                borderRadius: '3px',
                position: 'absolute',
                top: '8px',
                left: '25px',
                fontSize: '18px',
                fontWeight: 'bold',
                fontStyle: 'oblique',
                color: 'red',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CountdownTimer />
            </Box>
          </Typography>
          <Typography noWrap sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', position: 'relative' }}>
            <img src={Frame82} alt="" style={{ width: 50, height: 50, position: 'relative', zIndex: 1,  marginLeft: 'auto', marginRight: '190px' }} />
            <Box
              sx={{
                width: '157px',
                height: '39px',
                backgroundColor: '#E2B0FF',
                borderRadius: '3px',
                position: 'absolute',
                top: '5px',
                right: '50px', // Align to the right
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
            </Box>
          </Typography>
          <IconButton
            size="large"
            edge="start"
            aria-label="open sound menu"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            sx={{ mr: 2 }}
            
          >
            <img src={Frame102} alt="" style={{ width: 50, height: 50,  display: 'grid',marginRight: '-20px', placeItems: 'end'}} />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
