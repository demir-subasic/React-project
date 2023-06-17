import axios from 'axios'
import React from 'react'
import {useQuery} from "react-query"
import { Loader } from '@mantine/core';
import './query.css'

const fetchData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    const data = response.data
    return data
}

const ReactQuery = () => {
    const {data, isLoading, isError, error} = useQuery('products', fetchData)

    if(isLoading){
        return <div className='loader'><Loader color="dark" size="lg" />;</div>
    }
    if(isError){
        return <div>Error: {error.message}</div>
    }
    return (
        <div>
            <h1>Products List</h1>
            <ul>
                {data.map((products) => (
                    <li key={products.id}>{products.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default ReactQuery
