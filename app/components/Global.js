import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Button, Glyphicon } from 'react-bootstrap';

class Global extends Component {

    search() {
        console.log("search");
    }

    render() {
        return (
            <div>
                <h2>Book Explorer!</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for a Book"
                        />
                        <Button type="submit" onClick={() => this.search()}>Search</Button>
                    </InputGroup>
                </FormGroup>
            </div>
        )
    }
}



export default Global;