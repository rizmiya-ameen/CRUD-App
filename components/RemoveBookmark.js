"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const RemoveBookmark = ({ id }) => {

  const router = useRouter();

  const removeBookmark = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/bookmarks?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeBookmark} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  )
}

export default RemoveBookmark