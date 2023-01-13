import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Fab } from '@mui/material'
import { Add } from '@mui/icons-material'
import { noop } from '../../utils'



export const CreateEventDialog = () => {
  const [open, setOpen] = useState(false)


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {}

  return (
    <>
      <Fab
        sx={{
          position: 'fixed',
          bottom: 50,
          right: 50
        }}
      color="primary"
       onClick={handleClickOpen}
      >
        <Add />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Event</DialogTitle>
        <DialogContent>
          <form onSubmit={noop}>
            <DialogContentText>
              Fill out the event details below to create your new Biome event!
            </DialogContentText>
            <TextField
              name="title"
              label="Title"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              name="location"
              label="City"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button variant='contained' color="primary" type="submit">Create</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CreateEventDialog