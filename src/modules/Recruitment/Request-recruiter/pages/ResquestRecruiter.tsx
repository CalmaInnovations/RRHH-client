import { useState } from "react";
import ItemRequestRct from "../components/ItemRequestRct";
import Pagination from "../../../../shared/components/Pagination";
import { useGetSolicitudesRctQuery } from "../services/requestRct-api";
import ModalAssingRct from "../../Calls/components/ModalAssingRct";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../shared/slices/modalSlice";

const ResquestRecruiter = () => {
   const dispatch = useDispatch();
   const [currentPage, setCurrentPage] = useState<number>(1);
   const pageSize = 4;
   const [selectedSolicitudId, setSelectedSolicitudId] = useState<number>(0);

   const { data } = useGetSolicitudesRctQuery({ page: currentPage, pageSize });

   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   const handleOpenModal = (solicitudId: number) => {
      setSelectedSolicitudId(solicitudId);
      dispatch(openModal("ModalAsingRCT"));
   };

   return (
      <div className="pt-6 md:px-10 lg:px-10">
         <h1 className="text-xl font-bold mb-4">Solicitudes Recruiter</h1>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {data?.solicitudes.map((sold) => (
               <ItemRequestRct
                  sold={sold}
                  key={sold?.id}
                  onAssign={() => handleOpenModal(sold?.id)}
               />
            ))}
         </div>

         <div className="mt-6 flex justify-center">
            <Pagination
               currentPage={currentPage}
               totalPages={data?.pags || 1}
               onPageChange={handlePageChange}
            />
         </div>

         <ModalAssingRct solicitudId={selectedSolicitudId} />
      </div>
   );
};

export default ResquestRecruiter;
