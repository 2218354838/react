import React from 'react';
import ReactDom from 'react-dom';
import Header from  './header';
import Nav from './nav';
import Center from './center';
import Footer from './footer';
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <Header/>
                <Center/>
                <Footer/>
            </div>
            )
        }
}