import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Mutation from '../source/mutation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from "@mui/material/styles";

const HeroCard = ({heroes, closeModal, showModelEdit}) =>  {
  const matches = useMediaQuery('(min-width:1200px)');

  const handelDeleteHeroes = (event) => {
    let id = event.target.id
    Mutation.RemoveHero({id: id}).then(res => {
      if(!res.error) {
        toast(`${res.name} is already Deleted!`)
      } 
    })
  }

  return (
      <>
        {
           heroes ? heroes.map((e) => (
                <Card onClick={(event) => showModelEdit((event, e))} 
                    style={matches ? { width: '23.2%',  display: 'inline-block', marginLeft: 20} : { display: 'inline-block', marginLeft: 20 , marginBottom: 20}}
                    key={e._id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://images2.alphacoders.com/505/thumb-1920-505544.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {e.name}
                    </Typography>
                    <Typography variant="body2" style={{ marginBottom: 2}}>
                       Skills: <b>{e.skills.toString().replace(",", ", ")}</b>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" >
                      {e.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" id={e._id} onClick={handelDeleteHeroes}>Delete</Button>
                </CardActions>
                <ToastContainer />
              </Card>
           )) : ""
        }
        </>
  );
}

export default HeroCard