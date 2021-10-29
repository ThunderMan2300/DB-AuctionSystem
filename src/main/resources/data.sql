CREATE TABLE MEMBER (
	MID 			long 			NOT NULL,
	Name			varchar(255)	NOT NULL,
	HomeAddress 	varchar(255)			,
	Email			varchar(255)	NOT NULL UNIQUE,
	Phone			varchar(10)		NOT NULL UNIQUE,
	Password		varchar(255)	NOT NULL,
	PRIMARY KEY (MID)
);

INSERT INTO MEMBER
VALUES (1, 'JAIME', 'FARMERS BRANCH', 'JAIME@GMAIL.COM', '1234567890', 'PASSWORD');