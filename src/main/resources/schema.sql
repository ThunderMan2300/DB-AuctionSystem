DROP TABLE IF EXISTS TYPE;
DROP TABLE IF EXISTS CATEGORY;
DROP TABLE IF EXISTS SUPERCATEGORY;
DROP TABLE IF EXISTS BIDS;
DROP TABLE IF EXISTS TRANSACTION;
DROP TABLE IF EXISTS ITEM;
DROP TABLE IF EXISTS SELLER;
DROP TABLE IF EXISTS BUYER;
DROP TABLE IF EXISTS MEMBER;


CREATE TABLE MEMBER (
	MID 			long 			NOT NULL,
	Name			varchar(255)	NOT NULL,
	HomeAddress 	varchar(255)			,
	Email			varchar(255)	NOT NULL UNIQUE,
	Phone			varchar(10)		NOT NULL UNIQUE,
	Password		varchar(255)	NOT NULL,
	PRIMARY KEY (MID)
);

CREATE TABLE BUYER (
	MID				long			NOT NULL,
	ShippingAddress	varchar(255)	NOT NULL,
	PRIMARY KEY (MID),
	FOREIGN KEY (MID) REFERENCES MEMBER(MID)
);

CREATE TABLE SELLER (
	MID				long			NOT NULL,
	BankNum			varchar(12)		NOT NULL UNIQUE,
	RoutingNumber	varchar(9)		NOT NULL,
	PRIMARY KEY (MID),
	FOREIGN KEY (MID) REFERENCES MEMBER(MID)
);

CREATE TABLE SUPERCATEGORY (
	SupCategoryID	long			NOT NULL,
	Name			varchar(255)	NOT NULL,
	Description		varchar(255)			,
	PRIMARY KEY (SupCategoryID)
);

CREATE TABLE CATEGORY (
	SupCategoryID	long			NOT NULL,
	CategoryID		long			NOT NULL,
	CategoryName	varchar(255)	NOT NULL,
	Description		varchar(255)			,
	PRIMARY KEY (CategoryID),
	FOREIGN KEY (SupCategoryID) REFERENCES SUPERCATEGORY(SupCategoryID)
);

CREATE TABLE ITEM (
	ItemID			long			NOT NULL,
	SellerID		long			NOT NULL,
	Title			varchar(255)	NOT NULL,
	Description		varchar(255)			,
	StartingPrice	float			NOT NULL,
	EndTime			date			NOT NULL,
	StartTime		date			NOT NULL,
	BidIncrement	float			NOT NULL,
	CategoryID		float			NOT NULL,
	ImageURL		varchar(255)	NOT NULL,
	PRIMARY KEY (ItemID),
	FOREIGN KEY (SellerID) REFERENCES SELLER(MID),
	FOREIGN KEY (CategoryID) REFERENCES CATEGORY(CategoryID)
);

CREATE TABLE BID (
	BidID			long			NOT NULL,
	BuyerID			long			NOT NULL,
	ItemID			long			NOT NULL,
	Price			long			NOT NULL,
	Timestamp		date			NOT NULL,
	PRIMARY KEY (BidID),
	FOREIGN KEY (BuyerID) REFERENCES BUYER(MID),
	FOREIGN KEY (ItemID) REFERENCES ITEM(ItemID)
);

CREATE TABLE TRANSACTION (
	TransactionID	long			NOT NULL,
	BuyerID			long			NOT NULL,
	SellerID		long			NOT NULL,
	ItemID			long			NOT NULL,
	TransactionTime	date			NOT NULL,
	WinningBid		long			NOT NULL,
	BuyerRating		long					,
	SellerRating	long					,
	BuyerFeedback	varchar(255)			,
	SellerFeedback	varchar(255)			,
	PRIMARY KEY (TransactionID),
	FOREIGN KEY (BuyerID) REFERENCES BUYER(MID),
	FOREIGN KEY (SellerID) REFERENCES SELLER(MID),
	FOREIGN KEY (ItemID) REFERENCES ITEM(ItemID),
	FOREIGN KEY (WinningBid) REFERENCES BID(BidID)
);