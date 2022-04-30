// import components
import List from './Main/List';
import Card from './Main/Card';
// import interfaces
import { ISneaker } from '../interfaces/Main/List';
import { IMainProps } from '../interfaces/Main/Main';
// import style
import '../assets/styles/Components/Main.scss';
// import rest
import { getAllSneakers } from '../http/sneakersApi';
// import hooks
import { useEffect, useState } from 'react';
import { useTypeSelector } from '../hooks/useNewSelector';

export default function Main({ sneakers }: IMainProps): JSX.Element {

  const [items, setItems] = useState<ISneaker[]>();
  const [temp, setTemp] = useState<ISneaker[]>();

  const state = useTypeSelector(state => state.sneaker.name);

  let arr: ISneaker[] = [];

  useEffect(() => {
    setItems(sneakers);
  }, [sneakers])

  useEffect(() => {
    if (state) {
      setTemp(items);
      const newArr = items?.filter((prop) => { return prop.name.toLocaleLowerCase().includes(state.toLocaleLowerCase()) });

      setItems(newArr);
    }
    else {
      setItems(temp);
    }
  }, [state])
  return (
    <div className="main">
      <div className="main__inner">
        <div className="container">
          <div className="main__colum">
            {
              items ? items.map((prop, index) => {

                if (items.length < 4) {
                  return (
                    <div className="list">
                      <div className="list__inner">
                        <div className="list__row">
                          <Card key={index} item={prop} />
                        </div>
                      </div>
                    </div>)
                }
                else {
                  arr.push(prop);

                  if ((index + 1) % 4 === 0) {
                    var old = arr;
                    arr = [];

                    return <List key={index} items={old} />
                  }
                }
              }) : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}
