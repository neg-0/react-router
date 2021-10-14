import ProductCard from "./ProductCard"

export default function Products() {
    const products = [{ name: "Item 1", price: 7 },
    { name: "Brawndo", price: 7, image: "https://i.pinimg.com/564x/05/39/5c/05395c32fb1f2d615363c6264e461300.jpg" },
    { name: "Item 1", price: 7 },
    { name: "Item 1", price: 7 },
    { name: "Item 1", price: 7 },
    { name: "Item 1", price: 7 },
    { name: "Item 1", price: 7 },
    { name: "Item 1", price: 7 },
    { name: "Item 1", price: 7 },
    { name: "Item 1", price: 7 },]


    return (
        products.map((product, index) => <ProductCard key={index} product={product} />)
    )
}