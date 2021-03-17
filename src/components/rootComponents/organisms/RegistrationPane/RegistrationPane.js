import React, { forwardRef, useState} from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registration } from 'actions';
import styles from 'components/rootComponents/organisms/RegistrationPane/RegistrationPane.module.scss';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';
import pl from 'date-fns/locale/pl';
import {translateMessageError} from 'assets/globalError';
import { css } from "@emotion/core";
import { ClipLoader } from 'react-spinners';


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
  weight: Yup.number().min(1, 'waga musi być większa od 0').required('Musisz podać swoją wagę!'),
  height: Yup.number().min(1, 'wzorst musi być większy od 0').required('Musisz podać swój wzrost!')

});
const RegistrationPane = ({ registration, messageRegistration, errorRegistration }) => {

  const override = css`
    border-color: white;
    width: 20px;
    height: 20px;
    margin-left: 5px;
`;

  const ExampleCustomInput = forwardRef(
    // eslint-disable-next-line react/prop-types
    ({ value, onClick }, ref) => (
      // eslint-disable-next-line react/button-has-type
      <button onClick={onClick} ref={ref} className={styles.datePickerInput}>
        {value}
      </button>
    ),
  );
  const [isLoading, setIsLoading] = useState(false);
  return(
  <div className={styles.wrapper}>
    <Formik
      initialValues={{
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        rulesAccepted: false,
        birthday: new Date(),
        activity: 'UMIARKOWANA',
        goal: 'REDUKCJA',
        weight: '',
        height: '',
        sex: 'Kobieta'
      }}
      validationSchema={SignUpSchema}
      onSubmit={({ username, password, email, rulesAccepted, birthday, activity, goal, height, weight, sex }) => {
        registration(username, password, email, rulesAccepted, birthday, activity, goal, height, weight, sex);
        setIsLoading(true);
      }}
    >
      {({ errors, touched, setFieldValue, values  }) => (
        <Form className={styles.registrationForm}>
          <Link to="/" className={styles.closePaneLink}>
            <FontAwesomeIcon icon={faTimes}/>
          </Link>
            {messageRegistration !==null ? <p className={styles.label}>{messageRegistration}</p> :
              <>
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
              className={styles.input}/>

            {errors.confirmPassword && touched.confirmPassword ? (
              <div className={styles.error}>{errors.confirmPassword}</div>
              ) : null}
              <Field type="email" placeholder="e-mail" name="email" className={styles.input} />
            {errors.email && touched.email ? (
              <div className={styles.error}>{errors.email}</div>
              ) : null}
                <div className={styles.fieldWrapper}>
                  <p>Data urodzenia</p>
                  <DatePicker
                    selected={values.birthday}
                    name="birthday"
                    locale={pl}
                    popperClassName={styles.popper}
                    customInput={<ExampleCustomInput/>}
                    maxDate={new Date()}
                    onChange={date => setFieldValue('birthday', date)}
                    dropdownMode="select"
                    showMonthDropdown
                    showYearDropdown
                    adjustDateOnChange
                  />
                </div>
              <div className={styles.fieldWrapper}>
              <p className={styles.label}>Aktywność</p>
              <Field name="activity" as="select" className={styles.select}>
              <option value="ZNIKOMA" className={styles.option}>ZNIKOMA</option>
              <option value="MAŁA" className={styles.option}>MAŁA</option>
              <option value="UMIARKOWANA" className={styles.option}>UMIARKOWANA</option>
              <option value="DUŻA" className={styles.option}>DUŻA</option>
              </Field>
              </div>
              <div className={styles.fieldWrapper} >
              <p className={styles.label}>Cel</p>
              <Field name="goal" as="select" className={styles.select}>
              <option value="REDUKCJA" className={styles.option}>REDUKCJA</option>
              <option value="UTRZYMANIE" className={styles.option}>UTRZYMANIE</option>
              <option value="MASA" className={styles.option}>MASA</option>
              </Field>
              </div>
              <div className={styles.detailsWrapper}>
              <Field type="number" placeholder="waga" name='weight' className={styles.inputDetails} />
              <Field type="number" placeholder="wzrost" name='height' className={styles.inputDetails} />
              </div>
            {errors.weight && touched.weight ? (
              <div className={styles.error}>{errors.weight}</div>
              ) : null}
            {errors.height && touched.height ? (
              <div className={styles.error}>{errors.height}</div>
              ) : null}
              <div className={styles.fieldWrapper}>
              <label>
              Kobieta
              <Field type="radio" name="sex" value="Kobieta" className={styles.label}/>
              </label>
              <label>
              Mężczyzna
              <Field type="radio" name="sex" value="Mężczyzna" className={styles.label}/>
              </label>
              </div>
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
              {errorRegistration !==null ? <p className={styles.error}>{translateMessageError(errorRegistration)}</p> : null}
              <button type="submit" className={styles.registrationButton}>
                {isLoading && errorRegistration===null ? <div className={styles.loading}>Proszę czekać...<ClipLoader css={override} /></div>  : 'Rejestracja'}
              </button>
              </>}
              </Form>

            )}
    </Formik>
  </div>
)};

RegistrationPane.propTypes = {
  errorRegistration: PropTypes.string.isRequired,
  messageRegistration: PropTypes.string.isRequired,
  registration: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  registration: (username, password, email, rulesAccepted, birthday, userActivity ,userGoal, height, weight, sex) =>
    dispatch(registration(username, password, email, rulesAccepted, birthday, userActivity ,userGoal, height, weight, sex)),
});
const mapStateToProps = ({messageRegistration, errorRegistration}) => ({
  messageRegistration, errorRegistration
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPane);
