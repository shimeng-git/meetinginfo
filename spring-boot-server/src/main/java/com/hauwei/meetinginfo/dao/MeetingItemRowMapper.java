package com.hauwei.meetinginfo.dao;

import com.hauwei.meetinginfo.entities.MeetingItem;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class MeetingItemRowMapper implements RowMapper<MeetingItem> {
    @Override
    public MeetingItem mapRow(ResultSet rs, int rowNum) throws SQLException {

        MeetingItem meetingItem = new MeetingItem();

        meetingItem.setId(rs.getString("id"));
        meetingItem.setJobNumber(rs.getString("jobNumber"));
        meetingItem.setName(rs.getString("name"));
        meetingItem.setTime(rs.getString("time"));
        meetingItem.setType(rs.getString("type"));
        meetingItem.setLocation(rs.getString("location"));
        meetingItem.setLink(rs.getString("link"));

//        meetingItem.setCreatedDate(rs.getTimestamp("created_date").toLocalDateTime());

        return meetingItem;

    }
}
