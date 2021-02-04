import React, { useEffect} from "react";
import { useDispatch,useSelector} from "react-redux";
import { getTopBannerAction } from "./store/actionCreator";
export default function Recommend(){
    const {topBanners} = useSelector( state=>({
        topBanners: state.recommend.topBanners
    }));
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTopBannerAction());
    },[dispatch])
    return (
        <div>
            <h1>Recommend: {topBanners.length}</h1>
        </div>
    )
}

// function Recommend(props){
//     const { getBanners } = props;
//     useEffect(  ()=>{
//         getBanners();
//     },[getBanners])
//     return(
//         <div>
//             <h1>Recommend</h1>
//         </div>
//     )
// }
// const mapStateToProps = state=>({
//   topBanners: state.recommend.topBanners
// })
//
// const mapDispatchToProps =  dispatch=>({
//     getBanners: ()=>{
//         dispatch( getTopBannerAction() )
//     }
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));