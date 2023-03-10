import React from 'react';
import Card from './components/Card';
import myimg from './components/Images/image2.jpg';            


function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
      <Card
        title="1887.50"
        imageUrl={myimg}
        body="This is the first card given by Mr. Sushil, who is my team lead and will train me during my internship."
      />
      <Card
        title="1999.50"
        imageUrl={myimg}
        body="This is the second card."
      />
      <Card
        title="2345.50"
        imageUrl={myimg}
        body="This is the third card."
      />
    </div>
  );
}


export default App;