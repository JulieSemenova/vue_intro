var product = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green'
      },
      {
        variantId: 2235,
        variantColor: 'blue'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    image: './assets/vmSocks-green-onWhite.jpg',
    altText: 'awesome socks',
    inStock: true,
    onSale: true
  }
});
