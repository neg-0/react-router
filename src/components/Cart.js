import { useState } from "react"
import ProductCard from "./ProductCard"
import Box from '@mui/material/Box';
import { CartFunctionsContext, productsList } from "../App"


export default function Cart({cart}) {

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
                {cart.map((product, index) => <ProductCard key={index} product={product} />)}

            </Box>
        </div>)
}