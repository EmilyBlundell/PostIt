"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const create = async (event: FormEvent) => {
    event.preventDefault();

    await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });

    setContent("");
    setTitle("");

    router.refresh();
  };

  return (
    <div className="mt-8 max-w-md rounded border p-4">
      <form onSubmit={create} className="flex flex-col gap-3">
        <h3 className="text-lg font-medium">Create a new note</h3>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full rounded border px-2 py-1.5 text-sm text-gray-900 outline-none transition duration-300 ease-in-out focus:border-amber-200 focus:ring-2 focus:ring-amber-200"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="block w-full rounded border px-2 py-1.5 text-sm text-gray-900 outline-none transition duration-300 ease-in-out focus:border-amber-200 focus:ring-2 focus:ring-amber-200"
        />
        <div>
          <button
            type="submit"
            className="flex items-center rounded-full bg-red-400 px-4 py-1.5 text-sm text-white transition duration-300 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-200"
          >
            Create note
          </button>
        </div>
      </form>
    </div>
  );
};
