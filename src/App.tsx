import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import ResponsiveAppBar from "./assets/ResponsiveAppBar";

import RaceDataTable from "./assets/RaceDataTable";

import RaceCreateForm from "../ui-components/RaceCreateForm.jsx";
import RunCreateForm from "../ui-components/RunCreateForm.jsx";

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <ResponsiveAppBar></ResponsiveAppBar>

          <RaceDataTable></RaceDataTable>

          <RaceCreateForm></RaceCreateForm>
          <RunCreateForm></RunCreateForm>

          

          <h1>Hello {user?.signInDetails?.loginId}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
