# `useStack`

React state hook implements simple LIFO stack.

## Usage

```jsx
import { useStack } from 'react-use';

const Demo = () => {
  const { add, remove, first, last, size } = useStack();

  return (
    <div>
      <ul>
        <li>first: {first}</li>
        <li>last: {last}</li>
        <li>size: {size}</li>
      </ul>
      <button onClick={() => add((last || 0) + 1)}>Add</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  );
};
```
