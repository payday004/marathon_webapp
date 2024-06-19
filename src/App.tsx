
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import ResponsiveAppBar from './assets/ResponsiveAppBar';


export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (

        <main>

          <ResponsiveAppBar>
          </ResponsiveAppBar>

          



          <h1>Hello {user?.signInDetails?.loginId}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}