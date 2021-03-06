import './KanbanInputForm.css'
import {FormEvent, useEffect, useState} from "react";
import {KanbanStatus} from "../service/models";
import {postNewKanban} from "../service/apiService";


interface KanbanInputFormProps{
    onCreation : () => void
}

export default function KanbanInputForm(props : KanbanInputFormProps){

    const [task, setTask] = useState(localStorage.getItem('task')??'')
    const [desc, setDesc] = useState(localStorage.getItem('desc')??'')

    useEffect(()=>{
        localStorage.setItem("task",task)
    },[task])

    useEffect(()=>{
        localStorage.setItem("desc",desc)
    },[desc])

    const saveNewKanban = (ev : FormEvent) =>  {
        ev.preventDefault()
        postNewKanban({'task':task,'description':desc,'status':KanbanStatus.OPEN})
            .then(()=>{
                setDesc('')
                setTask('')
                props.onCreation()
            })
    }

    return(
        <form className={'kanbanInputForm'} onSubmit={saveNewKanban}>
            <input className={'inputForm'} type="text" placeholder={'Neuer Task'} value={task} onChange={ev => setTask(ev.target.value)}/>
            <input className={'inputForm'} type="text" placeholder={'Beschreibung'} value={desc} onChange={ev => setDesc(ev.target.value)}/>
            {task && desc && <button type={'submit'}>Save</button>}
        </form>
    )
}