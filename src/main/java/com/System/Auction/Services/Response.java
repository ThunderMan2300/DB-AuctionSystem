package com.System.Auction.Services;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Response <T>{
    private String status;
    private String message;
    private T data;
}
