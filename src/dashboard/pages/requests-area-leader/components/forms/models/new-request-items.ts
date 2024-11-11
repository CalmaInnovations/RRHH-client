import type { Type } from "../../table/models/request-items";

export interface NewRequestItems {
   position?: string;
   quantity?: number;
   type?: Type;
   softSkills?: string;
   technicalKnowledge?: string;
   functions?: string;
}
