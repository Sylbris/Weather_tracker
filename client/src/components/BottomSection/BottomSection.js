import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { useSelector } from 'react-redux';

const Container = styled.div`
background: #ffffff;
height: 15vh;
display: flex;
flex-direction: row;
justify-content: Left;
`
/**
 * A component that displays the graph.
 * @returns 
 */
 const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].value}°</p>
        </div>
      );
    }
  
    return null;
  };

const BottomSection = () => {
    const lastReadings = useSelector((state) => state.lastReadings);

    return (
        <Container>
            <LineChart width={850} height={110} data={lastReadings}>
                <XAxis dataKey="updatedAt" tick={{fontSize: 9}} interval={0}/>
                <YAxis tick={{fontSize: 9}}/>
                <Tooltip content={<CustomTooltip />}/>
                <Line type="monotone" dataKey="temperature" stroke="#000000" />
             </LineChart>
        </Container>
    );
}

export default BottomSection;