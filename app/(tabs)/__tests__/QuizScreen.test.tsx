import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import QuizScreen from "../QuizScreen";

jest.useFakeTimers();

describe("QuizScreen", () => {
  it("renders start screen and starts quiz", () => {
    const { getByText } = render(<QuizScreen />);
    expect(getByText("Practice Quiz")).toBeTruthy();
    fireEvent.press(getByText("Start Quiz →"));
    expect(getByText(/Question 1/)).toBeTruthy();
  });

  it("selects an answer and shows feedback", async () => {
    const { getByText, queryByText } = render(<QuizScreen />);
    fireEvent.press(getByText("Start Quiz →"));
    const option = getByText(/.+/i);
    fireEvent.press(option);
    await waitFor(() => {
      expect(queryByText(/✓ Correct!|✗ Incorrect/)).toBeTruthy();
    });
  });

  it("completes the quiz and shows results", async () => {
    const { getByText, queryByText, getAllByText } = render(<QuizScreen />);
    fireEvent.press(getByText("Start Quiz →"));
    for (let i = 0; i < 15; i++) {
      const option = getAllByText(/.+/i)[0];
      fireEvent.press(option);
      jest.advanceTimersByTime(800);
    }
    await waitFor(() => {
      expect(queryByText("Quiz Complete!")).toBeTruthy();
    });
  });
});
