// Initialize "s" object

s = {
  products: "",
  eVar11: ""
};

// Imagine this is the data layer being populated on a particular product page.

var dataLayer = {
  page: {
    page_type: "product",
    page_name: "Product A",
    page_category: "Dog"
  },
  product: {
    product_brand: "Brand A",
    product_category: "Dog Food",
    product_name: "Product A",
    product_sku: "12345678901",
    product_parent_sku: "0987654321",
    product_quantity: "1",
    product_price: "$11.11"
  },
  user: {
    first_name: "John",
    last_name: "Doe",
    logged_in: true,
    zipcode: "12345"
  }
};



// Using the data layer above, set products variable with the appropriate values.
function pageTracker(dataLayer) {
  const data = {
    ...dataLayer
  };

  function setProducts(data) {
    if (Object.keys(data.product).length !== 0) {
      globalThis.s.products = data.product
    }
  }

  setProducts(data);

}

const tracker = new pageTracker(dataLayer);