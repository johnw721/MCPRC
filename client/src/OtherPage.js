import React from 'react';
import{Link} from 'react-router-dom';

class  OtherPage extends React.Component{
    render(){
        return(
            <div>
                I'm some other page!
            <Link  to="/">
                Go Back Home
            </Link>
            </div>
            )
    }
        
    }
export default OtherPage