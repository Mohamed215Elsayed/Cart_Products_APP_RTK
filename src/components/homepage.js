import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Products  from "./Products";
import { useDispatch, useSelector } from "react-redux";
import  {fetchproducts}  from "../rtk/slices/productsSlice";
function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);

  return (
    <Row>
    {products.map((product) => (
      <Col className="mb-3" key={product.id}>
        <Products product={product} />
      </Col>
    ))}
  </Row>
  );
}
export default HomePage;
