import Home from './components/home';
import navPage from './components/navPage';
import aboutMe from './components/aboutMe';
import mySkills from './components/mySkills';
import myWorks from './components/myWorks';
import contact from './components/contact';
import AppSec from './components/AppSec';
import cv from './components/cv';
import PhotoView from './components/PhotoView';

export const routes=[
{path:'/',component:Home},
{path:'/navPage',component:navPage},
{path:'/max',component:AppSec,props:true,
	children: [
        {path:'aboutMe',component:aboutMe,props:true},
        {path:'mySkills',component:mySkills},
        {path:'myWorks',name:'works',component:myWorks,props:true},
        {path:'contact',component:contact},
        {path:'cv',component:cv}
      ]
},
{path:'/photo/:id',name:'infoWork',component:PhotoView,props:true},

]