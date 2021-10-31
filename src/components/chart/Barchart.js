import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {get,head,last} from 'lodash';

const data2 = [
  {
    name: '15.10.2021',
    Buyurtma: 1.5,
    Tashrif: 1,
    amt: 2400,
  },
  {
    name: '16.10.2021',
    Buyurtma: 0.5,
    Tashrif: 1,
    amt: 2210,
  }
];

const BarChartComponent = ({data}) => {
  const items = [{name:get(head(data), 'before_yesterday'), order_count:get(head(data), 'before_yesterday_order_count'), view_count:get(head(data), 'before_yesterday_view_count')},
                 {name:get(last(data), 'before_yesterday'), order_count:get(last(data), 'before_yesterday_order_count'), view_count:get(last(data), 'before_yesterday_view_count')}]
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#334D6E4D" strokeDasharray="4 0" />
          <XAxis dataKey="name" stroke="#334D6E4D"  />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Tashrif" fill="#006400B2" barRadius="15px" />
          <Bar dataKey="Buyurtma" fill="#F19F9DB2" />
        </BarChart>
      </ResponsiveContainer>
    );
}

export default BarChartComponent;