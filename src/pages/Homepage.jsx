import { useEffect, useState, useRef } from 'react';
import { getAirports } from '../utilities/connection';
import '../styles/Homepage.css';
import Selection from '../components/Selection';
import Results from '../components/Results';

const Homepage = () => {
  const [data, setData] = useState({
    airports: [],
    input: {
      vehicle: '',
      distance: 0,
      from: '',
      to: '',
      travelers: 0,
    },
    flight: {
      to: {
        journey: [],
        miles: [],
      },
      from: {
        journey: [],
        miles: [],
      },
    },
    constructed: {
      travel: {
        selected: {
          vehicle: '',
          cost: 0,
        },
        suggested: {
          vehicle: '',
          cost: 0,
        },
      },
      to: {
        journey: [],
        cost: 0,
      },
      from: {
        journey: [],
        cost: 0,
      },
    },
  });

  useEffect(() => {
    const makeAsync = async () => {
      const { data } = await getAirports();
      setData((prev) => {
        return { ...prev, airports: data };
      });
    };
    makeAsync();
  }, []);

  useEffect(() => {
    scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [data.input]);

  const scrollToRef = useRef();

  return (
    <div className="Homepage">
      <Selection data={data} setData={setData} scrollToRef={scrollToRef} />
      <Results data={data} />
    </div>
  );
};

export default Homepage;
