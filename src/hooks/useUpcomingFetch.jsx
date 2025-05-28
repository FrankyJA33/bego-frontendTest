import { useEffect, useState } from "react"
import { API } from "../utils/utils"

function useFetchUpcoming() {
    const [ordersUpcoming, setOrdersUpcoming] = useState([])

    useEffect(() => {
        const fetchUpcoming = async () => {
            try {
                const response = await fetch(`${API}/orders/upcoming`)
                const data = await response.json()
                setOrdersUpcoming(data.result)
            } catch (error) {
                console.error('Error fetching upcoming:', error)
            }
        }

        fetchUpcoming()
    }, [])

    return { ordersUpcoming }
}

export default useFetchUpcoming