import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";
describe("Test ToDoList", () => {

    test("check if all grocery items are displayed", () => {
        render(<ToDoList/>);

        const grocery1 = screen.getByText("Bananas");
        const grocery2 = screen.getByText("Apples");

        expect(grocery1).toBeInTheDocument();
        expect(grocery2).toBeInTheDocument();

    });

    test("check if items bought matches items checked", () => {
        render(<ToDoList/>);

        const groceryItem = screen.getByTestId("Apples")
        fireEvent.click(groceryItem);
        const groceryCount = screen.getByText("Items bought: 1");
        expect(groceryCount).toBeInTheDocument();
    });

});