package com.System.Auction.Controller;

import com.System.Auction.Entities.Member;
import com.System.Auction.Services.MemberService;
import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
    Logger LOGGER = LoggerFactory.getLogger(MemberController.class);

    @Autowired
    MemberService memberService;

    @PostMapping("/member")
    private long savePerson(@RequestBody Member member) {
        LOGGER.info(member.toString());
        memberService.save(member);
        return member.getMID();
    }
}
