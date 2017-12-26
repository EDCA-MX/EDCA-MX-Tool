import { Switch, Route } from 'react-router-dom';

import '/imports/ui/styles/App/HomeContainer.scss';
import '/imports/ui/styles/Navigation/dropzone.scss';
import '/imports/ui/styles/Navigation/app.scss';
import '/imports/ui/styles/Navigation/dashboard.scss';
import 'bootstrap/dist/css/bootstrap.css';

import { compose, withHandlers, lifecycle, withState } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Convertion = props =>
  <div id="outer-container">
    <main id="page-wrap">
      <div className="main-container">
        <div id="gui" className="padd-section bg-color-blue">
          <div className="container">
            <div className="row-centered">
              <div className="row-centered white-text">
                <div className="col-md-6 col-sm-12 col-centered">
                  <h3 className="section-title text-center blue-text">Nuevo Registro</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>;

const ConvertionContainer = compose(
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
)(Convertion);

export default ConvertionContainer;
