import React from "react";
class AddComponent extends React.Component{
    state = {
        title : '',
        salary : '',
    }
    handleChangeTitleJobs = (event) => {
        this.setState({
            title : event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary : event.target.value
        })
    }
    handleSubmit = () =>{
        console.log(this.state)
        if (!this.state.title || !this.state.salary){
            alert("Missing required params")
            return;
        }
        this.props.addNewJob({
            id : Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary,
        })
        this.setState({
            title :'',
            salary : ''
        })
    }

    render() {
        return(
            <form>
                <label htmlFor="fname">TitleJobs:</label><br/>
                <input type="text" value={this.state.title}
                       onChange={(event) => this.handleChangeTitleJobs(event)}/><br/>
                <label htmlFor="lname">Salary:</label><br/>
                <input type="text" value={this.state.salary}
                       onChange={event => this.handleChangeSalary(event)}/><br/><br/>
                <button onClick={(event) => this.handleSubmit(event)} type="button">Submit</button>
            </form>
        )
    }
}

export default AddComponent;