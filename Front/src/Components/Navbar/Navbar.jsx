import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Header = styled(AppBar)({
  background: '#111111',
});

const Tabs = styled(NavLink)({
  fontSize: '20px',
  marginRight:'20px',
  color:'inherit',
  textDecoration:'none',

});

const Navbar = () => {
  return (
    <Header position='static'>
      <Toolbar>
        <Tabs to='/'>All Users</Tabs>
        <Tabs to='/emplo'>Add User</Tabs>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
