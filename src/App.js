import {useState,useEffect} from 'react'

function App() {

  const [currentdata,setcurrentdata]=useState([])
  const getCovidData=async ()=>{
    const response= await fetch('https://api.covid19india.org/data.json')
    const data=await response.json()
    console.log(data.statewise)
    setcurrentdata(data.statewise)
  }

  useEffect(()=>{

    getCovidData();

  },[])


  return (
    <>

    <div class="container-xxl">
    <h1 class="d-flex justify-content-center"> LIVE COVID-19 INDIA TRACKER</h1>
    <div class="shadow-lg p-3 mb-5 bg-body rounded">
      
      <table class="table table-hover table-bordered border-danger table-sm border border-5">
  <thead class="table-dark">
    <tr>
      <th scope="col">StateCode</th>
      <th scope="col">State</th>
      <th scope="col">Active</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Deaths</th>
      <th scope="col">Recovered</th>
      <th scope="col">Last Updated Time</th>
    </tr>
  </thead>
  <tbody class="table-primary">
    {currentdata.map((item,indx)=>{

      return(
        <tr key={indx}>
        
        <td>{item.statecode}</td>
        <td>{item.state}</td>
        <td><button type="button" class="btn btn-outline-warning"> {item.active}</button></td>
        <td>  <button type="button" class="btn btn-outline-info"> {item.confirmed}</button> </td>
        <td ><button type="button" class="btn btn-outline-danger"> {item.deaths}</button>   </td>
        <td> <button type="button" class="btn btn-outline-success">{item.recovered}</button>   </td>
        <td>{item.lastupdatedtime}</td>
       
      </tr>
      )
     
    })}
   
   
  </tbody>
</table>
     
    </div>

    </div>
   
    </>
  );
}

export default App;
