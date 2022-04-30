// import style
import '../../assets/styles/Components/Cart/CartItem.scss';
// import interface
import { IItemProps } from '../../interfaces/Main/Item';
// import rest
import { deleteItemCart } from '../../http/sneakersApi';
// import hooks
import { useState } from 'react';
import { useNewDispatch } from '../../hooks/useNewDispatch';

export default function Item({ item }: IItemProps) {
    const [isDeleted, setIsDeleted] = useState<boolean>(false);
    const {setClick, deleteCartPrice} = useNewDispatch();

    const handelClick = async() => {
        const data = await deleteItemCart(item.name);
        setIsDeleted(true);
        deleteCartPrice(item.price);

        setClick({id: item.sneakerID, code: 1, isClick: false});
    }
    return isDeleted ? null : (
        <div className="item">
            <div className="item__inner">
                <div className="item__container">
                    <div className="item__row">
                        <img src={`http://localhost:4949/${item.img}`} alt="sneaker image" className="item__img" height={70} width={70} />
                        <div className="item__text__block">
                            <p className="item__text">{item.name}</p>
                            <p className="item__price">{item.price} руб.</p>
                        </div>
                        <img src="./img/cancel.png" alt="cancel button" className="item__button" width={32} height={32} onClick={handelClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}
