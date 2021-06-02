import { withStyles } from '@material-ui/core/styles'
import { Slider, TextField } from '@material-ui/core'


const StyledSlider = withStyles({
    root: {
      color: 'rgb(16, 16, 16)',
      height: 3,
      padding: '15px 0',
      zIndex: '2'
    },
    thumb: {
      height: 15,
      width: 15,
      backgroundColor: 'rgb(122, 7, 17)',
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)',
      marginTop: -7,
      marginLeft: -7,
      '&:focus, &:hover, &$active': {
        boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)',
        },
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 12px)',
      top: -22,
      '& *': {
        background: 'transparent',
        color: '#000',
      },
    },
    track: {
      height: 2,
    },
    rail: {
      height: 2,
      opacity: 1,
      backgroundColor: 'rgb(16, 16, 16)',
    },
    mark: {
      backgroundColor: '#bfbfbf',
      height: 8,
      width: 1,
      marginTop: -3,
    },
    markActive: {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
})(Slider)

const StyledTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'rgb(16, 16, 16)',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'rgb(16, 16, 16)',
      },
      '& .MuiOutlinedInput-root': {
        fontSize: 20,
        zIndex: 1,
        '& fieldset': {
          borderColor: 'rgb(16, 16, 16)',
          border: '2px solid',
          outline: 'none',
          fontSize: 16
        },
        '&:hover fieldset': {
          borderColor: 'rgb(16, 16, 16)',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'rgb(16, 16, 16)',
        },
      },
    },
})(TextField)

  export { StyledSlider, StyledTextField }