import 'react'
import './button.css'

const Button = ({mensaje, fn}) => {
    return (<button onClick={()=>fn()}>{mensaje}</button>)
}

export default Button