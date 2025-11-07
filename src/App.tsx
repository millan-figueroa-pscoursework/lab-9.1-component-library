import { AlertBox } from "./components/Alertbox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import avatar from "../images/avatar.jpg";
import headphones from "../images/headphones.jpg";

function App() {
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

  return (
    <main className="p-10">
      <h1 className="font-b">React Component Library</h1>
      <div>
        <AlertBox
          type="success"
          message="Your profile has been updated successfully!"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
      </div>
      <div className="mt-4">
        {/* UserProfileCard component */}
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId) => alert(`Editing user ${userId}`)}
        >
          <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
        </UserProfileCard>
      </div>
      <div className="mt-4">
        {/* ProductDisplay component */}
        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={(productId) =>
            alert(`Added product ${productId} to cart`)
          }
        >
          <div className="text-sm text-gray-500">Free shipping available</div>
        </ProductDisplay>
      </div>
    </main>
  );
}

export default App;
