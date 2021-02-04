import React, {memo} from "react";
import {NavLink} from "react-router-dom";
import {
  DiscoverWrapper
} from "./style";
import {topMenu} from "@/common/local-data";
export default memo(function  Discover(){
    return(
        <>
          <DiscoverWrapper>
            <ul className="wrapper-v1">
              {
                topMenu.map( item=>{
                  return <li key="item.title">
                        <NavLink to={item.link} >
                           <em>{item.title}</em>
                        </NavLink>
                  </li>
                })
              }
            </ul>
          </DiscoverWrapper>
        </>
    )
})