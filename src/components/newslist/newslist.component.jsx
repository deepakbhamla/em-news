import React, { Component } from 'react'
import axios from 'axios';
import logo from './logo.png'
import { InputGroup, FormControl, Container } from 'react-bootstrap';
import CardList from '../cardlist/cardlist.component'

export class NewsList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            news_list : [],
            token : '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        var param = this.props.match.params.country
        
        axios.get(`https://gnews.io/api/v4/search?q=example&country=${param}&token=696409bef9a155908ffc14238258119b`)
        .then(res => {
            if (res){
                this.setState({ news_list :  res.data.articles }, console.log(res.data));
            }
            else{
                this.setState({ news_list : null});
            }
        })

    }
    handleChange(event) {
        this.setState({token: event.target.value});
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
    render() {
        const {news_list } = this.state
        console.log(news_list)
        if (news_list.length !== 0) {
            return ( 
            <Container style={{display:'flex', flexWrap:'wrap'}}>
                {
                    news_list.map( item =>(<CardList item={item}/>))
                }
            </Container>
             )
        }
        else {
            return (
                <div>
                    <img src={logo} style={{width:'30%'}} alt=""/>
                    <h3 style={{color:'#00BFA6'}}>It seems Gnews Token Expired</h3>
                    <p>
                        <a href="https://gnews.io/dashboard" target="_blank" rel="noreferrer">plese click here to genrate</a>
                    </p>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Enter your token here' />
                        <br/>
                        <input className="btn mt-2" type="submit" value="Submit" />
                    </form>                
                </div>
            )
        }
    }
}

export default NewsList
