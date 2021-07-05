import { AccountAPIResult } from "../models/account";

export const MockAccountList: AccountAPIResult = {
    "results": [
        {
            "update_timestamp": "2021-07-05T03:04:02.6349989Z",
            "account_id": "56c7b029e0f8ec5a2334fb0ffc2fface",
            "account_type": "TRANSACTION",
            "display_name": "TRANSACTION ACCOUNT 1",
            "currency": "GBP",
            "account_number": {
                "swift_bic": "CPBKGB00",
                "number": "10000000",
                "sort_code": "01-21-31"
            },
            "provider": {
                "display_name": "MOCK",
                "provider_id": "mock",
                "logo_uri": "https://truelayer-client-logos.s3-eu-west-1.amazonaws.com/banks/banks-icons/mock-icon.svg"
            }
        },
        {
            "update_timestamp": "2021-07-05T03:04:02.635023Z",
            "account_id": "3c6edb9484ecd581dc1cedde8bedb1f1",
            "account_type": "SAVINGS",
            "display_name": "SAVINGS ACCOUNT 1",
            "currency": "GBP",
            "account_number": {
                "swift_bic": "CPBKGB00",
                "number": "20000000",
                "sort_code": "01-21-31"
            },
            "provider": {
                "display_name": "MOCK",
                "provider_id": "mock",
                "logo_uri": "https://truelayer-client-logos.s3-eu-west-1.amazonaws.com/banks/banks-icons/mock-icon.svg"
            }
        },
        {
            "update_timestamp": "2021-07-05T03:04:02.6350478Z",
            "account_id": "89c3139784a055b9b47998f9dce9122e",
            "account_type": "TRANSACTION",
            "display_name": "TRANSACTION ACCOUNT 2",
            "currency": "GBP",
            "account_number": {
                "swift_bic": "CPBKGB00",
                "number": "30000000",
                "sort_code": "01-21-31"
            },
            "provider": {
                "display_name": "MOCK",
                "provider_id": "mock",
                "logo_uri": "https://truelayer-client-logos.s3-eu-west-1.amazonaws.com/banks/banks-icons/mock-icon.svg"
            }
        },
        {
            "update_timestamp": "2021-07-05T03:04:02.6350606Z",
            "account_id": "328df3a40b828340fa4c3100e17de121",
            "account_type": "SAVINGS",
            "display_name": "SAVINGS ACCOUNT 2",
            "currency": "GBP",
            "account_number": {
                "swift_bic": "CPBKGB00",
                "number": "40000000",
                "sort_code": "01-21-31"
            },
            "provider": {
                "display_name": "MOCK",
                "provider_id": "mock",
                "logo_uri": "https://truelayer-client-logos.s3-eu-west-1.amazonaws.com/banks/banks-icons/mock-icon.svg"
            }
        },
        {
            "update_timestamp": "2021-07-05T03:04:02.6350701Z",
            "account_id": "8de2de9eab01b935b21abcbed11adf26",
            "account_type": "TRANSACTION",
            "display_name": "TRANSACTION ACCOUNT 3",
            "currency": "GBP",
            "account_number": {
                "swift_bic": "CPBKGB00",
                "number": "50000000",
                "sort_code": "01-21-31"
            },
            "provider": {
                "display_name": "MOCK",
                "provider_id": "mock",
                "logo_uri": "https://truelayer-client-logos.s3-eu-west-1.amazonaws.com/banks/banks-icons/mock-icon.svg"
            }
        }
    ],
    "status": "Succeeded"
}

export const MockAccount = {
    "results": [
        {
            "update_timestamp": "2021-07-05T03:04:04.918271Z",
            "account_id": "56c7b029e0f8ec5a2334fb0ffc2fface",
            "account_type": "TRANSACTION",
            "display_name": "TRANSACTION ACCOUNT 1",
            "currency": "GBP",
            "account_number": {
                "swift_bic": "CPBKGB00",
                "number": "10000000",
                "sort_code": "01-21-31"
            },
            "provider": {
                "display_name": "MOCK",
                "provider_id": "mock",
                "logo_uri": "https://truelayer-client-logos.s3-eu-west-1.amazonaws.com/banks/banks-icons/mock-icon.svg"
            }
        }
    ],
    "status": "Succeeded"
}

export const MockAccountBalance = {
    "results": [
        {
            "currency": "GBP",
            "available": 106.0,
            "current": 6.0,
            "overdraft": 100.0,
            "update_timestamp": "2021-07-05T03:04:12.9340631Z"
        }
    ],
    "status": "Succeeded"
}

export const MockAccountTransactions = {
    "results": [
        {
            "timestamp": "2021-07-05T00:00:00Z",
            "description": "LNK ATM WITHDRAWAL",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -60.0,
            "currency": "GBP",
            "transaction_id": "2235c2ba8d700ce39e0c69cef3c7fe61",
            "running_balance": {
                "currency": "GBP",
                "amount": 594.87
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-07-05T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.89,
            "currency": "GBP",
            "transaction_id": "5e54a068c189a29cb6d421e3f87acb00",
            "running_balance": {
                "currency": "GBP",
                "amount": 592.98
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-07-05T00:00:00Z",
            "description": "THE INSURANCE EMPO",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -5.79,
            "currency": "GBP",
            "transaction_id": "e1c3e18710a040cf7fd22c711ff738a9",
            "running_balance": {
                "currency": "GBP",
                "amount": 587.19
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-07-05T00:00:00Z",
            "description": "AMAZON PRIME",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon Prime",
            "amount": -7.99,
            "currency": "GBP",
            "transaction_id": "b96bd03979ed460c5acf66050fed8cbb",
            "running_balance": {
                "currency": "GBP",
                "amount": 579.2
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-05T00:00:00Z",
            "description": "VANQUIS BANK",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Vanquis Bank",
            "amount": -23.15,
            "currency": "GBP",
            "transaction_id": "5ccd3b4d78dcf7814501078c6cbf7fa4",
            "running_balance": {
                "currency": "GBP",
                "amount": 556.05
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-05T00:00:00Z",
            "description": "AA INSURANCE",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [
                "Pension and insurances",
                "Buildings and contents insurance"
            ],
            "merchant_name": "Axa",
            "amount": -12.73,
            "currency": "GBP",
            "transaction_id": "ca3d4af59343d1213ca56d20e984a809",
            "running_balance": {
                "currency": "GBP",
                "amount": 543.32
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-07-05T00:00:00Z",
            "description": "WWW.TAILS.COM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Pets"
            ],
            "merchant_name": "Tails.com",
            "amount": -6.37,
            "currency": "GBP",
            "transaction_id": "69f8ff27a5f1f2b8d1a066588901e0c8",
            "running_balance": {
                "currency": "GBP",
                "amount": 536.95
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-05T00:00:00Z",
            "description": "ANNATAR",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "c11af640b99b48ce4ccb48abca6a9521",
            "running_balance": {
                "currency": "GBP",
                "amount": 516.95
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-04T00:00:00Z",
            "description": "ANNATAR LIMITED",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": 10.0,
            "currency": "GBP",
            "transaction_id": "33219b9697a496e794b79b5a1e2d75e7",
            "running_balance": {
                "currency": "GBP",
                "amount": 526.95
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-04T00:00:00Z",
            "description": "ANYVAN LTD",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "2471a0e17469be3749cc36c0ba4364c9",
            "running_balance": {
                "currency": "GBP",
                "amount": 596.95
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-07-04T00:00:00Z",
            "description": "ANYVAN LTD",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 59.17,
            "currency": "GBP",
            "transaction_id": "c1a35565509a9f9745b2ab92b431a0ea",
            "running_balance": {
                "currency": "GBP",
                "amount": 656.12
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-07-04T00:00:00Z",
            "description": "LNK ATM LONDON",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "d833d995c66152db224fdc2075ad7a83",
            "running_balance": {
                "currency": "GBP",
                "amount": 636.12
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-07-04T00:00:00Z",
            "description": "LAPTOP DIRECT LTD.",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "6038578bd68adc904439c0192d7addd0",
            "running_balance": {
                "currency": "GBP",
                "amount": 631.12
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-04T00:00:00Z",
            "description": "ANIMAL FRIENDS LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -3.07,
            "currency": "GBP",
            "transaction_id": "560b80c7d7f3d72cc5f5c1a600783af4",
            "running_balance": {
                "currency": "GBP",
                "amount": 628.05
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-07-04T00:00:00Z",
            "description": "LNK ATM WITHDRAWAL",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "70b1707c479689f4d49f2a4a29c70bbf",
            "running_balance": {
                "currency": "GBP",
                "amount": 528.05
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-07-04T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 100.0,
            "currency": "GBP",
            "transaction_id": "e0c89ba98985386959d2ff5b49213688",
            "running_balance": {
                "currency": "GBP",
                "amount": 628.05
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-07-04T00:00:00Z",
            "description": "INTUIT LIMITED",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [
                "Uncategorized"
            ],
            "merchant_name": "Intuit",
            "amount": -3.59,
            "currency": "GBP",
            "transaction_id": "a3ad823d68281bf94f564c3788d88aea",
            "running_balance": {
                "currency": "GBP",
                "amount": 624.46
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-07-04T00:00:00Z",
            "description": "PAYPAL EBAY",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": 25.0,
            "currency": "GBP",
            "transaction_id": "02fc4e2a014d0d9aaca56aa20f99c963",
            "running_balance": {
                "currency": "GBP",
                "amount": 649.46
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-04T00:00:00Z",
            "description": "RENT",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -130.0,
            "currency": "GBP",
            "transaction_id": "ce2b84c3d9292e723e962bffd1fed922",
            "running_balance": {
                "currency": "GBP",
                "amount": 519.46
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-07-03T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 0.89,
            "currency": "GBP",
            "transaction_id": "e79c4010a01e5360a6bacf72f720c007",
            "running_balance": {
                "currency": "GBP",
                "amount": 520.35
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-07-03T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "395094733678de157a13ad1e687f0679",
            "running_balance": {
                "currency": "GBP",
                "amount": 519.94
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-07-03T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 130.0,
            "currency": "GBP",
            "transaction_id": "9b977f1438d4ac9ae2beb6ec1bb6794c",
            "running_balance": {
                "currency": "GBP",
                "amount": 649.94
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-07-03T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 7.0,
            "currency": "GBP",
            "transaction_id": "718adc3af0af78bbfc38b26cbcded196",
            "running_balance": {
                "currency": "GBP",
                "amount": 656.94
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-07-03T00:00:00Z",
            "description": "AA MEMBERSHIP",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [
                "Auto & Transport",
                "Auto Payment"
            ],
            "merchant_name": "Aa Membership",
            "amount": -23.11,
            "currency": "GBP",
            "transaction_id": "a2aa55fd9adef651ee8ee0c94d156c93",
            "running_balance": {
                "currency": "GBP",
                "amount": 633.83
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-07-03T00:00:00Z",
            "description": "VIRGIN GAMES",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Virgin Games",
            "amount": 35.49,
            "currency": "GBP",
            "transaction_id": "a6b0b69fa38dcdcd9230a5acd18c8e8a",
            "running_balance": {
                "currency": "GBP",
                "amount": 669.32
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-03T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "84b749881f6932515753465048055c83",
            "running_balance": {
                "currency": "GBP",
                "amount": 669.31
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-07-03T00:00:00Z",
            "description": "GOOGLE PLAY STORE",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Electronics & Software"
            ],
            "merchant_name": "Google Play",
            "amount": -2.99,
            "currency": "GBP",
            "transaction_id": "43b4b824ef7a61ad357b527241f45918",
            "running_balance": {
                "currency": "GBP",
                "amount": 666.32
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-03T00:00:00Z",
            "description": "TESCO EXTRA",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "2146c45b448f15146845c73d2a67be51",
            "running_balance": {
                "currency": "GBP",
                "amount": 636.32
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-03T00:00:00Z",
            "description": "RETURNED DIRECT DEBIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "ffcf72b8e7b61066e1c2d55579c495e8",
            "running_balance": {
                "currency": "GBP",
                "amount": 676.32
            },
            "meta": {
                "provider_transaction_category": "DEP"
            }
        },
        {
            "timestamp": "2021-07-03T00:00:00Z",
            "description": "LNK ATM LONDON",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -40.0,
            "currency": "GBP",
            "transaction_id": "5835b1e0148dd3426bae0724baf321ca",
            "running_balance": {
                "currency": "GBP",
                "amount": 636.32
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-07-03T00:00:00Z",
            "description": "WWW.ASDA.COM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "30fbe64519f13ac75039543e80bd2670",
            "running_balance": {
                "currency": "GBP",
                "amount": 631.32
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-02T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 30.0,
            "currency": "GBP",
            "transaction_id": "5f7021e835b7e889154eb8f4d35bc7f1",
            "running_balance": {
                "currency": "GBP",
                "amount": 661.32
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-07-02T00:00:00Z",
            "description": "LNK ATM LONDON",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "e9f69d6950091ed5304b03493e196d68",
            "running_balance": {
                "currency": "GBP",
                "amount": 631.32
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-07-02T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 10.0,
            "currency": "GBP",
            "transaction_id": "2261492c0463ce2360031b2e151df009",
            "running_balance": {
                "currency": "GBP",
                "amount": 641.32
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-07-02T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.59,
            "currency": "GBP",
            "transaction_id": "1fbf8a85a1a6acbdba62236bed687578",
            "running_balance": {
                "currency": "GBP",
                "amount": 640.73
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "TALKTALK TELECOM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -46.82,
            "currency": "GBP",
            "transaction_id": "651e338e25afa3762a526e0fc0b753b2",
            "running_balance": {
                "currency": "GBP",
                "amount": 593.91
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "ACCOUNT OVERDRAFT FEE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "26914815ae14a978c154696dcfd0acbb",
            "running_balance": {
                "currency": "GBP",
                "amount": 593.9
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -227.0,
            "currency": "GBP",
            "transaction_id": "585db405f67ea2fa8bde4dc1536a7ed0",
            "running_balance": {
                "currency": "GBP",
                "amount": 366.9
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "TESCO",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Tesco",
            "amount": -39.99,
            "currency": "GBP",
            "transaction_id": "78481912c1bdbfe9e6038db67b522fd0",
            "running_balance": {
                "currency": "GBP",
                "amount": 326.91
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "REVOLUT",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Investments",
                "Bank products"
            ],
            "merchant_name": "Revolut",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "696c156222aeea5482a5e4ce112dde98",
            "running_balance": {
                "currency": "GBP",
                "amount": 326.9
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "CENTRA",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Income",
                "Returned Purchase"
            ],
            "merchant_name": "Centra",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "bd7c76e0f96abfbd4f5e743ce097e16f",
            "running_balance": {
                "currency": "GBP",
                "amount": 20.2
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "DUNNES STORES",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "1cae87134cf0209473ac7f05534cd17d",
            "running_balance": {
                "currency": "GBP",
                "amount": 118.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "SPAR",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping"
            ],
            "merchant_name": "Spar",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "6673e403327edf55fb0b375f8d3269db",
            "running_balance": {
                "currency": "GBP",
                "amount": 207.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "SPAR",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping"
            ],
            "merchant_name": "Spar",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "b8f4335fa2c7e5f467cbe359287fa073",
            "running_balance": {
                "currency": "GBP",
                "amount": 131.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "SUPERVALUE",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "638b14ec31e04b792eb685e2f5ad4fb5",
            "running_balance": {
                "currency": "GBP",
                "amount": 131.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "LIDL",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Lidl",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "5c7ddb15ba8b6e367e25dd6e9292d5ba",
            "running_balance": {
                "currency": "GBP",
                "amount": 223.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "APLLEGREEN",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "08668f317af2a6d353b4dfe913e4da99",
            "running_balance": {
                "currency": "GBP",
                "amount": 322.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "MCDONALD'S",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Food & Dining",
                "Fast Food"
            ],
            "merchant_name": "Mcdonald's",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "bfbc2b9a133ef3a821e24ecc88b01c97",
            "running_balance": {
                "currency": "GBP",
                "amount": 333.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "HARVEY NORMAN",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Internet"
            ],
            "merchant_name": "Harvey Norman",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "dbc8b3db10c2f11bf9c72a55f7b1643e",
            "running_balance": {
                "currency": "GBP",
                "amount": 39.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "ULSTER BANK",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Ulster Bank",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "67e4d48cf1f79d4d320379347bb013f9",
            "running_balance": {
                "currency": "GBP",
                "amount": 38.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "CIRCLE K",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "179c162e5e95098427f2bc031551d5c4",
            "running_balance": {
                "currency": "GBP",
                "amount": 57.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "BET365",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Bet365",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "9d606366c2f6e6d67135ebc3f24a6317",
            "running_balance": {
                "currency": "GBP",
                "amount": 15.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "ACCOUNT OVERDRAFT FEE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "d840fcc07bad1ec4d3e39b70f2a4b5df",
            "running_balance": {
                "currency": "GBP",
                "amount": 29.9
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "Sainsbury's",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Sainsbury's",
            "amount": -23.99,
            "currency": "GBP",
            "transaction_id": "721f5d59762fdfc58fde9b94c681ed0b",
            "running_balance": {
                "currency": "GBP",
                "amount": 302.91
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -302.91,
            "currency": "GBP",
            "transaction_id": "72338bb5af636944656f181e4940774b",
            "running_balance": {
                "currency": "GBP",
                "amount": 302.91
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-07-01T00:00:00Z",
            "description": "NUDE FINANCE",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Nude Finance",
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "944bc0b69e8c027046bb88f883ab9a32",
            "running_balance": {
                "currency": "GBP",
                "amount": 302.91
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-28T00:00:00Z",
            "description": "TSB CLEVELEYS",
            "transaction_type": "CREDIT",
            "transaction_category": "CASH",
            "transaction_classification": [],
            "amount": 420.0,
            "currency": "GBP",
            "transaction_id": "07f2bca81fe08e4dba2d986f2b20870e",
            "running_balance": {
                "currency": "GBP",
                "amount": -640.42
            },
            "meta": {
                "provider_transaction_category": "CSH"
            }
        },
        {
            "timestamp": "2021-06-28T00:00:00Z",
            "description": "AMAZON INT'L",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "b4e83efb6e1601ae0a6aa8b0866c21d1",
            "running_balance": {
                "currency": "GBP",
                "amount": -677.01
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-28T00:00:00Z",
            "description": "RETURNED DD",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "db0bb91f4b06dca11e9d9355d5f85ee8",
            "running_balance": {
                "currency": "GBP",
                "amount": -637.01
            },
            "meta": {
                "provider_transaction_category": "DEP"
            }
        },
        {
            "timestamp": "2021-06-28T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -32.72,
            "currency": "GBP",
            "transaction_id": "34d1f0c8fddbefcf87b9785f6aef6002",
            "running_balance": {
                "currency": "GBP",
                "amount": -669.73
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-06-28T00:00:00Z",
            "description": "WORKING TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "7fa6365cfec250e6bdc103e9a0ec941d",
            "running_balance": {
                "currency": "GBP",
                "amount": -647.31
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-06-27T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -7.93,
            "currency": "GBP",
            "transaction_id": "6ec357b1e45ec00d88024389f2f4388a",
            "running_balance": {
                "currency": "GBP",
                "amount": -655.24
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-06-27T00:00:00Z",
            "description": "CIRCLE UK TRADING REFUND",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.59,
            "currency": "GBP",
            "transaction_id": "0319971b84a1300b3c674e9ddff9188c",
            "running_balance": {
                "currency": "GBP",
                "amount": -604.65
            },
            "meta": {
                "provider_transaction_category": "DEP"
            }
        },
        {
            "timestamp": "2021-06-27T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 15.86,
            "currency": "GBP",
            "transaction_id": "85a2e0e8791591146e65fd225b4c296b",
            "running_balance": {
                "currency": "GBP",
                "amount": -588.79
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-06-27T00:00:00Z",
            "description": "DVLA LICENSE",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -20.56,
            "currency": "GBP",
            "transaction_id": "46e980ea2be30ac1fd707c8214566cd0",
            "running_balance": {
                "currency": "GBP",
                "amount": -609.35
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-06-27T00:00:00Z",
            "description": "E&L INSURANCE",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -2.99,
            "currency": "GBP",
            "transaction_id": "cae25ad28be17ce31ceade1c76951166",
            "running_balance": {
                "currency": "GBP",
                "amount": -612.34
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-06-27T00:00:00Z",
            "description": "TESCO ONLINE SHOPPING",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -23.62,
            "currency": "GBP",
            "transaction_id": "4c17e07d3f8ed56b9864ca768f2aae49",
            "running_balance": {
                "currency": "GBP",
                "amount": -635.96
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-06-27T00:00:00Z",
            "description": "PAYPAL EBAY",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -7.56,
            "currency": "GBP",
            "transaction_id": "35403a8837927d09faddb15343b20110",
            "running_balance": {
                "currency": "GBP",
                "amount": -643.52
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-25T00:00:00Z",
            "description": "CASHBACK",
            "transaction_type": "CREDIT",
            "transaction_category": "CASH",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "4d37855cc3d4a3df8bc2d8198dcd5a77",
            "running_balance": {
                "currency": "GBP",
                "amount": -573.52
            },
            "meta": {
                "provider_transaction_category": "CSH"
            }
        },
        {
            "timestamp": "2021-06-25T00:00:00Z",
            "description": "MENS HEALTH SUBSCRIPTION",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -24.5,
            "currency": "GBP",
            "transaction_id": "6068f157ed0a53f354c116d835f2e12c",
            "running_balance": {
                "currency": "GBP",
                "amount": -598.02
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-06-25T00:00:00Z",
            "description": "OUTGOING DD",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "8cd2f234c64f20a7a26224592ce1e14e",
            "running_balance": {
                "currency": "GBP",
                "amount": -608.02
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-06-25T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "64976f9bf5d4341357e2f617a0776e27",
            "running_balance": {
                "currency": "GBP",
                "amount": -608.43
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-25T00:00:00Z",
            "description": "AMAZON PLC",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "2f4238fea61114ff3d98fb8900f72876",
            "running_balance": {
                "currency": "GBP",
                "amount": -645.02
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-25T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.5,
            "currency": "GBP",
            "transaction_id": "541bc84152141595bfaea694e214b73f",
            "running_balance": {
                "currency": "GBP",
                "amount": -645.52
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-25T00:00:00Z",
            "description": "WWW.BINGO.COM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -10.5,
            "currency": "GBP",
            "transaction_id": "ce9267b8186bfab32a29d5c858fa17fa",
            "running_balance": {
                "currency": "GBP",
                "amount": -656.02
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-23T00:00:00Z",
            "description": "MORSES CLUB LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "0110a6419e3e7176b6f18418a19b968f",
            "running_balance": {
                "currency": "GBP",
                "amount": -626.02
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-23T00:00:00Z",
            "description": "ANYVAN LTD",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 32.5,
            "currency": "GBP",
            "transaction_id": "4dba8e134b2224a8f09ee92ca1332a1f",
            "running_balance": {
                "currency": "GBP",
                "amount": -593.52
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-06-23T00:00:00Z",
            "description": "LNK ATM WITHDRAWAL",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "97c6c3cd7ee93746e836b67187a32f14",
            "running_balance": {
                "currency": "GBP",
                "amount": -693.52
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-06-23T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.57,
            "currency": "GBP",
            "transaction_id": "eb4c0cb5480b4866317a7349b44ac339",
            "running_balance": {
                "currency": "GBP",
                "amount": -695.09
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-23T00:00:00Z",
            "description": "WWW.METROBANK.COM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "39f6e3c3c426bd98883d5b9d69e1b045",
            "running_balance": {
                "currency": "GBP",
                "amount": -715.09
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-22T00:00:00Z",
            "description": "AMAZON INT'L",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "37bcf26658c486bc9281a10ef9b463e4",
            "running_balance": {
                "currency": "GBP",
                "amount": -720.09
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-22T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "49846a69e810cb95d267fff793b930b4",
            "running_balance": {
                "currency": "GBP",
                "amount": -720.1
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-22T00:00:00Z",
            "description": "TESCO MOBILE LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Mobile Phone"
            ],
            "merchant_name": "Tesco Mobile",
            "amount": -39.25,
            "currency": "GBP",
            "transaction_id": "1145013c3a870181590f0ebdde79e810",
            "running_balance": {
                "currency": "GBP",
                "amount": -759.35
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-22T00:00:00Z",
            "description": "PAYPAL WWW.EBAY.COM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Uncategorized"
            ],
            "merchant_name": "Ebay",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "54889a1a94711cfb0f48d42591ecabf2",
            "running_balance": {
                "currency": "GBP",
                "amount": -795.94
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-22T00:00:00Z",
            "description": "OAKAM LIMITED",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Personal Services",
                "Financial Services"
            ],
            "merchant_name": "Oakam",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "d6d39e7baf46d9211d22f120acf875e0",
            "running_balance": {
                "currency": "GBP",
                "amount": -832.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-20T00:00:00Z",
            "description": "REGENDA REDWING",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -150.0,
            "currency": "GBP",
            "transaction_id": "38a0d0e67eab118929d2ba1a0466f6ff",
            "running_balance": {
                "currency": "GBP",
                "amount": -982.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-20T00:00:00Z",
            "description": "WORKING TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "53167057a37cd0fc08f85786e6b1c1cf",
            "running_balance": {
                "currency": "GBP",
                "amount": -960.11
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-06-20T00:00:00Z",
            "description": "PARKRETAIL.CO.UK",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": -550.0,
            "currency": "GBP",
            "transaction_id": "f11db76400dcc0ee7bdd15bb5f6a645b",
            "running_balance": {
                "currency": "GBP",
                "amount": -1510.11
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-20T00:00:00Z",
            "description": "CHILD TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 345.13,
            "currency": "GBP",
            "transaction_id": "e7fd81acf03138d77f54d367321fd205",
            "running_balance": {
                "currency": "GBP",
                "amount": -1164.98
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-06-19T00:00:00Z",
            "description": "AMAZON PRIME",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon Prime",
            "amount": -7.99,
            "currency": "GBP",
            "transaction_id": "de90c5cbd10a1e82698ed8b35451744d",
            "running_balance": {
                "currency": "GBP",
                "amount": -1172.97
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-19T00:00:00Z",
            "description": "CLEVELEYS.COM",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 1450.42,
            "currency": "GBP",
            "transaction_id": "1b04ec9ded54e5443c73523db3c38365",
            "running_balance": {
                "currency": "GBP",
                "amount": 277.45
            },
            "meta": {
                "provider_transaction_category": "DEP"
            }
        },
        {
            "timestamp": "2021-06-18T00:00:00Z",
            "description": "CIRCLE UK TRADING",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 82.21,
            "currency": "GBP",
            "transaction_id": "bae326d2661fec8c49d04d8ac106783a",
            "running_balance": {
                "currency": "GBP",
                "amount": 359.66
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-06-17T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 137.6,
            "currency": "GBP",
            "transaction_id": "9bdbc6b6d565aa01df54682623378b4e",
            "running_balance": {
                "currency": "GBP",
                "amount": 497.26
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-06-17T00:00:00Z",
            "description": "AA INSURANCE",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [
                "Pension and insurances",
                "Buildings and contents insurance"
            ],
            "merchant_name": "Axa",
            "amount": -12.73,
            "currency": "GBP",
            "transaction_id": "d7b31315d9c9e4649c14fbd6e82a5091",
            "running_balance": {
                "currency": "GBP",
                "amount": 484.53
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-06-17T00:00:00Z",
            "description": "AXA WEALTH LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -40.0,
            "currency": "GBP",
            "transaction_id": "1678fc6b3769d1103dd7141278cceed7",
            "running_balance": {
                "currency": "GBP",
                "amount": 444.53
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-06-17T00:00:00Z",
            "description": "MORRISONS PETROL",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Auto & Transport",
                "Gas & Fuel"
            ],
            "merchant_name": "Morrisons Petrol Station",
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "e6864bf0db14520e3da18483e4876657",
            "running_balance": {
                "currency": "GBP",
                "amount": 424.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-17T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.63,
            "currency": "GBP",
            "transaction_id": "89dcf58093e1a6b5bf662a49377d319d",
            "running_balance": {
                "currency": "GBP",
                "amount": 423.9
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-17T00:00:00Z",
            "description": "TAILSCOM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -6.37,
            "currency": "GBP",
            "transaction_id": "7eaf51082d3cc43f67ca231000f431ec",
            "running_balance": {
                "currency": "GBP",
                "amount": 417.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-15T00:00:00Z",
            "description": "ASDA STOES LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -32.0,
            "currency": "GBP",
            "transaction_id": "15840aa862ecd1411f2c57facfc9f07f",
            "running_balance": {
                "currency": "GBP",
                "amount": 385.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-15T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.55,
            "currency": "GBP",
            "transaction_id": "2fc6f472bb9e4220744f9f6eaec9654a",
            "running_balance": {
                "currency": "GBP",
                "amount": 384.98
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-15T00:00:00Z",
            "description": "AMAZON BLACK FRIDAY",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -15.45,
            "currency": "GBP",
            "transaction_id": "90fc0eb785ac6a49ad8499c9efe3bd9c",
            "running_balance": {
                "currency": "GBP",
                "amount": 369.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-15T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.5,
            "currency": "GBP",
            "transaction_id": "4afa7e4a04ffe8f07a2a248758765487",
            "running_balance": {
                "currency": "GBP",
                "amount": 369.03
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-15T00:00:00Z",
            "description": "TESCO EXTRA",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -3.59,
            "currency": "GBP",
            "transaction_id": "faa479e0bf0cf555f1ca91aa719d07ae",
            "running_balance": {
                "currency": "GBP",
                "amount": 365.44
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-15T00:00:00Z",
            "description": "PAYPAL EBAY",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "eef829da37d5182ebc6c7c228396a057",
            "running_balance": {
                "currency": "GBP",
                "amount": 355.44
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-14T00:00:00Z",
            "description": "PAYPAL BETFRED",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Betfred",
            "amount": -2.0,
            "currency": "GBP",
            "transaction_id": "69d9b095442422b7b46d0b24fdf6eabb",
            "running_balance": {
                "currency": "GBP",
                "amount": 353.44
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-14T00:00:00Z",
            "description": "MT SECURETRADE LIM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.5,
            "currency": "GBP",
            "transaction_id": "c3acaeca5da32bdb3104d1c2d4eca5cd",
            "running_balance": {
                "currency": "GBP",
                "amount": 332.94
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-14T00:00:00Z",
            "description": "MT SECURETRADE LIM",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": 43.5,
            "currency": "GBP",
            "transaction_id": "3c8e7bfec1341da582bfea8b34caf93f",
            "running_balance": {
                "currency": "GBP",
                "amount": 376.44
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-12T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "fd70367cdbbd25dea514a38ac543db87",
            "running_balance": {
                "currency": "GBP",
                "amount": 376.03
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-12T00:00:00Z",
            "description": "AA MEMBERSHIP",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [
                "Auto & Transport",
                "Auto Payment"
            ],
            "merchant_name": "Aa Membership",
            "amount": -23.11,
            "currency": "GBP",
            "transaction_id": "c82d06c9714e7e4395dbc9420b517761",
            "running_balance": {
                "currency": "GBP",
                "amount": 352.92
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-06-11T00:00:00Z",
            "description": "CIRCLE UK TRADING",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.0,
            "currency": "GBP",
            "transaction_id": "a26bf2c1b62186efbb6a12b61b37c9fd",
            "running_balance": {
                "currency": "GBP",
                "amount": 402.92
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-06-11T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 50.0,
            "currency": "GBP",
            "transaction_id": "63a52ea3888e6a135ca25aac079233a1",
            "running_balance": {
                "currency": "GBP",
                "amount": 452.92
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-06-11T00:00:00Z",
            "description": "WORKING TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "7c4081235e955853234fb84db1f3c056",
            "running_balance": {
                "currency": "GBP",
                "amount": 475.34
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-06-11T00:00:00Z",
            "description": "BUTLINS HOLIDAYS",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Fees & Charges",
                "Service Fee"
            ],
            "merchant_name": "Butlin's",
            "amount": -17.0,
            "currency": "GBP",
            "transaction_id": "60e94830bc5a97413e7428824af43e12",
            "running_balance": {
                "currency": "GBP",
                "amount": 458.34
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-10T00:00:00Z",
            "description": "AXA WEALTH LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -40.0,
            "currency": "GBP",
            "transaction_id": "ec6f87cf656842f22b4aa500bdab900a",
            "running_balance": {
                "currency": "GBP",
                "amount": 418.34
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-06-10T00:00:00Z",
            "description": "ASDA STORES LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "d64c248b2f4c2ac8ad63189076389278",
            "running_balance": {
                "currency": "GBP",
                "amount": 413.34
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-10T00:00:00Z",
            "description": "RETURNED DD",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "423ff14fea8f2a1dea87b9afa42f3a11",
            "running_balance": {
                "currency": "GBP",
                "amount": 453.34
            },
            "meta": {
                "provider_transaction_category": "DEP"
            }
        },
        {
            "timestamp": "2021-06-10T00:00:00Z",
            "description": "CIRCLE UK TRADING",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.36,
            "currency": "GBP",
            "transaction_id": "309cb9f2f5afbda4bd99d24a820c92ba",
            "running_balance": {
                "currency": "GBP",
                "amount": 503.7
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-06-10T00:00:00Z",
            "description": "OUTGOING DD",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "5684054972e5969f1a91f6c63c796691",
            "running_balance": {
                "currency": "GBP",
                "amount": 473.7
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-06-10T00:00:00Z",
            "description": "EDF ENERGY",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [
                "Bills and Utilities",
                "Utilities"
            ],
            "amount": -24.5,
            "currency": "GBP",
            "transaction_id": "16124ea0f503e29f5ad001c82d92cce4",
            "running_balance": {
                "currency": "GBP",
                "amount": 449.2
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-09T00:00:00Z",
            "description": "DVLA LICENCE",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -23.62,
            "currency": "GBP",
            "transaction_id": "6e11a2f986a741354917053d56b00eca",
            "running_balance": {
                "currency": "GBP",
                "amount": 425.58
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-06-09T00:00:00Z",
            "description": "DVLA TAX",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -20.56,
            "currency": "GBP",
            "transaction_id": "fa5bb73c28ca755270482f67b23b1be2",
            "running_balance": {
                "currency": "GBP",
                "amount": 405.02
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-06-09T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "230043eb47318475353878c66038e433",
            "running_balance": {
                "currency": "GBP",
                "amount": 404.61
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-09T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "75bc1d8f4c314f7c87ca3437e0952206",
            "running_balance": {
                "currency": "GBP",
                "amount": 474.61
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-06-08T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "f980b3a67d0d2ba958da6cab44a20073",
            "running_balance": {
                "currency": "GBP",
                "amount": 474.6
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-08T00:00:00Z",
            "description": "WORKING TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "3167bd0809f1422864f1991c560f93d1",
            "running_balance": {
                "currency": "GBP",
                "amount": 497.02
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-06-08T00:00:00Z",
            "description": "CREDITREPORTSERVIC",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -14.99,
            "currency": "GBP",
            "transaction_id": "329215f42f6b4d13b43e38d9fa5ec2c4",
            "running_balance": {
                "currency": "GBP",
                "amount": 482.03
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-08T00:00:00Z",
            "description": "REGENDA REDWING RE",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "3d99c7490a7e03bcec358d3fa8aa6fdb",
            "running_balance": {
                "currency": "GBP",
                "amount": 382.03
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-08T00:00:00Z",
            "description": "BROADWAY GAMING LT CD 0315",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Casino"
            ],
            "merchant_name": "Broadway Gaming",
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "8e72bce7df65ef228b7f24e6dbed6aad",
            "running_balance": {
                "currency": "GBP",
                "amount": 372.03
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-08T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.69,
            "currency": "GBP",
            "transaction_id": "bea382318e7a9d589be77932a31260ce",
            "running_balance": {
                "currency": "GBP",
                "amount": 371.34
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-08T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.04,
            "currency": "GBP",
            "transaction_id": "f0e4f24d5a818cd320fbc4f33880661c",
            "running_balance": {
                "currency": "GBP",
                "amount": 370.3
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-08T00:00:00Z",
            "description": "BOOKER LIMITED BLA",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Uncategorized",
                "Cash & ATM"
            ],
            "merchant_name": "Booker Wholesale",
            "amount": -24.31,
            "currency": "GBP",
            "transaction_id": "978966fb2997bf4938f4bf5a4fa29bcf",
            "running_balance": {
                "currency": "GBP",
                "amount": 345.99
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-07T00:00:00Z",
            "description": "EE & T-MOBILE",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -82.37,
            "currency": "GBP",
            "transaction_id": "c54cb0e09612b4b0daf10eec3e284708",
            "running_balance": {
                "currency": "GBP",
                "amount": 263.62
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-07T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.15,
            "currency": "GBP",
            "transaction_id": "7ceb1775345940047a0ece10af7fc2a9",
            "running_balance": {
                "currency": "GBP",
                "amount": 262.47
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-07T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -70.0,
            "currency": "GBP",
            "transaction_id": "2137ad2fad9565d79013a321f79bb31c",
            "running_balance": {
                "currency": "GBP",
                "amount": 192.47
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-06-06T00:00:00Z",
            "description": "TESCO MOBILE LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Mobile Phone"
            ],
            "merchant_name": "Tesco Mobile",
            "amount": -28.25,
            "currency": "GBP",
            "transaction_id": "73e8f38e55b6ccbbd94aed066077cf71",
            "running_balance": {
                "currency": "GBP",
                "amount": 164.22
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-06T00:00:00Z",
            "description": "WORKING TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "b8c4a447d297491488d974978c6c607c",
            "running_balance": {
                "currency": "GBP",
                "amount": 186.64
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-06-06T00:00:00Z",
            "description": "W M MORRISONS PLC",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Morrisons",
            "amount": -12.89,
            "currency": "GBP",
            "transaction_id": "657e994454d76a6ebba4f0ea9661f538",
            "running_balance": {
                "currency": "GBP",
                "amount": 173.75
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-06T00:00:00Z",
            "description": "TESCO MOBILE LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Mobile Phone"
            ],
            "merchant_name": "Tesco Mobile",
            "amount": -50.0,
            "currency": "GBP",
            "transaction_id": "5b31972ab3e38e3f0f229b429346d608",
            "running_balance": {
                "currency": "GBP",
                "amount": 123.75
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-06T00:00:00Z",
            "description": "HOME BARGAINS FLEE",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Home Bargains",
            "amount": -9.71,
            "currency": "GBP",
            "transaction_id": "ecf66f906456de0e5f915905a9b65c5c",
            "running_balance": {
                "currency": "GBP",
                "amount": 114.04
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-06T00:00:00Z",
            "description": "CHILD TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 346.35,
            "currency": "GBP",
            "transaction_id": "537816417ce16b4817199ab058048ac6",
            "running_balance": {
                "currency": "GBP",
                "amount": 460.39
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-06-06T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 137.6,
            "currency": "GBP",
            "transaction_id": "27f5ca0c3059c21869167cc5266d4859",
            "running_balance": {
                "currency": "GBP",
                "amount": 597.99
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-06-06T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 61.89,
            "currency": "GBP",
            "transaction_id": "b553770bc8fad9fc4afae248e134052d",
            "running_balance": {
                "currency": "GBP",
                "amount": 659.88
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-06-06T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "f8b719f4079d66b6830f292a4eaddb97",
            "running_balance": {
                "currency": "GBP",
                "amount": 659.87
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-06T00:00:00Z",
            "description": "AMAZON PRIME",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon Prime",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "62706db2e57f274d759c852a3ca78628",
            "running_balance": {
                "currency": "GBP",
                "amount": 654.87
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-05T00:00:00Z",
            "description": "LNK ATM WITHDRAWAL",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -60.0,
            "currency": "GBP",
            "transaction_id": "d5b75eef410fd6e34e71c0c59e9bf816",
            "running_balance": {
                "currency": "GBP",
                "amount": 594.87
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-06-05T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.89,
            "currency": "GBP",
            "transaction_id": "995ac1f6d62a0741a2474363e265e3eb",
            "running_balance": {
                "currency": "GBP",
                "amount": 592.98
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-05T00:00:00Z",
            "description": "THE INSURANCE EMPO",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -5.79,
            "currency": "GBP",
            "transaction_id": "967721d39f7a754144f8801175237460",
            "running_balance": {
                "currency": "GBP",
                "amount": 587.19
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-06-05T00:00:00Z",
            "description": "AMAZON PRIME",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon Prime",
            "amount": -7.99,
            "currency": "GBP",
            "transaction_id": "62da2fe0e0cffecce72928394fe3cc6e",
            "running_balance": {
                "currency": "GBP",
                "amount": 579.2
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-05T00:00:00Z",
            "description": "VANQUIS BANK",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Vanquis Bank",
            "amount": -23.15,
            "currency": "GBP",
            "transaction_id": "708c24a64beb43cb6cfa92e5a6ab8fcd",
            "running_balance": {
                "currency": "GBP",
                "amount": 556.05
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-05T00:00:00Z",
            "description": "AA INSURANCE",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [
                "Pension and insurances",
                "Buildings and contents insurance"
            ],
            "merchant_name": "Axa",
            "amount": -12.73,
            "currency": "GBP",
            "transaction_id": "7458e934cc92748ca426e31ea4364d78",
            "running_balance": {
                "currency": "GBP",
                "amount": 543.32
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-06-05T00:00:00Z",
            "description": "WWW.TAILS.COM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Pets"
            ],
            "merchant_name": "Tails.com",
            "amount": -6.37,
            "currency": "GBP",
            "transaction_id": "f4b542f0a43a4baa0614aa686997bab2",
            "running_balance": {
                "currency": "GBP",
                "amount": 536.95
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-05T00:00:00Z",
            "description": "ANNATAR",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "90bb28e814f7dc8a9722dacecb5a98b8",
            "running_balance": {
                "currency": "GBP",
                "amount": 516.95
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-04T00:00:00Z",
            "description": "ANNATAR LIMITED",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": 10.0,
            "currency": "GBP",
            "transaction_id": "669295aa9bce1800b1b4e1dc8ba99450",
            "running_balance": {
                "currency": "GBP",
                "amount": 526.95
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-04T00:00:00Z",
            "description": "ANYVAN LTD",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "30cfdf66d8cd33b2d0387512b00c82b4",
            "running_balance": {
                "currency": "GBP",
                "amount": 596.95
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-06-04T00:00:00Z",
            "description": "ANYVAN LTD",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 59.17,
            "currency": "GBP",
            "transaction_id": "370554d2bea2a5faba97fabdb31e9fc4",
            "running_balance": {
                "currency": "GBP",
                "amount": 656.12
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-06-04T00:00:00Z",
            "description": "LNK ATM LONDON",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "f43a22df9206e371b56d0b23ac075288",
            "running_balance": {
                "currency": "GBP",
                "amount": 636.12
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-06-04T00:00:00Z",
            "description": "LAPTOP DIRECT LTD.",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "11ca815cb93ff388bab1a34d9e04730d",
            "running_balance": {
                "currency": "GBP",
                "amount": 631.12
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-04T00:00:00Z",
            "description": "ANIMAL FRIENDS LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -3.07,
            "currency": "GBP",
            "transaction_id": "b68dca955228038055bd7bcebfec099a",
            "running_balance": {
                "currency": "GBP",
                "amount": 628.05
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-06-04T00:00:00Z",
            "description": "LNK ATM WITHDRAWAL",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "9c90d9476c3e24530c870f6d32f0ab24",
            "running_balance": {
                "currency": "GBP",
                "amount": 528.05
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-06-04T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 100.0,
            "currency": "GBP",
            "transaction_id": "bfba4b7d624945a076ed022b096c723a",
            "running_balance": {
                "currency": "GBP",
                "amount": 628.05
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-06-04T00:00:00Z",
            "description": "INTUIT LIMITED",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [
                "Uncategorized"
            ],
            "merchant_name": "Intuit",
            "amount": -3.59,
            "currency": "GBP",
            "transaction_id": "fb0de8bc6b4850c9cdf7a3c093aab146",
            "running_balance": {
                "currency": "GBP",
                "amount": 624.46
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-06-04T00:00:00Z",
            "description": "PAYPAL EBAY",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": 25.0,
            "currency": "GBP",
            "transaction_id": "57253a69a48fd654901f710f7bee3ee7",
            "running_balance": {
                "currency": "GBP",
                "amount": 649.46
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-04T00:00:00Z",
            "description": "RENT",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -130.0,
            "currency": "GBP",
            "transaction_id": "f50735bd1be0760cb0f465d4fc927c89",
            "running_balance": {
                "currency": "GBP",
                "amount": 519.46
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-03T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 0.89,
            "currency": "GBP",
            "transaction_id": "6bfe4c62703e7f4c49fb4f71f57b16ff",
            "running_balance": {
                "currency": "GBP",
                "amount": 520.35
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-06-03T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "237dc2e30b59dfba328f3a5a59abbc30",
            "running_balance": {
                "currency": "GBP",
                "amount": 519.94
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-03T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 130.0,
            "currency": "GBP",
            "transaction_id": "d04d393d32aec20aca61c5d28c79fae8",
            "running_balance": {
                "currency": "GBP",
                "amount": 649.94
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-06-03T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 7.0,
            "currency": "GBP",
            "transaction_id": "e0c86884dbefb48a4e9ae67ba9077988",
            "running_balance": {
                "currency": "GBP",
                "amount": 656.94
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-06-03T00:00:00Z",
            "description": "AA MEMBERSHIP",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [
                "Auto & Transport",
                "Auto Payment"
            ],
            "merchant_name": "Aa Membership",
            "amount": -23.11,
            "currency": "GBP",
            "transaction_id": "5a4ab7a7b08095a4f9c201adc38930ef",
            "running_balance": {
                "currency": "GBP",
                "amount": 633.83
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-06-03T00:00:00Z",
            "description": "VIRGIN GAMES",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Virgin Games",
            "amount": 35.49,
            "currency": "GBP",
            "transaction_id": "985c0d49327a8b555c8062a32ab6f564",
            "running_balance": {
                "currency": "GBP",
                "amount": 669.32
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-03T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "b3a2ee8302f3c9d2bd9d8a6c92211bea",
            "running_balance": {
                "currency": "GBP",
                "amount": 669.31
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-03T00:00:00Z",
            "description": "GOOGLE PLAY STORE",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Electronics & Software"
            ],
            "merchant_name": "Google Play",
            "amount": -2.99,
            "currency": "GBP",
            "transaction_id": "2072650d7b1b183dc25815014d011b4e",
            "running_balance": {
                "currency": "GBP",
                "amount": 666.32
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-03T00:00:00Z",
            "description": "TESCO EXTRA",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "b23a82f48c56c5140843ebd5f289f28d",
            "running_balance": {
                "currency": "GBP",
                "amount": 636.32
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-03T00:00:00Z",
            "description": "RETURNED DIRECT DEBIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "0a207b97293ba695580cf3a6d8a8a29b",
            "running_balance": {
                "currency": "GBP",
                "amount": 676.32
            },
            "meta": {
                "provider_transaction_category": "DEP"
            }
        },
        {
            "timestamp": "2021-06-03T00:00:00Z",
            "description": "LNK ATM LONDON",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -40.0,
            "currency": "GBP",
            "transaction_id": "ce08ada4fce00e1e4eab20bc541d6bb7",
            "running_balance": {
                "currency": "GBP",
                "amount": 636.32
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-06-03T00:00:00Z",
            "description": "WWW.ASDA.COM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "81d0ceaec794f05093da16f840da23fd",
            "running_balance": {
                "currency": "GBP",
                "amount": 631.32
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-02T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 30.0,
            "currency": "GBP",
            "transaction_id": "a103270cd742a9f3e471eeb46f2bc521",
            "running_balance": {
                "currency": "GBP",
                "amount": 661.32
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-06-02T00:00:00Z",
            "description": "LNK ATM LONDON",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "0d45ea3c828fdae4b0d0bff1c29301dc",
            "running_balance": {
                "currency": "GBP",
                "amount": 631.32
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-06-02T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 10.0,
            "currency": "GBP",
            "transaction_id": "b753ddae0f13d2b4ac46aa6b40ae0d54",
            "running_balance": {
                "currency": "GBP",
                "amount": 641.32
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-06-02T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.59,
            "currency": "GBP",
            "transaction_id": "ec10497a5c2ddbca1085f14bda1d0e1f",
            "running_balance": {
                "currency": "GBP",
                "amount": 640.73
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "TALKTALK TELECOM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -46.82,
            "currency": "GBP",
            "transaction_id": "75e1c89198045fbabbbeb6bb8e7a67fa",
            "running_balance": {
                "currency": "GBP",
                "amount": 593.91
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "ACCOUNT OVERDRAFT FEE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "7799794db07618c27cf748a4614e32b7",
            "running_balance": {
                "currency": "GBP",
                "amount": 593.9
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -227.0,
            "currency": "GBP",
            "transaction_id": "c7e84ab7d5b24b7ff028836c3d1d9905",
            "running_balance": {
                "currency": "GBP",
                "amount": 366.9
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "TESCO",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Tesco",
            "amount": -39.99,
            "currency": "GBP",
            "transaction_id": "ddef48bd41731ea85da8b94182b873ca",
            "running_balance": {
                "currency": "GBP",
                "amount": 326.91
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "REVOLUT",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Investments",
                "Bank products"
            ],
            "merchant_name": "Revolut",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "937c3de0234bd362fa53f31763ea35b9",
            "running_balance": {
                "currency": "GBP",
                "amount": 326.9
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "CENTRA",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Income",
                "Returned Purchase"
            ],
            "merchant_name": "Centra",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "87645438d61311c93e3c06c6761eaed9",
            "running_balance": {
                "currency": "GBP",
                "amount": 20.2
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "DUNNES STORES",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "fe1cda0b958737056df092a03cd253f7",
            "running_balance": {
                "currency": "GBP",
                "amount": 118.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "SPAR",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping"
            ],
            "merchant_name": "Spar",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "26a170066346f4281bb0d70bb9d5b04a",
            "running_balance": {
                "currency": "GBP",
                "amount": 207.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "SPAR",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping"
            ],
            "merchant_name": "Spar",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "d523e03e6e1957037ea4d3a4a74b0139",
            "running_balance": {
                "currency": "GBP",
                "amount": 131.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "SUPERVALUE",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "e0747de88c0a993479d90b67da02ca24",
            "running_balance": {
                "currency": "GBP",
                "amount": 131.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "LIDL",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Lidl",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "519b16b9546414429c0f374b8df8f1f8",
            "running_balance": {
                "currency": "GBP",
                "amount": 223.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "APLLEGREEN",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "e019f36f8b405c87cd19d33c0b0f99c6",
            "running_balance": {
                "currency": "GBP",
                "amount": 322.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "MCDONALD'S",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Food & Dining",
                "Fast Food"
            ],
            "merchant_name": "Mcdonald's",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "400bc0e64321e7d5fa39e82dac31f85b",
            "running_balance": {
                "currency": "GBP",
                "amount": 333.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "HARVEY NORMAN",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Internet"
            ],
            "merchant_name": "Harvey Norman",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "ae6f4902be483de99b9140d3339ecede",
            "running_balance": {
                "currency": "GBP",
                "amount": 39.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "ULSTER BANK",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Ulster Bank",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "3d0406f8426d950df324b4a56b74dabc",
            "running_balance": {
                "currency": "GBP",
                "amount": 38.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "CIRCLE K",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "518a3d0e6bc5fc6f3fe55bfb7af5e6dd",
            "running_balance": {
                "currency": "GBP",
                "amount": 57.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "BET365",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Bet365",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "e857ad5347831b12fd729bd2f63619de",
            "running_balance": {
                "currency": "GBP",
                "amount": 15.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "ACCOUNT OVERDRAFT FEE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "2be95c51ab3a6594e74785c36c394ac6",
            "running_balance": {
                "currency": "GBP",
                "amount": 29.9
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "Sainsbury's",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Sainsbury's",
            "amount": -23.99,
            "currency": "GBP",
            "transaction_id": "c3b5a3e689c0f4f67210d42babd382a2",
            "running_balance": {
                "currency": "GBP",
                "amount": 302.91
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -302.91,
            "currency": "GBP",
            "transaction_id": "cf4e30b644d8113ba66fbc03e6ad9726",
            "running_balance": {
                "currency": "GBP",
                "amount": 302.91
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-06-01T00:00:00Z",
            "description": "NUDE FINANCE",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Nude Finance",
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "372448125cf869dbdb661215e6519b36",
            "running_balance": {
                "currency": "GBP",
                "amount": 302.91
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-28T00:00:00Z",
            "description": "TSB CLEVELEYS",
            "transaction_type": "CREDIT",
            "transaction_category": "CASH",
            "transaction_classification": [],
            "amount": 420.0,
            "currency": "GBP",
            "transaction_id": "0d902fb6b1634f597ac1bd0efed6772b",
            "running_balance": {
                "currency": "GBP",
                "amount": -640.42
            },
            "meta": {
                "provider_transaction_category": "CSH"
            }
        },
        {
            "timestamp": "2021-05-28T00:00:00Z",
            "description": "AMAZON INT'L",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "0fb77759d268a300ab7670c04ae3616f",
            "running_balance": {
                "currency": "GBP",
                "amount": -677.01
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-28T00:00:00Z",
            "description": "RETURNED DD",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "8dbb4cfdd080ce9a70b81a63f9ce13cd",
            "running_balance": {
                "currency": "GBP",
                "amount": -637.01
            },
            "meta": {
                "provider_transaction_category": "DEP"
            }
        },
        {
            "timestamp": "2021-05-28T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -32.72,
            "currency": "GBP",
            "transaction_id": "64b8817fd736a63692af6ff434972af1",
            "running_balance": {
                "currency": "GBP",
                "amount": -669.73
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-05-28T00:00:00Z",
            "description": "WORKING TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "13dd7f4e9f4d569914c88a6b2f6e1594",
            "running_balance": {
                "currency": "GBP",
                "amount": -647.31
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-05-27T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -7.93,
            "currency": "GBP",
            "transaction_id": "a685ab2d8abcdcc3ed8653a556be1945",
            "running_balance": {
                "currency": "GBP",
                "amount": -655.24
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-05-27T00:00:00Z",
            "description": "CIRCLE UK TRADING REFUND",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.59,
            "currency": "GBP",
            "transaction_id": "88a8ad1fa2add93159d5c3ea35726362",
            "running_balance": {
                "currency": "GBP",
                "amount": -604.65
            },
            "meta": {
                "provider_transaction_category": "DEP"
            }
        },
        {
            "timestamp": "2021-05-27T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 15.86,
            "currency": "GBP",
            "transaction_id": "96ebd96d65bb1f121efed81fc691b7fc",
            "running_balance": {
                "currency": "GBP",
                "amount": -588.79
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-05-27T00:00:00Z",
            "description": "DVLA LICENSE",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -20.56,
            "currency": "GBP",
            "transaction_id": "34457403ec44154a16fc8f1b33ea6490",
            "running_balance": {
                "currency": "GBP",
                "amount": -609.35
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-05-27T00:00:00Z",
            "description": "E&L INSURANCE",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -2.99,
            "currency": "GBP",
            "transaction_id": "4af9d6b72531276280ce97f7671015be",
            "running_balance": {
                "currency": "GBP",
                "amount": -612.34
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-05-27T00:00:00Z",
            "description": "TESCO ONLINE SHOPPING",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -23.62,
            "currency": "GBP",
            "transaction_id": "39295515698047fd29abdd90182feb92",
            "running_balance": {
                "currency": "GBP",
                "amount": -635.96
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-05-27T00:00:00Z",
            "description": "PAYPAL EBAY",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -7.56,
            "currency": "GBP",
            "transaction_id": "5d1691f79488916a3fe64c8fcc36383c",
            "running_balance": {
                "currency": "GBP",
                "amount": -643.52
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-25T00:00:00Z",
            "description": "CASHBACK",
            "transaction_type": "CREDIT",
            "transaction_category": "CASH",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "4d12cc909c0268e8c625fba060c8eb39",
            "running_balance": {
                "currency": "GBP",
                "amount": -573.52
            },
            "meta": {
                "provider_transaction_category": "CSH"
            }
        },
        {
            "timestamp": "2021-05-25T00:00:00Z",
            "description": "MENS HEALTH SUBSCRIPTION",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -24.5,
            "currency": "GBP",
            "transaction_id": "350efe5738f18e368040cdf5633e1bdb",
            "running_balance": {
                "currency": "GBP",
                "amount": -598.02
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-05-25T00:00:00Z",
            "description": "OUTGOING DD",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "32ec63476860113ed32d7bf7fd5f9aab",
            "running_balance": {
                "currency": "GBP",
                "amount": -608.02
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-05-25T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "ba1301f8b3135ec8316a6e490a57cc62",
            "running_balance": {
                "currency": "GBP",
                "amount": -608.43
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-25T00:00:00Z",
            "description": "AMAZON PLC",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "0ee2a5b40d04159a2eb4804b725bb4da",
            "running_balance": {
                "currency": "GBP",
                "amount": -645.02
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-25T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.5,
            "currency": "GBP",
            "transaction_id": "5bee509e438f3496b63d57a902609230",
            "running_balance": {
                "currency": "GBP",
                "amount": -645.52
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-25T00:00:00Z",
            "description": "WWW.BINGO.COM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -10.5,
            "currency": "GBP",
            "transaction_id": "6cb0f98a02990d8719b6b7bdf3a69ae9",
            "running_balance": {
                "currency": "GBP",
                "amount": -656.02
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-23T00:00:00Z",
            "description": "MORSES CLUB LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "34589d41ab4c7ca00fcec66c617b157e",
            "running_balance": {
                "currency": "GBP",
                "amount": -626.02
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-23T00:00:00Z",
            "description": "ANYVAN LTD",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 32.5,
            "currency": "GBP",
            "transaction_id": "403e9a2161b9de29f055810ee2fd97c1",
            "running_balance": {
                "currency": "GBP",
                "amount": -593.52
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-05-23T00:00:00Z",
            "description": "LNK ATM WITHDRAWAL",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "2e4f5ebab7067b1e76a0496ef3f96b02",
            "running_balance": {
                "currency": "GBP",
                "amount": -693.52
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-05-23T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.57,
            "currency": "GBP",
            "transaction_id": "49f13d729ec285f12850e660eb496308",
            "running_balance": {
                "currency": "GBP",
                "amount": -695.09
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-23T00:00:00Z",
            "description": "WWW.METROBANK.COM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "fbde8b151b58d3b9c2c4dab586559a6a",
            "running_balance": {
                "currency": "GBP",
                "amount": -715.09
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-22T00:00:00Z",
            "description": "AMAZON INT'L",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "00cd91a1782498a179ba69f3dc15aecb",
            "running_balance": {
                "currency": "GBP",
                "amount": -720.09
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-22T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "103b5cd4308ee0bfa53cc57dc0693921",
            "running_balance": {
                "currency": "GBP",
                "amount": -720.1
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-22T00:00:00Z",
            "description": "TESCO MOBILE LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Mobile Phone"
            ],
            "merchant_name": "Tesco Mobile",
            "amount": -39.25,
            "currency": "GBP",
            "transaction_id": "2e87deeb3731643cbea33f98e73af393",
            "running_balance": {
                "currency": "GBP",
                "amount": -759.35
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-22T00:00:00Z",
            "description": "PAYPAL WWW.EBAY.COM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Uncategorized"
            ],
            "merchant_name": "Ebay",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "a68141fb47b6fdafafda9830ff085729",
            "running_balance": {
                "currency": "GBP",
                "amount": -795.94
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-22T00:00:00Z",
            "description": "OAKAM LIMITED",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Personal Services",
                "Financial Services"
            ],
            "merchant_name": "Oakam",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "61607f0c9b14f1b8a563aa6c82c65a11",
            "running_balance": {
                "currency": "GBP",
                "amount": -832.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-20T00:00:00Z",
            "description": "REGENDA REDWING",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -150.0,
            "currency": "GBP",
            "transaction_id": "316ec560b9fb6ad3e7c13e03a2d2722f",
            "running_balance": {
                "currency": "GBP",
                "amount": -982.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-20T00:00:00Z",
            "description": "WORKING TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "fb209e8bbd3c4bd1bdf4731d954efee7",
            "running_balance": {
                "currency": "GBP",
                "amount": -960.11
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-05-20T00:00:00Z",
            "description": "PARKRETAIL.CO.UK",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": -550.0,
            "currency": "GBP",
            "transaction_id": "e87f6e4be6ea09ec5a7ebdc010ac400a",
            "running_balance": {
                "currency": "GBP",
                "amount": -1510.11
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-20T00:00:00Z",
            "description": "CHILD TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 345.13,
            "currency": "GBP",
            "transaction_id": "fb71c572e438f42084c3666b4296e82e",
            "running_balance": {
                "currency": "GBP",
                "amount": -1164.98
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-05-19T00:00:00Z",
            "description": "AMAZON PRIME",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon Prime",
            "amount": -7.99,
            "currency": "GBP",
            "transaction_id": "fc5729b51ece720b5ed7f706f4f0d5be",
            "running_balance": {
                "currency": "GBP",
                "amount": -1172.97
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-19T00:00:00Z",
            "description": "CLEVELEYS.COM",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 1450.42,
            "currency": "GBP",
            "transaction_id": "8b2e3c5c465daf02f498e1c165d7737b",
            "running_balance": {
                "currency": "GBP",
                "amount": 277.45
            },
            "meta": {
                "provider_transaction_category": "DEP"
            }
        },
        {
            "timestamp": "2021-05-18T00:00:00Z",
            "description": "CIRCLE UK TRADING",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 82.21,
            "currency": "GBP",
            "transaction_id": "169e41a65e80042218d33bb5b7cbed1d",
            "running_balance": {
                "currency": "GBP",
                "amount": 359.66
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-05-17T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 137.6,
            "currency": "GBP",
            "transaction_id": "456027b2adfa7bdc7a3f84ca35477e9f",
            "running_balance": {
                "currency": "GBP",
                "amount": 497.26
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-05-17T00:00:00Z",
            "description": "AA INSURANCE",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [
                "Pension and insurances",
                "Buildings and contents insurance"
            ],
            "merchant_name": "Axa",
            "amount": -12.73,
            "currency": "GBP",
            "transaction_id": "a2d3368b8f65a86f4f3e99c48e5f23d7",
            "running_balance": {
                "currency": "GBP",
                "amount": 484.53
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-05-17T00:00:00Z",
            "description": "AXA WEALTH LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -40.0,
            "currency": "GBP",
            "transaction_id": "9b51f6a931b7444c4b54d180ad2fa966",
            "running_balance": {
                "currency": "GBP",
                "amount": 444.53
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-05-17T00:00:00Z",
            "description": "MORRISONS PETROL",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Auto & Transport",
                "Gas & Fuel"
            ],
            "merchant_name": "Morrisons Petrol Station",
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "55dc0e02688899a1340ceb3ab2e04f29",
            "running_balance": {
                "currency": "GBP",
                "amount": 424.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-17T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.63,
            "currency": "GBP",
            "transaction_id": "fb6033442aeab21685c88018569fc347",
            "running_balance": {
                "currency": "GBP",
                "amount": 423.9
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-17T00:00:00Z",
            "description": "TAILSCOM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -6.37,
            "currency": "GBP",
            "transaction_id": "fdb0ad5975bc380d5f08c970e8b6ac49",
            "running_balance": {
                "currency": "GBP",
                "amount": 417.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-15T00:00:00Z",
            "description": "ASDA STOES LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -32.0,
            "currency": "GBP",
            "transaction_id": "29c166b3d1c1f24f5f9728bacf74736e",
            "running_balance": {
                "currency": "GBP",
                "amount": 385.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-15T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.55,
            "currency": "GBP",
            "transaction_id": "075912ff22129b86fb3819963b736d37",
            "running_balance": {
                "currency": "GBP",
                "amount": 384.98
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-15T00:00:00Z",
            "description": "AMAZON BLACK FRIDAY",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -15.45,
            "currency": "GBP",
            "transaction_id": "0c298f73fc2a68ce0aad9e1f413bf06b",
            "running_balance": {
                "currency": "GBP",
                "amount": 369.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-15T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.5,
            "currency": "GBP",
            "transaction_id": "6ba5170e120a8452e1b1977211e9029b",
            "running_balance": {
                "currency": "GBP",
                "amount": 369.03
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-15T00:00:00Z",
            "description": "TESCO EXTRA",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -3.59,
            "currency": "GBP",
            "transaction_id": "32ec27a0797f31281998070aa2dcd7df",
            "running_balance": {
                "currency": "GBP",
                "amount": 365.44
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-15T00:00:00Z",
            "description": "PAYPAL EBAY",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "43f22069d6c1bee9919a5de331e57211",
            "running_balance": {
                "currency": "GBP",
                "amount": 355.44
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-14T00:00:00Z",
            "description": "PAYPAL BETFRED",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Betfred",
            "amount": -2.0,
            "currency": "GBP",
            "transaction_id": "47b123554fb01e9fcefa359e84d2bb36",
            "running_balance": {
                "currency": "GBP",
                "amount": 353.44
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-14T00:00:00Z",
            "description": "MT SECURETRADE LIM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.5,
            "currency": "GBP",
            "transaction_id": "c71ad1c5eb48259ee4ad22fbaf65314f",
            "running_balance": {
                "currency": "GBP",
                "amount": 332.94
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-14T00:00:00Z",
            "description": "MT SECURETRADE LIM",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": 43.5,
            "currency": "GBP",
            "transaction_id": "8d8d55173e453cb2be1a7bdbc4b2bdb3",
            "running_balance": {
                "currency": "GBP",
                "amount": 376.44
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-12T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "f07cf79401383d2f996a04d272c22c1b",
            "running_balance": {
                "currency": "GBP",
                "amount": 376.03
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-12T00:00:00Z",
            "description": "AA MEMBERSHIP",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [
                "Auto & Transport",
                "Auto Payment"
            ],
            "merchant_name": "Aa Membership",
            "amount": -23.11,
            "currency": "GBP",
            "transaction_id": "656f5cefd299b156e51969611ea56c57",
            "running_balance": {
                "currency": "GBP",
                "amount": 352.92
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-05-11T00:00:00Z",
            "description": "CIRCLE UK TRADING",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.0,
            "currency": "GBP",
            "transaction_id": "077af8be4d639f4c84a4451ba8a8a248",
            "running_balance": {
                "currency": "GBP",
                "amount": 402.92
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-05-11T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 50.0,
            "currency": "GBP",
            "transaction_id": "a2c2b17dc98ea0b334a6334661b13498",
            "running_balance": {
                "currency": "GBP",
                "amount": 452.92
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-05-11T00:00:00Z",
            "description": "WORKING TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "59990bcfe932ca2dd59d8967c38d3da9",
            "running_balance": {
                "currency": "GBP",
                "amount": 475.34
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-05-11T00:00:00Z",
            "description": "BUTLINS HOLIDAYS",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Fees & Charges",
                "Service Fee"
            ],
            "merchant_name": "Butlin's",
            "amount": -17.0,
            "currency": "GBP",
            "transaction_id": "579c9e980bd91d27f768b2137a62d891",
            "running_balance": {
                "currency": "GBP",
                "amount": 458.34
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-10T00:00:00Z",
            "description": "AXA WEALTH LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -40.0,
            "currency": "GBP",
            "transaction_id": "2e56831c22e4a372f6d4a943ab6a11b8",
            "running_balance": {
                "currency": "GBP",
                "amount": 418.34
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-05-10T00:00:00Z",
            "description": "ASDA STORES LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "6b5a9a83ac04fe4b42f3026d08851e56",
            "running_balance": {
                "currency": "GBP",
                "amount": 413.34
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-10T00:00:00Z",
            "description": "RETURNED DD",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "df4009d165d92bea1e2336a12e993e78",
            "running_balance": {
                "currency": "GBP",
                "amount": 453.34
            },
            "meta": {
                "provider_transaction_category": "DEP"
            }
        },
        {
            "timestamp": "2021-05-10T00:00:00Z",
            "description": "CIRCLE UK TRADING",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.36,
            "currency": "GBP",
            "transaction_id": "d243101f90aaff82e33d61168f4b2cd6",
            "running_balance": {
                "currency": "GBP",
                "amount": 503.7
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-05-10T00:00:00Z",
            "description": "OUTGOING DD",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "4d6725d38ae39b210c4e321a6bfba102",
            "running_balance": {
                "currency": "GBP",
                "amount": 473.7
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-05-10T00:00:00Z",
            "description": "EDF ENERGY",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [
                "Bills and Utilities",
                "Utilities"
            ],
            "amount": -24.5,
            "currency": "GBP",
            "transaction_id": "fe56f1aa17f41d6b6e443a933f033e17",
            "running_balance": {
                "currency": "GBP",
                "amount": 449.2
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-09T00:00:00Z",
            "description": "DVLA LICENCE",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -23.62,
            "currency": "GBP",
            "transaction_id": "5e07bc06813e46665b939093df74ed81",
            "running_balance": {
                "currency": "GBP",
                "amount": 425.58
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-05-09T00:00:00Z",
            "description": "DVLA TAX",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -20.56,
            "currency": "GBP",
            "transaction_id": "2b7ed19197d8845b698dbb36ec9e2c83",
            "running_balance": {
                "currency": "GBP",
                "amount": 405.02
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-05-09T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "ded41d45661e9c10d762a3eb69a9ec30",
            "running_balance": {
                "currency": "GBP",
                "amount": 404.61
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-09T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "7c6593551c75aafe16e9bc2498ee4e24",
            "running_balance": {
                "currency": "GBP",
                "amount": 474.61
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-05-08T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "bf0bdfc345a9c73cbaec19e98508bff8",
            "running_balance": {
                "currency": "GBP",
                "amount": 474.6
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-08T00:00:00Z",
            "description": "WORKING TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "72a77c656083885c9fced5c74eb52079",
            "running_balance": {
                "currency": "GBP",
                "amount": 497.02
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-05-08T00:00:00Z",
            "description": "CREDITREPORTSERVIC",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -14.99,
            "currency": "GBP",
            "transaction_id": "dadeac6f620998d34b11f16436120505",
            "running_balance": {
                "currency": "GBP",
                "amount": 482.03
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-08T00:00:00Z",
            "description": "REGENDA REDWING RE",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "db0f4ebf441b232f31a6c9d4b81ebdfd",
            "running_balance": {
                "currency": "GBP",
                "amount": 382.03
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-08T00:00:00Z",
            "description": "BROADWAY GAMING LT CD 0315",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Casino"
            ],
            "merchant_name": "Broadway Gaming",
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "22e42bdc0106f19c4291703298c84bdc",
            "running_balance": {
                "currency": "GBP",
                "amount": 372.03
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-08T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.69,
            "currency": "GBP",
            "transaction_id": "9fce17cb7826de0f54f73a31acfb6150",
            "running_balance": {
                "currency": "GBP",
                "amount": 371.34
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-08T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.04,
            "currency": "GBP",
            "transaction_id": "cc07b03212c1b3f6ea285547dc4f8c55",
            "running_balance": {
                "currency": "GBP",
                "amount": 370.3
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-08T00:00:00Z",
            "description": "BOOKER LIMITED BLA",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Uncategorized",
                "Cash & ATM"
            ],
            "merchant_name": "Booker Wholesale",
            "amount": -24.31,
            "currency": "GBP",
            "transaction_id": "9f0c1f38c2978c974b02f2b7ccaa190f",
            "running_balance": {
                "currency": "GBP",
                "amount": 345.99
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-07T00:00:00Z",
            "description": "EE & T-MOBILE",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -82.37,
            "currency": "GBP",
            "transaction_id": "98ee65f4a94315bffe536f572058f49d",
            "running_balance": {
                "currency": "GBP",
                "amount": 263.62
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-07T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.15,
            "currency": "GBP",
            "transaction_id": "40692ef2aa58ed9a8d76da5bfad0dfa0",
            "running_balance": {
                "currency": "GBP",
                "amount": 262.47
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-07T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -70.0,
            "currency": "GBP",
            "transaction_id": "39ad2ffb6b4b430c2fe9aace8879b675",
            "running_balance": {
                "currency": "GBP",
                "amount": 192.47
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-05-06T00:00:00Z",
            "description": "TESCO MOBILE LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Mobile Phone"
            ],
            "merchant_name": "Tesco Mobile",
            "amount": -28.25,
            "currency": "GBP",
            "transaction_id": "17c8195f1be6fa18892037a27b93a7e3",
            "running_balance": {
                "currency": "GBP",
                "amount": 164.22
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-06T00:00:00Z",
            "description": "WORKING TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "c66d562783915f4619ae049a128e3897",
            "running_balance": {
                "currency": "GBP",
                "amount": 186.64
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-05-06T00:00:00Z",
            "description": "W M MORRISONS PLC",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Morrisons",
            "amount": -12.89,
            "currency": "GBP",
            "transaction_id": "68f59effa685ac10a654e3a4458654a4",
            "running_balance": {
                "currency": "GBP",
                "amount": 173.75
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-06T00:00:00Z",
            "description": "TESCO MOBILE LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Mobile Phone"
            ],
            "merchant_name": "Tesco Mobile",
            "amount": -50.0,
            "currency": "GBP",
            "transaction_id": "e71410789636903c84934a3964a03896",
            "running_balance": {
                "currency": "GBP",
                "amount": 123.75
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-06T00:00:00Z",
            "description": "HOME BARGAINS FLEE",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Home Bargains",
            "amount": -9.71,
            "currency": "GBP",
            "transaction_id": "d9669a679325b352f397a61f77831833",
            "running_balance": {
                "currency": "GBP",
                "amount": 114.04
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-06T00:00:00Z",
            "description": "CHILD TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 346.35,
            "currency": "GBP",
            "transaction_id": "7b8fc45185707862819ef7676b131a51",
            "running_balance": {
                "currency": "GBP",
                "amount": 460.39
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-05-06T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 137.6,
            "currency": "GBP",
            "transaction_id": "16e087e5b94bd91a68f4f8d8796bd1db",
            "running_balance": {
                "currency": "GBP",
                "amount": 597.99
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-05-06T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 61.89,
            "currency": "GBP",
            "transaction_id": "ed177954d33c3b180e733178575b6986",
            "running_balance": {
                "currency": "GBP",
                "amount": 659.88
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-05-06T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "ad2429405b0329ef10130a67fcaa4f30",
            "running_balance": {
                "currency": "GBP",
                "amount": 659.87
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-06T00:00:00Z",
            "description": "AMAZON PRIME",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon Prime",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "6012c71e9b4d00e2536d0e501d26cf5b",
            "running_balance": {
                "currency": "GBP",
                "amount": 654.87
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-05T00:00:00Z",
            "description": "LNK ATM WITHDRAWAL",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -60.0,
            "currency": "GBP",
            "transaction_id": "0acea8de03ba80f83321c9aa7e865b62",
            "running_balance": {
                "currency": "GBP",
                "amount": 594.87
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-05-05T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.89,
            "currency": "GBP",
            "transaction_id": "d9a51b7ab180e4ecf6f1cc3369fb1222",
            "running_balance": {
                "currency": "GBP",
                "amount": 592.98
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-05T00:00:00Z",
            "description": "THE INSURANCE EMPO",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -5.79,
            "currency": "GBP",
            "transaction_id": "b3257bfad9a6930227793d52a096c6b4",
            "running_balance": {
                "currency": "GBP",
                "amount": 587.19
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-05-05T00:00:00Z",
            "description": "AMAZON PRIME",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon Prime",
            "amount": -7.99,
            "currency": "GBP",
            "transaction_id": "535e623bb4ff29bbeddec1e6e6fc1d8f",
            "running_balance": {
                "currency": "GBP",
                "amount": 579.2
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-05T00:00:00Z",
            "description": "VANQUIS BANK",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Vanquis Bank",
            "amount": -23.15,
            "currency": "GBP",
            "transaction_id": "7f3d87cf063a54a5c7454d2bf7a96b87",
            "running_balance": {
                "currency": "GBP",
                "amount": 556.05
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-05T00:00:00Z",
            "description": "AA INSURANCE",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [
                "Pension and insurances",
                "Buildings and contents insurance"
            ],
            "merchant_name": "Axa",
            "amount": -12.73,
            "currency": "GBP",
            "transaction_id": "8e7688e87e46c3a0e4d87ec5640bbc85",
            "running_balance": {
                "currency": "GBP",
                "amount": 543.32
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-05-05T00:00:00Z",
            "description": "WWW.TAILS.COM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Pets"
            ],
            "merchant_name": "Tails.com",
            "amount": -6.37,
            "currency": "GBP",
            "transaction_id": "122e268b914053b4f110aa8433c58760",
            "running_balance": {
                "currency": "GBP",
                "amount": 536.95
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-05T00:00:00Z",
            "description": "ANNATAR",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "d213ba25efb2101297c3cab92a0d6da7",
            "running_balance": {
                "currency": "GBP",
                "amount": 516.95
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-04T00:00:00Z",
            "description": "ANNATAR LIMITED",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": 10.0,
            "currency": "GBP",
            "transaction_id": "7552a88e828d6b87ec95c5fa7f3663cf",
            "running_balance": {
                "currency": "GBP",
                "amount": 526.95
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-04T00:00:00Z",
            "description": "ANYVAN LTD",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "da64208050007a6b9a82cb645ef4fd24",
            "running_balance": {
                "currency": "GBP",
                "amount": 596.95
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-05-04T00:00:00Z",
            "description": "ANYVAN LTD",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 59.17,
            "currency": "GBP",
            "transaction_id": "a3c0f0c271d9a0b6c1c70c1e68e07edc",
            "running_balance": {
                "currency": "GBP",
                "amount": 656.12
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-05-04T00:00:00Z",
            "description": "LNK ATM LONDON",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "079f5a625896c6c8c917f3b48bc8bc47",
            "running_balance": {
                "currency": "GBP",
                "amount": 636.12
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-05-04T00:00:00Z",
            "description": "LAPTOP DIRECT LTD.",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "7935f3a22599e15aea42187f926b14c8",
            "running_balance": {
                "currency": "GBP",
                "amount": 631.12
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-04T00:00:00Z",
            "description": "ANIMAL FRIENDS LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -3.07,
            "currency": "GBP",
            "transaction_id": "8355aa045097886f11e1da77879c9936",
            "running_balance": {
                "currency": "GBP",
                "amount": 628.05
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-05-04T00:00:00Z",
            "description": "LNK ATM WITHDRAWAL",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "ce19a704ec444fbdcca61df29e55b57d",
            "running_balance": {
                "currency": "GBP",
                "amount": 528.05
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-05-04T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 100.0,
            "currency": "GBP",
            "transaction_id": "0df416b7bd888cff8a57c9b90ef10605",
            "running_balance": {
                "currency": "GBP",
                "amount": 628.05
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-05-04T00:00:00Z",
            "description": "INTUIT LIMITED",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [
                "Uncategorized"
            ],
            "merchant_name": "Intuit",
            "amount": -3.59,
            "currency": "GBP",
            "transaction_id": "6f7d05b54e2f6383e51d1749e653fb3f",
            "running_balance": {
                "currency": "GBP",
                "amount": 624.46
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-05-04T00:00:00Z",
            "description": "PAYPAL EBAY",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": 25.0,
            "currency": "GBP",
            "transaction_id": "933d7933bc40c623418a8bba44323218",
            "running_balance": {
                "currency": "GBP",
                "amount": 649.46
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-04T00:00:00Z",
            "description": "RENT",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -130.0,
            "currency": "GBP",
            "transaction_id": "7988380d48f333b796ceb4534474a2f7",
            "running_balance": {
                "currency": "GBP",
                "amount": 519.46
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-03T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 0.89,
            "currency": "GBP",
            "transaction_id": "93c7508feb57008581ad944987d4fd36",
            "running_balance": {
                "currency": "GBP",
                "amount": 520.35
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-05-03T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "5515f729578a5593f966836fc16cb28b",
            "running_balance": {
                "currency": "GBP",
                "amount": 519.94
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-03T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 130.0,
            "currency": "GBP",
            "transaction_id": "59a7601b13b05a2f498622d64a97d834",
            "running_balance": {
                "currency": "GBP",
                "amount": 649.94
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-05-03T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 7.0,
            "currency": "GBP",
            "transaction_id": "bcb8a4f518afd0d4f8baffd7fecdbd1a",
            "running_balance": {
                "currency": "GBP",
                "amount": 656.94
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-05-03T00:00:00Z",
            "description": "AA MEMBERSHIP",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [
                "Auto & Transport",
                "Auto Payment"
            ],
            "merchant_name": "Aa Membership",
            "amount": -23.11,
            "currency": "GBP",
            "transaction_id": "df4ec024993462ad125c8a93c1d567f8",
            "running_balance": {
                "currency": "GBP",
                "amount": 633.83
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-05-03T00:00:00Z",
            "description": "VIRGIN GAMES",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Virgin Games",
            "amount": 35.49,
            "currency": "GBP",
            "transaction_id": "6047fa2309e76bf9c6756a1995af2849",
            "running_balance": {
                "currency": "GBP",
                "amount": 669.32
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-03T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "3105d9b01e69ee09d0768983dc0c377a",
            "running_balance": {
                "currency": "GBP",
                "amount": 669.31
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-03T00:00:00Z",
            "description": "GOOGLE PLAY STORE",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Electronics & Software"
            ],
            "merchant_name": "Google Play",
            "amount": -2.99,
            "currency": "GBP",
            "transaction_id": "f42b5b186fa744877797b41e83cec7d9",
            "running_balance": {
                "currency": "GBP",
                "amount": 666.32
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-03T00:00:00Z",
            "description": "TESCO EXTRA",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "1a1a89f7603648a3235c44c536955172",
            "running_balance": {
                "currency": "GBP",
                "amount": 636.32
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-03T00:00:00Z",
            "description": "RETURNED DIRECT DEBIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "3570fecc444a1abef5c6fd254f540489",
            "running_balance": {
                "currency": "GBP",
                "amount": 676.32
            },
            "meta": {
                "provider_transaction_category": "DEP"
            }
        },
        {
            "timestamp": "2021-05-03T00:00:00Z",
            "description": "LNK ATM LONDON",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -40.0,
            "currency": "GBP",
            "transaction_id": "52f9ca553b4978112ae97d8efceae101",
            "running_balance": {
                "currency": "GBP",
                "amount": 636.32
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-05-03T00:00:00Z",
            "description": "WWW.ASDA.COM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "6958428e45c60bbc9bba79fc7c983bba",
            "running_balance": {
                "currency": "GBP",
                "amount": 631.32
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-02T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 30.0,
            "currency": "GBP",
            "transaction_id": "697e3c064077656bfe8ca57ab3f9d6fa",
            "running_balance": {
                "currency": "GBP",
                "amount": 661.32
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-05-02T00:00:00Z",
            "description": "LNK ATM LONDON",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "221dbd9a27097c6fb00e92e2f8e0ea63",
            "running_balance": {
                "currency": "GBP",
                "amount": 631.32
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-05-02T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 10.0,
            "currency": "GBP",
            "transaction_id": "12933e803f003b3b08267623dbd29039",
            "running_balance": {
                "currency": "GBP",
                "amount": 641.32
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-05-02T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.59,
            "currency": "GBP",
            "transaction_id": "287aea528629efb9329d07828e4dcbde",
            "running_balance": {
                "currency": "GBP",
                "amount": 640.73
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "TALKTALK TELECOM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -46.82,
            "currency": "GBP",
            "transaction_id": "48f190d5ec6aa821d9ea148f1aa7db66",
            "running_balance": {
                "currency": "GBP",
                "amount": 593.91
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "ACCOUNT OVERDRAFT FEE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "758e68f4b2f9dc10fb6b0e3801449177",
            "running_balance": {
                "currency": "GBP",
                "amount": 593.9
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -227.0,
            "currency": "GBP",
            "transaction_id": "8a0269025a38cde050fcc7cde41b15ad",
            "running_balance": {
                "currency": "GBP",
                "amount": 366.9
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "TESCO",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Tesco",
            "amount": -39.99,
            "currency": "GBP",
            "transaction_id": "5d0a86d54d9f61555e6fc25113623eb8",
            "running_balance": {
                "currency": "GBP",
                "amount": 326.91
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "REVOLUT",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Investments",
                "Bank products"
            ],
            "merchant_name": "Revolut",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "aac8e9f2077a1cf902bc089d3cfa41bc",
            "running_balance": {
                "currency": "GBP",
                "amount": 326.9
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "CENTRA",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Income",
                "Returned Purchase"
            ],
            "merchant_name": "Centra",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "8d85d2cc512f9708dadb40388d2b3593",
            "running_balance": {
                "currency": "GBP",
                "amount": 20.2
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "DUNNES STORES",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "1e0118359e839a732e5d02b8b6f9baae",
            "running_balance": {
                "currency": "GBP",
                "amount": 118.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "SPAR",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping"
            ],
            "merchant_name": "Spar",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "0d81dde2435fc3dce49d8540df86a2c0",
            "running_balance": {
                "currency": "GBP",
                "amount": 207.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "SPAR",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping"
            ],
            "merchant_name": "Spar",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "d4759fb031b855a91fdef18d6626d1ca",
            "running_balance": {
                "currency": "GBP",
                "amount": 131.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "SUPERVALUE",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "69083af3253abfabeea065924e7e5571",
            "running_balance": {
                "currency": "GBP",
                "amount": 131.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "LIDL",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Lidl",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "12e8f83f588aeda3bf0c7205c184a15a",
            "running_balance": {
                "currency": "GBP",
                "amount": 223.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "APLLEGREEN",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "84eb44f1b1f2a20d48b2a40ec6e77a51",
            "running_balance": {
                "currency": "GBP",
                "amount": 322.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "MCDONALD'S",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Food & Dining",
                "Fast Food"
            ],
            "merchant_name": "Mcdonald's",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "6d55bcfc0238f5707f1eecb3863c851a",
            "running_balance": {
                "currency": "GBP",
                "amount": 333.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "HARVEY NORMAN",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Internet"
            ],
            "merchant_name": "Harvey Norman",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "298c1c9ab4a93bd3b70d10612a35dd65",
            "running_balance": {
                "currency": "GBP",
                "amount": 39.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "ULSTER BANK",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Ulster Bank",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "65f91ba132bfe1bd2b089bd59565a2a0",
            "running_balance": {
                "currency": "GBP",
                "amount": 38.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "CIRCLE K",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "8306184430af5750eb3aeb6f1c73d4e2",
            "running_balance": {
                "currency": "GBP",
                "amount": 57.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "BET365",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Bet365",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "8f069f821f1653d2138d32448ba8cfcb",
            "running_balance": {
                "currency": "GBP",
                "amount": 15.0
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "ACCOUNT OVERDRAFT FEE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "602f2d66e6b5b6b7e1a89ce1cd0670f1",
            "running_balance": {
                "currency": "GBP",
                "amount": 29.9
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "Sainsbury's",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Sainsbury's",
            "amount": -23.99,
            "currency": "GBP",
            "transaction_id": "28fe1c8afbbb3fa1f47b3b4f5cc0ebe0",
            "running_balance": {
                "currency": "GBP",
                "amount": 302.91
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -302.91,
            "currency": "GBP",
            "transaction_id": "4e2896828ae3a2c164ec5ad2d2970a6d",
            "running_balance": {
                "currency": "GBP",
                "amount": 302.91
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-05-01T00:00:00Z",
            "description": "NUDE FINANCE",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Nude Finance",
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "91123611846f8b0113313770259d75f1",
            "running_balance": {
                "currency": "GBP",
                "amount": 302.91
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-28T00:00:00Z",
            "description": "TSB CLEVELEYS",
            "transaction_type": "CREDIT",
            "transaction_category": "CASH",
            "transaction_classification": [],
            "amount": 420.0,
            "currency": "GBP",
            "transaction_id": "a341e0f0464e00cd88d056cebc97a97d",
            "running_balance": {
                "currency": "GBP",
                "amount": -640.42
            },
            "meta": {
                "provider_transaction_category": "CSH"
            }
        },
        {
            "timestamp": "2021-04-28T00:00:00Z",
            "description": "AMAZON INT'L",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "680c53458835bf830c044492b98f293a",
            "running_balance": {
                "currency": "GBP",
                "amount": -677.01
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-28T00:00:00Z",
            "description": "RETURNED DD",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "9073955410a0e14e03023ebd5cca15a4",
            "running_balance": {
                "currency": "GBP",
                "amount": -637.01
            },
            "meta": {
                "provider_transaction_category": "DEP"
            }
        },
        {
            "timestamp": "2021-04-28T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -32.72,
            "currency": "GBP",
            "transaction_id": "ee292511b3e2acc87a83a72e23a4851a",
            "running_balance": {
                "currency": "GBP",
                "amount": -669.73
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-04-28T00:00:00Z",
            "description": "WORKING TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "e6519d747cb529468585a9e2b1fbf53a",
            "running_balance": {
                "currency": "GBP",
                "amount": -647.31
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-04-27T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -7.93,
            "currency": "GBP",
            "transaction_id": "828114b2ef9b423ddf7cc32797102619",
            "running_balance": {
                "currency": "GBP",
                "amount": -655.24
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-04-27T00:00:00Z",
            "description": "CIRCLE UK TRADING REFUND",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.59,
            "currency": "GBP",
            "transaction_id": "8d9e641825215cbab43ddb65377740e7",
            "running_balance": {
                "currency": "GBP",
                "amount": -604.65
            },
            "meta": {
                "provider_transaction_category": "DEP"
            }
        },
        {
            "timestamp": "2021-04-27T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 15.86,
            "currency": "GBP",
            "transaction_id": "f057fdab74ae4e50997fc2029ea80c12",
            "running_balance": {
                "currency": "GBP",
                "amount": -588.79
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-04-27T00:00:00Z",
            "description": "DVLA LICENSE",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -20.56,
            "currency": "GBP",
            "transaction_id": "d1650b6aa0d1d6cdcdc2456c800eaf24",
            "running_balance": {
                "currency": "GBP",
                "amount": -609.35
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-04-27T00:00:00Z",
            "description": "E&L INSURANCE",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -2.99,
            "currency": "GBP",
            "transaction_id": "cb9616da730f63228624a1d87f093d45",
            "running_balance": {
                "currency": "GBP",
                "amount": -612.34
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-04-27T00:00:00Z",
            "description": "TESCO ONLINE SHOPPING",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -23.62,
            "currency": "GBP",
            "transaction_id": "7011bc6111a9148d2fbb06f3129cb48e",
            "running_balance": {
                "currency": "GBP",
                "amount": -635.96
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-04-27T00:00:00Z",
            "description": "PAYPAL EBAY",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -7.56,
            "currency": "GBP",
            "transaction_id": "cda6d68be4571a3cda59d6e681ca0c54",
            "running_balance": {
                "currency": "GBP",
                "amount": -643.52
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-25T00:00:00Z",
            "description": "CASHBACK",
            "transaction_type": "CREDIT",
            "transaction_category": "CASH",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "63a3bd7bd60c85f15662d51bd900b75c",
            "running_balance": {
                "currency": "GBP",
                "amount": -573.52
            },
            "meta": {
                "provider_transaction_category": "CSH"
            }
        },
        {
            "timestamp": "2021-04-25T00:00:00Z",
            "description": "MENS HEALTH SUBSCRIPTION",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -24.5,
            "currency": "GBP",
            "transaction_id": "a2f9e4b37f57931ffd82442f3e6e77c8",
            "running_balance": {
                "currency": "GBP",
                "amount": -598.02
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-04-25T00:00:00Z",
            "description": "OUTGOING DD",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "343bda826f2f7a55f2aeef4d6188d1fc",
            "running_balance": {
                "currency": "GBP",
                "amount": -608.02
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-04-25T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "d4cbe97b4aeed13d046c306c37472a1f",
            "running_balance": {
                "currency": "GBP",
                "amount": -608.43
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-04-25T00:00:00Z",
            "description": "AMAZON PLC",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "98f9698de6ff2363db6c33d1064b120a",
            "running_balance": {
                "currency": "GBP",
                "amount": -645.02
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-25T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.5,
            "currency": "GBP",
            "transaction_id": "ad30efea1ce57fa7ad6a6edcd077cce2",
            "running_balance": {
                "currency": "GBP",
                "amount": -645.52
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-04-25T00:00:00Z",
            "description": "WWW.BINGO.COM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -10.5,
            "currency": "GBP",
            "transaction_id": "95eb5b125570c4574313fc579966d1da",
            "running_balance": {
                "currency": "GBP",
                "amount": -656.02
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-23T00:00:00Z",
            "description": "MORSES CLUB LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "880ff3e6c48eb0c5604dd51d453901cf",
            "running_balance": {
                "currency": "GBP",
                "amount": -626.02
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-23T00:00:00Z",
            "description": "ANYVAN LTD",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 32.5,
            "currency": "GBP",
            "transaction_id": "0e11137fa4b6d3e318f7176dfce97f77",
            "running_balance": {
                "currency": "GBP",
                "amount": -593.52
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-04-23T00:00:00Z",
            "description": "LNK ATM WITHDRAWAL",
            "transaction_type": "DEBIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "28ab232d5a7fb3dedcfaf5e21e65baf5",
            "running_balance": {
                "currency": "GBP",
                "amount": -693.52
            },
            "meta": {
                "provider_transaction_category": "CPT"
            }
        },
        {
            "timestamp": "2021-04-23T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.57,
            "currency": "GBP",
            "transaction_id": "5474203c568bde54037e69c9881829bc",
            "running_balance": {
                "currency": "GBP",
                "amount": -695.09
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-04-23T00:00:00Z",
            "description": "WWW.METROBANK.COM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "bfb7aa41fb5aa5be6abe58877aafa86b",
            "running_balance": {
                "currency": "GBP",
                "amount": -715.09
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-22T00:00:00Z",
            "description": "AMAZON INT'L",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "ad0937b4c9979f82e91f41512a18fdbf",
            "running_balance": {
                "currency": "GBP",
                "amount": -720.09
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-22T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "32d70e9cdf0a8632bd5e29e1bc05ab32",
            "running_balance": {
                "currency": "GBP",
                "amount": -720.1
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-04-22T00:00:00Z",
            "description": "TESCO MOBILE LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Mobile Phone"
            ],
            "merchant_name": "Tesco Mobile",
            "amount": -39.25,
            "currency": "GBP",
            "transaction_id": "fa7475efdd5bee2884432b336ba83bf3",
            "running_balance": {
                "currency": "GBP",
                "amount": -759.35
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-22T00:00:00Z",
            "description": "PAYPAL WWW.EBAY.COM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Uncategorized"
            ],
            "merchant_name": "Ebay",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "075cd9074df7e771d2a6a43385e9ffe4",
            "running_balance": {
                "currency": "GBP",
                "amount": -795.94
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-22T00:00:00Z",
            "description": "OAKAM LIMITED",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Personal Services",
                "Financial Services"
            ],
            "merchant_name": "Oakam",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "e894bb9e804c24f6d2426c1e56a097eb",
            "running_balance": {
                "currency": "GBP",
                "amount": -832.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-20T00:00:00Z",
            "description": "REGENDA REDWING",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -150.0,
            "currency": "GBP",
            "transaction_id": "4ac9b58025cbfded6a396a24397b54ec",
            "running_balance": {
                "currency": "GBP",
                "amount": -982.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-20T00:00:00Z",
            "description": "WORKING TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "1362fdc76eadfc419a9b71c88d5dd3b7",
            "running_balance": {
                "currency": "GBP",
                "amount": -960.11
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-04-20T00:00:00Z",
            "description": "PARKRETAIL.CO.UK",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": -550.0,
            "currency": "GBP",
            "transaction_id": "d4347688665cf2c58d61a51f54547683",
            "running_balance": {
                "currency": "GBP",
                "amount": -1510.11
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-20T00:00:00Z",
            "description": "CHILD TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 345.13,
            "currency": "GBP",
            "transaction_id": "c78b98c637e898e28c901b2df35f4556",
            "running_balance": {
                "currency": "GBP",
                "amount": -1164.98
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-04-19T00:00:00Z",
            "description": "AMAZON PRIME",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon Prime",
            "amount": -7.99,
            "currency": "GBP",
            "transaction_id": "4c5964b40828f68e2f0b0b10f83092bf",
            "running_balance": {
                "currency": "GBP",
                "amount": -1172.97
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-19T00:00:00Z",
            "description": "CLEVELEYS.COM",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 1450.42,
            "currency": "GBP",
            "transaction_id": "ad6620f813a4d9aa9aeb047eedb7a8cb",
            "running_balance": {
                "currency": "GBP",
                "amount": 277.45
            },
            "meta": {
                "provider_transaction_category": "DEP"
            }
        },
        {
            "timestamp": "2021-04-18T00:00:00Z",
            "description": "CIRCLE UK TRADING",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 82.21,
            "currency": "GBP",
            "transaction_id": "ee2a1275c51110e7ff2b8915d98288ee",
            "running_balance": {
                "currency": "GBP",
                "amount": 359.66
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-04-17T00:00:00Z",
            "description": "MR JOHN SMITH",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 137.6,
            "currency": "GBP",
            "transaction_id": "3facd9924e05d61210ee057362f12527",
            "running_balance": {
                "currency": "GBP",
                "amount": 497.26
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-04-17T00:00:00Z",
            "description": "AA INSURANCE",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [
                "Pension and insurances",
                "Buildings and contents insurance"
            ],
            "merchant_name": "Axa",
            "amount": -12.73,
            "currency": "GBP",
            "transaction_id": "253a01c5d180aeb4f1d6684d07e828da",
            "running_balance": {
                "currency": "GBP",
                "amount": 484.53
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-04-17T00:00:00Z",
            "description": "AXA WEALTH LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -40.0,
            "currency": "GBP",
            "transaction_id": "d4f3be7ef3d98864e4c535c7a8bbc32e",
            "running_balance": {
                "currency": "GBP",
                "amount": 444.53
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-04-17T00:00:00Z",
            "description": "MORRISONS PETROL",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Auto & Transport",
                "Gas & Fuel"
            ],
            "merchant_name": "Morrisons Petrol Station",
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "f47983a9283bc8a158521b75712b589d",
            "running_balance": {
                "currency": "GBP",
                "amount": 424.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-17T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.63,
            "currency": "GBP",
            "transaction_id": "81a110ce6e09d841833e6348c8aa8146",
            "running_balance": {
                "currency": "GBP",
                "amount": 423.9
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-04-17T00:00:00Z",
            "description": "TAILSCOM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -6.37,
            "currency": "GBP",
            "transaction_id": "c967f7cc8e3800f6a6868b1a960ba013",
            "running_balance": {
                "currency": "GBP",
                "amount": 417.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-15T00:00:00Z",
            "description": "ASDA STOES LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -32.0,
            "currency": "GBP",
            "transaction_id": "693c142e1b294721eb9e92ca98c90420",
            "running_balance": {
                "currency": "GBP",
                "amount": 385.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-15T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.55,
            "currency": "GBP",
            "transaction_id": "1bb3369f642c913cabca9053de697efb",
            "running_balance": {
                "currency": "GBP",
                "amount": 384.98
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-04-15T00:00:00Z",
            "description": "AMAZON BLACK FRIDAY",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -15.45,
            "currency": "GBP",
            "transaction_id": "981db84ca506d4d4174df748e3f900c5",
            "running_balance": {
                "currency": "GBP",
                "amount": 369.53
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-15T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.5,
            "currency": "GBP",
            "transaction_id": "02efffeb22612d6ea97b03cefaf99d6c",
            "running_balance": {
                "currency": "GBP",
                "amount": 369.03
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-04-15T00:00:00Z",
            "description": "TESCO EXTRA",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -3.59,
            "currency": "GBP",
            "transaction_id": "1cb363fdb995f196b64aad8242d2b243",
            "running_balance": {
                "currency": "GBP",
                "amount": 365.44
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-15T00:00:00Z",
            "description": "PAYPAL EBAY",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "1c18a2ffcd7955d17b8c5062946bb55b",
            "running_balance": {
                "currency": "GBP",
                "amount": 355.44
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-14T00:00:00Z",
            "description": "PAYPAL BETFRED",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Betfred",
            "amount": -2.0,
            "currency": "GBP",
            "transaction_id": "0aa9f1b1fb0a82e3105bb0b294056109",
            "running_balance": {
                "currency": "GBP",
                "amount": 353.44
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-14T00:00:00Z",
            "description": "MT SECURETRADE LIM",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.5,
            "currency": "GBP",
            "transaction_id": "ca31d84285665c38bc9ef71dd20e5948",
            "running_balance": {
                "currency": "GBP",
                "amount": 332.94
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-14T00:00:00Z",
            "description": "MT SECURETRADE LIM",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": 43.5,
            "currency": "GBP",
            "transaction_id": "5b2052be8379d68916a0b5d770561161",
            "running_balance": {
                "currency": "GBP",
                "amount": 376.44
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-12T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "7c1c97366b46f0fc6cfa6417d368352a",
            "running_balance": {
                "currency": "GBP",
                "amount": 376.03
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-04-12T00:00:00Z",
            "description": "AA MEMBERSHIP",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [
                "Auto & Transport",
                "Auto Payment"
            ],
            "merchant_name": "Aa Membership",
            "amount": -23.11,
            "currency": "GBP",
            "transaction_id": "11c3728c77f005313d0fa6b7507869f4",
            "running_balance": {
                "currency": "GBP",
                "amount": 352.92
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-04-11T00:00:00Z",
            "description": "CIRCLE UK TRADING",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.0,
            "currency": "GBP",
            "transaction_id": "9981face4df194b0dcee84ed2d87e3a5",
            "running_balance": {
                "currency": "GBP",
                "amount": 402.92
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-04-11T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 50.0,
            "currency": "GBP",
            "transaction_id": "37a5baf747edc9c95f7c49337dd7affd",
            "running_balance": {
                "currency": "GBP",
                "amount": 452.92
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-04-11T00:00:00Z",
            "description": "WORKING TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "f718838f0d6dc66e1a1b301e9e08b8d7",
            "running_balance": {
                "currency": "GBP",
                "amount": 475.34
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-04-11T00:00:00Z",
            "description": "BUTLINS HOLIDAYS",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Fees & Charges",
                "Service Fee"
            ],
            "merchant_name": "Butlin's",
            "amount": -17.0,
            "currency": "GBP",
            "transaction_id": "1f26eaf0e3afdd294bc8aece250a4488",
            "running_balance": {
                "currency": "GBP",
                "amount": 458.34
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-10T00:00:00Z",
            "description": "AXA WEALTH LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -40.0,
            "currency": "GBP",
            "transaction_id": "da15fe4bad84564078d0aea0e59f4a7b",
            "running_balance": {
                "currency": "GBP",
                "amount": 418.34
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-04-10T00:00:00Z",
            "description": "ASDA STORES LTD",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "4dcd9bcf1627d7793ee8b6c91abfc1b8",
            "running_balance": {
                "currency": "GBP",
                "amount": 413.34
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-10T00:00:00Z",
            "description": "RETURNED DD",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "62806cf0a2b8525ba2e6a8e9f6655575",
            "running_balance": {
                "currency": "GBP",
                "amount": 453.34
            },
            "meta": {
                "provider_transaction_category": "DEP"
            }
        },
        {
            "timestamp": "2021-04-10T00:00:00Z",
            "description": "CIRCLE UK TRADING",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.36,
            "currency": "GBP",
            "transaction_id": "97be27a5989bff952eed1eb0a6347bfe",
            "running_balance": {
                "currency": "GBP",
                "amount": 503.7
            },
            "meta": {
                "provider_transaction_category": "FPI"
            }
        },
        {
            "timestamp": "2021-04-10T00:00:00Z",
            "description": "OUTGOING DD",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "4afe7b3dd2ae541a2838c95dde8c924e",
            "running_balance": {
                "currency": "GBP",
                "amount": 473.7
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-04-10T00:00:00Z",
            "description": "EDF ENERGY",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [
                "Bills and Utilities",
                "Utilities"
            ],
            "amount": -24.5,
            "currency": "GBP",
            "transaction_id": "c01eaa8362f7ccdd10df301d3bad55a4",
            "running_balance": {
                "currency": "GBP",
                "amount": 449.2
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-04-09T00:00:00Z",
            "description": "DVLA LICENCE",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -23.62,
            "currency": "GBP",
            "transaction_id": "3dddb5f7ae066991afbd63d1bc6d6f55",
            "running_balance": {
                "currency": "GBP",
                "amount": 425.58
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-04-09T00:00:00Z",
            "description": "DVLA TAX",
            "transaction_type": "DEBIT",
            "transaction_category": "DIRECT_DEBIT",
            "transaction_classification": [],
            "amount": -20.56,
            "currency": "GBP",
            "transaction_id": "08d793c359c163c63d5bf8c347bb12f7",
            "running_balance": {
                "currency": "GBP",
                "amount": 405.02
            },
            "meta": {
                "provider_transaction_category": "DD"
            }
        },
        {
            "timestamp": "2021-04-09T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "413b05cb52118f90c81ac215b0592373",
            "running_balance": {
                "currency": "GBP",
                "amount": 404.61
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-04-09T00:00:00Z",
            "description": "MS JANE DOE",
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "d926a5910daf39249fd8e01f163e742e",
            "running_balance": {
                "currency": "GBP",
                "amount": 474.61
            },
            "meta": {
                "provider_transaction_category": "TFR"
            }
        },
        {
            "timestamp": "2021-04-08T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "1ac5dc0cd88560e73dae2781f0670671",
            "running_balance": {
                "currency": "GBP",
                "amount": 474.6
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-04-08T00:00:00Z",
            "description": "WORKING TAX CREDIT",
            "transaction_type": "CREDIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "68c98139e0748efeb1d446b18d27fb76",
            "running_balance": {
                "currency": "GBP",
                "amount": 497.02
            },
            "meta": {
                "provider_transaction_category": "BGC"
            }
        },
        {
            "timestamp": "2021-04-08T00:00:00Z",
            "description": "CREDITREPORTSERVIC",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -14.99,
            "currency": "GBP",
            "transaction_id": "87bc0693a29382f28ad884149eb857df",
            "running_balance": {
                "currency": "GBP",
                "amount": 482.03
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-08T00:00:00Z",
            "description": "REGENDA REDWING RE",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "f92e99a77c5ddd7dde79141add0bf494",
            "running_balance": {
                "currency": "GBP",
                "amount": 382.03
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-08T00:00:00Z",
            "description": "BROADWAY GAMING LT CD 0315",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Casino"
            ],
            "merchant_name": "Broadway Gaming",
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "7301317eb49b1e9e22e84544355964fc",
            "running_balance": {
                "currency": "GBP",
                "amount": 372.03
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": "2021-04-08T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.69,
            "currency": "GBP",
            "transaction_id": "ecfc0dd333b0e01ea792645fd0a52527",
            "running_balance": {
                "currency": "GBP",
                "amount": 371.34
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-04-08T00:00:00Z",
            "description": "SAVE THE CHANGE",
            "transaction_type": "DEBIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.04,
            "currency": "GBP",
            "transaction_id": "31e53755bca8e1a8955158b8daa5e2e4",
            "running_balance": {
                "currency": "GBP",
                "amount": 370.3
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-04-08T00:00:00Z",
            "description": "BOOKER LIMITED BLA",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Uncategorized",
                "Cash & ATM"
            ],
            "merchant_name": "Booker Wholesale",
            "amount": -24.31,
            "currency": "GBP",
            "transaction_id": "0a10485dcadf3afa0b56d7b834c96aba",
            "running_balance": {
                "currency": "GBP",
                "amount": 345.99
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        }
    ],
    "status": "Succeeded"
}

export const MockDirectDebits = {
    "results": [
        {
            "direct_debit_id": "11fc25c96467f4221daf499983c0b8ee",
            "timestamp": "2021-07-05T02:04:18.169Z",
            "name": "EE",
            "status": "Active",
            "previous_payment_amount": 25.5,
            "currency": "GBP",
            "meta": {
                "provider_account_id": "1000000000000000002",
                "provider_mandate_identification": "6"
            }
        },
        {
            "direct_debit_id": "684a18d78e098714202e159ebf418e48",
            "timestamp": "2021-07-05T02:04:18.169Z",
            "name": "PAYPAL",
            "status": "Active",
            "previous_payment_timestamp": "2021-06-10T03:04:18.169Z",
            "meta": {
                "provider_account_id": "2000000000000000002",
                "provider_mandate_identification": "9"
            }
        },
        {
            "direct_debit_id": "089c01e847ba8082d97dcb19ab3cef26",
            "timestamp": "2021-07-05T02:04:18.169Z",
            "name": "BT INTERNET",
            "previous_payment_timestamp": "2021-06-15T03:04:18.169Z",
            "previous_payment_amount": 16.99,
            "currency": "GBP",
            "meta": {
                "provider_account_id": "3000000000000000002",
                "provider_mandate_identification": "7"
            }
        }
    ],
    "status": "Succeeded"
}

export const MockStandingOrders = {
    "results": [
        {
            "frequency": "IntrvlMnthDay:01:26",
            "status": "Active",
            "timestamp": "2019-07-24T11:29:47Z",
            "currency": "GBP",
            "meta": {
                "provider_account_id": "12345ca1-18fd-4e6b-891e-0597cac6bb8c",
                "provider_standing_order_id": "67020711"
            },
            "next_payment_date": "2021-08-05T03:04:21.319Z",
            "next_payment_amount": 500.0,
            "first_payment_date": "2021-06-25T03:04:21.319Z",
            "first_payment_amount": 535.0,
            "final_payment_date": "2022-07-05T03:04:21.319Z",
            "final_payment_amount": 500.0,
            "reference": "Savings"
        },
        {
            "frequency": "IntrvlMnthDay:01:30",
            "status": "Active",
            "timestamp": "2019-07-24T11:29:47Z",
            "currency": "GBP",
            "meta": {
                "provider_account_id": "12345ca1-18fd-4e6b-891e-0597cac6bb8c"
            },
            "next_payment_date": "2021-07-25T03:04:21.32Z",
            "next_payment_amount": 1500.0,
            "first_payment_date": "2020-12-05T03:04:21.32Z",
            "first_payment_amount": 1500.0,
            "final_payment_date": "2022-02-05T03:04:21.32Z",
            "final_payment_amount": 1500.0,
            "payee": "JOHN DOE",
            "reference": "MONZO"
        }
    ],
    "status": "Succeeded"
}