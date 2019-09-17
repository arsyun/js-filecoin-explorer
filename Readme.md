# js-filecoin-explorer

- Usage
    - npm install
    - npm run build
    - npm start

- Code
    - front
        - React
        - Redux
        - Axios
        - Webpack
        - Less
        - Storybook (类似antd的前端UI框架)
        - amCharts (地图组件的组件库)
        - Snap-SVG（svg绘制库）
        - highcharts (数学图标类组件库)
    - Backend
        - Nodejs
        - Express
        - Axios
        - Mongodb



#### 目录结构
+ public目录
	+ index.html
    + favicon.ico		网站ico配置
    + manifest.json		相关各种配置文件
    + robots.txt		搜索引擎抓取配置
+ src目录
    + page目录
		+ Index组件（首页）
		+ 全网总览页面
		+ 存储市场页面
		+ 检索市场页面
		+ 代币发行情况页面
			+ Nav组件：头部公用组件
				+ logo组件
				+ 菜单列表组件
				+ 搜索框组件
			+ Body组件：
		+ index.css 全局样式CSS文件
	+ component目录
		+ table组件目录
			+ 共识详情表格 antd table
			+ 交易详情表格
			+ 分页组件
		+ model组件目录
			+ 消息提示拟态框
			+ 二次确认拟态框
			+ 填写信息拟态框
		+ 数学图形组件目录
			+ 存储总量折线图 highchart offical
			+ 检索总量折线图
			+ 矿机存储总量演变图
			+ 全网总算力折线图
			+ 检索查询频率图
			+ 检索时间及矿机关系图
			+ 每秒平均算力图
			+ 检索平均价格折线图
			+ 已经分发的FIL统计图
			+ 未分发的FIL统计图
			+ 活动中的地址统计图
			+ 总存储空间及FIL关系图
			+ FIL网络区块奖励曲线图
		+ 地图组件目录
			+ 节点展示地图组件  amCharts 
		+ 数据展示块组件目录
			+ 最优区块展示组件
			+ 存储价格展示组件
			+ 网络总存储力组件
			+ 当前网络使用率组件
			+ 检索均价展示组件
			+ 区块平均发现时间组件
			+ 上一个区块的发现时间 *	
		+ 区块的展示组件目录
			+ 区块及其中包含的事务组件 react-svg
	+ api目录
		+ 相关配置文件目录
		+ 各种公用函数目录
		+ 获取api及数据各种处理函数目录

#### 自适应方案 react-bootstrap 或者独立完成
#### svg绘图方案 react-svg