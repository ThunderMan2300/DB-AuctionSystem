package com.System.Auction.Services;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class Response <T>{
    private String status;
    private String message;
    private T data;
}
