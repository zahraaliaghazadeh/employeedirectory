// initial test of the api 

// import React, { Component } from "react"
// import API from "../utils/Api"
// import Container from "./Container"

// class SearchContainer extends Component {
//     state = {
//         result: [],
//         search: ""
//     }

//     componentDidMount() {
//         this.apiSearch()
//     }

//     apiSearch = () => {
//         API.search()
//             .then(res => this.setState({ result: res.data.results }))
//             .catch(err => console.log(err));

//     }
//     render(){
//         return (<Container></Container>)
//     }
// }


  
import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmpDetail from "./EmpDetail";
import API from "../utils/API";

class SearchContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  componentDidMount() {
    this.searchEmp();
  }

  searchEmp = () => {
    API.search()
      .then(res => this.setState({ result: res.data.results}))
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
   
  };

  

  render() {
    return (
      <Container>
        <Row>
        <Col size="md-12">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          
          <Col size="md-12">
            <Card
              heading={"Employees:"}
            >
              {/* to sort the table */}
              {[...this.state.result].filter(item =>{return item.name.first.toLowerCase().indexOf( this.state.search)>-1}).map((res, index)=><div > <EmpDetail key={index} name={res.name.first +" "+ res.name.last} src={res.picture.thumbnail} director={res.email} age={res.dob.age} phone={res.phone}/> <hr/></div>)}
            
            </Card>
          </Col>
          
        </Row>
      </Container>
    );
  }
}

export default SearchContainer;