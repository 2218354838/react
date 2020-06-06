import React from 'react';
import ReactDom from 'react-dom';
import Home from './home';
import Chanpin from './chanpin';
import Anli from './anli';
import $ from 'jquery';
import '../css/index.css';
import {BrowserRouter,Route, HashRouter, Switch, NavLink} from 'react-router-dom';
export default class Nav extends React.Component{
    componentDidMount(){
        $(window).scroll(function(){
            var top = $(window).scrollTop()
            console.log(top);
            if(top>=200){
                $('.img2').css({"display":'none'})
                $('.img1').css({"display":'block'})
                $('nav').css({'backgroundColor':'#fff'})
                $('#nav2 ul li a').css({"color":'#000'})
                $('#nav2 ul').children("#nav2_2").children("a").css({"color":"#3c7eff"})
                $('#nav2_1').css({"background": "transparent","border":"1px solid #3c7eff"})
                $('#nav2 ul').children("#nav2_1").children("a").css({"color":"#3c7eff"});
                $('.nav2_2').addClass('nav2_3').removeClass('nav2_2')
            }else{
                $('.img2').css({"display":'block'})
                $('.img1').css({"display":'none'})
                $('nav').css({'backgroundColor':'transparent'})
                $('#nav2 ul li a').css({"color":'#fff'})
                $('#nav2 ul').children("#nav2_2").children("a").css({"color":"#fff"})
                $('#nav2_1').css({"background": "#fff","border":"1px solid #fff"})
                $('#nav2 ul').children("#nav2_1").children("a").css({"color":"#3c7eff"});
                $('.nav2_3').addClass('nav2_2').removeClass('nav2_3')
            }

        })
    }
render(){
    return(
        <nav>
            <div id="nav">
                <div id="nav1">
                    <a>
                        <img src='src/img/logo-color.png' className='img1'/>
                        <img src='src/img/logo-white.png' className='img2'/>
                    </a>
                </div>
                <HashRouter>
                    <div id='nav2'>
                    <ul>
                        <li className='nav2_2' id='nav2_2'><NavLink to="/Home" exact>首页</NavLink></li>
                        <li><NavLink to="/Chanpin">产品</NavLink></li>
                        <li><NavLink to="/Anli">案例</NavLink></li>
                        <li><NavLink to="/Anli">动态</NavLink></li>
                        <li><NavLink to="/Anli">公司</NavLink></li>
                        <li><NavLink to="/Anli">帮助</NavLink></li>
                        <li><NavLink to="/Anli">管理后台登陆</NavLink></li>
                        <li id='nav2_1'><NavLink to="/Anli">申请使用</NavLink></li>
                        <li><NavLink to="/Anli">鲸相册</NavLink></li>
                    </ul>
                    </div>
                </HashRouter>
            </div>
        </nav>
    )
}
}