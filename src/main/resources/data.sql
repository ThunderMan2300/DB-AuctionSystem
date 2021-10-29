INSERT INTO MEMBER (MID, Name, HomeAddress, Email, Phone, Password) VALUES
        (1, 'JAIME', 'FARMERS BRANCH', 'JAIME@GMAIL.COM', '1234567890', 'PASSWORD'),
        (2, 'ANNABELLE', 'RICHARDSON', 'NOTFAKE@GMAIL.COM', '5555555555', 'ABC'),
        (3, 'JOSH', 'DALLAS', 'JOSHISCOOL@GMAIL.COM', '5551244483', '123'),
        (4, 'AKSHAYA', 'RICHARDSON', 'MYEMAIL@GMAIL.COM', '9876453120', 'QWER'),
        (5, 'ANISH', 'GARLAND', 'BUSINESS@GMAIL.COM', '123654987', '0000');

INSERT INTO BUYER (MID, ShippingAddress) VALUES
        (1, 'MY ADDRESS 1'),
        (3, 'MY ADDRESS 2'),
        (4, 'MY ADDRESS 3');

INSERT INTO SELLER (MID, BankNum, RoutingNumber) VALUES
        (2, '123456789102', '000000000'),
        (5, '111111111111', '012345678');

INSERT INTO SUPERCATEGORY (SupCategoryID, Name, Description) VALUES
        (1, 'CARS', 'BROOM BROOM'),
        (2, 'COMPUTERS', 'BEEP BOOP'),
        (3, 'OUTDOORS', 'GOING OUT');

INSERT INTO CATEGORY (SupCategoryID, CategoryID, CategoryName, Description) VALUES
        (1, 1, 'MUSTANG', 'FORD SPORTS CAR'),
        (2, 2, 'DELL', 'PARTNER WITH ALIENWARE'),
        (2, 3, 'HP', 'HIGH PRINTER QUALITY');

INSERT INTO ITEM (ItemID, SellerID, Title, Description, StartingPrice, EndTime, StartTime, BidIncrement, CategoryID, ImageURL) VALUES
        (1, 2, 'NEW FORD MUSTANG', '2021 FORD MUSTANG CONVERTIBLE CAR', 250000, '2021-10-30', '2021-10-29', 500, 1, ''),
        (2, 2, 'USED MOUSE', 'WORKING BLUETOOTH MOUSE', 5, '2021-10-28', '2021-10-21', 5, 3, '');

INSERT INTO BID (BidID, BuyerID, ItemID, Price, Timestamp) VALUES
        (1, 1, 1, 250000, '2021-10-29'),
        (2, 3, 1, 250500, '2021-10-29'),
        (3, 1, 1, 251000, '2021-10-29'),
        (4, 3, 2, 5, '2021-10-27'),
        (5, 4, 2, 10, '2021-10-28');

INSERT INTO TRANSACTION (TransactionID, BuyerID, SellerID, ItemID, TransactionTime,
 WinningBid, BuyerRating, SellerRating, BuyerFeedback, SellerFeedback) VALUES
        (1, 1, 2, 1, '2021-10-30', 3, 5, 5, 'GREAT CAR', 'NICE LOOKING'),
        (2, 4, 2, 2, '2021-10-28', 5, 3, 4, 'MOUSE IS OLD', 'SOWED UP LATE TO MEETING');