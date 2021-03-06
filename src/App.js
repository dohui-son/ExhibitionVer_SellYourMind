import React from 'react';

import './stylesheet/global.scss';
import { Route, HashRouter } from 'react-router-dom';
import CityMeta from './components/CityMetaverse.js';
import DetailQuote from './components/DetailQuote';
import Detail_1 from './components/Detail_1';
import Detail_2 from './components/Detail_2';
import Detail_3 from './components/Detail_3';
import Detail_4 from './components/Detail_4';
import Detail_5 from './components/Detail_5';
import Detail_6 from './components/Detail_6';
import Detail_7 from './components/Detail_7';
import Detail_8 from './components/Detail_8';
import Detail_9 from './components/Detail_9';
import Detail_10 from './components/Detail_10';
import Detail_11 from './components/Detail_11';
import Detail_12 from './components/Detail_12';
import Detail_13 from './components/Detail_13';
import Detail_14 from './components/Detail_14';
import Detail_15 from './components/Detail_15';
import Detail_16 from './components/Detail_16';
import Detail_17 from './components/Detail_17';
import Detail__18 from './components/Detail__18';
import Detail__19 from './components/Detail__19';
import Detail__20 from './components/Detail__20';
import Detail__21 from './components/Detail__21';
import Detail__22 from './components/Detail__22';
import Detail__23 from './components/Detail__23';
import Detail__24 from './components/Detail__24';
import Detail__25 from './components/Detail__25';
import Detail__26 from './components/Detail__26';
import Detail__27 from './components/Detail__27';
import Detail__28 from './components/Detail__28';
import Detail__30 from './components/Detail__30';
import Detail__31 from './components/Detail__31';
import CityMetaverse from './components/CityMetaverse';
import Detail__33 from './components/Detail__33';
import Detail__34 from './components/Detail__34';
import Detail__35 from './components/Detail__35';
import Detail__36 from './components/Detail__36';
import Detail__37 from './components/Detail__37';
import Detail__38 from './components/Detail__38';
import Detail__40 from './components/Detail__40';
import Detail__41 from './components/Detail__41';
import Detail__42 from './components/Detail__42';
import Detail__43 from './components/Detail__43';

const App = () => {
  return (
    <div classname="global">
      <HashRouter>
        <Route exact path="/OfflineExhibitionMode" component={CityMeta} />
        <Route exact path="/" component={CityMeta} />
        <Route path="/d43" component={Detail__43} exact={true} />
        <Route path="/d42" component={Detail__42} exact={true} />
        <Route path="/d41" component={Detail__41} exact={true} />
        <Route path="/d40" component={Detail__40} exact={true} />
        <Route path="/d38" component={Detail__38} exact={true} />
        <Route path="/d37" component={Detail__37} exact={true} />
        <Route path="/d36" component={Detail__36} exact={true} />
        <Route path="/d35" component={Detail__35} exact={true} />
        <Route path="/d34" component={Detail__34} exact={true} />
        <Route path="/d33" component={Detail__33} exact={true} />
        <Route path="/d32" component={CityMetaverse} exact={true} />
        <Route path="/d31" component={Detail__31} exact={true} />
        <Route path="/d30" component={Detail__30} exact={true} />
        <Route path="/d28" component={Detail__28} exact={true} />
        <Route path="/d27" component={Detail__27} exact={true} />
        <Route path="/d26" component={Detail__26} exact={true} />
        <Route path="/d25" component={Detail__25} exact={true} />
        <Route path="/d24" component={Detail__24} exact={true} />
        <Route path="/d23" component={Detail__23} exact={true} />
        <Route path="/d22" component={Detail__22} exact={true} />
        <Route path="/d21" component={Detail__21} exact={true} />
        <Route path="/d20" component={Detail__20} exact={true} />
        <Route path="/d19" component={Detail__19} exact={true} />
        <Route path="/d18" component={Detail__18} exact={true} />
        <Route path="/d17" component={Detail_17} exact={true} />
        <Route path="/d16" component={Detail_16} exact={true} />
        <Route path="/d15" component={Detail_15} exact={true} />
        <Route path="/d14" component={Detail_14} exact={true} />
        <Route path="/d13" component={Detail_13} exact={true} />
        <Route path="/d12" component={Detail_12} exact={true} />
        <Route path="/d11" component={Detail_11} exact={true} />
        <Route path="/d10" component={Detail_10} exact={true} />
        <Route path="/d9" component={Detail_9} exact={true} />
        <Route path="/d8" component={Detail_8} exact={true} />
        <Route path="/d7" component={Detail_7} exact={true} />
        <Route path="/d6" component={Detail_6} exact={true} />
        <Route path="/d5" component={Detail_5} exact={true} />
        <Route path="/d4" component={Detail_4} exact={true} />
        <Route path="/d3" component={Detail_3} exact={true} />
        <Route path="/d2" component={Detail_2} exact={true} />
        <Route path="/d1" component={Detail_1} exact={true} />
        <Route path="/detailquote" component={DetailQuote} exact={true} />{' '}
      </HashRouter>
    </div>
  );
};

export default App;
