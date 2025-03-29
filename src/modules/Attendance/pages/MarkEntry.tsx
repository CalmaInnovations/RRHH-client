import Button from "@/shared/components/Button";
import { useState, useEffect } from "react";

const MarkEntry = () => {
   const [currentTime, setCurrentTime] = useState(new Date());
   const assignedTime = "09:50 AM"; // Esto debería venir del backend
   const [canCheckIn, setCanCheckIn] = useState(false);

   // Actualizar la hora actual cada segundo
   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
   }, []);


   useEffect(() => {
      const allowedTime = new Date();
      allowedTime.setHours(9, 50, 0);

      setCanCheckIn(currentTime >= allowedTime);
   }, [currentTime]);

   return (
      <>
         <h1>Registro de Asistencia</h1>

         <div className="w-full mx-auto mt-10 p-6 bg-light shadow-md rounded-md text-center">
            <div className="flex flex-row-reverse justify-between">
               {/* Hora actual */}
               <div>
                  <p className="flex justify-end text-grey-blue text-3xl font-mono">
                     {currentTime.toLocaleTimeString()}
                  </p>
               </div>

               {/* Horario asignado */}
               <div className="flex flex-col text-start mb-8">
                  <p className="text-grey-dark-ligth mt-2">
                     Horario de entrada: <strong>{assignedTime}</strong>
                  </p>

                  {/* Mensaje de disponibilidad */}
                  {canCheckIn && (
                     <p className="text-tx-warning mt-2">
                        Tu marcaje de entrada comienza a las {assignedTime}.
                     </p>
                  )}
               </div>
            </div>

            {/* Botón de marcaje */}
            <Button>Marcar Entrada</Button>
         </div>
      </>
   );
};

export default MarkEntry;
