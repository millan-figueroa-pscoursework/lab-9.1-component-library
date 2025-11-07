# Lab 9.1: Component Creation & Props

## React Component Library

This project is a small React app that demonstrates how to create and use reusable components with TypeScript. It includes three components: AlertBox, UserProfileCard, and ProductDisplay. These components can be combined and customized through props.

## Components Overview

### AlertBox

Displays an alert message with different styles for success, error, warning, or info.

#### Props:

type: "success" | "error" | "warning" | "info" (required)<br>

message: string (required)<br>

onClose: optional function to close the alert<br>

children: optional content to show under the main message<br>

### UserProfileCard

Displays information about a user, including their name, email, role, and avatar. You can choose what to show using optional props.

#### Props:

- user: object with id, name, email, role, and optional avatarUrl

- showEmail: boolean (optional)

- showRole: boolean (optional)

- onEdit: optional function triggered by the “Edit Profile” button

- cartCount: optional number showing how many items the user has in their cart

- children: optional extra content

### ProductDisplay

Displays information about a user, including their name, email, role, and avatar. Choose what to show using optional props.

#### Props:

- product: object with id, name, price, description, imageUrl?, and inStock

- showDescription: boolean (optional, defaults to true)

- showStockStatus: boolean (optional, defaults to true)

- onAddToCart: optional function called when “Add to Cart” is clicked

- children: optional extra content (like a note about shipping)

## Running the Project

Install dependencies:
`npm install`

Start the development server:
`npm run dev`

Open your browser at the provided local URL to view the app.
