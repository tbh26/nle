import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nle text', () => {
    render(<App />);
    const nleElement = screen.getByText(/nle/i);
    expect(nleElement).toBeInTheDocument();
});
