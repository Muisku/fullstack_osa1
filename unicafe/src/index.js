import React, { useState } from 'react';
import ReactDOM from 'react-dom';


/* const Statistics = (props) => {
    return (
        <div>
        
        <div>hyvä {props.hyva}</div>
        <div>neutraali {props.neutraali}</div>
        <div>huono {props.huono}</div>
        <div>kaikki {props.allClicks}</div>
        <div>keskiarvo {props.hyva-props.huono/3}</div>
        <div>positiivisia {(props.hyva/props.allClicks)*100}%</div>
        </div>

    )
  } */
  const Statistics = (props) => {
      if (props.allClicks === 0) {
          return (
              
              <div>Ei statistiikkaa</div>
                
          )
      }
      return (
        <div>
        
        <div>hyvä {props.hyva}</div>
        <div>neutraali {props.neutraali}</div>
        <div>huono {props.huono}</div>
        <div>kaikki {props.allClicks}</div>
        <div>keskiarvo {props.hyva-props.huono/3}</div>
        <div>positiivisia {(props.hyva/props.allClicks)*100}%</div>
        </div>

    )
     
  }
  

const App = (props) => {
    const [ hyva, setHyva ] = useState(0)
    const [ neutraali, setNeutraali ] = useState(0)
    const [ huono, setHuono ] = useState(0)
    const [ allClicks, setAll] = useState(0)
    const [ keskiarvopisteet, setKeskiarvo ] = useState(0)
    
  
    

    const handleHyva = () => {
        

        setAll(allClicks +1)
        setHyva(hyva +1)
        setKeskiarvo(keskiarvopisteet +1)
        
      
       
    }
    const handleNeutraali = () => {
        
        setAll(allClicks +1)
        setNeutraali(neutraali +1)
        setKeskiarvo(keskiarvopisteet +0)
       
        
        
       
    }
    const handleHuono = () => {
        setAll(allClicks +1)
        setHuono(huono +1)
        setKeskiarvo(keskiarvopisteet -1)
      
        
    }


    return (
        <div>
            <h1> anna palautetta </h1>
            <button onClick={handleHyva}>hyvä</button>
            <button onClick={handleNeutraali}>neutraali</button>
            <button onClick={handleHuono}>huono</button>
            <h2>statistiikka</h2>
            <Statistics hyva={hyva} neutraali={neutraali} huono={huono} allClicks={allClicks}/>
          {/*  <Statistics hyva={hyva} neutraali={neutraali} huono={huono} allClicks={allClicks}/> */}
           
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


/* 
import React, { useState } from 'react';
import ReactDOM from 'react-dom';


/* const Statistics = (props) => {
    return (
        <div>

    )
  } */

/* const App = (props) => {
    const [ hyva, setHyva ] = useState(0)
    const [ neutraali, setNeutraali ] = useState(0)
    const [ huono, setHuono ] = useState(0)
    const [ allClicks, setAll] = useState(0)
    const [ keskiarvopisteet, setKeskiarvo ] = useState(0)
    
  
    

    const handleHyva = () => {
        setAll(allClicks +1)
        setHyva(hyva +1)
        setKeskiarvo(keskiarvopisteet +1)
        
      
       
    }
    const handleNeutraali = () => {
        
        setAll(allClicks +1)
        setNeutraali(neutraali +1)
        setKeskiarvo(keskiarvopisteet +0)
       
        
        
       
    }
    const handleHuono = () => {
        setAll(allClicks +1)
        setHuono(huono +1)
        setKeskiarvo(keskiarvopisteet -1)
      
        
    }


    return (
        <div>
            <h1> anna palautetta </h1>
            <button onClick={handleHyva}>hyvä</button>
            <button onClick={handleNeutraali}>neutraali</button>
            <button onClick={handleHuono}>huono</button>
            <h2> statistiikka </h2>
            <div>hyvä {hyva}</div>
            <div>neutraali {neutraali}</div>
            <div>huono {huono}</div>
            <div>kaikki {allClicks}</div>
            <div>keskiarvo {hyva-huono/3}</div>
            <div>positiivisia {(hyva/allClicks)*100}%</div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
 */ 