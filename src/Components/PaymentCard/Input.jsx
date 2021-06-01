import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

const Input = ({
    monthPayment,
    handleChange
}) => {
    const styles = {color: 'rgb(122, 7, 17)', boxShadow: '0 0 5px 0 rgba(0,0,0,.5)', borderRadius: '50%', background: 'white', fontSize: 22, cursor: 'pointer'}
    return(
        <div className='PaymentCard__input'>
            <RemoveIcon onClick={() => handleChange('+')} style={styles} />
            <span style={{padding: '0 10px', fontSize: 30, fontWeight: 600, color: 'rgb(122, 7, 17)'}}>{Math.round(monthPayment)} $</span>
            <AddIcon onClick={() => handleChange('-')} style={styles} />
        </div>
    )
}

export default Input