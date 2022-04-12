import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);


  const handleAddProduct =(product)=>{
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart)
  }
  return (
    <div className="shop-container">
      <div className="product-container">
          {
            products.slice(0,10).map(pd => <Product 
              handleAddProduct={handleAddProduct}
              product={pd}
            ></Product>)
          }
      </div>
      <div className="card-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
