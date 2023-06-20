import { JSXElement, createContext, useContext, } from "solid-js";

const NotesContext = createContext<[
    { notes?: string[]; },
]>();

export function NotesProvider(props: {
    children: JSXElement;
    notes: string[] | undefined;
}) {
    return (
        <NotesContext.Provider value={[{ notes: props.notes }]}>
            {props.children}
        </NotesContext.Provider>
    );
}

export function useNotes() {
    const context = useContext(NotesContext);
    if (!context) {
        throw new Error("useNotes must be used within a NotesProvider");
    }
    return context;
}