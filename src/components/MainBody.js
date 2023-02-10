import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'


class MainBody extends React.Component
{
    constructor(props) {
		super(props);
		this.state = {
			key: 'home',
            goals_array:[1,2,3,4,5,1,2,3,4,5],
            todo:""
		};
	}
    handleChange = event =>
    {
        const target=event.target;
        const name=target.name;
        const value=target.value;
        this.setState({...this.state,[name]:value})
    }
    addTask = (e)=>
    {
        e.preventDefault()
        let new_gols_list=this.state.goals_array
        new_gols_list.push(this.state.todo)
        this.setState({key:'home',todo:"",goals_array:new_gols_list})
    }
    remove_task=(element)=>
    {
        let new_gols_list=this.state.goals_array
        let pos = new_gols_list.indexOf(element)
        new_gols_list.splice(pos, 1)
        this.setState({...this.state,goals_array:new_gols_list})
    }
    render()
    {
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 mt-5">
                            <div className="card">
                                <div className="card-Body bg-white"> 
                                        <Tabs  defaultActiveKey="profile" id="uncontrolled-tab-example" 
                                        activeKey={this.state.key}
				                        onSelect={key => this.setState({ key })}>
                                        <Tab eventKey="home" title="Newest">
                                            <div className='sr'>
                                            {this.state.goals_array.length != 0 ?
                                            (<div className="card">
                                                <div className="card-body">
                                                    <ul className="list-group">
                                                        {this.state.goals_array.map((ele,key)=>
                                                        {
                                                           return( <li className="list-group-item list-group-item-action list-group-item-info" key={key} onClick={() => this.remove_task(ele)}>
                                                                {ele}
                                                            </li>)
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>) : null}
                                            </div>
                                        </Tab>
                                        <Tab eventKey="profile" title="Oldest">
                                        <div class='sr'>
                                        {this.state.goals_array.length != 0 ? (<div className="card">
                                                <div className="card-body">
                                                    <ul className="list-group">
                                                        {this.state.goals_array.reverse().map((ele,key)=>
                                                        {
                                                           return( <li className="list-group-item list-group-item-action list-group-item-info" key={key}>
                                                                {ele}
                                                            </li>)
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>): null}
                                        </div>
                                        </Tab>
                                        <Tab eventKey="contact" title="Add">
                                            <div className="card">
                                                <div className="card-body">
                                                <form className="form">
                                                <div className="form-group">
                                                    <input className="form-control" name="todo" id="todo" type="text" placeholder="Task To Do" value={this.state.todo} onChange={this.handleChange}/>
                                                </div>
                                                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                                                <button className="btn btn-info btn-block mt-2" onClick={this.addTask}>Add Task</button></div>
                                            </form>
                                                </div>
                                            </div>
                                        </Tab>
                                        </Tabs>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MainBody;