import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/SignUp';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AuthPage = ({ history }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSuccess = () => {
    history.push('/dashboard');
  };

  return (
    <>
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <div className="flex-grow flex items-center justify-center">
        {isLogin ? (
          <Login toggleAuth={toggleAuth} handleLoginSuccess={handleLoginSuccess} />
        ) : (
          <Signup toggleAuth={toggleAuth} />
        )}
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  </>
  );
};

export default AuthPage;
