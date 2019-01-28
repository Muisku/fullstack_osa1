import React from 'react'
import ReactDom from 'react-dom'



const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1> {props.kurssi} </h1>
            </div>
    )
}
const Content = (props) => {
    return (
        <div>
            <Part sisalto={props.parts[0].name} ktmaara={props.parts[0].exercises}/>
            <Part sisalto={props.parts[1].name} ktmaara={props.parts[1].exercises}/>
            <Part sisalto={props.parts[2].name} ktmaara={props.parts[2].exercises}/>
            
       </div>
    )
}
const Part = (props) => {
    return (
        <div>
            <p> {props.sisalto} sisältää {props.ktmaara} tehtävää. </p>
        </div>
    )
}


const Total = (props) => {
    return (
        <div>
            <p>Yhteensä tehtäviä on {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}. </p>
            </div>
    )
}
  

const App = () => {
    const course = {
      name: 'Half Stack -sovelluskehitys',
      parts: [
        {
          name: 'Reactin perusteet',
          exercises: 10
        },
        {
          name: 'Tiedonvälitys propseilla',
          exercises: 7
        },
        {
          name: 'Komponenttien tila',
          exercises: 14
        }
      ]
    }
  
  
   
        return (
            <div>
                <Header kurssi={course.name}/>
               <Content parts={course.parts}/>
               <Total parts={course.parts}/>
             </div>
        )
    
  }

   



ReactDom.render(<App/>, document.getElementById('root'))


/* const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1> {props.kurssi} </h1>
            </div>
    )
}
const Content = (props) => {
    return (
        <div>
            <Part sisalto={props.parts[0].name} ktmaara={props.parts[0].exercises}/>
            <Part sisalto={props.parts[1].name} ktmaara={props.parts[1].exercises}/>
            <Part sisalto={props.parts[2].name} ktmaara={props.parts[2].exercises}/>
            
       </div>
    )
}
const Part = (props) => {
    return (
        <div>
            <p> {props.sisalto} sisältää {props.ktmaara} tehtävää. </p>
        </div>
    )
}


const Total = (props) => {
    return (
        <div>
            <p>Yhteensä tehtäviä on {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}. </p>
            </div>
    )
}
  

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const parts = [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  
   
        return (
            <div>
                <Header kurssi={course}/>
               <Content parts={parts}/>
               <Total parts={parts}/>
             </div>
        )
    
  }

   
 */