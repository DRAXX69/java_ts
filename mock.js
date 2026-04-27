// Task, Create a CRUD application to simulate api behaviour/functions
// make use of list function, promise, async-await
// let products = [
//     { id: 101, name: "Laptiop", price: 50000 },
//     { id: 102, name: "Mobile", price: 20000 },
//     { id: 103, name: "Tablet", price: 30000 },
//     { id: 104, name: "Monitor", price: 15000 }
// ]
// your application should be 6 functions to perform CRUD operations using Promise
// 1. createProduct
// -- takes product object as argument and add to products array
// -- check if id is present, if yes, reject with error
// -- if name is missing, replace with "Unknown Product"
// -- if price is missing, replace with 0
// 2. getProducts,
// -- returns all products after 2 seconds delay using Promise
// 3. getProductById,
// -- takes id as argument and returns product with that id after 1 second delay
// using Promise, if not found, reject with error
// 4. searchProduct,
// -- takes name as argument and returns all products that match the name
// 5. updateProduct,
// -- takes id and update object as arguments,
// finds product by id and updates it with the update object,
// if not found, reject with error
// 6. deleteProduct
// -- takes id as argument and deletes product with that id,
// if not found, reject with error, if deleted, resolve with success message
 
 
// run this application using,
// npm run start-mock-db
 
const products = [
  { id: 101, name: "Laptop", price: 50000 },
  { id: 102, name: "Mobile", price: 20000 },
  { id: 103, name: "Tablet", price: 30000 },
  { id: 104, name: "Monitor", price: 15000 }
];
 
function createProduct(product) {
  return new Promise((resolve, reject) => {
    if (!product || product.id == null) {
      return reject(new Error("Product id is required."));
    }
 
    const existing = products.find((item) => item.id === product.id);
    if (existing) {
      return reject(new Error("Product id already exists."));
    }
 
    const newProduct = {
      id: product.id,
      name: product.name ? String(product.name) : "Unknown Product",
      price: typeof product.price === "number" ? product.price : 0
    };
 
    products.push(newProduct);
    resolve(newProduct);
  });
}
 
function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...products]);
    }, 2000);
  });
}
 
function getProductById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((item) => item.id === id);
      if (!product) {
        return reject(new Error(`Product with id ${id} not found.`));
      }
      resolve({ ...product });
    }, 1000);
  });
}
 
function searchProduct(name) {
  return new Promise((resolve) => {
    const normalized = String(name).trim().toLowerCase();
    const matches = products.filter((item) =>
      item.name.toLowerCase().includes(normalized)
    );
    resolve(matches.map((item) => ({ ...item })));
  });
}
 
function updateProduct(id, updates) {
  return new Promise((resolve, reject) => {
    const product = products.find((item) => item.id === id);
    if (!product) {
      return reject(new Error(`Product with id ${id} not found.`));
    }
 
    if (updates == null || typeof updates !== "object") {
      return reject(new Error("Update object is required."));
    }
 
    if (updates.name !== undefined) {
      product.name = updates.name ? String(updates.name) : "Unknown Product";
    }
 
    if (updates.price !== undefined) {
      product.price = typeof updates.price === "number" ? updates.price : product.price;
    }
 
    resolve({ ...product });
  });
}
 
function deleteProduct(id) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((item) => item.id === id);
    if (index === -1) {
      return reject(new Error(`Product with id ${id} not found.`));
    }
 
    products.splice(index, 1);
    resolve(`Product with id ${id} deleted successfully.`);
  });
}
 
async function runMockDbDemo() {
  try {
    console.log("Loading products...");
    const allProducts = await getProducts();
    console.log("Initial products:", allProducts);
 
    const newProduct = await createProduct({ id: 105, name: "Keyboard", price: 5000 });
    console.log("Created product:", newProduct);
 
    const found = await getProductById(105);
    console.log("Found product by id:", found);
 
    const searchResults = await searchProduct("top");
    console.log("Search results for 'top':", searchResults);
 
    const updated = await updateProduct(104, { name: "Curved Monitor", price: 18000 });
    console.log("Updated product:", updated);
 
    const deleteMessage = await deleteProduct(102);
    console.log(deleteMessage);
 
    const finalProducts = await getProducts();
    console.log("Final products:", finalProducts);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
 
runMockDbDemo();
 
module.exports = {
  createProduct,
  getProducts,
  getProductById,
  searchProduct,
  updateProduct,
  deleteProduct
};