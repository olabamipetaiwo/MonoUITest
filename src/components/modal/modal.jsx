import React,{Fragment} from 'react';
import './styles/modal.scss';



const Modal = (props) => {
    const {title,children} = props;
    return (
        <Fragment>
            <section className="modal">
                    <div className="modal__box">
                        <div className="modal__box__header">
                                <h4>{title}</h4>
                        </div>
                        <div className="modal__box__content">
                            {children}
                        </div>
                    </div>
            </section>  
        </Fragment>
    )
}



export default Modal;
