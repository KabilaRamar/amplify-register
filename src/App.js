//9/1/24

import React from 'react';
import { Amplify } from 'aws-amplify';

import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

// import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  return (
    <AmplifyAuthenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </AmplifyAuthenticator>
  );
}