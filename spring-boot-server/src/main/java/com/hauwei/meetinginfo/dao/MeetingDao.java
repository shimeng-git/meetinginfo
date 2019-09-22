package com.hauwei.meetinginfo.dao;

import com.hauwei.meetinginfo.entities.MeetingItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MeetingDao {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<MeetingItem> getMeetingTable() {
        String sql = "select * from meetinginfo";
        RowMapper<MeetingItem> rowMapper = new BeanPropertyRowMapper<MeetingItem>(MeetingItem.class);
        List<MeetingItem> meetingItems = jdbcTemplate.query(sql, new MeetingItemRowMapper());
        List<MeetingItem> query1 = jdbcTemplate.query(sql, rowMapper);
        List<MeetingItem> query2 = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(MeetingItem.class));

        return meetingItems;
    }

    public int deleteMeetingItem(String id) {
        String sql = "delete from meetinginfo where id=?";
        int update = jdbcTemplate.update(sql, id);

        return update;
    }


}
