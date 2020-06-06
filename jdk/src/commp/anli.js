import React from 'react';
import ReactDom from 'react-dom';
import AnliCenter from './anli-content';
import Footer from './footer';
import Navv from './anlinav';
export default class Anli extends React.Component{
    render(){
        return(
            <div>
                <Navv/>
                <AnliCenter/>
                <Footer/>
            </div>
        )
    }
}