import KanbanColumn from "./KanbanColumn";
import './KanbanGallery.css'

export default function KanbanGallery(){
    return(
        <div className={'kanbanGallery'}>
            <KanbanColumn/>
            <KanbanColumn/>
            <KanbanColumn/>
        </div>
    )
}