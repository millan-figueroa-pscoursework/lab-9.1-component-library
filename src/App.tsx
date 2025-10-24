// import { useState } from 'react'
import { AlertBox } from "./components/Alertbox/AlertBox";

function App() {
  return (
    <main className="p-10 bg-red-500">
      <h1 className="font-b">React Component Library</h1>
      <AlertBox
        type="success"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>
    </main>
  );
}

export default App;
