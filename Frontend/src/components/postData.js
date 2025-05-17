export const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    subheading: "Learn the basics of React and how to build UI components.",
    description: `
## Introduction

React is a JavaScript library for building user interfaces.

### Why React?

- Component-Based
- Declarative
- Learn Once, Write Anywhere

\`\`\`js
function App() {
  return <h1>Hello React</h1>;
}
\`\`\`
    `
  },
  {
    id: 2,
    title: "Understanding useState",
    subheading: "Handle dynamic state in your functional components.",
    description: `
## What is useState?

\`useState\` lets you add state to functional components.

### Example

\`\`\`js
const [count, setCount] = useState(0);
\`\`\`

### When to use

- Counters
- Forms
- Toggles
    `
  },
  {
    id: 3,
    title: "React Router v6 Basics",
    subheading: "Create multi-page navigation using React Router.",
    description: `
## Introduction to Routing

React Router helps manage page views in SPA.

### Key Features

- Nested routes
- Route parameters
- 404 pages

\`\`\`js
<Route path="/about" element={<About />} />
\`\`\`
    `
  },
  {
    id: 4,
    title: "Markdown in React",
    subheading: "Use Markdown for writing readable blog content.",
    description: `
## Why Markdown?

Markdown makes formatting text simple.

### Example Content

\`\`\`md
## Heading
**Bold** _Italic_
\`\`\`

### Tool Used

- react-markdown
    `
  },
  {
    id: 5,
    title: "Fetching Data in React",
    subheading: "Learn how to call APIs and handle responses.",
    description: `
## useEffect + fetch

\`\`\`js
useEffect(() => {
  fetch('api/posts').then(...)
}, []);
\`\`\`

### Best Practices

- Use try/catch
- Handle loading and error states
    `
  },
  {
    id: 6,
    title: "Managing Global State",
    subheading: "Pass data across components using Context or Redux.",
    description: `
## Context API

Use context for passing props globally.

### useContext Example

\`\`\`js
const value = useContext(MyContext);
\`\`\`

### Alternatives

- Redux
- Zustand
    `
  },
  {
    id: 7,
    title: "Building Forms in React",
    subheading: "Capture and validate user input effectively.",
    description: `
## Controlled Components

Each input is linked to a state.

### Example

\`\`\`js
<input value={name} onChange={e => setName(e.target.value)} />
\`\`\`

### Bonus

- Formik for complex forms
    `
  },
  {
    id: 8,
    title: "React Performance Tips",
    subheading: "Improve speed by reducing unnecessary renders.",
    description: `
## Common Tips

- Memoize components
- Avoid anonymous functions in JSX

### Example

\`\`\`js
const MemoComp = React.memo(() => {...});
\`\`\`
    `
  },
  {
    id: 9,
    title: "React Project Structure",
    subheading: "Organize your folders and files for clarity.",
    description: `
## Recommended Structure

- components/
- pages/
- hooks/
- assets/

### Tips

- Use index.js for cleaner imports
    `
  },
  {
    id: 10,
    title: "Deploying React Apps",
    subheading: "Push your React project to live hosting platforms.",
    description: `
## Methods

- Vercel
- Netlify
- GitHub Pages

### Bonus

Set \`homepage\` in package.json for GitHub Pages.

\`\`\`json
"homepage": "https://username.github.io/project"
\`\`\`
    `
  }
];
