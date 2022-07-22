import Box from '@mui/material/Box';
import HeroCard from './card'
import React, { useState, useEffect } from 'react';
import Query from '../source/query'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ModalHeroes from './modal'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const Dashboard = () =>  {
  const [heroes, setHeroes] = useState();
  const [create, setData] = useState([]);
  const [open, setOpen] = useState(false);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    if(!heroes) {
      Query.getHeroes().then(res => {
        if(!res.error) {
          setHeroes(res)
        } 
      })
    }
  });

  const openModal  = () =>  {
    if(open) {
      setOpen(false)
    }else {
      setData([])
      setOpen(true)
    }
  }

  const closeModal  = () =>  {
      setOpen(false)
  }

  const showModelEdit = (data) => {
    setData(data)
    setOpen(true)
  }

  console.log(create)
  return (
    <Box sx={{ flexGrow: 'flex' }} style={{ width: "80%", margin: 'auto', paddingTop: 20}}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Heroes
            </Typography>
            <Button color="inherit" onClick={openModal}>Create</Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Box component="main" sx={{ p: 3 }} style={{background: "#f9f9f9"}}>
        <HeroCard  heroes={heroes}  closeModal={closeModal} showModelEdit={showModelEdit}/>
      </Box>
      <ModalHeroes open={open} closeModal={closeModal} create={create}/>
    </Box>
  );
}


export default Dashboard



