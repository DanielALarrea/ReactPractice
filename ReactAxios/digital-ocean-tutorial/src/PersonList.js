import React from 'react';

import qxios from 'axios';
import api from './api';

export default class PersonList extends React.Component {

    //-----------------
    // Code for get
    //-----------------

    // state = {
    //     persons: []
    // }

    // componentDidMount() {
    //     axios.get(`https://jsonplaceholder.typicode.com/users`)
    //     .then(res => {
    //         const persons = res.data;
    //         this.setState({persons});
    //     })
    // }

    // render() {
    //     return (
    //         <ul>
    //             {this.state.persons.map(person => <li>{person.name}</li>)}
    //         </ul>
    //     )
    // }

    //-----------------
    // Code for post
    //-----------------

    // state = {
    //     name: '',
    // }

    // handleChange = event => {
    //     this.setState({name: event.target.value});
    // }

    // handleSubmit = event => {
    //     event.preventDefault();

    //     const user = {
    //         name: this.state.name
    //     };

    //     axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
    //     .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //     })
    // }

    // render() {
    //     return (
    //         <div>
    //             <form onSubmit={this.handleSubmit}>
    //                 <label>
    //                     Person Name:
    //                     <input type="text" name="name" onChange={this.handleChange} />
    //                 </label>
    //                 <button type="submit">Add</button>
    //             </form>
    //         </div>
    //     )
    // }


    //-----------------
    // Code for delete
    //-----------------

    // state = {
    //     id: '',
    // }

    // handleChange = event => {
    //     this.setState({id: event.target.value});
    // }

    // handleSubmit = event => {
    //     event.preventDefault();

    //     const user = {
    //         name: this.state.name
    //     };

    //     axios.delete(`https://jsonplaceholder.typicode.com/users`, {user})
    //     .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //     })
    // }

    // render() {
    //     return (
    //         <div>
    //             <form onSubmit={this.handleSubmit}>
    //                 <label>
    //                     Person ID:
    //                     <input type="text" name="id" onChange={this.handleChange} />
    //                 </label>
    //                 <button type="submit">Delete</button>
    //             </form>
    //         </div>
    //     )
    // }

    //-----------------
    // Code for API
    //-----------------

    // handleSubmit = event => {
    //     event.preventDefault();

    //     api.delete('users/${this.state.id}')
    //     .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //     })
    // }

    //-----------------
    // Code for async and await
    //-----------------

    handleSubmit = event => {
        event.preventDefault();

        const response = await api.delete(`users/${this.state.id}`);

        console.log(response);
        console.log(response.data);
    }
}