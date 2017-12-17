import '/imports/ui/styles/App/HomeContainer.scss';
import Download from '@axetroy/react-download';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const data = gql`
  query upload0 {
    get0
  }
`;

const JSONIFY = props => {
  if (props.show && props.data.get0 && Object.keys(props.data.get0[0]).length > 1) {
    let content = JSON.stringify(props.data.get0[0], null, 2);
    return (
      <div className="button-container">
        <Download file="data.json" content={content}>
          <button className="download" type="button" />
        </Download>
      </div>
    );
  }
  return <div />;
};

const JSONWithData = graphql(data)(JSONIFY);

export default JSONWithData;
