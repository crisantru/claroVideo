import React from 'react';

class Example extends React.Component{
    // add our constructor which receives our props
    constructor(props){
        super(props);
        this.state = {
            name: '',
            greeting: `Good Mornning, `
        }

        // To use the 'this' keyword, we need to bind it to our function 
        this.onChange = this.onChange.bind(this);
    }

    // A custom function to change the name in our state to match the user input
    onChange(e){
        this.setState({
            name: e.target.value
        })
    }

    render(){
        return(
            <div>
                <section className="section">
                    <label className="label">Name:</label>
                    <input className="input" name="name" placeholder="Enter your name..." onChange={this.onChange} />
                </section>
                <section className="section">
                    <p>{this.state.greeting} {this.state.name}</p>
                </section>
            </div>
        )
    }
}

export default Example;