import React, { Component } from 'react'
import UserService from '../services/UserService'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.addUsers = this.addUsers.bind(this);
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data});
        })
    }

    addUsers(){
        const { history } = this.props;
        history.push('/add-users')
    }

  render() {
    return (
      <div>
        <h2 className='text-center'>Managemant User</h2>
        
        <button className='btn btn-primary' onClick={this.addUsers.bind(this)} style={{margin: '10px'}}>Add Users</button>
        
        <div className='row'>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.users.map(
                            user => <tr key={user.userId}>
                                <td>{user.userId}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
export default ListUserComponent
