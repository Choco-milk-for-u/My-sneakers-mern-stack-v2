// import componenys
import Header from '../components/Header';
import Title from '../components/Title';
import Main from '../components/Main';
import Cart from '../components/Сart';
// import rest
import isOpened from '../helper/isOpened';

export default function FavoritePage() {
  return (
    <div className="wrapper">
      <Header />
      <Title message={'Мои закладки'} />
      {/* <Main sneakers={sneakers} /> */}
      {isOpened() ? <Cart /> : null}
    </div>
  )
}
