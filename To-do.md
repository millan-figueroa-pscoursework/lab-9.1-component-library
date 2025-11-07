### Reflection Questions

#### How did you handle optional props in your components?

For the optional props, I gave them default values or checked if they existed before rendering something. For example, if there was no onClick function or image, I didn’t show that part. This made the components more flexible and prevented errors.

#### What considerations did you make when designing the component interfaces?.

When designing the component interfaces, I thought about what information each component actually needed and what could be optional. I tried to keep the interfaces simple and clear so it was easy to understand what props to pass in.

#### How did you ensure type safety across your components?

To ensure type safety, I used TypeScript interfaces for all the props. This helped catch errors early because TypeScript warned me if I passed the wrong type to a component.

#### What challenges did you face when implementing component composition?

The main challenge with component composition was getting the components to work together. At first, they just rendered separately, but I had to figure out how to share state in the App component so that an action in one component could affect another. It helped me understand how props and state flow between components.

## Instructions

#### Setup the Project

- [x] Create a new React TypeScript project using Vite
- [x] Create the following folder structure:

![Folder Structure](./images/folder-structure.JPG)

### Component Requirements

- [x] Create an AlertBox component that can display different types of alerts (success, error, warning, info) with customizable messages.
- [x] Create a UserProfileCard component that displays user information with optional sections.
- [x] Create a ProductDisplay component that shows product information with configurable display options.

### Activity Tasks

#### Component Implementation:

- [x] Implement each component according to its interface requirements.
- [x] Use proper TypeScript types and interfaces.
- [x] Implement prop validation where appropriate.
- [x] Handle optional props and children correctly.

#### Component Testing:

- [x] Test different prop combinations.
- [x] Verify that components render correctly with various props.

#### Component Composition:

- [x] Create example usage of components working together.
- [x] Demonstrate prop passing between components.
- [x] Show how to handle component nesting.

#### Documentation:

- [x] Add comments to describe component props.
- [x] Create example usage documentation.
- [x] Document any special prop handling or requirements.

### Submission

#### Your submission should include:

- [x] All component implementations
- [x] TypeScript interfaces
- [x] Example usage documentation
- [x] A README.md file explaining how to use the components
