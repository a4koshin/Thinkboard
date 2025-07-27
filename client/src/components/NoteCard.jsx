import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatData } from "../lib/utils";

const NoteCard = ({ note }) => {
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-300 border-t-4 border-solid border-accent hover:shadow-md transition-all duration-200"
    >
      <div className="card-body">
        <h1 className="card-title text-base-content">{note.title}</h1>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-center items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatData(note.createdAt)}
          </span>
          <div className="flex items-center gap-2">
            <PenSquareIcon className="size-4" />
            <button className="btn btn-ghost btn-xs text-error">
              <Trash2Icon />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
