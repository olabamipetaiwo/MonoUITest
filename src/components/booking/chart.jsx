import React,{Fragment} from 'react';
import './styles/booking.scss';
// import {Bar as BarChart} from 'react-chartjs';


const Chart = (props) => {

    const BOOKINGS_BUCKETS = {
        Cheap:{
            min:0,
            max:100
        },
        Normal:{
            min:100,
            max:300
        },
        Expensive: {
            min:300,
            max:1000
        }
    }

    const {
        bookings
    } = props;

    const chartData = {
        labels:[],
        datasets:[]
    };
    let  values = [];

    for(const bucket in BOOKINGS_BUCKETS) {
        const filteredBookingsCount = bookings.reduce((prev,current) => {
            if(current.event.price > BOOKINGS_BUCKETS[bucket].min &&
                current.event.price < BOOKINGS_BUCKETS[bucket].max ) {
                return prev + 1;
            }else {
                return prev ;
            }
        },0);
        values.push(filteredBookingsCount);
        chartData.labels.push(bucket);
        chartData.datasets.push({
           fillColor:'red',
           strokeColor:'green',
           highlightFill:'orange',
           highlightStroke:'purple',
           data:values
        });
        values = [ ...values];
        values[values.length - 1] = 0;
    }

    console.log(chartData);

    return (
        <Fragment> 
                 <h2>Chart</h2>
                 {/* <BarChart data={chartData} /> */}
        </Fragment>
    )
}



export default Chart;
  
