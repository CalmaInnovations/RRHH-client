import { Routes, Route } from 'react-router-dom';
import { ResquestRecruiter } from '../index';


const RequestRctRouter = () => {
  return (
    <Routes>
      <Route path="/list-request-recruiter" element={<ResquestRecruiter />} />
    </Routes>
  );
};

export default RequestRctRouter;
