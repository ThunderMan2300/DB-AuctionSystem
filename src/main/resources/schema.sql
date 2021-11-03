DROP TABLE IF EXISTS transaction;
DROP TABLE IF EXISTS bid;
DROP TABLE IF EXISTS item;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS supercategory;
DROP TABLE IF EXISTS seller;
DROP TABLE IF EXISTS buyer;
DROP TABLE IF EXISTS member;

create table member (
  mid int auto_increment,
  email varchar(256) not null unique,
  name varchar(256) not null,
  password varchar(256) not null,
  home_addr varchar(256),
  phone varchar(10) not null unique,
  primary key(mid)
);

create table buyer (
  buyer_id int,
  ship_addr varchar(256) not null,
  primary key(buyer_id),
  foreign key(buyer_id) references member(mid)
    on update cascade
    on delete cascade
);

create table seller (
  seller_id int,
  bank_acct_num varchar(12) not null unique,
  bank_routing_num varchar(9) not null,
  primary key(seller_id),
  foreign key(seller_id) references member(mid)
    on update cascade
    on delete cascade
);

create table supercategory (
  supcat_id int auto_increment,
  name varchar(256) not null,
  description varchar(256),
  primary key(supcat_id)
);

create table category (
  cat_id int auto_increment,
  name varchar(256) not null,
  description varchar(256),
  supcat_id int,
  primary key(cat_id),
  foreign key(supcat_id) references supercategory(supcat_id)
    on update cascade
    on delete restrict
);

create table item (
  item_id int auto_increment,
  seller_id int not null,
  title varchar(256) not null,
  description varchar(256),
  start_price decimal(12,2) not null,
  bid_increment decimal(12,2) not null,
  start_time datetime not null,
  end_time datetime not null,
  category_id int,
  img_url varchar(256),
  primary key(item_id),
  foreign key(seller_id) references member(mid)
    on update cascade
    on delete restrict,
  foreign key(category_id) references category(cat_id)
    on update cascade
    on delete set null
);

create table bid (
    bid_id int auto_increment,
    buyer_id int not null,
    item_id int not null,
    price decimal(12,2) not null,
    bid_time datetime not null default current_timestamp,
    primary key(bid_id),
    foreign key(buyer_id) references member(mid)
      on update cascade
      on delete restrict,
    foreign key(item_id) references item(item_id)
      on update cascade
      on delete restrict
);

create table transaction (
  tid int auto_increment,
  buyer_id int not null,
  seller_id int not null,
  item_id int not null unique,
  buyer_rating int,
  seller_rating int,
  buyer_feedback varchar(256),
  seller_feedback varchar(256),
  tx_time datetime not null default current_timestamp,
  win_bid int not null unique,
  primary key(tid),
  foreign key(buyer_id) references member(mid)
    on update cascade
    on delete restrict,
  foreign key(seller_id) references member(mid)
    on update cascade
    on delete restrict,
  foreign key(item_id) references item(item_id)
    on update cascade
    on delete restrict,
  foreign key(win_bid) references bid(bid_id)
    on update cascade
    on delete restrict,
  check(buyer_rating >= 1 and buyer_rating <= 10),
  check(seller_rating >= 1 and seller_rating <= 10)
);
