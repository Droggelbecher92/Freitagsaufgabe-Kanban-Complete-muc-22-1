import KanbanColumn from "./KanbanColumn";
import './KanbanGallery.css'
import {KanbanItem, KanbanStatus} from "../service/models";

interface KanbanGalleryProps{
    kanbans : KanbanItem[],
    changeHandler: () => void,
}

export default function KanbanGallery(props : KanbanGalleryProps){


    return(
        <div className={'kanbanGallery'}>
            <KanbanColumn filteredItems={props.kanbans.filter(item => item.status===KanbanStatus.OPEN)} status={"Offen"} changeHandler={props.changeHandler}/>
            <KanbanColumn filteredItems={props.kanbans.filter(item => item.status===KanbanStatus.IN_PROGRESS)} status={"In Arbeit"} changeHandler={props.changeHandler}/>
            <KanbanColumn filteredItems={props.kanbans.filter(item => item.status===KanbanStatus.DONE)} status={"Fertig"} changeHandler={props.changeHandler}/>
        </div>
    )
}