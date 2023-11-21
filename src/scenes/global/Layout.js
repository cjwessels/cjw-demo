import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { tokens } from '../../theme';

import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const Layout = () => {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  const [collapsedMenu, setCollapsedMenu] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar
            width='200px'
            maxWidth='200px'
            className='sidebar'
            setMenu={(val) => setCollapsedMenu(val)}
          />
          {/* {console.log(location)} */}
          {/* {window.location.pathname   !== '/login'? <Sidebar
                    className='sidebar'
                />: undefined} */}
          <main
            style={{ marginLeft: '200px' }}
            // style={{ marginLeft: collapsedMenu ? '80px' : '270px' }}
            className='content'
            sx={{
              '& ::-webkit-scrollbar': {
                // display: "none !important",
                width: '2px !important',
              },
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
          >
            <Topbar />
            {/* {window.location.pathname   !== '/login'?  <Topbar />: undefined} */}
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default Layout;
