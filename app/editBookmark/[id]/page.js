import EditBookmarkForm from "@/components/EditBookmarkForm"

const getBookmarkById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/bookmarks/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch bookmark");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};


const EditBookmark = async ({params}) => {

  const { id } = params;
  console.log("id:", id)

  const { bookmark } = await getBookmarkById(id);
  const { title, description } = bookmark;

  return (
    <div>
      <EditBookmarkForm id={id} title={title} description={description}/>
    </div>
  )
}

export default EditBookmark