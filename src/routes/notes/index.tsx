import { For } from "solid-js";
import { Title } from "solid-start";
import { useNotes } from "~/lib/store/notes";

export default function Page() {
    const [{ notes }] = useNotes();

    return (
        <main>
            <Title>Notes</Title>
            <h1>Notes</h1>
            <For each={notes}>
                {(note) => <p>{note}</p>}
            </For>
        </main>
    );
}