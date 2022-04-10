import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormControl, Input, InputLabel, Select, MenuItem, TextField } from '@material-ui/core';
import GenreSelect from './home/GenreSelect';
import ArtistSelect from './home/ArtistSelect';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    maxWidth: 300,
  },
  child: {
    minWidth: 240,
    maxWidth: 240,
    margin: theme.spacing.unit,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: theme.palette.primary.light,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          FIND MOVIES BY:
        </Typography>
        
        <FormControl className={classes.child}>
            <InputLabel htmlFor='my-input'>Movie Name</InputLabel>
            <Input id='my-input' aria-describedby="my-helper-text" />
        </FormControl>

        <FormControl className={classes.child}>
            <GenreSelect />
        </FormControl>

        <FormControl className={classes.child}>
            <ArtistSelect />
        </FormControl>

        <FormControl className={classes.child}>
            <TextField id='dateStart' label='Release Date Start' type='date' defaultValue='yyyy-mm-dd' className={classes.textField} InputLabelProps={{shrink:true,}} />
        </FormControl>

        <FormControl className={classes.child}>
            <TextField id='dateEnd' label='Release Date End' type='date' defaultValue='yyyy-mm-dd' className={classes.textField} InputLabelProps={{shrink:true,}} />
        </FormControl>

      </CardContent>
      <CardActions>
        <Button className={classes.child} variant='contained' color='primary'>APPLY</Button>
      </CardActions>
    </Card>
  );
}
