import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import firebaseConfig from "./firebase/firebase.jsx"

// import { Provider } from "react-redux";
// import store from "./redux/store";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import AbellaDanger from './components/Stars/A/AbellaDanger.jsx';
import AlexaGrace from './components/Stars/A/AlexaGrace.jsx';
import BellaRolland from './components/Stars/B/BellaRolland.jsx';
import MilaAzul from './components/Stars/M/MilaAzul.jsx';
import ToriBlack from './components/Stars/T/ToriBlack.jsx';
import UmaJolie from './components/Stars/U/UmaJolie.jsx';
import TiffanyTatum from './components/Stars/T/TiffanyTatum.jsx';
import Error404 from './Error404.jsx';

import ChristyWhite from './components/Stars/C/ChristyWhite.jsx';
// import JessieSaint from './components/Stars/J/JessieSaint.jsx';
import JiaLissa from './components/Stars/J/JiaLissa.jsx';
import LenaAnderson from './components/Stars/L/LenaAnderson.jsx'
import LenaIsReadyToGo from './components/Stars/L/LenaAnderson/LenaIsReadyToGo.jsx';
import LenaEnjoysWineAndGoodTimes from './components/Stars/L/LenaAnderson/LenaEnjoysWineAndGoodTimes.jsx';
import Home from './components/Navbar/Home.jsx';
import LiyaSilver from './components/Stars/L/LiyaSilver.jsx';
import GetCozy from './components/Stars/L/LenaAnderson/GetCozy.jsx';
import WeAllDoIt from './components/Stars/L/LenaAnderson/WeAllDoIt.jsx';


import SophiaLeone from './components/Stars/S/SophiaLeone.jsx';
import Spray from './components/Folders/Spray.jsx';
import LeahGotti from './components/Stars/L/LeahGotti.jsx';
import ArianaMarie from './components/Stars/A/ArianaMarie.jsx';
import AugustAmes from './components/Stars/A/AugustAmes.jsx';
import AveryCristy from './components/Stars/A/AveryCristy.jsx';
import CaseyCalvert from './components/Stars/C/CaseyCalvert.jsx';
import CharlieRed from './components/Stars/C/CharlieRed.jsx';
import Score from './components/Folders/Score.jsx';
import OxanaChic from './components/Stars/O/OxanaChic.jsx';
import LottieMagne from './components/Stars/L/LottieMagne.jsx';
import LilyLarimar from './components/Stars/L/Lilylarimar.jsx';
import EmilyWillis from './components/Stars/E/EmilyWillis.jsx';
import RebeccaVolpetti from './components/Stars/R/RebeccaVolpetti.jsx';
import Stars from './components/Stars/Stars.jsx';
import Feets from './components/Feet/Feets.jsx';









    
    

    
    //////////////////////////////////////////////
Fancybox.bind('[data-fancybox="gallery"]', {
  Toolbar: {
    display: {
      left: ["infobar"],
      middle: [
        "zoomIn",
        "zoomOut",
        "toggle1to1",
        "rotateCCW",
        "rotateCW",
        "flipX",
        "flipY",
      ],
      right: ["slideshow", "fullscreen", "thumbs", "download", "close"],
    },
  },
}); 
//  end
const router = createBrowserRouter([
  {
    path: "*",
    element: <Error404 />,
  },
  {
    path: "/",
    element: <App />,
    exact: true
  },
  {
    path: "/:name",
    element: <Stars />,
  },
  {
    path: "/feets",
    element: <Feets />,
  },
  {
    path: "AbellaDanger",
    element: <AbellaDanger />,
    
  },
  {
    path: "alexaGrace",
    element: <AlexaGrace />,
  },
  {
    path: '/ariana-marie',
    element: <ArianaMarie />,
  },
  {
    path: '/august-ames',
    element: <AugustAmes />,
  },
  {
    path: '/avery-cristy',
    element: <AveryCristy />,
  },
  {
    path: "/bella-rolland",
    element: <BellaRolland />,
  },
  {
    path: '/casey-calvert',
    element: <CaseyCalvert />,
  },
  {
    path: '/charlie-red',
    element: <CharlieRed />,
  },
  {
    path: "/christyWhite",
    element: <ChristyWhite />,
  },
  {
    path: "/emily-willis",
    element: <EmilyWillis />,
  },
  // {
  //   path: "/jessieSaint",
  //   element: <JessieSaint />,
  // },
  {
    path: "/jiaLissa",
    element: <JiaLissa />,
  },
  {
    path: '/leah-gotti',
    element: <LeahGotti />,
  },
  {
    path: "/lenaAnderson",
    element: <LenaAnderson />,
  },
      {
        path: "/we-all-do-it",
        element: <WeAllDoIt />,
      },
      {
        path: "/get-cozy",
        element: <GetCozy />,
      },
      {
        path: "/lena-is-ready-to-let-go",
        element: <LenaIsReadyToGo />,
      },
      {
        path: "/lena-enjoys-wine-and-good-times",
        element: <LenaEnjoysWineAndGoodTimes />,
      },
  {
    path: "/lottie-magne",
    element: <LottieMagne />,
  },
  {
    path: "/lily-larimar",
    element: <LilyLarimar />,
  },
  {
    path: "/liyaSilver",
    element: <LiyaSilver />,
  },
 
  {
    path: "/milaAzul",
    element: <MilaAzul />,
  },
  {
    path: "/oxana-chic",
    element: <OxanaChic />,
  },
  {
    path: "/rebecca-volpetti",
    element: <RebeccaVolpetti />,
  },
  {
    path: "/sophia-leone",
    element: <SophiaLeone />,
  },
      {
        path: "/spray",
        element: <Spray/>
      },
      {
        path: "/score",
        element: <Score/>
      },
  {
    path: "/tiffanyTatum",
    element: <TiffanyTatum />,
  },
  {
    path: "/toriBlack",
    element: <ToriBlack />,
  },
  {
    path: "/umaJolie",
    element: <UmaJolie />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}></Provider> */}
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
