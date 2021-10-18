import ProductCard from "./ProductCard"
import Box from '@mui/material/Box';
import { productsList } from "../App"

export default function Products() {

    return (
        <div style={{ width: '100%', ali: "center" }}>
            <h2>Products</h2>
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
                {productsList.map((product, index) => <ProductCard key={index} product={product} />)}

            </Box>
        </div>

    )
}