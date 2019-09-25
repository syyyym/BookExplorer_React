import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Button, Glyphicon } from 'react-bootstrap';

class Global extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    search() {
        console.log("search", this.state.query);
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
            </div>
        )
    }
}

export default Global;