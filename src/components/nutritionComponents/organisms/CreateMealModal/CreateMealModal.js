import PropTypes from 'prop-types'
import React, {useState} from 'react';
import {connect} from 'react-redux';
import styles from 'components/nutritionComponents/organisms/CreateMealModal/CreateMealModal.module.scss';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { addMeal } from 'actions/index';


const MealSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Nazwa  za krótka!')
    .max(50, 'Nazwa za długa!')
    .required('Musisz podać nazwę produktu!'),
  goodness: Yup.number().min(1, 'Kalorie muszą być większe od 0').required('Musisz podać liczbę kalorii!'),
  protein: Yup.number().min(1, 'Białko musi być większe od 0').required('Musisz podać liczbę białka!'),
  carbohydrates: Yup.number().min(1, 'Węglowodany muszą być większe od 0').required('Musisz podać liczbę węglowodanów!'),
  fat: Yup.number().min(1, 'Tłuszcze muszą być większe od 0').required('Musisz podać liczbę tłuszczy!'),
  description: Yup.string().max(400, 'Opis może mieć maksymalnie 400 słów'),
  imgUrl: Yup.string().url('podaj prawidłowy url')
});

const CreateMealModal = ({closeModalFn, addMeal}) =>{

  const [details, setDetails] = useState(false);

  return(
  <div className={styles.wrapper}>
    <button type='button' className={styles.cancelButton} onClick={closeModalFn}>Anuluj</button>
    <h1 className={styles.title}>Nowy produkt</h1>
    <Formik
      initialValues={{ name: '', goodness: '', protein: '', carbohydrates: '', fat: '', description: '', imgUrl: '' }}
      validationSchema={MealSchema}
      onSubmit={({name, goodness, protein, carbohydrates, fat, description, imgUrl}) => {
        addMeal(name, 100 ,goodness, protein, carbohydrates, fat, description, imgUrl)
        closeModalFn();
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <Field type="text" placeholder="Nazwa posiłku/produktu" name="name" className={styles.input} />
          {errors.name && touched.name ? (
            <div className={styles.error}>{errors.name}</div>
          ) : null}
          <h1 className={styles.title}>Podaj wartości odżywcze na 100g</h1>
          <Field type="number" placeholder="kalorie" name="goodness" className={styles.input} />
          {errors.goodness && touched.goodness ? (
            <div className={styles.error}>{errors.goodness}</div>
          ) : null}
          <Field type="number" placeholder="białko" name="protein" className={styles.input} />
          {errors.protein && touched.protein ? (
            <div className={styles.error}>{errors.protein}</div>
          ) : null}
          <Field type="number" placeholder="węglowodany" name="carbohydrates" className={styles.input} />
          {errors.carbohydrates && touched.carbohydrates ? (
            <div className={styles.error}>{errors.carbohydrates}</div>
          ) : null}
          <Field type="number" placeholder="tłuszcze" name="fat" className={styles.input} />
          {errors.fat && touched.fat ? (
            <div className={styles.error}>{errors.fat}</div>
          ) : null}
          <button type='button' className={styles.detailsButton} onClick={()=>setDetails(!details)}>więcej szczegółów</button>
          {!details ? null :
            <>
            <Field type="text" component='textarea' placeholder="opis" name="description" className={styles.inputTextArea} />
            {errors.description && touched.description ? (
            <div className={styles.error}>{errors.description}</div>
            ) : null}
              <Field type="string" placeholder="img url (http://www...)" name="imgUrl" className={styles.input} />
              {errors.imgUrl && touched.imgUrl ? (
                <div className={styles.error}>{errors.imgUrl}</div>
              ) : null}
            </>
            }
            <button type="submit" className={styles.addButton}>Zapisz</button>
        </Form>
      )}
    </Formik>
  </div>


)}
CreateMealModal.propTypes = {
  addMeal: PropTypes.func.isRequired,
  closeModalFn: PropTypes.func.isRequired
}
const mapDispatchToProps = (dispatch) => ({
  addMeal: (name, grammage ,goodness, protein, carbohydrates, fat, description, imgUrl) =>
    dispatch(addMeal(name, grammage ,goodness, protein, carbohydrates, fat, description, imgUrl)),
});

export default connect(null, mapDispatchToProps)(CreateMealModal);
