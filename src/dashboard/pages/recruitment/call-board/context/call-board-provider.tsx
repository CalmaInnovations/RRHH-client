import { useEffect, useMemo, useState } from "react";
import { CallBoardContext } from "./call-board-context";
import { getRecruitersAvailableService } from "../services/call-board-service";
import { ListRecruiters } from "../interface/call.interface";

interface Props {
   children: JSX.Element | JSX.Element[];
}

export const CallBoardProvider = ({ children }: Props): JSX.Element => {
   const [recruiters, setRecruiters] = useState<ListRecruiters>(
      {} as ListRecruiters
   );

   const handleGetRecruitersAvailableService = async () => {
      const { data } = await getRecruitersAvailableService();
      setRecruiters(data);
   };

   useEffect(() => {
      handleGetRecruitersAvailableService();
   }, []);

   const contextValue = useMemo(
      () => ({
         recruiters,
      }),
      [recruiters]
   );

   return (
      <CallBoardContext.Provider value={contextValue}>
         {children}
      </CallBoardContext.Provider>
   );
};
