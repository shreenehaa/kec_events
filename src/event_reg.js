
import './club_reg.css';

function Event_reg() {
  return (
    
<div class="container form-body">
      <form  action="#" method="post">
        <input type="text" name="name"  class="form-control" placeholder="Event name"/>
        <input type="text" name="clubName"  class="form-control" placeholder="Club name"/>
        <input type="date" name="lDate"  class="form-control" placeholder="Last date of registration"/>
        <input type="text" name="description"  class="form-control" placeholder="Event Description"/>
        <input type="text" name="url"  class="form-control" placeholder="Event Website url"/>
        <input type="text" name="imgUrl"  class="form-control" placeholder="Event log/bannerurl"/>

        <input type="text" name="noOfCompetions"  class="form-control" placeholder="Number of Competions"/>

        <input type="text" name="comp1[name]"  class="form-control" placeholder="Competion 1 name"/>
        <select name="comp1[type]" className='form-control' >
            <option value="" disabled>Event Type</option>
            <option value="quiz">Quiz</option>
            <option value="non-tech">Non-Tech</option>
            <option value="paper">Paper Presentation</option>
            <option value="coding">Coding</option>
        </select>
        <input type="text" name="comp1[img]"  class="form-control" placeholder="Event log/bannerurl"/>
        <input type="text" name="comp1[formLink]"  class="form-control" placeholder="Registration Form Link"/>




        <input type="text" name="comp2[name]"  class="form-control" placeholder="Competion 1 name"/>
        <select name="comp2[type]" className='form-control' >
            <option value="" disabled>Event Type</option>
            <option value="quiz">Quiz</option>
            <option value="non-tech">Non-Tech</option>
            <option value="paper">Paper Presentation</option>
            <option value="coding">Coding</option>
        </select>
        <input type="text" name="comp2[img]"  class="form-control" placeholder="Event log/bannerurl"/>
        <input type="text" name="comp2[formLink]"  class="form-control" placeholder="Registration Form Link"/>




        <input type="text" name="comp3[name]"  class="form-control" placeholder="Competion 1 name"/>
        <select name="comp3[type]"  className='form-control'>
            <option value="" disabled>Event Type</option>
            <option value="quiz">Quiz</option>
            <option value="non-tech">Non-Tech</option>
            <option value="paper">Paper Presentation</option>
            <option value="coding">Coding</option>
        </select>
        <input type="text" name="comp3[img]"  class="form-control" placeholder="Event log/bannerurl"/>
        <input type="text" name="comp3[formLink]"  class="form-control" placeholder="Registration Form Link"/>

        
  

        <button type="submit" className='btn btn-primary submit-button' >Submit</button>

    </form>
</div>
     
    
  );
}

export default Event_reg;
