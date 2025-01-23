import React from "react";
import ProductCards from "./ProductCards";


function Products() {
    return (
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            {/* Set a responsive grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <ProductCards />
              <ProductCards />
              <ProductCards />
              <ProductCards />
              <ProductCards />
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Products;
  