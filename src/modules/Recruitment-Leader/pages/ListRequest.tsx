import  { useState } from "react";
import Button from "../../../shared/components/Button";
import { FaPlus } from "react-icons/fa6";
import Pagination from "../../../shared/components/Pagination";
import ItemRequest from "../components/ItemRequest";
import { useGetSolicitudesQuery } from "../services/request-api";
import ModalAddRq from "../components/ModalAddRq";
import { useDispatch } from "react-redux";
import { openModal } from "../../../shared/slices/modalSlice";

const ListRequest = () => {
   const dispatch = useDispatch();
   const [currentPage, setCurrentPage] = useState<number>(1);
   const pageSize = 4;

   const { data } = useGetSolicitudesQuery({ page: currentPage, pageSize });

   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   return (
      <div className="pt-6 md:px-10 lg:px-10">
         {/* Header Section */}
         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h1 className="text-2xl">Solicitudes</h1>
            <Button
               icon={<FaPlus />}
               onClick={() => dispatch(openModal("ModalAddRq"))}
            >
               Nueva Solicitud
            </Button>
         </div>

         {/* Cards Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {data?.solicitudes.map((sold) => (
               <ItemRequest
                  sold={sold}
                  key={sold?.id}
                  onEdit={() => {}} // Add your edit handler here
               />
            ))}
         </div>

         {/* Pagination */}
         <div className="mt-8 flex justify-center">
            <Pagination
               currentPage={currentPage}
               totalPages={data?.pags || 1}
               onPageChange={handlePageChange}
            />
         </div>

         <ModalAddRq />
      </div>
   );
};

export default ListRequest;
