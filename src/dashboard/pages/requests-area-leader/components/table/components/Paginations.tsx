import { Pagination, Stack } from "@mui/material";


interface ItemsProps {
   setcurrentPage: React.Dispatch<React.SetStateAction<number>>; 
   currentPage: number; 
   nPages: number; 
 }


export const Paginations = ({setcurrentPage, nPages}: ItemsProps) => {
   const handleChange = (_event: React.ChangeEvent<unknown>, page: number) => {
      setcurrentPage(page);
    };
   return (
   
    
      <Stack spacing={1} sx={{justifyContent:"end", alignItems: "end"}}>
         <Pagination count={nPages} color="primary" onChange={handleChange}/>
      </Stack>
     
   );
};
