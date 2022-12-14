import React from 'react';

const isIncome =Math.round(Math.random());


const InfoCard = () => {
  return (
    <div elevations={3} style={{textAlign:'center',padding:'0 10%' }}>
        Try saying: <br />
        Add {isIncome ? 'Income ': 'Expense '}
        for {isIncome ? '₹50000 ': '₹10000 '}
        in Category {isIncome ? 'Business ': 'House '}
        for {isIncome ? 'Monday ': 'Thursday '}
    </div>
  );
};

export default InfoCard;