import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './App.css'; 

const App = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Ism kamida 2 belgidan iborat bo\'lishi kerak')
      .required('Ism kiritilishi shart'),
    email: Yup.string()
      .email('Noto\'g\'ri email format')
      .required('Email kiritilishi shart'),
    password: Yup.string()
      .min(8, 'Parol kamida 8 belgidan iborat bo\'lishi kerak')
      .required('Parol kiritilishi shart'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Parol mos kelmadi')
      .required('Parolni tasdiqlang'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem('userData', JSON.stringify(data));
  };

  // Malumotlarni Local Storage'dan olish
  const storedData = JSON.parse(localStorage.getItem('userData')) || {};

  // Local Storage'dan olingan malumotlarni set qilish
  Object.keys(storedData).forEach((key) => {
    setValue(key, storedData[key]);
  });

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2 className="form-title">Ro'yxatdan o'tish</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="form-group">
            <label htmlFor="name">Ism</label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Ism"
              {...register('name')}
            />
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
              {...register('email')}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <div className="form-group password-field">
            <label htmlFor="password">Parol</label>
            <div className="password-input-wrapper">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="Parol"
                {...register('password')}
              />
              <div className="password-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>
          <div className="form-group password-field">
            <label htmlFor="confirmPassword">Parolni tasdiqlang</label>
            <div className="password-input-wrapper">
              <input
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="Parolni tasdiqlang"
                {...register('confirmPassword')}
              />
              <div className="password-icon" onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Ro'yxatdan o'tish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
