import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function Home()
{
    const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(10),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
    return(
        <div>

              <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item sx={{p:5 ,bgcolor:'yellow'}}>g1</Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{p:5 ,bgcolor:'Orange'}}>g2</Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{p:5 ,bgcolor:'Blue'}}>g3</Item>
        </Grid>
        <Grid item xs={8}>
          <Item sx={{p:5 ,bgcolor:'Green'}}>g4</Item>
        </Grid>
      </Grid>
    </Box>
        </div>
    )
}
export default Home;