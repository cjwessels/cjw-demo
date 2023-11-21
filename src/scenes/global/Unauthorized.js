import { useNavigate } from 'react-router-dom';

import { Box, Typography, Button, Grid } from '@mui/material';

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      width='100%'
      margin='0 auto'
      height='80%'
    >
      <Grid
        container
        direction='column'
        rowSpacing={2}
        style={{ display: 'flex', justifyContent: 'flex-end' }}
        gap='30px'
        textAlign='center'
      >
        <Grid>
          <Typography variant='h2'>Unauthorized</Typography>
        </Grid>
        <Grid>
          <Typography variant='h4'>
            You do not have access to the requested page.
          </Typography>
        </Grid>
        <Grid item>
          <Button variant='contained' color='secondary' onClick={goBack}>
            Go Back
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Unauthorized;
