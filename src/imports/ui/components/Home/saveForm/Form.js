import React from 'react';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import tags from './tags';

let InputText = styled.input.attrs({
  type: props => (props.type ? props.type : 'text'),
  placeholder: props => props.placeholder,
  maxLength: props => props.maxLength,
  disabled: props => props.disabled,
  onChange: props => props.onChange,
  value: props => props.value,
})`
  color: palevioletred;
	font-size: 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

let InputTitle = styled.h2`
  color: white;
  font-size: 1em;
`;

let InputError = styled.h2`
  color: tomato;
  font-size: 1em;
`;

const { SIGNIN } = require('../../../redux/reducers/actionsConstants').default;

class AuthForm extends React.Component {
  /**
   * ## render
   *
   * setup all the fields using the props and default messages
   *
   */
  render() {
    let onChange = values => {
      console.log(values);
    };
    let { formType } = this.props;
    let username = {
      type: 'text',
      label: 'text',
      placeholder: 'text',
      error: 'text',
      maxLength: 12,
    };

    let loginForm;

    switch (formType) {
      /**
       * ### Registration
       * The registration form has 4 fields
       */
      case SIGNIN:
        loginForm = (
          <div>
            <div>
              <InputTitle>Identificator</InputTitle>
              <input
                type="text"
                placeholder="ocds-xxxxxx-0000"
                value={username.value}
                maxLength={username.maxLength}
                disabled={username.disabled}
                onChange={event => {
                  onChange({ username: event.target.value });
                }}
              />
            </div>
            <div>
              <InputTitle>Tipo de entrega</InputTitle>
              <select
                onChange={event => {
                  onChange({ tag: event.target.value });
                }}
              >
                {tags}
              </select>
            </div>
          </div>
        );
        break;
      default:
        break;
    }
    /**
     * ### Return
     *       ocid: String,
      id: String,
      date: Date,
      tag: String,
      initiationType: String,
      language: String,
      parties: [Organization],
     * returns the Form with the correct structures
     */
    return (
      <div>
        {loginForm}
        <br />
      </div>
    );
  }
}

export default injectIntl(AuthForm);
