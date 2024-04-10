import React from "react";
import './Demo.scss'

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnClickDelete = (job) =>{
        console.log('>>> handleOnClickDelete', job)
        this.props.deleteAJob(job);
    }
    render() {
        console.log('>>>> Check Props: ', this.props)
        let {arrJob} = this.props;
        let {showJobs} = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className="btn-show" onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="jobList">
                            {
                                arrJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                            <><span onClick={() => this.handleOnClickDelete(item)}> X </span></>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) =>{
//     let {arrJob} = props;
//
//     return(
//             <>
//                 <div className="jobList">
//                     {
//                         arrJob.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         )
// }
export default ChildComponent;

