import { $host } from "."
import { ISneaker } from "../interfaces/Main/List";

export const getAllSneakers = async () => {
    const { data } = await $host.get<ISneaker[]>('/getAllSneakers');

    return data;
}
export const getCartSneakers = async () => {
    const { data } = await $host.get<ISneaker[]>('/getCartSneakers/6');

    return data;
}
export const getAllCartSneakers = async () => {
    const { data } = await $host.get<ISneaker[]>('/getCartSneakers/all');

    return data;
}
export const addToCart = async (name: string) => {
    const { data } = await $host.post('/addCartSneaker', { name: name });

    return data;
}
export const deleteItemCart = async (name: string) => {
    const { data } = await $host.post('/deleteCartSneaker', { name: name });

    return data;
}