import React, { useEffect, useRef } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchproducts } from '../rtk/slices/productsSlice';
import {addToCart} from '../rtk/slices/cartSlice';
import "../App.css";
const Products = () => {
    const products = useSelector(state => state.products) || [];
    console.log(products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchproducts());
    }, [dispatch]);

    const tableRef = useRef(null);
    const scrollToTop = (event) => {
        event.preventDefault();
        if (tableRef.current && tableRef.current.scrollIntoView) {
          tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
      const scrollToBottom = (event) => {
        event.preventDefault();
        if (tableRef.current && tableRef.current.scrollIntoView) {
          tableRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
      };    
    return (
        <>
            <div className="container"  ref={tableRef}>
            <h1 className="text-center mt-2 mb-2">Products</h1>
                <Row className="card-row">
                    {
                        Array.isArray(products) && products.map((product) => {
                            return (
                                <Col key={product.id} className="card-col mb-4">
                                    <Card style={{ width: '18rem' }} className="h-100 shadow-sm rounded">
                                        <Card.Img style={{ height: '200px' }} variant="top" src={product.thumbnail} />
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>{product.description
                            ? product.description.slice(0, 20) + "..."
                            : ""}</Card.Text>
                                            <Card.Text>{product.price}$</Card.Text>
                                            <Card.Text>{product.brand}</Card.Text>
                                            <Button variant="primary" onClick={() =>{dispatch(addToCart(product))} }>Add to cart</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })
                    }
                </Row>
                <div className="scroll-buttons">
                    <button className="scroll-buttonTop" onClick={scrollToTop}>
                        ^
                    </button>
                    <button className="scroll-buttonBottom" onClick={scrollToBottom}>
                        v
                    </button>
                </div>
            </div>
        </>
    );
}
export default Products;
