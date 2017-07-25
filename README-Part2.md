# Part two: Deploy the Virtual Shopping List web application

This section take you through the steps to install the Breadbox Groceries sample mobile web application and associated web services in IBM Bluemix.  

## Prerequisites

Before proceeding, please ensure you have met all of the following prerequisites:

* Complete Part 1 of this journey.
* Sign up for a [Bluemix account].
* Install the [Bluemix CLI] tools. 

## Step 1:  Create three place holder apps in Bluemix Cloud Foundry Database

1. Login to your [Bluemix account].

### Create a new App for the Virtual Shopping List Recommendation Web Service (vslrecws)

1. From the main Apps dashboard, click **Create App**.   
   
   ![alt text](images/vsl001.png "Create app")
   
2. In the left navigation pane, click **Cloud Foundry Apps**.  
   
3. Select **SDK for Node.js**.
   
   ![alt text](images/vsl003.png "Create app")
   
4. For App name and Host name, fill in **vslrecws-something-unique**
   
   ![alt text](images/vsl004.png "Create app")
   
   *IMPORTANT:  The Host name must be unique across all of the bluemix.net domain.  Bluemix should enforce this uniqueness, by checking for any prior users, before creating the placeholder Cloud Foundry applications. We recommended that you use the following format, vslrecws-something-unique where something-unique is a sequence number, or project nickname, or developer nickname, etc., such as vslrecws-dev02 or vslrecws-test03.*
   
5. When ready, click **Create**.
   
   The app is now Running!    
   
   ![alt text](images/vsl005.png "Create app")
   
6. Click **Visit App URL** to test it.
   
   ![alt text](images/vsl006.png "Create app")
   
   You have just instantiated a simple template Hello world web application.  
   
7. Download the node.js app code. 
   * Click **download the sample code**.  
   * Save the code to your computer.
   * Unzip the file to a directory.
   
10. Go to a terminal and navigate to the sample code directory.
   
11. Authenticate to Bluemix.
    * **bluemix login –a https://api.ng.bluemix.net**.
    * Enter your Bluemix account.

    ![alt text](images/vsl008.png "Create app")
   
12. Push the unchanged code for the sample node.js app we created earlier to Bluemix.
    * **bx app push vslrecws-something-unique**. 
      
    When processing completes, your app will restart.  You should receive messages similar to the following: 
      
    ![alt text](images/vsl009.png "Create app")
      
13. Return to the Bluemix portal and navigate the the Cloud Foundry Apps. You should see the vslrecws app you just created.
      
14. Click on the route to load the URL into your browser to make sure that the node.js sample app is still healthy.  
   
    ![alt text](images/vsl011.png "Create app")

### Create a new App for the Virtual Shopping List Listing Web Service (vsllistws-something-unique) 

1. Repeat the steps in the previous section to create the Virtual Shopping List Listing Web Service App.

### Create a new App for the Breadbox portal (breadboxportal-something-unique).

1. Repeat the steps in the previous section to create the Breadbox portal App.

2. When this step is complete, you should see these three apps in your Cloud Foundry Apps list.

   ![alt text](images/vsl012.png "Create app")

## Step 2:  Configure, Connect the Virtual Shopping List Cloudant Database	

### Create the Cloudant database service. 
1. Click **Catalog**, click **Data & Analytics** under the Services section, click **Cloudant NoSQL DB**.
   
   ![alt text](images/vsl013.png "Create app")
   
2. Change the Service name to: **cloudantconfig**.
   
   ![alt text](images/vsl015.png "Create app")
   
   > Important, Service name must be “cloudantconfig”.
   
3. Scroll down to the bottom of the page, accept the default **Lite** PLAN,  Click **Create**.
   
   ![alt text](images/vsl014.png "Create app")
   
   The cloudantconfig instance of the Cloudant NoSQL-DB service is now in place.
   
   ![alt text](images/vsl016.png "Create app")

### Create Virtual Shopping List databases in the Cloudant service
   
1. Select **cloudantconfig** from the Services list. 

2. Click **Launch** from the Manage tab.
   
   ![alt text](images/vsl017.png "Create app")
   
   The Cloudant dashboard opens in a separate browser tab.

3. Create the **rec** database. This database holds purchase recommendations, based on customer purchase history.
 
   * From the **Database** tab, click **Create Database**.
   
   ![alt text](images/vsl019.png "Create app")
   
   * Enter a database name of **rec** (short for recommendation)
   
   * Click **Create**.
   
   ![alt text](images/vsl022.png "Create app")
   
4. Create the **users** database. This database stores basic user information and breadpoints.

   * Repeat the same procedures as the previous step.

5. Create the **vsl** database. This database holds shopping list items the user manually adds to their list.   

   * Repeat the same procedures as the previous step.
   
   You should now have 3 entries in **Your Databases** tab.
   
   ![alt text](images/vsl023.png "Create app")

### Populate a user in the users database 

1. Click the **users** database.

2. Click **All Documents (+)**, select **New Doc**.

   ![alt text](images/vsl024.png "Create app")

3. Copy/paste the sample text below over the existing text:
   ``` 
   {
     "_id": "074",
     "customerid": 1000114,
     "ibmid": "jessejes@example.com",
     "breadpoints": 10,
     "realname": "Jesse JES"
   }
   ```
   
   ![alt text](images/vsl027.png "Create app")

   * \_id should be between “001” and “100”.
   * customerid should be between 1000100 and 1000140 (inclusive: 1000100 and 1000140 are valid). 
   * ibmid should be a valid email address.  
   * breadpoints should be a valid number.

4. When finished, click **Create Document**.

   The new user is now in place.
   
   ![alt text](images/vsl028.png "Create app")
   
### Create Cloudant Credentials to use in the Breadbox VSL app

1. Back to the Bluemix portal, Click **Service credentials** in the left navigation pane, and click **New credential**.

   ![alt text](images/vsl029.png "Create app")
   
2. Provide a name for the credentials, click **Add**.

   ![alt text](images/vsl030.png "Create app")
   
   The credential is now in place.
   
   ![alt text](images/vsl031.png "Create app")

3. You can use the **View credentials** Action to view the assigned credential.  These will be used later.

   ![alt text](images/vsl032.png "Create app")

### Connect Cloudant Credentials to the Breadbox VSL Apps	 

1. Connect Cloudant Credentials to the **Breadbox portal** app.

   * Click **Connections** in the left navigation pane, and click **Create connection**.

   ![alt text](images/vsl033.png "Create app")
   
   * Select the **breadboxportal app**, and click **Connect**.

   ![alt text](images/vsl034.png "Create app")

   * Click on the Restage button.

   ![alt text](images/vsl035.png "Create app")

   The Cloudant NoSQL DB service is now connected to the breadboxportal app.
   
   ![alt text](images/vsl037.png "Create app")

2. Connect Cloudant Credentials to the **vsllistws** app. 

   * Repeat the procedures from the previous step.	

3. Connect Cloudant Credentials to the **vslrecws** app.
   
   * Repeat the procedures from the previous step. 
   
   ![alt text](images/vsl039.png "Create app")
   
4. To see the results of this new Connection (for example, Breadbox portal app):

   * Click **Breadboxportal** conection.  
   
   * Click **Runtime** tab in the left navigation pane, and click ** Environmental variables** in the center selector.
   
   ![alt text](images/vsl040.png "Create app")
   
   We see the cloudantNoSQLDB environment variable that will be passed to the breadboxportal Cloud Foundary application, so that credentials don’t need to be in the code.  It’s a little odd that the VCAP_SERVICE environment variable above isn’t cloudantconfig, to match the service name, but it works somehow.  ;-) 
   
   ![alt text](images/vsl041.png "Create app")

## Step 3:  Create the VSL app shared secret user defined environmental variable 

The environmental variable **JWT_SHARED_SECRET** needs to be identical across breadboxportal, vsllistws, and vslrecws.  This shared secret is used to encrypt and decrypt the JSON web token (JWT) passed between breadboxportal, vslistws and vslrecws.

1. Create the shared secret user defined environmental variable for the breadboxportal app.

   * Navigate to **Bluemix** / **Cloud Foundry Apps** / **Breadbox portal App**.
   
   * Click **Runtime** in the left navigation pane.
   
   * Click **Environmental variables** in the center selector.
   
   ![alt text](images/vsl040.png "Create app")
   
   * Scroll down to the **User defined** section,  Click ** Add**. 
   
   ![alt text](images/vsl042.png "Create app")
   
   * Create a new user-defined environmental variable.  Enter:
    * Name: **JWT_SHARED_SECRET**  (must be uppercase). 
    * Value: **"{secret": "20-character-random-string"}** where 20-character-random-string can contain upper, lower case characters and numbers.
    
   * click **Save**.
 
   ![alt text](images/vsl044.png "Create app")
   
   The app will be restarted automatically. 
  
2. Create the shared secret user defined environmental variable for the vsllistws app.

   * Repeat procedures from the previous step. 
   
3. Create the shared secret user defined environmental variable for the vslrecws app.  
   
   * Repeat procedures from the previous step. 
  
## Step 4:  Get real

### Switch to the actual working code	 
	 
In this section, you are going to upload the actual working code, to overlay the placeholders created earlier. Before proceeding, you must modify a few files to match your specific environment.  
 
1. Download the **vsl.zip** file (contains sample working code) from the [Sample code github repository].  Unzip the file into a directory.

2. Modify files in the breadboxportal directory.

   1. Edit the **manifest.yml** file.  Replace the **host:** parameter with the URL (route) for your breadbox portal app.  
   
     ![alt text](images/vsl045.png "Create app")
   
   2. Edit the **server.js** file. Replace the **listservice** parameter with URL (route) for your vsl listing web service app.  
   
     ![alt text](images/vsl046.png "Create app")
   
3. Modify files in the vsllistws directory.

   1. Edit the **manifest.yml** file. Replace the **host:** parameter with the URL (route) for your breadbox portal app.  
   
     ![alt text](images/vsl047.png "Create app")
   
   2. Edit the **server.js** file. Replace the **var recsServer** parameter with the URL (route) for your vsl listing web service app.  
   
     ![alt text](images/vsl051.png "Create app")

4. Modify files in the vslrecws directory.

   1. Edit the **manifest.yml** file. * Replace the **host:** parameter with the URL (route) for your vsl recommendations web service app.  
   
     ![alt text](images/vsl052.png "Create app")
      
   2. Edit the **server.js** file.  
   
      * Find the section that calls **analyze-history**.
      
      * Replace the value for **'x-ibm-client-id'** with the one you created in Part 1.
      
      * Relace the value for **'x-ibm-client-secret'** with the one you per created in Part 1.
     
     ![alt text](images/vsl055.png "Create app")
     
5. Authenticate to Bluemix.

   * **bluemix login –a https://api.ng.bluemix.net**.
   
6. Upload the actual working code and overlaid the placholder for your breadbox portal app.
   
   1. Navigate to the breadboxportal directory.
   
   2. Push the code to Bluemix: **bx app push breadboxportal-something-unique**
     
      The following shows an example of a successful run.
      
      ![alt text](images/vsl053.png "Create app")
      
7. Upload the actual working code and overlaid the placholder for your vsl listing web service app.
   
   1. Navigate to the vsllistws directory.
   
   2. Push the code to Bluemix: **bx app push vsllistws-something-unique**    
     
8. Upload the actual working code and overlaid the placholder for your vsl recommendation web service app.
   
   1. Navigate to the vslrecws directory.
   
   2. Push the code to Bluemix. **bx app push vslrecws-something-unique**       
   
> IMPORTANT:  When issuing the bx cf push commands, its very important to issue the commands for a given application from within the directory for that application.  If this is not done, application hosts get cross wired, and your applications will start to be unreachable intermittently, as Bluemix seems to associate multiple routes with the same application, when a cross wired push is done.  If cross wiring occurs, the Bluemix portal can be used to edit the application routes, and delete unintended routes.  Use the Routes button in the upper left corner of any detailed views (Overview, Runtime, Logs, etc.) for the application.
 
9. As a quick check for proof that the actual working Breadbox Recommendation Service is running.  
   * Click on the URL for the vslrecws app.
   
   ![alt text](images/vsl054.png "Create app")

### Test Breadbox Hybrid Cloud application End to End 

#### Now we are ready to see the final result, the full hybrid cloud application from Bluemix all the way back to z/OS Connect.
 
1. Navigate to the breadboxportal app in Bluemix.  

2. Click the **Route** host you created before for the breadboxportal app.

   ![alt text](images/vsl059.png "Create app")

3. Click the Login button at the bottom of the screen above. 

   ![alt text](images/vsl060.png "Create app")

   This sample portal, mobile application lacks user login.  Developers may choose to add user login themselves.  The sample redirects directly to the mobile application screen.  

   User authentication is a very common way to protect your app from bots on the Internet, besides authenticating known users. Facebook, Google authentication could also be used, or your company’s SSO.  SSO saves individual app builders from creating their own user management – a big relief!!

4. Select the Virtual Shopping List app on the mobile phone.

   ![alt text](images/vsl066.png "Create app")

   The top two rows are recommendations coming from the Recommendation web service based on the customer purchase history coming from z/OS Connect!
    
   ![alt text](images/vsl067.png "Create app")
  
5. You can use the plus (+) sign to add recommendations to your shopping list.  The shopping list is persisted in the cloud, in the Cloudant database.

   ![alt text](images/vsl068.png "Create app")

6. To get further validation that our integration of the engaging mobile app in the cloud, with the customer purchase history on IBM Z, you can double check the Recommendation web service log in Bluemix to see the recommendations coming from the analyze-history call. 

   ![alt text](images/vsl064.png "Create app")

7. We can also see the raw response from the API on the Developer Portal.

   ![alt text](images/vsl065.png "Create app")

8. The cloudant "users" “rec” and “vsl” databases are self-priming, based on use of the portal, mobile app.  Using the Cloudant management UI, we can make sure the databases are working properly. Navigate back to the Cloud management UI, and navigate to the Databases view.  

   1. Select the **users** table. Click the pencil in the upper right to view/edit the document.
 
      ![alt text](images/vsl069.png "Create app")
  
      Jesse now has 12 breadpoints!

   2. Select the **rec** table. Click the pencil in the upper right to view/edit the document. Similarly, the recommendations for Jesse JES (_id=1000114) are in this database.

     ![alt text](images/vsl070.png "Create app")
    
   3. Select the **vsl** table. Click the pencil in the upper right to view/edit the document. The items that Jesse JES added manually to his virtual shopping list is now in this database.

      ![alt text](images/vsl071.png "Create app")
      
---

:thumbsup: Congratulations!  You have successfully completed deployment of the Virtual Shopping List web application. 

---
