import styled from "styled-components";

export const DiscoverWrapper = styled.div`
    background-color: #c20c0c;
    height: 30px;
    ul{
        padding-left: 180px;
        list-style: none;
        display: flex;
        
        li{
           line-height:24px;
           width: 84px;
           height: 30px;
           text-align: center;
           a {
               color: #fff;
               font-size: 12px;
               display: inline-block;
               padding-bottom: 3px;
            }
            em{
                
                font-style:normal;
                height: 20px;
                line-height:20px;
                height: 20px;
                display: inline-block;
            }
            em:hover{
               
               border-radius: 20px;
               padding: 2px;
               background-color:#9B0909;
               padding: 0px  13px; 
            }
            a.active em{
                background-color: #9B0909;
                border-radius: 20px;
               padding: 0px  13px; 

            }
           }
        }
    }
`