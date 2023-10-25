export interface RentDetails{
    id: string;
    flat: string;
    rentee: string;
    amount_payable: number;
    paid_on: string;
    current_bill: number;
    water_bill: number;
    costs_cleared: boolean;
}