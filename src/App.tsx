import { AlertBox } from "./components/Alertbox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import avatar from "../images/avatar.jpg";

function App() {
  const user = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    avatarUrl: avatar,
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
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId) => alert(`Editing user ${userId}`)}
        >
          <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
        </UserProfileCard>
      </div>
    </main>
  );
}

export default App;
