import Redux from "redux";
import Customer from "../../../models/Customer";
import CustomersActionType, { CustomersGetListActionSuccessModel, CustomersDeleteModel, CustomersAddModel } from "./customers.actions";

export interface CustomersState {
    model: Customer[];
}

export const initialCustomersState: CustomersState = {
    model: []
};

export type CustomersAction = CustomersGetListActionSuccessModel | CustomersDeleteModel | CustomersAddModel;

const customersReducer: Redux.Reducer<CustomersState, CustomersAction> = (state = initialCustomersState, action: CustomersAction) => {
    switch(action.type){
        case CustomersActionType.CUSTOMERS_GET_LIST_ACTION_SUCCESS: {
            return {
                ...state,
                model: [...action.payload]
            };
        };
        case CustomersActionType.CUSTOMERS_DELETE_ACTION_SUCCESS: {
            return {
                ...state,
                model: [...state.model.filter(customer => customer.id !== action.payload)]
            };
        }
        case CustomersActionType.CUSTOMERS_ADD_ACTION_SUCCESS: {
            return {
                ...state,
                model: [...state.model, ...[action.payload]]
            };
        }
        default: return state;
    };
};
export default customersReducer;

