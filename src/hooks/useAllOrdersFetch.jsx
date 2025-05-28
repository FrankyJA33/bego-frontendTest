import { useEffect, useState } from "react"
import { API } from "../utils/utils"

function useFetchAllOrders() {
    const [orders, setOrders] = useState({})

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`${API}/orders`)
                const data = await response.json()
                setOrders(data.result)
            } catch (error) {
                console.error('Error fetching orders:', error)
            }
        }

        fetchOrders()
    }, [])

    return { orders }
}

export default useFetchAllOrders