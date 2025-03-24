"use client";

import {
   Dialog,
   DialogBackdrop,
   DialogPanel,
   DialogTitle,
} from "@headlessui/react";
import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   children: ReactNode;
   title: string;
}

export default function Modal({
   isOpen,
   onClose,
   children,
   title,
}: ModalProps) {
   return (
      <Dialog open={isOpen} onClose={onClose} className="relative z-10">
         <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
         />

         <div
            className="fixed inset-0 z-10 w-screen overflow-y-auto"
            onMouseDown={(e) => e.stopPropagation()}
         >
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
               <DialogPanel
                  transition
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
               >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
                     {/* Botón de cierre */}
                     <button
                        onClick={onClose}
                        aria-label="Cerrar modal"
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                     >
                        <IoMdClose size={24} />
                     </button>
                     <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                           <DialogTitle
                              as="h2"
                              className="font-semibold text-dark text-2xl mb-5"
                           >
                              {title}
                           </DialogTitle>
                           <div className="mt-2">{children}</div>
                        </div>
                     </div>
                  </div>
               </DialogPanel>
            </div>
         </div>
      </Dialog>
   );
}
