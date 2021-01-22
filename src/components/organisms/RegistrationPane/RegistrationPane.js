import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { registration } from 'actions';
import styles from 'components/organisms/RegistrationPane/RegistrationPane.module.scss';

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, 'Nazwa użytkownika za krótka!')
    .max(12, 'Nazwa użytkownika za długa!')
    .required('Musisz podać nazwę użytkownika!'),
  password: Yup.string()
    .required('Musisz podać hasło!')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Hasło musi zawierać min. 8 znaków, 1 dużą literę, 1 liczbę oraz 1 znak specjalny',
    ),
  confirmPassword: Yup.string()
    .required('Proszę potwierdź hasło!')
    .oneOf([Yup.ref('password'), null], 'Hasła nie pasują do siebie!'),
  email: Yup.string()
    .email('Adres e-mail jest niepoprawny!')
    .required('Adres e-mail jest wymagany!'),
  rulesAccepted: Yup.bool().oneOf([true], 'Jeśli chcesz dołączyć, musisz zaakceptować regulamin!'),
});
const RegistrationPane = ({ registration }) => (
  <div className={styles.wrapper}>
    <Formik
      initialValues={{
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        rulesAccepted: false,
      }}
      validationSchema={SignUpSchema}
      onSubmit={({ username, password, email, rulesAccepted }) => {
        registration(username, password, email, rulesAccepted);
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.registrationForm}>
          <Link to="/" className={styles.closePaneLink}>
            X
          </Link>
          <Field type="text" placeholder="login" name="username" className={styles.input} />
          {errors.username && touched.username ? (
            <div className={styles.error}>{errors.username}</div>
          ) : null}
          <Field type="password" placeholder="hasło" name="password" className={styles.input} />
          {errors.password && touched.password ? (
            <div className={styles.error}>{errors.password}</div>
          ) : null}
          <Field
            type="password"
            placeholder="powtórz hasło"
            name="confirmPassword"
            className={styles.input}
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <div className={styles.error}>{errors.confirmPassword}</div>
          ) : null}
          <Field type="email" placeholder="e-mail" name="email" className={styles.input} />
          {errors.email && touched.email ? (
            <div className={styles.error}>{errors.email}</div>
          ) : null}
          <label className={styles.rules}>
            <Field type="checkbox" name="rulesAccepted" className={styles.checkbox} />
            Akceptuję
            <Link to="/sign-up/rules" className={styles.link}>
              regulamin
            </Link>
          </label>
          {errors.rulesAccepted && touched.rulesAccepted ? (
            <div className={styles.error}>{errors.rulesAccepted}</div>
          ) : null}

          <button type="submit" className={styles.registrationButton}>
            Rejestracja
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  registration: (username, password, email, rulesAccepted) =>
    dispatch(registration(username, password, email, rulesAccepted)),
});

export default connect(null, mapDispatchToProps)(RegistrationPane);
