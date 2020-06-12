import React, { Fragment,useState,useEffect } from 'react';
import './styles/event.scss';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import { setEvent } from '../../actions/eventAction';
import {calcCountDown} from '../../utils/helpers';

const EventItem =(props) => {
  
    const {eventItem,setEvent} = props;
    const [expired,setExpired] = useState(false);
    const [countDetails,setCountDetails] = useState({
        days:'e',hours:'',minutes:'',seconds:''
    });
    const {days,hours,minutes,seconds} = countDetails;

    useEffect(() => {
        formatDate(eventItem.date);
        //eslint-disable-next-line
    },[]);

    const handleDetail = async (e) => {
        e.preventDefault();
        await setEvent(eventItem._id);
    }

    const formatDate = () => {
        var countDown = calcCountDown(eventItem.date);
        if(countDown.expired === true ) {
            setExpired(true);
        }else {
            setExpired(false);
            const {days,hours,minutes,seconds} = countDown;
            setCountDetails({
                days,
                hours,
                minutes,
                seconds
            });
        }
    }


    const expiredP = (
        <Fragment>
            <p style={{color:'orangered'}}>EXPIRED</p>
        </Fragment>
    );

    const  details = (
        <Fragment>
            <p style={{color:'orangered'}}>{` ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds `}</p>
        </Fragment>
    );


    return (
        <Fragment>
            <div className="event__container">
                <div className="event__item">
                    <h4>{eventItem.title}</h4>
                    <h6>${eventItem.price}</h6>
                    <p> <Moment format='MMMM Do YYYY, h:mm:ss a'>{eventItem.date}</Moment>  </p>
                    { expired ? expiredP : details}
                </div>

                <button onClick={handleDetail} className="link__btn">View Details</button>
            </div>
        </Fragment>
    );
}

EventItem.propTypes = {
   setEvent:PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    ev:state.event,
 });

 export default connect(mapStateToProps, {
    setEvent
})(EventItem);