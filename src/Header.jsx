import SvgIcon from "./assets/SvgIcon";
import ArrowLeft from "./assets/ArrowLeft";
import { Outlet, useParams, useNavigate } from "react-router-dom";

function Header() {
    const { orderID } = useParams()
    const navigate = useNavigate();
    console.log('orderID', orderID)

    return (
        <>
            <header className="flex items-center justify-between h-[56px] !mx-[46px] !mt-[65px] !mb-[18px]">
                <ArrowLeft onClick={() => navigate('/')}/>
                <h1>{orderID ? 'Cargo Details' : 'Cargo Orders'}</h1>
                <SvgIcon />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Header