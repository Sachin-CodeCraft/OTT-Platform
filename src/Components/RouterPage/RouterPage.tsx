import React from 'react';
import { IProps } from './types';
import styles from './RouterPage.module.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';

const RouterPage = (props: IProps) => {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default RouterPage;
