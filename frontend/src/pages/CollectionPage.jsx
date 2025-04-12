import { useEffect, useRef, useState } from "react"
import {FaFilter} from "react-icons/fa"
import FilterSidebar from "../components/Products/FilterSidebar"
import SortOptions from "../components/Products/SortOptions"
import ProductGrid from "../components/Products/ProductGrid"

const CollectionPage = () => {
    const [products , setProducts] = useState([])
    const sidebarRef = useRef(null) 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleClickOutside = (e) => {
        // Close sidebar if clicked outside 
        if(sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false)
        }
    };

    useEffect(() => {
        //Add Event listener for clicks
        document.addEventListener("mousedown", handleClickOutside)
        // clean event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

        useEffect (() => {
            setTimeout (() => {
                const fetchedProducts = [
                    {
                        _id: 1,
                        name:"Product 1",
                        price: 100,
                        images:[{url: "https://picsum.photos/500/500?random=3"}],
                    },
                    {
                        _id: 2,
                        name:"Product 2",
                        price: 100,
                        images:[{url: "https://picsum.photos/500/500?random=4"}],
                    },
                    {
                        _id: 3,
                        name:"Product 3",
                        price: 100,
                        images:[{url: "https://picsum.photos/500/500?random=5"}],
                    },
                    {
                        _id: 4,
                        name:"Product 4",
                        price: 100,
                        images:[{url: "https://picsum.photos/500/500?random=6"}],
                    },
                    {
                        _id: 1,
                        name:"Product 5",
                        price: 100,
                        images:[{url: "https://picsum.photos/500/500?random=2"}],
                    },
                    {
                        _id: 2,
                        name:"Product 6",
                        price: 100,
                        images:[{url: "https://picsum.photos/500/500?random=7"}],
                    },
                    {
                        _id: 3,
                        name:"Product 7",
                        price: 100,
                        images:[{url: "https://picsum.photos/500/500?random=8"}],
                    },
                    {
                        _id: 4,
                        name:"Product 8",
                        price: 100,
                        images:[{url: "https://picsum.photos/500/500?random=9"}],
                    }                   
                ] ;setProducts(fetchedProducts);
            }, 1000);
        }, [])
  return (
    <div className="flex flex-col lg:flex-row">
        {/* Mobile Filter Button */}
        <button 
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center">
            <FaFilter  className="mr-2"/> Filters
        </button>
      
      {/* Filter Sidebar */}
      <div ref={sidebarRef}
      className={`${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300
      lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>

        {/* Sort Option */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  )
}

export default CollectionPage
