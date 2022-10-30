
import './club_reg.css';

function Club_reg() {
  return (
    
     <div class="container form-body">
     <form action="#" method="post">
        <input type="text" name="name" placeholder="club name" className='form-control'/>
        <input type="text" name="s1Name" placeholder="staff coordinator 1"className='form-control'/>
        <input type="text" name="s1Contact" placeholder="staff 1 contact" className='form-control'/>
        <input type="text" name="s2Name" placeholder="staff coordinator 2" className='form-control'/>
        <input type="text" name="s2Contact" placeholder="staff 2 contact" className='form-control'/>
        <input type="text" name="secretary" placeholder="secretary" className='form-control'/>
        <input type="text" name="secretaryContact" placeholder="secretary contact" className='form-control'/>
        <input type="text" name="jsecretary" placeholder="joint secretary" className='form-control'/>
        <input type="text" name="treasurer" placeholder="Treasurer" className='form-control'/>
        <input type="text" name="jtreasurer" placeholder="joint Treasurer" className='form-control'/>
        <input type="text" name="treasurerContact" placeholder="Treasurer contact" className='form-control'/>

        <button type="submit"className=' btn btn-primary submit-button'  >Submit</button>
    </form>
     </div>

    
  );
}

export default Club_reg;
