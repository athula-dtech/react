import React, {Component} from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';


 class Create extends Component {
    
        constructor(props){
            super(props);
            this.state =({
                person_name : [],
                business_name : [],
                business_nic_number :[] ,
                obj: []
            });
            this.state  = {obj:[]};
            
        }

        toggleShow = () => {
            alert('ddd');
            let ob =  [];
            axios({
                method: 'get',
                url: 'http://127.0.0.1:8000/api/auth/user',
                headers: { 
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjViYzkxZjhjZTA1ZmIwYzg3MDljYzFjNzU5NjkzZjRjNjI5YWE1OGI1YjUzNGVmMTFjOTA3ZDEyZTU0YWFmMzg5M2RjMzU5MmYyZjhhODIxIn0.eyJhdWQiOiI1IiwianRpIjoiNWJjOTFmOGNlMDVmYjBjODcwOWNjMWM3NTk2OTNmNGM2MjlhYTU4YjViNTM0ZWYxMWM5MDdkMTJlNTRhYWYzODkzZGMzNTkyZjJmOGE4MjEiLCJpYXQiOjE1NzEwMjczMjEsIm5iZiI6MTU3MTAyNzMyMSwiZXhwIjoxNjAyNjQ5NzIxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.TmgDko23kBn7BXEYqBOGbIq2oczrUflWN-ylIGWPuSvGDtvMBg73vNxXIttb1UIyRma0U7vdgdACfmfPIgRW13N_IJlz4zMvimvWG81KktYSmtQrrjg4dY82b_-beSJK71c6PtyKEX_BhyODcK20Xl9ni5PkB7wlcM0YIgMe_EHK8bK2KlCKNACDo6jy2n1gxEvXKe53EIGtVcD18zys0DaY1czNgjNY-_8q9MceL1IypIm51jAseKmtbFoHUyoi6iWdkxrJzl8UQzjjdCQCMeg9V5OEtj0PX2PBLzE4EbCP9ZZgALVwbg0Ivojph2iWFX9BHl9XHkr2GxxOXwYs_uDDDVoIKrJjFU4ebYFno2SZ0IJFlilPHYrGWTfN7xpjQ9YkL4JVxuxK7e8hKKarLoSAowV1IRCWvFaB3ILFwyyWqielWa1OEn42ibw6Ii7HPdhP9X6KBN3RBM-1iDv5DLt2p34hYemEbFetyJYwzEeOzaQSwcaJi2iTAAMW233uL24wlDsGEgzO0jPQX7il7L3nOu-2N2PIzBd9KDfMrwXR7LvzS5OeCSJkMsbn4I71bm_5mPSC1XXFzIeWctioE1yUTC9ti8rMMRD4nw9V7JLfHZsTEOeR8TS-c3R4gN57MXjWa9r1PMtzUR8cFSasePE_949poIaEBYZBlHNXLSE'
                }
              })
              .then(response => response)
              .then(data =>  {
                  ob = data;
                  console(data);
                  this.setState({obj: ob });
                 // console.log(this.state);
              })
              .catch((e) => 
              {
             console.error(e);
             });
             this.setState({obj: 'ob' });
          };

      componentDidMount() {

        return <toggleShow/>
         
        }

       

    render() {
        return (
          
         <div> {this.state.data}  </div>
        )
    }
       
  };



  /*comment */
  let App = () => {
    return <Headline />;
  };
  const Headline = () => {
    const greeting = 'hello';
    return <h1>{greeting}</h1>;
  };
  export default App;

 