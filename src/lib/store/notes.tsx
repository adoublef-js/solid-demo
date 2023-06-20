import { JSXElement, createContext, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';

const NotesContext = createContext<[{ notes?: string[] }]>();

export function NotesProvider(props: {
  children: JSXElement;
  notes: string[] | undefined;
}) {
  const [store] = createStore({
    notes: props.notes,
  });

  return (
    <NotesContext.Provider value={[store]}>
      {props.children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
}
