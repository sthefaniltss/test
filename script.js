const listaDeComidas = [
    { 
        'nome': 'Cupcake Feliz',
        'descricao': 'É instantâneo! Se você comer, ficará muuuuito feliz!',
        'preco':8,
        'imagem':'https://images-na.ssl-images-amazon.com/images/I/81Sl0r6GI7L._SX425_.jpg'
    },
    {
        'nome': 'Bolo Colorido',
        'descricao': 'Colora sua vida com esse bolo saboroso!',
        'preco':11,
        'imagem':'https://cdn.shopify.com/s/files/1/1703/7103/products/Birthday_unicorn_cake_front_rev0_1024x1024.jpg?v=1550834762'
    },
    {
        'nome': 'Chocolate Mágico',
        'descricao': 'Ganhe poderes mágicos ao saborear essa delícia!',
        'preco': 8,
        'imagem':'https://femina.wwmindia.com/content/2017/Jan/inside_unicorn_hot_chocolate_final_1484310905.jpg'
    },
    {
        'nome': 'Marshmallow das Nuvens',
        'descricao': 'Se sinta nas nuvens depois de comer um delicioso marshmallow!',
        'preco':5,
        'imagem':'https://savorandsavvy.com/wp-content/uploads/2017/01/how-to-make-marshmallow-pops-sprinkles.jpg'
    },
    {
        'nome': 'Torta Poderosa',
        'descricao': 'Você vai receber poderes cósmicos e fenomenais!',
        'preco':11,
        'imagem':'https://i0.wp.com/www.thesugarsandbox.com/wp-content/uploads/2017/05/Unicorn-Pie-10-web.jpg?resize=1080%2C1080&ssl=1'
    }
];

let cardapio = document.querySelector("#cardapio");
listaDeComidas.forEach(comida =>{
    let itemDoCardapio = document.createElement("div");
    itemDoCardapio.setAttribute("class", "itemCardapio");
    itemDoCardapio.innerHTML = `
        <div> 
            <img src="${comida.imagem}" width="180px" alt="">
        </div>
        <div>
            <p><strong>Nome:</strong> ${comida.nome}</p>
            <p><strong>Descrição:</strong> ${comida.descricao}</p>
            <p><strong>Preço:</strong> R$${comida.preco},00</p>
        </div>
    `
    
    cardapio.appendChild(itemDoCardapio);
})

