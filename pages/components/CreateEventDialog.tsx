import { FormEventHandler, useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Fab } from '@mui/material'
import { Add } from '@mui/icons-material'
import CategoryMultiSelect from './CategoryMultiSelect'
import { useForm } from 'react-hook-form'
import { Category } from '../../interfaces'


interface CreateEventForm {
  title: string
  description: string
  location: string
  categories: Category[]
}

export const CreateEventDialog = () => {
  const { register, handleSubmit } = useForm()
  
  const [open, setOpen] = useState(false)


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (d: unknown) => {
    console.log(d)
  }

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContentText>
              Fill out the event details below to create your new Biome event!
            </DialogContentText>
            <TextField
              {...register("title")}
              label="Title"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Starts at"
              type="datetime-local"
              defaultValue={Date.now()}
              sx={{ width: '50%' }}
              InputLabelProps={{
                shrink: true,
              }}
              {...register("startTime")}
            />
            <TextField
              label="Ends at"
              type="datetime-local"
              defaultValue={Date.now()}
              sx={{ width: '50%' }}
              InputLabelProps={{
                shrink: true,
              }}
              {...register("endTime")}
            />
            <TextField       
              {...register('description')}       
              label="Description"
              multiline
              rows={4}
              fullWidth
            />
            <TextField
              {...register('location')}
              label="City"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <CategoryMultiSelect register={register} />
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