import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { ProductFunctionsContext } from '../App';
import { Link, useRouteMatch } from 'react-router-dom';

export default function ProductCard({ product }) {

    let cartFuncs = React.useContext(ProductFunctionsContext)
    const [inCart, setInCart] = React.useState(cartFuncs.isInCart(product.id))
    let match = useRouteMatch()

    function handleClick(event) {
        if (inCart) {
            cartFuncs.removeFromCart(product.id)
            setInCart(false)
        } else {
            cartFuncs.addToCart(product.id)
            setInCart(true)
        }
    }

    return (
        <Box key={product.id} sx={{ p: 1 }}>
            <Card sx={{ maxWidth: 345 }}>
                <Link to={`${match.path}/${product.id}`} >
                    <CardMedia
                        component="img"
                        height="400"
                        image={product.image}
                        alt={product.name}
                    />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name} - ${product.price}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography> */}
                    <Button onClick={handleClick}>{inCart ? <RemoveShoppingCartIcon /> : <AddShoppingCartIcon />}</Button>
                </CardContent>
            </Card>
        </Box >
    );
}