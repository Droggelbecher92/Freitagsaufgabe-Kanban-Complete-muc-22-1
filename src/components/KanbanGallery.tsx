import KanbanColumn from "./KanbanColumn";

export default function KanbanGallery(){
    return(
        <div className={'kanbanGallery'}>
            <KanbanColumn/>
            <KanbanColumn/>
            <KanbanColumn/>
        </div>
    )
}