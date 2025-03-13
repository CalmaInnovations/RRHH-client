"use client";

import { useEffect, useState } from "react";
import {
   Label,
   Listbox,
   ListboxButton,
   ListboxOption,
   ListboxOptions,
} from "@headlessui/react";
import { IoMdCheckmark } from "react-icons/io";
import { HiMiniChevronUpDown } from "react-icons/hi2";

interface Option {
   id: number;
   name: string ;
}

interface SelectProps {
   options: Option[]; //Lista de opciones
   selected?: Option; //Opcion seleccionada
   onChange: (option: Option) => void; //Funcion que se ejecuta cuando el usuario selecciona una opcion
   label: string;
   disabled?: boolean;
}

export default function Select({
   options,
   selected,
   onChange,
   label,
   disabled = false,
}: SelectProps) {
   const [selectedItem, setSelectedItem] = useState<Option | null>(selected || null);

   useEffect(() => {
      setSelectedItem(selected || null);
   }, [selected]);

   // funcion que se ejecuta cuando el usuario selecciona una opcion
   const handleChange = (option: Option) => {
      if (!disabled) {
         setSelectedItem(option);
         onChange(option);
      }
   };

   const handleButtonMouseDown = (event: React.MouseEvent) => {
      event.stopPropagation(); // Evita que otros eventos lo bloqueen
   };
   return (
      <div onMouseDown={handleButtonMouseDown}>
         <Listbox
            value={selectedItem}
            onChange={handleChange}
            disabled={disabled}
         >
            <Label className="block text-sm font-medium text-gray-700 mb-1">
               {label}
            </Label>
            <div className="relative">
               <ListboxButton
                  className={`grid w-full grid-cols-1 rounded-md py-1.5 pr-2 pl-3 pb-3 text-left focus:outline-none border border-grey sm:text-sm/6
            ${
               disabled
                  ? "bg-gray-100 text-grey cursor-not-allowed" // ❌ Diseño deshabilitado
                  : "bg-white text-gray-900 cursor-pointer focus:outline-2 focus:-outline-offset-2"
            }`}
                  disabled={disabled}
               >
                  <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                     <span className="block truncate">
                        {selectedItem ? selectedItem.name : "Seleccionar"}
                     </span>
                  </span>
                  <HiMiniChevronUpDown
                     aria-hidden="true"
                     className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
               </ListboxButton>

               {!disabled && (
                  <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden sm:text-sm">
                     {options.map((option) => (
                        <ListboxOption
                           key={option.id}
                           value={option}
                           className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-primary data-focus:text-white data-focus:outline-hidden"
                        >
                           <span className="block truncate">{option.name}</span>
                           <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary group-not-data-selected:hidden group-data-focus:text-white">
                              <IoMdCheckmark
                                 aria-hidden="true"
                                 className="size-5"
                              />
                           </span>
                        </ListboxOption>
                     ))}
                  </ListboxOptions>
               )}
            </div>
         </Listbox>
      </div>
   );
}
