import React from 'react';

const ProtectedPage: React.FC = () => {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is only accessible to logged-in users.</p>
    </div>
  );
};

export default ProtectedPage;
