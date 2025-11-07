import { AlertBox } from "./components/AlertBox/AlertBox";
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
    <main className="px-10">
      <div className="py-4 border-b">
        <h1 className="font-bold">React Component Library</h1>
      </div>

      {/* alertbox tests */}
      <section className="mt-3 space-y-3">
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
