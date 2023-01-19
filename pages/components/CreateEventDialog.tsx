import { FormEventHandler, useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Box, Fab, ImageList, ImageListItem } from '@mui/material'
import { Add } from '@mui/icons-material'
import CategoryMultiSelect from './CategoryMultiSelect'
import { useForm } from 'react-hook-form'
import { db } from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { mapCategoryToImage } from '../../utils'

export const CreateEventDialog = () => {
  const { register, handleSubmit } = useForm()
  
  const [open, setOpen] = useState(false)


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (eventForm: any) => {
    try { 
      eventForm.background_image = mapCategoryToImage(eventForm.categories[0])
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
            {/* event title */}
            <TextField
              {...register("title")}
              label="Title"
              variant="outlined"
              fullWidth
              sx={{marginBottom: 2}}
            />
            {/* event starts_at, ends_at */}
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
            {/* event description */}
            <TextField
              label="Description"
              multiline
              rows={4}
              fullWidth
              {...register('description')}       
            />
            {/* event location */}
            <TextField
              label="Location"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{marginBottom: 2}}
              {...register('location')}
            />
            {/* event category select */}
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