const  { Web3Storage, getFilesFromPath } =  require('web3.storage');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDc2NzdlYkQ3QWZFQzk1N0QwNjBDOWQ1RjA3QzA3QUExOUExYzU1RjMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzQ4OTI5NDM3MDcsIm5hbWUiOiJ0ZXN0In0.glU4rve8ousywCNTxWK9NwAwySM1uoSGu0X_5Y7pd_g';
const storage = new Web3Storage({ token })

const { ethers } = require("ethers");
const fileName = require('./build/contracts/fileman.json')


const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com");
const signer = new ethers.Wallet("7147b7ed315608f1a6a4105b0a9bd3e14fae2d63987bd31e768f55d761fac8c7", provider)
//const signer = provider.getSigner()

const address = "0xd58b4b9FEF5e39cf299B9A6216C8a4ABF0EF68EB";
const abi = fileName.abi;
const contract = new ethers.Contract(address,abi,provider);
const signedContract = contract.connect(signer);
provider.getBalance('0x9fa7011b0A6d2c3D08fe3E7ab900Ce0Af3dEB181').then(data => console.log(data))



// Server Starts Here
const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
const path = require('path');
const { sign } = require('crypto');
const { rawListeners } = require('process');
const app = express()
const port = 3000
app.use(fileUpload());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 

app.get('/', (req, res) => {
  res.send('<h1>Dont Call me! I am Working<h1>')
})

app.post('/login', async (req,res)=>{
  const {userName,role} = req.body;
  const tx = await signedContract.getUser(userName);
  console.log(tx);
  if(tx)
  res.status(200).send({msg:"User Login Succesfully!"});
  else

    res.status(201);
})

app.post('/upload', async (req,res) =>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
     const file = req.files.doc;
     file.mv(file.name, async function(err){
        if(err){

        }else{
            console.log(file.name)
            const pathFiles = await getFilesFromPath(path.join(__dirname,file.name));
            
            const cid = await storage.put(pathFiles)
            console.log('Content added with CID:', cid)
            console.log(file)
            console.log(cid,req.body.userid,file.type,file.name)
            const tx = await signedContract.createDoc(cid,req.body.userid,file.name);
            res.status(200).send({msg: "Document Uploaded Sucessfull"})
        }
     })
})

app.get('/alldocs', async (req,res)=>{
 
    const tx = await contract.getAllDocs();
    console.log(tx)
    let docs = [];
    tx.forEach( async ele => {
      await contract.getDoc(ele).then( data =>{
        
        docs.push({hash: data.hash,status:data.status,name:data.name,verified_by:data.verified_by,created_by:data.created_by})
        
        })
        console.log(docs);
        res.status(200).send(docs);

    })
   
   
})

app.get('/alldocs/:id',async(req,res) =>{
    const tx  = await contract.getUser(req.params.id);

    let docs = [];
    tx.docs.forEach( async ele => {
      await contract.getDoc(ele).then( data =>{
        
        docs.push({hash: data.hash,status:data.status,name:data.name,verified_by:data.verified_by,created_by:data.created_by})
        
        })
        console.log(docs);
        res.status(200).send(docs);

    })
})

app.patch('/verify/:id',async (req,res) => {

  
  const tx = await signedContract.verifyDoc(req.params.id,1,req.body.username);
  console.log(tx);
  res.status(200).send({msg:" Document Verfied"});
})
app.patch('/reject/:id',async (req,res) => {
  const tx = await signedContract.verifyDoc(req.params.id,0,req.body.username);
  console.log(tx);
  res.status(200).send({msg:" Document Rejected"});
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})