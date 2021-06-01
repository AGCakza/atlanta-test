import React from 'react'
import { StyledSlider, StyledTextField } from './styled'


const InputField = ({
  name,
  label,
  onChange,
  value,
  max,
  min
}) => {
    const handleChange = (e, val) => {
      const x = {
        target: {
          name: name,
          value: val
        }
      }
      onChange(x)
    }
    return(
        <div className='inputfield'>
          <StyledTextField
            id={name}
            label={label}
            name={name}
            variant="outlined"
            className='inputfield_input'
            value={value}
            onChange={onChange}
            autoFocus={true}
          />
          <label className='inputfield__label' for={name}>
            {value}
            <span>
              {name === 'term' ?
                value === 1 ? 'год'
                :
                value < 5 ? 'года' : 'лет'
              : '$'}
            </span>
            </label>
          <StyledSlider
            value={typeof value === 'number' ? value : 0}
            max={max}
            min={min}
            id={name}
            className='inputfield_slider'
            onChange={handleChange}
          />
        </div>
    )
}

export default InputField