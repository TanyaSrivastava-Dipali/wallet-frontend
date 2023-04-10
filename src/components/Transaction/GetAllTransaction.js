import {React,useEffect,useState} from 'react';
import axios
 from 'axios';
const AllTransactions = () => {
    const [trx, setTrx] = useState([]);

    useEffect(() => {
      const getTrx = async () => {
        const response = await axios.get("http://localhost:3000/api/transaction/getAllTransactions",{withCredentials: true,headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}});
       let details=response.data.allTrx
        console.log(details[1]);
        const transaction = [];
        for (const key in details) {
         transaction.push({
            ReceiverWalletAddress: details[key].ReceiverWalletAddress,
           SenderWalletAddress: details[key].SenderWalletAddress,
           amount: details[key].amount,
           ethTRXHash: details[key].ethTRXHash,
           receiver: details[key].receiver,
           sender: details[key].sender,
           token: details[key].token,
           trxTimeStamp: details[key].trxTimeStamp
               });
        }
        setTrx(transaction);
      };
  
      getTrx();
    }, []);
    const x= trx.map((t) => (
      <ul>
       <li> key={t.ethTRXHash}</li>
       <li> Sender={t.sender}</li>
       <li> Receiver={t.receiver}</li>
       <li>   Sender Wallet Address={t.SenderWalletAddress}</li>
       <li>  Receiver Wallet Address={t.ReceiverWalletAddress}</li>
       <li>  amount={t.amount}</li>
       <li> Token={t.token}</li>
       <li>  Eth Transaction hash={t.ethTRXHash}</li>
        </ul>
));
    return (
       
        <div className='mb-40'>
           <p  className='mt-10 text-black text-2xl font-bold'>AllTransactions :-</p>
        {trx[0] && <p>
            {trx.map((t)=>(
<ul className="mt-10 text-black border-solid border-2 border-blue-900 ">
     <li><b className="text-red-900"> key :</b>{t.ethTRXHash}</li>
       <li><b className="text-red-900"> Sender :</b>{t.sender}</li>
       <li><b className="text-red-900"> Receiver:</b>{t.receiver}</li>
       <li><b className="text-red-900">   Sender Wallet Address:</b>{t.SenderWalletAddress}</li>
       <li><b className="text-red-900">  Receiver Wallet Address:</b>{t.ReceiverWalletAddress}</li>
       <li><b className="text-red-900">  amount:</b>{t.amount}</li>
       <li><b className="text-red-900"> Token:</b>{t.token}</li>
       <li><b className="text-red-900">  Eth Transaction hash:</b>{t.ethTRXHash}</li>
</ul>
            ))}
          </p>
}
        </div>
    );
    }
  export default AllTransactions;
