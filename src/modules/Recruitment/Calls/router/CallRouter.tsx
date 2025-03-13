import { Routes, Route } from 'react-router-dom';
import { Calls } from '../index';
import Kanban from '../pages/Kanban';



const CallRouter = () => {
  return (
    <Routes>
      <Route path="/list-calls" element={<Calls />} />
      <Route path="/kanban/:id" element={<Kanban />} />
    </Routes>
  );
};

export default CallRouter;
