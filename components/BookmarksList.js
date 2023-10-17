import Link from "next/link";
import RemoveBookmark from "./RemoveBookmark";
import { HiPencilAlt } from "react-icons/hi";

const getBookmarks = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/bookmarks", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch bookmarks");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading bookmarks: ", error);
  }
};

export default async function BookmarksList() {
  const { bookmarks } = await getBookmarks();

  return (
    <>
      {bookmarks.map((b) => (
        <div
          key={b._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{b.title}</h2>
            <div>{b.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBookmark id={b._id} />
            <Link href={`/editBookmark/${b._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

