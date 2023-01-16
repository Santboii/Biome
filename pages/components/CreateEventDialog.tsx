import { FormEventHandler, useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Box, Fab } from '@mui/material'
import { Add } from '@mui/icons-material'
import CategoryMultiSelect from './CategoryMultiSelect'
import { useForm } from 'react-hook-form'
import { Category } from '../../interfaces'
import { db } from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'


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

  const onSubmit = async (eventForm: unknown) => {
    try { 
      await addDoc((collection(db, 'events')), eventForm)
      setOpen(false)
    } catch (error) {
      console.log(error)
    }
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
        <DialogTitle sx={{fontWeight: 800}}>Create local Biome event!</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContentText sx={{marginBottom: 2}}>
              Fill out the event details below to create a local event. Once created, other nearby users will be able to view and join it!
            </DialogContentText>
            <TextField
              {...register("title")}
              label="Title"
              variant="outlined"
              fullWidth
              sx={{marginBottom: 2}}
            />
            <Box marginBottom={2} sx={{display: 'flex', gap: 1}}>
              <TextField
                label="Starts at"
                type="datetime-local"
                defaultValue={Date.now()}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{width: '50%'}}
                {...register("startTime")}
              />
              <TextField
                label="Ends at"
                type="datetime-local"
                defaultValue={Date.now()}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{width: '50%'}}
                {...register("endTime")}
              />
            </Box>
            <TextField
              label="Description"
              multiline
              rows={4}
              fullWidth
              {...register('description')}       
            />
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{marginBottom: 2}}
              {...register('location')}
            />
            <CategoryMultiSelect register={register} />
            <DialogActions sx={{marginTop: 3}}>
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