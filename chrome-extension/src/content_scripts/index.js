import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import osmWaysToGeoJSON from '../osm-ways-to-geojson';
import Style from './style';

const App = () => {
  const [ways, setWays] = useState([]);

  useEffect(() => {
    const addMapClickListener = () => {
      const onMapClick = (e) => {
        const className = e.target.className.baseVal;
        if (className.indexOf('way') !== -1) {
          const way = className
            .split(' ')
            .pop()
            .split('-')[0]
            .replace('w', '');
          setWays(ways.concat([way]));
        }
      };
      const map = document.querySelector('#map iframe').contentDocument.querySelector('#map');
      if (map) {
        map.addEventListener('click', onMapClick);
      } else {
        setTimeout(addMapClickListener, 500);
      }
      return () => {
        map.removeEventListener('click', onMapClick);
      };
    };
    addMapClickListener();
  });

  return (
    <Style>
      <div>
        <button
          onClick={async () => {
            const geoJSON = await osmWaysToGeoJSON(ways.map(id => ({ id })));
            await navigator.clipboard.writeText(JSON.stringify(geoJSON));
            alert(JSON.stringify(geoJSON));
          }}
        >
          Create GeoJSON
        </button>
        <button onClick={() => setWays([])}>Clear</button>
      </div>
      <div>{`ways: ${ways.join(' > ')}`}</div>
    </Style>
  );
};

const waysDiv = document.createElement('div');
document.body.append(waysDiv);
render(<App />, waysDiv);
