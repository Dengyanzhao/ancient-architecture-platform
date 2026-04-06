import React, { useState } from 'react';

// 题库 - 约160题
const questionBank = {
  '建筑概述': [
    { id: 1, question: '中国古代建筑体系形成于哪个时期？', options: ['原始社会', '奴隶社会', '封建社会', '近现代'], correctAnswer: 1 },
    { id: 2, question: '中国古代建筑的主要材料是什么？', options: ['石材', '木材', '砖瓦', '混凝土'], correctAnswer: 1 },
    { id: 3, question: '中国古代建筑的结构特点是什么？', options: ['框架结构', '砖混结构', '钢筋混凝土结构', '钢结构'], correctAnswer: 0 },
    { id: 4, question: '中国古代建筑的屋顶形式中等级最高的是？', options: ['庑殿顶', '歇山顶', '悬山顶', '硬山顶'], correctAnswer: 0 },
    { id: 5, question: '中国古代建筑中用来支撑屋顶的木构件是？', options: ['柱', '梁', '枋', '斗拱'], correctAnswer: 3 },
    { id: 6, question: '中国古代建筑的色彩中，哪种颜色象征皇权？', options: ['红色', '黄色', '蓝色', '绿色'], correctAnswer: 1 },
    { id: 7, question: '中国古代建筑的平面布局通常采用什么形式？', options: ['圆形', '方形', '矩形', '庭院式'], correctAnswer: 3 },
    { id: 8, question: '中国古代建筑中，等级最高的门钉数量是？', options: ['72颗', '81颗', '90颗', '99颗'], correctAnswer: 1 },
    { id: 9, question: '中国古代建筑的发展高峰期是哪个朝代？', options: ['秦朝', '汉朝', '唐朝', '明清'], correctAnswer: 2 },
    { id: 10, question: '中国古代建筑中，用来分隔空间的墙体称为？', options: ['山墙', '檐墙', '隔墙', '影壁'], correctAnswer: 2 },
    { id: 11, question: '中国古代建筑的装饰元素中，象征吉祥的图案是？', options: ['龙', '凤', '麒麟', '以上都是'], correctAnswer: 3 },
    { id: 12, question: '中国古代建筑中，用来排水的构件是？', options: ['斗拱', '飞檐', '滴水', '瓦当'], correctAnswer: 2 },
    { id: 13, question: '中国古代建筑的建筑模数制度称为？', options: ['材份制', '斗口制', '营造法式', '工程做法'], correctAnswer: 0 },
    { id: 14, question: '中国古代建筑中，位于建筑正面中央的门称为？', options: ['正门', '中门', '大门', '仪门'], correctAnswer: 0 },
    { id: 15, question: '中国古代建筑的屋顶坡度主要取决于什么？', options: ['美观', '排水', '等级', '气候'], correctAnswer: 1 },
    { id: 16, question: '中国古代建筑中，用来支撑屋檐的构件是？', options: ['柱', '梁', '斗拱', '枋'], correctAnswer: 2 },
    { id: 17, question: '中国古代建筑的墙体材料主要是？', options: ['土坯', '砖', '石', '以上都是'], correctAnswer: 3 },
    { id: 18, question: '中国古代建筑中，用来防御的墙体称为？', options: ['城墙', '院墙', '山墙', '围墙'], correctAnswer: 0 },
    { id: 19, question: '中国古代建筑的设计理念体现了什么思想？', options: ['天人合一', '以人为本', '实用主义', '形式主义'], correctAnswer: 0 },
    { id: 20, question: '中国古代建筑中，用来连接建筑与地面的台阶称为？', options: ['踏道', '御道', '甬道', '通道'], correctAnswer: 0 }
  ],
  '宫殿建筑': [
    { id: 1, question: '中国最大的古代宫殿建筑群是？', options: ['颐和园', '故宫', '布达拉宫', '承德避暑山庄'], correctAnswer: 1 },
    { id: 2, question: '故宫始建于哪个朝代？', options: ['元朝', '明朝', '清朝', '宋朝'], correctAnswer: 1 },
    { id: 3, question: '故宫的设计者是谁？', options: ['蒯祥', '李春', '鲁班', '宇文恺'], correctAnswer: 0 },
    { id: 4, question: '故宫中最大的殿堂是？', options: ['乾清宫', '太和殿', '中和殿', '保和殿'], correctAnswer: 1 },
    { id: 5, question: '故宫的建筑布局体现了什么思想？', options: ['道家思想', '儒家思想', '法家思想', '墨家思想'], correctAnswer: 1 },
    { id: 6, question: '沈阳故宫是哪个朝代的皇宫？', options: ['元朝', '明朝', '清朝', '宋朝'], correctAnswer: 2 },
    { id: 7, question: '故宫的护城河宽约多少米？', options: ['10米', '20米', '50米', '100米'], correctAnswer: 2 },
    { id: 8, question: '故宫的建筑面积约为多少万平方米？', options: ['15万平方米', '25万平方米', '72万平方米', '100万平方米'], correctAnswer: 2 },
    { id: 9, question: '故宫中皇帝居住的宫殿是？', options: ['太和殿', '乾清宫', '交泰殿', '坤宁宫'], correctAnswer: 1 },
    { id: 10, question: '故宫的午门有几个门洞？', options: ['3个', '5个', '7个', '9个'], correctAnswer: 1 },
    { id: 11, question: '故宫中皇后居住的宫殿是？', options: ['乾清宫', '坤宁宫', '交泰殿', '储秀宫'], correctAnswer: 1 },
    { id: 12, question: '故宫的建筑颜色以什么为主？', options: ['红色和黄色', '蓝色和绿色', '白色和灰色', '黑色和金色'], correctAnswer: 0 },
    { id: 13, question: '故宫中用于皇帝举行大典的宫殿是？', options: ['乾清宫', '太和殿', '中和殿', '保和殿'], correctAnswer: 1 },
    { id: 14, question: '故宫中用于皇帝休息的宫殿是？', options: ['乾清宫', '太和殿', '中和殿', '保和殿'], correctAnswer: 2 },
    { id: 15, question: '故宫中用于皇帝宴请宾客的宫殿是？', options: ['乾清宫', '太和殿', '中和殿', '保和殿'], correctAnswer: 3 },
    { id: 16, question: '故宫的建筑等级制度体现在哪里？', options: ['建筑高度', '屋顶形式', '门钉数量', '以上都是'], correctAnswer: 3 },
    { id: 17, question: '故宫的御花园位于哪个位置？', options: ['故宫前部', '故宫中部', '故宫后部', '故宫左侧'], correctAnswer: 2 },
    { id: 18, question: '故宫的角楼有几个角？', options: ['4个', '8个', '12个', '16个'], correctAnswer: 1 },
    { id: 19, question: '故宫的建筑材料主要是什么？', options: ['木材', '石材', '砖瓦', '以上都是'], correctAnswer: 3 },
    { id: 20, question: '故宫于哪一年被列为世界文化遗产？', options: ['1985年', '1987年', '1990年', '1992年'], correctAnswer: 1 },
    { id: 21, question: '故宫的前朝三大殿不包括？', options: ['太和殿', '中和殿', '保和殿', '乾清宫'], correctAnswer: 3 },
    { id: 22, question: '故宫的后寝三宫不包括？', options: ['乾清宫', '交泰殿', '坤宁宫', '养心殿'], correctAnswer: 3 },
    { id: 23, question: '故宫的建筑面积约占北京城区的多少？', options: ['1/50', '1/100', '1/200', '1/300'], correctAnswer: 1 },
    { id: 24, question: '故宫的屋顶采用什么颜色的琉璃瓦？', options: ['红色', '黄色', '蓝色', '绿色'], correctAnswer: 1 },
    { id: 25, question: '故宫的午门是按照什么形状建造的？', options: ['方形', '圆形', '凹形', '凸形'], correctAnswer: 2 },
    { id: 26, question: '故宫中用于存放皇帝御玺的宫殿是？', options: ['乾清宫', '交泰殿', '坤宁宫', '养心殿'], correctAnswer: 1 },
    { id: 27, question: '故宫的九龙壁位于哪个位置？', options: ['太和门东侧', '皇极门东侧', '乾清门东侧', '神武门东侧'], correctAnswer: 1 },
    { id: 28, question: '故宫中用于科举考试的场所是？', options: ['太和殿', '保和殿', '乾清宫', '文华殿'], correctAnswer: 1 },
    { id: 29, question: '故宫的建筑布局中，前朝后寝体现了什么思想？', options: ['天人合一', '尊卑有序', '阴阳五行', '风水学说'], correctAnswer: 1 },
    { id: 30, question: '故宫中最大的戏台是？', options: ['畅音阁', '德和园', '漱芳斋', '倦勤斋'], correctAnswer: 0 }
  ],
  '宗教建筑': [
    { id: 1, question: '少林寺位于哪个省份？', options: ['河南省', '山西省', '四川省', '湖北省'], correctAnswer: 0 },
    { id: 2, question: '布达拉宫是哪个宗教的建筑？', options: ['佛教', '道教', '伊斯兰教', '基督教'], correctAnswer: 0 },
    { id: 3, question: '少林寺始建于哪个朝代？', options: ['秦朝', '汉朝', '北魏', '唐朝'], correctAnswer: 2 },
    { id: 4, question: '中国四大佛教名山不包括？', options: ['五台山', '峨眉山', '普陀山', '黄山'], correctAnswer: 3 },
    { id: 5, question: '道教建筑中最高级别的宫观是？', options: ['宫', '观', '庙', '寺'], correctAnswer: 0 },
    { id: 6, question: '悬空寺位于哪个省份？', options: ['山西省', '陕西省', '河南省', '河北省'], correctAnswer: 0 },
    { id: 7, question: '大昭寺位于哪个城市？', options: ['北京', '拉萨', '西安', '杭州'], correctAnswer: 1 },
    { id: 8, question: '乐山大佛位于哪个省份？', options: ['四川省', '重庆市', '云南省', '贵州省'], correctAnswer: 0 },
    { id: 9, question: '云冈石窟位于哪个省份？', options: ['河南省', '山西省', '甘肃省', '陕西省'], correctAnswer: 1 },
    { id: 10, question: '莫高窟位于哪个省份？', options: ['甘肃省', '新疆维吾尔自治区', '青海省', '宁夏回族自治区'], correctAnswer: 0 },
    { id: 11, question: '五台山是哪个宗教的圣地？', options: ['佛教', '道教', '伊斯兰教', '基督教'], correctAnswer: 0 },
    { id: 12, question: '武当山是哪个宗教的圣地？', options: ['佛教', '道教', '伊斯兰教', '基督教'], correctAnswer: 1 },
    { id: 13, question: '灵隐寺位于哪个城市？', options: ['北京', '上海', '杭州', '南京'], correctAnswer: 2 },
    { id: 14, question: '白马寺位于哪个省份？', options: ['河南省', '山西省', '陕西省', '河北省'], correctAnswer: 0 },
    { id: 15, question: '大雁塔位于哪个城市？', options: ['北京', '西安', '洛阳', '南京'], correctAnswer: 1 },
    { id: 16, question: '小雁塔位于哪个城市？', options: ['北京', '西安', '洛阳', '南京'], correctAnswer: 1 },
    { id: 17, question: '应县木塔位于哪个省份？', options: ['山西省', '河北省', '陕西省', '内蒙古自治区'], correctAnswer: 0 },
    { id: 18, question: '保国寺位于哪个省份？', options: ['浙江省', '江苏省', '安徽省', '福建省'], correctAnswer: 0 },
    { id: 19, question: '法门寺位于哪个省份？', options: ['陕西省', '山西省', '河南省', '甘肃省'], correctAnswer: 0 },
    { id: 20, question: '塔尔寺位于哪个省份？', options: ['青海省', '甘肃省', '四川省', '西藏自治区'], correctAnswer: 0 },
    { id: 21, question: '佛教建筑中，供奉佛像的主要殿堂称为？', options: ['大雄宝殿', '天王殿', '藏经楼', '钟楼'], correctAnswer: 0 },
    { id: 22, question: '道教建筑中，用于举行宗教仪式的场所称为？', options: ['大殿', '道观', '宫观', '庙堂'], correctAnswer: 2 },
    { id: 23, question: '伊斯兰教建筑的主要特点是？', options: ['尖顶', '圆顶', '飞檐', '斗拱'], correctAnswer: 1 },
    { id: 24, question: '基督教建筑中，哥特式建筑的特点是？', options: ['尖拱', '圆拱', '平顶', '飞檐'], correctAnswer: 0 },
    { id: 25, question: '中国现存最早的木结构宗教建筑是？', options: ['佛光寺东大殿', '南禅寺大殿', '独乐寺观音阁', '应县木塔'], correctAnswer: 1 },
    { id: 26, question: '佛教四大名山之首是？', options: ['五台山', '峨眉山', '普陀山', '九华山'], correctAnswer: 0 },
    { id: 27, question: '道教四大名山不包括？', options: ['武当山', '青城山', '龙虎山', '黄山'], correctAnswer: 3 },
    { id: 28, question: '藏传佛教建筑的特点是？', options: ['碉楼式', '宫殿式', '坛城式', '庭院式'], correctAnswer: 2 },
    { id: 29, question: '佛教建筑中，塔的主要功能是？', options: ['居住', '防御', '存放舍利', '祭祀'], correctAnswer: 2 },
    { id: 30, question: '中国现存最大的佛教石窟是？', options: ['莫高窟', '云冈石窟', '龙门石窟', '麦积山石窟'], correctAnswer: 0 }
  ],
  '民居建筑': [
    { id: 1, question: '北京传统民居的代表形式是？', options: ['土楼', '四合院', '窑洞', '竹楼'], correctAnswer: 1 },
    { id: 2, question: '福建土楼主要分布在哪个地区？', options: ['闽南地区', '闽西地区', '闽北地区', '闽东地区'], correctAnswer: 1 },
    { id: 3, question: '窑洞主要分布在哪个地区？', options: ['华北平原', '东北平原', '黄土高原', '云贵高原'], correctAnswer: 2 },
    { id: 4, question: '吊脚楼是哪个民族的传统民居？', options: ['汉族', '苗族', '藏族', '蒙古族'], correctAnswer: 1 },
    { id: 5, question: '徽派建筑主要分布在哪个省份？', options: ['安徽省', '江苏省', '浙江省', '江西省'], correctAnswer: 0 },
    { id: 6, question: '四合院的布局体现了什么思想？', options: ['等级制度', '自由开放', '天人合一', '因地制宜'], correctAnswer: 0 },
    { id: 7, question: '土楼的主要功能是什么？', options: ['居住', '防御', '祭祀', '商业'], correctAnswer: 1 },
    { id: 8, question: '蒙古包是哪个民族的传统民居？', options: ['蒙古族', '藏族', '维吾尔族', '哈萨克族'], correctAnswer: 0 },
    { id: 9, question: '碉楼主要分布在哪个省份？', options: ['广东省', '四川省', '云南省', '贵州省'], correctAnswer: 0 },
    { id: 10, question: '干栏式建筑主要分布在哪个地区？', options: ['北方地区', '南方地区', '西北地区', '东北地区'], correctAnswer: 1 },
    { id: 11, question: '四合院的大门通常开在哪个方向？', options: ['东', '西', '南', '北'], correctAnswer: 2 },
    { id: 12, question: '徽派建筑的特点是什么？', options: ['粉墙黛瓦', '青砖灰瓦', '红砖绿瓦', '黄土窑洞'], correctAnswer: 0 },
    { id: 13, question: '土楼的建筑材料主要是什么？', options: ['木材', '石材', '夯土', '砖瓦'], correctAnswer: 2 },
    { id: 14, question: '窑洞的优点是什么？', options: ['冬暖夏凉', '通风良好', '采光充足', '抗震性强'], correctAnswer: 0 },
    { id: 15, question: '蒙古包的特点是什么？', options: ['固定不动', '便于拆装', '高大宏伟', '建筑复杂'], correctAnswer: 1 },
    { id: 16, question: '江南水乡民居的特点是什么？', options: ['依山而建', '傍水而居', '黄土窑洞', '草原帐篷'], correctAnswer: 1 },
    { id: 17, question: '东北民居的特点是什么？', options: ['四合院', '土楼', '窑洞', '火炕'], correctAnswer: 3 },
    { id: 18, question: '藏族民居的代表形式是？', options: ['四合院', '土楼', '碉房', '竹楼'], correctAnswer: 2 },
    { id: 19, question: '维吾尔族民居的特点是什么？', options: ['四合院', '土楼', '阿以旺', '竹楼'], correctAnswer: 2 },
    { id: 20, question: '彝族民居的代表形式是？', options: ['四合院', '土楼', '土掌房', '竹楼'], correctAnswer: 2 },
    { id: 21, question: '四合院的中轴线上的建筑称为？', options: ['正房', '厢房', '倒座', '耳房'], correctAnswer: 0 },
    { id: 22, question: '土楼的建筑平面形状不包括？', options: ['圆形', '方形', '椭圆形', '三角形'], correctAnswer: 3 },
    { id: 23, question: '窑洞的建造方式不包括？', options: ['靠崖式', '下沉式', '独立式', '架空式'], correctAnswer: 3 },
    { id: 24, question: '吊脚楼的主要特点是？', options: ['依山而建', '傍水而居', '底层架空', '屋顶陡峭'], correctAnswer: 2 },
    { id: 25, question: '徽派建筑的马头墙主要功能是？', options: ['美观', '防火', '防风', '防盗'], correctAnswer: 1 },
    { id: 26, question: '江南水乡民居的屋顶形式多为？', options: ['庑殿顶', '歇山顶', '悬山顶', '硬山顶'], correctAnswer: 3 },
    { id: 27, question: '东北民居的火炕主要功能是？', options: ['取暖', '做饭', '储物', '祭祀'], correctAnswer: 0 },
    { id: 28, question: '藏族碉房的建筑材料主要是？', options: ['木材', '石材', '夯土', '砖瓦'], correctAnswer: 1 },
    { id: 29, question: '维吾尔族阿以旺的特点是？', options: ['四合院', '土楼', '窑洞', '带天窗的大厅'], correctAnswer: 3 },
    { id: 30, question: '中国传统民居的共同特点是？', options: ['因地制宜', '等级森严', '华丽壮观', '结构复杂'], correctAnswer: 0 }
  ],
  '园林建筑': [
    { id: 1, question: '苏州园林中最著名的是？', options: ['颐和园', '拙政园', '留园', '圆明园'], correctAnswer: 1 },
    { id: 2, question: '颐和园位于哪个城市？', options: ['北京', '苏州', '杭州', '南京'], correctAnswer: 0 },
    { id: 3, question: '承德避暑山庄是哪个朝代的皇家园林？', options: ['元朝', '明朝', '清朝', '宋朝'], correctAnswer: 2 },
    { id: 4, question: '苏州园林的特点是什么？', options: ['气势恢宏', '小巧玲珑', '庄严肃穆', '简洁明快'], correctAnswer: 1 },
    { id: 5, question: '圆明园被称为？', options: ['万园之园', '皇家园林', '江南园林', '北方园林'], correctAnswer: 0 },
    { id: 6, question: '寄畅园位于哪个城市？', options: ['苏州', '无锡', '常州', '南京'], correctAnswer: 1 },
    { id: 7, question: '网师园的特点是什么？', options: ['以水为中心', '以山为中心', '以建筑为中心', '以植物为中心'], correctAnswer: 0 },
    { id: 8, question: '颐和园的前身是什么？', options: ['清漪园', '圆明园', '畅春园', '静宜园'], correctAnswer: 0 },
    { id: 9, question: '中国四大名园不包括？', options: ['拙政园', '留园', '颐和园', '豫园'], correctAnswer: 3 },
    { id: 10, question: '园林建筑中用于观赏风景的建筑是？', options: ['亭', '台', '楼', '阁'], correctAnswer: 0 },
    { id: 11, question: '拙政园的设计者是谁？', options: ['文徵明', '唐寅', '仇英', '沈周'], correctAnswer: 0 },
    { id: 12, question: '留园的特点是什么？', options: ['以水为中心', '以山为中心', '以建筑为中心', '以植物为中心'], correctAnswer: 2 },
    { id: 13, question: '颐和园的主体建筑是？', options: ['佛香阁', '排云殿', '仁寿殿', '德和园'], correctAnswer: 0 },
    { id: 14, question: '承德避暑山庄的特点是什么？', options: ['小巧玲珑', '自然天成', '建筑密集', '人工造景'], correctAnswer: 1 },
    { id: 15, question: '沧浪亭位于哪个城市？', options: ['苏州', '杭州', '南京', '扬州'], correctAnswer: 0 },
    { id: 16, question: '狮子林位于哪个城市？', options: ['苏州', '杭州', '南京', '扬州'], correctAnswer: 0 },
    { id: 17, question: '耦园位于哪个城市？', options: ['苏州', '杭州', '南京', '扬州'], correctAnswer: 0 },
    { id: 18, question: '个园位于哪个城市？', options: ['苏州', '杭州', '南京', '扬州'], correctAnswer: 3 },
    { id: 19, question: '何园位于哪个城市？', options: ['苏州', '杭州', '南京', '扬州'], correctAnswer: 3 },
    { id: 20, question: '豫园位于哪个城市？', options: ['北京', '上海', '杭州', '南京'], correctAnswer: 1 },
    { id: 21, question: '中国古典园林的造园手法不包括？', options: ['借景', '障景', '框景', '对景'], correctAnswer: 3 },
    { id: 22, question: '苏州园林中，以假山著称的是？', options: ['拙政园', '留园', '狮子林', '沧浪亭'], correctAnswer: 2 },
    { id: 23, question: '颐和园中的昆明湖是模仿哪个湖泊建造的？', options: ['太湖', '西湖', '洞庭湖', '鄱阳湖'], correctAnswer: 1 },
    { id: 24, question: '中国古典园林中，用于读书的建筑称为？', options: ['亭', '台', '楼', '阁'], correctAnswer: 3 },
    { id: 25, question: '苏州园林的布局特点是？', options: ['对称式', '自由式', '规则式', '几何式'], correctAnswer: 1 },
    { id: 26, question: '承德避暑山庄的占地面积约为多少公顷？', options: ['500公顷', '564公顷', '600公顷', '650公顷'], correctAnswer: 1 },
    { id: 27, question: '中国古典园林中，用于观赏荷花的建筑称为？', options: ['荷风四面亭', '知春亭', '听雨轩', '远香堂'], correctAnswer: 3 },
    { id: 28, question: '苏州园林中，以水池为中心的是？', options: ['拙政园', '留园', '狮子林', '沧浪亭'], correctAnswer: 0 },
    { id: 29, question: '中国古典园林的植物配置讲究什么？', options: ['四季常青', '四季有花', '乔灌结合', '以上都是'], correctAnswer: 3 },
    { id: 30, question: '颐和园的长廊全长约多少米？', options: ['500米', '728米', '1000米', '1200米'], correctAnswer: 1 }
  ],
  '防御建筑': [
    { id: 1, question: '长城最早修建于哪个朝代？', options: ['秦朝', '汉朝', '明朝', '清朝'], correctAnswer: 0 },
    { id: 2, question: '山海关被称为？', options: ['天下第一关', '天下第二关', '天下第三关', '天下第四关'], correctAnswer: 0 },
    { id: 3, question: '明长城的东起点是？', options: ['山海关', '嘉峪关', '居庸关', '雁门关'], correctAnswer: 0 },
    { id: 4, question: '明长城的西起点是？', options: ['山海关', '嘉峪关', '居庸关', '雁门关'], correctAnswer: 1 },
    { id: 5, question: '长城的主要功能是什么？', options: ['交通', '灌溉', '防御', '贸易'], correctAnswer: 2 },
    { id: 6, question: '居庸关位于哪个省份？', options: ['北京市', '河北省', '山西省', '内蒙古自治区'], correctAnswer: 0 },
    { id: 7, question: '雁门关位于哪个省份？', options: ['山西省', '河北省', '陕西省', '内蒙古自治区'], correctAnswer: 0 },
    { id: 8, question: '长城的总长度约为多少公里？', options: ['5000公里', '10000公里', '21000公里', '30000公里'], correctAnswer: 2 },
    { id: 9, question: '烽火台的主要功能是什么？', options: ['居住', '防御', '传递信号', '储存物资'], correctAnswer: 2 },
    { id: 10, question: '长城上的敌楼主要用于什么？', options: ['居住', '防御', '祭祀', '观测'], correctAnswer: 1 },
    { id: 11, question: '八达岭长城位于哪个省份？', options: ['北京市', '河北省', '山西省', '内蒙古自治区'], correctAnswer: 0 },
    { id: 12, question: '慕田峪长城位于哪个省份？', options: ['北京市', '河北省', '山西省', '内蒙古自治区'], correctAnswer: 0 },
    { id: 13, question: '司马台长城位于哪个省份？', options: ['北京市', '河北省', '山西省', '内蒙古自治区'], correctAnswer: 0 },
    { id: 14, question: '金山岭长城位于哪个省份？', options: ['北京市', '河北省', '山西省', '内蒙古自治区'], correctAnswer: 1 },
    { id: 15, question: '嘉峪关关城位于哪个省份？', options: ['甘肃省', '新疆维吾尔自治区', '青海省', '宁夏回族自治区'], correctAnswer: 0 },
    { id: 16, question: '长城的建筑材料主要是什么？', options: ['木材', '石材', '砖瓦', '以上都是'], correctAnswer: 3 },
    { id: 17, question: '长城的修建历史有多久？', options: ['500年', '1000年', '2000年', '3000年'], correctAnswer: 2 },
    { id: 18, question: '长城上的关隘是指什么？', options: ['城门', '关卡', '烽火台', '敌楼'], correctAnswer: 1 },
    { id: 19, question: '长城被列为世界文化遗产是在哪一年？', options: ['1985年', '1987年', '1990年', '1992年'], correctAnswer: 1 },
    { id: 20, question: '长城的最高点在哪里？', options: ['八达岭', '慕田峪', '司马台', '嘉峪关'], correctAnswer: 2 },
    { id: 21, question: '长城上的垛口主要功能是什么？', options: ['装饰', '防御', '排水', '采光'], correctAnswer: 1 },
    { id: 22, question: '长城的修建高峰期是哪个朝代？', options: ['秦朝', '汉朝', '明朝', '清朝'], correctAnswer: 2 },
    { id: 23, question: '长城上的关隘通常建在什么位置？', options: ['平原', '山谷', '山顶', '海边'], correctAnswer: 1 },
    { id: 24, question: '中国古代城市防御建筑不包括？', options: ['城墙', '城楼', '护城河', '烽火台'], correctAnswer: 3 },
    { id: 25, question: '长城的墙体厚度一般为多少？', options: ['1-2米', '3-5米', '6-8米', '10米以上'], correctAnswer: 1 },
    { id: 26, question: '长城上的敌楼之间的距离通常是多少？', options: ['50米', '100米', '200米', '500米'], correctAnswer: 2 },
    { id: 27, question: '中国古代海防建筑的代表是？', options: ['长城', '城堡', '炮台', '烽火台'], correctAnswer: 2 },
    { id: 28, question: '长城的修建主要是为了防御哪个民族？', options: ['匈奴', '鲜卑', '蒙古', '以上都是'], correctAnswer: 3 },
    { id: 29, question: '长城上的烽火台通常有多高？', options: ['5-10米', '10-15米', '15-20米', '20米以上'], correctAnswer: 1 },
    { id: 30, question: '中国古代防御建筑中，用于观察敌情的建筑称为？', options: ['敌楼', '烽火台', '城楼', '角楼'], correctAnswer: 1 }
  ]
};

// 生成随机题目
const generateQuizData = (difficulty) => {
  const levels = [];
  let levelId = 1;
  
  // 根据难度确定每类题目的数量
  let questionsPerCategory;
  switch (difficulty) {
    case 'easy':
      questionsPerCategory = 1; // 简单模式：每类1题
      break;
    case 'medium':
      questionsPerCategory = 2; // 中等模式：每类2题
      break;
    case 'hard':
      questionsPerCategory = 3; // 困难模式：每类3题
      break;
    default:
      questionsPerCategory = 2; // 默认中等模式
  }
  
  for (const [category, questions] of Object.entries(questionBank)) {
    // 随机选择题目
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, questionsPerCategory);
    
    levels.push({
      id: levelId++,
      level: levelId - 1,
      title: category,
      questions: selected
    });
  }
  
  return levels;
};

const QuizGame = () => {
  // 游戏状态
  const [difficulty, setDifficulty] = useState(null); // 难度选择
  const [quizData, setQuizData] = useState([]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completedLevels, setCompletedLevels] = useState(0);

  const handleAnswerSelect = (index) => {
    if (!showResult) {
      setSelectedAnswer(index);
      setShowResult(true);
      if (index === quizData[currentLevel].questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData[currentLevel].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // 进入下一关
      if (currentLevel < quizData.length - 1) {
        setCurrentLevel(currentLevel + 1);
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setCompletedLevels(completedLevels + 1);
      } else {
        // 完成所有关卡
        setCompletedLevels(completedLevels + 1);
      }
    }
  };

  const handleStartGame = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setQuizData(generateQuizData(selectedDifficulty));
    setCurrentLevel(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCompletedLevels(0);
  };

  const handleRestart = () => {
    // 重新选择难度
    setDifficulty(null);
    setQuizData([]);
    setCurrentLevel(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCompletedLevels(0);
  };

  const isGameCompleted = currentLevel === quizData.length - 1 && currentQuestion === quizData[currentLevel].questions.length - 1 && showResult;

  return (
    <div className="fade-in">
      <h2 className="section-title">古代建筑闯关游戏</h2>
      
      {/* 难度选择界面 */}
      {!difficulty ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-6">选择难度</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button 
              className="difficulty-btn easy"
              onClick={() => handleStartGame('easy')}
            >
              <h4 className="text-xl font-semibold mb-2">简单</h4>
              <p className="text-gray-600">每类1题，共6题</p>
            </button>
            <button 
              className="difficulty-btn medium"
              onClick={() => handleStartGame('medium')}
            >
              <h4 className="text-xl font-semibold mb-2">中等</h4>
              <p className="text-gray-600">每类2题，共12题</p>
            </button>
            <button 
              className="difficulty-btn hard"
              onClick={() => handleStartGame('hard')}
            >
              <h4 className="text-xl font-semibold mb-2">困难</h4>
              <p className="text-gray-600">每类3题，共18题</p>
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* 进度条 */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span>关卡进度: {isGameCompleted ? quizData.length : completedLevels}/{quizData.length}</span>
              <span>得分: {score}</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(isGameCompleted ? quizData.length : completedLevels) / quizData.length * 100}%` }}
              ></div>
            </div>
          </div>

          {isGameCompleted ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">游戏完成！</h3>
              <div className="flex justify-center mb-6">
                <div className="bg-secondary bg-opacity-20 rounded-full w-32 h-32 flex items-center justify-center border-4 border-primary">
                  <span className="text-4xl font-bold text-primary">{score}/{quizData.reduce((total, level) => total + level.questions.length, 0)}</span>
                </div>
              </div>
              <p className="text-lg mb-6">你的最终得分是: {score} 分</p>
              <p className="text-lg mb-8">
                {(() => {
                  const totalQuestions = quizData.reduce((total, level) => total + level.questions.length, 0);
                  const scorePercentage = score / totalQuestions;
                  if (scorePercentage >= 0.8) {
                    return '恭喜你完成了所有关卡，你对古代建筑的了解真的很丰富！';
                  } else if (scorePercentage >= 0.5) {
                    return '你完成了所有关卡，对古代建筑有一定的了解，继续加油！';
                  } else {
                    return '你完成了所有关卡，建议多学习古代建筑知识，再接再厉！';
                  }
                })()}
              </p>
              <button className="btn-primary" onClick={handleRestart}>
                重新开始
              </button>
            </div>
          ) : (
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  关卡 {quizData[currentLevel].level}: {quizData[currentLevel].title}
                </h3>
                <p className="text-gray-600 mb-2">
                  问题 {currentQuestion + 1}/{quizData[currentLevel].questions.length}
                </p>
                <div className="question-card">
                  <h4 className="text-lg font-semibold mb-4">
                    {quizData[currentLevel].questions[currentQuestion].question}
                  </h4>
                  <div className="space-y-3">
                    {quizData[currentLevel].questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        className={`option-btn ${selectedAnswer === index ? (index === quizData[currentLevel].questions[currentQuestion].correctAnswer ? 'correct' : 'incorrect') : ''}`}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showResult}
                      >
                        {String.fromCharCode(65 + index)}. {option}
                      </button>
                    ))}
                  </div>
                  {showResult && (
                    <div className="mt-4 p-3 rounded-md bg-gray-100">
                      <p className={`font-semibold ${selectedAnswer === quizData[currentLevel].questions[currentQuestion].correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                        {selectedAnswer === quizData[currentLevel].questions[currentQuestion].correctAnswer ? '回答正确！' : '回答错误！'}
                      </p>
                      <p className="mt-2">
                        正确答案: {String.fromCharCode(65 + quizData[currentLevel].questions[currentQuestion].correctAnswer)}. {quizData[currentLevel].questions[currentQuestion].options[quizData[currentLevel].questions[currentQuestion].correctAnswer]}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {showResult && (
                <button className="btn-primary" onClick={handleNextQuestion}>
                  {currentQuestion < quizData[currentLevel].questions.length - 1 ? '下一题' : '进入下一关'}
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QuizGame;