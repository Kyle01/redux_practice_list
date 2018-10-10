import React, { Component } from 'react';

class List extends Component {

    constructor(props){
        super(props);

        this.state = {
            item: "", 
            items: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleLeft(){

    }

    render(){
        return(
            <div>
                <form>
                    <input type="text" value={this.state.item} onChange={this.handleInput()} />
                    <button onClick={this.handleSubmit} >X</button>
                </form>
                <ul>
                    {this.state.items.map((el) => <li>
                        {el}<button onClick={this.handleLeft}></button></li>)}
                </ul>
            </div>
        );
    }
}


export default List;