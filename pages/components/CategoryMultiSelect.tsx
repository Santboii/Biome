import * as React from 'react'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import { Category } from '../../interfaces'
import { camelToReadable } from '../../utils'
import { UseFormRegister, FieldValues } from 'react-hook-form'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const categoryOptions = Object.keys(Category)

interface CategoryMultiSelectProps {
  register: UseFormRegister<FieldValues>
}

export const CategoryMultiSelect: React.FC<CategoryMultiSelectProps> = ({ register }) => {
  const [categories, setCategories] = React.useState<string[]>([])

  const handleChange = (e: SelectChangeEvent<typeof categories>) => {
    
    setCategories(
      typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,
    )
  }

  return (
    <FormControl fullWidth>
      <InputLabel>Categories</InputLabel>
      <Select
        {...register('categories')}
        multiple
        value={categories}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={camelToReadable(value)} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {categoryOptions.map((category) => (
          <MenuItem
            key={category}
            value={category}
          >
            {camelToReadable(category)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CategoryMultiSelect