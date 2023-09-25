import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link><img src="images/Logo.png" alt="" /></Link>
                </div>
                <div className="flex-none">
                    <ul className=" flex px-1 space-x-6">
                        <li className="text-lg font-bold text-center hover:text-red-500 hover:underline">
                            <NavLink to="/"
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "text-red-500 underline"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="text-lg font-bold text-center hover:text-red-500 hover:underline">
                            <NavLink to="/donetion"
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "text-red-500 underline"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                            >
                                Donation
                            </NavLink>
                        </li>
                        <li className="text-lg font-bold text-center hover:text-red-500 hover:underline">
                            <NavLink to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "text-red-500 underline"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                            >
                                Statistics
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Header;