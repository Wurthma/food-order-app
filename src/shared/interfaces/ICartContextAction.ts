import { IItem } from "./IItem";

export interface ICartContextAction {
    id: number;
    type: string;
    item?: IItem | undefined;
}