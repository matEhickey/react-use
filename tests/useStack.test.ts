import { act, renderHook } from '@testing-library/react-hooks';
import useStack from '../src/useStack';

const setUp = (initialStack?: any[]) => renderHook(() => useStack(initialStack));

it('takes initial state', () => {
  const { result } = setUp([1, 2, 3]);
  const { first, last, size } = result.current;
  expect(first).toEqual(1);
  expect(last).toEqual(3);
  expect(size).toEqual(3);
});

it('appends new member', () => {
  const { result } = setUp([1, 2]);
  act(() => {
    result.current.add(3);
  });
  const { first, last, size } = result.current;
  expect(first).toEqual(1);
  expect(last).toEqual(3);
  expect(size).toEqual(3);
});

it('pops last member', () => {
  const { result } = setUp([1, 2]);

  let poped;
  act(() => {
    poped = result.current.remove();
  });
  const { last, size } = result.current;
  expect(last).toEqual(1);
  expect(size).toEqual(1);
  expect(poped).toEqual(2);
});
