import 'react'

const Link = ({url, mensaje}) => {
    return (<a href={url} className='links'>{mensaje}</a>)
}

export default Link