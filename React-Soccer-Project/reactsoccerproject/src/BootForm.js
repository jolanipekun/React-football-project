import React from "react";


const BootForm = () => {
    return (
        <div className="pa2 ">
            <form>
                <label>Email:
                  <input type="email" name="email" required /> <hr/>
                </label>
                <label>Size:
                  <input type="email" name="color" required /> <hr/>
                </label>
                <label>Gender: <hr/>
                  <input type="radio" name="gender" value="Male"/> Male <br/>
                  <input type="radio" name="gender" value="Female"/> FeMale
                  <input type="submit" value="Register"/> 
                </label>
            
            </form> 
        </div>
        
    )
}

export default BootForm;