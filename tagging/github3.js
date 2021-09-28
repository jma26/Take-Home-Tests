// Initialize "s" object

s = {
  products: "",
  eVar11: ""
};

// Imagine this is the data layer being populated on a particular product listing page.
// You can assume that the product array indexes

var dataLayer = {
  page: {
    page_type: "product_listing",
    page_name: "Dog Food",
    page_category: "Dog"
  },
  products: [
    {
      product_brand: "Brand A",
      product_category: "Dog Food",
      product_name: "Product A",
      product_sku: "12345678901",
      product_parent_sku: "09876543211",
      product_quantity: "1",
      product_price: "$11.11"
    },
    {
      product_brand: "Brand B",
      product_category: "Dog Food",
      product_name: "Product B",
      product_sku: "12345678901",
      product_parent_sku: "09876543212",
      product_quantity: "1",
      product_price: "$22.22"
    },
    {
      product_brand: "Brand C",
      product_category: "Dog Food",
      product_name: "Product C",
      product_sku: "12345678903",
      product_parent_sku: "09876543213",
      product_quantity: "1",
      product_price: "$33.33"
    }
  ],
  user: {
    first_name: "John",
    last_name: "Doe",
    logged_in: true,
    zipcode: "12345"
  }
};

// Using the data layer above, set products variable with the appropriate values.
// Be sure to loop through and capture all products in the products variable.

function pageTracker(dataLayer) {
  const data = {
    ...dataLayer
  };

  function setProducts(data) {
    if (data.products.length >= 1) {
      let productsArr = [];
      for (let i = 0; i < data.products.length; i++) {
        productsArr.push(data.products[i]);
      }
      globalThis.s.products = productsArr;
    }
  }

  setProducts(data);

}

const tracker = new pageTracker(dataLayer);