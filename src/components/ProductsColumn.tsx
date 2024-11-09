import React, { useState, useEffect, useRef, useCallback } from "react";
import Loading from "@/src/components/Loading"; 
import { useGetProductsQuery } from "@/src/services/products";
import { IProduct } from "@/src/types/products";
import { useDispatch } from "react-redux";
import { addProduct } from "@/src/store/selectedProductsSlice";

const ProductsColumn: React.FC = () => {
  const [search, setSearch] = useState("");
  const [displayCount, setDisplayCount] = useState(10);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const dispatch = useDispatch();

  const { data: products = [], isLoading } = useGetProductsQuery();

  const observerRef = useRef<HTMLDivElement | null>(null);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, displayCount);

  const handleAddProduct = (product: IProduct) => {
    dispatch(addProduct(product));
  };

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && displayCount < products.length) {
        setIsLoadingMore(true);

        setTimeout(() => {
          setDisplayCount((prevCount) => prevCount + 10);
          setIsLoadingMore(false);
        }, 1000);
      }
    },
    [displayCount, products.length]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [handleObserver]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg h-[95vh] overflow-auto">
      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 w-full border rounded focus:ring-2 focus:ring-blue-400 placeholder-gray-400 transition-all"
      />
      {isLoading ? (
        <Loading />
      ) : (
        <ul>
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              onClick={() => handleAddProduct(product)}
              className="p-4 mb-2 border rounded hover:bg-blue-100 cursor-pointer transition-all flex items-center space-x-4"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-gray-600">Price: ${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {isLoadingMore && (
        <div className="text-center py-4">
          {" "}
          <Loading />
        </div>
      )}

      <div ref={observerRef} style={{ height: "1px" }} />
    </div>
  );
};

export default ProductsColumn;
