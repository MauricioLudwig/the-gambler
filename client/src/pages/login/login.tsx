import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createLoadingSelector, createErrorMessageSelector } from '../../utilities/api-selectors';
import { signIn } from '../../services/auth';
import { Typography, Form, Input, Button } from 'antd';
import { loginSchema, schemaValidator } from '../../utilities/schemas';
import Feedback from '../../components/feedback';

interface FormValues {
  email: string,
  password: string
};

interface FieldErrors {
  [key: string]: string[]
};

const Login = (props) => {
  const {
    loading,
    loginError,
    signIn,
    history
  } = props;

  console.log('props', props);

  const { Title } = Typography;

  const [values, setValue] = useState<FormValues>({
    email: '',
    password: ''
  });

  const [fieldErrors, setFieldError] = useState<FieldErrors | {}>({});

  const onChangeHandler = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setValue(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  };

  const onBlurHandler = ({ target }) => {
    const { name } = target;
    const fieldSchema = loginSchema.fields[name];

    if (!fieldSchema) {
      return;
    }

    fieldSchema.validate(values[name], {
      abortEarly: false
    }).then(() => {
      setFieldError(prevValues => ({
        ...prevValues,
        [name]: null
      }));
    }).catch((err) => {
      setFieldError(prevValues => ({
        ...prevValues,
        [name]: err.errors
      }));
    })
  };

  const loginHandler = async () => {
    const [validForm, errors] = await schemaValidator(loginSchema, { ...values });

    if (!validForm) {
      setFieldError(errors);
      return;
    }

    const { email, password } = values;
    signIn(email, password).then(() => {
      history.push('/');
    }).catch((e) => {
    });
  }

  return (
    <div className="login-layout">
      <div className="login-layout__container">
        <Title level={2}>Login</Title>
        <Form layout="vertical" >
          <Form.Item label="Email">
            <Input
              name="email"
              size="large"
              value={values.email}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />
            <Feedback errors={fieldErrors['email'] || {}} />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password
              name="password"
              size="large"
              value={values.password}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />
            <Feedback errors={fieldErrors['password'] || {}} />
          </Form.Item>
          <Form.Item style={{ textAlign: 'center' }}>
            <Button loading={loading} onClick={loginHandler}>
              {
                loading ? 'attempting login...' : 'Login'
              }
            </Button>
          </Form.Item>
        </Form>
        {
          loginError && <Title level={4}>{loginError}</Title>
        }
      </div>
      <footer>
        <p>the gambler @ {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

const loading = createLoadingSelector(['LOGIN']);
const loginError = createErrorMessageSelector(['LOGIN']);

const mapStateToProps = state => ({
  loading: loading(state),
  loginError: loginError(state)
});

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(signIn(email, password))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login));