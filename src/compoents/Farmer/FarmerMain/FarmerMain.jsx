import React, { useEffect, useState } from "react";
import FarmerLeft from "../FarmerLeft/FarmerLeft";
import FarmerRight from "../FarmerRight/FarmerRight";
import ProductData from "../../../Data/ProductData/ProductData";

const FarmerMain = () => {
  const [filters, setFilters] = useState({
    location: "",
    productName: "",
    renterName: "",
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

  useEffect(() => {
    window.scrollTo(0, 0);
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
          <FarmerRight products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default FarmerMain;
