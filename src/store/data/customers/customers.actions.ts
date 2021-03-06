import Customer from "../../../models/Customer";
import UpdateConsumerBody from "../../../models/UpdateCustomerBody";

enum CustomersActionType {
    CUSTOMERS_GET_LIST_ACTION_INIT  = "CUSTOMERS_GET_LIST_ACTION_INIT",
    CUSTOMERS_GET_LIST_ACTION_SUCCESS  = "CUSTOMERS_GET_LIST_ACTION_SUCCESS",
    CUSTOMERS_DELETE_ACTION_INIT  = "CUSTOMERS_DELETE_ACTION_INIT",
    CUSTOMERS_DELETE_ACTION_SUCCESS  = "CUSTOMERS_DELETE_ACTION_SUCCESS",
    CUSTOMERS_ADD_ACTION_INIT = "CUSTOMERS_ADD_ACTION_INIT",
    CUSTOMERS_ADD_ACTION_SUCCESS = "CUSTOMERS_ADD_ACTION_SUCCESS",
    CUSTOMERS_UPDATE_ACTION_INIT = "CUSTOMERS_UPDATE_ACTION_INIT",
    CUSTOMERS_UPDATE_ACTION_SUCCESS = "CUSTOMERS_UPDATE_ACTION_SUCCESS"
};
    
export interface CustomersGetListActionInitModel {
    type: CustomersActionType.CUSTOMERS_GET_LIST_ACTION_INIT
    payload: string
};

export interface CustomersGetListActionSuccessModel {
    type: CustomersActionType.CUSTOMERS_GET_LIST_ACTION_SUCCESS
    payload: Customer[]
};

export interface CustomersDeleteModel {
    type: CustomersActionType.CUSTOMERS_DELETE_ACTION_INIT | CustomersActionType.CUSTOMERS_DELETE_ACTION_SUCCESS
    payload: string
};

export interface CustomersAddModel {
    type: CustomersActionType.CUSTOMERS_ADD_ACTION_INIT | CustomersActionType.CUSTOMERS_ADD_ACTION_SUCCESS
    payload: Customer
};

export interface CustomersUpdateModel {
    type: CustomersActionType.CUSTOMERS_UPDATE_ACTION_INIT | CustomersActionType.CUSTOMERS_UPDATE_ACTION_SUCCESS
    payload: {id: string, body: UpdateConsumerBody}
};

export const customersGetListActionInit = (email: string): CustomersGetListActionInitModel => {
    return {
        type: CustomersActionType.CUSTOMERS_GET_LIST_ACTION_INIT,
        payload: email
    };
};

export const customersGetListActionSuccess = (list: Customer[]): CustomersGetListActionSuccessModel => {
    return {
        type: CustomersActionType.CUSTOMERS_GET_LIST_ACTION_SUCCESS,
        payload: list
    };
};

export const customersDeleteActionInit = (id: string): CustomersDeleteModel => {
    return {
        type: CustomersActionType.CUSTOMERS_DELETE_ACTION_INIT,
        payload: id
    };
};

export const customersDeleteActionSuccess = (id: string): CustomersDeleteModel => {
    return {
        type: CustomersActionType.CUSTOMERS_DELETE_ACTION_SUCCESS,
        payload: id
    };
};

export const customersAddActionInit = (customer: Customer): CustomersAddModel => {
    return {
        type: CustomersActionType.CUSTOMERS_ADD_ACTION_INIT,
        payload: customer
    };
};

export const customersAddActionSuccess = (customer: Customer): CustomersAddModel => {
    return {
        type: CustomersActionType.CUSTOMERS_ADD_ACTION_SUCCESS,
        payload: customer
    };
};

export const customersUpdateActionInit = (id: string, body: UpdateConsumerBody): CustomersUpdateModel => {
    return {
        type: CustomersActionType.CUSTOMERS_UPDATE_ACTION_INIT,
        payload: { id, body }
    };
};

export const customersUpdateActionSuccess = (id: string, body: UpdateConsumerBody): CustomersUpdateModel => {
    return {
        type: CustomersActionType.CUSTOMERS_UPDATE_ACTION_SUCCESS,
        payload: { id, body }
    };
};


export default CustomersActionType;