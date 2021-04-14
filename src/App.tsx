import React from 'react';
import './App.css';
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRaiting} from "./components/Rating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";

function App() {
    console.log('App rendering')
    return (
        <div>
            <OnOff     />

            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}

            <UncontrolledAccordion titleValue={'Menu'} />
            Article 2
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
