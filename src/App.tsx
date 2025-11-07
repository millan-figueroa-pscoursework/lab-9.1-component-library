import { useState } from "react";
import { AlertBox } from "./components/AlertBox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import avatar from "../images/avatar.jpg";
import headphones from "../images/headphones.jpg";

function App() {
  // showAlert controls whether alertBox appears w booelean set to false
  const [showAlert, setShowAlert] = useState(false);
  // array of product ids added to cart
  const [cartItems, setCartItems] = useState<string[]>([]);

  const user = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    avatarUrl: avatar,
  };

  const product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: headphones,
    inStock: true,
  };

  // when 'add to cart' button is clicked, function add product id's to array turns showAlert to true so alert appears
  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  return (
    <main className="px-10">
      <div className="py-4 border-b">
        <h1 className="font-bold">React Component Library</h1>
      </div>

      <div className="p-4">
        {showAlert && (
          <AlertBox
            type="success"
            message="Product added to cart!"
            onClose={() => setShowAlert(false)}
          >
            <p className="text-sm">
              You have {cartItems.length} item(s) in your cart.
            </p>
          </AlertBox>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <UserProfileCard
            user={user}
            showEmail={true}
            showRole={true}
            cartCount={cartItems.length}
          />
          <ProductDisplay
            product={product}
            showDescription={true}
            showStockStatus={true}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>

      {/* alertbox tests */}
      <section className="my-12 space-y-3">
        <h3 className="text-2xl font-semibold">Alertbox variations</h3>
        <AlertBox
          type="success"
          message="Your profile has been updated successfully!"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
        <AlertBox type="success" message="Saved successfully!" />
        <AlertBox
          type="error"
          message="Something went wrong."
          onClose={() => alert("closed")}
        />
        <AlertBox type="warning" message="Careful...">
          <span className="text-sm">Double-check your inputs.</span>
        </AlertBox>
        <AlertBox type="info" message="FYI: New version available">
          <a className="underline text-sm" href="#">
            See whats new
          </a>
        </AlertBox>
      </section>

      {/* UserProfileCard tests */}
      <section className="my-12 space-y-3">
        <h3 className="text-2xl font-semibold">UserProfileCard variations</h3>
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId) => alert(`Editing user ${userId}`)}
        >
          <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
        </UserProfileCard>
        {/* hide email + role */}
        <UserProfileCard user={user} showEmail={false} showRole={false} />

        {/* no avatar, with edit */}
        <UserProfileCard
          user={{ ...user, avatarUrl: undefined }}
          onEdit={(id) => alert(`Editing ${id}`)}
        >
          <div className="text-xs text-gray-500">No avatar provided</div>
        </UserProfileCard>

        {/* read-only (no onEdit), email only */}
        <UserProfileCard user={user} showEmail={true} showRole={false} />
      </section>

      {/* UserProfileCard tests */}
      <section className="my-12 space-y-3">
        <h2 className="font-semibold text-lg">ProductDisplay variations</h2>

        {/* default */}
        <ProductDisplay
          product={product}
          showDescription
          showStockStatus
          onAddToCart={(id) => alert(`Added ${id}`)}
        >
          <div className="text-sm text-gray-500">Free shipping available</div>
        </ProductDisplay>

        {/* hide description + stock */}
        <ProductDisplay
          product={product}
          showDescription={false}
          showStockStatus={false}
        />

        {/* out of stock */}
        <ProductDisplay
          product={{ ...product, inStock: false }}
          onAddToCart={(id) => alert(`Try to add ${id}`)}
        />

        {/* no image, no add to cart */}
        <ProductDisplay
          product={{ ...product, imageUrl: undefined }}
          showDescription
          showStockStatus
        />
      </section>
    </main>
  );
}

export default App;
