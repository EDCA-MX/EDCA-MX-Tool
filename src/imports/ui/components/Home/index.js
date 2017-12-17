import { Switch, Route } from 'react-router-dom';

import '/imports/ui/styles/App/HomeContainer.scss';
import '/imports/ui/styles/Navigation/dropzone.scss';
import '/imports/ui/styles/Navigation/app.scss';
import '/imports/ui/styles/Navigation/dashboard.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Dropzone from '/imports/ui/components/Navigation/Dropzone';
import Jsonify from '/imports/ui/containers/Landing/jsonify';

import { compose, withHandlers, lifecycle, withState } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Home = props =>
  <div id="outer-container">
    <main id="page-wrap">
      <div className="main-container">
        <div id="gui" className="padd-section bg-color-blue">
          <div className="container">
            <div className="row-centered">
              <div className="row-centered white-text">
                <div className="col-md-6 col-sm-12 col-centered">
                  <h2 className="section-title text-center blue-text">EDCA-MX</h2>

                  <p>
                    Esta pagina sirve como complemento al <br />
                    <b>
                      <a className="green-text" href="https://github.com/">
                        EDCA-MX, Heramienta de Captura
                      </a>
                    </b>
                  </p>
                </div>
                <div className="mid-container">
                  <Dropzone setShow={props.setShow} />
                </div>
                <div className="mid-container v-space">
                  <Jsonify show={props.show} content={props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>;

const HomeContainer = compose(
  graphql(
    gql`
      mutation refresh($file: FileInput) {
        refresh(file: $file)
      }
    `,
    {
      name: 'refresh',
    }
  ),
  withState('show', 'setShow', false),
  withState('JSONdata', 'setData', ''),
  withHandlers({
    refresh: ({ refresh }) => file => {
      refresh({
        variables: { file },
        refetchQueries: [
          {
            query: gql`
              query get0 {
                get0
              }
            `,
          },
        ],
      });
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.refresh();
    },
  })
)(Home);

export default HomeContainer;
