import { IProvider } from "./shared";

export interface CardAPIResult {
    results: ICard[],
    status: string
}

export interface ICard {
    account_id: string,
    card_network: string,
    card_type: string,
    currency: string,
    display_name: string,
    partial_card_number: string,
    name_on_card?: string,
    valid_from?: string,
    valid_to?: string,
    update_timestamp: Date | string,
    provider: IProvider
}

export interface ICardBalance {
    currency: string,
    available?: number,
    current: number,
    credit_limit?: number,
    last_statement_date?: Date | string,
    last_statement_balance?: number,
    payment_due?: number,
    payment_due_date?: Date | string,
    update_timestamp: string
}