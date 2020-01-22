import React, {Component} from 'react'
import Button from '@material-ui/core/Button';

class FirstButton extends Component{
constructor(props){
  super(props);
  this.state = {}
}
render(){
  return(
    <div>
<Button variant="contained" color="secondary">
  Submit
</Button>
      </div>
  )
}
}
export default FirstButton