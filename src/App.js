import React, {useEffect, useState} from 'react';

function App() {
  const initialData = {
    name: '',
    surname: '',
    birthDate: '',
    selectResult: ''
  }

  const [state, setState] = useState(initialData);
  const {name, surname, birthDate, selectResult} = state

  const handleChange = (e) => {
    setState({...state, [e.target.name] : e.target.value})
  }

  useEffect(() => {
    if (name && surname && birthDate && selectResult) {
      console.log(`json{name: ${name}, surname: ${surname}, birthDate: ${birthDate}, select: ${selectResult}}`)
    }
  }, [name, surname, birthDate, selectResult])

  return (
    <div className="container-fluid row p-0 m-0">
      <div className="form-block col-lg-6 col-md-6 col-12 border">
        <form>
        <div className="input-group mt-3 w-50">
          <input type="text" value={name} name="name" onChange={handleChange} className="form-control" placeholder="Name" aria-label="name" aria-describedby="basic-addon1"/>
        </div>
          <div className="input-group mt-3 w-50">
            <input type="text" value={surname} name="surname" onChange={handleChange} className="form-control" placeholder="Surname"/>
          </div> 
          <div className="form-group mt-3 w-50">
            <input className="form-control" name="birthDate" type="date" id="example-date-input" value={birthDate} onChange={handleChange}/>
          </div>
          <div className="form-group mt-3 w-50">
          <select className="form-control w-100 p-1" aria-label="Default select example" value={selectResult} name="selectResult" onChange={handleChange}>
              <option value="(select) ◊">(select) ◊</option>
              <option value="☆">☆</option>
              <option value="♡">♡</option>
              <option value="▱">▱</option>
            </select>
          </div>
        </form>
      </div>
      <div className="col-md-6 col-lg-6 col-12 border">
        <div>Name: {`{${name}}`}</div>
        <div>Surname: {`{${surname}}`}</div>
        <div>Birth Date: {`{${birthDate}}`}</div>
        <div>{`(${selectResult})`}</div>
      </div>
    </div>        
  );
}

export default App;
