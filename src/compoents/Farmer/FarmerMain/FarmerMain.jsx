import React, { useEffect, useState } from "react";
import FarmerLeft from "../FarmerLeft/FarmerLeft";
import FarmerRight from "../FarmerRight/FarmerRight";
import ProductData from "../../../Data/ProductData/ProductData";
import axios from "axios";

const FarmerMain = () => {
  const [filters, setFilters] = useState({
    location: "",
    productName: "",
    renterName: "",
    sortOrder: "", // Added sortOrder
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredProducts = ProductData.filter((product) => {
    const matchesLocation = product.location
      .toLowerCase()
      .includes(filters.location.toLowerCase());
    const matchesProductName = product.name
      .toLowerCase()
      .includes(filters.productName.toLowerCase());
    const matchesOwner = product.renterName
      .toLowerCase()
      .includes(filters.renterName.toLowerCase());

    return matchesLocation && matchesProductName && matchesOwner;
  });

  // Apply sorting based on the sortOrder
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (filters.sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (filters.sortOrder === "highToLow") {
      return b.price - a.price;
    } else {
      return 0; // No sorting if no sortOrder is selected
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchdata = (async () => {
      try {
        const response = await axios.get("/asset/all");
        console.log("farmerDetails", response);
      }
      catch (error) {
        console.log(error);
      }
    })
    fetchdata();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-3"
          style={{ border: "2px solid #ddd", padding: "15px" }}
        >
          <FarmerLeft onFilterChange={handleFilterChange} />
        </div>
        <div
          className="col-md-9"
          style={{ border: "2px solid #ddd", padding: "15px" }}
        >
          <FarmerRight products={sortedProducts} />
        </div>
      </div>
    </div>
  );
};

export default FarmerMain;
