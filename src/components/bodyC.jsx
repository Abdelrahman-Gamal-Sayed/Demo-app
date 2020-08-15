import React,{Component} from 'react';
import http from '../Services/httpService';
import config from '../config.json'


class BodyC extends Component {


 
    state = {   
      data:[],
      PatientInsurance:[],
      Contacts:[]
     }
    



   datestring(d)
   {
    if(d===undefined)
      return"";
    
    var ar = d.split(',');
    return ar[0]+'/'+ar[1]+'/'+ar[2];
   }



 async componentDidMount() {
      const {data}= await http.get(config.apiEndpoint);

const PatientInsurance=data.PatientInsuranceCards;
const Contacts=data.PatientContacts[0].ContactType;
this.setState({data,PatientInsurance,Contacts});
   
    }



  render() { 
      return ( 
      



        <div class='container-fluid'  style={{ marginTop:70 }}>

<div className='row'>

  <div className='col-md-3'>


  <div class="card" >
  <img src="http://via.placeholder.com/250" class="img-rounded"/>
  <div class="card-body"  className='text-center'>
  <h5  class="card-title">{this.state.data.FirstName +' '+this.state.data.LastName}</h5>
  </div>

  <div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">

  <div className='blockk'>
<svg style={{marginRight:15}}  width="1em" height="2em" viewBox="0 0 16 16" class="bi bi-credit-card-2-front" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
  <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z"/>
  <path fill-rule="evenodd" d="M2 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
</svg>
    {this.state.data.PatientID}
</div>

  </li>
<li class="list-group-item">
  


<svg style={{marginRight:15}} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar4-week" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"/>
<path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2H2z"/>
<path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"/>
<path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
</svg>
  { this.datestring(this.state.data.DOB)  }
  
  </li>




<li class="list-group-item">
<svg style={{marginRight:15}} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-files" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M3 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3z"/>
<path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"/>
</svg>
  
  {this.state.data.FileNumber}</li>
<li class="list-group-item"> <div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled />
<label class="form-check-label" for="defaultCheck2">
GuaranteeOfPayment
</label>
</div></li>



</ul>
<div class="card-body">
<a href="#" class="card-link">Edite</a>

</div>






</div>


</div>


  </div>

  <div class='col-md-8'>
  


  <div class="card bg-light mb-3" >
  <div class="card-header">ContactType</div>
  <div class="card-body">
  
      <p class="card-text">ContactTypeDesc : {this.state.Contacts.ContactTypeDesc}</p>
      <p class="card-text">ContactTypeID : {this.state.Contacts.ContactTypeID}</p>
      <p class="card-text">CreatedOn : {this.datestring(this.state.Contacts.CreatedOn)}</p>
      <p class="card-text">ModifiedOn : {this.datestring(this.state.Contacts.ModifiedOn)}</p>

  </div>
</div>


  <div class="card bg-light mb-3" >
  <div class="card-header">PatientInsuranceCards</div>
  <div class="card-body">
  
      <p class="card-text"> {this.state.PatientInsurance.map(m=><p>CardID : {m.PatientInsuranceCardID} <br/> InsuranceCompanyID : {m.InsuranceCompanyID} <br/>PatientCardNumber : {m.PatientCardNumber} <br/> CreatedOn : {this.datestring(m.CreatedOn)}<hr/></p>)}</p>
  </div>
</div>






  <div class="card bg-light mb-3" >
  <div class="card-header">SocialSecurityNumber</div>
  <div class="card-body">
    <h5 class="card-title">{this.state.data.SocialSecurityNumber}</h5>
 </div>
</div>



<div class="card bg-light mb-3" >
  <div class="card-header">FileNumber</div>
  <div class="card-body">
    <h5 class="card-title">{this.state.data.FileNumber}</h5>
  </div>
</div>



  </div>
    
    
</div>




<hr/> 
    <footer class="container">
  <p>&copy; Abdelrahman 2020</p>
</footer>

        </div>
     
        );
  }
}


export default BodyC;
