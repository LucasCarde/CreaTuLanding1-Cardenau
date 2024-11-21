import 'react'

const Button = ({mensaje, fn, prod}) => {
    return (<button onClick={()=>fn(prod)}>{mensaje}</button>)
}

export default Button