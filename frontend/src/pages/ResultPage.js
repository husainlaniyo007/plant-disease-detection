
import React from 'react';
import Navbar from '../components/Navbar';
import ResultDisplay from '../components/ResultDisplay';

const ResultPage = () => {
  const result = {}; // Example result

  return (
    <div>
      <Navbar />
      <h1>Result Page</h1>
      <ResultDisplay result={result} />
    </div>
  );
};

export default ResultPage;
