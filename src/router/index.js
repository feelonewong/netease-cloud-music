import Friend from "@/pages/friend/";
import Mine from "@/pages/mine/";
import Discover from "@/pages/discover/";

const routers = [
    {
        path: "/",
        exact: true,
        component: Discover,
    },
    {
        path: "/discover",
        component: Discover,
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
