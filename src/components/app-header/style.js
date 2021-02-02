import styled from "styled-components";

export const HeaderWrapper = styled.div`
  color: #FFF;
  background-color: #242424;
  height: 75px;
  .content{
    height: 70px;
    display: flex;
    justify-content: space-between;
   
  };
  .divider{
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  .logo{
    width: 176px;
    height: 69px;
    background-position: 0 0;
    display: block;
    background-image: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?eb239b670c5c96adb13396f01af2edc5);
    background-repeat: no-repeat;
  }
  .select-list {
    display: flex;
    line-height: 70px;
  }
  .select-item {
    position: relative;
   
    a{
      padding: 0 20px;
      color: #ccc;
      display: block;
      
    }
    :last-of-type a{
      position: relative;
      //控制hot图标
      ::after{
        position: absolute;
        content: "";
        width: 28px;
        height: 19px;
        background-image: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?eb239b670c5c96adb13396f01af2edc5);
        background-position: -190px 0 ;
        top: 20px;
        right: -15px;
      }
    }
    //控制hover状态
    &:hover a, &.active a {
      color: #fff;
      background-color: #000;
      text-decoration: none;
    }
    //控制图标
    &.icon{
      position: absolute;
      display: inline-block;
      width: 12px;
      height: 7px;
      bottom: -1px;
      left: -50%;
      transform: translate(-50%, 0);
      background-position: -226px 0;
    }
    
  }
`;


export const HeaderRight = styled.div`

`;