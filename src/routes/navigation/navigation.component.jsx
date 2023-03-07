import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
    return (
      <Fragment>
        <div>
          <h1>I am the navbar</h1>
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;