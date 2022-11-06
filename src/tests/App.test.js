/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line prettier/prettier
import { render, screen } from '@testing-library/react';
import App from "../components/App";
import forecast from "../data/forecast.json";

describe("App", () => {
  test("renders App component correctly", () => {
    render(<App location={forecast.location} forecasts={forecast.forecasts} />);
    const h1Element = screen.getByText(/Manchester, UK/i);
    expect(h1Element).toBeInTheDocument();
  });
});
