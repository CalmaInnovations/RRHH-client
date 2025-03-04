import { Routes, Route } from 'react-router-dom';
import { Calls } from '../index';


const CallRouter = () => {
  return (
    <Routes>
      <Route path="/list-calls" element={<Calls />} />
    </Routes>
  );
};

export default CallRouter;
