import React from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class InsertMeetingItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: "",
            jobNumber: "",
            name: "",
            topic: "",
            location: "",
            time: new Date(),
            link: ""
        }
        this.handleInsert = this.handleInsert.bind(this);

        this.handleJobNumberChange = this.handleJobNumberChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTopicChange = this.handleTopicChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleLinkChange = this.handleLinkChange.bind(this);
    }

    handleInsert() {
        axios.post("post_meeting_item", {
            jobNumber: this.state.jobNumber,
            name: this.state.name,
            topic: this.state.topic,
            location: this.state.location,
            time: this.state.time,
            link: this.state.link
        })
    }
    
    handleJobNumberChange(event) {
        this.setState({jobNumber: event.target.valuember});
    } 
    handleNameChange(event) {
        this.setState({name: event.target.value});
    } 
    handleTopicChange(event) {
        this.setState({topic: event.target.value});
    } 
    handleLocationChange(event) {
        this.setState({location: event.target.value});
    } 
    handleTimeChange(event) {
        this.setState({time: event.target.value});
    } 
    handleLinkChange(event) {
        this.setState({link: event.target.value});
    } 


    render() {
        return (
            <div key="insertMeetingItemDiv">
                <form>
                    <div className="form-group">
                        <label>工号</label>
                        <input className="form-control" onChange={this.handleJobNumberChange} value={this.state.jobNumber} placeholder=""/>
                    </div>
                    <div className="form-group">
                        <label>姓名</label>
                        <input className="form-control" onChange={this.handleNameChange} value={this.state.name} placeholder=""/>
                    </div>
                    <div className="form-group">
                        <label>主题</label>
                        <input className="form-control" onChange={this.handleTopicChange} value={this.state.topic} placeholder=""/>
                    </div>
                    <div className="form-group">
                        <label>时间</label>
                        <DatePicker selected={this.state.time} onChange={this.handleTimeChange} />
                    </div>
                    <div>
                    
                    </div>

                    <div className="form-group">
                        <label>地点</label>
                        <input className="form-control" onChange={this.handleTimeChange} value={this.state.location} placeholder=""/>
                    </div>
                    <div className="form-group">
                        <label>链接</label>
                        <input className="form-control" onChange={this.handleLinkChange} value={this.state.link} placeholder=""/>
                    </div>

                    <button onClick={this.handleInsert} className="btn btn-primary"> 添加 </button>
                </form>
            </div>
        );    
    }
}

export default InsertMeetingItem;