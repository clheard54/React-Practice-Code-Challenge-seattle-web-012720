import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
          {props.current.map(sushi => {
          return <Sushi sushi={sushi} onOrderSushi={props.onOrderSushi} />
          })}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer