import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import {
  StreamCreate,
  StreamEdit,
  StreamDelete,
  StreamList,
  StreamShow,
} from './streams';
import Header from './Header';

function App() {
  return (
    <div className='ui comtainer'>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/edit' exact component={StreamEdit} />
          <Route path='/streams/delete' exact component={StreamDelete} />
          <Route path='/streams/show' exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
