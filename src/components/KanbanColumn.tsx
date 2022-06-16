import KanbanCard from "./KanbanCard";
import {KanbanItem} from "../service/models";

interface KanbanColumnProps{
    filteredItems: KanbanItem[],
    status : string,
    changeHandler: () => void
}

export default function KanbanColumn(props : KanbanColumnProps){
    return(
        <div className={'kanbanColumn'}>
            <h3>{props.status}</h3>
            {props.filteredItems.map(card =>
                <KanbanCard key={card.id} infos={card} changeHandler={props.changeHandler}/>
            )}
        </div>
    )
}