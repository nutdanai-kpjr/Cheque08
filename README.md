# 08-cheque



## Frontend (Vue)

`User Side`
- `/cheque_usermenu`
  > Listing all the submited cheque of current user including the button to check status for each cheque 
  > Also have a button to sumbit a cheque
  
- `/cheque_status`
  > the page use to show current check status : pending , success, fail .
 

- `/cheque_submit` 
  > page for user to sumbit the cheque , by inputing cheque info and  cheque img


`Staff Side`
- `/cheque_staffmenu` 
  > List all the pending cheque that await for a staff to approve, including the button to approve status for each cheque 
- `/cheque_verify` 
  > page for Staff to verify the cheque , by comparing the cheque info that user input in  and the cheque info on the cheque img that     user give 
- `/cheque_approve` 
  > page for staff to aprrove the cheque by compare the signature on database and signature on the cheque img .


## Backend (Servlet)

 ### Show the list of the cheques that current user have sumbited

>  Get the Array of the chequed that current user have upload
- **URL** : `/api/customers`
- **Method** : `GET`
- **Auth required** : YES
- **Parameters** : None
- **Body** : None
- **Functions Involved** :  
  - getTotalCustomers()

#### Success Response

- **Status code** : `200`

  **Response body** :

  ```json
  {
      "customers" : <Integer>
  }
  ```

#### Error Response

- **Status code** : `401`

  **Response body** : None

---

 ### Show particular customer detail

> Get the detail of each customer

- **URL** : `/api/customer`
- **Method** : `GET`
- **Auth required** : YES
- **Parameters** : 
  - id=<String> `Required`
- **Body** : None
- **Functions Involved** :  
  - getCustomer()

#### Success Response

- **Status code** : `200`

  **Response body** :

  ```json
  {
      "id": <Integer>,
      "citizen_id": <String>,
      "name": <String>,
      "lastname": <String>
      "date_of_birth": <String>,
      "email": <String>,
      "address": <String>
  }
  ```

#### Error Response

- **Status code** : `401`

  **Response body** : None

- **Status Code**: `404`

  **Response body** : 

  ```json
  {
      "error": "Customer is not found"
  }
  ```

---

 ### Create new customer

> create new customer 

- **URL** : `/api/customer`

- **Method** : `POST`

- **Auth required** : YES

- **Parameters** : None

- **Body** : 

  ```json
  {
      "citizen_id": <String>,
      "username": <String>,
      "password": <String>,
      "name": <String>,
      "lastname": <String>,
      "date_of_birth": <String>,
      "email": <String>,
      "tel": <String>,
      "occupation": <String>,
      "address": <String>
  }
  ```

- **Functions Involved** :  
  - createCustomer()

#### Success Response

- **Status code** : `200`

  **Response body** : None

#### Error Response

- **Status code** : `400`

  **Response body** : None

- **Status Code**: `401`

  **Response body** : None

---



##  Functions (Model)

### getTotalCheque(int customer_id)

- **Description** : `Using customer_id to search and return the Arrays of total cheques that customer submit`
- **Package** : `model.QueryModel`

### addCheque(Cheque c)

- **Description** : `Create new cheque by using information from Cheque object`
- **Package** : `model.QueryModel`

### getChequeDetail(int cheque_id)

- **Description** : ``Using cheque_id to search and return the Cheque object macthing that id``
- **Package** : `model.QueryModel`

### setStatus(int cheque_id,String status)

- **Description** : `Set checque status of ihe input cheque_id  if the status change to success then call the transaction method to add money to user and remove money from payer (in approval process) ` 
- **Package** : `model.QueryModel`





