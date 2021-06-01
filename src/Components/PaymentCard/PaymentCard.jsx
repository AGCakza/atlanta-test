import React from 'react'
import Input from './Input'

const PaymentCard = ({
    bet,
    creditSumm,
    monthPayment,
    onChange,
    term
}) => {
    const handleChange = (val) => {
        let x
        val === '+' ?
        x = {
            target: {
              name: 'term',
              value: term+1
            }
        }
        :
        x = {
            target: {
              name: 'term',
              value: term-1
            }
        }
        onChange(x)
    }
    return(
        <div className='PaymentCard'>
            <p>Расчет Оплаты</p>
            <Input monthPayment={monthPayment} handleChange={handleChange} />
            <div className='PaymentCard__info'>
                <div>
                    <p className="PaymentCard__info_labels">Процентная ставка</p>
                    <p className="PaymentCard__info_values">{(bet * 100).toFixed(1)} %</p>
                </div>
                <div>
                    <p className="PaymentCard__info_labels">Сумма кредита</p>
                    <p className="PaymentCard__info_values">{creditSumm} $</p>
                </div>
            </div>
            <button type="button" className="PaymentCard__btn">Оставить Заявку</button>
        </div>
    )
}

export default PaymentCard