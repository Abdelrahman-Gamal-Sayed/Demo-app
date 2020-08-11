import React,{Component} from 'react';
import axios from 'axios'


class BodyC extends Component {
  state = {   
    dataa:[],
    bitrhdate:''
   }


   datestring()
   {

  
   var str = this.state.dataa.DOB;
var ar = str.split(',');
return ar[0]+'/'+ar[1];
   }

 async componentDidMount() {
      const {data:dataa}= await axios.get('http://3.120.165.103:203/api/patient/getpatient/205609/853');

      var str = dataa.DOB;
      var ar = str.split(',');
const bitrhdate=ar[0]+'/'+ar[1]+'/'+ar[2];
this.setState({dataa,bitrhdate});
   console.log(dataa.PatientContacts);
    }
  render() { 
      return ( 
      



    




        <div className='container-fluid'  style={{ marginTop:70 }}>



          

<div className='row'>
  <div className='col-md-3'>




  <div class="card" >
  <img src="http://via.placeholder.com/250" class="img-rounded"/>
  <div class="card-body">
    <h5 class="card-title">{this.state.dataa.FirstName +' '+this.state.dataa.LastName}</h5>
    <p class="card-text">ID : {this.state.dataa.PatientID}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{this.state.bitrhdate}</li>
    <li class="list-group-item">{this.state.dataa.FileNumber}</li>
  
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Edite</a>
   
  </div>
</div>


    <div className='text-center'>

    <svg style={{width:24,height:24,display:"inline-blockck"}}   viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
</svg>





    </div>
  
  </div>

  <div className='col-md-8'>
    
  <div class="card bg-light mb-3" >
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


    <p>
Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable</p>
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
