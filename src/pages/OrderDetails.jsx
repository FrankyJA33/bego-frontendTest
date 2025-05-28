import { useParams } from 'react-router';
import useFetchAllOrders from '../hooks/useAllOrdersFetch';
import DetailsCard from '../components/DetailsCard';
import StatusCard from '../components/StatusCard';
import { useState } from 'react';
import PickupDataPanel from '../components/PickupDataPanel';

function OrderDetails() {
    const { orderID } = useParams();
    const { orders } = useFetchAllOrders();
    const [selectedType, setSelectedType] = useState('PICKUP');

    const handleSelectionChange = (type) => {
        console.log(orderID);
        setSelectedType(type);
    };

    return (
        <div className=''>
            <DetailsCard
                order={orders}
                selectedType={selectedType}
                onSelectionChange={handleSelectionChange}
            />
            <section className='flex flex-col md:flex-row md:items-center md:justify-center gap-4 !mb-52'>
                <StatusCard order={orders} type={selectedType.toLowerCase()}/>
                <PickupDataPanel selectedType={selectedType} order={orders} />
            </section>
        </div>
    );
}

export default OrderDetails;