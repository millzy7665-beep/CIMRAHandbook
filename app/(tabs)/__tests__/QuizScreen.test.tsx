import React from "react";
import { act, fireEvent, render, waitFor } from "@testing-library/react-native";

import QuizScreen from "../quiz";

jest.useFakeTimers();

describe("QuizScreen", () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  it("renders start screen and starts quiz", () => {
    const { getByTestId, getByText } = render(<QuizScreen />);

    expect(getByText("Practice Quiz")).toBeTruthy();
    fireEvent.press(getByTestId("start-quiz-button"));
    expect(getByText(/Question 1/)).toBeTruthy();
  });

  it("selects an answer and shows feedback", async () => {
    const { getAllByTestId, getByTestId, queryByText } = render(<QuizScreen />);

    fireEvent.press(getByTestId("start-quiz-button"));
    fireEvent.press(getAllByTestId("quiz-option")[0]);

    await waitFor(() => {
      expect(queryByText(/✓ Correct!|✗ Incorrect/)).toBeTruthy();
    });
  });

  it("completes the quiz and shows results", async () => {
    const { getAllByTestId, getByTestId, queryByText } = render(<QuizScreen />);

    fireEvent.press(getByTestId("start-quiz-button"));

    for (let i = 0; i < 15; i++) {
      fireEvent.press(getAllByTestId("quiz-option")[0]);
      act(() => {
        jest.advanceTimersByTime(800);
      });
    }

    await waitFor(() => {
      expect(queryByText("Quiz Complete!")).toBeTruthy();
    });
  });
});
