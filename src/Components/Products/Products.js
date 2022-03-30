import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }, [])

    return (

        <div>
            <input className="border-2 mb-6 p-2 w-1/2" type="text" /><label className="text-3xl ml-4 cursor-pointer">Search</label>
            <div className="grid grid-cols-3 gap-4 px-16">
                {
                    products.map(product => <Product key={product.idMeal} product={product}></Product>)
                }

            </div>
        </div>
    );
};

export default Products;