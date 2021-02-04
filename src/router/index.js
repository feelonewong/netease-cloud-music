import {Redirect} from "react-router-dom";
import Friend from "@/pages/friend/";
import Mine from "@/pages/mine/";
import Discover from "@/pages/discover/";
import Album from "@/pages/discover/c-pages/album/";
import Artist from "@/pages/discover/c-pages/artist/";
import Djradio from "@/pages/discover/c-pages/djradio/";
import PlayList from "@/pages/discover/c-pages/playlist/";
import Recommend from "@/pages/discover/c-pages/recommend/";
import TopList from "@/pages/discover/c-pages/toplist/";


const routers = [
    {
        path: "/",
        exact: true,
        component: Discover,
    },
    {
        path: "/discover",
        component: Discover,
        routes:[
            { 
                path: "/discover/",
                exact: true,
                component: Recommend,                                
            },
            { 
                path: "/discover/recommend",
                render: ()=> <Redirect to="/discover/"></Redirect>
            },
            { 
                path: "/discover/album",
                component: Album
            },
            { 
                path: "/discover/artist",
                component: Artist
            },
            { 
                path: "/discover/djradio",
                component: Djradio
            },
            { 
                path: "/discover/playlist",
                component: PlayList
            },
            { 
                path: "/discover/toplist",
                component: TopList
            },
        ]
    },
    {
        path: "/mine",
        component: Mine,
    },
    {
        path: "/friend",
        component: Friend,
    },
]
export default routers;
