import { Switch, Route } from 'react-router-dom';

import '/imports/ui/styles/App/HomeContainer.scss';
import '/imports/ui/styles/Navigation/dropzone.scss';
import '/imports/ui/styles/Navigation/app.scss';
import '/imports/ui/styles/Navigation/dashboard.scss';
import 'bootstrap/dist/css/bootstrap.css';

import { compose, withHandlers, lifecycle, withState } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Dropzone from './Dropzone';
import Form from './saveForm/Form';

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
                  <Form formType="save" saveData={props.setFormData} />
                  <Dropzone saveData={props.setData} ocid={props.formData} />
                </div>
                <div className="col-md-12 col-sm-12 col-centered">
                  <button
                    className="upload"
                    onClick={event => {
                      props.record(props.data);
                    }}
                  />
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
      mutation record($file: FileInput) {
        record(file: $file)
      }
    `,
    {
      name: 'record',
    }
  ),
  withState('formData', 'setFormData', ''),
  withState('data', 'setData', ''),
  withHandlers({
    record: ({ record }) => file => {
      record({
        variables: { file },
      });
    },
  })
)(Convertion);

export default ConvertionContainer;
