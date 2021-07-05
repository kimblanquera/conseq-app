import { AccountNumberMeta } from "./account";

export interface ITransactionResult {
    success: boolean,
    data: {
        transactions: ITransactionData[];
    }
}

export interface ITransactionData {
    data: ITransaction;
}

export interface IAccount {
    success: boolean,
    data: {
        accounts: IAccountData[]
    }
}

export interface IAccountData {
    account_id: string,
    account_type?: string,
    data: {
        currency: string,
        provider?: IProvider,
        card_type?: string,
        card_network?: string,
        display_name?: string,
        name_on_card?: string,
        partial_card_number?: string,
        account_number?: AccountNumberMeta,
        update_timestamp: string,
        account_type?:string
    }
    
}

export interface IProvider {
    display_name: string,
    provider_id: string,
    logo_uri: string
}

export interface TransactionAPIResult {
    results: ITransaction[],
    status: string
}

export interface ITransaction {
    timestamp: Date | string,
    description: string,
    transaction_type: string,
    transaction_category: string,
    transaction_classification?: string[] | TransactionClassification[],
    sub_classification?: string[],
    amount: number,
    currency: string,
    transaction_id: string,
    running_balance?: RunningBalance,
    merchant_name?: string,
    meta?: TransactionMeta
}

type TransactionKeys = keyof ITransaction;

export function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

export interface TransactionClassification {
    classification_category: string,
    sub_classification_categories: string[]
}

export function HasSubClassification(object: Object) {
    return (object.hasOwnProperty("sub_classification_categories"));
}

export interface RunningBalance {
    currency?: string,
    amount?: number
}

export interface TransactionMeta {
    provider_transaction_category?: string
}