import React, {Component} from 'react'
import TextBox from "./TextBox"
import FirstButton from './FirstButton';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return(
      <div>
      <div>
        <TextBox/>
      </div>
      <div>
        <FirstButton/>
</div>
</div>
    )
  }
}
export default Home