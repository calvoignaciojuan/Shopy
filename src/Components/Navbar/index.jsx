import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useShopyContext } from "../../Context";

const Navbar = () => {

    const { count, setCategoryTextFilter, setSearchText} = useShopyContext();

    const activeStyle = "underline underline-offset-4"

    const clickHandler = (categoryText) => {
        setSearchText(''); // when path changes, clean searchText 
        if(!categoryText){
            setCategoryTextFilter('');
        }
    }

    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full px-8 py-5 text-sm font-normal bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                        to="/"
                        onClick={() => clickHandler()}
                    >
                        Shopy
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? activeStyle : ""
                        }
                        onClick={() => clickHandler()}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/filter/clothes"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? activeStyle : ""
                        }
                        onClick={() => clickHandler("clothes")}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/filter/electronics"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? activeStyle : ""
                        }
                        onClick={() => clickHandler("electronics")}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/filter/furniture"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? activeStyle : ""
                        }
                        onClick={() => clickHandler("furniture")}
                    >
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/filter/toys"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? activeStyle : ""
                        }
                        onClick={() => clickHandler("toys")}
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/filter/others"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? activeStyle : ""
                        }
                        onClick={() => clickHandler("others")}
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
                <li className="flex items-center">
                    <ShoppingCartIcon className="h-5 w-5 text-black mr-1"/>
                    <span className="mx-1">{count}</span>
                </li>
            </ul>
        </nav>
    );
};

export {Navbar};