import React from 'react';
import axios from 'axios';
import moment from 'moment';

import 'bootstrap/dist/css/bootstrap.min.css';

function TableHeader(props) {
    return (
        // <tr key="tableHeader">
        <tr>
            <th>时间</th>
            <th>工号</th>
            <th>姓名</th>
            <th>主题</th>
            <th>类型</th>
            <th>地点</th>
            <th>链接</th>
            <th>操作</th>
        </tr>
    );
}

function DeleteMeetingItem(params) {
    axios.delete("/delete_meeting_item", {data: params} )
    .then(() => { console.log('delete done!');})

    console.log(params);
}


function TableBodyOneRow(props) {
    // console.log(props.value);
    return (
        <tr>
            <th>{ moment(props.row.time).format("YYYY-MM-DD hh:mm") }</th>
            <th>{ props.row.jobNumber }</th>
            <th>{ props.row.name }</th>
            <th>{ props.row.topic }</th>
            <th>{ props.row.type }</th>
            <th>{ props.row.location }</th>
            <th>{ props.row.link } </th>
            <th> <button onClick={() => {DeleteMeetingItem(props.row.id)}} className="btn btn-sm btn-danger deleteBtn"> 删除 </button> </th>
        </tr>
    );
}

class MeetingInfoTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeInfo: "会议信息管理",
            rows: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.refreshTableData();
    }

    refreshTableData() {
        const url = "/meeting_info"
        axios.get(url)
        .then( response => {
            this.setState( {rows: response.data} );
        } )
        .catch(e => {
            console.log(e);
        })
    }

    handleClick() {
        console.log(this.state.rows);
    }

    render() {
        return (
            <div key="MeetingInfoTableDiv" className="table-responsive">

                <table key="MeetingInfoTable" className="table table-striped table-sm">
                    <thead key="MeetingInfoTableHeader">
                        <TableHeader />
                    </thead>
                    
                    <tbody key="MeetingInfoTableBody">
                        {
                            this.state.rows.map((row) => {
                                return <TableBodyOneRow key={row.a + "row"} row={row} />
                            })
                        }
                    </tbody>
                   
                </table>

                <div style={{display: 'block'}} onClick={this.handleClick} > test data </div>
            </div>
        );
    }
}

export default MeetingInfoTable;