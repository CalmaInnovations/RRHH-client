import { Routes, Route } from 'react-router-dom';
import { ListRequest } from '../index';


const RLeaderRouter = () => {
  return (
    <Routes>
      <Route path="/list-request-leader" element={<ListRequest />} />
    </Routes>
  );
};

export default RLeaderRouter;
