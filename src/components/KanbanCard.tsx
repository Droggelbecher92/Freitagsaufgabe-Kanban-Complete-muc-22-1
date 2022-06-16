import './KanbanCard.css'
import {KanbanItem, KanbanStatus} from "../service/models";
import {deleteKanban, putKanbanStatus} from "../service/apiService";
import {useNavigate} from "react-router-dom";

interface KanbanCardProps{
    infos : KanbanItem
    changeHandler : () => void
}

export default function KanbanCard({infos, changeHandler}:KanbanCardProps){

    const nav = useNavigate()

    const handleDelete = () => {
        deleteKanban(infos.id)
            .then(() => changeHandler())
    }

    const changeStatus = (direction : string) => {
        putKanbanStatus(direction,infos)
            .then(()=>changeHandler())
    }

    return(
        <div className={'kanbanCard'}>
            <p>{infos.task}</p>
            <p>{infos.description}</p>
            {
                infos.status===KanbanStatus.OPEN?
                    <button onClick={handleDelete}>delete</button>
                    :
                    <button onClick={()=>changeStatus('prev')}>prev</button>
            }
            <button onClick={()=> nav(`edit/${infos.id}`)}>edit</button>
            {
                infos.status===KanbanStatus.DONE?
                    <button>delete</button>
                    :
                    <button onClick={()=>changeStatus('next')}>next</button>
            }
        </div>
    )
}