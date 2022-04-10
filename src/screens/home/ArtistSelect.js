import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@mui/material/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import artists from './artists';

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//       maxWidth: 300,
//     },
//     chips: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     chip: {
//       margin: 2,
//     },
//     noLabel: {
//       marginTop: theme.spacing(3),
//     },
// }));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function ArtistSelect() {
  const [artistName, setArtistName] = React.useState([]);

  const handleChange = (e) => {
    setArtistName(e.target.value);
  };

  return (
    <div>
        <InputLabel id="demo-multiple-checkbox-label">Artists</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={artistName}
          onChange={handleChange}
          input={<Input label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {artists.map((artist) => (
            <MenuItem key={artist.id} value={(artist.first_name+" "+artist.last_name)}>
              <Checkbox checked={artistName.indexOf(artist.first_name+" "+artist.last_name) > -1} />
              <ListItemText primary={(artist.first_name+" "+artist.last_name)} />
            </MenuItem>
          ))}
        </Select>
    </div>
  );
}
