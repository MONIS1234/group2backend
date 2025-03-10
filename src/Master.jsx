import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { Laptops, Mobiles } from "./ProductList";
import ProductDetails from "./ProductDetails";
import Error from "./Error";

const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route index element={<Laptops />} />
                        <Route path="mobiles" element={<Mobiles />} /> {/* ✅ Fix here */}
                    </Route>
                    <Route path="/product/:type/:id" element={<ProductDetails />} />
                    <Route path="/error" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Master;
