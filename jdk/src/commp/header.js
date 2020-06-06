import React from 'react';
import $ from 'jquery';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import '../css/index.css';
export default class Header extends React.Component{
    componentDidMount(){
        var swiper=new Swiper('.swiper1',{
            lazy: true,
            mousewheel:true,
            loop:true,
            speed:1000,
            autoplay:{
                delay:2000
            },
            //初始化分页器
            pagination:{
                el:'.swiper-pagination',
                clickable:true, 
                // type:'custom'
                
            }
        })
    }
    render(){
        return(
            <div id='header'>
                <div className="swiper-container swiper1">
                <div className="swiper-wrapper" id="header1">
                    <div className="swiper-slide"><img src="src/img/banner1.png"/></div>
                    <div className="swiper-slide"><img src="src/img/banner2.png"/></div>
                    <div className="swiper-slide"><img src="src/img/banner3.png"/></div>
                </div>
                <div className="swiper-pagination" id="swiper-pagination"></div>
            </div>
            </div>
        )
    }
}