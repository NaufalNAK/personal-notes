import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./AchiveButton";

function ActionButton({ id, archived, onDelete, onArchive }) {
  return (
    <div className="note-item__action">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
    </div>
  );
}

export default ActionButton;
