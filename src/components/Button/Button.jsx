import {useState} from 'react'

const Button = ({text, color}) => {
    const [count, setCount] = useState(0);
    console.log(count);

    const click = () => {
        setCount(count + 1)
        console.log(count);
    }

    return (<button style={{
            backgroundColor: color
        }} onClick={click}>{count}</button>)
}

export default Button