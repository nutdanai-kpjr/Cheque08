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

 ### Show number of customers

>  Get the number of customers of the bank

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

### getTotalChequeDetail(int customer_id)
### addCheque(Cheque c)
### getCheque(int cheque_id)
### createCustomer(Customer cus)
### setChequeStatus(int cheque_id)

### getTotalCustomers()

- **Description** : `Look at the database and count all of the customer in it.`
- **Package** : `model.QueryModel`

### getCustomer(int customer_id)

- **Description** : `Using customer_id to search and return the detail of that particular customer`
- **Package** : `model.QueryModel`

### createCustomer(Customer cus)

- **Description** : `Create new customer by using information from Customer object`
- **Package** : `model.QueryModel`
