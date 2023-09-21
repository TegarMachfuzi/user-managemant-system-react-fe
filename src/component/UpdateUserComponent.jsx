import React, { Component } from 'react'
import UserService from '../services/UserService';

export default class UpdateUserComponent extends Component {

    constructor(proops){
        super(proops)

        this.state = {
            userId: this.props.match.params.userId,
            username: '',
            password: ''
        }

        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.updateUsers = this.updateUsers.bind(this);
    }

    componentDidMount(){
        UserService.getUsersById(this.state.userId).then((res) => {
            let users = res.data;
            this.setState({username: users.username,
                password: users.password
            });
        });
    }

    updateUsers = (e) => {
        e.preventDefault();
        let users = {username: this.state.username, password: this.state.password};
        console.log('users => ' + JSON.stringify(users));

        UserService.createNewUser(users).then(res => {
            this.props.history.push('/users')
        })
    }
    changeUsernameHandler(myevent){
        this.setState({username: myevent.target.value});
    }

    changePasswordHandler(myevent){
        this.setState({password: myevent.target.value});
    }
    cancel(){
        this.props.history.push('/users')
    }

  render() {
    return (
      <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Update User</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label> UserName: </label>
                                <input placeholder='Username' name='username' className='form-control' 
                                value={this.state.username} onChange={this.changeUsernameHandler}></input>
                            </div>
                            <div className='form-group'>
                                <label> Password: </label>
                                <input placeholder='Password' name='password' className='form-control' 
                                value={this.state.password} onChange={this.changePasswordHandler}></input>
                            </div>
                            <button className='btn btn-success' onClick={this.updateUsers}>Save</button>
                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{margin: '10px'}}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}