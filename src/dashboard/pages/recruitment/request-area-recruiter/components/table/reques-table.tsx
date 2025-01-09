import { useEffect, useState } from "react";
import { Pagination, Box, Typography, Grid } from "@mui/material";
import { TableItem } from "./components/table-item";
import { Spinner } from "../../../../../components/spinner/spinner";
import { Tags } from "../../../../../components/Tag/components/Tags";
import { useGetSolicitudesQuery } from "../../../../../../redux/services/request/request-api";
// import {
//    useAppDispatch,
//    useAppSelector,
// } from "../../../../../../hooks/use-redux";
// import { setIsLoading } from "../../../../../../redux/slices/app-slice/app-slice";
import { ModalAssingRecruiter } from "../../../../../components/Modal";

// FIX: fix pagination
// FIX: fix refactorization
// FIX: separate logic

interface PaginationParams {
   pgNum: number;
   pgSize: number;
}

export const RequestTable = () => {
   const [openModal, setOpenModal] = useState<boolean>(false);

   const [page, setPage] = useState<number>(1);
   const [totalPages, setTotalPages] = useState<number>(1);

   const paginationParams: PaginationParams = {
      pgNum: page,
      pgSize: 2,
   };

   const { data, isLoading: isLoadingGetSolicitudes } =
      useGetSolicitudesQuery(paginationParams);

   const handleOpenModal = () => {
      setOpenModal(true);
   };

   const handleCloseModal = () => {
      setOpenModal(false);
   };

   useEffect(() => {
      if (data?.pags) {
         setTotalPages(data?.pags);
      }
   }, [data]);

   return (
      <Box
         sx={{
            padding: "2rem",
            ml: 6,
         }}
      >
         <Typography variant="h3" sx={{ marginBottom: "1rem" }} component="h1">
            Solicitudes
         </Typography>

         {/* componente de tags  aqui*/}
         <Tags />

         {isLoadingGetSolicitudes ? (
            <Spinner className="mt-64" />
         ) : (
            <>
               <Grid container spacing={3}>
                  {data?.solicitudes?.map((sold) => (
                     <TableItem
                        sold={sold}
                        key={sold?.id}
                        handleOpen={handleOpenModal}
                     />
                  ))}
               </Grid>

               <Pagination
                  count={totalPages}
                  page={page}
                  onChange={(event, value) => {
                     setPage(value);
                  }}
                  sx={{ mt: 4 }}
               />
            </>
         )}

         <ModalAssingRecruiter
            open={openModal}
            handleClose={handleCloseModal}
         />
      </Box>
   );
};
