import KanbanCard from "./KanbanCard";

export default function KanbanColumn(){
    return(
        <div className={'kanbanColumn'}>
            <h3>Status</h3>
            <KanbanCard/>
            <KanbanCard/>
        </div>
    )
}