# Filecoin-explorer db design





StorageClient

RetrievalClient

StorageMiner ——— 1:MoreMany ——— Block

Tipset ——— 1:LessMany ——— Block (但是Block需要单独访问，故采用1引用多，类似1-Many的做法)

Block ——— 1:MoreMany——— Message （多引用1）

Block ——— 1:MoreMany——— Receipt

Actor ——— 1:MoreMany ——— Message



NoDb：

1 Best TipSet

2 Current Network Storage Capacity

3 Current Network Utilization ？

4 查询钱包余额

- 平均交易价格（标准化为FIL / GB /月或$ / GB /月）随着时间的推移
- 交易量随时间变化的交互式图表
- 平均交易时间
- 平均交易规模
- 平均交易复制因子
- 平均行业规模
- 平均交易数量/块数



未解决部分：抵押

RetrievalMarket{

​	1 矿工

​	1）矿工总数趋势图

- 历史总矿工

- 在线总矿工

- 离线总矿工

  

  2）新增矿工趋势图

  3）检索交易趋势图

  	- 订单数量
  	- 存储容量

  4）矿工 排行榜

  	- 检索容量
  	- 检索速度
  	- 声望
  	- 检索收益

}

StorageMarket{

​	1 矿工

​	1）矿工总数趋势图

  - 历史总矿工

  - 在线总矿工

  - 离线总矿工

    

    2）新增矿工趋势图

    3）存储交易趋势图

    - 订单数量
    - 存储容量

    4）矿工排名榜

    	- 挖矿功率
    	- 爆块数量
    	- 声望
    	- 存储收益

​	2 客户

​	1）客户总数趋势图

 - 历史总客户

 - 在线总客户

 - 离线总客户

   

   2）新增客户趋势图

   3）客户排行榜

   	- 总订单容量
   	- 总花费

}



代币视图{

​	1 fil释放曲线（已经释放的fil以及抵押）

​	2 fil地址总数量以及趋势图

​	3 抵押趋势图

​	4 爆块总奖励趋势图

​	5 fil计划释放曲线图

}



StorageClient{

​	_id:ObjectID("Miner01"),

}



StorageMiner{

​	_id:ObjectID("Miner01"),

​	NickName:"",

​	Address:"",

​	PeerID:"",

​	ParentHashes:"",

​	Power:"",

​	Capacity:"",

​	BlockPercentage:"",

​	BlockHeight:"",	

​	BlockTime:"",

​	IsInConsensus:""

​	BlockInTipset:"",

​	LastSeenTime:"",

​	声誉:"",

​	IpAddr:"",.

​	Location:"",

​	CreatTime:"",

}



Tipset{

​	_id:ObjectID("Tipset01"),

​	ParentTipset:"",

​	BlockTime:""	

​	Miner:[

​		{

​			Block:ObjectID("block01"),

​			Block:ObjectID("block02")

​		}

​	]

}



BlockCollection{

​	_id:ObjectID("block01"),

​	Miner:  ObjectID("Miner01"),

​	Weight: "238356.515",

​	Height: "4669",

​	Nonce:  0,

​	Messages:  "bafy2bzacebc3bt6cedhoyw34drrmjvazhu4oj25er2ebk4u445pzycvq4ta4a",

​	Receipts:  "bafy2bzacebc3bt6cedhoyw34drrmjvazhu4oj25er2ebk4u445pzycvq4ta4a"

​	Timestamp:  1566973930

​	StateRoot:"",

​	MessageCount:"",

​	Size:"",

​	奖励："",

}



MessageCollection{

​	cid:""

​	From:"",

​	To:"",

​	value

​	nonce

​	method

​	params

​	SIGNATURE	

​	Block:ObjectID("block01")

}



ReceiptCollection{

​	cid:""

​	From:"",

​	To:"",

​	value

​	nonce

​	method

​	params

​	SIGNATURE	

​	Block:ObjectID("block01"),

}



RetrievalMiner{

​	_id:ObjectID("Miner01"),

}



RetrievalClient{

​	_id:ObjectID("Client01"),

}



StorageAsk{ //计算存储平均价格,交易存储量，交易笔数，交易时间

​	IsDealed:true,

​	cid

​	mineraddr

​	clientaddr

​	price

​	time：

​	容量

​	到期时间

}



RetrievalAsk{//计算检索平均价格，交易存储量，交易笔数，交易时间,平均检索效率（GB/s）

​	IsDealed:true,

}



Actor{

Type

ADDRESS

CODE CID

NONCE

BALANCE

### EXPORTS

}









