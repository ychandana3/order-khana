'use client';
import React from "react";
export default class Contact extends React.Component{
    constructor(props:any) {
        super(props);
        this.state = {name:""}

    }
    componentDidMount(): void {
        this.fetchData();

    }
    fetchData = async() => {
        const response = await fetch('https://api.github.com/users/ychandana3');
        const data = await response.json();
        this.setState({name: data.name});
    }
    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
                <h2>yaminichandana3@gmail.com</h2>
                <h3>Miryalaguda</h3>
            </>
        )
    }
}