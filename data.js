abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_hash",
				"type": "address"
			},
			{
				"internalType": "int256",
				"name": "_id",
				"type": "int256"
			}
		],
		"name": "createDoc",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_id",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "_role",
				"type": "string"
			}
		],
		"name": "createUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "docs",
		"outputs": [
			{
				"internalType": "address",
				"name": "hash",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "verified_by",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "created_by",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllDocs",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "hash",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "verified_by",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "created_by",
						"type": "int256"
					}
				],
				"internalType": "struct fileman.Doc[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllUsers",
		"outputs": [
			{
				"components": [
					{
						"internalType": "int256",
						"name": "id",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "role",
						"type": "string"
					},
					{
						"internalType": "address[]",
						"name": "docs",
						"type": "address[]"
					}
				],
				"internalType": "struct fileman.User[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_hash",
				"type": "address"
			}
		],
		"name": "getDoc",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "hash",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "verified_by",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "created_by",
						"type": "int256"
					}
				],
				"internalType": "struct fileman.Doc",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_id",
				"type": "int256"
			}
		],
		"name": "getUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "int256",
						"name": "id",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "role",
						"type": "string"
					},
					{
						"internalType": "address[]",
						"name": "docs",
						"type": "address[]"
					}
				],
				"internalType": "struct fileman.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "int256",
				"name": "id",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "role",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]