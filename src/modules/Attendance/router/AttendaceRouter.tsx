import { Routes, Route } from 'react-router-dom';
import { Attendace,MarkEntry } from '../index';


const AttendaceRouter = () => {
  return (
    <Routes>
      <Route path="/list-asistencia" element={<Attendace />} />
      <Route path="/marcar-asistencia" element={<MarkEntry />} />
    </Routes>
  );
};

export default AttendaceRouter;
