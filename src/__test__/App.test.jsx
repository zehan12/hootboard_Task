import { render, screen } from "@testing-library/react";
import App from "../App";

describe('App', () => {
    it('should have text Weather App', () => {
        render(<App />);
        expect(screen.getByText(/Weather App/i)).toBeInTheDocument();
    })
})