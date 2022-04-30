// import interface
import { ICardProps } from "../../interfaces/Main/Card";
// import style
import '../../assets/styles/Components/Main/Card.scss';
// import hooks
import { useNewDispatch } from "../../hooks/useNewDispatch";
import { useTypeSelector } from "../../hooks/useNewSelector";
// import rest
import { addToCart, deleteItemCart } from "../../http/sneakersApi";

export default function Card({ item }: ICardProps): JSX.Element {

    const { setClick, setCartPrice, deleteCartPrice } = useNewDispatch();
    const state = useTypeSelector(state => state.status.isClicked);

    const handelClick = (): void => {

        let isTrue = isClicked();
        if (isTrue) {
            deleteCartPrice(item.price);
            (async()=>{
                const data = await deleteItemCart(item.name);
            })()
        }
        else {
            (async () => {
                const data = await addToCart(item.name);
            })()
            setClick({ isClick: true, code: 3 });
            setCartPrice(item.price);
        }
        setClick({ isClick: !isTrue, code: 1, id: item._id });

    }
    const handelFavClick = (): void => {
        let isTrue = isFavorited();

        setClick({ isClick: !isTrue, code: 2, id: item._id });

        // if(!isTrue){
        //     setClick({ isClick: !isTrue, code: 2, id: item._id });
        // }
    }
    const isClicked = (): boolean => {
        let result = false;

        state.map((prop) => {
            if ((prop.id === item._id && prop.code === 1 && prop.isClick)) {
                result = true;
            }
        })

        return result;
    }
    const isFavorited = (): boolean => {
        let result = false;

        state.map((prop) => {
            if ((prop.id === item._id && prop.code === 2 && prop.isClick)) {
                result = true;
            }
        });

        return result;
    }
    return (
        <div className="card">
            <div className="card__inner">
                <div className="card__container">
                    <div className="card__colum">
                        <img src={`${isFavorited() ? './img/liked.png' : './img/like.svg'}`} alt="favorite icon" className="card__icon" height={32} width={32} onClick={handelFavClick} />
                        <img src={`http://localhost:4949/${item.img}`} alt="image of sneakers" className="card__image" height={133} width={112} />
                        <p className="card__text">{item.name}</p>
                        <div className="card__block">
                            <div className="card__block__row">
                                <div className="card__block__leftSide">
                                    <p className="card__block__price">Цена:</p>
                                    <p className="card__block__currentPrice">{item.price} руб.</p>
                                </div>
                                <img src={`${isClicked() ? './img/added.png' : './img/plus.png'}`} alt="add button" className="card__block__button" onClick={handelClick}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
