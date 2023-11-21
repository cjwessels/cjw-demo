import { Box, useTheme, Typography } from '@mui/material';
import { tokens } from '../../theme';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display='flex'
      m='20px'
      sx={{
        minHeight: '84% !important',
        maxHeight: '100% !important',
        padding: ' 0 0 10px 0',
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        // display='flex'
        // alignItems='center'
        // justifyContent='center'
        // width='100%'
        margin='0 auto'
        // minHeight='80%'
        gap='20px'
        // sx={{
        //   backgroundColor:
        //     theme.palette.mode === 'dark' ? undefined : colors.blueAccent[200],
        // }}
      >
        <Box
          component='img'
          sx={{
            display: 'block',
            margin: '0 auto',
            width: '100%',
            maxWidth: { xs: 350 },
          }}
          alt='Nashua Cape Town'
          src={
            theme.palette.mode === 'dark'
              ? 'NashuaFranchiseLogo.png'
              : 'NashuaBlueFranchiseLogo.png'
          }
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
