import { Routes, Route } from 'react-router-dom';
import { Attendace } from '../index';


const AttendaceRouter = () => {
  return (
    <Routes>
      <Route path="/list-asistencia" element={<Attendace />} />
    </Routes>
  );
};

export default AttendaceRouter;
