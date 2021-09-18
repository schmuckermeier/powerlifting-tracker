import { render } from '@testing-library/react';

import SetInputForm from './set-input-form';

describe('SetInputForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SetInputForm reps={3} weight={40} setNumber={0} updateSet={jest.fn()}/>);
    expect(baseElement).toMatchSnapshot();
  });
});
