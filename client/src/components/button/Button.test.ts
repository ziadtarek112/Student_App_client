// Button.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

// Example test case
test('Button component renders correctly', () => {
    // Render the Button component with sample text and a click handler
    const handleClick = jest.fn(); // Mock a click handler function
    const { getByText } = render(<Button text="Click Me" clickHandler = { handleClick } />);

    // Verify that the button is rendered
    const button = getByText('Click Me');
    expect(button).toBeInTheDocument();

    // Simulate a click event and verify that the click handler is called
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
});
