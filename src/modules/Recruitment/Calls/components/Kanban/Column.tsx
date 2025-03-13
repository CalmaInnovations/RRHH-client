import React from "react";

import { useDroppable } from "@dnd-kit/core";
import Task from "./Task";

interface ColumnProps {
   column: {
      id: string;
      title: string;
      tasks: { id: string; nombres: string; apellido: string; email: string; modalidad: string,estado:string | undefined }[];

   };
}

const Column: React.FC<ColumnProps> = ({ column }) => {

   const { setNodeRef } = useDroppable({ id: column.id });
   return (
      <div
         ref={setNodeRef}
         className="p-5 shadow-lg w-full h-[33rem] bg-hover-grey rounded-md border-1 border-grey-light"
      >
         <h3 className="mb-5 text-lg font-semibold text-grey-blue">{column.title}</h3>
         {column.tasks.map((task) => (
            <Task key={task.id} task={task} columnId={column.id}/>
         ))}
      </div>
   );
};

export default Column;
