import React from 'react';
import Top from './sections/Top';
import Stats from './sections/Stats';
import About from './sections/About';

export default class App extends React.Component{
    
    constructor(){
        super();
    }

    render(){
        //skeleton
        //Decoupled
        return (
            <div>
               <Top />
               <Stats />
               <About />
            </div>
        );
    }
}
