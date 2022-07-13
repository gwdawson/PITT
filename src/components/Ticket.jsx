import '../styles/Ticket.css';

// ----------------------------------- \\
// THIS CSS ART WAS NOT CREATED BY ME. \\
// https://codepen.io/kotay/pen/qBXgem \\
// ----------------------------------- \\

const Ticket = ({ first, last, outbound }) => {
  return (
    <div className="box">
      <div className="clip"></div>
      <div className="ticket">
        <span className="airline">Panintelligence</span>
        <span className="airline airlineslip">Panintelligence</span>
        <span className="boarding">Boarding pass</span>
        <div className="content">
          <span className="jfk">
            {first} → {last}
          </span>
          <span className="jfk jfkslip">
            {first} → {last}
          </span>
          <div className="sub-content">
            <span className="name">
              PASSENGER NAME
              <br />
              <span>DAWSON, Gareth</span>
            </span>
            <span className="flight">
              FLIGHT N&deg;
              <br />
              {outbound && <span>X3-65C3</span>}
              {!outbound && <span>K7-33L4</span>}
            </span>
            <span className="gate">
              GATE
              <br />
              {outbound && <span>32B</span>}
              {!outbound && <span>16A</span>}
            </span>
            <span className="seat">
              SEAT
              <br />
              {outbound && <span>45A</span>}
              {!outbound && <span>22H</span>}
            </span>
            <span className="boardingtime">
              BOARDING TIME
              <br />
              {outbound && <span>6:45AM ON JULY 23RD</span>}
              {!outbound && <span>6:45AM ON AUGUST 6TH</span>}
            </span>
            <span className="flight flightslip">
              FLIGHT N&deg;
              <br />
              {outbound && <span>X3-65C3</span>}
              {!outbound && <span>K7-33L4</span>}
            </span>
            <span className="seat seatslip">
              SEAT
              <br />
              {outbound && <span>45A</span>}
              {!outbound && <span>22H</span>}
            </span>
            <span className="name nameslip">
              PASSENGER NAME
              <br />
              <span>DAWSON, Gareth</span>
            </span>
          </div>
        </div>
        {outbound && <span className="bound">Outbound</span>}
        {!outbound && <span className="bound">Inbound</span>}
      </div>
    </div>
  );
};

export default Ticket;
