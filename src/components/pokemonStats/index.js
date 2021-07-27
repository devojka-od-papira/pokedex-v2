import React from 'react';
import { ResponsivePieCanvas } from '@nivo/pie';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

  statsContainer: {
    display: 'flex',
  },
  stat: {
    marginLeft: '10%',
    marginRight: '10%',
    width: '80%',
    height: 500,
    display: 'flax',
  },

});

const PokemonStats = ({ stats = [] }) => {
  const classes = useStyles();
  console.log('stats', stats);
  return (
    <div className={classes.statsContainer}>
      <div className={classes.stat}>
        <ResponsivePieCanvas
          data={stats}
          margin={{
            top: 40, right: 200, bottom: 40, left: 80,
          }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: 'paired' }}
          borderColor={{ from: 'color', modifiers: [['darker', 0.6]] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextColor="black"
          radialLabelsLinkColor={{ from: 'color' }}
          sliceLabelsSkipAngle={10}
          sliceLabelsTextColor="#333333"
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: '-45',
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: 'hp',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'attack',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'defense',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'special-attack',
              },
              id: 'lines',
            },
            {
              match: {
                id: 'special-defense',
              },
              id: 'lines',
            },
            {
              match: {
                id: 'speed',
              },
              id: 'lines',
            },
          ]}
          legends={[
            {
              anchor: 'right',
              direction: 'column',
              justify: false,
              translateX: 140,
              translateY: 0,
              itemsSpacing: 5,
              itemWidth: 24,
              itemHeight: 24,
              itemTextColor: 'black',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 24,
              symbolShape: 'circle',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default PokemonStats;
