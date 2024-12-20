import {createContext, useEffect, useState} from 'react';
import { getProducts, filterProductsBySex } from '../firebase/firebase';
import {useParams} from 'react-router-dom';

export const ProductsContext = createContext(false);

export function ProductsProvider({children}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {sexo} = useParams()

    useEffect(() => {
      setLoading(true)
        if (sexo != undefined) {
            filterProductsBySex(sexo)
                .then(res => {
                    setProducts(res)
                    setLoading(false)
                })
                .catch(e => console.error(e))
            } else {
            getProducts()
                .then(res => {
                  setProducts(res)
                  setLoading(false)
                })
                .catch(e => console.error(e))
            }
    }, [sexo]);

    return (
        <ProductsContext.Provider value={[products, setProducts, loading, sexo]}>
            {children}
        </ProductsContext.Provider>
    );
}
