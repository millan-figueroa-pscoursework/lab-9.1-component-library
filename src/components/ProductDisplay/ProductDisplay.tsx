import React from "react";
import type { ProductDisplayProps } from "../../types";

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md py-2 px-4 text-center w-sm  shadow-md">
      <div className="flex flex-center">
        {product.imageUrl && (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />
        )}
        <div className="pr-10 pt-2">
          <h2 className="text-xl font-medium text-gray-900 mb-1">
            {product.name}
          </h2>
          {showStockStatus && (
            <p className="text-sm text-gray-500 mb-2">{product.description}</p>
          )}
          {showDescription && (
            <p className="text-sm text-gray-600">{product.price}</p>
          )}
        </div>
      </div>
      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="w-full inline-block px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
        >
          Edit Profile
        </button>
      )}
      {children && <div className="mt-2 text-xs text-gray-500">{children}</div>}
    </div>
  );
};

export default ProductDisplay;
