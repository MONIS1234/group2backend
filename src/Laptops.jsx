import { useEffect, useState } from "react";
import "./Laptops.css";
import axios from "axios";
const Laptops = ()=>{
    const [laptops,setLaptops] = useState([]);
    const get_laptops = async ()=>{
        const res = await axios.get("http://localhost:9000/mobiles");
        const {data} = res;
        setLaptops(data);
    }
    useEffect(()=>{
        get_laptops();
    },[]);
    
    return(
        <>
            <div className="parent">
                {laptops.map((element)=>{
                    return(
                        <div className="child">
                            <img src={element.pimage}></img>
                            <h2><i className="fa fa-ruppee"></i> {element.pcost}</h2>
                            <p>Qty: {element.pqty}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Laptops;