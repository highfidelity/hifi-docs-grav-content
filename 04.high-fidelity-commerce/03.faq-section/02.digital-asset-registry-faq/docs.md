---
title: "Digital Asset Registry FAQs"
taxonomy:
    category:
         docs
---
<a id="top"></a>

| **General Questions**                    |
| ---------------------------------------- |
| [What is the Digital Asset Registry and how does it relate to the rest of High Fidelity?](#q0) |
| [How does certified content work?](#q1)  |
| [What does “rez” mean?](#q2)             |
| [What is a Proof of Provenance (PoP) certificate?](#q3) |
| [Why use a blockchain?](#q4)             |
| [Why not use a system like Venmo or PayPal to enable trade?](#q5) |
| [Where is my content stored? Is there an asset distribution network?](#q6) |
| [What is HF's monetary policy in a nutshell?](#q7) |
| [Can other marketplaces use HFC?](#q8)   |
| [Will my money and digital assets survive if High Fidelity goes away?](#q10) |
| [Do I get charged money if a transaction fails?](#q11) |


| **Blockchain Architecture Questions**    |
| ---------------------------------------- |
| [Why use HFC and not just use another cryptocurrency like Ethereum?](#q14) |
| [What is Federated Consensus?](#q15)     |
| [Can I get paid miner’s fees?](#q16)     |
| [What are transaction fees?](#q17)       |
| [What is High Fidelity's approach to Know Your Customer, Anti-Money Laundering, and sales tax? ](#q18) |
<a id="q0"></a>
<br>


### General Questions
<br>
<a id="q1"></a>
**What is the Digital Asset Registry and how does it relate to the rest of High Fidelity?**<br> 
High Fidelity is open source software that allows creators to host their own virtual worlds, and for virtual reality and desktop computer users to explore and interact with those worlds.
HFC will provide a low fee cryptocurrency for use in the High Fidelity Marketplace and between users. It provides a cryptographically secure way to certify the integrity and provenance of virtual goods from that marketplace. 
<p align="right"><a href="#top">Back to Top</a></p>
<br>

<a id="q2"></a>
**How does certified content work?**<br> 
Certification is intended to provide proof of provenance for certain goods. It is anticipated that domain operators will include certification in the filtering rules they use to manage what content can be added to their domains. As such, virtual reality domains will contain a mix of certified and uncertified content. 
Read more about our current tools for [setting permission rights](https://docs.highfidelity.com/learn-with-us/setup-your-domain-to-build). After the launch of the Commerce feature, permission rights will be extended to include 'certified rez' and 'certified temp rez' as options.
<p align="right"><a href="#top">Back to Top</a></p>
<br>

<a id="q3"></a>
**What does “rez” mean?**<br> 
To ‘rez’ something is to spawn an item. Rezzing is the act of adding an item to the VR area you’re in. 
Rezzing is a privilege granted by the owner of a domain based on a set of rules. These rules will be extended to include information about a user’s reputation, the size and scale of the item they wish to “rez”, and whether the user has already been given specific privileges by the domain owner.
Certification will further extend the options available to a domain owner, giving them the option to set 'certified rez' and 'certified temp rez' in addition to other options.
For domains based on a specific IP or for which strong controls on content make sense, certification will be a useful filter to control what content can be added to a scene.
<p align="right"><a href="#top">Back to Top</a></p>
<br>

<a id="q4"></a>
**What is a Proof of Provenance (PoP) certificate?**<br>
Technically, a “proof of provenance” certificate is a .json string containing a set of static properties (e.g. item name, edition number, author, etc.), plus “whereabout” properties (e.g. the current owner key,  location/domain, etc). The static properties information on a PoP Certificate is sealed and cannot be altered. Trying to change this static information will cause the certificate to become invalid.  
<p align="right"><a href="#top">Back to Top</a></p>
<br>

<a id="q5"></a>
**Why use a blockchain?**<br> 
There are a number of benefits associated with the suite of technologies that collectively make up "blockchains." In our work so far, we are producing:
1. A system to record transactions that can only be added to by users (e.g. a system that provides multi-factor security where High Fidelity cannot create or modify financial transactions).
2. Transaction records that cannot be altered. Not by users, not by High Fidelity or any other institutions, and not by intruders.
3. Transactions based on anonymous keys that are generated for each transaction, and which are not associated with your username.
4. Transaction infrastructure that is both open source and open ledger. The ledger allows anyone to confirm the status of any transaction for themselves.
5. A system that is fault tolerant against the removal or compromise of any node in the blockchain network. The blockchain is ultimately an independent network of trusted parties that each replicate the synchronized network operations necessary to run the system in multiple locations around the world. This makes it almost impossible to compromise or deny access to the network. 
  <p align="right"><a href="#top">Back to Top</a></p>
  <br>

<a id="q6"></a>
**Why not use a system like Venmo or PayPal to enable trade?**<br>
Buyers and sellers are very often not in the same country, and there aren’t any existing systems that work well across a lot of different countries. Also, many of these systems don’t have APIs that would easily allow them to be used from within a virtual world, or are not designed to support digital goods. As described above, our strategy for content protection also requires a public ledger for virtual asset certificates, which we would have to build alongside such systems.
<p align="right"><a href="#top">Back to Top</a></p>
<br>

<a id="q7"></a>
**Where is my content stored? Is there an asset distribution network?**<br> 
The Digital Asset Registry does not store asset content. High Fidelity assets will continue to be stored in the cloud (using DigitalOcean Spaces, S3, or other services). 
Rather than providing hosting, the Digital Asset Registry records transactions and certificates of purchase. The cryptographically verifiable content offered by our Marketplace is available in High Fidelity's content distribution network. We expect to distribute this on an advanced P2P content distribution network that we are developing – this is independent of the Digital Asset Registry except that the P2P content distribution will take advantage of the ledger's ability to efficiently verify content.
<p align="right"><a href="#top">Back to Top</a></p>
<br>

<a id="q8"></a>
**What is HF's monetary policy in a nutshell?**<br> 
We expect the exchange rate of HFC to other currencies to stabilize after an initial period of time. As the virtual economy grows, money supply will grow proportional to new users, normalized by true economic activity (GDP). To keep prices stable as the economy expands, we will also add currency, as has been done successfully in Second Life. It is anticipated that this strategy can be implemented algorithmically with smart contracts, for further decentralization.  
<p align="right"><a href="#top">Back to Top</a></p>
<br>

<a id="q9"></a> 
**Can other marketplaces use HFC?**<br> 
Yes. VR assets that are created on the Digital Asset Registry (receiving a PoP certificate) can be  verifed as authentic. This proof can be used by other virtual worlds or 2D digital marketplaces.
<p align="right"><a href="#top">Back to Top</a></p>
<br>

<a id="q11"></a>
**Will my money and digital assets survive if High Fidelity goes away?**<br>
Yes. Because the Digital Asset Registry is a public ledger, anyone can (and many will) make a backup of the data. If High Fidelity were to disappear, someone else will start up a new blockchain from that backup and provide the same service of accepting new blocks to write to the ledger. Also, both High Fidelity and the blockchain software we are using are open source.
<p align="right"><a href="#top">Back to Top</a></p>
<br>

<a id="q12"></a> 
**Do I get charged money if a transaction fails?**<br> 
Your HFC balance only changes after a transaction is confirmed.
When a user decides to purchase an item from the High Fidelity Marketplace, a set of atomic transactions will occur: (1) user sends HFC to content creator for purchase, (2) user sends HFC to High FIdelity Marketplace as revenue share fee (3) High Fidelity Marketplace sends the newly issued Proof of Provenance certificate to the user. If the user does not have sufficient funds, this entire set of transactions will fail. 
<p align="right"><a href="#top">Back to Top</a></p>
<br>



### Blockchain Architecture Questions
<br>
<a id="q15"></a>
**Why use HFC and not just use another cryptocurrency like Ethereum or ERC-20 Tokens?**<br> 
HFC transactions will have very low costs, where as other currency transactions typically cost more money than we anticipate users wishing to spend on an individual digital good. Controls over transaction costs are not supported by Ethereum and other networks.  
Separately, the speed of transactions on the HFC network is much higher than what is available on a fully distributed network, as we anticipate needing to support a real-time marketplace for the purchase of digital goods.
Finally, the price volatility of BTC and ETC combined with their generally upward price trend makes them a poor choice as a trading currency — they have become more like decentralized commodities. HFC can be easily exchanged for these currencies when needed, but in-world transactions happen against the faster consensus network.
<p align="right"><a href="#top">Back to Top</a></p>
<br>

<a id="q16"></a>
**What is Federated Consensus?**<br>
When it comes to virtual world transactions, we want to store not just currency, but also certificates for digital assets that may frequently change hands or status, as well as other information such as identity. We need a very high transaction rate and very low (or zero) transaction fees. For this reason, we can’t directly use the big public blockchains (Ethereum or Bitcoin), because the full decentralization of these networks imposes limits on how quickly they can process transactions and requires significant fees per transaction. This is basically because a very large network of ‘miners’ have to share the transaction fees equally among themselves, and the algorithmic ‘game’ that allows the miners to pay each other without trusting each other will break down if the transactions happen too quickly. Smart designers (not just us) have observed that if a trading network can trust a smaller subset of members to act as verifiers for new transactions (typically called ‘block signers’), you can greatly speed up the performance of the network and reduce the fees without compromising the most useful quality of a blockchain: a single public ledger which everyone can read and write, and which enforces the requirement for correct digital signatures for every transaction.
<p align="right"><a href="#top">Back to Top</a></p>
<br>

<a id="q17"></a> 
**Can I get paid miner’s fees?**<br> 
No. While members of the federated consensus network will earn fees from transactions, we do not anticipate mining or providing mining fees to encourage the creation of additional instances of the blockchain. 
<p align="right"><a href="#top">Back to Top</a></p>
<br>

<a id="q18"></a>
**What are transaction fees?**<br> 
(1) Updating Whereabout properties (e.g. the current owner key,  location/domain, etc) on a Proof of Provenance Certificate will cost 1 HFC, which is the smallest unit of the utility token used on the Digital Asset Registry. The main reason that we charge the transaction fee is to prevent malicious frequent updates that flood the network. The transaction fee goes to the consensus blockchain network and is shared amongst signers. 
(2) For users and content creators who would like to certify their items via the 'Certificate Office', a fixed fee will be charged for inspecting uniqueness and category filing. In addition and completely optional, for those who also would like to make their item available 'for sale' on the High Fidelity Marketplace, can do so by opting-in and sharing revenue when selling to other VR users. 
<p align="right"><a href="#top">Back to Top</a></p>
<br>

<a id="q19"></a> 
**What is High Fidelity's approach to Know Your Customer, Anti-Money Laundering, and sales tax?**<br> 
HFC is an in-world currency. Users will use the currency to purchase digital goods. Earned currencies can be used to purchase other goods or services from High Fidelity.
As with other blockchain-backed digital currencies, we anticipate that existing coin exchanges may elect to include HFC in their portfolio. In these cases, the exchange provider would be obligated to meet the laws and tax obligations particular to the jurisdiction where they operate.
In many jurisdictions, the sale of virtual goods is taxable. A seller is responsible for including the cost of sales tax or VAT in the listed price of an item, and remitting to the appropriate authority.

<p align="right"><a href="#top">Back to Top</a></p>
<br>
