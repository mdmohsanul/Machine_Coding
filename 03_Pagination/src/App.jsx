import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import ProductCard from "./component/ProductCard";
import Pagination from "./component/Pagination";
import { PAGE_SIZE } from "./Constants";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=500");
    const data = await res.json();
    setProducts(data.products);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const totalProducts = products?.length;

  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  if (products.length === 0) return <p>No Product Found</p>;
  return (
    <>
      <div>
        <h1>Products</h1>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
        />
        <div className="product-container">
          {products?.slice(start, end).map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}{" "}
        </div>
      </div>
    </>
  );
}

export default App;
