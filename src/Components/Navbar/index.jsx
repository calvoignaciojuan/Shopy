import { NavLink } from "react-router-dom";


const Navbar = ()=>{
    const activeStyle = "underline underline-offset-4"

    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full px-8 py-5 text-sm font-normal">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">
                        Shopy
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? activeStyle : ""
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/clothes"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? activeStyle : ""
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/electronics"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? activeStyle : ""
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/forniture"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? activeStyle : ""
                        }
                    >
                        Forniture
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/toys"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? activeStyle : ""
                        }
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/others"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? activeStyle : ""
                        }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex gap-3">
                <li className="font-extralight">
                    Juan@gmail.com
                </li>
                <li>
                    <NavLink
                        to="/my-orders"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? activeStyle : ""
                        }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/my-account"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? activeStyle : ""
                        }
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/sign-in"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? activeStyle : ""
                        }
                    >
                        Sign in
                    </NavLink>
                </li>
                <li>
                    Cart-0
                </li>
            </ul>
        </nav>
    );
};

export {Navbar};