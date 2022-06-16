import './KanbanCard.css'
import {KanbanItem} from "../service/models";

interface KanbanCardProps{
    infos : KanbanItem
}

export default function KanbanCard({infos}:KanbanCardProps){
    return(
        <div className={'kanbanCard'}>
            <p>{infos.task}</p>
            <p>{infos.description}</p>
            <button>???</button>
            <button>???</button>
            <button>???</button>
        </div>
    )
}