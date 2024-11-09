"use client";

import React from "react";
import ProductsColumn from "@/src/components/ProductsColumn";
import UsersColumn from "@/src/components/UsersColumn";
import SelectedProductsColumn from "@/src/components/SelectedProductsColumn";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductsColumn />
      <UsersColumn />
      <SelectedProductsColumn />
    </div>
  );
};

export default Home;
