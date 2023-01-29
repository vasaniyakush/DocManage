const { ethers } = require("ethers");
const fileName = require('./build/contracts/fileman.json')


const provider = new ethers.providers.JsonRpcProvider();
const signer = provider.getSigner()
const address = "0x9f1fb77a7a1b1f0e9fb208a7953ce8fe30ab37f6";
const abi = fileName.abi;
// abi = [
//     "function getUser(int _id) public view returns (User memory )",
//     "function createUser(int _id, string calldata _role, string calldata _name) public"
// ]
const contract = new ethers.Contract(address,abi,provider);
const signedContract = contract.connect(signer);
console.log(contract)

async function jsCreateUser(id,name,role){
        const tx = await signedContract.createUser(id,name,role,{gasLimit:500000});
        console.log(tx);
        return tx;
}

async function jsGetUserById(id){
    const tx = await contract.getUser(id);
    tx.type = 0;
    console.log(tx);
    return tx;
}

async function jsGetAllUsers(){
    const tx = await contract.getAllUsers();
    tx.type = 0 ;
    return tx;
}

 async function jsCreateDoc(hash,id){
    const tx = await signedContract.createDoc(hash,id)

 }
 async function jsgetDoc(){

 }
 async function jsgetAllDocs(){

 }
 async function jsgetVerified(){

 }
 async function jsverifyDoc(){

 }
 async function jsgetVerificationStatus(){

 }
//jsCreateUser(1,"ritesh","admin");
//jsGetUserById(1);