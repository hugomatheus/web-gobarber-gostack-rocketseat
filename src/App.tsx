import React from 'react';
import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
