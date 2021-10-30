import formikStyles from '../../css/formik.module.css';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useRouter } from 'next/router';

const animatedComponents = makeAnimated();

const formik = withFormik({
    initialValues: {
      fullName: '',
      email: '',
      username: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
      .max(25, '*Must be 25 characters or less')
      .required('*Required'),
      email: Yup.string()
      .max(20, '*Must be 20 characters or less')
      .email('*Invalid email address')
      .required('*Required'),
      username: Yup.string()
      .max(20, '*Must be 20 characters or less')
      .required('*Required'),
      userTopics: Yup.array()
      .min(3, '*Pick at least 3 topics of interest')
      .of(
        Yup.object().shape({
          label: Yup.string().required(),
          value: Yup.string().required(),
        })
      )
    }),
    mapPropsToValues: props => ({
        fullName: '',
        email: '',
        username: '',
        userTopics: [],
      }),
      handleSubmit: async (values, { setSubmitting }) => {
        const payload = {
          ...values,
          userTopics: values.userTopics.map(t => t.value),
        };
        setTimeout(() => {
          //alert(JSON.stringify(payload, null, 2));
          setSubmitting(false);
        }, 1000);
      },
})

const SignUpForm = props => {
    const {
        values,
        touched,
        dirty,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        setFieldValue,
        setFieldTouched,
        isSubmitting,
    } = props;

    return (
      <div className={formikStyles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className = {formikStyles.inputGroup}>
            <label className = {formikStyles.inputLabel} htmlFor="fullName"> Full Name: </label>
              <input 
                id = "fullName"
                name = "fullName"
                type = "text"
                onChange = {handleChange}
                onBlur = {handleBlur}
                value = {values.fullName}
                className = {formikStyles.fullNameInput}
              />
          </div>
          {touched.fullName && errors.fullName ? (
              <div style={{ color: 'red', position: 'absolute', fontSize: '15px', marginLeft: '6.5%'}}> {errors.fullName} </div>
            ) : null}  
          
          <div className = {formikStyles.inputGroup}>
            <label className = {formikStyles.inputLabel} htmlFor="email"> Email: </label>
              <input 
                id = "email"
                name = "email"
                type = "text"
                onChange = {handleChange}
                onBlur = {handleBlur}
                value = {values.email}
                className = {formikStyles.emailInput}
              />
          </div>
          {touched.email && errors.email ? (
            <div style={{ color: 'red', position: 'absolute', fontSize: '15px', marginLeft: '6.5%'}}> {errors.email} </div>
          ) : null}

          <div className = {formikStyles.inputGroup}>
            <label className = {formikStyles.inputLabel} htmlFor="username"> Username: </label>
              <input 
                id = "username"
                name = "username"
                type = "text"
                onChange = {handleChange}
                onBlur = {handleBlur}
                value = {values.username}
                className = {formikStyles.userNameInput}
              />
          </div>
          {touched.username && errors.username ? (
            <div style={{ color: 'red', position: 'absolute', fontSize: '15px', marginLeft: '6.5%'}}>{errors.username}</div>
          ) : null}

              <MySelect
                value={values.topics}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.topics}
                touched={touched.topics}
              />

              <div style = {{marginTop: '40px'}}>
                <button
                  type="button"
                  className="outline"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                  className = {formikStyles.resetButton}
                >
                  Reset
                </button>
                <a type="button" disabled={isSubmitting} className = {formikStyles.submitButton} href = "/home">
                  Submit
                </a>
              </div>
          </form>
      </div>
    );
}

const options = [
    { value: 'Coding', label: 'Coding' },
    { value: 'Math', label: 'Math' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Medicine', label: 'Medicine' },
    { value: 'Music', label: 'Music' },
    { value: 'Art', label: 'Art' },
  ];
  
  class MySelect extends React.Component {
    handleChange = value => {
      // this is going to call setFieldValue and manually update values.topcis
      this.props.onChange('userTopics', value);
    };
  
    handleBlur = () => {
      // this is going to call setFieldTouched and manually update touched.topcis
      this.props.onBlur('userTopics', true);
    };
  
    render() {
      return (
        <div style = {{marginTop: '30px'}}>
          <label className = {formikStyles.selectLabel} htmlFor="color">Select 3 topics of interest:</label>
          <Select
            id="color"
            options={options}
            isMulti={true}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            components = {animatedComponents}
            value={this.props.value}
            className = {formikStyles.topicSelect}
          />
          {!!this.props.error &&
            this.props.touched && (
              <div style={{ color: 'red', marginTop: '.5rem' }}>{this.props.error}</div>
            )}
        </div>
      );
    }
  }
  
const ResultForm = formik(SignUpForm);

const SignUp = () => {
  return(
    <div className = "formikStyle">
        <ResultForm />
    </div>
  )
}

export default SignUp;