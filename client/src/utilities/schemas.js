import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .required()
});

export const schemaValidator = async (schema, values) => {
  const validForm = await schema.isValid(values);

  if (validForm) {
    return [true, {}];
  }

  let errors = {};

  await schema.validate(values, {
    abortEarly: false
  }).catch((err) => {
    errors = Object.assign({}, ...err.inner.map(o => ({
      [o.path]: o.errors
    })))
  });

  return [false, errors];
}