import { createContext } from "react";
import { ListRecruiters } from "../interface/call.interface";

export type DispatchStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

export interface CallBoardContextProps {
   recruiters: ListRecruiters;
}

export const CallBoardContext = createContext<CallBoardContextProps>(
   {} as CallBoardContextProps
);
