// import style
import '../assets/styles/Components/Title.scss';
// import hooks
import React, { useEffect, useState } from 'react';
import { useNewDispatch } from '../hooks/useNewDispatch';

interface ITitleProps{
    message: string
}
export default function Title({message}: ITitleProps): JSX.Element {
    const [value, setValue] = useState<string>('');

    const { setName } = useNewDispatch();

    useEffect(() => {
        setName(value);
    }, [value])

    return (
        <div className="title">
            <div className="title__inner">
                <div className="container">
                    <div className="title__row">
                        <h3 className="title__text">{value ? 'Найденые по результату' : `${message}`}</h3>
                        <div className="search__box">
                            <div className="search__box__inner">
                                <div className="search__box__row">
                                    <img src="./img/loop.png" alt="loop icon" className="search__box__icon" height={15} width={15} />
                                    <input type="text" className="search__box__input" placeholder='Поиск...' value={value} onChange={((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value))} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
