import React from 'react';
import ReactTooltip from 'react-tooltip';
import '../styles/Homepage.css';
import Ticket from '../components/Ticket';

const Results = ({ data, scrollToRef }) => {
  const { constructed } = data;
  const { to, from } = constructed;
  const { journey: journeyTo } = to;
  const { journey: journeyFrom } = from;

  return (
    <>
      <div ref={scrollToRef} className="results">
        {journeyTo.length > 0 && (
          <>
            <Ticket
              first={data.flight.to.journey[0]}
              last={data.flight.to.journey[data.flight.to.journey.length - 1]}
              layovers={data.flight.to.journey.length - 2}
              outbound={true}
            />
            <div className="data">data here...</div>
          </>
        )}
      </div>
    </>
  );
};

export default Results;
