import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Button, Glyphicon } from 'react-bootstrap';
import Gallery from './Gallery';

class Global extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            items: []
        }
    }

    search() {
        console.log("search", this.state.query);
        const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`;
        fetch(`${BASE_URL}${this.state.query}`, { method: 'GET' })
            .then(response => response.json())
            .then(json => {
                console.log('book items', json);
                let { items } = json;
                this.setState({ items });
            })
    }

    render() {
        return (
            <div className="Global">
                <h2>Book Explorer!</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for a Book"
                            onChange={event => { this.setState({ query: event.target.value }) }}
                            onKeyPress={event => {
                                if (event.key === "Enter") {
                                    this.search()
                                }
                            }}
                        />
                        <Button type="submit" onClick={() => this.search()}>Search</Button>
                    </InputGroup>
                </FormGroup>
                <Gallery />
            </div>
        )
    }
}

export default Global;