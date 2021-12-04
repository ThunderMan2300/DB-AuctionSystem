#TEKRAM UTD Auction System

An application created for UTD students to be able to auction and sell items online.
Our Application uses a secure and fast database that securely stores all the information
regarding the student and the items on sale.

##Implementation
In order to run our application the administrator requires the following specifications:
- Apache Maven 3.8.1
- Java SDK 11
- Npm 8.1.0

First create a clone of this repository or simply download the zip file and decompress it.
From there if using an IDE, open the project with the IDE and identify the project as
a maven project which will self-identify all the dependencies and run the program.

If run from terminal, navigate to OnlineAuction/src and run: ```mvn package```
this will compile the code, then run ```mvn exec:java-Dexec.mainClass=com.System.Auction.OnlineAuctionApplication```
which will start the application.

Lastly, the front end needs to be run, in order to do that open a new terminal window.
Navigate to the react folder and install all the react dependencies by running
```npm install```. After such start react wit ```npm start```.

Once the back end and front end start, we can navigate to our application at
http://localhost:3000, and to our DBManager at http://localhost:8080/h2-console