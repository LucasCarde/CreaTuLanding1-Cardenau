import 'react'

const Button = ({mensaje, fn}) => {
    return (<button onClick={fn}>{mensaje}</button>)
}

export default Button