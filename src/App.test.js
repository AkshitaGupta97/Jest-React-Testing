import {render, screen, fireEvent} from '@testing-library/dom'

import Button from './Component/Button'

test('render button and handle click event', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Increment</Button>);
    const renderedButton = screen.getByText('Increment');
    fireEvent.click(renderedButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
})

// jest.fn() is a function that creates a mock function in Jest. 
// It is used to track calls to the function and the arguments passed to it, 
// making it useful for testing purposes.

// render(<Button onClick={handleClick}>Increment</Button>) is a function from the React Testing Library that renders a React component into a virtual DOM for testing. 
// In this case, it renders the Button component with an onClick prop set to the mock function handleClick and the button text set to "Increment".

// screen.getByText('Increment') is a function from the React Testing Library that searches the rendered virtual DOM for an element that contains the specified text, in this case, "Increment". 
// It returns the first matching element it finds, which is then stored in the variable renderedButton.

// fireEvent.click(renderedButton) is a function from the React Testing Library that simulates a click event on the specified element, in this case, the renderedButton. 
// This is used to test how the component responds to user interactions, such as clicking a button.

//  expect(handleClick) is 