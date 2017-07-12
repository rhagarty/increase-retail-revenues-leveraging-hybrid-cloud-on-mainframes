# Increasing retail store revenues using IBM Z hybrid cloud

To showcase the business challenges that a typical retail company might be experiencing, we share a case study about a retail company, which we refer to as [Breadbox].  You will implement two of the solutions they implemented to address their business needs. 

## Scenarios

[Scenario one: Virtual shopping list] - Use the GET CUSTOMER DATA RESTful API to retrive a customer's purchase history.  This information is useful for analyzing purchase habbit to determine how and what additional goods should be marketed to this customer.

[Scenario two: Mobile purchase order approvals] - implement the mobile purchase order approvals application. When purchase order is received from the mobile application, it will be sent directly to the SAP system for approval. This will speed up the purchase process and reduce the costs of the supply chain process.

## Architecture

![alt text](images/breadbox-architecture.png "Architecture")

## Included components
  
* [IBM z Systems Mainframe] ([IBM z Systems Mainframe Redbook] & [IBM z Systems Mainframe developerWorks])
* [IBM z/OS] ([IBM z/OS Knowledge Center])
* [IBM CICS Transaction Server] ([IBM CICS TS Knowledge Center] & [IBM CICS TS developerWorks])
* [IBM z/OS Connect Enterprise Edition] ([IBM z/OS Connect EE Knowledge Center] & [IBM z/OS Connect EE developerWorks])
* [IBM Db2] ([IBM Db2 Knowledge Center])
* [IBM Bluemix]
* [IBM API Connect] ([IBM API Connect Knowledge Center] & [IBM API Connect developerWorks])
* [IBM Secure Gateway Service]

# Scenario one: Virtual shopping list

1.	Sign up for an [IBM ID] if you don't have one already. This is required for the next step.

2.	Go to the [IBM Developer Portal] and login with your IBM ID.

3.  Create an account by clicking 


3.	Create an organization (by giving a name) in order to manage your applications and APIs subscriptions.

4.	
5.	A banking product (set of banking APIs) is published on the portal. Just follow this step to subscribe to this product: 
    1. Register an application (by clicking on *Apps* from the menu). It will generate a **Client ID** and a **Client Secret** for API Authorization calls.
    2. Subscribe for the APIs (by clicking on *API Product* and selecting Banking API) and link it to the previous registered application

7.	**CONGRATULATIONS**. You just succeeded to subscribe to an API from your developer portal! Ready to **discover** & **test** the banking APIs? 

8.	From the page where you just subscribed the APIs on your application, click on the details of this API on the left panel menu. A new page appears containing all information :
    * The list of operations and definitions in the left panel. 
    * The detail of operations in the middle panel. 
    * Samples of code in the right panel. In this Panel, you can test each API depending on your preferred programming language. Do not forget to fill the couple X-IBM-Client-Id and X-IBM-Client-Secret with the generated Client ID /secret of your registered application.


The API **GET /customers/{customerID}** will give you all necessary information (JSON structure) to use other APIs. Call this API in first. All available customers ID are in the */identifier/customerIDs.txt* file in this Github repository.


9.	**CONGRATULATIONS**. You just succeeded to test APIs ! Ready to **use** APIs ?

10.	According to your technology criteria, you are free to develop an Application using these Banking APIs.
> Use IBM Bluemix to create, test and deploy a quick application. Choose among JAVA Liberty Profile, Node Js servers, Ruby, Python, etc... This platform also provides DevOps tools for a continuous delivery (Git, automatic deployment). [Sign up or log in to IBM Bluemix].


# Example of banking application

For customer demos purposes, the MPLbank team developed a quick internal application using [IBM Watson Explorer] in order to display data from these banking APIs. Like described before, we subscribed for an application in the API developer Portal, then subscibed for the banking APIs and finally, just used the API following the API documentation. This application is not available for public.

![alt text](images/banking_customer.png "Banking customer in MPLbank")


The most important thing is to understand how the API works and which in/out values are expected. All is described in the API documentation in the developer portal.

[IBM Digital Transformation Model]: https://developer.ibm.com/mainframe/ibm-digital-transformation/

[IBM Bluemix]: https://www.ibm.com/us-en/marketplace/cloud-platform
[IBM z Systems Mainframe]: https://www-03.ibm.com/systems/z/
[IBM Client Center Montpellier]: https://www.ibm.com/ibm/clientcenter/montpellier/

[IBM z Systems Mainframe Redbook]: https://www.redbooks.ibm.com/redbooks.nsf/pages/z13?Open
[IBM z Systems Mainframe developerWorks]: https://developer.ibm.com/mainframe/

[IBM z/OS]: https://www-03.ibm.com/systems/z/os/zos/
[IBM z/OS Knowledge Center]: https://www.ibm.com/support/knowledgecenter/en/SSLTBW

[IBM CICS Transaction Server]: https://www-01.ibm.com/software/data/enterprise-application-servers/cics/
[IBM CICS TS Knowledge Center]: https://www.ibm.com/support/knowledgecenter/en/SSGMGV
[IBM CICS TS developerWorks]: https://developer.ibm.com/cics/

[IBM z/OS Connect Enterprise Edition]: https://www.ibm.com/ms-en/marketplace/connect-enterprise-edition
[IBM z/OS Connect EE Knowledge Center]: https://www.ibm.com/support/knowledgecenter/en/SS4SVW
[IBM z/OS Connect EE developerWorks]: https://developer.ibm.com/mainframe/products/zosconnect/

[IBM Db2]: https://www.ibm.com/analytics/us/en/technology/db2/?lnk=STW_US_SHP_A4_TL&lnk2=learn_DB2
[IBM Db2 Knowledge Center]: https://www.ibm.com/support/knowledgecenter/en/SSEPEK/db2z_prodhome.html

[IBM Master Data Management]: https://www.ibm.com/analytics/us/en/technology/master-data-management/
[IBM Master Data Management Knowledge Center]: https://www.ibm.com/support/knowledgecenter/en/SSWSR9

[IBM Machine Learning for z/OS]: https://www.ibm.com/ms-en/marketplace/machine-learning-for-zos
[IBM Machine Learning for z/OS Knowledge Center]: https://www.ibm.com/support/knowledgecenter/en/SS9PF4

[SOPRA Account Management]: https://www.soprabanking.com/our-offer/solutions/account-management-9

[IBM API Connect]: http://www-03.ibm.com/software/products/en/api-connect
[IBM API Connect Knowledge Center]: https://www.ibm.com/support/knowledgecenter/en/SSMNED 
[IBM API Connect developerWorks]: https://developer.ibm.com/apiconnect/

[IBM Secure Gateway Service]: https://console.bluemix.net/docs/services/SecureGateway/secure_gateway.html

[IBM DataPower Gateway]: http://www-03.ibm.com/software/products/en/datapower-gateway
[IBM DataPower Gateway Knowledge Center]: https://www.ibm.com/support/knowledgecenter/en/SS9H2Y 

[IBM SPSS]: https://www.ibm.com/analytics/us/en/technology/spss/

[IBM ID]: https://www.ibm.com/account/us-en/signup/register.html
[IBM Developer Portal]: https://developer-contest-spbodieusibmcom-prod.developer.us.apiconnect.ibmcloud.com/

[Sign up or log in to IBM Bluemix]: https://console.bluemix.net/registration/?

[Financial Risk Management System]:https://github.com/IBM/Financial-risk-management-using-machine-learning-on-zSystems

[IBM Watson Explorer]: https://www.ibm.com/us-en/marketplace/content-analytics
