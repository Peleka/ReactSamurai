import React, {useState} from 'react';
import './App.css';
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRaiting} from "./components/UncontrolledRaiting/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Raiting, RaitingValueType} from "./Raiting/Rating";
import Accordion from "./Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";


function App() {
    let [raitingValue, setRaitingValue] = useState<RaitingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState(true)

    return (
        <div>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <Raiting value={raitingValue} onClick={setRaitingValue}/>
            <Accordion titleValue={"Control"}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
                       collapsed={accordionCollapsed}
            />

            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}

            {/*<UncontrolledAccordion titleValue={'Menu'} />*/}
            {/*Article 2*/}
            <UncontrolledRaiting />

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}


export default App;
