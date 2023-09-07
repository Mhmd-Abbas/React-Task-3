import { useState } from "react";

const d1 = document.getElementById("phoneError");
const d2 = document.getElementById("ageError");
const d3 = document.getElementById("dialog");


d1.addEventListener("click",(e) => {
    if (e.target === d1) {
        d1.close();
    }
})
d2.addEventListener("click",(e) => {
    if (e.target === d2) {
        d2.close();
    }
})
d3.addEventListener("click",(e) => {
    if (e.target === d3) {
        d3.close();
        }
})

//-----START OF COMPONENT CODE----------------------------------------------------

function Card(){
    const [ formInput, setFormInput ] = useState({
        name : "",
        phone : "",
        age : "",
        isEmployee : false,
        salary : "Less Than $500"
    })
    
    function submitHandle(){
        if( ! ( formInput.phone.length <= 10 && formInput.phone.length >= 8)){
            d1.showModal();
            return 0;
        }
        else if( ! ( formInput.age >= 18 && formInput.age <= 65)){
            d2.showModal();
            return 0;
        }

        d3.showModal();
        console.log(formInput);
    }
       
    return(
    <div className="card">
        <h1>Requesting a Loan</h1>
        <hr></hr>
        <h4>Name :</h4>
        <input value={formInput.name} onChange={(e) => {
            setFormInput({...formInput, name : e.target.value})
        }} />
        <h4>Phone Number :</h4>
        <input type="number" value={formInput.phone} onChange={(e) => {
            setFormInput({...formInput, phone : e.target.value})
        }} />
        <h4>Age :</h4>
        <input type="number" value={formInput.age} onChange={(e) => {
            setFormInput({...formInput, age : e.target.value})
        }} />
        <h4>Are you an Employee ? </h4>
        <input className="checkbox" type="checkbox" checked={formInput.isEmployee} onChange={(e) => {
            setFormInput({...formInput, isEmployee : e.target.checked})
        }}/>
        <h4>Salary :</h4>
        <input value={formInput.salary} onChange={(e) => {
            setFormInput({...formInput, salary : e.target.value})
        }} />
        <br/>
        <br/>
        <button onClick = {() => submitHandle()}>Submit</button>
        <dialog className="dialogError" id="phoneError" >
            <h1>Phone Number Format is Incorrect</h1>
        </dialog>
        <dialog className="dialogError" id="ageError" >
            <h1>Please Enter Your Age Correctly</h1>
        </dialog>
        <dialog className="dialog" id="dialog" >
            <h1>The Form has Been Submitted Successfully</h1>
        </dialog>
    </div>
    )
}

export default Card;