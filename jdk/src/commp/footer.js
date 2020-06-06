import React from 'react';
import $ from 'jquery';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import '../css/index.css';
import {BrowserRouter,Route, HashRouter, Switch, NavLink,Link} from 'react-router-dom';
var styleA={
    verticalAlign: "baseline"
}
export default class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className='footer1'>
                    <div className='footer2'>
                        <div className='footer2_1'>
                            <ul>
                                <li><div className="footer2_2">首页</div>
                                <ul className='footer2_3'>
                                    <li><Link to=''><div>产品功能</div></Link></li>
                                    <li><Link to=''><div>玩法案例</div></Link></li>
                                    <li><Link to=''><div>帮助中心</div></Link></li>
                                </ul>
                                </li>
                                <li><div className="footer2_2">公司</div>
                                <ul className='footer2_3'>
                                    <li><Link to=''><div>关于鲸打卡</div></Link></li>
                                    <li><Link to=''><div>加入我们</div></Link></li>
                                </ul>
                                </li>
                                <li><div className="footer2_2">资讯</div>
                                <ul className='footer2_3'>
                                    <li><Link to=''><div>公司动态</div></Link></li>
                                    <li><Link to=''><div>行业资讯</div></Link></li>
                                    <li><Link to=''><div>媒体报道</div></Link></li>
                                </ul>
                                </li>
                                <li><div className="footer2_2">联系我们</div>
                                <ul className='footer2_4'>
                                    <li><Link to=''><img src='src/img/icn_footer_contact.png'/><div><p>联系方式：17318015373   13145903384</p></div></Link></li>
                                    <li><Link to=''><img src='src/img/icn_footer_email.png' style={styleA}/><div><p>商务合作：pr@jingdaka.com</p><p>媒体合作：business@jingdaka.com</p></div></Link></li>
                                    <li><Link to=''><img src='src/img/icn_footer_address.png'/><div>公司地址：深圳市南山区虚拟大学园R2-A 7楼</div></Link></li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='footer3'>
                            <div>
                                <p>公众号</p>
                                <img src='src/img/qrcode1.png'/>
                            </div>
                            <div className='footer3_1'>
                                <p>小程序</p>
                                <img src='src/img/qrcode2.png'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer4'>
                    <h5>友情链接</h5>
                    <div>
                        <Link to=''>鲸相册</Link>
                        <Link to=''>鲸打卡</Link>
                        <Link to=''>公众号涨粉</Link>
                        <Link to=''>少儿英语加盟</Link>
                        <Link to=''>美术加盟</Link>
                        <Link to=''>北京事业单位招聘</Link>
                        <Link to=''>翻译机</Link>
                    </div>
                </div>
                <div className='footer5'>
                    <p>Copyright © 2017-2020 深圳市耀京教育有限公司 ALL Rights Reserved. 粤ICP备17051327号</p>
                    <p>Copyright © 2017-2020 深圳市耀京科技有限公司 ALL Rights Reserved.</p>
                </div>
            </footer>
        )
    }
}