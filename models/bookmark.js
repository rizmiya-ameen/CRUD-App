//this is basically the structure of our collections


import mongoose, { Schema } from "mongoose";

const bookmarkSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Bookmark = mongoose.models.Bookmark || mongoose.model("Bookmark", bookmarkSchema);

export default Bookmark;