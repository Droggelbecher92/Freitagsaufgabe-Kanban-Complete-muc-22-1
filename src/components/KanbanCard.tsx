import './KanbanCard.css'
import {KanbanItem, KanbanStatus} from "../service/models";
import {deleteKanban} from "../service/apiService";

interface KanbanCardProps{
    infos : KanbanItem
    changeHandler : () => void
}

export default function KanbanCard({infos, changeHandler}:KanbanCardProps){

    const handleDelete = () => {
        deleteKanban(infos.id)
            .then(() => changeHandler())
    }



    return(
        <div className={'kanbanCard'}>
            <p>{infos.task}</p>
            <p>{infos.description}</p>
            {
                infos.status===KanbanStatus.OPEN?
                    <button onClick={handleDelete}>delete</button>
                    :
                    <button>prev</button>
            }
            <button>edit</button>
            {
                infos.status===KanbanStatus.DONE?
                    <button>delete</button>
                    :
                    <button>next</button>
            }
        </div>
    )
}