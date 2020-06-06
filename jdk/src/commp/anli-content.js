import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import '../css/anli.css';
import {BrowserRouter,Route, HashRouter, Switch, NavLink, Link} from 'react-router-dom';
export default class AnliCenter extends React.Component{
render(){
    return(
        <div id='center'>
            <div id='center1'>
                <h1>用科技赋能教育 用口碑驱动增长</h1>
                <div id='center1_1'>
                    <div className='center1_1_1'>
                        <ul>
                            <li><div><img src='src/img/logo1.png'/></div></li>
                            <li><div><img src='src/img/logo2.png'/></div></li>
                            <li><div><img src='src/img/logo3.png'/></div></li>
                            <li><div><img src='src/img/logo4.png'/></div></li>
                        </ul>
                    </div>
                    <div className='center1_1_1'>
                        <ul>
                            <li><div><img src='src/img/logo5.png'/></div></li>
                            <li><div><img src='src/img/logo6.png'/></div></li>
                            <li><div><img src='src/img/logo7.png'/></div></li>
                            <li><div><img src='src/img/logo8.png'/></div></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='center2'>
                   <ul>
                       <li><h4>7500+</h4><div>服务超 7500+ 家付费教育机构</div></li>
                       <li><h4>TOP100</h4><div>获得 1/3 以上的 TOP100 教育公司认可</div></li>
                       <li><h4>3000万+</h4><div>覆盖超 3000万C端学员</div></li>
                   </ul>
            </div> 
            <div className='center3'>
                <img src='src/img/title-left.png'/>
                <div>
                    <h1>部分案例展示</h1>
                </div>
                <img src='src/img/title-right.png'/>
            </div>
            <div id='center4'>
                <ul>
                    <li>
                        <div>
                           <img src='src/img/ADnx5EEdYHkmjN8CAZ4dTQFhit6TCHXf.jpg'/>
                           <Link to=''>养老管家</Link>
                           <div>细分品类：兴趣培训</div>
                           <div>常用功能：作业课程</div>
                           <div>使用场景：交作业和互动交流平台</div>
                        </div>
                    </li>
                    <li>
                        <div>
                           <img src='src/img/ADnx5EEdYHkmjN8CAZ4dTQFhit6TCHXf.jpg'/>
                           <Link to=''>养老管家</Link>
                           <div>细分品类：兴趣培训</div>
                           <div>常用功能：作业课程</div>
                           <div>使用场景：交作业和互动交流平台</div>
                        </div>
                    </li>
                    <li>
                        <div>
                           <img src='src/img/ADnx5EEdYHkmjN8CAZ4dTQFhit6TCHXf.jpg'/>
                           <Link to=''>养老管家</Link>
                           <div>细分品类：兴趣培训</div>
                           <div>常用功能：作业课程</div>
                           <div>使用场景：交作业和互动交流平台</div>
                        </div>
                    </li>
                    <li>
                        <div>
                           <img src='src/img/ADnx5EEdYHkmjN8CAZ4dTQFhit6TCHXf.jpg'/>
                           <Link to=''>养老管家</Link>
                           <div>细分品类：兴趣培训</div>
                           <div>常用功能：作业课程</div>
                           <div>使用场景：交作业和互动交流平台</div>
                        </div>
                    </li>
                    <li>
                        <div>
                           <img src='src/img/ADnx5EEdYHkmjN8CAZ4dTQFhit6TCHXf.jpg'/>
                           <Link to=''>养老管家</Link>
                           <div>细分品类：兴趣培训</div>
                           <div>常用功能：作业课程</div>
                           <div>使用场景：交作业和互动交流平台</div>
                        </div>
                    </li>
                    <li>
                        <div>
                           <img src='src/img/ADnx5EEdYHkmjN8CAZ4dTQFhit6TCHXf.jpg'/>
                           <Link to=''>养老管家</Link>
                           <div>细分品类：兴趣培训</div>
                           <div>常用功能：作业课程</div>
                           <div>使用场景：交作业和互动交流平台</div>
                        </div>
                    </li>
                    <li>
                        <div>
                           <img src='src/img/ADnx5EEdYHkmjN8CAZ4dTQFhit6TCHXf.jpg'/>
                           <Link to=''>养老管家</Link>
                           <div>细分品类：兴趣培训</div>
                           <div>常用功能：作业课程</div>
                           <div>使用场景：交作业和互动交流平台</div>
                        </div>
                    </li>
                    <li>
                        <div>
                           <img src='src/img/ADnx5EEdYHkmjN8CAZ4dTQFhit6TCHXf.jpg'/>
                           <Link to=''>养老管家</Link>
                           <div>细分品类：兴趣培训</div>
                           <div>常用功能：作业课程</div>
                           <div>使用场景：交作业和互动交流平台</div>
                        </div>
                    </li>
                    <li>
                        <div>
                           <img src='src/img/ADnx5EEdYHkmjN8CAZ4dTQFhit6TCHXf.jpg'/>
                           <Link to=''>养老管家</Link>
                           <div>细分品类：兴趣培训</div>
                           <div>常用功能：作业课程</div>
                           <div>使用场景：交作业和互动交流平台</div>
                        </div>
                    </li>
                    <li>
                        <div>
                           <img src='src/img/ADnx5EEdYHkmjN8CAZ4dTQFhit6TCHXf.jpg'/>
                           <Link to=''>养老管家</Link>
                           <div>细分品类：兴趣培训</div>
                           <div>常用功能：作业课程</div>
                           <div>使用场景：交作业和互动交流平台</div>
                        </div>
                    </li>
                    <li>
                        <div>
                           <img src='src/img/ADnx5EEdYHkmjN8CAZ4dTQFhit6TCHXf.jpg'/>
                           <Link to=''>养老管家</Link>
                           <div>细分品类：兴趣培训</div>
                           <div>常用功能：作业课程</div>
                           <div>使用场景：交作业和互动交流平台</div>
                        </div>
                    </li>
                    <li>
                        <div>
                           <img src='src/img/ADnx5EEdYHkmjN8CAZ4dTQFhit6TCHXf.jpg'/>
                           <Link to=''>养老管家</Link>
                           <div>细分品类：兴趣培训</div>
                           <div>常用功能：作业课程</div>
                           <div>使用场景：交作业和互动交流平台</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div id='center5'>
                <button>查看更多</button>
            </div>
        </div>
    )
}
}