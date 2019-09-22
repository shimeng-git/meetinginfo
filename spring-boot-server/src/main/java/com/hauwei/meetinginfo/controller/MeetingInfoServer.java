package com.hauwei.meetinginfo.controller;

import com.hauwei.meetinginfo.dao.MeetingDao;
import com.hauwei.meetinginfo.entities.MeetingItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class MeetingInfoServer {
    @Autowired
    MeetingDao meetingDao;

    @GetMapping("/meeting_info")
    @ResponseBody
    public List<MeetingItem> getMeetingTable() {
        System.out.println("receive get request!");

        return meetingDao.getMeetingTable();
    }

    @DeleteMapping("/delete_meeting_item")
    @ResponseBody
    public boolean deleteMeetingItem(@RequestBody String id) {
        System.out.println(id);

        meetingDao.deleteMeetingItem(id);
        return true;
    }
}
