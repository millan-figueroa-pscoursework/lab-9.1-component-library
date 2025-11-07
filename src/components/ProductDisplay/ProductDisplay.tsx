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
    <div className="bg-white border border-gray-200 rounded-md text-center shadow-md mt-6 overflow-hidden">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="block w-full h-40 md:h-56 object-cover rounded-t-md mb-[2px]"
        />
      )}

      <div className="px-4 pt-2 pb-3">
        <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
        <p className="text-lg font-bold text-blue-600 py-2">
          ${product.price.toFixed(2)}
        </p>
        {showDescription && (
          <p className="text-sm text-gray-600">{product.description}</p>
        )}

        {showStockStatus && (
          <p
            className={`text-sm font-semibold mt-2 ${
              product.inStock ? "text-green-500" : "text-red-500"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>
        )}
      </div>

      {onAddToCart && (
        <div className="px-4 pb-4">
          <button
            onClick={() => onAddToCart(product.id)}
            className="w-full inline-block px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      )}

      {children && <div className="mb-2 text-xs text-gray-500">{children}</div>}
    </div>
  );
};

export default ProductDisplay;
