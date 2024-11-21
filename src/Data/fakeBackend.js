const productos = [
    {
        nombre: 'Nike Dunk Low Retro',
        precio: 239.999,
        categoria: 'Zapatillas de Moda para Hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1054908-1200-1200?width=1200&height=1200&aspect=true'
    },
    {
        nombre: 'Nike SB Dunk Low Pro Premium',
        precio: 229.999,
        categoria: 'Zapatillas de Moda Unisex',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/996792-1200-1200?width=1200&height=1200&aspect=true'
    },
    {
        nombre: 'Air Jordan 1 Low SE',
        precio: 229.999,
        categoria: 'Zapatillas Jordan para Hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1066574-1200-1200?width=1200&height=1200&aspect=true'
    },
    {
        nombre: 'Nike Dunk Low SE',
        precio: 249.999,
        categoria: 'Zapatillas Jordan para Hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1077127-1200-1200?width=1200&height=1200&aspect=true'
    },
    {
        nombre: 'Nike Dunk Low Retro',
        precio: 239.999,
        categoria: 'Zapatillas de Moda para Hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1054908-1200-1200?width=1200&height=1200&aspect=true'
    },
    {
        nombre: 'Nike SB Dunk Low Pro Premium',
        precio: 229.999,
        categoria: 'Zapatillas de Moda Unisex',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/996792-1200-1200?width=1200&height=1200&aspect=true'
    },
    {
        nombre: 'Air Jordan 1 Low SE',
        precio: 229.999,
        categoria: 'Zapatillas Jordan para Hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1066574-1200-1200?width=1200&height=1200&aspect=true'
    },
    {
        nombre: 'Nike Dunk Low SE',
        precio: 249.999,
        categoria: 'Zapatillas Jordan para Hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1077127-1200-1200?width=1200&height=1200&aspect=true'
    },
    {
        nombre: 'Nike Dunk Low Retro',
        precio: 239.999,
        categoria: 'Zapatillas de Moda para Hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1054908-1200-1200?width=1200&height=1200&aspect=true'
    },
    {
        nombre: 'Nike SB Dunk Low Pro Premium',
        precio: 229.999,
        categoria: 'Zapatillas de Moda Unisex',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/996792-1200-1200?width=1200&height=1200&aspect=true'
    },
    {
        nombre: 'Air Jordan 1 Low SE',
        precio: 229.999,
        categoria: 'Zapatillas Jordan para Hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1066574-1200-1200?width=1200&height=1200&aspect=true'
    },
    {
        nombre: 'Nike Dunk Low SE',
        precio: 249.999,
        categoria: 'Zapatillas Jordan para Hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1077127-1200-1200?width=1200&height=1200&aspect=true'
    },
    {
        nombre: 'Nike Dunk Low Retro',
        precio: 239.999,
        categoria: 'Zapatillas de Moda para Hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1054908-1200-1200?width=1200&height=1200&aspect=true'
    },
    {
        nombre: 'Nike SB Dunk Low Pro Premium',
        precio: 229.999,
        categoria: 'Zapatillas de Moda Unisex',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/996792-1200-1200?width=1200&height=1200&aspect=true'
    },
    {
        nombre: 'Air Jordan 1 Low SE',
        precio: 229.999,
        categoria: 'Zapatillas Jordan para Hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1066574-1200-1200?width=1200&height=1200&aspect=true'
    },
    {
        nombre: 'Nike Dunk Low SE',
        precio: 249.999,
        categoria: 'Zapatillas Jordan para Hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1077127-1200-1200?width=1200&height=1200&aspect=true'
    }   
]

export const getProducts = () =>{
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(productos);
            rej('error')
        }, 1);
    }); 
}