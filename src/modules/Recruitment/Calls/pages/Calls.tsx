import  { useState } from "react";
import ItemCall from "../components/ItemCall";
import { useGetConvocatoriasQuery } from "../services/calls-api";
import Pagination from "../../../../shared/components/Pagination";

const Calls = () => {
   const [currentPage, setCurrentPage] = useState<number>(1);
   const pageSize = 6;

   const { data } = useGetConvocatoriasQuery({ page: currentPage, pageSize });

   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };
   return (
      <div className="pt-6 md:px-10 lg:px-10">
         {/* titulo */}
         <h1>Convocatorias</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-8 mb-8">
            {/* item*/}
            {data?.convocatorias.map((call) => (
               <ItemCall call={call} key={call?.idConvocatoria} />
            ))}
         </div>
         <div className="text-regular">
            <Pagination
               currentPage={currentPage}
               totalPages={data?.pags || 1}
               onPageChange={handlePageChange}
            />
         </div>
      </div>
   );
};

export default Calls;
