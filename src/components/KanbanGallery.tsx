import KanbanColumn from "./KanbanColumn";
import './KanbanGallery.css'
import {KanbanItem, KanbanStatus} from "../service/models";

interface KanbanGalleryProps{
    kanbans : KanbanItem[],
}

export default function KanbanGallery(props : KanbanGalleryProps){


    return(
        <div className={'kanbanGallery'}>
            <KanbanColumn filteredItems={props.kanbans.filter(item => item.status===KanbanStatus.OPEN)} status={"Offen"}/>
            <KanbanColumn filteredItems={props.kanbans.filter(item => item.status===KanbanStatus.IN_PROGRESS)} status={"In Arbeit"}/>
            <KanbanColumn filteredItems={props.kanbans.filter(item => item.status===KanbanStatus.DONE)} status={"Fertig"}/>
        </div>
    )
}