var product = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green-onWhite.jpg'
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue-onWhite.jpg'
      }
    ],
    image: './assets/vmSocks-green-onWhite.jpg',
    altText: 'awesome socks',
    inStock: true,
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  }
});
