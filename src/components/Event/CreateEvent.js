import React, { useEffect, useState } from 'react';
import './CreateEvent.css';

function CreateEvent() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [payloadStrings, setPayloadStrings] = useState('');
  const [interval, setInterval] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/events')
      .then(response => response.json())
      .then(data => {
        setEvents(data);
        if (data.length > 0) {
          setSelectedEvent(data[0].name);
        }
      })
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let parsedPayloadStrings;
    try {
      parsedPayloadStrings = JSON.parse(payloadStrings);
      if (!Array.isArray(parsedPayloadStrings)) {
        alert('JSON payloadStrings must be an array of strings');
        return;
      }
    } catch (err) {
      // If it's not valid JSON, treat it as a simple string
      parsedPayloadStrings = [payloadStrings];
    }

    const parsedInterval = parseInt(interval, 10);
    const message = {
      topic: selectedEvent,
      payloadStrings: parsedPayloadStrings,
      interval: !isNaN(parsedInterval) ? parsedInterval : null, // Keep interval as null if invalid
    };

    try {
      const response = await fetch('http://localhost:5000/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        const errorData = await response.json();
        alert(`Failed to send message: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Network error or server is down.');
    }
  };

  return (
    <div className="create-event-container">
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="eventSelect">Select Event</label>
          <select
            id="eventSelect"
            className="form-control"
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
          >
            {events.map(event => (
              <option key={event.name} value={event.name}>
                {event.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="payloadStrings">Enter Payload</label>
          <textarea
            id="payloadStrings"
            className="form-control"
            placeholder='JSON Payload'
            value={payloadStrings}
            onChange={(e) => setPayloadStrings(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="interval">Frequency</label>
          <input
            type="text"
            id="interval"
            className="form-control"
            placeholder="30s"
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
          />
        </div>
        <div className="form-buttons">
          <button type="button" className="btn btn-secondary">Cancel</button>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateEvent;
