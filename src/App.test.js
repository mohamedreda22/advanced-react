import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);
    // You have to write the rest of the test below to make the assertion pass
    const rangInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangInput, { target: { value: score } });
    const textArea = screen.getByLabelText(/Comments:/);
    fireEvent.change(textArea, { target: { value: comment } });
    const submentButton = screen.getByRole("button");
    fireEvent.click(submentButton);


    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);
    // You have to write the rest of the test below to make the assertion pass
    const rangInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangInput, { target: { value: score} });
    const submentButton = screen.getByRole("button");
    fireEvent.click(submentButton);


    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });
});
