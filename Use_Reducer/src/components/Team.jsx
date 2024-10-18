const Team = ({team,dispatch,age}) => {
    console.log(team);
    
    return (
        <div className="team">
            <h2>Team</h2>
            <div className="sort-btn-cont">
                <button onClick={() => dispatch({type: 'SORT'})} className="sort-btn">Sort By Age</button>
            </div>
            
            <div className="team-cont">
                {
                    team.map((emp,idx)=>{
                        return (
                            <div key={emp.id} className="team-card">
                                <div className="wrap">
                                    <p>{emp.first_name} {emp.last_name}</p>
                                    <p>{emp.age}</p>
                                </div>
                                <button onClick={()=>dispatch({type: 'REMOVE_TEAM',payload: {id: emp.id ,btn: emp.id}})} className="remove-btn">REMOVE</button>
                            </div>  
                        )
                    })
                }   
            </div>
            <p className="team-card avg-age">Average Age <span>{age}</span></p>
        </div>
    )
}

export default Team;