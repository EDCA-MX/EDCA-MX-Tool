import { Switch, Route } from 'react-router-dom';

import '/imports/ui/styles/App/HomeContainer.scss';
import '/imports/ui/styles/Navigation/dropzone.scss';
import '/imports/ui/styles/Navigation/app.scss';
import '/imports/ui/styles/Navigation/dashboard.scss';
import 'bootstrap/dist/css/bootstrap.css';

import { compose, withHandlers, lifecycle, withState } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './saveForm/Form';

import Dropzone from './Dropzone';

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
                <Form formType="save" saveData={props.setFormData} />
                <div className="col-md-6 col-sm-12 col-centered">
                  <h3 className="section-title text-center blue-text">Datos</h3>
                  <Dropzone saveData={props.setData} />
                </div>
                <div className="col-md-12 col-sm-12 col-centered">
                  <button
                    className="upload"
                    onClick={event => {
                      props.record({ id: props.formData, data: props.data });
                      console.log({ id: props.formData, data: props.data });
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
