## Refactor Form.jsx

> _More efficient_

#### 1. Define `import React from "react";`

> _The statement import React from "react" is used in JavaScript (specifically with React) to import the core React library into a JavaScript or TypeScript file._
>
> `import` - is a javascript feature that allows you to bring in functions, objects and entire libraries/modules from external files.
>
> `React` - This refers to the main object that is exported from the React library. The React object provides the functionality needed to create React components.
>
> `from react` - This specifies where the React object is coming from

#### 2.Why do we use `useState` ?

>

#### 3. Is `value={lastname}` taking the ID or the state?

>

#### 4. The Spread Operator (...formData) is?

> The spread operator `...formData` is used to copy the current state of `formData` before making updates to specific fields inside of it.
>
> When updating the React's state. Instead of updating the existing state, we create a new copy of it and then modify the required part of the state.
>
> So we are saying if the field is a checkbox, we use the spread operator `...prevData` to copy the previous state and then modify only the `subjects`. but if its not a checkbox then we directly update the value of the state.

```jsx
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  if (type === "checkbox") {
    setFormData((prevData) => ({
      ...prevData,
      subjects: {
        ...prevData.subjects,
        [name]: checked,
      },
    }));
  } else {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
};
```

#### 5. When to use `useEffect` versus a regular function.

> `useEffect` is used when you need to run side effects in your components like.
>
> - Fetching data from an API when the component loads.
> - Subscribing to or cleaning up event listeners.
> - Updating the document title
> - managing timers or intervals
>
> Meanwhile `regular functions` run only when called. `useEffects` run automatically when a component mounts or specific dependencies change.

#### 6. What does `mounts` mean?

> Refers to when a React component is first added to the DOM (document Object Model) and becomes visible on the page.
>
> Think of it like turning on a light in a room for the first time.

#### 7. React Component Lifecycle

> 1. Mounting -> when the component first appears (first render)
> 2. Updating -> When state or props change (re-render)
> 3. Unmounting -> when the component disappears (remove from UI)
