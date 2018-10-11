import React, { Component } from 'react';

class List extends Component {

    constructor(props){
        super(props);

        this.state = {
            item: "", 
            items: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLeft = this.handleLeft.bind(this);
    }

    handleInput(){
        return (e => {
            this.setState({ item: e.target.value });
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({ items: this.state.items.concat(this.state.item) });
        this.setState({ item: "" });
    }

    handleLeft(e){
        e.preventDefault();
        this.props.send(e.target.value);
    }

    render(){
        return(
            <div>
                <form>
                    <input type="text" value={this.state.item} onChange={this.handleInput()} />
                    <button onClick={this.handleSubmit} >X</button>
                </form>
                {this.props.sent.to_a}
                <ul>
                    {this.state.items.map((el) => <li>
                        {el}<button onClick={this.handleLeft}></button></li>)}
                </ul>
            </div>
        );
    }
}


export default List;