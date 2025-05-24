import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../footer/Footer";

const Root = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}
export default Root;