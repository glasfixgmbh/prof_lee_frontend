import React, { Fragment } from "react";
import LoginForm from "./LoginForm";

function Shopping(props) {
    return (
        <Fragment>
            <div>Shopping</div>
            <div className='text-green-500'>
                {props.clickCounter}

            </div>
        </Fragment>
    )
}

export default Shopping