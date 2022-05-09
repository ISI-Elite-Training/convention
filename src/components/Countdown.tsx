import React from 'react';
import moment from 'moment';
import Moment from 'react-moment';
import Countdown from 'react-countdown-moment';

const endDate = moment([2022, 8, 8]).fromNow(true);

export const CountdownTimer = () => {
  return (
    <div>
      <Moment endDate={endDate} />
    </div>
  );
};
