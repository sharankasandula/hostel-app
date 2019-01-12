export interface ICustomer {
    id: number;
    name: string;
    city: string;
    orderTotal?: number;
    customerSince: any;
}

export interface ICustDetails {
    customerId:number
    fname:string;
    lname:string;
    city: string;
    occupation: string;
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}
