// import react
import React, { useEffect, useState } from 'react';
// imports components
import Header from '../components/Header';
import Slider from '../components/Slider';
import Title from '../components/Title';
import Main from '../components/Main';
import Cart from '../components/Сart';
// import hook
import { useTypeSelector } from '../hooks/useNewSelector';
import { getAllCartSneakers, getAllSneakers } from '../http/sneakersApi';
import { useNewDispatch } from '../hooks/useNewDispatch';
// import style
import '../assets/styles/global.scss';
// import interfaces
import { ISneaker } from '../interfaces/Main/List';
// import rest
import isOpened from '../helper/isOpened';

export default function StorePage() {
    const { setCartPrice, setClick } = useNewDispatch();
    const [sneakers, setSneakers] = useState<ISneaker[]>(null!);

    useEffect(() => {
        (async () => {
            const dataCart = await getAllCartSneakers();
            const dataMain = await getAllSneakers();

            let total = 0;

            dataCart.map((prop) => {
                total += prop.price;
                setClick({ id: prop.sneakerID, isClick: true, code: 1 });
            })
            setCartPrice(total);
            setSneakers(dataMain);
        })()
    }, [])
    return (
        <div className="wrapper">
            <Header />
            <Slider />
            <Title message='Все кросовки' />
            <Main sneakers={sneakers} />
            {isOpened() ? <Cart /> : null}
        </div>
    )
}
