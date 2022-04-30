// import style
import './../assets/styles/Components/Header.scss';
// import hooks
import { useNewDispatch } from '../hooks/useNewDispatch';
import { useTypeSelector } from '../hooks/useNewSelector';
// import rest
import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
    const { setClick } = useNewDispatch();
    const state = useTypeSelector(state => state.status);

    const handelClick = () => {
        setClick({ isClick: true, code: 3 });
    }
    return (
        <header className="header">
            <div className="header__inner">
                <div className="container">
                    <div className="header__row">
                        <div className="logo__block">
                            <div className="logo__block__row">
                                <Link to={'/'}>
                                    <img src="./img/logo.png" alt="logo" className="logo__block__icon" height={40} width={40} />
                                </Link>
                                <div className="logo__block__titles">
                                    <h1 className="logo__block__name">My sneakers</h1>
                                    <p className="logo__block__subTitle">Магазин лучших кроссовок</p>
                                </div>
                            </div>
                        </div>
                        <div className="profile__block">
                            <div className="profile__block__row">
                                <div className="profile__block__cart">
                                    <img src="./img/cart.png" alt="cart image" height={20} width={20} onClick={handelClick} />
                                    <p>{state.cartPrice} руб.</p>
                                </div>
                                <Link to={'/favorites'}><img src="./img/favorite.png" alt="favorite page" className="profile__block__img" /></Link>
                                <Link to={'/profile'}><img src="./img/profile.png" alt="profile page" className="profile__block__img" height={20} width={20} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="header__hr" />
        </header>
    )
}
