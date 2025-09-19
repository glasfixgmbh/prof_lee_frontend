
import React, {Fragment} from 'react'
import LoginForm from './LoginForm'

function ShoppingCart(props) {
  return (
    <Fragment>
    <div>Shopping</div>
    <div className= "text-green-500">{props.myCounter}</div>
    </Fragment>
  )
}

export default ShoppingCart