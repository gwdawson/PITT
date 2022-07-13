import React from 'react';
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
              outbound={true}
            />
            <div className="data">
              <h3>TO</h3>
              <p>{journeyTo.join(' ')}</p>
            </div>
          </>
        )}
      </div>
      <div className="results">
        {journeyFrom.length > 0 && (
          <>
            <Ticket
              style={{ alignSelf: 'flex-start' }}
              first={data.flight.to.journey[data.flight.to.journey.length - 1]}
              last={data.flight.to.journey[0]}
              outbound={false}
            />
            <div className="data">
              <h3>FROM</h3>
              <p>{journeyFrom.join(' ')}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Results;
