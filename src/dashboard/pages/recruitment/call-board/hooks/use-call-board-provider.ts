import { useContext } from 'react';
import { CallBoardContext, CallBoardContextProps } from '../context/call-board-context';

export const useCallBoardProvider = () => {
	return useContext<CallBoardContextProps>(CallBoardContext);
};
