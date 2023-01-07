import React from 'react'

const FilterPrice = ({setInputPrice}) => {
    const handleSubmit=e=>{
        e.preventDefault()
        const inputFrom=+e.target.from.value
        const inputTo=+e.target.to.value
        if(inputFrom !== "" && inputTo !==""){
            setInputPrice({
                from: inputFrom,
                to: inputTo
            })
        }else if( !inputFrom && inputTo){
            setInputPrice({
                from: 0,
                to:inputTo
            })
        }else if( !inputFrom && inputTo){
        setInputPrice({
            from: inputFrom,
            to:Infinity
        })
    } else{
        setInputPrice({
            from:0,
            to: Infinity
        })
    }
    }
  return (

    <section className='price'>
        <h2>Price</h2>
        <form onSubmit={handleSubmit}>
            <div className='from'>
                <label htmlFor="from">From</label>
                <input type="number" id='from'/>
            </div>
            <div className='to'>
            <label htmlFor="to">To</label>
            <input type="number" id='to'/>
            </div>
            <button className='button_price'>Filter Price</button>

        </form>
    </section>
  )
}

export default FilterPrice