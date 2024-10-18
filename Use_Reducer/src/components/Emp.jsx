const Emp = ({emp,dispatch,btn}) => {
    console.log(emp);
    console.log(btn);
    
    return (
        <div className="emp">
            <h2>Employees</h2>
            <div className="emp-cont">
                {
                    emp.map((emp,idx)=>{
                        return (
                            <div key={emp.id} className="emp-card">
                                <div className="wrap">
                                    <p>{emp.first_name} {emp.last_name}</p>
                                    <p>{emp.age}</p>
                                </div>
                                <button style={{display: `${btn[emp.id] || 'block'}`}} onClick={()=>dispatch({type: 'ADD_TO_TEAM',payload: {emp,btn: emp.id}})} className="button">ADD</button>
                            </div>  
                        )
                    })
                }  
            </div>
        </div>
    )
}

export default Emp;