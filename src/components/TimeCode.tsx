import React from 'react';
import Moment from 'react-moment';

export const TimeCode = () => {
  return <Moment format="00 hh:mm:0ss" interval={1000}></Moment>;
};
