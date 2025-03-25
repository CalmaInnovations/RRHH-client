type Column<T> = {
   key: keyof T;
   label: string;
};

type TableProps<T> = {
   columns: Column<T>[];
   data: T[];
   renderActions?: (row: T) => React.ReactNode;
};

const Table = <T,>({ columns, data, renderActions }: TableProps<T>) => {
   return (
      <div className="overflow-x-auto rounded-lg shadow-md text-sm">
         <table className="min-w-full bg-light border border-gray-200">
            {/* Encabezado */}
            <thead className="bg-primary">
               <tr>
                  {columns.map((col) => (
                     <th
                        key={col.key as string}
                        className="px-4 py-2 text-left text-light"
                     >
                        {col.label}
                     </th>
                  ))}
                  {renderActions && (
                     <th className="px-4 py-2 text-left text-light">Acciones</th>
                  )}
               </tr>
            </thead>

            {/* Cuerpo */}
            <tbody>
               {data.length > 0 ? (
                  data.map((row, index) => (
                     <tr
                        key={index}
                        className="border-t border-gray-200 hover:bg-hover-grey text-dark"
                     >
                        {columns.map((col) => (
                           <td key={col.key as string} className="px-4 py-2">
                              {String(row[col.key])}
                           </td>
                        ))}
                        {renderActions && (
                           <td className="px-4 py-2">{renderActions(row)}</td>
                        )}
                     </tr>
                  ))
               ) : (
                  <tr>
                     <td
                        colSpan={columns.length + (renderActions ? 1 : 0)}
                        className="px-4 py-2 text-center text-gray-500"
                     >
                        No hay datos disponibles
                     </td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
   );
};

export default Table;
