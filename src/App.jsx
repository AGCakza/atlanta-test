import React, { useState, useEffect } from 'react'
import { InputField, PaymentCard } from './Components/Components'

const App = () => {
  const [data, setData] = useState({
    bet: 0.088,
    betMonth: 0.0073,
    creditSumm: 2000,
    monthPayment: 276,
    term: 1,
    firstPayment: 1000,
    objectPrice: 3000,
  })
  useEffect(() => console.log(data), [data])
  const onChange = e => {
    const x = e.target.value
    if(e.target.name === 'objectPrice' && Number(e.target.value) <= 1000000) setData(prev => ({...prev, [e.target.name]: Number(e.target.value), monthPayment: (x - prev.firstPayment)*((prev.betMonth*Math.pow(1+prev.betMonth, prev.term*12))/(Math.pow(1+prev.betMonth, prev.term*12)-1)),
      creditSumm: Math.round(x - (x/3)), firstPayment: Math.round(x/3)}))
    if(e.target.name === 'firstPayment' && Number(e.target.value) <= data.objectPrice) setData(prev => ({...prev, [e.target.name]: Math.round(Number(e.target.value)), monthPayment: (prev.objectPrice - x)*((prev.betMonth*Math.pow(1+prev.betMonth, prev.term*12))/(Math.pow(1+prev.betMonth, prev.term*12)-1)),
      creditSumm: Math.round(prev.objectPrice - x)}))
    if(e.target.name === 'term' && Number(e.target.value) <= 30 && Number(e.target.value) >= 1) setData(prev => ({...prev, [e.target.name]: Number(e.target.value), monthPayment: prev.creditSumm*((prev.betMonth*Math.pow(1+prev.betMonth, x*12))/(Math.pow(1+prev.betMonth, x*12)-1))}))
  }
  return(
    <div className='container'>
      <div className='inputs'>
        <InputField label='Стоимость недвижимости' name='objectPrice' onChange={onChange} value={data.objectPrice} min={3000} max={1000000} />
        <InputField label='Первоначальный взнос' name='firstPayment' onChange={onChange} value={data.firstPayment} min={data.objectPrice/3} max={data.objectPrice}/>
        <InputField label='Срок кредитования' name='term' onChange={onChange} value={data.term} min={1} max={30} />
      </div>
      <PaymentCard bet={data.bet} creditSumm={data.creditSumm} monthPayment={data.monthPayment} term={data.term} onChange={onChange} />
    </div>
  )
}

export default App