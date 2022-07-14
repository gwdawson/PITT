import React from 'react';
import { BiErrorCircle } from 'react-icons/bi';
import ReactTooltip from 'react-tooltip';
import '../styles/Results.css';
import Ticket from '../components/Ticket';

const Results = ({ data }) => {
  const { constructed } = data;
  const { to } = constructed;
  const { journey: journeyTo } = to;

  const selectedVehicle = data.constructed.travel.selected.vehicle;
  const selectedVehicleCost = data.constructed.travel.selected.cost;
  const suggestedVehicle = data.constructed.travel.suggested.vehicle;
  const suggestedVehicleCost = data.constructed.travel.suggested.cost;
  const travelToCost = data.constructed.to.cost;
  const travelFromCost = data.constructed.from.cost;

  return (
    <>
      <div className="results" style={{ display: journeyTo.length > 0 ? '' : 'none' }}>
        <>
          <Ticket
            first={data.flight.to.journey[0]}
            last={data.flight.to.journey[data.flight.to.journey.length - 1]}
            layovers={data.flight.to.journey.length - 2}
            outbound={true}
          />
          <div className="data">
            <div className="data-wrapper">
              <h3>{data.constructed.to.journey.join(' ')}</h3>
              {selectedVehicle !== suggestedVehicle && <ReactTooltip place="top" type="dark" effect="solid" />}
              <h4
                style={{ cursor: selectedVehicle !== suggestedVehicle ? 'pointer' : 'text' }}
                data-tip={`traveling by ${suggestedVehicle.toLowerCase()} will only cost ${suggestedVehicleCost}`}
              >
                {selectedVehicle !== suggestedVehicle && <BiErrorCircle className="icon" />}
                Transfer ({`${selectedVehicle.slice(0).toLowerCase()}`}): {selectedVehicleCost}
              </h4>
              <h4>Flight: {travelToCost}</h4>
            </div>
          </div>
        </>
      </div>
      <hr />
      <div className="results" style={{ display: journeyTo.length > 0 ? '' : 'none' }}>
        <>
          <Ticket
            first={data.flight.from.journey[0]}
            last={data.flight.from.journey[data.flight.from.journey.length - 1]}
            layovers={data.flight.from.journey.length - 2}
            outbound={false}
          />
          <div className="data">
            <div className="data-wrapper">
              <h3>{data.constructed.from.journey.join(' ')}</h3>
              <h4>Flight: {travelFromCost}</h4>
            </div>
          </div>
        </>
      </div>
      <div className="results" style={{ display: journeyTo.length > 0 ? '' : 'none' }}>
        <h1>
          Total Travel Costs: £
          {(
            parseFloat(selectedVehicleCost.slice(1)) +
            parseFloat(travelToCost.slice(1)) +
            parseFloat(travelFromCost.slice(1))
          ).toFixed(2)}
        </h1>
      </div>
    </>
  );
};

export default Results;
