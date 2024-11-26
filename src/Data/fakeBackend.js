const productos = [
    {
        id: 1,
        nombre: 'Dunk Low Retro',
        precio: 239.999,
        categoria: 'Zapatillas de Moda para Hombre',
        sexo: 'hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1054908-1200-1200?width=1200&he' +
                'ight=1200&aspect=true'
    }, {
        id: 2,
        nombre: 'Dunk Low Pro Premium',
        precio: 229.999,
        categoria: 'Zapatillas de Moda Unisex',
        sexo: 'unisex',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/996792-1200-1200?width=1200&hei' +
                'ght=1200&aspect=true'
    }, {
        id: 3,
        nombre: 'Air Jordan 1 Low SE',
        precio: 229.999,
        categoria: 'Zapatillas Jordan para Hombre',
        sexo: 'hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1066574-1200-1200?width=1200&he' +
                'ight=1200&aspect=true'
    }, {
        id: 4,
        nombre: 'Dunk Low SE',
        precio: 249.999,
        categoria: 'Zapatillas Jordan para Hombre',
        sexo: 'hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1077127-1200-1200?width=1200&he' +
                'ight=1200&aspect=true'
    }, {
        id: 5,
        nombre: 'V2K Run',
        precio: 219.999,
        categoria: 'Zapatillas de Moda para Mujer',
        sexo: 'mujer',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1100158-1200-1200?width=1200&he' +
                'ight=1200&aspect=true'
    }, {
        id: 6,
        nombre: 'Pegasus Trail 5',
        precio: 249.999,
        categoria: 'Zapatillas de Trail para Mujer',
        sexo: 'mujer',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/982106-1200-1200?width=1200&hei' +
                'ght=1200&aspect=true'
    }, {
        id: 7,
        nombre: 'Dunk Low Premium',
        precio: 249.999,
        categoria: 'Zapatillas de Moda para Mujer',
        sexo: 'mujer',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1140124-1200-1200?width=1200&he' +
                'ight=1200&aspect=true'
    }, {
        id: 8,
        nombre: 'Calm SE',
        precio: 99.999,
        categoria: 'Sandalias de Moda para Mujer',
        sexo: 'mujer',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1140173-1200-1200?width=1200&he' +
                'ight=1200&aspect=true'
    }, {
        id: 9,
        nombre: 'Dunk Low Retro',
        precio: 239.999,
        categoria: 'Zapatillas de Moda para Hombre',
        sexo: 'hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1054908-1200-1200?width=1200&he' +
                'ight=1200&aspect=true'
    }, {
        id: 10,
        nombre: 'Dunk Low Pro Premium',
        precio: 229.999,
        categoria: 'Zapatillas de Moda Unisex',
        sexo: 'unisex',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/996792-1200-1200?width=1200&hei' +
                'ght=1200&aspect=true'
    }, {
        id: 11,
        nombre: 'Air Jordan 1 Low SE',
        precio: 229.999,
        categoria: 'Zapatillas Jordan para Hombre',
        sexo: 'hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1066574-1200-1200?width=1200&he' +
                'ight=1200&aspect=true'
    }, {
        id: 12,
        nombre: 'Dunk Low SE',
        precio: 249.999,
        categoria: 'Zapatillas Jordan para Hombre',
        sexo: 'hombre',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1077127-1200-1200?width=1200&he' +
                'ight=1200&aspect=true'
    }, {
        id: 13,
        nombre: 'V2K Run',
        precio: 219.999,
        categoria: 'Zapatillas de Moda para Mujer',
        sexo: 'mujer',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1100158-1200-1200?width=1200&he' +
                'ight=1200&aspect=true'
    }, {
        id: 14,
        nombre: 'Pegasus Trail 5',
        precio: 249.999,
        categoria: 'Zapatillas de Trail para Mujer',
        sexo: 'mujer',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/982106-1200-1200?width=1200&hei' +
                'ght=1200&aspect=true'
    }, {
        id: 15,
        nombre: 'Dunk Low Premium',
        precio: 249.999,
        categoria: 'Zapatillas de Moda para Mujer',
        sexo: 'mujer',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1140124-1200-1200?width=1200&he' +
                'ight=1200&aspect=true'
    }, {
        id: 16,
        nombre: 'Calm SE',
        precio: 99.999,
        categoria: 'Sandalias de Moda para Mujer',
        sexo: 'mujer',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/1140173-1200-1200?width=1200&he' +
                'ight=1200&aspect=true'
    }
];

export const getProducts = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(productos);
            rej('error')
        }, 1);
    });
}

export const getProductsBySex = (sexo) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(productos.filter(producto => producto.sexo == sexo));
            rej('error')
        }, 1);
    });
}

export const getProductById = (id) => {
    return productos.find((producto) => producto.id == id)
}