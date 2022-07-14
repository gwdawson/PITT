import React from 'react';
import { handleSubmit } from '../utilities/submit';
import '../styles/Selection.css';

const Selection = ({ data, setData, scrollToRef }) => {
  return (
    <>
      <div className="banner">
        <h1 className="title">EXPLORE BEAUTIFUL PLACES</h1>
      </div>
      <div ref={scrollToRef} className="options">
        <form className="input-wrapper" onSubmit={(e) => handleSubmit(e, setData)}>
          <div className="input-travel">
            <div className="input-block">
              <label className="input-label">Vehicle</label>
              <select className="input-left" id="vehicle" defaultValue={''}>
                <option value="">Select Vehicle</option>
                <option key="CAR" value="CAR">
                  Car
                </option>
                <option key="TAXI" value="TAXI">
                  Taxi
                </option>
              </select>
            </div>
            <div className="input-block">
              <label className="input-label">Distance (mi)</label>
              <input className="input-right" id="distance" type="number" placeholder="46 Miles" />
            </div>
          </div>
          <div className="input-airports">
            <div className="input-block">
              <label className="input-label">From</label>
              <select className="input-left" id="from" defaultValue={''}>
                <option value="">Select Airport</option>
                {data.airports.map((airport) => (
                  <option key={airport.id} value={airport.id}>
                    {airport.name} ({airport.id})
                  </option>
                ))}
              </select>
            </div>
            <div className="input-block">
              <label className="input-label">To</label>
              <select className="input-right" id="to" defaultValue={''}>
                <option value="">Select Airport</option>
                {data.airports.map((airport) => (
                  <option key={airport.id} value={airport.id}>
                    {airport.name} ({airport.id})
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="input-people">
            <div className="input-block">
              <label className="input-label">Travelers</label>
              <input className="input-solo" id="travelers" type="number" placeholder="6 People" />
            </div>
          </div>
          <div className="input-search">
            <div className="input-block">
              <button className="input-submit">Search</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Selection;
