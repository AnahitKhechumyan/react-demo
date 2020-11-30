import React from 'react';
import {connect} from 'react-redux';

 function ResetCount(props){
  
  
    return(
        <button onClick = {props.onReset}> Reset counter </button>
     );


};

const mapDispatchToProps = (dispatch)=> {
    return{
     onReset: () =>  dispatch({ type:"RESETCOUNT"}),
    };
};

export default connect(null,mapDispatchToProps)(ResetCount);