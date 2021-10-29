package com.System.Auction.Controlller;

import com.System.Auction.Entities.Member;
import com.System.Auction.Services.MemberServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/member")
public class MemberController {
    @Autowired
    MemberServices services;

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Member> getAllUsers() {
        // This returns a JSON or XML with the users
        return services.findAll();
    }
}
