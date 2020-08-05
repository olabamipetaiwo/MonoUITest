import React,{Fragment} from 'react';
import './layout.scss';


const NotFound =() => {
  return (
    <Fragment>
       <div className="row">
         <div className="notfound">
            <h1>Page does not exist on MOno</h1>
         </div>
       </div>
    </Fragment>
  );
}

export default NotFound;
