import React, {memo} from 'react';
import { NavLink } from "react-router-dom";
import { SearchOutlined } from '@ant-design/icons';
import {Input, Button} from 'antd';

import {headerLinks} from "@/common/local-data.js";

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from "./style";

export default memo(function AppContent(){
        const showSelectItem = (item,index)=>{
            if(index<3){
                return (
                    <NavLink to={item.link} exact>
                        {item.title}
                        <i className="sprite_01 icon"></i>
                    </NavLink>
                )
            }else{
                return(
                    <a href={item.link} >{item.title}</a>
                )
            }
        }
        return(
            <>
                <HeaderWrapper>
                    <div className="content wrapper-v1">
                        <HeaderLeft>
                            <a href="#/" className="logo">123</a>
                            <div className="select-list">
                                {
                                    headerLinks.map( (item, index)=>{
                                        return (
                                            <div key={item.title} className="select-item">
                                                {showSelectItem(item, index)}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </HeaderLeft>
                        <HeaderRight>
                            <div className="input-search">
                              <Input size="large" className="search" placeholder="音乐/视频/电台/用户"  prefix={<SearchOutlined  />} />
                             <Button  shape="round" size="medium" className="create-button">
                                       创作者中心
                              </Button>

                              <Button type="link" className="login">登录</Button>
                            </div>
                        </HeaderRight>
                    </div>
                    <div className="divider"></div>
                    
                </HeaderWrapper>
            </>
        )
    }
);