import { Switch, Route } from 'react-router-dom';

import '/imports/ui/styles/App/HomeContainer.scss';
import '/imports/ui/styles/Navigation/dropzone.scss';
import '/imports/ui/styles/Navigation/sidebar.scss';
import '/imports/ui/styles/Navigation/app.scss';
import '/imports/ui/styles/Navigation/dashboard.scss';
import 'bootstrap/dist/css/bootstrap.css';
import MainMenu from '/imports/ui/components/Navigation/Menu';

import Convertion from '/imports/ui/components/Home/Convertion';
import Save from '/imports/ui/components/Home/Save';
import Update from '/imports/ui/components/Home/Update';

const Home = props =>
  <div id="outer-container">
    <MainMenu {...props} />
    <main id="page-wrap">
      <Switch>
        <Route exact path="/" component={Convertion} />
        <Route exact path="/saveRecord" component={Save} />
        <Route exact path="/updateRecord" component={Update} />
        <Route exact path="/consultRecords" component={Save} />
      </Switch>
    </main>
  </div>;

export default Home;
