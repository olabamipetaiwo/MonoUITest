a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function(x) { return x < 3 }); // [2, 1]

{ filteredEvents !== null ? bookings.map((bookingItem,index) => {
    if(bookingItem.event.creator._id === localStorage.userId) {
        return <Item key={index} Item={bookingItem}  />
    } else {
        return  noEvent;
    }
}) : <h2 className="info">You have no Event yet</h2> }