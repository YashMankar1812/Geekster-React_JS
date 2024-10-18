import { useReducer } from 'react'
import Team from './components/Team'
import Emp from './components/Emp'
import employees from './users'
import './App.css'

function App() {
  const reducerFn = (state, action) => {
    switch(action.type) {

      case "ADD_TO_TEAM":
        const copy = [...state.team]
        if(!copy.includes(action.payload.emp)) {
          copy.push(action.payload.emp)
          // console.log(action.payload.age);
          let avg = copy.reduce((acc, curr) => acc + Number(curr.age), 0)/copy.length;
          console.log(avg);
          
          return {
           ...state,
            team: copy,
            avgAge: Math.round(avg*100)/100,
            btn: {
              ...state.btn,
              [action.payload.btn]: 'none'
            }
          }
        }
        return {
         ...state,
        }

      case "REMOVE_TEAM":
        const newTeam = state.team.filter(emp => emp.id!== action.payload.id); 
        let newAvg = newTeam.reduce((acc, curr) => acc + curr.age, 0) / newTeam.length
        if(isNaN(newAvg)) {
          newAvg = 0;
        }
        return {
          ...state,
          team: newTeam,
          avgAge: Math.round(newAvg*100)/100,
          btn:{
            ...state.btn,
            [action.payload.btn]: 'block'
          }
        }

      case "SORT":
        return {
          ...state,
          team: [...state.team].sort((a, b) => a.age - b.age)
        }  

      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducerFn, {
    employees: employees,
    team: [],
    avgAge: 0,
    btn: {}
  })

  return (
    <>
    <div class="container">
  <div class="emp-section">
    <Emp className="emp-component" emp={state.employees} dispatch={dispatch} btn={state.btn} />
  </div>
  <div class="team-section">
    {/* <h2>Team</h2> */}
    <Team className="team-component" team={state.team} dispatch={dispatch} age={state.avgAge} />
  </div>
</div>

    </>
  )
}

export default App
