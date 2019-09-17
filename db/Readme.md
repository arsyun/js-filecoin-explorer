# Filecoin-explorer db design

| version | date | author | changlog |
| ---- | ---- | ---- | ---- |
|v0.1|2019-9-17|waynewyang|init draft|


## Content

- [Overview](#Overview)
- Role relation
- Collection Design
- Data From Actor
- 满足前端的api设计及完善db设计（待续）

## Overview

Filecoin-explorer get data from two side,
- actor
- filecoin blockchain database

Filecoin-explorer db type,
- mongodb

## Role relation

- Tipset
- Block
- Message
- Receipt
- Actor
- StorageMiner
- StorageClient
- RetrievalMiner
- RetrievalClient
- StorageAsk
- StorageAsk

| role | relation | role | note |
| ---- | ---- | ---- | ---- |
|Tipset|One:Many(-)|Block|Block need be visit independently,as One:Many|
|Block|One:Many(+)|Message||
|Block|One:Many(+)|Receipt||
|Actor|One:Many(+)|Message||
|StorageMiner|One:Many(+)|Block|Mined success|
|StorageMiner|One:Many(+)|Message||
|StorageClient|One:Many(+)|Message||
|StorageMiner|One:Many(+)|StorageAsk||
|StorageClient|One:Many(+)|StorageAsk||
|RetrievalMiner||||
|RetrievalClient||||
|RetrievalAsk||||



## Collection Design

### Tipset

```
Tipset
{
	_id:ObjectID(""),
	ParentTipset:"",
	BlockTime:"",
	Miner:[
		{
			Block:ObjectID("block01"),
			Block:ObjectID("block02")
		}
	]
}
```

### Block

```
BlockCollection
{
	_id:ObjectID("block01"),
	Miner:  ObjectID("Miner01"),
	Weight: "238356.515",
	Height: "4669",
	Nonce:  0,
	Messages:  "bafy2bzacebc3bt6cedhoyw34drrmjvazhu4oj25er2ebk4u445pzycvq4ta4a",
	Receipts:  "bafy2bzacebc3bt6cedhoyw34drrmjvazhu4oj25er2ebk4u445pzycvq4ta4a"
	Timestamp:  1566973930
	StateRoot:"",
	MessageCount:"",
	Size:"",
	Reward：""
}
```

### Message

```
Message
{
	cid:""
	From:"",
	To:"",
	Value:,
	Nonce:,
	Method:,
	Params:,
	Signature:"",	
	Block:ObjectID("block01")
	Actor:ObjectID("actor01")
}
```

### Receipt

```
Receipt
{
	cid:""
	From:"",
	To:"",
	Value:,
	Nonce:,
	Method:,
	Params:,
	Signature:"",	
	Block:ObjectID("block01")
}
```

### Actor（待完善，参照提案）
```
Actor
{
	_id:ObjectID("actor01"),
	Type:
	Address:
	Codecid:
	Nonce:
	Balance:
	Exports:
}
```

### StorageMiner

```
StorageMiner{
	_id:ObjectID("Miner01"),
	NickName:"",
	Address:"",
	PeerID:"",
	ParentHashes:"",
	Power:"",
	Capacity:"",
	BlockPercentage:"",
	BlockHeight:"",	
	BlockTime:"",
	IsInConsensus:""
	BlockInTipset:"",
	LastSeenTime:"",
	Reputation:"",
	IpAddr:"",.
	Location:"",
	CreatTime:""
}
```

### StorageClient

```
StorageClient
{
	_id:ObjectID("Client01")
}
```

### RetrievalMiner

```
RetrievalMiner{
	_id:ObjectID("Miner01")
}
```

### RetrievalClient
```
RetrievalClient{
	_id:ObjectID("Client01")
}
```

### StorageAsk

```
StorageAsk{ //avg. price ,totoal deal storage Capacity，deals counts，deals time.
	IsDealed:true,
	Cid
	Mineraddr
	Clientaddr
	Price
	Time：
	Capacity:
	Outdate:
}
```

### RetrievalAsk

```
RetrievalAsk{//avg. price ,totoal deal storage Capacity，deals counts，deals time,Retrieval effective.
	IsDealed:true,

}
```



### Data From Actor

- Best TipSet

- Current Network Storage Capacity

- Current Network Utilization ？
- balance 



### 满足前端的api设计及完善db设计（待续）

#### OverView


##### 通用搜索栏

- 交易明细（cid）
  - 平均交易价格（标准化为FIL / GB /月或$ / GB /月）随着时间的推移
  - 交易量随时间变化的交互式图表
  - 平均交易时间
  - 平均交易规模
  - 平均交易复制因子
  - 平均行业规模
  - 平均交易数量/块数

##### 主要视图

- 交易视图
  - 平均交易价格（标准化为FIL / GB /月或$ / GB /月）随着时间的推移
  - 交易量随时间变化的交互式图表
  - 平均交易时间
  - 平均交易规模
  - 平均交易复制因子
  - 平均行业规模
  - 平均交易数量/块数

- 存储市场

  - 存储矿工视图

    - 矿工总数趋势图
      - 历史总矿工
      - 在线总矿工
      - 离线总矿工
    - 新增矿工趋势图
    - 存储交易趋势图
      - 订单数量
      - 存储容量
    - 矿工排行榜
      - 存储容量
      - 存储速度
      - 声望
      - 存储收益

  - 存储客户视图

    - 客户总数趋势图
      - 历史总客户
      - 在线总客户
      - 离线总客户
    - 新增客户趋势图
    - 客户排行榜
      - 总订单数/容量
      - 总花费


- 检索市场

  - 检索矿工视图
    - 矿工总数趋势图
      - 历史总矿工
      - 在线总矿工
      - 离线总矿工
    - 新增矿工趋势图
    - 存储交易趋势图
      - 订单数量
      - 检索容量
    - 矿工排行榜
      - 检索容量
      - 检索速度
      - 声望
      - 检索收益
    
  - 存储客户视图
  - 客户总数趋势图
    - 历史总客户
    - 在线总客户
    - 离线总客户
  - 新增客户趋势图
  - 客户排行榜
    - 总订单数/容量
    - 总花费



- FIL代币视图
  - fil释放曲线（已经释放的fil以及抵押）
  - fil释放曲线（已经释放的fil以及抵押）
  - 抵押趋势图
  - 爆块总奖励趋势图
  - fil计划释放曲线图