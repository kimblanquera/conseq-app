import { CardAPIResult, ICard } from "../models/card";
import { TransactionAPIResult } from "../models/shared";

export const MockCardList: CardAPIResult = {
    "results": [
        {
            "account_id": "2cbf9b6063102763ccbe3ea62f1b3e72",
            "card_network": "MASTERCARD",
            "card_type": "CREDIT",
            "currency": "GBP",
            "display_name": "CREDIT CARD 1",
            "partial_card_number": "1000",
            "name_on_card": "John Doe ",
            "update_timestamp": new Date("2021-07-05T00:41:41.1160985Z"),
            "provider": {
                "display_name": "MOCK",
                "provider_id": "mock",
                "logo_uri": "https://truelayer-client-logos.s3-eu-west-1.amazonaws.com/banks/banks-icons/mock-icon.svg"
            }
        },
        {
            "account_id": "328f557c68aebd532cbbd05ce5bcb6c8",
            "card_network": "VISA",
            "card_type": "CREDIT",
            "currency": "GBP",
            "display_name": "CREDIT CARD 2",
            "partial_card_number": "2000",
            "name_on_card": "John Doe ",
            "update_timestamp": new Date("2021-07-05T00:41:41.116106Z"),
            "provider": {
                "display_name": "MOCK",
                "provider_id": "mock",
                "logo_uri": "https://truelayer-client-logos.s3-eu-west-1.amazonaws.com/banks/banks-icons/mock-icon.svg"
            }
        }
    ],
    "status": "Succeeded"
}

export const MockSingleCard: CardAPIResult = {
    "results": [
        {
            "account_id": "2cbf9b6063102763ccbe3ea62f1b3e72",
            "card_network": "MASTERCARD",
            "card_type": "CREDIT",
            "currency": "GBP",
            "display_name": "CREDIT CARD 1",
            "partial_card_number": "1000",
            "name_on_card": "John Doe ",
            "update_timestamp": new Date("2021-07-05T03:03:51.1219812Z"),
            "provider": {
                "display_name": "MOCK",
                "provider_id": "mock",
                "logo_uri": "https://truelayer-client-logos.s3-eu-west-1.amazonaws.com/banks/banks-icons/mock-icon.svg"
            }
        }
    ],
    "status": "Succeeded"
}

export const MockCardTransactions: TransactionAPIResult = {
    "results": [
        {
            "timestamp": new Date("2021-07-05T00:00:00Z"),
            "description": "LNK ATM WITHDRAWAL",
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -60.0,
            "currency": "GBP",
            "transaction_id": "729f771e2403d7ae226187a74e89b3c5",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.89,
            "currency": "GBP",
            "transaction_id": "e29d95e5aff9f34c591415ee14d2fbce",
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
            "description": "AMAZON PRIME",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                {
                    "classification_category": "Shopping",
                    "sub_classification_categories": [
                        "Books",
                        "Electronics & Software",
                        "Hobbies",
                    ]
                }
            ],
            "merchant_name": "Amazon Prime",
            "amount": -7.99,
            "currency": "GBP",
            "transaction_id": "9f7ba83db3d5740a1e097b6d2f987997",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Vanquis Bank",
            "amount": -23.15,
            "currency": "GBP",
            "transaction_id": "f7a2071e2b72cdb3195d9e6d50a4a7bb",
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
            "description": "WWW.TAILS.COM",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Pets"
            ],
            "merchant_name": "Tails.com",
            "amount": -6.37,
            "currency": "GBP",
            "transaction_id": "ec13d1db0d4ed21cafdd4edb533b93c4",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "d91e7007561d40a562123128566d85d4",
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
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": 10.0,
            "currency": "GBP",
            "transaction_id": "e7d26ab9c3ade1a92038fe21e3a59f83",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "be03852160e8a87605a5ad578f6f52ba",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 59.17,
            "currency": "GBP",
            "transaction_id": "5a49aa7f7eba93f90f77d0f6703de522",
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
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "06b9766ba71155b3fc2b7c2b224676fd",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "66f16788c7b96ecc748ba56976895156",
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
            "description": "LNK ATM WITHDRAWAL",
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "126ec060419335acea623c859e62257b",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 100.0,
            "currency": "GBP",
            "transaction_id": "00adc74e44f920c8d37f7ae9c229f8e5",
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
            "description": "PAYPAL EBAY",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": 25.0,
            "currency": "GBP",
            "transaction_id": "01a0de998a9bca8f89bfa094d28ff3e1",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -130.0,
            "currency": "GBP",
            "transaction_id": "6b3f72a1a0b939178935295c37876b50",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 0.89,
            "currency": "GBP",
            "transaction_id": "46c733b32d3e2a0b3c51fae460dc3401",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "85228f82240dd14610718b5479b26c7e",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 130.0,
            "currency": "GBP",
            "transaction_id": "6dcf10f97512ff2a5f685bbc8bf2d720",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 7.0,
            "currency": "GBP",
            "transaction_id": "a111208c0f82e7c7c1546781caaee204",
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
            "description": "VIRGIN GAMES",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Virgin Games",
            "amount": 35.49,
            "currency": "GBP",
            "transaction_id": "cb6aff47a3a4634196b69cfdf4c3099d",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "cd0c08762badea54c293dfaf17567258",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Electronics & Software"
            ],
            "merchant_name": "Google Play",
            "amount": -2.99,
            "currency": "GBP",
            "transaction_id": "b4f2130059aec67bb621af5c88eee2bc",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "f1ec80e491efde206f3debb9e570ddc3",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "bd2cebd9df0c40598570442448728326",
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
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -40.0,
            "currency": "GBP",
            "transaction_id": "8d9fa1573ef6134f1dfdae29fd60f42a",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "6c6b05329444d249762a5df4234e61c1",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 30.0,
            "currency": "GBP",
            "transaction_id": "822a167c0a09bba733f770af91cda905",
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
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "a498a888246ba45ea99fdca24677815c",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 10.0,
            "currency": "GBP",
            "transaction_id": "b7d4b273bfbe748bc2fd67ddd18c6de1",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.59,
            "currency": "GBP",
            "transaction_id": "a24538ae2e950a106e1e9becdf755841",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -46.82,
            "currency": "GBP",
            "transaction_id": "2a4905baac8d8daf592be36575e278d4",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "95486eb134454bb80c7817480179940d",
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
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -227.0,
            "currency": "GBP",
            "transaction_id": "5ddbcf4d05bb042e7c472b3fec0ef146",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Tesco",
            "amount": -39.99,
            "currency": "GBP",
            "transaction_id": "1971de0557fa49f7678aaa200bef2cd5",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Investments",
                "Bank products"
            ],
            "merchant_name": "Revolut",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "81460cc386af2608dcd02090e28634ad",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Income",
                "Returned Purchase"
            ],
            "merchant_name": "Centra",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "fb170d991faebf6f9e7e10992393efa4",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "daee51d513bd6c149ad2cb92db42a461",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping"
            ],
            "merchant_name": "Spar",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "afcdacc449083dc9463fc52c2b15bb7f",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping"
            ],
            "merchant_name": "Spar",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "721fbdb4c8e8d740a0987acbfd9a0551",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "39b1b9ad6254607c35a8108217eca10c",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Lidl",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "04b45cac50c351ad4e3fbd3c35e03997",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "59d10b77774a72bc0d9e9a748cb21147",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Food & Dining",
                "Fast Food"
            ],
            "merchant_name": "Mcdonald's",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "42be426fa2b38ba13ce691b0acff452d",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Internet"
            ],
            "merchant_name": "Harvey Norman",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "2fc4a338d804594575630c7ec1033777",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Ulster Bank",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "ead6cf055e6500b76f2bd2e1608dbc0d",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "add3de068170a016647925d8a2f36299",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Bet365",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "e6751ee8466e60bd85ad2d9099b70084",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "28e7722a32dc7fdc00607900dfa092f8",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Sainsbury's",
            "amount": -23.99,
            "currency": "GBP",
            "transaction_id": "386dfba2daeddd65a1e2dfef18eab787",
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
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -302.91,
            "currency": "GBP",
            "transaction_id": "b98265f4af99cde9cd4a8d3c2ca8be82",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Nude Finance",
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "eb9a06604b4cb8e4e14a9db3771b1f67",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CASH",
            "transaction_classification": [],
            "amount": 420.0,
            "currency": "GBP",
            "transaction_id": "2763b191bfcd0bd6dd4f7ec62572b770",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "0979b120f8ff5b54b164316ea14e3cfe",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "0b88d93aea04b375adeb03b0ab6ace2f",
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
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -32.72,
            "currency": "GBP",
            "transaction_id": "ffd0aab3b75c4f4ae3916da014befbe2",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "af38f86878056b871f19b132efab66ce",
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
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -7.93,
            "currency": "GBP",
            "transaction_id": "4ea4513a10a5d7d3185a7e5c9789e68f",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.59,
            "currency": "GBP",
            "transaction_id": "1aca033d0e19944ab016dd61d0c18599",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 15.86,
            "currency": "GBP",
            "transaction_id": "07beb1a1e986064663fc800046a92668",
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
            "description": "PAYPAL EBAY",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -7.56,
            "currency": "GBP",
            "transaction_id": "e6c559990d7df4abe49692057dff8b51",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CASH",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "706e2f104229cfab9d2953d2b5710d0a",
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
            "description": "SAVE THE CHANGE",
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "47e3b19b20c7310ab061004fcfb390f9",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "417d3a432f324cb773b6592f5ec40d82",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.5,
            "currency": "GBP",
            "transaction_id": "8859d45b2cb628bd56465a7d712b2444",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -10.5,
            "currency": "GBP",
            "transaction_id": "570db2e0f6c9a355a72bd3412f71c71d",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "5d6dace7bf5bbc123ea2b4266c24d789",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 32.5,
            "currency": "GBP",
            "transaction_id": "0b4eed8c9c737d294a04ebc3c622b83d",
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
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "df9860d42e52c4b8a658435597dd15ed",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.57,
            "currency": "GBP",
            "transaction_id": "7a1919e74a2ce2549d131df42de32bd8",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "139b5f22be1ac441309a7fcbc6b2ceb8",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "dc267c4a9c5994f82a88341984cc5258",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "c5ce07b8ef3a88ef3d79c46f1f473e97",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Mobile Phone"
            ],
            "merchant_name": "Tesco Mobile",
            "amount": -39.25,
            "currency": "GBP",
            "transaction_id": "0835512c877c2e0b944c679a62380b18",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Uncategorized"
            ],
            "merchant_name": "Ebay",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "d24a7890a85e14852c1c92d9d1e4fe36",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Personal Services",
                "Financial Services"
            ],
            "merchant_name": "Oakam",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "7540dfcd66ef03e3ec8c594f446dfce2",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -150.0,
            "currency": "GBP",
            "transaction_id": "77e8960196cb78722080370e53f1a078",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "de3796e27eeb0958d7ab7af5a7808e4f",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": -550.0,
            "currency": "GBP",
            "transaction_id": "d846a23687aca9224fd4228640d5797e",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 345.13,
            "currency": "GBP",
            "transaction_id": "1b10b4d201a3b277fdbddd75732a00dc",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon Prime",
            "amount": -7.99,
            "currency": "GBP",
            "transaction_id": "2b1b21d24ade2f732bcead3ce7d0b54a",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 1450.42,
            "currency": "GBP",
            "transaction_id": "f1cdb76bee4378e1b51d54019f8f9cc4",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 82.21,
            "currency": "GBP",
            "transaction_id": "ff50bc9597ed42f31c212e8cdc99b8fc",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 137.6,
            "currency": "GBP",
            "transaction_id": "a4b68e6d509cb83160883c6732065098",
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
            "description": "MORRISONS PETROL",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Auto & Transport",
                "Gas & Fuel"
            ],
            "merchant_name": "Morrisons Petrol Station",
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "57de50ecbcfe5cabd81ee207631e909a",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.63,
            "currency": "GBP",
            "transaction_id": "20a963361d31bdf514a4f89e82236f29",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -6.37,
            "currency": "GBP",
            "transaction_id": "b6fa1f8d02a12aaffb310dcdf022f931",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -32.0,
            "currency": "GBP",
            "transaction_id": "2d6fba1cdbaff9e50ba7ab341952c8fe",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.55,
            "currency": "GBP",
            "transaction_id": "9c4f953bda77a8ba97c4b09fe49c3e74",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -15.45,
            "currency": "GBP",
            "transaction_id": "a9f29d72733a39a7f1108b195635a419",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.5,
            "currency": "GBP",
            "transaction_id": "a862a0f234a06e4b1d9ac3ba43367dc0",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -3.59,
            "currency": "GBP",
            "transaction_id": "4d696b712f65f68b3defcf3f03b99184",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "5304269e57a7bcdb771258b037068efb",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Betfred",
            "amount": -2.0,
            "currency": "GBP",
            "transaction_id": "b9503cd0cc4dd9ccd5220cd1988a2973",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.5,
            "currency": "GBP",
            "transaction_id": "81cd222c77f49eb11b72a82478a07dbd",
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
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": 43.5,
            "currency": "GBP",
            "transaction_id": "9c1eab16d7f78097cafdf910722069c5",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "0e88e6d8da77ae01d383973f9965be76",
            "running_balance": {
                "currency": "GBP",
                "amount": 376.03
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-06-11T00:00:00Z",
            "description": "CIRCLE UK TRADING",
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.0,
            "currency": "GBP",
            "transaction_id": "c06ebf941ec717e2347b7d17dd7b3519",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 50.0,
            "currency": "GBP",
            "transaction_id": "6c4d095dc3ff7bf2bf937cf1b8231124",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "f7c5104018c34469a007826f2bd03ed8",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Fees & Charges",
                "Service Fee"
            ],
            "merchant_name": "Butlin's",
            "amount": -17.0,
            "currency": "GBP",
            "transaction_id": "d126e9985a2a014f1ba57021f9210261",
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
            "description": "ASDA STORES LTD",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "a62b5fbf87d4a257e49f21951074e627",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "7ad15089d7fdafa1fe853390a7ba5b0e",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.36,
            "currency": "GBP",
            "transaction_id": "4995fdd7b55e65c09a37693992dfa45f",
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
            "description": "EDF ENERGY",
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [
                "Bills and Utilities",
                "Utilities"
            ],
            "amount": -24.5,
            "currency": "GBP",
            "transaction_id": "ab01ff0566f1b533bffb71f249574dfe",
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
            "description": "SAVE THE CHANGE",
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "5db06f7cb139f3c35d2db6686d03d34c",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "f39b721a4a4b10ee2fbdc95bfd6dd3ee",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "804d73615f76a6841c43bb3fdae0e7c2",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "6bf1a319fafd513e46a9db8fd0a54d46",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -14.99,
            "currency": "GBP",
            "transaction_id": "fe2ff7a26949fbeb31d77156e83d5492",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "fa593ea20a10737f7a337fc025440650",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Casino"
            ],
            "merchant_name": "Broadway Gaming",
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "5029982bfa8cc5e8504699ce7a902df8",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.69,
            "currency": "GBP",
            "transaction_id": "aaa528efc1a1e1c317f4fe48d7bd0579",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.04,
            "currency": "GBP",
            "transaction_id": "388c6064968bc05ebffaa6ba8a692987",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Uncategorized",
                "Cash & ATM"
            ],
            "merchant_name": "Booker Wholesale",
            "amount": -24.31,
            "currency": "GBP",
            "transaction_id": "fa132e29c09ca5cacc4de0e257c8b812",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -82.37,
            "currency": "GBP",
            "transaction_id": "e8ac695483f93aedb9d84390c7d8049e",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.15,
            "currency": "GBP",
            "transaction_id": "c5e9123f8707474577c7dfdd1ff18f3a",
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
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -70.0,
            "currency": "GBP",
            "transaction_id": "45fce5fb756ae1e13c976a559ba6c44b",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Mobile Phone"
            ],
            "merchant_name": "Tesco Mobile",
            "amount": -28.25,
            "currency": "GBP",
            "transaction_id": "33ddcc65e624a25d816595123708d0fb",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "98379cbe6b9f8b220e3ba867aa9c63db",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Morrisons",
            "amount": -12.89,
            "currency": "GBP",
            "transaction_id": "ee92e6618e407e49652d6e83ee974487",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Mobile Phone"
            ],
            "merchant_name": "Tesco Mobile",
            "amount": -50.0,
            "currency": "GBP",
            "transaction_id": "71adc5fc9d134d8c53ba5acf7c1e0056",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Home Bargains",
            "amount": -9.71,
            "currency": "GBP",
            "transaction_id": "7d155e467a2b59dd390af47f6ffc8fd8",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 346.35,
            "currency": "GBP",
            "transaction_id": "270421c46573e1449acae94ca704eac1",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 137.6,
            "currency": "GBP",
            "transaction_id": "e3f2b8c533c780dbc8d113275770520a",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 61.89,
            "currency": "GBP",
            "transaction_id": "fa820cdaf4664a0730352ebe5d006301",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "6d29d9aab8bef8e5050ecc77e39610ba",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon Prime",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "18882cfe9bd4f16b2399f1e51a8d26af",
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
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -60.0,
            "currency": "GBP",
            "transaction_id": "6a32701d9948ee0bb83cc15672c9e4f3",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.89,
            "currency": "GBP",
            "transaction_id": "ffdb142308ee0b9055f93a21723274d2",
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
            "description": "AMAZON PRIME",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon Prime",
            "amount": -7.99,
            "currency": "GBP",
            "transaction_id": "eb11d3f35b648764af689a660e23a6b9",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Vanquis Bank",
            "amount": -23.15,
            "currency": "GBP",
            "transaction_id": "b3f2f6a41719d27d5fa0db8c3a184f48",
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
            "description": "WWW.TAILS.COM",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Pets"
            ],
            "merchant_name": "Tails.com",
            "amount": -6.37,
            "currency": "GBP",
            "transaction_id": "d73902a760bd4333d93735f8d4c3f10d",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "6d8c0e088bc781490db4320b52d08d4f",
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
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": 10.0,
            "currency": "GBP",
            "transaction_id": "3e23a9fc2f20b550529b59e73479d8f1",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "8e817c93fcf4252106930529a0e6252c",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 59.17,
            "currency": "GBP",
            "transaction_id": "59d93625d819037200a32d1bf9c93758",
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
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "92bdd303ea69b2da9bdc40cacf0e2d86",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "40eeeafd72b43ef51cb18aefe362937f",
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
            "description": "LNK ATM WITHDRAWAL",
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "2bdc09ed9fe7bcf1f564346eb9c5b76d",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 100.0,
            "currency": "GBP",
            "transaction_id": "2af62668ff31ff2bca416a21a6e83654",
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
            "description": "PAYPAL EBAY",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": 25.0,
            "currency": "GBP",
            "transaction_id": "754a8bd3a7a9d21a43e3735a6185af61",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -130.0,
            "currency": "GBP",
            "transaction_id": "532dd57282b8a8cb3f6b4b6c8e3644d7",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 0.89,
            "currency": "GBP",
            "transaction_id": "f608ad706c5b62ecb66874d909dfedf7",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "0ece2b928da30344b2b98db4ca522a0d",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 130.0,
            "currency": "GBP",
            "transaction_id": "7712cf7213c947c735b369678e6b4d96",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 7.0,
            "currency": "GBP",
            "transaction_id": "e5bc252195a4a0df705614622b30c73a",
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
            "description": "VIRGIN GAMES",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Virgin Games",
            "amount": 35.49,
            "currency": "GBP",
            "transaction_id": "3a60870c9ca96074b00a78f2a49d193c",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "32cc5a51bcfdde891eb6cfa6d1574b54",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Electronics & Software"
            ],
            "merchant_name": "Google Play",
            "amount": -2.99,
            "currency": "GBP",
            "transaction_id": "f9f247e972f76814d405cccc6fe7621c",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "6c1da516c0cba87fb6cf162eab97ca24",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "0c6b384cbc244ca050f55854eab0d5e3",
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
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -40.0,
            "currency": "GBP",
            "transaction_id": "315ea01eedc588ea7e4392963b0ae0da",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "7c8c0fd542d688c562866d0ce1e4f679",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 30.0,
            "currency": "GBP",
            "transaction_id": "0658e6bfca7a1595471866b2674652b7",
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
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "061f77bb8ec6fecd8212f5a1d5162e45",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 10.0,
            "currency": "GBP",
            "transaction_id": "202a583da8878200cac23cab7b33e75e",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.59,
            "currency": "GBP",
            "transaction_id": "810add1fa5258cd381cb459de72057b0",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -46.82,
            "currency": "GBP",
            "transaction_id": "d39c1b781eb0a24e38b4000463bdb3eb",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "bd1ba7627bcc3a08a82705227d73d1b5",
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
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -227.0,
            "currency": "GBP",
            "transaction_id": "e56ccc27f7ad478f0814dc18192aa871",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Tesco",
            "amount": -39.99,
            "currency": "GBP",
            "transaction_id": "3608cad3736bc8a53d2d77b48a31a0f9",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Investments",
                "Bank products"
            ],
            "merchant_name": "Revolut",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "8ac13f23b042db6891f6243b38fe782e",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Income",
                "Returned Purchase"
            ],
            "merchant_name": "Centra",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "70f8c3c0096f6ed0c82a5ac7797296cc",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "9d8732d3cc063b5cf146e45b94ef3566",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping"
            ],
            "merchant_name": "Spar",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "351a7411fe829fab2d21c8d62c4d2347",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping"
            ],
            "merchant_name": "Spar",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "f5c4ec9b11e284ff91e654f72cf883e8",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "e0d035a629611bc29631c76fa9b61453",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Lidl",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "6a8080c3bf3a7a5f3715e431c1313110",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "9570494741f82e928b0492673e38cf4a",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Food & Dining",
                "Fast Food"
            ],
            "merchant_name": "Mcdonald's",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "05c358ff89320b444ec4323f852fbc6d",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Internet"
            ],
            "merchant_name": "Harvey Norman",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "7791b1d2d1855e8182cac74b5e70e078",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Ulster Bank",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "dbb5ee90fd5c88afad55ce2220172030",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "f11edf84d1b91e3c1221e0a482da0800",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Bet365",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "2a2956ba2b0333ace5e95609ae49063f",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "388417a49a81fd46e562f589f66d9450",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Sainsbury's",
            "amount": -23.99,
            "currency": "GBP",
            "transaction_id": "f9e4c415c83e972727f1b0f5039770bf",
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
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -302.91,
            "currency": "GBP",
            "transaction_id": "c03010554c681319fedf3d283a482ef5",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Nude Finance",
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "d1653130f3839d016cf79d24d48a9dda",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CASH",
            "transaction_classification": [],
            "amount": 420.0,
            "currency": "GBP",
            "transaction_id": "45e853eeb7ea7fd04019b8fdce157a1b",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "c543d0676009a32f6fe722ac2804dbc7",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "043661efdcde95c660e90849df9eeb5a",
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
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -32.72,
            "currency": "GBP",
            "transaction_id": "15d54ea13e803a94c55d4553c9329b9e",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "4208599833bd65c533d1b91894a8be12",
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
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -7.93,
            "currency": "GBP",
            "transaction_id": "21188974f34c5aea6f520c55ca45d368",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.59,
            "currency": "GBP",
            "transaction_id": "593426db76d376490a9dfec44d795261",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 15.86,
            "currency": "GBP",
            "transaction_id": "9e20e371c9db7ae46e1fb9b15e9b358c",
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
            "description": "PAYPAL EBAY",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -7.56,
            "currency": "GBP",
            "transaction_id": "6a7d31406aa18310db5c1346e63b7a03",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CASH",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "22716971b2e84d64e2afcce2a18d7786",
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
            "description": "SAVE THE CHANGE",
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "31eb412e73776a7db777724f4ad75417",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "aacd63fcb0cb237f0fb91b2529a47ad4",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.5,
            "currency": "GBP",
            "transaction_id": "c64853b4928b4d5a21e78a10109c6efe",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -10.5,
            "currency": "GBP",
            "transaction_id": "ba5e1b7cc66574f83e23e04dded136e6",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "4d68e4c3ac4b1ce0d6262d0fd992f4e8",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 32.5,
            "currency": "GBP",
            "transaction_id": "3cfe4fc39953c46a6c851719f88dee20",
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
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "2d5ac126af7985e5899e33f8f2a42219",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.57,
            "currency": "GBP",
            "transaction_id": "5d2cf3bae6994a8aa3713ed4e46963b4",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "a3b2a459f01b282bfea57f25d543488a",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "a3377041c16379351c91351e0be9a236",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "c6dbf74bb1eed71879e5f1dc1289868c",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Mobile Phone"
            ],
            "merchant_name": "Tesco Mobile",
            "amount": -39.25,
            "currency": "GBP",
            "transaction_id": "142b3df40e1a30d97441df77aa3c6235",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Uncategorized"
            ],
            "merchant_name": "Ebay",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "7f5c183331c38522a58c90412fcbfe05",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Personal Services",
                "Financial Services"
            ],
            "merchant_name": "Oakam",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "3fb48cc9fb5c783f1b0a745fd4be64ae",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -150.0,
            "currency": "GBP",
            "transaction_id": "77503a7a2b622d6c01e916b8e6e243b7",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "b9829221e251a86bc84b49babfe13230",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": -550.0,
            "currency": "GBP",
            "transaction_id": "f72b4763a9f64eb6b121229efde46dcc",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 345.13,
            "currency": "GBP",
            "transaction_id": "86857b4ddcc43320b729acea5d09359a",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon Prime",
            "amount": -7.99,
            "currency": "GBP",
            "transaction_id": "24bf0e30cde50cd4081da52ead341b65",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 1450.42,
            "currency": "GBP",
            "transaction_id": "8bfb6cc914318c7e9965be556b8778d7",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 82.21,
            "currency": "GBP",
            "transaction_id": "6d7824d5d167d29c470542cf1a13b369",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 137.6,
            "currency": "GBP",
            "transaction_id": "77ff9745757d32ed74e17a897ac8116b",
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
            "description": "MORRISONS PETROL",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Auto & Transport",
                "Gas & Fuel"
            ],
            "merchant_name": "Morrisons Petrol Station",
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "5738b6cab38a6eebda11aac5a9fd8d46",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.63,
            "currency": "GBP",
            "transaction_id": "eef64a914040ad0670a25cc4608e067e",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -6.37,
            "currency": "GBP",
            "transaction_id": "da64336ee5a985d7db4d4c4baa2a2541",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -32.0,
            "currency": "GBP",
            "transaction_id": "47ae901b3c68516cd257691be54b8b31",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.55,
            "currency": "GBP",
            "transaction_id": "935c5d818f6ffda01dc74734b12b31e6",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -15.45,
            "currency": "GBP",
            "transaction_id": "e35060fcbdfebbd68370e953a5ae20d4",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.5,
            "currency": "GBP",
            "transaction_id": "2479fb5ac93f370b3d00ecef908cb21c",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -3.59,
            "currency": "GBP",
            "transaction_id": "378c255e875b741412fd0b91da38dcf6",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "90b3cbb3fae3493d7d6b3155af69c901",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Betfred",
            "amount": -2.0,
            "currency": "GBP",
            "transaction_id": "f500a9dd9745757451fb4d10283905ae",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.5,
            "currency": "GBP",
            "transaction_id": "f0c02344f95f909a1bc3ae89ce26e4e5",
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
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": 43.5,
            "currency": "GBP",
            "transaction_id": "a6bb95dc6e1a7b87c06b603f767f70ae",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "362d5eb3ce4aee85604e7fb89142abf4",
            "running_balance": {
                "currency": "GBP",
                "amount": 376.03
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-05-11T00:00:00Z",
            "description": "CIRCLE UK TRADING",
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.0,
            "currency": "GBP",
            "transaction_id": "c676f37adf452bc241b3d2c3d1349112",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 50.0,
            "currency": "GBP",
            "transaction_id": "59e004a0d4ea69e21dea1f90dfaaecb1",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "1817481eda3a89a9ad8d9d897a357bc7",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Fees & Charges",
                "Service Fee"
            ],
            "merchant_name": "Butlin's",
            "amount": -17.0,
            "currency": "GBP",
            "transaction_id": "9f276832631550ca66691391b808effa",
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
            "description": "ASDA STORES LTD",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "e6a295d1ef6af97a33dec17a8bf403bf",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "45b75bfe87f3be5b9e42ed08e04dec06",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.36,
            "currency": "GBP",
            "transaction_id": "9741ac285c2f900eb85854bf57d22b8c",
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
            "description": "EDF ENERGY",
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [
                "Bills and Utilities",
                "Utilities"
            ],
            "amount": -24.5,
            "currency": "GBP",
            "transaction_id": "d0ef7085b982788f30249be04d67854b",
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
            "description": "SAVE THE CHANGE",
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "3e7d229b0afd17792e5462b5230ec253",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "3b116094490aa68e83af73abb84b1f5e",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "9298ced239dc2ee2fd10e254d382e356",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "d04be6d4d88e0b3561badee034e9099c",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -14.99,
            "currency": "GBP",
            "transaction_id": "5a32305a307d9b106938ce41e8ba94c1",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "22ccf68fcd0038a2552fba52c7551e11",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Casino"
            ],
            "merchant_name": "Broadway Gaming",
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "cf05299993701217fce021da4084a29d",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.69,
            "currency": "GBP",
            "transaction_id": "c00dcc4c92f5aa3ef4444dc13adf0704",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.04,
            "currency": "GBP",
            "transaction_id": "3a394e493bea9439d96cfe949c5286a1",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Uncategorized",
                "Cash & ATM"
            ],
            "merchant_name": "Booker Wholesale",
            "amount": -24.31,
            "currency": "GBP",
            "transaction_id": "4cd6e1bc074e89cf8f3e254eefa77f2d",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -82.37,
            "currency": "GBP",
            "transaction_id": "b08748e528f6ad5a32dac662555f9f3c",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.15,
            "currency": "GBP",
            "transaction_id": "de50abb2960e6e61bbd97e21d2e46e25",
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
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -70.0,
            "currency": "GBP",
            "transaction_id": "8c3a9ea4a1712da3e25bca807706ba14",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Mobile Phone"
            ],
            "merchant_name": "Tesco Mobile",
            "amount": -28.25,
            "currency": "GBP",
            "transaction_id": "b1db0a9c15e18540e63274e2861a5119",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "43350c2694f1052142ffe90fe84786d1",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Morrisons",
            "amount": -12.89,
            "currency": "GBP",
            "transaction_id": "d8a28f55dc912ebe5994b0faf57a440b",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Mobile Phone"
            ],
            "merchant_name": "Tesco Mobile",
            "amount": -50.0,
            "currency": "GBP",
            "transaction_id": "b3e9f9c7f0745a7f49b3a6c80db307f8",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Home Bargains",
            "amount": -9.71,
            "currency": "GBP",
            "transaction_id": "3dce6ff8bbfd7c656ab5b787ace8affd",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 346.35,
            "currency": "GBP",
            "transaction_id": "00d71e77d1e4f21ae61db30dea4fe46c",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 137.6,
            "currency": "GBP",
            "transaction_id": "211b2e746ae0906a7c21f81caae3b6c9",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 61.89,
            "currency": "GBP",
            "transaction_id": "d58e9402fd7c92780316fe92e98a3b39",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "5138641a86d925085ce775281e4302d9",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon Prime",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "b7a2c9df6e6f0964fc6ba3ffd5fddbba",
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
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -60.0,
            "currency": "GBP",
            "transaction_id": "7c04a80601f3accdc16c566b25ace683",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.89,
            "currency": "GBP",
            "transaction_id": "a485384a878dc04509e2d8009eae16ac",
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
            "description": "AMAZON PRIME",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon Prime",
            "amount": -7.99,
            "currency": "GBP",
            "transaction_id": "73028ff85f5e00fe95177dfb91b453da",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Vanquis Bank",
            "amount": -23.15,
            "currency": "GBP",
            "transaction_id": "c3a41ab803aa4f2a79c109b8cce349de",
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
            "description": "WWW.TAILS.COM",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Pets"
            ],
            "merchant_name": "Tails.com",
            "amount": -6.37,
            "currency": "GBP",
            "transaction_id": "d1dbf67664538ceeba5dea657fdcfe29",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "7a46d2d18c142a1e0a55a7d80b8e3be4",
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
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": 10.0,
            "currency": "GBP",
            "transaction_id": "245272fd600c3cefd0a1202e1dabe46f",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "8a62e41cccd977f40c442f24a1a873a4",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 59.17,
            "currency": "GBP",
            "transaction_id": "3c1e9f53ff4e2ae0aa3cb75028e3c943",
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
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "e3a15f120ce94f5d41ee38bae8f94cdd",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "5f5cf71cc86d396f199dccdf71505127",
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
            "description": "LNK ATM WITHDRAWAL",
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "1aa3d3b1098d0deb68f8f255f060b76b",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 100.0,
            "currency": "GBP",
            "transaction_id": "9b2fd796f725b3c94f1d23a18a4bea1f",
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
            "description": "PAYPAL EBAY",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": 25.0,
            "currency": "GBP",
            "transaction_id": "8ea2ad1f9090185b2ae750a792ca96c6",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -130.0,
            "currency": "GBP",
            "transaction_id": "f61b13d268b2348a9c42f13373067aa3",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 0.89,
            "currency": "GBP",
            "transaction_id": "ebebaa96733dbd7277b6a0b70e08c375",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "cba4c56683d6a6537629afeac7789223",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 130.0,
            "currency": "GBP",
            "transaction_id": "0db9bf9b015449a708a09e607eff5e64",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 7.0,
            "currency": "GBP",
            "transaction_id": "70705bed08a8a823df84ac94db72ffba",
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
            "description": "VIRGIN GAMES",
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Virgin Games",
            "amount": 35.49,
            "currency": "GBP",
            "transaction_id": "a627d790862fcfe571b2221b4cb7b43b",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "16134723713960345c5fd3ef9dcb8e47",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Electronics & Software"
            ],
            "merchant_name": "Google Play",
            "amount": -2.99,
            "currency": "GBP",
            "transaction_id": "e04391deeefcfccd2eb691941a54bdd3",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "8620d37c8491d27c5ff8feb4f8b450e0",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "01d904abc910066d2c751705f2c134c0",
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
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -40.0,
            "currency": "GBP",
            "transaction_id": "e1a31483a56994afa183c028e27608b0",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "34906eb54a9c4714d413c821620b0b59",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 30.0,
            "currency": "GBP",
            "transaction_id": "ed428af994beb39316380ee6e5cf2429",
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
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "ca70102f53315f2defd6f83fb0442bce",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 10.0,
            "currency": "GBP",
            "transaction_id": "4e397b4b11e62dc5787d50c7c488481b",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.59,
            "currency": "GBP",
            "transaction_id": "fd8d0fa4d806f89980822d5d224c8681",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -46.82,
            "currency": "GBP",
            "transaction_id": "0fbd16803ddba6158ff79800d60ad4fa",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "fe15e244337b9f2cd770ef4a91e1599b",
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
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -227.0,
            "currency": "GBP",
            "transaction_id": "34643de897d38e02ef9ac4c1eb8fe0fb",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Tesco",
            "amount": -39.99,
            "currency": "GBP",
            "transaction_id": "3c4cd4ef859440a03d2e864d2941c2a3",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Investments",
                "Bank products"
            ],
            "merchant_name": "Revolut",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "ad65b570980aab4486cb9422b55b2f3e",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Income",
                "Returned Purchase"
            ],
            "merchant_name": "Centra",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "5eeed8e30121b1010daaccf489b344bd",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "d88423a211dedc71e8bb9ad0fd510a4f",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping"
            ],
            "merchant_name": "Spar",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "ea655e18e40bb3d3167fba87632d4cf2",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping"
            ],
            "merchant_name": "Spar",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "12ee80dac067e69415e58d3bf684b501",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "655315dc9195b6651b17454fc57e1702",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Lidl",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "2ad0587fb0e4c3c960164d3ce1bf3504",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "a8232901dc780cf91e32740989f9582a",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Food & Dining",
                "Fast Food"
            ],
            "merchant_name": "Mcdonald's",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "9e2b19e610d9f5334db681041764d1ee",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Internet"
            ],
            "merchant_name": "Harvey Norman",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "3a551fee0f4faef11e3a753310c5505f",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Ulster Bank",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "0139cc40df7560f872d5fde44125a591",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "c41617512e48fe04a9ec35026e4c9c62",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Bet365",
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "48391b1b22ff9a8de3fd349b3457dd62",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "218c6e90315381851cfc4da68f4230fc",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Sainsbury's",
            "amount": -23.99,
            "currency": "GBP",
            "transaction_id": "82585e8f2af34e9368d3008a7575ede8",
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
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -302.91,
            "currency": "GBP",
            "transaction_id": "e9a36516eb9498f01b290f522525a5e6",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Business Services",
                "Financial Services"
            ],
            "merchant_name": "Nude Finance",
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "e77bf2baa7562c71f302bddbf4b32eb4",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CASH",
            "transaction_classification": [],
            "amount": 420.0,
            "currency": "GBP",
            "transaction_id": "1f7c7f20d5063e402f9ec8bfef4a8223",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "fe23351d0606729dca0e872642d37d0b",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "337dd1bd3f5c259740e1729e7ed862ab",
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
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -32.72,
            "currency": "GBP",
            "transaction_id": "7b3f8e559c27822a82574dd04c1cd92d",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "f7bd267b5f4ba0223c507e99fc554604",
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
            "transaction_type": "CREDIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": -7.93,
            "currency": "GBP",
            "transaction_id": "1babb9cbad12f8630685795e8a3b73e1",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.59,
            "currency": "GBP",
            "transaction_id": "c2378505a253d3b4b75b335cde55c694",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 15.86,
            "currency": "GBP",
            "transaction_id": "59c4837794bb069cb4df25e453ed1725",
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
            "description": "PAYPAL EBAY",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -7.56,
            "currency": "GBP",
            "transaction_id": "2c614ca5475f07f485589a7e20c13514",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CASH",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "73c945f46f52d01e6f0c99449711b787",
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
            "description": "SAVE THE CHANGE",
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "7549ffcce4352ee0e711039a36ac7c6f",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "23bdf15b5d3df8e7e8a030b361ef80af",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.5,
            "currency": "GBP",
            "transaction_id": "a53bd041f0e397f8dedd3f3da44632c2",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -10.5,
            "currency": "GBP",
            "transaction_id": "aa78dcf50ee9e9989fdbbe4c67b7dcdb",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -30.0,
            "currency": "GBP",
            "transaction_id": "8550fcb5ec30b79987f62c4104d8ae86",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 32.5,
            "currency": "GBP",
            "transaction_id": "2d38e58f0589e8c69f0c419e3cda8f2e",
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
            "transaction_type": "CREDIT",
            "transaction_category": "ATM",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "b1a784afd1e1c979bb1cbd00b31fbfad",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.57,
            "currency": "GBP",
            "transaction_id": "a37a08cac1cb6594263a7b0cd7c83244",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "87c073e8329cb7bf5b0ef1b8c0009c38",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "fb68d742d6c6f4c41ce5ac8661a82e9e",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "5e743996ae4c20bcd7d2b24587f56b05",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Bills and Utilities",
                "Mobile Phone"
            ],
            "merchant_name": "Tesco Mobile",
            "amount": -39.25,
            "currency": "GBP",
            "transaction_id": "9e0682ccbe37990fafae83e5145136c1",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Uncategorized"
            ],
            "merchant_name": "Ebay",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "14fdaa5afd9286893646d5bab6b85001",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Personal Services",
                "Financial Services"
            ],
            "merchant_name": "Oakam",
            "amount": -36.59,
            "currency": "GBP",
            "transaction_id": "dc200b7b3eaf8ede9627ccd344a9d586",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -150.0,
            "currency": "GBP",
            "transaction_id": "62795d1a63119b9971b573f17f1913c2",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "845d50ed0bab60e8d902f6b30f89886f",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "amount": -550.0,
            "currency": "GBP",
            "transaction_id": "e936fae97f624f8c3d4979d8c66c1caa",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 345.13,
            "currency": "GBP",
            "transaction_id": "86cdd6a045b589f9998f9d8ded3dd3ae",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "General"
            ],
            "merchant_name": "Amazon Prime",
            "amount": -7.99,
            "currency": "GBP",
            "transaction_id": "ead7f04f162adf48de236b7d3638a420",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 1450.42,
            "currency": "GBP",
            "transaction_id": "049fb51cec91dcb5fa9bf6a62c5c49cf",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 82.21,
            "currency": "GBP",
            "transaction_id": "e36e293fa0d0b57b84e3cdc6e9c4a25b",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 137.6,
            "currency": "GBP",
            "transaction_id": "ce1130660a4c0822befc4f4445211cd5",
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
            "description": "MORRISONS PETROL",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Auto & Transport",
                "Gas & Fuel"
            ],
            "merchant_name": "Morrisons Petrol Station",
            "amount": -20.0,
            "currency": "GBP",
            "transaction_id": "08e78c6e7ac031ec1893c9dbee5f2997",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.63,
            "currency": "GBP",
            "transaction_id": "1f4057409828e7516401a361cc9aa952",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -6.37,
            "currency": "GBP",
            "transaction_id": "dc59a8362128b4ad09521b09231f62fd",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -32.0,
            "currency": "GBP",
            "transaction_id": "8635e4103ca0a5aa43809994cb6612f8",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.55,
            "currency": "GBP",
            "transaction_id": "11fefbd582f374c347100fb7c806e765",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -15.45,
            "currency": "GBP",
            "transaction_id": "ceba1e0c51cbcc3657dcca2dacbc8909",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.5,
            "currency": "GBP",
            "transaction_id": "bdd3c00fa2dd6ee3447b6700daecab10",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -3.59,
            "currency": "GBP",
            "transaction_id": "83af81da6f534ea06af0a049e7684a8f",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "bbf7ed39814818e3bf558873795d4c02",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Betting"
            ],
            "merchant_name": "Betfred",
            "amount": -2.0,
            "currency": "GBP",
            "transaction_id": "33192fd2bdca101b6099657f7583a0fe",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -20.5,
            "currency": "GBP",
            "transaction_id": "99fa8d116f71951009e8aefa85eb2868",
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
            "transaction_type": "DEBIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": 43.5,
            "currency": "GBP",
            "transaction_id": "78ce01d257612aa5f97c50b95f044bda",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "3bcbd6cceb5a9b67da01707385cbcacc",
            "running_balance": {
                "currency": "GBP",
                "amount": 376.03
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": "2021-04-11T00:00:00Z",
            "description": "CIRCLE UK TRADING",
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.0,
            "currency": "GBP",
            "transaction_id": "f25dfbb02684a1580f7d4ad547ed98b4",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 50.0,
            "currency": "GBP",
            "transaction_id": "5e9c2a52dc149793e492d99ed11101a1",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "9e6b662b08cb3b2d600c980e1973f7c9",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Fees & Charges",
                "Service Fee"
            ],
            "merchant_name": "Butlin's",
            "amount": -17.0,
            "currency": "GBP",
            "transaction_id": "f082db2106037b8ea04e71a8772ab652",
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
            "description": "ASDA STORES LTD",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Shopping",
                "Groceries"
            ],
            "merchant_name": "Asda",
            "amount": -5.0,
            "currency": "GBP",
            "transaction_id": "62af89acf66482d484d3db9d377f4a32",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 40.0,
            "currency": "GBP",
            "transaction_id": "e105c6edd348934faaa89f8d9991f040",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 50.36,
            "currency": "GBP",
            "transaction_id": "b7bb1d521d3a831418707f523b82643c",
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
            "description": "EDF ENERGY",
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [
                "Bills and Utilities",
                "Utilities"
            ],
            "amount": -24.5,
            "currency": "GBP",
            "transaction_id": "3de9217087d54fe3c4d0902d700e45f3",
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
            "description": "SAVE THE CHANGE",
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.41,
            "currency": "GBP",
            "transaction_id": "90a81f0a27533db7090d4f51f1b09cf6",
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
            "transaction_type": "DEBIT",
            "transaction_category": "TRANSFER",
            "transaction_classification": [],
            "amount": 70.0,
            "currency": "GBP",
            "transaction_id": "afd10cf6049325af4aa612dbaf463e06",
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
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.01,
            "currency": "GBP",
            "transaction_id": "519b72217500b2837931be5999a38e10",
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
            "transaction_type": "DEBIT",
            "transaction_category": "CREDIT",
            "transaction_classification": [],
            "amount": 22.42,
            "currency": "GBP",
            "transaction_id": "73049f9d200be104bf1a84d39c57eec9",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -14.99,
            "currency": "GBP",
            "transaction_id": "320de066d0fb7509a4157735929096c5",
            "running_balance": {
                "currency": "GBP",
                "amount": 482.03
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": new Date("2021-04-08T00:00:00Z"),
            "description": "REGENDA REDWING RE",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [],
            "amount": -100.0,
            "currency": "GBP",
            "transaction_id": "142fa6e701ef6b9a58bad2e12c422e1c",
            "running_balance": {
                "currency": "GBP",
                "amount": 382.03
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": new Date("2021-04-08T00:00:00Z"),
            "description": "BROADWAY GAMING LT CD 0315",
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Gambling",
                "Casino"
            ],
            "merchant_name": "Broadway Gaming",
            "amount": -10.0,
            "currency": "GBP",
            "transaction_id": "9a1dd042146e30cd406a16e4dd3a8b25",
            "running_balance": {
                "currency": "GBP",
                "amount": 372.03
            },
            "meta": {
                "provider_transaction_category": "DEB"
            }
        },
        {
            "timestamp": new Date("2021-04-08T00:00:00Z"),
            "description": "SAVE THE CHANGE",
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -0.69,
            "currency": "GBP",
            "transaction_id": "2cc962fda731d21714e8d4a33129411a",
            "running_balance": {
                "currency": "GBP",
                "amount": 371.34
            },
            "meta": {
                "provider_transaction_category": "BP"
            }
        },
        {
            "timestamp": new Date("2021-04-08T00:00:00Z"),
            "description": "SAVE THE CHANGE",
            "transaction_type": "CREDIT",
            "transaction_category": "BILL_PAYMENT",
            "transaction_classification": [],
            "amount": -1.04,
            "currency": "GBP",
            "transaction_id": "0a718f4b7be76f7332c3c63cd8f57132",
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
            "transaction_type": "CREDIT",
            "transaction_category": "PURCHASE",
            "transaction_classification": [
                "Uncategorized",
                "Cash & ATM"
            ],
            "merchant_name": "Booker Wholesale",
            "amount": -24.31,
            "currency": "GBP",
            "transaction_id": "ab9197c2946c3386847c424fa2951ebe",
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