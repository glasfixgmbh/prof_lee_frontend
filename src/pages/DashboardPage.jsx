import React, { Fragment} from "react";
import UsersList from "../components/UsersList";


function DashboardPage() {
  return (
    <Fragment>
        <UsersList counter="7"/>
    </Fragment>
  );
}

export default DashboardPage;
