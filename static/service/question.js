//type题目类型
// type:chinese 语文
// type:mathe   数学
// type:history 历史
// type:english 英语
// type:biological 生物
// type:sports 体育
// type:geography 地理
// type:physical 物理
// type:chemistry 化学
// type:music 音乐
// type:art 美术
// type = 0 文科
// type = 1 理科
// type = 2 文科理科共有
// type = 3 艺术类

var question = {
	ques01: {
		title: '新晋“食物派”诗人的名句：“一想到高考，我整个人都_______了。”',
		answers: ['驴打滚', '狗不理', '毛血旺'],
		subject: 'chinese',
		type: 0,
		subjectCh: '语文题'
	},
	ques02: {
		title: '乾隆是康熙的孙子，雍正是嘉庆的爷爷，康熙是雍正的老爸。请问，乾隆和嘉庆的关系是？',
		answers: ['叔侄', '他大爷', '父子'],
		subject: 'history',
		type: 0,
		subjectCh: '历史题'
	},
	ques03: {
		title: 'We are family”的正确翻译是？',
		answers: ['我们是伐木累', '我们是一家人', '娘娘，你说呢'],
		subject: 'english',
		type: 0,
		subjectCh: '英语题'
	},
	ques04: {
		title: '生物学博士向女友深情表白，以下哪句是“我想和你结婚”的含义？',
		answers: ['我有一条祖传染色体想给你', '我妈说，牵手会怀孕呢', '你是我找了好久的那根肋骨'],
		subject: 'biological',
		type: 2,
		subjectCh: '生物题'
	},
	ques05: {
		title: '动物奥林匹克运动会上，340斤的母猪要爬上15米高的树，每天爬4米，睡梦中会下滑3米，请问它几天能爬到树顶？',
		answers: ['15天', '12天', '我的数学是体育老师教的'],
		subject: 'sports',
		type: 2,
		subjectCh: '体育题'
	},
	ques06: {
		title: '以下哪项是日本AV产业发达的地理原因？',
		answers: ['紧邻东南亚各国，海外市场广阔', '国民开放程度高', '温带海洋性气候，适合拍摄'],
		subject: 'geography',
		type: 2,
		subjectCh: '地理题'
	},
	ques07: {
		title: '一个炎热的午后，奶茶妹妹花了3块钱原材料制作了一杯口感滑溜的奶茶，4块钱卖出，然后又买了4块钱原材料再做了一杯，5块钱卖出。艾玛呀，奶茶妹妹究竟是赚了还是亏了？',
		answers: ['赚了', '亏了', '不知道，问那个叫东哥的男人'],
		subject: 'mathe',
		type: 1,
		subjectCh: '数学题'
	},
	ques08: {
		title: '1946年民国高考题：有一个猎人，朝天开枪后，子弹再也没有回来。求子弹的速度？',
		answers: ['5.3km/s，子弹达到第一宇宙速度绕地球飞行', '6.1km/s，子弹达到第一宇宙速度绕地球飞行', '7.9km/s，子弹达到第一宇宙速度绕地球飞行'],
		subject: 'physical',
		type: 1,
		subjectCh: '物理题'
	},
	ques09: {
		title: '屁的主要化学成分是_____？',
		answers: ['硫化氢', '丙乙烯', '甲醛'],
		subject: 'chemistry',
		type: 1,
		subjectCh: '化学题'
	},
	ques010: {
		title: '请敲击代表“发”的琴键',
		answers: [''],
		subject: 'music',
		type: 3,
		subjectCh: '音乐题'
	},
	ques011: {
		title: '点击以下九宫格中，与其他色块颜色不同的色块。',
		answers: [''],
		subject: 'art',
		type: 3,
		subjectCh: '美术题'
	}
};