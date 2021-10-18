import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { ProductFunctionsContext } from "../App"

export default function Details() {

    const { productId } = useParams()
    const productFuncs = useContext(ProductFunctionsContext)
    const product = productFuncs.getProduct(parseInt(productId))

    if (product === undefined) { return <h2>Product not found!</h2> }

    return (
        <>
            <h2>Product Details - {productId}</h2>
        </>
    )
}