import React from 'react';
import CreateAccount from './CreateAccount';
import DeleteAccount from './DeleteAccount';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CreateAccount />
        <DeleteAccount />
      </div>
    </div>
  );
}

export default App;
