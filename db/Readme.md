# Filecoin-explorer db design

| version | date | author | changlog |
| ---- | ---- | ---- | ---- |
|v0.0.1|2019-9-17|@waynewyang|init draft|


## Content<a name="Content"></a>

- [Overview](#Overview)
	- [Filecoin-explorer  backend  get data from two side](#GetData)
	- [Db](#Db)
	- [Demand](#Demand)
- [Data From Actor](#DataFromActor)
- [Collection Relation](#CollectionRelation)
- [Collection Design](#CollectionDesign)
	- [BlockChain](#BlockChain)
		- [Tipset](#Tipset)
		- [Block](#Block)
		- [Message](#Message)
		- [Actor](#Actor)
	- [Token](#Token)
		- [TransactionHistory](#TransactionHistory)
		- [TransactionRealtime](#TransactionRealtime)
		- [TokenHistory](#TokenHistory)
		- [TokenRealtime](#TokenRealtime)
	- [StorageMarket](#StorageMarket)
		- [StorageMiner](#StorageMiner)
		- [StorageClient](#StorageClient)
		- [StorageAsk](#StorageAsk)
		- [StorageHistoryMiners](#StorageHistoryMiners)
		- [StorageRealtimeMiners](#StorageRealtimeMiners)
		- [StorageHistoryClients](#StorageHistoryClients)
		- [StorageRealtimeClients](#StorageRealtimeClients)
		- [StorageHistoryDeals](#StorageHistoryDeals)
		- [StorageRealtimeDeals](#StorageRealtimeDeals)
	- [RetrievalMarket(todo)](#RetrievalMarket)
		- [RetrievalMiner(todo)](#RetrievalMiner)
		- [RetrievalClient(todo)](#RetrievalClient)
		- [RetrievalAsk(todo)](#RetrievalAsk)
		- [RetrievalHistoryMiners(todo)](#RetrievalHistoryMiners)
		- [RetrievalRealtimeMiners(todo)](#RetrievalRealtimeMiners)
		- [RetrievalHistoryClients(todo)](#RetrievalHistoryClients)
		- [RetrievalRealtimeClients(todo)](#RetrievalRealtimeClients)
		- [RetrievalHistoryDeals(todo)](#RetrievalHistoryDeals)
		- [RetrievalRealtimeDeals(todo)](#RetrievalRealtimeDeals)

## Overview<a name="Overview"></a>

### Filecoin-explorer  backend  get data from two side<a name="GetData"></a>
- actor
- go-filecoin blockchain database

**Jump to** [Content](#Content)

### Db <a name="Db"></a>
- mongodb

**Jump to** [Content](#Content)


### Demand<a name="Demand"></a>
- Read > Write

**Jump to** [Content](#Content)


## Data From Actor<a name="DataFromActor"></a>

- Best TipSet
- Current Network Storage Capacity
- Current Network Utilization ？
- Account balance 

**Jump to** [Content](#Content)


## Collection Relation<a name="CollectionRelation"></a>

| Collection | Relation | Collection |
| ---- | ---- | ---- |
|Tipset|One:Few|Block|
|Block|One:Many|Message|
|Actor|One:Many|Message|
|TransactionHistory|One:Many|Message|
|TransactionRealtime|One:Many|Message|
|StorageMiner|One:Many|Block|
|StorageMiner|One:Many|Message|
|StorageMiner|One:One|Actor|
|StorageMiner|One:Many|StorageAsk|
|StorageClient|One:Many|Message|
|StorageClient|One:Many|StorageAsk|
|StorageHistoryMiners|One:Many|StorageMiner|
|StorageRealtimeMiners|One:Many|StorageMiner|
|StorageHistoryClients|One:Many|StorageClient|
|StorageRealtimeClients|One:Many|StorageClient|
|StorageHistoryDeals|One:Many|StorageAsk|
|StorageRealtimeDeals|One:Many|StorageAsk|


**Jump to** [Content](#Content)


## Collection Design<a name="CollectionDesign"></a>

### BlockChain<a name="BlockChain"></a>
#### Tipset<a name="Tipset"></a>

```
tipset
{
	_id:ObjectID("xxxxxxxxxxxx"),
	height:100,
	lastMinedTime:50s,
	avgMinedTime:45s,
	blockCount:3,
		{
			cid:"bafy2bzaceboap5lhhus773fkswxwflxfg4b2arkilgmdjh74vedvt34kzevto",
			minerAddress:"t2gs2z4aqaj5kivndgcgn5zwbxot42ar3q3e257wi",
			messagecount:50,
			receiptsCount:50,
			block:ObjectID("xxxxxxxxxxxx")
		},
		{
			cid:"bafy2bzaceboap5lhhus773fkswxwflxfg4b2arkilgmdjh74vedvt34kzevto",
			minerAddress:"t2gs2z4aqaj5kivndgcgn5zwbxot42ar3q3e257wi",
			messagecount:50,
			receiptsCount:50,
			block:ObjectID("xxxxxxxxxxxx")
		}		
	}]
}
```

**Jump to** [Content](#Content)


#### Block <a name="Block"></a>

- Need two steps in block page
  - block & tipset(parent)
  - messages

```
block
{
	_id:ObjectID("xxxxxxxxxxxx"),
	cid:"bafy2bzaceboap5lhhus773fkswxwflxfg4b2arkilgmdjh74vedvt34kzevto",
	minerAddress:"t2gs2z4aqaj5kivndgcgn5zwbxot42ar3q3e257wi",
	height: 4669,
	weight: 238356.515,
	messageCount:50,
	receiptsCount:50,
	nonce:  10,
	messagesCid:  "bafy2bzacebc3bt6cedhoyw34drrmjvazhu4oj25er2ebk4u445pzycvq4ta4a",
	receiptsCid:  "bafy2bzacebc3bt6cedhoyw34drrmjvazhu4oj25er2ebk4u445pzycvq4ta4a",
	timestamp:  1566973930,
	ticket:"",
	stateRoot:"",
	size:1M,
	blockReward：20FIL,
	
	storageMiner:ObjectID("xxxxxxxxxxxx")
}
```

**Jump to** [Content](#Content)


#### Message<a name="Message"></a>

```
Message
{
	cid:"bafy2bzacebc3bt6cedhoyw34drrmjvazhu4oj25er2ebk4u445pzycvq4ta4b"
	from:"t1fyhu2e7qy6f22yphkm6wxwds3k3nczk5d2sdw4i",
	to:"t2u26dg7qiclbgcpwvlrt6pjw3liglazmwnb5dnzq",
	value:1,
	nonce:579549,
	method:"slashStorageFault",
	params:"",
	time:"",
	signature:"iwdx5TGW7jABa+tEzS3MrqwfaRwcRRIJ6EHJOk929FVg9vay1HOjmS0gda9fh/c4p78Eto7fPCGYmce7VOR6agA=",	
	receipt:{
		exitCode:44,
		return:[e730]
	},
	block:ObjectID("xxxxxxxxxxxx"),
	
	actor:ObjectID("xxxxxxxxxxxx"),
	storageMiner:ObjectID("xxxxxxxxxxxx"),
	storageClient:ObjectID("xxxxxxxxxxxx")
}
```


**Jump to** [Content](#Content)


#### Actor<a name="Actor"></a>
```
actor
{
	_id:ObjectID("xxxxxxxxxxxx"),
	type:"Miner",//Account,Miner,STORAGEMARKET,PAYMENTBROKER,t01,t099
	address:"t2u2dppg6lczbsukzufyagqkaofbiic7gaqec7izy",//index
	codecid:"bafkreido3m2rjkkiyuph4domh6dlwfkcip5liveg7fw5zpv525l6mnzvey",
	nonce:0,
	balance:100,
	exports:"addAsk (types.AttoFIL, *big.Int) => (*big.Int)
          calculateLateFee (*types.BlockHeight) => (types.AttoFIL)
          changeWorker (address.Address) => ()
          commitSector (uint64, []byte, []byte, []byte, types.PoRepProof) => ()
          getActiveCollateral () => (types.AttoFIL)
          getAsk (*big.Int) => ([]byte)
          getAsks () => ([]uint64)
          getLastUsedSectorID () => (uint64)
          getOwner () => (address.Address)
          getPeerID () => (peer.ID)
          getPoStState () => (*big.Int)
          getPower () => (*types.BytesAmount)
          getProvingPeriod () => (*types.BlockHeight, *types.BlockHeight)
          getProvingSetCommitments () => (map[string]types.Commitments)
          getSectorSize () => (*types.BytesAmount)
          getWorker () => (address.Address)
          isBootstrapMiner () => (bool)
          slashStorageFault () => ()
          submitPoSt ([]types.PoStProof, types.FaultSet, types.IntSet) => ()
          updatePeerID (peer.ID) => ()
          verifyPieceInclusion ([]byte, *types.BytesAmount, uint64, []byte) => ()"
}
```

**Jump to** [Content](#Content)


### Token<a name="Token"></a>

#### TransactionHistory<a name="TransactionHistory"></a>
```
{
	_id:ObjectID("xxxxxxxxxxxx"),
	recordType:"day", // day,week,month,year
	incTransCount:4444FIL,
	totalTransCount:44444FIL,
	incAccount:33,
	totalAccount:333
}
```

**Jump to** [Content](#Content)


#### TransactionRealtime<a name="TransactionRealtime"></a>
```
{
	_id:ObjectID("xxxxxxxxxxxx"),
	time:"",
	count:4444FIL,
	accountCount:55,
	
}
```

**Jump to** [Content](#Content)


#### TokenHistory<a name="TokenHistory"></a>
```
{
	recodeType:day,
	day:"",
	incPlanBlockRewards :42000,
	totalPlanBlockRewards :42000,
	incRealBlockRewards :42000,
	totalRealBlockRewards :42000,
	incLiquid:3200,
	totalLiquid:333333,
	incCollateral:9000,
	totalCollateral:99999,
	incAccountHeldToken:11,
	totalAccountHeldToken:11,
}
```

**Jump to** [Content](#Content)


#### TokenRealtime<a name="TokenRealtime"></a>
```
{
	time:"",
	incBlockRewards :42000,
	totalBlockRewards :42000,
	incLiquid:3200,
	totalLiquid:333333,
	incCollateral:9000,
	totalCollateral:99999,
	incAccountHeldToken:11,
	totalAccountHeldToken:11,
}
```

**Jump to** [Content](#Content)


### StorageMarket<a name="StorageMarket"></a>
#### StorageMiner<a name="StorageMiner"></a>

```
storageMiner{
	_id:ObjectID("xxxxxxxxxxxx"),
	nickName:"arsyun",
	address:"t2u2dppg6lczbsukzufyagqkaofbiic7gaqec7izy",//index
	peerID:"QmeRygishJkb4MDF8FTg4Qxuoy8nJmoUcAxVSSwKNmcY2k",
	creatTime:2019-09-18 09:09:56
	
	active:true,
	ipAddr:113.12.2.11,
	location:ShenZhen,	
	ttl:300ms,
	power:5%,
	capacity:2T,
	blockPercentage:4.9%,
	parentHashes:"bafy2bzaceboap5lhhus773fkswxwflxfg4b2arkilgmdjh74vedvt34kzevto",
	blockHeight:1111,	
	blockTime:"",
	isInConsensus:true,
	lastSeenTime:"",
	reputation:"",
	totalReward:2000FIL,
	totalServiceIncome:3000FIL
}
```

**Jump to** [Content](#Content)


#### StorageClient<a name="StorageClient"></a>

```
storageClient
{
	_id:ObjectID("xxxxxxxxxxxx"),
	address:"t1244qlsrrtl6yau6amxesndx6boktah6csse34oq", //index
	peerID:"QmeRygishJkb4MDF8FTg4Qxuoy8nJmoUcAxVSSwKNmcY2k",
	actorCid:"bafkreido3m2rjkkiyuph4domh6dlwfkcip5liveg7fw5zpv525l6mnzvey",
	creatTime:2019-09-18 09:09:56,
	
	nonce:0,
	balance:100,
	ttl:300ms
}
```

**Jump to** [Content](#Content)


#### StorageAsk<a name="StorageAsk"></a>

```
StorageAsk{ //avg. price ,totoal deal storage Capacity，deals counts，deals time.
	_id:ObjectID("xxxxxxxxxxxx"),
	cid:"bafkreido3m2rjkkiyuph4domh6dlwfkcip5liveg7fw5zpv525l6mnzvey",
	mineraddress:"t2u2dppg6lczbsukzufyagqkaofbiic7gaqec7izy"
	clientaddress:"t1244qlsrrtl6yau6amxesndx6boktah6csse34oq",
	price:20FIL/GB/Month,
	creatTime:2019-09-18 09:09:56,
	modifyTime:2019-09-18 09:09:56,
	dealedTime:2019-09-18 09:09:56,
	Capacity:200T,
	Outdate:2880 block,
	
	status:dealed,
	
	storageMiner:ObjectID("xxxxxxxxxxxx"),
	storageClient:ObjectID("xxxxxxxxxxxx")
}
```

**Jump to** [Content](#Content)


#### StorageHistoryMiners<a name="StorageHistoryMiners"></a>
```
{
	_id:ObjectID("xxxxxxxxxxxx"),
	recordType:"day", // day,week,month,year
	incCount:222,
	totalCount:333,
	activeCount:102
}
```

**Jump to** [Content](#Content)


#### StorageRealtimeMiners<a name="StorageRealtimeMiners"></a>
```
{
	_id:ObjectID("xxxxxxxxxxxx"),
	time:"",
	incCount:222,
	totalCount:333,
	activeCount:102
}
```

**Jump to** [Content](#Content)


#### StorageHistoryClients<a name="StorageHistoryClients"></a>
```
{
	_id:ObjectID("xxxxxxxxxxxx"),
	recordType:"day", // day,week,month,year
	incCount:222,
	totalCount:333
}
```

**Jump to** [Content](#Content)


#### StorageRealtimeClients<a name="StorageRealtimeClients"></a>
```
{
	_id:ObjectID("xxxxxxxxxxxx"),
	time:"",
	incCount:222,
	totalCount:333
}
```

**Jump to** [Content](#Content)


#### StorageHistoryDeals<a name="StorageHistoryDeals"></a>
```
storageDealsDeals{//Day
	_id:ObjectID("xxxxxxxxxxxx"),
	recordType:"day", // day,week,month,year
	askIncCount:40,
	askTotalCount:"",
	askIncCapacity:20PB,
	askIncAvgCapacity:20PB,//per ask
	askIncAvgBlockSize:20PB,//per ask
	askTotalCapacity:20PB,
	askTotalAvgCapacity:20PB,//per ask
	askTotalAvgBlockSize:20PB,//per ask
	askAvgPrice:"",
	askMinPrice:"",
	askMaxPrice:"",
	askStartPrice:"",
	askEndPrice:"",
	dealIncCount:23,
	dealTotalCount:"",
	dealIncCapacity:10PB,
	dealIncAvgCapacity:20PB,//per deal
	dealIncAvgBlockSize:20PB,//per deal
	dealIncAvgDealDuration:5h,//per deal
	dealIncAvgReplicationCount:5,//per deal
	dealTotalCapacity:10PB,
	dealTotalAvgDealDuration:5h,//per deal
	dealTotalAvgBlockSize:20PB,//per deal
	dealTotalAvgCapacity:20PB,//per deal
	dealTotalAvgReplicationCount:5,//per deal
	dealAvgPrice:"",
	dealMinPrice:"",
	dealMaxPrice:"",
	dealStartPrice:"",
	dealEndPrice:"",
}
```

**Jump to** [Content](#Content)


#### StorageRealtimeDeals<a name="StorageRealtimeDeals"></a>
```
storageRealtimeDeals{//24H
	_id:ObjectID("xxxxxxxxxxxx"),
	time:40,
	askCount:"",
	askCapacity:20PB,
	askAvgPrice:"",
	ask24hAvgPrice:11,
	askMinPrice:"",
	askMaxPrice:"",
	dealCount:23,
	dealCapacity:10PB,
	dealAvgPrice:"",
	deal24hAvgPrice:11,
	dealMinPrice:"",
	dealMaxPrice:"",
}
```

**Jump to** [Content](#Content)


### RetrievalMarket(todo)<a name="RetrievalMarket"></a>

#### RetrievalMiner(todo)<a name="RetrievalMiner"></a>

```
retrievalMiner{
	_id:ObjectID("xxxxxxxxxxxx")
}
```

**Jump to** [Content](#Content)


#### RetrievalClient(todo)<a name="RetrievalClient"></a>
```
retrievalClient{
	_id:ObjectID("xxxxxxxxxxxx")
}
```

**Jump to** [Content](#Content)



#### RetrievalAsk(todo)<a name="RetrievalAsk"></a>

```
RetrievalAsk{//avg. price ,totoal deal storage Capacity，deals counts，deals time,Retrieval effective.
	IsDealed:true,

}
```

**Jump to** [Content](#Content)



####  RetrievalHistoryMiners(todo)<a name="RetrievalHistoryMiners"></a>
```
{
	_id:ObjectID("xxxxxxxxxxxx"),
	recordType:"day", // day,week,month,year
	incCount:222,
	totalCount:333,
	activeCount:102
}
```

**Jump to** [Content](#Content)


####  RetrievalRealtimeMiners(todo)<a name="RetrievalRealtimeMiners"></a>
```
{
	_id:ObjectID("xxxxxxxxxxxx"),
	time:"",
	incCount:222,
	totalCount:333,
	activeCount:102
}
```

**Jump to** [Content](#Content)


####  RetrievalHistoryClients(todo)<a name="RetrievalHistoryClients"></a>
```
{
	_id:ObjectID("xxxxxxxxxxxx"),
	recordType:"day", // day,week,month,year
	incCount:222,
	totalCount:333
}
```

**Jump to** [Content](#Content)



####  RetrievalRealtimeClients(todo)<a name="RetrievalRealtimeClients"></a>
```
{
	_id:ObjectID("xxxxxxxxxxxx"),
	time:"",
	incCount:222,
	totalCount:333
}
```


**Jump to** [Content](#Content)


#### RetrievalHistoryDeals(todo)<a name="RetrievalHistoryDeals"></a>
```
storageDealsDeals{//Day
	_id:ObjectID("xxxxxxxxxxxx"),
	recordType:"day", // day,week,month,year
	dealIncCount:23,
	dealTotalCount:"",
	dealIncCapacity:10PB,
	dealIncAvgCapacity:20PB,//per deal
	dealIncAvgBlockSize:20PB,//per deal
	dealIncAvgDealDuration:5h,//per deal
	dealTotalCapacity:10PB,
	dealTotalAvgDealDuration:5h,//per deal
	dealTotalAvgBlockSize:20PB,//per deal
	dealTotalAvgCapacity:20PB,//per deal
	dealAvgPrice:"",
	dealMinPrice:"",
	dealMaxPrice:"",
	dealStartPrice:"",
	dealEndPrice:"",
}
```


**Jump to** [Content](#Content)



#### RetrievalRealtimeDeals(todo)<a name="RetrievalRealtimeDeals"></a>
```
storageRealtimeDeals{//24H
	_id:ObjectID("xxxxxxxxxxxx"),
	time:40,
	dealCount:23,
	dealCapacity:10PB,
	dealAvgPrice:"",
	deal24hAvgPrice:11,
	dealMinPrice:"",
	dealMaxPrice:"",
}
```

**Jump to** [Content](#Content)