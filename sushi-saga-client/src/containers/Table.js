import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddMoney(event.target.addMoney.value)
    event.target.addMoney.value = 0
  }

  return (
    <Fragment>
      <div className="remaining">
        <h1>You have: ${props.money} remaining!</h1>
        <form onSubmit={handleSubmit}>
          <label>Add More Money: </label>
          <input type="number" name="addMoney" min="0"></input>
          <input type="submit" value="Add $$"/>
        </form>
      </div>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.eaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table