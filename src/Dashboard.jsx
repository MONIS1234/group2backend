import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <nav className="dashboard-nav">
                <Link to="">Laptops</Link>
                <Link to="mobiles">Mobiles</Link>
            </nav>
            <div className="dashboard-content">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
