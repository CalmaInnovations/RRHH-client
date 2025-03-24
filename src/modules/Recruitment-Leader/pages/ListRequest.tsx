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
    <div>
      <h1>Solicitudes</h1>

      <div className="flex justify-end mt-6">
        <Button icon={<FaPlus />} onClick={() => dispatch(openModal("ModalAddRq"))}>
          Nueva Solicitud
        </Button>
      </div>

      <div className="grid grid-cols-4 mt-8">
        {/* item*/}
        {data?.solicitudes.map((sold) => (
          <ItemRequest sold={sold} key={sold?.id} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={data?.pags || 1}
        onPageChange={handlePageChange}
      />

        <ModalAddRq/>
    </div>
  );
};

export default ListRequest;
