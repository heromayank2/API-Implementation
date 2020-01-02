import React, { Component } from 'react'
import axios from 'axios';
import { Button } from 'reactstrap';

export default class Weather extends Component {
    state={
        city:""
    }
    handleChange = event=>{
        this.setState({city:event.target.value})
    }
    handleSubmit = event =>{
        // to avoid default functioning of event
        //http://api.weatherstack.com/current?access_key=ff07cad25b017ccfe596400d0f865c4d&query=New York
        event.preventDefault();
        const access_key="ff07cad25b017ccfe596400d0f865c4d";
        const city = this.state.city;
        
        axios.get(`http://api.weatherstack.com/current?access_key=`+access_key+`&query=`+city)
        .then(res=>{
            console.log(res.data);
        })
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="city" onChange={this.handleChange}/>
                    <Button color="danger" type="submit">Submit</Button>
                </form>           
            </div>
        )
    }
}
