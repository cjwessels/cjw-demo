import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';

const Header = ({ title, subtitle, alignment }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      mb='30px'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        height: '100%',
        alignItems: 'center',
        background: `${colors.primary[400]} !important`,
      }}
    >
      <Typography
        variant='h2'
        color={colors.grey[100]}
        fontWeight='bold'
        sx={{ mb: '5px' }}
        textAlign={alignment}
        textTransform='uppercase'
      >
        {title}
      </Typography>
      <Typography
        variant='h5'
        color={colors.greenAccent[400]}
        textAlign={alignment}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
