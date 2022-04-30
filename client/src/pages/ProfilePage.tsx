// import componenys
import Header from '../components/Header';
import Title from '../components/Title';
import Main from '../components/Main';
import Cart from '../components/Сart';
// import hooks
import { useEffect, useState } from 'react';
// import rest
import { getAllCartSneakers } from '../http/sneakersApi';
import { ISneaker } from '../interfaces/Main/List';
import isOpened from '../helper/isOpened';

export default function ProfilePage() {
  const [sneakers, setSneakers] = useState<ISneaker[]>(null!);

  useEffect(() => {
    (async () => {
      const data = await getAllCartSneakers();
      setSneakers(data);
    })()
  }, [])
  return (
    <div className="wrapper">
      <Header />
      <Title message={'Мои покупки'} />
      <Main sneakers={sneakers} />
      {isOpened() ? <Cart /> : null}
    </div>
  )
}
