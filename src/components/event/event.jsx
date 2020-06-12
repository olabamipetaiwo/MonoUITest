import React,{Fragment,useEffect,useRef,useState} from 'react';
import './styles/event.scss';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import Loader from '../layout/loader';
import EventItem from './eventItem';
import Modal from '../modal/modal';
import Moment from 'react-moment';
import { createEvent, fetchEvents, clearCurrent } from "../../actions/eventAction";
import {fetchBookings,bookEvent } from '../../actions/bookingAction';

const Event = (props) => {

    const {
        event:{events,loadingEvent,currentSet,currentEvent},
        clearCurrent,
        fetchEvents,
        fetchBookings,
        createEvent,
        bookEvent 
     } = props;

    const bookBtn = useRef();
    const createBtn = useRef();
    const price = useRef();
    const [showCreate,setShowCreate] = useState(false);
    const [newEvent,setNewEvent] = useState({
        title:'',
        description:'',
        price:'',
        evdate:''
    });
    const [dateError,setDateError] = useState(false);
    const [disabled,setDisabled] = useState(true);

    useEffect(() => {
        fetchEvents();
        fetchBookings();
          //eslint-disable-next-line
    }, []);

    const handleChange = (e) => {
        if(e.target.name === 'evdate') {
            var currDate = new Date();
            var evDate = new Date(e.target.value);
            var diff = evDate - currDate;
            if(diff > 0){
                setDateError(false);
                setDisabled(false);
            }else {
                setDateError(true);
                setDisabled(true);
            }

        }
        setNewEvent({
             ...newEvent,
             [e.target.name]:e.target.value
        });
    }

 

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewEvent({
            ...newEvent,
            price:+price.current.value
        });
         createEvent(newEvent);
         setShowCreate(false);
     }



    const handleClose = async () => {
        clearCurrent();
    }

    const handleBooking = async () => {
        bookEvent(currentEvent._id);
        clearCurrent();
    }
    
    const openCreateModal = async () => {
        setShowCreate(true);
    }

    const showEvents = (
        <Fragment>
            {currentSet ? <Modal title="Event Details" >
                    <h4>{currentSet && currentEvent.title}</h4>
                    <h6>{currentSet && currentEvent.description.charAt(0).toUpperCase() + currentEvent.description.slice(1)}</h6>
                    <h6>${currentSet && currentEvent.price}</h6>
                    <p> <Moment format='MMMM Do YYYY, h:mm:ss a'>{currentEvent.date}</Moment>  </p>
                    <div className="button__group">
                        <button onClick={handleClose} className="primary">Cancel</button>
                        {  localStorage.userId === currentEvent.creator._id ? 
                           null:
                           <button ref={bookBtn} onClick={handleBooking} className="danger">Book Event</button> 
                        }
                    </div>
                   
            </Modal>:null}
            {  events != null && events.map((eventItem,index) => {
               return <EventItem key={index} eventItem={eventItem}  /> 
         }) }
        </Fragment> 
    );

    const addEvent = (
        <Fragment>
            <Modal title="CreateEvent">
              <form className="auth__content__login"  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-group__label" htmlFor="title">Event Title</label>
                    <input type="text"
                        className="form-group__email"
                        placeholder="Event title here" 
                        name="title"
                        required
                        onChange={handleChange}></input>
                </div>  

                <div className="form-group">
                    <label className="form-group__label" htmlFor="price">Event Price</label>
                    <input type="number"
                        className="form-group__email"
                        placeholder="Price" 
                        name="price"
                        ref={price}
                        required
                        onChange={handleChange}></input>
                </div> 

                <div className="form-group">
                    <label className="form-group__label" htmlFor="description">Event Decription</label>
                    <input type="text"
                        className="form-group__email"
                        placeholder="Event Description here" 
                        name="description"
                        required
                        onChange={handleChange}></input>
                </div> 


                <div className="form-group">
                    <label className="form-group__label" htmlFor="evdate">Event Date</label>
                    {/* <input type="datetime-local"
                        className="form-group__email"
                        name="evdate"
                        required
                        onChange={handleChange}></input> */}
                        <input 
                        type="datetime-local"
                        className="form-group__email"
                        name="evdate"
                        required
                        onChange={handleChange}></input>

                         {dateError ? <span style={{
                            color:"orangered",
                            fontSize:'2rem'
                           }}>Invalid Date</span> :
                            null}
                </div>

                <button type="submit"
                        className="btn btn-primary"   
                        disabled={disabled}
                        ref={createBtn}>Create Event</button>
                 <button type="submit"
                        className="btn btn-danger"
                        onClick={() => setShowCreate(false) }>
                            Cancel
                </button>
                </form>
            </Modal>
        </Fragment>
    );
    


    return (
        <Fragment> 
            <section className="event">
                <center>
                    <button  onClick={openCreateModal} className="link__btn">Create Event</button> 
                </center>
                {showCreate ? addEvent : null}
                {loadingEvent ? <Loader /> : events.length > 0 ? showEvents :  <h2 style={{textAlign:'center'}} className="info">No event yet</h2>  }
            </section>     
        </Fragment>
    )
}


Event.propTypes = {
    fetchEvents:PropTypes.func.isRequired,
    clearCurrent:PropTypes.func.isRequired,
    bookEvent:PropTypes.func.isRequired,
    createEvent:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    event:state.event,
    auth:state.auth,
    bookings:state.bookings
 });

export default connect(mapStateToProps, {
    fetchEvents,
    clearCurrent,
    fetchBookings,
    bookEvent ,
    createEvent
})(Event);

  
