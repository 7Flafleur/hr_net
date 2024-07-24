import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/Store';
import {AppRoutes} from './routes/AppRoutes';

function App() {
  return (
    <Provider store={store}>
    
        <AppRoutes />
    
    </Provider>
  );
}

export default App;
