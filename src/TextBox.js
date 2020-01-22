import React, {Component} from 'react'
import SnackbarContent from '@material-ui/core/SnackbarContent';
class TextBox extends Component{
constructor(props){
super(props);
this.state = {};
}


render(){
return(
<div>
<SnackbarContent message="I love snacks." action="Word" />
<SnackbarContent
  message={
    'I love candy. I love cookies. I love cupcakes. \
    I love cheesecake. I love chocolate.'
  }
/>
  </div>
)
}
}
export default TextBox;