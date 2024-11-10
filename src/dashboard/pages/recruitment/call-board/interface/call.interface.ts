import { UniqueIdentifier } from "@dnd-kit/core";

export interface CallInterface {
   id: UniqueIdentifier;
   title: string;
   step?: string;
   items: {
      id: UniqueIdentifier;
      title: string;
   }[];
}
