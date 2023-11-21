import { useNavigate, Navigate } from 'react-router-dom';

import {
  Box,
  IconButton,
  useTheme,
  Typography,
  Button,
  Popover,
  Grid,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ColorModeContext, tokens } from '../../theme';
import LogoutIcon from '@mui/icons-material/Logout';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Header from '../../components/Header';

// -- FUTURE USE -- //
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Topbar = () => {
  const navigateNew = useNavigate();
  const location = useLocation();

  const [userAnchorEl, setUserAnchorEl] = useState(null);
  const [userOpen, setUserOpen] = useState(false);

  const handleUserClose = () => {
    setUserAnchorEl(null);
    setUserOpen(false);
  };
  const handleUserClick = (event) => {
    setUserAnchorEl(event.currentTarget);
    setUserOpen((previousOpen) => !previousOpen);
  };
  const handleUserLogout = () => {
    setUserAnchorEl(null);
    setUserOpen(false);
    localStorage.clear();
    navigateNew(`/login`, { replace: true });
  };
  const headerTitle = (path) => {
    const editId = path.substring(path.indexOf(':') + 1);
    switch (path) {
      case '/':
        return 'DASHBOARD';
      case '/deals':
        return 'DEALS';
      case '/deals/new_deal':
        return 'NEW DEALS';
      case `/deals/edit_deal/:${editId}`:
        return `EDITING DEAL ${editId}`;
      case `/deals/view_deal/:${editId}`:
        return `VIEWING DEAL ${editId}`;
      case '/commissions':
        return 'COMMISSIONS';
      case `/commissions/list/:${editId}`:
        return `COMMISSIONS REPORT # ${editId}`;
      case `/commissions/review/:${editId}`:
        return 'COMMISSION REVIEW ';
      case '/users':
        return 'USERS';
      case '/users/new_user':
        return 'NEW USER';
      case `/users/edit_user/:${editId}`:
        return 'EDIT USER';
      case '/sales-team':
        return 'SALES TEAM';
      case '/sales-team/new_rep':
        return 'NEW TEAM MEMBER';
      case `/sales-team/edit_rep/:${editId}`:
        return 'EDIT TEAM MEMBER';
      default:
        return 'NASHUA CAPE TOWN';
    }
  };

  useEffect(() => {
    const path = headerTitle(location.pathname);
    setTitle(path);
  }, [location]);

  const [title, setTitle] = useState('');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const reportingDate = `${new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, '/')}`;

  return (
    <Box
      // display='flex'
      // justifyContent='space-between'
      // p={2}
      // p={2}
      m='20px 0 20px 0'
      sx={{
        background: `${colors.primary[400]} !important`,
        minHeight: '100px !important',
        minWidth: '100%',
      }}
      // display='block'
      justifyContent='center'
      alignContent='center'
    >
      <Box

      // display='flex'
      // w='10%'
      // alignItems='center'
      // justifyContent='center'
      // margin='0 auto'
      // gap='30px'
      >
        <Grid
          p='15px'
          justifyContent='center'
          alignContent='center'
          container
          direction='row'
          // alignItems='flex-start'
          rowSpacing={2}
          columnSpacing={{ xs: 8 }}
          rowGap={0}
          columnGap={0}
          minHeight='100%'
          minWidth='100%'
          width='100%'
        >
          <Grid xs={2} item>
            <Typography
              alignment='center'
              variant='h3'
              color={colors.grey[100]}
              fontWeight='bold'
              // sx={{ mb: '5px' }}
            >
              {reportingDate}
            </Typography>
          </Grid>
          <Grid xs={8} item>
            <Header title={title} alignment='end' />
          </Grid>
          <Grid xs={2} item alignment='center'>
            {/* ICONS */}
            <IconButton onClick={colorMode.toggleColorMode} alignment='center'>
              {theme.palette.mode === 'dark' ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
            <IconButton alignment='center'>
              <PersonOutlinedIcon onClick={handleUserClick} />
            </IconButton>
            {/*         
        //-- FUTURE USE -- //        
        <IconButton>
        <Badge badgeContent={4} color='secondary' >          
          <NotificationsOutlinedIcon />        
        </Badge>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        */}
          </Grid>
        </Grid>
      </Box>
      <Box
        display='flex'
        w='80%'
        alignItems='center'
        justifyContent='center'
        margin='0 auto'
      ></Box>

      <Popover
        sx={{ mt: '15px' }}
        id={'userPopper'}
        open={userOpen}
        onClose={handleUserClose}
        anchorEl={userAnchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{ bgcolor: colors.primary[400] }}>
          <Button
            variant='outlined'
            size=' small'
            startIcon={<LogoutIcon />}
            sx={{
              color: colors.greenAccent[300],
              borderColor: colors.greenAccent[300],
            }}
            onClick={() => {
              handleUserLogout();
            }}
          >
            Logout
          </Button>
        </Box>
      </Popover>
    </Box>
  );
};

export default Topbar;
