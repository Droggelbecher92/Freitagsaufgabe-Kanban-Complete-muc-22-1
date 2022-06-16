import './KanbanInputForm.css'

export default function KanbanInputForm(){
    return(
        <div className={'kanbanInputForm'}>
            <input className={'inputForm'} type="text"/>
            <input className={'inputForm'} type="text"/>
            <button>Save</button>
        </div>
    )
}