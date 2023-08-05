import React, { useState } from 'react';
import axios from 'axios';

const BookingSeat = ({ selectedVehicle }) => {
  const [seatNumber, setSeatNumber] = useState('');

  const handleSave = async () => {
    const data = {
      vehicle_id: selectedVehicle.vehicle_id,
      seat_number: seatNumber
    };

    await axios.post('/seats', data);
    alert('Seat selection saved!');
  };

  //
  
  return (
    <div>
      <h1>Seat Selection</h1>
      <p>Select a seat for {selectedVehicle.brand} {selectedVehicle.model}:</p>
      <input type="text" value={seatNumber} onChange={(e) => setSeatNumber(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default BookingSeat;
