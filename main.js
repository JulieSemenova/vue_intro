Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img :src="image" :alt="altText" />
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In stock</p>
        <p v-else>Out of stock</p>
        <p>Shipping: {{ shipping }}</p>

        <product-details :details="details"></product-details>
        
        <div v-for="(variant, index) in variants" :key="variant.id" class="color-box" :style="{ backgroundColor: variant.variantColor}"
          @mouseover="updateProduct(index)">
        </div>
        <button @click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock}">Add to cart</button>
        <div class="cart">
          <p>Cart {{ cart }}</p>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: './assets/vmSocks-green-onWhite.jpg',
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: './assets/vmSocks-blue-onWhite.jpg',
          variantQuantity: 0
        }
      ],
      selectedVariant: 0,
      altText: 'awesome socks',
      cart: 0
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      }
      return 2.99;
    }
  }
});

Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
    </ul>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    premium: true
  }
});
