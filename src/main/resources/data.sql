INSERT INTO member (name, home_addr, email, phone, password) VALUES
        ('JAIME', 'FARMERS BRANCH', 'JAIME@GMAIL.COM', '1234567890', 'PASSWORD'),
        ('ANNABELLE', 'RICHARDSON', 'NOTFAKE@GMAIL.COM', '5555555555', 'ABC'),
        ('JOSH', 'DALLAS', 'JOSHISCOOL@GMAIL.COM', '5551244483', '123'),
        ('AKSHAYA', 'RICHARDSON', 'MYEMAIL@GMAIL.COM', '9876453120', 'QWER'),
        ('ANISH', 'GARLAND', 'BUSINESS@GMAIL.COM', '123654987', '0000');

INSERT INTO buyer (buyer_id, ship_addr) VALUES
        (1, 'MY ADDRESS 1'),
        (3, 'MY ADDRESS 2'),
        (4, 'MY ADDRESS 3');

INSERT INTO seller (seller_id, bank_acct_num, bank_routing_num) VALUES
        (2, '123456789102', '000000000'),
        (5, '111111111111', '012345678');

INSERT INTO supercategory (name, description) VALUES
        ('CARS', 'BROOM BROOM'),
        ('COMPUTERS', 'BEEP BOOP'),
        ('OUTDOORS', 'GOING OUT');

INSERT INTO category (supcat_id, name, description) VALUES
        (1, 'MUSTANG', 'FORD SPORTS CAR'),
        (2, 'DELL', 'PARTNER WITH ALIENWARE'),
        (2, 'HP', 'HIGH PRINTER QUALITY');

INSERT INTO item (seller_id, title, description, start_price, end_time, start_time, bid_increment, category_id, img_url) VALUES
        (2, 'NEW FORD MUSTANG', '2021 FORD MUSTANG CONVERTIBLE CAR', 250000, to_date('2021-10-30 12:00:00', 'YYYY-MM-DD HH:MI:SS'), to_date('2021-10-29 12:00:00', 'YYYY-MM-DD HH:MI:SS'), 500, 1, ''),
        (2, 'USED MOUSE', 'WORKING BLUETOOTH MOUSE', 5, to_date('2021-10-29 12:00:00', 'YYYY-MM-DD HH:MI:SS'), to_date('2021-10-22 12:00:00', 'YYYY-MM-DD HH:MI:SS'), 5, 3, '');

INSERT INTO bid (buyer_id, item_id, price, bid_time) VALUES
        (1, 1, 250000, to_date('2021-10-29 01:24:00', 'YYYY-MM-DD HH:MI:SS')),
        (3, 1, 250500, to_date('2021-10-29 01:30:00', 'YYYY-MM-DD HH:MI:SS')),
        (1, 1, 251000, to_date('2021-10-29 02:45:00', 'YYYY-MM-DD HH:MI:SS')),
        (3, 2, 5, to_date('2021-10-28 05:20:00', 'YYYY-MM-DD HH:MI:SS')),
        (4, 2, 10, to_date('2021-10-28 05:25:00', 'YYYY-MM-DD HH:MI:SS'));

INSERT INTO transaction (buyer_id, seller_id, item_id,
 win_bid, buyer_rating, seller_rating, buyer_feedback, seller_feedback) VALUES
        (1, 2, 1, 3, 10, 10, 'GREAT CAR', 'NICE LOOKING'),
        (4, 2, 2, 5, 7, 8, 'MOUSE IS OLD', 'SOWED UP LATE TO MEETING');