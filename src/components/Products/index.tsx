import { useGetProductsQuery } from "../../redux/slice/products/productApi";
// import type { RootState } from "../../redux/store";
// import { useSelector } from "react-redux";
import "./style.css";

function Products() {
  // const { productList } = useSelector((state: RootState) => state.product);
  const { data: productList, isLoading } = useGetProductsQuery();
  // const isLoading = false;
  return (
    <div>
      <h1 className="title">Products List</h1>
      <div className="container">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          productList?.map((prod) => (
            <div key={prod.id} className="product">
              <div className="product-image">
                <img src={prod.image} alt={`image${prod.id}`} />
              </div>
              <hr />
              <div className="product-content">
                <p title={prod.title}>{prod.title}</p>
                <span>Price: {prod.price}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
