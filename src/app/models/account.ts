import { IProvider } from "./shared";

export interface AccountAPIResult {
    results: IAccount[],
    status: string
}

export interface IAccount {
    update_timestamp: Date | string,
    account_id: string,
    account_type: string,
    display_name: string,
    currency: string,
    account_number: AccountNumberMeta,
    provider: IProvider
}

export interface AccountNumberMeta {
    swift_bic: string,
    number?: string,
    sort_code?: string,
    iban?: string,
    routing_number?: string
}

export interface AccountBalance {
    currency: string,
    available?: number,
    current: number,
    overdraft?: number,
    update_timestamp: Date | string
}

export interface DirectDebit {
    direct_debit_id: string,
    timestamp: Date | string,
    name: string,
    status?: string,
    previous_payment_amount?: number,
    currency?: string,
    meta?: DirectDebitMeta
}

export interface DirectDebitMeta {
    provider_account_id: string,
    provider_mandate_identification: string
}

export interface StandingOrder {
    frequency: string,
    status?: string,
    timestamp: Date | string,
    currency: string,
    meta?: StandingOrderMeta
    next_payment_date?: Date | string,
    next_payment_amount?: number,
    first_payment_date?: Date | string,
    first_payment_amount?: number,
    final_payment_date?: Date | string,
    final_payment_amount?: number,
    reference?: string,
    payee?: string
}

export interface StandingOrderMeta {
    provider_account_id: string,
    provider_standing_order_id: string
}
