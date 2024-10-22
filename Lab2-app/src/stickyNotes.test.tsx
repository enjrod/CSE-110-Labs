import { render, screen, fireEvent } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";

describe("Create StickyNote", () => {
    test("renders create note form", () => {
      render(<StickyNotes />);
   
      const createNoteButton = screen.getByText("Create Note");
      expect(createNoteButton).toBeInTheDocument();
    });
   
    test("creates a new note", () => {
      render(<StickyNotes />);
   
   // Please make sure your sticky note has a title and content input field with the following placeholders.
      const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
      const createNoteContentTextarea =
        screen.getByPlaceholderText("Note Content");
      const createNoteButton = screen.getByText("Create Note");
   
      fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
      fireEvent.change(createNoteContentTextarea, {
        target: { value: "Note content" },
      });
      fireEvent.click(createNoteButton);
   
      const newNoteTitle = screen.getByText("New Note");
      const newNoteContent = screen.getByText("Note content");
   
      expect(newNoteTitle).toBeInTheDocument();
      expect(newNoteContent).toBeInTheDocument();
    });

    test("check if all dummynotes are displayed", () => {
        render(<StickyNotes/>);

        const dummyNote1 = screen.getByText("test note 1 title");
        const dummyNote2 = screen.getByText("test note 2 title");
        const dummyNote3 = screen.getByText("test note 3 title");
        const dummyNote4 = screen.getByText("test note 4 title");
        const dummyNote5 = screen.getByText("test note 5 title");
        const dummyNote6 = screen.getByText("test note 6 title");

        expect(dummyNote1).toBeInTheDocument();
        expect(dummyNote2).toBeInTheDocument();
        expect(dummyNote3).toBeInTheDocument();
        expect(dummyNote4).toBeInTheDocument();
        expect(dummyNote5).toBeInTheDocument();
        expect(dummyNote6).toBeInTheDocument();

    });

    test("check update of inner html of note", () => {
        render(<StickyNotes/>);

        const dummyNote1 = screen.getByText("test note 1 title");
        fireEvent.change(dummyNote1, {
            target: { innerHTML: "New content text" }
          });
        const newTitle = screen.getByText("New content text");
        expect(newTitle).toBeInTheDocument();
    });

    test("check if note deleted", () => {
        render(<StickyNotes/>);

        const dummyNoteButton = screen.getByTestId("test1");
        fireEvent.click(dummyNoteButton);
        expect(dummyNoteButton).not.toBeInTheDocument();
    });

   });

   

