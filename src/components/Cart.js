import React from 'react'
import { Button, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decrease, increase, removeFromCart } from "../rtk/slices/cartSlice";
const Cart = () => {
    const cart = useSelector((state) => state.cart1);
    // console.log(cart);
    const dispatch = useDispatch();
    const total = cart.reduce((acc, Curr_product) => {
        acc += Curr_product.price * Curr_product.qyt;
        return acc;
    }, 0)
    if (cart.length === 0) {
        return <h1 className="text-center"> You Don't Have any Product yet! </h1>;
    }
    return (
        <>
            <Button variant="primary mb-3 mt-3" onClick={() => dispatch(clearCart())}> Clear Cart</Button>
            <Table striped bordered hover size="sm"> 
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>price</th>
                        <th>Qyt</th>
                        <th>total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td style={{ width: '10%' }}>
                                <Image src={product.thumbnail} thumbnail />{" "}
                            </td>
                            <td> {product.title} </td>
                            <td> {product.price} $ </td>
                            <td> {product.price * product.qyt} $</td>
                            <td>
                                <div className="d-flex gap-3">
                                    <Button onClick={() => dispatch(increase(product))}>+</Button>
                                    <h3>{product.qyt}</h3>
                                    <Button onClick={() => dispatch(decrease(product))} >-</Button>
                                </div>
                            </td>
                            <td><Button variant="danger" onClick={() => dispatch(removeFromCart(product))}>X</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <h2 className="bg-light p-2 mt-3 rounded shadow mb-3 " style={{ width: 'fit-content', margin: 'auto', textAlign: 'center', boxShadow: '0px 0px 10px 2px #ff0000' }}> Total Price: {total} $ </h2>
        </>
    );
}
export default Cart;