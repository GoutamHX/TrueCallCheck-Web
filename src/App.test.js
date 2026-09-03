import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./Components/Home', () => () => <div data-testid="home">Home</div>);
jest.mock('./Components/Footer', () => () => <div data-testid="footer">Footer</div>);
jest.mock('./Components/ChatBot', () => () => <div data-testid="chatbot">ChatBot</div>);
jest.mock('./hooks/useAntiInspect', () => ({
  useAntiInspect: jest.fn(),
}));

test('renders App component without crashing', () => {
  render(<App />);
  expect(screen.getByTestId('home')).toBeInTheDocument();
});

