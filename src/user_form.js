
import './club_reg.css';

function User_form() {
  return (
    
    <div className="container form-body">
     <form action="http://localhost:2000/user/register" method="post">

<input class="form-check-input"  type="text" name="name"  class="form-control" placeholder="Name"/>

<input class="form-check-input"  type="text" name="rollNo" class="form-control" placeholder="Roll number"/>
<input class="form-check-input"  type="text" name="year"  class="form-control" placeholder="Year of study"/>
<input type="text" name="department"  class="form-control" placeholder="department"/>
<input type="text" name="section"  class="form-control" placeholder="section"/>
<input type="text" name="mail"  class="form-control" placeholder="mail id"/>

<select name="interest" class="form-control">
    <option value="" selected disabled>Interested Events</option>
    <option value="quiz">Quiz</option>
    <option value="coding">Coding</option>
    <option value="paper">Paper Presentation</option>
    <option value="project">Project Presentation</option>
</select>

<br/>
<h2>Member of the clubs</h2>
<input   class="form-check-input" type="checkbox" name="clubs" value="ITA"/>ITA     
<input   class="form-check-input" type="checkbox" name="clubs" value="CSEA"/>CSEA
<input   class="form-check-input" type="checkbox" name="clubs" value="ISTE"/>ISTE
<input   class="form-check-input" type="checkbox" name="clubs" value="MADC"/>MADC
<input   class="form-check-input" type="checkbox" name="clubs" value="IIC"/>IIC
<input   class="form-check-input" type="checkbox" name="clubs" value="EMDC"/>EMDC   
<br/>


<button type="submit" class="btn btn-primary">Submit</button>
</form>
    
</div>
    
  );
}

export default User_form;
