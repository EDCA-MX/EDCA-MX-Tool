import DropzoneComponent from 'react-dropzone-component';
import ReactDOMServer from 'react-dom/server';
import { compose, withHandlers, withState } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

let componentConfig = {
  iconFiletypes: ['.xlsx', '.xlsx', '.xlsx'],
  showFiletypeIcon: true,
  postUrl: 'no-url',
};

var djsConfig = {
  acceptedFiles: '.xlsx,.xls',
  autoProcessQueue: false,
  showFiletypeIcon: true,
  params: {
    myParam: 'Hello from a parameter!',
    dictRemoveFile: 'lol',
    anotherParam: 43,
  },
  previewTemplate: ReactDOMServer.renderToStaticMarkup(
    <div className="dz-preview dz-file-preview">
      <div className="uploaded-files">
        <div className="dz-details">
          <div className="dz-file-description">
            <div className="dz-filename">
              <span data-dz-name="true" />
            </div>
            <div className="dz-remove dz-remove-icon" data-dz-remove>
              <img src={'./assets/icons/delete.png'} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

const Dropzone = props => {
  var eventHandlers = {
    addedfile: file => {
      props.setShow(true);
      switch (file.name) {
        case '00-Datos_globales_de_la_entrega.xlsx': {
          props.handleFile0(file);
          break;
        }
        case '01-Planeacion_y_consultas.xlsx': {
          props.handleFile1(file);
          break;
        }
        case '03-Evaluacion.xlsx': {
          props.handleFile2(file);
          break;
        }
        case '02-Licitacion.xlsx': {
          props.handleFile3(file);
          break;
        }
        case '04-Adjudicacion.xlsx': {
          props.handleFile4(file);
          break;
        }
        case '05-Contrato.xlsx': {
          props.handleFile5(file);
          break;
        }
        case '06-Implementacion.xlsx': {
          props.handleFile6(file);
          break;
        }
        default:
          break;
      }
    },
  };
  return (
    <div>
      <DropzoneComponent
        config={componentConfig}
        eventHandlers={eventHandlers}
        djsConfig={djsConfig}
      />
    </div>
  );
};

const DropzoneContainer = compose(
  graphql(
    gql`
      mutation upload0($file: FileInput) {
        upload0(file: $file)
      }
    `,
    {
      name: 'upload0',
    }
  ),
  graphql(
    gql`
      mutation upload1($file: FileInput) {
        upload1(file: $file)
      }
    `,
    {
      name: 'upload1',
    }
  ),
  graphql(
    gql`
      mutation uploaF2($file: FileInput) {
        upload2(file: $file)
      }
    `,
    {
      name: 'upload2',
    }
  ),
  graphql(
    gql`
      mutation upload3($file: FileInput) {
        upload3(file: $file)
      }
    `,
    {
      name: 'upload3',
    }
  ),
  graphql(
    gql`
      mutation upload4($file: FileInput) {
        upload4(file: $file)
      }
    `,
    {
      name: 'upload4',
    }
  ),
  graphql(
    gql`
      mutation upload5($file: FileInput) {
        upload5(file: $file)
      }
    `,
    {
      name: 'upload5',
    }
  ),
  graphql(
    gql`
      mutation upload6($file: FileInput) {
        upload6(file: $file)
      }
    `,
    {
      name: 'upload6',
    }
  ),
  withHandlers({
    handleFile0: ({ upload0 }) => file => {
      upload0({
        variables: { file },
        refetchQueries: [
          {
            query: gql`
              query getF0 {
                get0
              }
            `,
          },
        ],
      });
    },
    handleFile1: ({ upload1 }) => file => {
      upload1({
        variables: { file },
        refetchQueries: [
          {
            query: gql`
              query getF0 {
                get0
              }
            `,
          },
        ],
      });
    },
    handleFile2: ({ upload2 }) => file => {
      upload2({
        variables: { file },
        refetchQueries: [
          {
            query: gql`
              query getF2 {
                get0
              }
            `,
          },
        ],
      });
    },
    handleFile3: ({ upload3 }) => file => {
      upload3({
        variables: { file },
        refetchQueries: [
          {
            query: gql`
              query getF3 {
                get0
              }
            `,
          },
        ],
      });
    },
    handleFile4: ({ upload4 }) => file => {
      upload4({
        variables: { file },
        refetchQueries: [
          {
            query: gql`
              query getF4 {
                get0
              }
            `,
          },
        ],
      });
    },
    handleFile5: ({ upload5 }) => file => {
      upload5({
        variables: { file },
        refetchQueries: [
          {
            query: gql`
              query getF5 {
                get0
              }
            `,
          },
        ],
      });
    },
    handleFile6: ({ upload6 }) => file => {
      upload6({
        variables: { file },
        refetchQueries: [
          {
            query: gql`
              query getF6 {
                get0
              }
            `,
          },
        ],
      });
    },
  })
)(Dropzone);

export default DropzoneContainer;
