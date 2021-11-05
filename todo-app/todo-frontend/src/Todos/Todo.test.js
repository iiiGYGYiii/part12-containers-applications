import Todo from "./Todo";
import React from "react";
import { render, screen } from "@testing-library/react";

describe("Wey que ped?", () => {
  it("Some kind of test", () => {
    const todo = {
      text: "This is a test todo",
      done: true,
    };
    const [doneInfo, notDoneInfo] = [
      () => console.log("Fake func"),
      () => console.log("Fake func2"),
    ];
    render(<Todo todo={todo} doneInfo={doneInfo} notDoneInfo={notDoneInfo} />);
    expect(screen.getByText(todo.text)).toBeInTheDocument();
  });
});
