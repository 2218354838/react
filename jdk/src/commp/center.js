import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import '../css/index.css';
import {BrowserRouter,Route, HashRouter, Switch, NavLink, Link} from 'react-router-dom';
export default class Center extends React.Component{
    componentDidMount(){
        var swiper = new Swiper('.swiper2', {
            lazy: true,
            mousewheel:true,
            slidesPerView: 3,
            spaceBetween: 30,
            loop:true, 
              navigation:{
                  nextEl: '.swiper-button-next2',
                  prevEl: '.swiper-button-prev2',
              }
          });
    }
render(){
    return(
        <div className='center1'>
            <div className='center2'>
                <div className="center3">
                    <div className="center4">
                        <div>
                        <img src="src/img/icon_services_1.png"/>
                        </div>
                        <p>打卡签到</p>
                    </div>
                    <div className="center4">
                        <img src="src/img/icon_services_2.png"/>
                        <p>作业课程</p>
                    </div>
                    <div className="center4">
                        <img src="src/img/icon_services_3.png"/>
                        <p>解锁课程</p>
                    </div>
                    <div className="center4">
                        <img src="src/img/icon_services_4.png"/>
                        <p>答题模式</p>
                    </div>
                    <div className="center4">
                        <img src="src/img/icon_services_5.png"/>
                        <p>口语评测</p>
                    </div>
                </div>
                <div>
                <p><Link to='/chanpin'>发现更多有趣功能 ></Link></p>
                </div>
            </div>
            <div className='center5'>
                <img src='src/img/title-left.png'/>
                <div>
                    <h1>督学营销，用鲸打卡</h1>
                    <h1>教育行业小程序督学营销解决方案</h1>
                </div>
                <img src='src/img/title-right.png'/>
            </div>
            <div className='center6'>
                <div className='center6_1'>
                    <div className="center6_2">
                        <img src='src/img/intro_1.png'/>
                    </div>
                    <div className='center6_2'>
                        <h4>
                            <a>鲸打卡学习系统</a>
                            <img src='src/img/title_icon_color.png'/>
                        </h4>
                        <h5>完整闭环、超轻量级的学习产品</h5>
                        <p>学习签到、每日一练、任务制学习、闯关式学习、自主混搭式学习，绘本跟读、真题练习、背单词等，丰富多样的学习形式与模块，满足个性化的教学场景，有效提升学员粘度和活跃度。</p>
                        <h6><Link to='/chanpin'>查看详情 ></Link></h6>
                    </div>
                </div>
            </div>
            <div className='center6'>
                <div className='center6_1'>
                    <div className='center6_2'>
                        <h4>
                            <a>鲸打卡学习系统</a>
                            <img src='src/img/title_icon_color.png'/>
                        </h4>
                        <h5>提高学员完课率，做好续费和转介绍</h5>
                        <p>打卡提醒、点评互动、课程通知、积分排行榜、作业展示留存，让学员成长看得见，帮助提高教学服务满意度。 建立从自主学习产品 > 轻产品体验活动 > 社交口碑传播的学员漏斗 > 重课程学习过程，从低客单价到高客单价，提升每个环节的转化率。</p>
                        <h6><Link to='/chanpin'>查看详情 ></Link></h6>
                    </div>
                    <div className="center6_2">
                        <img src='src/img/intro_2.png'/>
                    </div>
                </div>
            </div>
            <div className='center6'>
                <div className='center6_1'>
                    <div className="center6_2">
                        <img src='src/img/intro_3.png'/>
                    </div>
                    <div className='center6_2'>
                        <h4>
                            <a>鲸打卡营销系统</a>
                            <img src='src/img/title_icon_color.png'/>
                        </h4>
                        <h5>朋友圈口碑营销与裂变传播更轻松</h5>
                        <p>主流的传播裂变与营销玩法，邀请函、结课证书、成就卡、日签海报、长图分享，好友集call、抢购、秒杀、砍价、契约金等营销组件，让学员高频的学习行为带来同等高频的社交分享裂变。</p>
                        <h6><Link to='/chanpin'>查看详情 ></Link></h6>
                    </div>
                </div>
            </div>
            <div className='center6'>
                <div className='center6_1'>
                    <div className='center6_2'>
                        <h4>
                            <a>鲸打卡AI系统</a>
                            <img src='src/img/title_icon_color.png'/>
                        </h4>
                        <h5>解放老师双手，真正提高社群运营效率</h5>
                        <p>移动端+电脑端全覆盖，满足网师教学场景管理需求。语音AI评测、自动化题库、高效批量点评，帮助提高老师人效，降低微信群人工维护成本，多维度学员分析和轨迹画像，对学员互动情况了如指掌。</p>
                        <h6><Link to='/chanpin'>查看详情 ></Link></h6>
                    </div>
                    <div className="center6_2">
                        <img src='src/img/intro_4.png'/>
                    </div>
                </div>
            </div>
            <div className='center6'>
                <div className='center6_1'>
                    <div className="center6_2">
                        <img src='src/img/intro_5.png'/>
                    </div>
                    <div className='center6_2'>
                        <h4>
                            <a>鲸打卡直播系统</a>
                            <img src='src/img/title_icon_color.png'/>
                        </h4>
                        <h5>轻量级直播工具、直播+练习打卡让督学场景更完整</h5>
                        <p>鲸直播基于微信H5端，支持音频直播、PPT直播、视频直播等三种直播形式，可与机构的公众号绑定，享有独立机构品牌；还可以和鲸打卡小程序的作业练习场景打通，一站式完成教学闭环。</p>
                        <h6><Link to='/chanpin'>查看详情 ></Link></h6>
                    </div>
                </div>
            </div>
            <div className='center7'>
                <Link to=''>了解详情</Link>
                <Link to=''>立即申请使用</Link>
            </div>
            <div className='center8'>
                <div className='center8_1'>
                    <img src='src/img/bg_logobg.png'/>
                    <div className='center8_2'>
                        <img src='src/img/title-left.png'/>
                        <div>
                            <h1>微信年度教育行业优秀奖的技术服务商</h1>
                        </div>
                        <img src='src/img/title-right.png'/>
                    </div>
                </div>
                <h5>教育行业头部客户至优之选</h5>
            </div>
            <div className='center9'>
                <div className='center9_1'>
                    <li>
                        <div>7500+</div>
                        <div>服务超 7500+ 家付费教育机构</div>
                    </li>
                    <li>
                        <div>TOP100</div>
                        <div>获得 1/3 以上的 TOP100 教育公司认可</div>
                    </li>
                    <li>
                        <div>3000万+</div>
                        <div>覆盖超 3000万C端学员</div>
                    </li>
                </div>
            </div>
            <div className='center10'>
                <ul>
                    <li><img src='src/img/img_1.png'/></li>
                    <li><img src='src/img/img_2.png'/></li>
                    <li><img src='src/img/img_3.png'/></li>
                    <li><img src='src/img/img_4.png'/></li>
                    <li><img src='src/img/img_5.png'/></li>
                    <li><img src='src/img/img_6.png'/></li>
                    <li><img src='src/img/img_7.png'/></li>
                    <li><img src='src/img/img_8.png'/></li>
                    <li><img src='src/img/img_9.png'/></li>
                    <li><img src='src/img/img_10.png'/></li>
                    <li><img src='src/img/img_11.png'/></li>
                    <li><img src='src/img/img_12.png'/></li>
                    <li><img src='src/img/img_13.png'/></li>
                    <li><img src='src/img/img_14.png'/></li>
                    <li><img src='src/img/img_15.png'/></li>
                    <li><img src='src/img/img_16.png'/></li>
                    <li><img src='src/img/img_17.png'/></li>
                    <li><img src='src/img/img_18.png'/></li>
                    <li><img src='src/img/img_19.png'/></li>
                    <li><img src='src/img/img_20.png'/></li>
                    <li><img src='src/img/img_21.png'/></li>
                    <li><img src='src/img/img_22.png'/></li>
                    <li><img src='src/img/img_23.png'/></li>
                    <li><img src='src/img/img_24.png'/></li>
                    <li><img src='src/img/img_25.png'/></li>
                    <li><img src='src/img/img_26.png'/></li>
                    <li><img src='src/img/img_27.png'/></li>
                    <li><img src='src/img/img_28.png'/></li>
                    <li><img src='src/img/img_29.png'/></li>
                    <li><img src='src/img/img_30.png'/></li>
                    <li><img src='src/img/img_31.png'/></li>
                    <li><img src='src/img/img_32.png'/></li>
                    <li><img src='src/img/img_33.png'/></li>
                    <li><img src='src/img/img_34.png'/></li>
                    <li><img src='src/img/img_35.png'/></li>
                    <li><img src='src/img/img_36.png'/></li>
                    <li><img src='src/img/img_37.png'/></li>
                    <li><img src='src/img/img_38.png'/></li>
                    <li><img src='src/img/img_39.png'/></li>
                    <li><img src='src/img/img_40.png'/></li>
                </ul>
            </div>
            <div className='center11'>
                <div className='center11_2'>
                    <img src='src/img/title-left.png'/>
                    <div>
                        <h1>他们这样评价鲸打卡</h1>
                    </div>
                    <img src='src/img/title-right.png'/>
                </div>
            </div>
            <div className='center12'>
            <div className="swiper-container  swiper2">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className='center12_1'>
                            <div className='center12_1_1'>
                                <img src='src/img/zhaojiankun.png'/>
                            </div>
                            <div className='center12_1_2'>
                            赵建昆
                            </div>
                            <div className='center12_1_3'>
                            有道考神CEO
                            </div>
                            <div className='center12_2'>
                        我们使用鲸打卡已经两年了，鲸打卡的出现，让我们的运营同学能够更加简单、高效的开展工作，学员能有效提高学习的积极性，同时公司品牌也得到了广泛的推广。
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className='center12_1'>
                            <div className='center12_1_1'>
                                <img src='src/img/caijinlong.png'/>
                            </div>
                            <div className='center12_1_2'>
                            蔡金龙
                            </div>
                            <div className='center12_1_3'>
                            掌上园丁创始人，前华图董事副总裁
                            </div>
                            <div className='center12_2'>
                            习惯是学习的重要环节，鲸打卡是习惯养成的有效工具。
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className='center12_1'>
                            <div className='center12_1_1'>
                                <img src='src/img/amay.png'/>
                            </div>
                            <div className='center12_1_2'>
                            阿may
                            </div>
                            <div className='center12_1_3'>
                            群勾搭联合创始人
                            </div>
                            <div className='center12_2'>
                            当朋友问我用哪款打卡软件好的时候，我都一致推荐鲸打卡，功能全，服务好，非常适合教育机构使用。
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className='center12_1'>
                            <div className='center12_1_1'>
                                <img src='src/img/chenshipei.png'/>
                            </div>
                            <div className='center12_1_2'>
                            陈诗蓓
                            </div>
                            <div className='center12_1_3'>
                            24好玩营销平台运营主管
                            </div>
                            <div className='center12_2'>
                            用鲸打卡，让教学更简单，让学习更高效。
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className='center12_1'>
                            <div className='center12_1_1'>
                                <img src='src/img/wenbin.png'/>
                            </div>
                            <div className='center12_1_2'>
                            文斌
                            </div>
                            <div className='center12_1_3'>
                            24K知识付费社群创始人
                            </div>
                            <div className='center12_2'>
                            鲸打卡很清楚用户的需求，功能多而不杂，是一款很好的社群工具产品。
                        </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-button-prev swiper-button-prev2"></div>
                <div className="swiper-button-next swiper-button-next2"></div>             
            </div>
            </div>
        </div>
    )
}
}