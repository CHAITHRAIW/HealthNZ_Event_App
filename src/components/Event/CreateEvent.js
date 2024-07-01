import React, { useEffect, useState } from 'react';
import './CreateEvent.css'; // Add this import to include the new CSS file

function CreateEvent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="create-event-container">
      <h1>Create Event</h1>
      <form>
        <div className="form-group">
          <label htmlFor="eventSelect">Select Event</label>
          <select id="eventSelect" className="form-control">
            {events.map(event => (
              <option key={event.name} value={event.name}>
                {event.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="eventPayload">Enter Payload</label>
          <textarea id="eventPayload" className="form-control" placeholder="JSON Payload"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="eventFrequency">Frequency</label>
          <input type="text" id="eventFrequency" className="form-control" placeholder="30s" />
        </div>
        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default CreateEvent;
