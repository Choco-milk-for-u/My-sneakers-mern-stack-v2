// import interfaces
import { IListProps } from "../../interfaces/Main/List";
// import components
import Card from "./Card";
// import style
import '../../assets/styles/Components/Main/List.scss';

export default function List({ items }: IListProps): JSX.Element {

    return (    
        <div className="list">
            <div className="list__inner">
                <div className="list__row">
                    {
                        items.map((prop, index)=>{
                            return <Card item={prop} key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
