import { IItem } from "./IItem";

export interface ICartContextAction {
    id: string;
    type: string;
    item: IItem;
}