// import style
import '../assets/styles/Components/Cart.scss';
// import components
import Item from './Cart/Item';
// import hooks
import { useNewDispatch } from '../hooks/useNewDispatch';
import { useEffect, useState } from 'react';
// import rest
import { getCartSneakers } from '../http/sneakersApi';
import { ISneaker } from '../interfaces/Main/List';

export default function Сart() {
    const { setClick } = useNewDispatch();
    const [sneakers, setSneakers] = useState<ISneaker[]>();

    useEffect(() => {
        (async () => {
            const data = await getCartSneakers();
            setSneakers(data);
        })()
    }, [])

    const handelClick = () => {
        setClick({ isClick: false, code: 3 });
    }

    return (
        <>
            <div className="shadow" onClick={handelClick}></div>
            <div className="cart">
                <div className="cart__inner">
                    <div className="cart__container">
                        <div className="cart__colum">
                            <h3 className="cart__text">Корзина</h3>
                            <div className="cart__list">
                                {/* 5 штук максимум */}
                                {sneakers?.map((prop, index) => {
                                    return <Item key={index} item={prop} />;
                                })}
                            </div>
                            {
                                sneakers ? sneakers?.length > 5 ? (
                                    <div className="tooMany">
                                        <div className="tooMany__inner">
                                            <p className="tooMany__text">Корзина переполнена, вы можете посмотреть всё содержимое кликнув</p>
                                        </div>
                                    </div>
                                )
                                    : null
                                    : null
                            }
                            <div className="tax__block">
                                <div className="tax__block__inner">
                                    <div className="tax__block__firstLine">
                                        <p>Итого</p>
                                        <p></p>
                                    </div>
                                    <div className="tax__block__secondLine">
                                        <p>Налог</p>
                                        <p></p>
                                    </div>
                                </div>
                                <button className="tax__block__button">Оформить заказ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
