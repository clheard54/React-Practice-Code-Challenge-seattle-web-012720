import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
          {props.current.map(sushi => {
          return <Sushi key={sushi.id} sushi={sushi} eaten={props.eaten} onOrderSushi={props.onOrderSushi} />
          })}
        <MoreButton onMakeMoreSushi={props.onMakeMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer