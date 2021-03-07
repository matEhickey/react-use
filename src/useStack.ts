import { useState } from 'react';

export interface QueueMethods<T> {
  add: (item: T) => void;
  remove: () => T;
  first: T;
  last: T;
  size: number;
}

const useStack = <T>(initialValue: T[] = []): QueueMethods<T> => {
  const [state, set] = useState(initialValue);

  return {
    add: (value) => {
      set((stack) => [...stack, value]);
    },
    remove: () => {
      let result;
      set((stack) => {
        result = stack[stack.length - 1];
        return stack.slice(0, -1);
      });
      return result;
    },
    get first() {
      return state[0];
    },
    get last() {
      return state[state.length - 1];
    },
    get size() {
      return state.length;
    },
  };
};

export default useStack;
