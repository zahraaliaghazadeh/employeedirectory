import React, { Component } from "react"
import API from "../utils/Api"
import Container from "./Container"

class SearchContainer extends Component {
    state = {
        result: [],
        search: ""
    }

    componentDidMount() {
        this.apiSearch()
    }

    apiSearch = () => {
        API.search()
            .then(res => this.setState({ result: res.data.results }))
            .catch(err => console.log(err));

    }
    render(){
        return (<Container></Container>)
    }
}
