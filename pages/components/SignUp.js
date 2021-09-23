import '../../css/formik.module.css';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

const formik = withFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Field is required'),
      lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Field is required'),
      username: Yup.string()
      .max(25, 'Must be 25 characters or less')
      .required('Field is required'),
      userTopics: Yup.array()
      .min(3, 'Pick at least 3 topics of interest')
      .of(
        Yup.object().shape({
          label: Yup.string().required(),
          value: Yup.string().required(),
        })
      )
    }),
    mapPropsToValues: props => ({
        firstName: '',
        lastName: '',
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName"> Enter first name </label>
      <input 
        id = "firstName"
        name = "firstName"
        type = "text"
        onChange = {handleChange}
        onBlur = {handleBlur}
        value = {values.firstName}
      />
      {touched.firstName && errors.firstName ? (
        <div style={{ color: 'red', marginTop: '.5rem' }}> {errors.firstName} </div>
      ) : null}
  
      <label htmlFor="lastName"> Enter last name </label>
      <input 
        id = "lastName"
        name = "lastName"
        type = "text"
        onChange = {handleChange}
        onBlur = {handleBlur}
        value = {values.lastName}
      />
      {touched.lastName && errors.lastName ? (
        <div style={{ color: 'red', marginTop: '.5rem' }}> {errors.lastName} </div>
      ) : null}

    <label htmlFor="username"> Enter username </label>
      <input 
        id = "username"
        name = "username"
        type = "text"
        onChange = {handleChange}
        onBlur = {handleBlur}
        value = {values.username}
      />
      {touched.username && errors.username ? (
        <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.username}</div>
      ) : null}

          <MySelect
            value={values.topics}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            error={errors.topics}
            touched={touched.topics}
          />
          <button
            type="button"
            className="outline"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >
            Reset
          </button>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
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
        <div style={{ margin: '1rem 0' }}>
          <label htmlFor="color">Topics of Interest (select at least 3) </label>
          <Select
            id="color"
            options={options}
            isMulti={true}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            components = {animatedComponents}
            value={this.props.value}
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