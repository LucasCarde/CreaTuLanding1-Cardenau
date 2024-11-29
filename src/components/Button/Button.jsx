import 'react'
import './button.css'

const Button = ({mensaje, fn, prod}) => {
    return (<button onClick={()=>fn(prod)}>{mensaje}</button>)
}

export default Button