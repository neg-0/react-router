import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';


export default function ProductCard({ product }) {
    return (
        <Box key={product.id} sx={{ p: 1 }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image={product.image}
                        alt={product.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name} - ${product.price}
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography> */}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}