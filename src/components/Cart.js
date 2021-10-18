import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import Box from '@mui/material/Box';
import { productsList } from "../App"
import { Link } from "react-router-dom";


export default function Cart({ cart }) {
    return (
        <div style={{ width: '100%', ali: "center" }}>
            <h2>Cart</h2>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    p: 1,
                    m: 1,
                    maxWidth: "100%",
                }}
            >
                {productsList.filter((product) => cart.includes(product.id)).map((product, index) => <ProductCard key={index} product={product} />)}

            </Box>
            <Link to="/checkout"><h2>Checkout</h2></Link>
        </div>)
}