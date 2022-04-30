export interface ISneaker{
    _id: string | number;
    img: string;
    name: string;
    price: number;
    sneakerID?: string;
}
export interface IListProps{
    items: ISneaker[]
}