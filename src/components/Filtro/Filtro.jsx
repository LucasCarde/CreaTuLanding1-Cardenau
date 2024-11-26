import 'react'

const Filtro = ({url, mensaje}) => {
    return (<a href={url} className='filtros'>{mensaje}</a>)
}

export default Filtro