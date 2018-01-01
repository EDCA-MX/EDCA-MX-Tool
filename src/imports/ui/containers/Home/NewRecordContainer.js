import { bindActionCreators } from 'redux';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Map } from 'immutable';
// Components

import AuthButton from '../../components/Auth/AuthButton';
import AuthForm from '../../components/Auth/forms/AuthForm';
import SelectLanguage from '../../components/Intl/SelectLanguage';
// Actions
import * as authActions from '../../redux/reducers/auth/authActions';
import * as intlActions from '../../redux/reducers/intl/intlActions';

const actions = [authActions, intlActions];

function mapDispatchToProps(dispatch) {
  const creators = Map().merge(...actions).filter(value => typeof value === 'function').toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch,
  };
}

class FormRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        username: this.props.auth.form.fields.username,
        email: this.props.auth.form.fields.email,
        password: this.props.auth.form.fields.password,
        passwordAgain: this.props.auth.form.fields.passwordAgain,
      },
    };
  }
  componentWillReceiveProps(nextprops) {
    this.setState({
      values: {
        username: nextprops.auth.form.fields.username,
        email: nextprops.auth.form.fields.email,
        password: nextprops.auth.form.fields.password,
        passwordAgain: nextprops.auth.form.fields.passwordAgain,
      },
    });
    let onChange = values => {
      let newValues = Object.assign({}, this.state.values);

      this.setState({ values: newValues });
    };
  }

  render() {
    let { formType, loginButtonText, onButtonPress } = this.props;

    return (
      <div>
        <div>
          <AuthForm
            formType={formType}
            form={this.props.auth.form}
            onChange={onChange}
            values={this.state.values}
          />
          {passwordCheckbox}
        </div>
        <AuthButton
          isDisabled={!this.props.auth.form.isValid || this.props.auth.form.isFetching}
          onClick={onButtonPress}
          buttonText={loginButtonText}
        />
        <br />
        <div>
          {rightLink}
          {leftLink}
        </div>
        <br />
        {this.props.auth.form.error
          ? <h3>
              <FormattedMessage id={this.props.auth.form.error} />
            </h3>
          : null}
        <br />
        <SelectLanguage
          actions={this.props.actions}
          intlState={this.props.intlState}
          intl={this.props.intl}
        />
      </div>
    );
  }
}
export default connect(null, mapDispatchToProps)(withRouter(FormRender));
