import React from 'react';

import Header from './Header';

//JSX (Sava Script XML)

function App() {
  return ( //precisa retornar só 1 tag (ou 1 tag que envolve outras)
    //<h1>Hello World</h1>
    <Header title="ESSE É O TITLE" >
      ESSE É O CHILDREN
    </Header>
  );
}

export default App;
