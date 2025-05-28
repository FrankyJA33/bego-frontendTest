import { useState } from "react"
import NavigationTabs from "./components/NavigationTabs"
import OrderCard from "./components/OrderCard"
import Search from "./components/Search"
import useFetchUpcoming from "./hooks/useUpcomingFetch"

function App() {

const { ordersUpcoming } = useFetchUpcoming();
const [searchTerm, setSearchTerm] = useState('');

const filteredOrders = searchTerm
  ? ordersUpcoming.filter(order =>
      order.order_number.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  : ordersUpcoming;

  return (
    <main className="flex flex-col">
      <NavigationTabs />
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <section className="flex flex-wrap flex-col items-center justify-center gap-2 md:flex-row">
        {filteredOrders.map((order) => {
          return (
            <OrderCard key={order._id} order={order} />
          )
        })}
      </section>
    </main>
  )
}

export default App