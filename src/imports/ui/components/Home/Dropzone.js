import DropzoneComponent from 'react-dropzone-component';
import ReactDOMServer from 'react-dom/server';
import { compose, withHandlers } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

let componentConfig = {
  iconFiletypes: ['.json'],
  showFiletypeIcon: true,
  postUrl: 'no-url',
};

var djsConfig = {
  acceptedFiles: '.json',
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
        case 'entrega.json': {
          props.handleJSON(file);
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
  withHandlers({
    handleJSON: ({ upload0 }) => file => {
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
  })
)(Dropzone);

export default DropzoneContainer;
