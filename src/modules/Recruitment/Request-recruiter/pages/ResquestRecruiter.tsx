import React, { useState } from "react";
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
    <div>
      <h1>Solicitudes Recruiter</h1>

      <div className="grid grid-cols-4 mt-8">
        {/* item*/}
        {data?.solicitudes.map((sold) => (
          <ItemRequestRct
            sold={sold}
            key={sold?.id}
            onAssign={() => handleOpenModal(sold?.id)}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={data?.pags || 1}
        onPageChange={handlePageChange}
      />

      <ModalAssingRct solicitudId={selectedSolicitudId} />
    </div>
  );
};

export default ResquestRecruiter;
