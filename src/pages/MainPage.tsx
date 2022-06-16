import Headline from "../components/Headline";
import KanbanInputForm from "../components/KanbanInputForm";
import KanbanGallery from "../components/KanbanGallery";

export default function MainPage(){
    return(
        <div className={'mainPage'}>
            <Headline/>
            <KanbanInputForm/>
            <KanbanGallery/>
        </div>
    )
}