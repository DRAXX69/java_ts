import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT: number = 8089;

app.use(express.json());

app.get(
    "/", // path
    (req: Request, res: Response) => {// callback function
        res.send("Hello, TypeScript with Express!");    
    }
);

app.get(
    "/hello/world",
    (req: Request, res: Response) => {
       return res.send("Hello,World");   
    }
);

app.get(
    "/hello/world/:name", // :name -> route parameter/alias
    (req: Request, res: Response)=> {
        //const name = req.params.name; //without destruction
        const { name } = req.params; //destructuring
        const { title, age } = req.query;
        // query params -> //hello/world/josh?title=Mr&age=30
        // http://localhost:8089/hello/world/John?title=Mr&age=20
        return res.status(200).json(
            {
                message: `Hello, ${name!}`,
                title,
                age
            }
        )
    }
);

//make a GET rewuest to match the following URL:
//http://localhost:8089/api/products/123/electronics?sort=asc&limit=10
//123 and electronics are route parameters, :id and :category
//if category is not "electronics", return 400 with message "Invalid category"
//return 200 with JSON response with the following structure:
/*
{
"productId": 123,
"category": "electronics",
"sort": "asc",
"limit": 10
}
*/

type Product = {
    id: number;
    name: string;
    price: number;
    category?: string;
};

const products: Product[] = [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
    { id: 2, name: "Coffee Mug", price: 12.5, category: "Kitchen" },
    { id: 3, name: "Notebook", price: 5.0, category: "Stationery" },
    { id: 4, name: "Headphones", price: 199.99 },
    { id: 5, name: "Water Bottle", price: 15.0, category: "Outdoor" }
];

// GET all products
app.get("/api/products", (req: Request, res: Response) => {
    res.status(200).json(products);
});

// GET single product
app.get("/api/products/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string, 10);
    const product = products.find(p => p.id === id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
});

// CREATE product
app.post("/api/products", (req: Request, res: Response) => {
    const { name, price, category } = req.body;
    const newProduct: Product = {
        id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
        name: name !== undefined ? name : "Unknown Product",
        price: price !== undefined ? price : 0,
        category
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// UPDATE product
app.put("/api/products/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string, 10);
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }
    const { name, price, category } = req.body;
    products[productIndex] = {
        ...products[productIndex],
        name: name !== undefined ? name : "Unknown Product",
        price: price !== undefined ? price : 0,
        category: category !== undefined ? category : products[productIndex].category
    };
    res.status(200).json(products[productIndex]);
});

// DELETE product
app.delete("/api/products/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string, 10);
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }
    const deletedProduct = products.splice(productIndex, 1)[0];
    res.status(200).json(deletedProduct);
});

app.listen(
    PORT, //start backend in this PORT
    () =>{
        console.log(`Server: http://localhost:${PORT}`); //backtick
    }
);

//execute: npx tsx --watch app.ts
//http://localhost:8089

