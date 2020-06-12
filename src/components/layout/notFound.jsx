import React,{Fragment} from 'react';

const NotFound = (props) => {

    const style = {
        h2: {
            color:"#5564c3",
            fontSize:"5rem",
            textAlign:"center"
        },
        container: {
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"90vh"
        }
    }

    return (
        <Fragment>
            <section style={style.container}>
                <h2 style={style.h2}>The event Booker has travelled</h2>
            </section>
        </Fragment>
    )
}

export default NotFound;
