import { useState, useEffect } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, Typography, useTheme, Divider, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';

// -- Menu Icons -- //
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import darkLogo from '../../img/cjw_profile.jpg';
import lightLogo from '../../img/cjw_profile.jpg';

import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = () => {
  const [path, setPath] = useState(window.location.pathname);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // -- REFRESH PATHS -- //
  const initialPath = () => {
    if (path.includes('/commissions')) {
      setSelected('Commissions');
    } else if (path.includes('/deals')) {
      setSelected('Deals');
    } else if (path.includes('/sales-team')) {
      setSelected('Sales Team');
    } else if (path.includes('/users')) {
      setSelected('Users');
    } else {
      setSelected('Dashboard');
    }
  };

  const [selected, setSelected] = useState('Dashboard');
  const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      <MenuItem
        active={selected === title}
        style={{
          color:
            selected === title
              ? theme.palette.menu.active
              : theme.palette.menu.default,
        }}
        onClick={() => {
          setSelected(title);
          localStorage.setItem('from', to);
        }}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };
  useEffect(() => {
    setPath(window.location.pathname);
    initialPath();
  }, []);
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          zIndex: '999',
          minHeight: '100vh',
          maxHeight: '100vh',
          overflowY: 'auto',
          m: ' 0 2px 2px 0',
          borderRadius: '2px !important',
          padding: '0px',
          boxShadow: '6px 4px 15px -1px rgba(0,0,0,0.75)',
          background: colors.primary[400],
          '& .pro-sidebar-inner': {
            background: `${colors.primary[400]} !important`,
          },
          '& .pro-icon-wrapper': {
            backgroundColor: 'transparent !important',
          },
          '& .pro-inner-item': {
            padding: '5px 35px 5px 20px !important',
          },
          '& .pro-inner-item:hover': {
            color: `${theme.palette.menu.hover} !important`,
          },
          '& .pro-menu-item.active': {
            color: `${theme.palette.menu.active} !important`,
          },
          '::-webkit-scrollbar': {
            width: '4px !important',
          },
          '::-webkit-scrollbar-track': {
            background: colors.primary[100],
          },
          '::-webkit-scrollbar-thumb': {
            background: colors.blueAccent[600],
          },
        }}
      >
        <ProSidebar collapsed={false} width='200px'>
          <Menu iconShape='square'>
            <Box height='100px'>
              <Grid container></Grid>
              <Box
                component='img'
                display='inline'
                textAlign='start'
                justifyContent='space-between'
                // margin='0 auto'
                p='0 10px 10px 10px'
                alt='Chris Wessels Frontend Developer'
                src={theme.palette.mode === 'dark' ? darkLogo : lightLogo}
                // maxWidth='40%'
                maxHeight='100%'
              />
              <Box
                width='160px'
                display='inline'
                justifyContent='center'
                alignItems='center'
              >
                CJW
              </Box>
            </Box>

            <Box mb='0px'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <Typography
                  variant='h3'
                  sx={{
                    fontSize: '2em',
                    textAlign: 'center !important',
                    color: colors.blueAccent[100],
                    fontWeight: 'bold',
                  }}
                >
                  MENU
                </Typography>
              </Box>
              <Divider
                color={colors.blueAccent[100]}
                sx={{ margin: '0 4px 0 4px' }}
              />
              <Box textAlign='center'>
                <Typography
                  variant='h2'
                  color={colors.grey[100]}
                  fontWeight='bold'
                  sx={{ m: '10px 0 0 0' }}
                ></Typography>
              </Box>
              <Box paddingLeft={'1px'}>
                <Item
                  title='Dashboard'
                  to='/'
                  icon={
                    <HomeOutlinedIcon
                      sx={{
                        color:
                          selected === 'Dashboard'
                            ? theme.palette.menu.active
                            : theme.palette.menu.default,
                        '&:hover': {
                          color: 'red !important',
                        },
                      }}
                    />
                  }
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography
                  variant={'h'}
                  color={colors.grey[300]}
                  sx={{ m: '15px 0 5px 20px' }}
                >
                  Inventory
                </Typography>
                <Item
                  title='Inventory Items'
                  to='/items'
                  icon={
                    <NewspaperIcon
                      sx={{
                        color:
                          selected === 'Items'
                            ? theme.palette.menu.active
                            : theme.palette.menu.default,
                      }}
                    />
                  }
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title='Item Categories'
                  to='/categories'
                  icon={
                    <BallotOutlinedIcon
                      sx={{
                        color:
                          selected === 'Categories'
                            ? theme.palette.menu.active
                            : theme.palette.menu.default,
                      }}
                    />
                  }
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title='Employees'
                  to='/employees'
                  icon={
                    <ContactsOutlinedIcon
                      sx={{
                        color:
                          selected === 'Employees'
                            ? theme.palette.menu.active
                            : theme.palette.menu.default,
                      }}
                    />
                  }
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography
                  variant={'h4'}
                  color={colors.grey[300]}
                  sx={{ m: '15px 0 5px 20px' }}
                >
                  Admin
                </Typography>

                <Item
                  title='Users'
                  to='/users'
                  icon={
                    <PeopleOutlinedIcon
                      sx={{
                        color:
                          selected === 'Users'
                            ? theme.palette.menu.active
                            : theme.palette.menu.default,
                      }}
                    />
                  }
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          zIndex: '998',
          m: ' 0 2px 2px 0',
          borderRadius: '2px !important',
          padding: '0px',
          '& .pro-sidebar-inner': {
            background: `${colors.primary[100]} !important`,
          },
          '& .pro-icon-wrapper': {
            backgroundColor: 'transparent !important',
          },
          '& .pro-inner-item': {
            padding: '5px 35px 5px 20px !important',
          },
          '& .pro-inner-item:hover': {
            color: `${
              theme.palette.mode === 'dark'
                ? colors.blueAccent[400]
                : colors.grey[900]
            } !important`,
          },
          '& .pro-menu-item.active': {
            color: `${
              theme.palette.mode === 'dark'
                ? colors.blueAccent[300]
                : colors.grey[800]
            } !important`,
          },
          '& ::-webkit-scrollbar': {},
          '& ::-webkit-scrollbar-track': {
            background: '#fff',
          },
          '& ::-webkit-scrollbar-thumb': {
            background: `${
              theme.palette.mode === 'dark'
                ? colors.blueAccent[300]
                : colors.blueAccent[100]
            } !important`,
          },
        }}
      ></Box>
    </>
  );
};

export default Sidebar;
