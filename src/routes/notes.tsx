import { Outlet, createRouteData, useRouteData } from 'solid-start';
import { NotesProvider } from '~/lib/store/notes';

export function routeData() {
  return createRouteData(async (_, { fetch }) => {
    return ['Note 1', 'Note 2'];
  });
}

export default function Page() {
  const notes = useRouteData<typeof routeData>(); //this does not work
  //   const [notes] = createSignal(['Note 1', 'Note 2']); //this will work

  return (
    <NotesProvider notes={notes()}>
      <Outlet />
    </NotesProvider>
  );
}
