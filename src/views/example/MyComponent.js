import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        arrJob: [
            {id: "1", title: 'developer', salary: '500'},
            {id: "2", title: 'Tester', salary: '340'},
            {id: "3", title: 'Project Manage', salary: '1000'},
        ]
    }
    addNewJob = (job) => {
        console.log('check job from parent:', job)
        // let currenJobs = this.state.arrJob;
        // currenJobs.push(job);
        this.setState({
            arrJob : [...this.state.arrJob, job]
            // arrJob : currenJobs
            }
        )
    }
    deleteAJob = (job) =>{
        let currenJobs = this.state.arrJob;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJob : currenJobs
        })
    }
    render() {
        console.log('>>>> Render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJob={this.state.arrJob}
                    deleteAJob = {this.deleteAJob}
                />
            </>
        )
    }
}

//export default : Chả gia một cái
// export {MyComponent1, MyComponent2} form MyComponent :: Chả gia nhiều
export default MyComponent;

