import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@mui/material/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import genres from './genre';

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

export default function GenreSelect() {
  const [genreName, setGenreName] = React.useState([]);

  const handleChange = (e) => {
    setGenreName(e.target.value);
  };

  return (
    <div>
        <InputLabel id="demo-multiple-checkbox-label">Genres</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={genreName}
          onChange={handleChange}
          input={<Input label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {genres.map((genre) => (
            <MenuItem key={genre.id} value={genre.name}>
              <Checkbox checked={genreName.indexOf(genre.genre) > -1} />
              <ListItemText primary={genre.genre} />
            </MenuItem>
          ))}
        </Select>
    </div>
  );
}
