# TempApi.CourseApi

All URIs are relative to *http://83.212.100.226:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createcourse**](CourseApi.md#createcourse) | **POST** /course | Creates the data
[**deletecourse**](CourseApi.md#deletecourse) | **DELETE** /course/{courseId} | Delete the element
[**getAllcourse**](CourseApi.md#getAllcourse) | **GET** /course/getAll | Get all the data
[**getcourse**](CourseApi.md#getcourse) | **GET** /course/{courseId} | Get the element
[**updatecourse**](CourseApi.md#updatecourse) | **PUT** /course/{courseId} | Updates the element



## createcourse

> Course createcourse(course)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CourseApi();
let course = new TempApi.Course(); // Course | data to be created
apiInstance.createcourse(course, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course** | [**Course**](Course.md)| data to be created | 

### Return type

[**Course**](Course.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletecourse

> deletecourse(courseId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CourseApi();
let courseId = "courseId_example"; // String | the Id parameter
apiInstance.deletecourse(courseId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllcourse

> [Course] getAllcourse()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CourseApi();
apiInstance.getAllcourse((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Course]**](Course.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getcourse

> Course getcourse(courseId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CourseApi();
let courseId = "courseId_example"; // String | the Id parameter
apiInstance.getcourse(courseId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**| the Id parameter | 

### Return type

[**Course**](Course.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatecourse

> Course updatecourse(courseId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CourseApi();
let courseId = "courseId_example"; // String | the Id parameter
let opts = {
  'course': new TempApi.Course() // Course | data to be updated
};
apiInstance.updatecourse(courseId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**| the Id parameter | 
 **course** | [**Course**](Course.md)| data to be updated | [optional] 

### Return type

[**Course**](Course.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

