import CreateNote from "@/components/CreateNote";
// import { DeleteNote } from "@/components/DeleteNote/DeleteNote";
// import Note from "@/components/Note";
import PocketBase from "pocketbase";

export const dynamic = "force-dynamic",
  revalidate = 0;

// const getNotes = async () => {
//   const db = new PocketBase(process.env.DB_ENDPOINT);
//   const notes = await db.collection("notes").getFullList();
//   return notes;
// };

const NotesPage = async () => {
  //   const notes = await getNotes();

  return (
    <div>
      <h1 className="my-4 text-2xl font-medium">Notes</h1>
      <div className="my-4 grid grid-cols-3 gap-5">
        {/* {notes?.map((note) => {
          return (
            <div key={note.id}>
              <Note note={note} />
              <DeleteNote noteId={note.id} />
            </div>
          );
        })} */}
      </div>
      <CreateNote />
    </div>
  );
};

export default NotesPage;
