import React, { useState, useRef, useEffect } from 'react';

const ArchitectureIntroduction = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // 音频状态
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);
  
  // 初始化音频
  useEffect(() => {
    // 创建音频对象
    audioRef.current = new Audio(' https://yabeng.github.io/musics/建筑介绍BGM.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    // 自动播放音频
    audioRef.current.play().catch(error => {
      console.error('音频播放失败:', error);
      // 即使播放失败，也不立即设置isPlaying为false
      // 因为可能是浏览器自动播放策略导致的，实际音频可能仍在播放
    });
    
    // 清理函数
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  // 音频控制函数
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('音频播放失败:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const tabs = [
    { id: 'overview', label: '建筑概述' },
    { id: 'palace', label: '宫殿建筑' },
    { id: 'religious', label: '宗教建筑' },
    { id: 'residential', label: '民居建筑' },
    { id: 'garden', label: '园林建筑' },
    { id: 'defense', label: '防御建筑' }
  ];

  return (
    <div className="fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="section-title">古代建筑科普</h2>
        <button 
          className={`audio-toggle-btn ${isPlaying ? 'playing' : ''}`}
          onClick={toggleAudio}
          aria-label={isPlaying ? '暂停音乐' : '播放音乐'}
        >
          {isPlaying ? '🔊 暂停音乐' : '🔇 播放音乐'}
        </button>
      </div>
      <p className="text-lg mb-8">
        中国古代建筑有着悠久的历史和独特的风格，是中华民族传统文化的重要组成部分。
        通过本模块的学习，您将了解中国古代建筑的主要类型、特点和代表作品，为闯关游戏做好准备。
      </p>

      {/* 导航标签 */}
      <div className="flex flex-wrap mb-8 border-b border-secondary">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 font-medium transition-colors duration-300 ${activeTab === tab.id ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 内容区域 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === 'overview' && (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">中国古代建筑概述</h3>
            <p className="mb-4">
              中国古代建筑是世界建筑史上的瑰宝，具有独特的艺术风格和技术成就。它以木材为主要建筑材料，
              采用榫卯结构，注重与自然环境的和谐统一，强调对称布局和等级制度。中国古代建筑的发展历程漫长，
              从原始社会的穴居、巢居，到奴隶社会的宫室、宗庙，再到封建社会的宫殿、园林，形成了一套完整的建筑体系。
              中国古代建筑不仅是实用的居住和活动场所，也是中国传统文化的重要载体，体现了中国古代的哲学思想、审美观念和技术水平。
              中国古代建筑以其独特的魅力和深厚的文化内涵，成为世界建筑史上的重要组成部分。
            </p>
            <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">历史发展</h4>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>原始社会</strong>：穴居、巢居，如浙江余姚河姆渡遗址的干栏式建筑，距今约7000年，是中国已知最早的干栏式建筑；陕西西安半坡遗址的半地穴式建筑，距今约6000年，是黄河流域典型的原始民居</li>
              <li><strong>奴隶社会</strong>：宫室、宗庙，如河南偃师二里头遗址的宫殿建筑，是中国最早的宫殿建筑遗址；河南安阳殷墟的宫殿宗庙遗址，是商代晚期的重要建筑遗存</li>
              <li><strong>封建社会前期</strong>：秦、汉时期，建筑规模宏大，如秦始皇陵、阿房宫、未央宫、建章宫等。秦始皇陵是中国历史上第一个皇帝陵园，规模宏大，气势恢宏；阿房宫是秦朝的宫殿，被誉为"天下第一宫"</li>
              <li><strong>封建社会中期</strong>：魏晋南北朝、隋唐时期，建筑技术成熟，如佛光寺、应县木塔、大雁塔、小雁塔等。佛光寺是中国现存最早的木结构建筑之一，具有重要的历史价值；应县木塔是世界上现存最高的木结构建筑，体现了中国古代木构建筑的杰出成就</li>
              <li><strong>封建社会后期</strong>：宋、元、明、清时期，建筑规范化，如北京故宫、苏州园林、天坛、地坛等。北京故宫是中国明清两代的皇家宫殿，是世界上现存规模最大、保存最为完整的木质结构古建筑之一；苏州园林是中国古典园林的杰出代表，以其精湛的造园艺术而闻名于世</li>
            </ul>
            <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">主要建筑类型</h4>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>宫殿建筑</strong>：皇帝居住和处理政务的场所，如故宫、沈阳故宫、大明宫、阿房宫、未央宫、建章宫等</li>
              <li><strong>宗教建筑</strong>：包括佛教、道教、伊斯兰教等建筑，如少林寺、布达拉宫、武当山建筑群、悬空寺、大昭寺、法门寺、白云观、清净寺等</li>
              <li><strong>民居建筑</strong>：普通百姓居住的房屋，如四合院、土楼、徽派建筑、窑洞、干栏式建筑、吊脚楼、江南水乡民居等</li>
              <li><strong>园林建筑</strong>：人工创造的自然景观，如苏州园林、颐和园、承德避暑山庄、扬州个园、拙政园、留园、网师园等</li>
              <li><strong>防御建筑</strong>：抵御外敌入侵的建筑，如长城、山海关、嘉峪关、居庸关、雁门关、紫荆关、娘子关等</li>
              <li><strong>礼制建筑</strong>：用于祭祀、礼仪等活动的建筑，如天坛、地坛、太庙、孔庙、社稷坛、先农坛等</li>
              <li><strong>水利建筑</strong>：用于水利工程的建筑，如都江堰、灵渠、大运河、郑国渠、芍陂等</li>
              <li><strong>桥梁建筑</strong>：连接交通的建筑，如赵州桥、卢沟桥、洛阳桥、安平桥、广济桥等</li>
              <li><strong>陵墓建筑</strong>：用于安葬帝王和贵族的建筑，如秦始皇陵、汉武帝茂陵、唐太宗昭陵、明十三陵、清东陵等</li>
              <li><strong>教育建筑</strong>：用于教育活动的建筑，如太学、国子监、书院等，如白鹿洞书院、岳麓书院、嵩阳书院等</li>
            </ul>
            <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">建筑特点</h4>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>以木材为主要建筑材料，采用榫卯结构，不用一钉一铆，具有良好的抗震性能</li>
              <li>注重建筑与自然环境的和谐统一，追求"天人合一"的境界，体现了中国古代的哲学思想</li>
              <li>强调对称布局和等级制度，体现封建伦理观念，如宫殿建筑的严格对称布局</li>
              <li>装饰精美，融合了绘画、雕刻、书法等艺术形式，如彩画、木雕、砖雕、石雕等</li>
              <li>具有独特的建筑符号和象征意义，如龙、凤、麒麟等，体现了中国古代的文化内涵</li>
              <li>建筑色彩丰富，不同等级的建筑使用不同的色彩，如皇家建筑使用黄色琉璃瓦，普通建筑使用灰色瓦</li>
              <li>屋顶形式多样，等级分明，如庑殿顶、歇山顶、悬山顶、硬山顶、攒尖顶等</li>
              <li>建筑群体组合有序，形成完整的空间序列，如宫殿建筑的中轴线布局</li>
              <li>建筑模数化，使用斗口、材分等模数单位，便于建筑的设计和施工</li>
              <li>注重建筑的实用性和舒适性，适应不同地区的自然环境和气候条件</li>
            </ul>
            <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">建筑技术</h4>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>木构架体系</strong>：抬梁式、穿斗式、井干式三种主要结构形式。抬梁式结构用于大型建筑，如宫殿、庙宇；穿斗式结构用于小型建筑，如民居；井干式结构用于林区建筑</li>
              <li><strong>榫卯结构</strong>：通过榫头和卯眼的配合，不用钉子而使构件连接牢固，具有良好的抗震性能和可拆卸性</li>
              <li><strong>斗拱</strong>：中国古代建筑特有的结构构件，既承重又装饰，是中国古代建筑的重要特征之一</li>
              <li><strong>夯土技术</strong>：用于城墙、台基等建筑的建造，如秦长城、汉长城等</li>
              <li><strong>砖石技术</strong>：用于砖石结构建筑的建造，如明长城、砖石塔等</li>
              <li><strong>彩画技术</strong>：用于建筑装饰，如和玺彩画、旋子彩画、苏式彩画等，具有不同的等级和风格</li>
              <li><strong>琉璃技术</strong>：用于屋顶、墙面等部位的装饰，如黄色琉璃瓦、绿色琉璃瓦等</li>
              <li><strong>金砖技术</strong>：用于宫殿地面的铺设，如北京故宫的太和殿地面</li>
              <li><strong>汉白玉技术</strong>：用于建筑的台阶、栏杆等部位，如北京故宫的汉白玉栏杆</li>
              <li><strong>建筑模数化</strong>：使用斗口、材分等模数单位，便于建筑的设计和施工</li>
            </ul>
            <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">建筑大师</h4>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>鲁班</strong>：春秋时期的建筑工匠，被后世尊为建筑行业的祖师爷，发明了许多木工工具，如锯、刨、钻等</li>
              <li><strong>宇文恺</strong>：隋朝建筑家，主持设计了大兴城（今西安）和洛阳城，著有《明堂图议》，是中国古代重要的建筑著作</li>
              <li><strong>李春</strong>：隋朝工匠，设计建造了赵州桥，是世界上现存最古老的石拱桥，具有重要的历史价值</li>
              <li><strong>蒯祥</strong>：明朝建筑家，参与设计了北京故宫，被称为"蒯鲁班"，是明朝著名的建筑大师</li>
              <li><strong>样式雷</strong>：清代建筑世家，负责设计了圆明园、颐和园等皇家建筑，留下了大量建筑图纸，对中国古代建筑的发展做出了重要贡献</li>
              <li><strong>喻皓</strong>：北宋建筑家，著有《木经》，是中国古代重要的建筑专著，对木构建筑的设计和施工有详细的论述</li>
              <li><strong>李诫</strong>：北宋建筑家，编著了《营造法式》，是中国古代最完整的建筑技术专著，对中国古代建筑的发展产生了深远影响</li>
              <li><strong>梁思成</strong>：现代著名建筑学家，对中国古代建筑进行了系统的研究，著有《中国建筑史》等著作</li>
              <li><strong>刘敦桢</strong>：现代著名建筑学家，对中国古代建筑进行了深入的研究，著有《中国古代建筑史》等著作</li>
              <li><strong>吴良镛</strong>：现代著名建筑学家，致力于传统建筑的保护和研究，对中国现代建筑的发展做出了重要贡献</li>
            </ul>
            <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">文化意义</h4>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>体现了中国古代的哲学思想，如"天人合一"、"中庸之道"等，反映了中国古代对人与自然关系的认识</li>
              <li>反映了中国古代的社会等级制度和伦理观念，如宫殿建筑的严格等级制度</li>
              <li>是中国传统文化的重要载体，融合了绘画、雕刻、书法等艺术形式，体现了中国古代的艺术成就</li>
              <li>对世界建筑艺术产生了深远影响，如日本、韩国等国家的建筑都受到中国古代建筑的影响</li>
              <li>是中华民族的文化遗产，具有重要的历史、艺术和科学价值，是人类文明的重要组成部分</li>
              <li>体现了中国古代劳动人民的智慧和创造力，是中国古代科技水平的重要体现</li>
              <li>反映了中国古代的社会生活和文化传统，是研究中国古代社会的重要资料</li>
              <li>具有重要的旅游价值，吸引了大量国内外游客，促进了文化交流和经济发展</li>
            </ul>
            <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">保护现状</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>许多古代建筑被列为文物保护单位，如北京故宫、长城、敦煌莫高窟等</li>
              <li>一些古代建筑得到了修复和保护，如颐和园、拙政园等</li>
              <li>古代建筑的保护面临着现代化的挑战，如城市化进程、环境污染等</li>
              <li>古代建筑的文化价值逐渐被人们认识和重视，保护意识不断提高</li>
              <li>相关部门采取了一系列措施，加强对古代建筑的保护和管理</li>
            </ul>
          </div>
        )}

        {activeTab === 'palace' && (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">宫殿建筑</h3>
            <div className="mb-6">
              <p className="mb-4">
                宫殿建筑是中国古代建筑的最高形式，是皇帝居住和处理政务的场所。
                宫殿建筑通常规模宏大，布局严谨，装饰华丽，体现了封建皇权的至高无上。
                中国古代宫殿建筑的发展经历了漫长的历史过程，从早期的简单宫室到后来的宏伟建筑群，
                形成了一套完整的宫殿建筑体系。宫殿建筑不仅是皇帝权力的象征，也是中国古代建筑艺术的杰出代表。
                宫殿建筑的设计和建造体现了中国古代的政治制度、文化传统和建筑技术水平，是中国古代文明的重要标志。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">代表作品</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>北京故宫</strong>：中国最大的古代宫殿建筑群，始建于明朝永乐四年（1406年），永乐十八年（1420年）建成。占地面积约72万平方米，建筑面积约15万平方米，有大小宫殿七十多座，房屋九千余间。是世界上现存规模最大、保存最为完整的木质结构古建筑之一。故宫的建筑布局严格按照中轴线对称分布，从午门到神武门，依次排列着太和殿、中和殿、保和殿等重要建筑，体现了封建皇权的至高无上。故宫的建筑装饰华丽，使用了大量的彩绘、雕刻和琉璃瓦，体现了中国古代的艺术成就。故宫不仅是中国古代宫殿建筑的杰出代表，也是世界文化遗产的重要组成部分，每年吸引着大量国内外游客前来参观。</li>
                    <li><strong>沈阳故宫</strong>：清朝早期的皇宫，始建于后金天命十年（1625年），具有满族建筑特色。占地面积约6万平方米，建筑面积约1.5万平方米，是中国仅存的两大宫殿建筑群之一。沈阳故宫融合了汉族、满族和蒙古族的建筑风格，具有独特的艺术价值。</li>
                    <li><strong>大明宫</strong>：唐朝的皇宫，始建于贞观八年（634年），规模宏大，占地面积约3.2平方公里，是当时世界上最大的宫殿建筑群。大明宫的建筑风格宏伟壮丽，体现了唐朝的繁荣昌盛。</li>
                    <li><strong>阿房宫</strong>：秦朝的宫殿，始建于秦始皇三十五年（前212年），规模巨大，被誉为“天下第一宫”。阿房宫的建筑规模空前，反映了秦朝的强大国力。</li>
                    <li><strong>未央宫</strong>：西汉的皇宫，始建于汉高祖七年（前200年），是中国历史上使用时间最长的宫殿之一。未央宫的建筑布局严谨，装饰华丽，体现了西汉的繁荣。</li>
                    <li><strong>建章宫</strong>：西汉的宫殿，始建于汉武帝太初元年（前104年），规模宏大，被誉为“千门万户”。建章宫的建筑风格华丽壮观，反映了汉武帝时期的国力强盛。</li>
                    <li><strong>兴庆宫</strong>：唐朝的宫殿，始建于唐玄宗开元年间，是唐玄宗和杨贵妃的居住场所。兴庆宫的建筑风格华丽典雅，体现了唐朝的文化繁荣。</li>
                    <li><strong>南京故宫</strong>：明朝早期的皇宫，始建于明朝洪武年间，是明朝的第一个皇宫。南京故宫的建筑布局严谨，规模宏大，是北京故宫的蓝本。</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">建筑特点</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>严格的对称布局，体现等级制度和皇权至上的思想，如故宫的中轴线布局</li>
                    <li>建筑色彩以红色和黄色为主，象征皇权和尊贵，黄色是皇家专用颜色</li>
                    <li>屋顶形式多样，等级分明，如庑殿顶、歇山顶、悬山顶、硬山顶等，不同等级的建筑使用不同形式的屋顶</li>
                    <li>装饰精美，雕刻和彩绘丰富，体现了中国古代的艺术成就，如太和殿的龙柱雕刻和天花彩绘</li>
                    <li>建筑规模宏大，气势恢宏，显示皇家的威严，如大明宫的占地面积达到3.2平方公里</li>
                    <li>布局严谨，轴线明确，体现了中国古代的建筑理念，如故宫的中轴线贯穿南北</li>
                    <li>建筑材料考究，使用珍贵的木材、石材和金属，如楠木、汉白玉、黄金等</li>
                    <li>建筑工艺精湛，体现了中国古代的建筑技术水平，如榫卯结构、斗拱技术等</li>
                    <li>防御功能完备，如宫城周围环绕城墙，设有城门、角楼等防御设施</li>
                    <li>功能分区明确，如前朝后寝，前部为处理政务的场所，后部为居住的场所</li>
                    <li>园林景观丰富，如御花园、西苑等，供皇帝和后妃休闲娱乐</li>
                    <li>象征意义浓厚，如太和殿的名称象征着天下太平，乾清宫的名称象征着天清地宁</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">历史演变</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>先秦时期</strong>：宫殿规模较小，布局简单，如殷纣王的鹿台、周文王的丰镐宫等</li>
                    <li><strong>秦汉时期</strong>：宫殿规模扩大，建筑技术提高，如咸阳宫、未央宫、建章宫等。秦始皇统一六国后，大规模修建宫殿，体现了中央集权的加强</li>
                    <li><strong>魏晋南北朝时期</strong>：宫殿建筑继承秦汉传统，同时吸收外来文化，如邺城宫殿、建康宫殿等</li>
                    <li><strong>隋唐时期</strong>：宫殿建筑达到高峰，规模宏大，如大明宫、兴庆宫等。唐朝的宫殿建筑风格宏伟壮丽，体现了唐朝的繁荣昌盛</li>
                    <li><strong>宋元时期</strong>：宫殿建筑规模减小，但装饰更加精美，如北宋东京宫殿、南宋临安宫殿、元朝大都宫殿等</li>
                    <li><strong>明清时期</strong>：宫殿建筑更加规范化，装饰更加华丽，如北京故宫、沈阳故宫等。明清时期的宫殿建筑达到了中国古代宫殿建筑的顶峰</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">建筑等级</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li>重檐庑殿顶：最高等级，用于皇宫正殿，如太和殿</li>
                    <li>重檐歇山顶：第二等级，用于皇宫次要建筑，如乾清宫</li>
                    <li>单檐庑殿顶：第三等级，用于重要的礼制建筑</li>
                    <li>单檐歇山顶：第四等级，用于次要的礼制建筑</li>
                    <li>悬山顶：第五等级，用于普通建筑</li>
                    <li>硬山顶：第六等级，用于普通建筑</li>
                    <li>攒尖顶：用于亭、阁等建筑</li>
                    <li>卷棚顶：用于园林建筑</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">宫殿布局</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li>中轴线布局：宫殿建筑通常以中轴线为中心，左右对称分布</li>
                    <li>前朝后寝：前部为处理政务的场所，后部为皇帝和后妃居住的场所</li>
                    <li>三朝五门：外朝、中朝、内朝，以及皋门、库门、雉门、应门、路门</li>
                    <li>宫城制度：宫殿周围环绕城墙，形成宫城</li>
                    <li>御花园：宫殿后部通常设有御花园，供皇帝和后妃休闲娱乐</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">文化意义</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>体现了中国古代的等级制度和皇权至上的思想，如故宫的严格对称布局和等级分明的建筑形式</li>
                    <li>反映了中国古代的宇宙观和哲学思想，如“天人合一”的理念，宫殿建筑与自然环境的和谐统一</li>
                    <li>是中国古代建筑艺术的杰出代表，体现了中国古代的艺术成就，如精美的彩绘、雕刻和装饰</li>
                    <li>承载着丰富的历史文化信息，是研究中国古代历史的重要资料，如宫殿的建筑风格反映了不同朝代的文化特色</li>
                    <li>是中华民族的文化遗产，具有重要的历史、艺术和科学价值，如北京故宫被列为世界文化遗产</li>
                    <li>体现了中国古代劳动人民的智慧和创造力，是中国古代科技水平的重要体现，如木构架体系的抗震性能</li>
                    <li>对世界建筑艺术产生了深远影响，如日本、韩国等国家的宫殿建筑都受到中国古代宫殿建筑的影响</li>
                    <li>是中国古代国家实力的象征，体现了不同朝代的政治、经济和文化繁荣程度</li>
                    <li>是中国古代礼制文化的重要载体，体现了中国古代的礼仪制度和社会秩序</li>
                    <li>是中国古代文学艺术的重要题材，如许多诗歌、绘画作品都以宫殿建筑为主题</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">建筑技术</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>木构架体系</strong>：采用榫卯结构，抗震性能好，如北京故宫的太和殿</li>
                    <li><strong>斗拱</strong>：中国古代建筑特有的结构构件，是由斗、拱、昂等部件组成的复杂结构。斗拱位于柱与梁之间，既起到承重作用，将屋顶的重量传递到柱子上，又起到装饰作用，是中国古代建筑的重要特征之一。太和殿的斗拱规模宏大，装饰华丽，体现了中国古代建筑的精湛工艺。斗拱的使用不仅提高了建筑的稳定性和抗震能力，也体现了中国古代建筑的独特美学价值。不同等级的建筑使用不同规模和形式的斗拱，如宫殿建筑使用的斗拱规模大、装饰华丽，普通建筑使用的斗拱规模小、装饰简单。</li>
                    <li><strong>彩画</strong>：宫殿建筑的重要装饰手段，如和玺彩画、旋子彩画、苏式彩画等</li>
                    <li><strong>琉璃瓦</strong>：用于屋顶，美观耐用，颜色有黄、绿、蓝等，如故宫的黄色琉璃瓦</li>
                    <li><strong>金砖</strong>：用于宫殿地面，质地坚硬，光泽如镜，如太和殿的地面</li>
                    <li><strong>汉白玉</strong>：用于宫殿的台阶、栏杆等部位，如故宫的汉白玉栏杆</li>
                    <li><strong>彩绘</strong>：用于宫殿的墙壁、天花板等部位，如故宫的天花彩绘</li>
                    <li><strong>雕刻</strong>：用于宫殿的门窗、柱子等部位，如故宫的龙柱雕刻</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">相关人物</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>蒯祥</strong>：明朝建筑家，苏州吴县人，参与设计了北京故宫，被称为“蒯鲁班”，是明朝著名的建筑大师。他技艺精湛，擅长木工和建筑设计，在故宫的建设中发挥了重要作用。蒯祥不仅设计了故宫的整体布局，还参与了具体建筑的施工，如太和殿、乾清宫等重要建筑的建造。他的建筑风格严谨规范，体现了明朝建筑的特点，对中国古代建筑的发展做出了重要贡献。</li>
                    <li><strong>雷发达</strong>：清代建筑家，“样式雷”家族的创始人，江西南康人。他参与设计了圆明园、颐和园等皇家建筑，是清代著名的建筑大师。雷发达及其家族成员世代相传，负责设计了大量皇家建筑，如故宫、天坛、承德避暑山庄等。他们留下了大量建筑图纸和模型，被称为“样式雷图档”，是研究中国古代建筑的重要资料。“样式雷”家族的建筑设计技艺精湛，风格独特，对中国古代建筑的发展产生了深远影响。</li>
                    <li><strong>梁九</strong>：清代建筑家，负责重建太和殿，是清代著名的建筑大师。康熙三十四年（1695年），太和殿被烧毁，梁九负责重建工作。他根据记忆和经验，准确地重建了太和殿，展现了卓越的建筑技艺。</li>
                    <li><strong>宇文恺</strong>：隋朝建筑家，主持设计了大兴城和洛阳城的宫殿，著有《明堂图议》。他设计的大兴城（今西安）布局严谨，规模宏大，是中国古代城市规划的杰出代表。</li>
                    <li><strong>阎立德</strong>：唐朝建筑家，参与设计了大明宫，是唐朝著名的建筑大师。他还设计了昭陵，是唐太宗李世民的陵墓，体现了唐朝的建筑风格和艺术成就。</li>
                    <li><strong>吴良</strong>：明朝建筑家，参与设计了南京故宫，是明朝著名的建筑大师。他还设计了明孝陵，是明太祖朱元璋的陵墓，体现了明朝的建筑风格和艺术成就。</li>
                    <li><strong>秦始皇</strong>：统一六国后，下令修建阿房宫，是中国历史上第一个大规模修建宫殿的皇帝。阿房宫的建筑规模空前，反映了秦朝的强大国力和中央集权制度的加强。</li>
                    <li><strong>汉武帝</strong>：下令修建建章宫，扩大了西汉的宫殿规模。建章宫规模宏大，被誉为“千门万户”，反映了汉武帝时期的国力强盛和文化繁荣。</li>
                    <li><strong>明成祖</strong>：下令修建北京故宫，是明朝宫殿建筑的重要推动者。北京故宫的建成，标志着中国古代宫殿建筑达到了顶峰，体现了明朝的强大国力和建筑技术水平。</li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'religious' && (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">宗教建筑</h3>
            <div className="mb-6">
              <p className="mb-4">
                宗教建筑是中国古代建筑的重要组成部分，包括佛教、道教、伊斯兰教等不同宗教的建筑。
                宗教建筑通常具有独特的宗教象征意义，建筑风格庄严肃穆。中国古代宗教建筑融合了不同宗教的文化元素，
                形成了独具特色的建筑风格。宗教建筑不仅是宗教活动的场所，也是中国古代建筑艺术的重要组成部分。
                宗教建筑的设计和建造体现了中国古代的宗教信仰、文化传统和建筑技术水平，是中国古代文明的重要标志。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">代表作品</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>少林寺</strong>：中国佛教禅宗的发源地，位于河南省登封市嵩山。始建于北魏太和十九年（495年），由孝文帝为安置印度僧人跋陀而建。少林寺以武术和禅宗闻名于世，是中国佛教的重要寺院之一。</li>
                    <li><strong>布达拉宫</strong>：藏传佛教的圣地，位于西藏拉萨市红山之上。始建于公元7世纪，是松赞干布为迎娶文成公主而建。布达拉宫是世界上海拔最高、规模最大的宫殿式建筑群，被誉为“世界屋脊上的明珠”。</li>
                    <li><strong>武当山建筑群</strong>：道教建筑的代表，位于湖北省十堰市武当山。始建于唐代，明永乐年间大规模修建。武当山建筑群以其独特的建筑风格和深厚的道教文化内涵而闻名于世。</li>
                    <li><strong>悬空寺</strong>：佛教、道教、儒教三教合一的建筑，位于山西省大同市恒山。始建于北魏晚期，距今已有1500多年的历史。悬空寺建在悬崖峭壁上，以其独特的建筑方式和惊险的地理位置而闻名。</li>
                    <li><strong>大昭寺</strong>：藏传佛教的重要寺院，位于西藏拉萨市。始建于公元7世纪，是松赞干布为迎娶尺尊公主而建。大昭寺是西藏最古老的佛教寺院之一，也是藏传佛教的圣地。</li>
                    <li><strong>法门寺</strong>：佛教圣地，位于陕西省扶风县。始建于东汉时期，因供奉佛指舍利而闻名于世。法门寺是中国佛教的重要寺院之一。</li>
                    <li><strong>白云观</strong>：道教圣地，位于北京市。始建于唐代，是道教全真派的重要宫观之一。</li>
                    <li><strong>清净寺</strong>：伊斯兰教圣地，位于福建省泉州市。始建于北宋时期，是中国现存最古老的伊斯兰教寺院之一。</li>
                    <li><strong>敦煌莫高窟</strong>：佛教石窟群，位于甘肃省敦煌市。始建于前秦时期，是世界上现存规模最大、内容最丰富的佛教艺术宝库。</li>
                    <li><strong>云冈石窟</strong>：佛教石窟群，位于山西省大同市。始建于北魏时期，是中国古代石窟艺术的杰出代表。</li>
                    <li><strong>龙门石窟</strong>：佛教石窟群，位于河南省洛阳市。始建于北魏时期，是中国古代石窟艺术的重要组成部分。</li>
                    <li><strong>乐山大佛</strong>：佛教造像，位于四川省乐山市。始建于唐代，是世界上最大的石刻佛像。</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">建筑特点</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>建筑布局与宗教教义相结合，体现宗教的神圣性</li>
                    <li>选址多在山林之中，环境幽静，符合宗教修行的需要</li>
                    <li>建筑形式多样，体现不同宗教的特点和文化内涵</li>
                    <li>装饰丰富，具有宗教象征意义，如佛教的莲花、道教的八卦等</li>
                    <li>建筑风格庄严肃穆，体现宗教的神圣性和崇高性</li>
                    <li>注重与自然环境的和谐统一，追求“天人合一”的境界</li>
                    <li>建筑材料考究，使用当地的优质材料</li>
                    <li>建筑工艺精湛，体现了中国古代的建筑技术水平</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">佛教建筑</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li><strong>寺</strong>：佛教修行和活动的场所，是佛教建筑的主要形式之一。寺的建筑布局通常包括山门、天王殿、大雄宝殿、藏经阁等主要建筑，体现了佛教的教义和修行需求。少林寺是中国著名的佛教寺院，位于河南省登封市，是禅宗的发源地，以武术闻名于世；大昭寺位于西藏拉萨，是藏传佛教的重要寺院，供奉着释迦牟尼佛像；法门寺位于陕西省扶风县，是唐代皇家寺院，因供奉释迦牟尼佛指骨舍利而闻名。寺不仅是佛教徒修行的场所，也是中国古代建筑的重要组成部分，体现了中国古代的建筑艺术和文化内涵。</li>
                    <li><strong>塔</strong>：用于存放佛骨或佛经，如大雁塔、小雁塔、应县木塔等</li>
                    <li><strong>石窟</strong>：在山崖上开凿的佛教建筑，如敦煌莫高窟、云冈石窟、龙门石窟等</li>
                    <li><strong>经幢</strong>：刻有佛经的石柱，用于弘扬佛法</li>
                    <li><strong>佛殿</strong>：供奉佛像的建筑，是寺院的核心建筑，如大雄宝殿</li>
                    <li><strong>钟楼、鼓楼</strong>：用于报时和宗教活动</li>
                    <li><strong>山门</strong>：寺院的入口，通常有三个门洞，象征“三解脱门”</li>
                    <li><strong>天王殿</strong>：供奉四大天王的建筑</li>
                    <li><strong>藏经阁</strong>：存放佛经的建筑</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">道教建筑</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li><strong>宫</strong>：道教建筑的最高等级，如武当山紫霄宫、北京白云观等</li>
                    <li><strong>观</strong>：道教建筑的一般形式，如玄妙观、青羊宫等</li>
                    <li><strong>庙</strong>：供奉道教神灵的建筑，如东岳庙、关帝庙、城隍庙等</li>
                    <li><strong>洞</strong>：道教修行的场所，如王屋山洞、委羽山洞、青城山洞等</li>
                    <li><strong>殿</strong>：供奉道教神像的建筑，是宫观的核心建筑，如玉皇殿、三清殿等</li>
                    <li><strong>楼</strong>：用于供奉神灵或观星象的建筑，如玉皇楼、魁星楼等</li>
                    <li><strong>阁</strong>：用于供奉神灵或存放经书的建筑，如藏经阁、三清阁等</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">伊斯兰教建筑</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>清真寺</strong>：伊斯兰教礼拜的场所，如清净寺、牛街清真寺、艾提尕尔清真寺等</li>
                    <li><strong>宣礼塔</strong>：用于召唤信徒礼拜，如邦克楼、光塔等</li>
                    <li><strong>经堂</strong>：用于宗教教育和讲经</li>
                    <li><strong>水房</strong>：用于礼拜前的沐浴</li>
                    <li><strong>望月楼</strong>：用于观察新月，确定斋月开始和结束的时间</li>
                    <li><strong>礼拜殿</strong>：清真寺的核心建筑，用于信徒礼拜</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">相关人物</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li><strong>达摩</strong>：印度僧人，全名菩提达摩，是中国禅宗的创始人。他于南北朝时期来到中国，首先在南朝梁武帝时期到达建康（今南京），后渡江北上，来到嵩山少林寺。达摩在少林寺面壁九年，专注修行，传授禅宗心法，被尊为“禅宗初祖”。他提出的“不立文字，教外别传，直指人心，见性成佛”的禅宗理念，对中国佛教的发展产生了深远影响。达摩的事迹被后人传颂，成为中国佛教史上的重要人物，少林寺也因此成为禅宗的发源地和中国佛教的重要寺院。</li>
                    <li><strong>松赞干布</strong>：吐蕃赞普，布达拉宫和大昭寺的建造者，促进了佛教在西藏的传播</li>
                    <li><strong>张三丰</strong>：道教武当派的创始人，武当山建筑群的重要推动者，创立了武当武术</li>
                    <li><strong>鸠摩罗什</strong>：西域僧人，翻译了大量佛经，对佛教在中国的传播做出了重要贡献</li>
                    <li><strong>玄奘</strong>：唐代高僧，西行取经，促进了佛教在中国的传播，著有《大唐西域记》</li>
                    <li><strong>丘处机</strong>：道教全真派祖师，对道教宫观的发展做出了重要贡献，曾西行见成吉思汗</li>
                    <li><strong>马坚</strong>：现代伊斯兰教学者，对伊斯兰教在中国的传播做出了重要贡献，翻译了《古兰经》</li>
                    <li><strong>法显</strong>：东晋高僧，西行取经，是中国第一位到海外取经的僧人</li>
                    <li><strong>慧能</strong>：唐代高僧，禅宗六祖，著有《坛经》，对禅宗的发展做出了重要贡献</li>
                    <li><strong>丘处机</strong>：道教全真派祖师，对道教宫观的发展做出了重要贡献</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">文化意义</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>反映了不同宗教的信仰和教义，是宗教文化的重要载体</li>
                    <li>融合了不同地区的建筑风格，体现了中国古代建筑的多样性</li>
                    <li>是中国古代建筑多样性的体现，展示了不同宗教建筑的特色</li>
                    <li>承载着丰富的宗教文化信息，是研究宗教历史和文化的重要资料</li>
                    <li>促进了不同文化之间的交流与融合，如佛教建筑融合了印度和中国的建筑风格</li>
                    <li>是中国传统文化的重要组成部分，体现了中国古代的文化多样性</li>
                    <li>具有重要的历史、艺术和科学价值，是人类文明的重要遗产</li>
                    <li>对世界建筑艺术产生了深远影响，如日本、韩国等国家的宗教建筑都受到中国古代宗教建筑的影响</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">保护现状</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>许多宗教建筑被列为文物保护单位，如少林寺、布达拉宫、敦煌莫高窟等</li>
                    <li>一些宗教建筑得到了修复和保护，如武当山建筑群、悬空寺等</li>
                    <li>宗教建筑的保护面临着现代化的挑战，如城市化进程、环境污染等</li>
                    <li>宗教建筑的文化价值逐渐被人们认识和重视，保护意识不断提高</li>
                    <li>相关部门采取了一系列措施，加强对宗教建筑的保护和管理</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'residential' && (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">民居建筑</h3>
            <div className="mb-6">
              <p className="mb-4">
                民居建筑是普通百姓居住的房屋，反映了不同地区的文化特色和生活方式。
                民居建筑通常注重实用性和舒适性，同时也体现了当地的建筑传统。中国古代民居建筑形式多样，
                因地域、气候、文化等因素的不同而呈现出不同的风格特点。民居建筑不仅是人们的居住场所，
                也是中国传统文化的重要载体，体现了中国古代的家庭观念、生活方式和审美情趣。
                中国古代民居建筑以其独特的建筑风格和深厚的文化内涵，成为世界建筑史上的重要组成部分。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">代表作品</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>北京四合院</strong>：北方传统民居的代表，布局严谨。四合院是由四面房屋围合而成的院落，通常由正房、东西厢房和倒座房组成。四合院体现了中国传统的家庭观念和等级制度，是中国古代民居建筑的典范。</li>
                    <li><strong>福建土楼</strong>：客家民居的代表，具有防御功能。土楼是一种大型夯土建筑，通常为圆形或方形，内部有多层房间。土楼始建于宋元时期，成熟于明清时期，是客家文化的重要象征。</li>
                    <li><strong>徽派建筑</strong>：皖南地区的传统民居，以粉墙黛瓦为特色。徽派建筑注重装饰，砖雕、木雕、石雕工艺精湛，体现了徽州地区的文化底蕴和经济实力。</li>
                    <li><strong>窑洞</strong>：黄土高原地区的传统民居，冬暖夏凉。窑洞是在黄土崖壁上开凿的洞穴式住宅，具有节省建筑材料、保温隔热等优点，是适应黄土高原自然环境的建筑形式。</li>
                    <li><strong>干栏式建筑</strong>：南方湿热地区的传统民居，如傣族竹楼。干栏式建筑通常为两层，底层架空，上层居住，具有通风、防潮、防虫等优点。</li>
                    <li><strong>吊脚楼</strong>：西南地区的传统民居，如苗族、土家族吊脚楼。吊脚楼通常建在山坡上，部分房屋悬空，具有适应地形、通风、防潮等优点。</li>
                    <li><strong>江南水乡民居</strong>：江南地区的传统民居，如苏州、杭州的水乡民居。江南水乡民居通常沿河而建，白墙黑瓦，小桥流水，具有独特的水乡风情。</li>
                    <li><strong>蒙古包</strong>：蒙古族传统民居，以毛毡为主要材料，可移动，适合游牧生活。蒙古包是蒙古族适应游牧生活的产物，体现了蒙古族的生活方式和文化传统。</li>
                    <li><strong>藏族碉房</strong>：藏族传统民居，以石块为主要建筑材料，坚固耐用，适合高原环境。藏族碉房是藏族适应高原环境的产物，体现了藏族的文化特色。</li>
                    <li><strong>朝鲜族民居</strong>：朝鲜族传统民居，以木材为主要建筑材料，火炕是其特色。朝鲜族民居体现了朝鲜族的生活方式和文化传统，适应东北寒冷的气候。</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">建筑特点</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>因地制宜，适应不同地区的自然环境，如北方的四合院适应寒冷气候，南方的干栏式建筑适应湿热气候</li>
                    <li>注重实用性和舒适性，满足人们的生活需求，如窑洞的冬暖夏凉，蒙古包的可移动性</li>
                    <li>体现当地的文化特色和生活方式，如藏族碉房的坚固耐用，朝鲜族民居的火炕</li>
                    <li>建筑材料以当地资源为主，如黄土高原的窑洞使用黄土，南方的竹楼使用竹子</li>
                    <li>建筑形式多样，风格各异，如北京四合院的严谨布局，江南水乡民居的灵动活泼</li>
                    <li>注重与自然环境的和谐统一，如吊脚楼与山地环境的融合，江南水乡民居与水的关系</li>
                    <li>建筑工艺精湛，体现了中国古代的建筑技术水平，如徽派建筑的砖雕、木雕、石雕</li>
                    <li>装饰精美，体现了中国古代的艺术成就，如江南水乡民居的木雕门窗，徽派建筑的马头墙</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">区域特色</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li><strong>北方地区</strong>：四合院、窑洞、土坯房。北方民居注重保暖和防御，建筑布局严谨，如北京四合院的对称布局</li>
                    <li><strong>南方地区</strong>：干栏式建筑、徽派建筑、江南水乡民居。南方民居注重通风和防潮，建筑风格灵动活泼。江南水乡民居沿河而建，前街后河，白墙黑瓦，小桥流水，具有独特的水乡风情；徽派建筑以粉墙黛瓦、马头墙、天井为特色，注重装饰，砖雕、木雕、石雕工艺精湛；干栏式建筑如傣族竹楼，底层架空，上层居住，具有通风、防潮、防虫等优点，适应南方湿热的气候</li>
                    <li><strong>西南地区</strong>：竹楼、吊脚楼、石板房。西南民居适应山地环境，建筑形式多样，如苗族吊脚楼的悬空设计</li>
                    <li><strong>西北地区</strong>：土坯房、窑洞、蒙古包。西北民居适应干旱少雨的气候，建筑材料以土和毛毡为主，如蒙古包的可移动性</li>
                    <li><strong>东北地区</strong>：火炕房、满族民居。东北民居注重保暖，火炕是其特色，如朝鲜族民居的火炕设计</li>
                    <li><strong>青藏高原地区</strong>：藏族碉房。藏族民居适应高原环境，建筑坚固耐用，以石块为主要材料</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">建筑材料</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li><strong>木材</strong>：用于梁、柱、门窗等结构和装饰，是中国古代建筑的主要材料之一。南方地区多使用杉木，材质轻软，耐腐蚀，适合建造多层建筑；北方地区多使用榆木，材质坚硬，适合建造大型建筑；东北地区多使用红松，材质坚韧，纹理美观，适合建造宫殿和庙宇；此外，还有楠木、樟木、柏木等珍贵木材，用于建造宫殿、庙宇等重要建筑</li>
                    <li><strong>砖瓦</strong>：用于墙体和屋顶，如青砖、青瓦、红砖、红瓦等</li>
                    <li><strong>夯土</strong>：用于墙体，如土坯、夯土墙，是黄土高原地区的主要建筑材料</li>
                    <li><strong>石材</strong>：用于基础和墙体，如花岗岩、大理石、石灰石等，是山区和高原地区的主要建筑材料</li>
                    <li><strong>竹子</strong>：用于南方地区的建筑，如竹楼、竹篱笆等，是南方湿热地区的主要建筑材料</li>
                    <li><strong>茅草</strong>：用于屋顶，如茅草屋，是农村地区的传统建筑材料</li>
                    <li><strong>毛毡</strong>：用于蒙古包的覆盖物，是蒙古族的传统建筑材料</li>
                    <li><strong>石灰</strong>：用于墙体的粉刷，如徽派建筑的白墙，是传统建筑的重要材料</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">建筑布局</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>四合院</strong>：北方民居的典型布局，由四面房屋围合而成，体现了中国传统的家庭观念和等级制度</li>
                    <li><strong>三合院</strong>：由四合院演变而来，只有三面房屋，布局更加灵活</li>
                    <li><strong>干栏式</strong>：南方湿热地区的布局，底层架空，上层居住，具有通风、防潮、防虫等优点</li>
                    <li><strong>土楼</strong>：环形或方形布局，具有防御功能，体现了家族聚居的特点</li>
                    <li><strong>吊脚楼</strong>：西南地区的布局，部分房屋悬空，适应山地环境</li>
                    <li><strong>江南水乡民居</strong>：沿河而建，前街后河，注重交通和排水</li>
                    <li><strong>蒙古包</strong>：圆形布局，可移动，适合游牧生活</li>
                    <li><strong>藏族碉房</strong>：多层布局，底层为畜圈，上层为居住区域，适应高原环境</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">相关人物</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li><strong>梁思成</strong>：中国著名建筑学家，建筑教育家，中国建筑史学科的奠基者。他对中国古代民居建筑进行了系统的研究，深入考察了大量传统民居，著有《中国建筑史》《中国古代建筑史纲要》等著作，为中国古代建筑的研究和保护做出了重要贡献。他提出的“建筑是凝固的音乐”等观点，对中国现代建筑的发展产生了深远影响</li>
                    <li><strong>刘敦桢</strong>：中国著名建筑学家，建筑教育家，中国建筑史学科的重要奠基人之一。他著有《中国住宅概说》《苏州古典园林》等著作，对中国古代民居建筑有深入研究，特别是对江南地区的传统民居进行了系统的考察和分析。他的研究成果为中国古代建筑的保护和传承提供了重要的理论基础</li>
                    <li><strong>吴良镛</strong>：中国著名建筑学家，致力于传统民居的保护和研究，对中国现代建筑的发展做出了重要贡献</li>
                    <li><strong>阮仪三</strong>：中国著名建筑学家，致力于历史文化名城和传统民居的保护，被称为“古城卫士”</li>
                    <li><strong>王其亨</strong>：中国著名建筑学家，对中国古代民居建筑的风水理论有深入研究，著有《风水理论研究》</li>
                    <li><strong>陈志华</strong>：中国著名建筑学家，著有《中国乡土建筑》等著作，对中国古代民居建筑进行了系统的研究</li>
                    <li><strong>张锦秋</strong>：中国著名建筑学家，致力于传统建筑的继承和创新，设计了许多具有传统特色的现代建筑</li>
                    <li><strong>单德启</strong>：中国著名建筑学家，致力于乡土建筑的研究和保护，著有《中国传统民居图说》等著作</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">文化意义</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>反映了中国古代的家庭观念和伦理道德，如四合院的长幼有序、尊卑有别的布局</li>
                    <li>体现了人与自然的和谐关系，如窑洞与黄土高原的融合，吊脚楼与山地环境的适应</li>
                    <li>是中国古代社会生活的重要载体，反映了不同地区的生活方式和文化传统</li>
                    <li>承载着丰富的民间文化信息，如民居的装饰图案、建筑命名等</li>
                    <li>是中国传统文化的重要组成部分，体现了中国古代的审美观念和艺术追求</li>
                    <li>体现了中国古代的审美观念和生活情趣，如江南水乡民居的灵动活泼，徽派建筑的典雅精致</li>
                    <li>对世界建筑艺术产生了深远影响，如日本、韩国等国家的民居建筑都受到中国古代民居建筑的影响</li>
                    <li>是人类文明的重要遗产，具有重要的历史、艺术和科学价值</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">保护现状</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>许多传统民居被列为文物保护单位，如北京四合院、福建土楼、徽州民居、丽江古城等</li>
                    <li>一些传统民居得到了修复和保护，如江南水乡民居、山西平遥古城、云南丽江古城等</li>
                    <li>传统民居的保护面临着现代化的挑战，如城市化进程、人口迁移、环境污染等</li>
                    <li>传统民居的文化价值逐渐被人们认识和重视，保护意识不断提高</li>
                    <li>相关部门采取了一系列措施，加强对传统民居的保护和管理，如制定保护法规、建立保护基金等</li>
                    <li>一些传统民居被开发为旅游景点，促进了当地经济的发展，同时也提高了传统民居的知名度</li>
                    <li>国际社会对中国传统民居的保护给予了高度关注，如福建土楼被列为世界文化遗产</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'garden' && (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">园林建筑</h3>
            <div className="mb-6">
              <p className="mb-4">
                园林建筑是中国古代建筑的瑰宝，是人工创造的自然景观。
                园林建筑注重意境和自然和谐，通过亭台楼阁、山水花木的巧妙布局，创造出独特的园林景观。
                中国古代园林建筑历史悠久，从商周时期的囿，到秦汉时期的苑，再到明清时期的园林，
                形成了一套完整的造园体系。园林建筑不仅是人们休闲娱乐的场所，也是中国传统文化的重要载体，
                体现了中国古代的审美观念、哲学思想和生活情趣。
                中国古代园林建筑以其独特的艺术风格和深厚的文化内涵，成为世界园林艺术的重要组成部分。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">代表作品</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>苏州园林</strong>：拙政园、留园、网师园、狮子林等，以小巧玲珑著称。苏州园林始于春秋时期，成熟于唐宋时期，兴盛于明清时期。苏州园林以其精湛的造园艺术和深厚的文化内涵而闻名于世，被誉为“咫尺之内再造乾坤”。</li>
                    <li><strong>颐和园</strong>：中国最大的皇家园林，位于北京。始建于清朝乾隆年间，原名清漪园，后被英法联军焚毁，光绪年间重建并改名为颐和园。颐和园以昆明湖和万寿山为主体，融合了江南园林的造园手法，是中国皇家园林的杰出代表。</li>
                    <li><strong>承德避暑山庄</strong>：清朝皇帝的避暑胜地，规模宏大。始建于康熙四十二年（1703年），历经康熙、雍正、乾隆三朝建成。避暑山庄以自然山水为基础，融合了南北园林的风格，是中国古代园林的杰作。</li>
                    <li><strong>扬州个园</strong>：以叠石艺术著称。始建于清朝嘉庆年间，由盐商黄至筠所建。个园以四季假山闻名，运用不同的石材和叠石手法，创造出四季不同的景观。</li>
                    <li><strong>拙政园</strong>：苏州园林中最大的一座，始建于明朝正德年间，由御史王献臣所建。拙政园以水为中心，山水萦绕，亭榭精美，花木繁茂，具有浓郁的江南水乡特色。</li>
                    <li><strong>留园</strong>：苏州园林的代表作品之一，始建于明朝嘉靖年间，由太仆寺少卿徐泰时所建。留园以建筑艺术精湛著称，厅堂宏敞华丽，庭院富有变化，太湖石以冠云峰为最。</li>
                    <li><strong>网师园</strong>：苏州园林中最小的一座，始建于南宋淳熙年间，由吏部侍郎史正志所建。网师园以小巧玲珑、布局紧凑著称，体现了江南园林的精巧雅致。</li>
                    <li><strong>狮子林</strong>：苏州园林的代表作品之一，始建于元朝至正年间，由天如禅师所建。狮子林以假山著称，假山群峰起伏，气势磅礴，被誉为“假山王国”。</li>
                    <li><strong>豫园</strong>：上海的著名园林，始建于明朝嘉靖年间，由潘允端所建。豫园以江南园林风格为主，融合了上海的地方特色，是上海的重要文化遗产。</li>
                    <li><strong>寄畅园</strong>：无锡的著名园林，始建于明朝正德年间，由秦金所建。寄畅园以自然山水为特色，融合了江南园林的造园手法，是无锡的重要文化遗产。</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">建筑特点</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>因地制宜，巧妙利用自然地形，体现了“天人合一”的哲学思想</li>
                    <li>以水为中心，山水相依，创造出自然和谐的景观</li>
                    <li>亭台楼阁点缀其间，错落有致，与自然环境融为一体</li>
                    <li>注重意境，追求自然和谐，体现了中国古代的审美观念</li>
                    <li>植物配置合理，四季有景，体现了中国古代的园艺水平</li>
                    <li>建筑与自然环境融为一体，体现了中国古代的建筑理念</li>
                    <li>装饰精美，融合了绘画、雕刻、书法等艺术形式</li>
                    <li>布局巧妙，层次分明，创造出丰富的空间体验</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">园林类型</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li><strong>皇家园林</strong>：规模宏大，气势恢宏，如颐和园、避暑山庄、圆明园等</li>
                    <li><strong>私家园林</strong>：小巧玲珑，精致典雅，如苏州园林、扬州个园等</li>
                    <li><strong>寺观园林</strong>：与宗教建筑相结合，如杭州灵隐寺园林、苏州西园寺园林等</li>
                    <li><strong>公共园林</strong>：供公众游览的园林，如杭州西湖、济南大明湖等</li>
                    <li><strong>文人园林</strong>：由文人设计建造，体现文人的审美情趣，如苏州拙政园、无锡寄畅园等</li>
                    <li><strong>岭南园林</strong>：广东地区的园林，如广州余荫山房、佛山梁园等</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">园林要素</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li><strong>山</strong>：人工堆砌的假山，如苏州园林的太湖石假山、扬州个园的四季假山</li>
                    <li><strong>水</strong>：人工开挖的池塘或湖泊，如颐和园的昆明湖、拙政园的水池</li>
                    <li><strong>建筑</strong>：亭、台、楼、阁、榭、廊等，如颐和园的佛香阁、拙政园的远香堂</li>
                    <li><strong>植物</strong>：各种树木、花卉，如松、竹、梅、兰、菊等，体现了中国古代的植物文化</li>
                    <li><strong>叠石</strong>：用于堆砌假山，如太湖石、黄石、宣石等，体现了中国古代的叠石艺术</li>
                    <li><strong>匾额、楹联</strong>：用于点题和增添文化内涵，如拙政园的“远香堂”匾额</li>
                    <li><strong>路径</strong>：园林中的道路和小径，如曲径通幽的小路</li>
                    <li><strong>桥梁</strong>：连接水面的建筑，如颐和园的十七孔桥、拙政园的小飞虹</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">造园手法</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>借景</strong>：将园外景色引入园内，如颐和园借西山之景、拙政园借北寺塔之景</li>
                    <li><strong>障景</strong>：用建筑或植物遮挡视线，增加园林的层次感，如颐和园的仁寿殿</li>
                    <li><strong>框景</strong>：用门窗或廊柱框住景色，形成如画的景观，如苏州园林的漏窗</li>
                    <li><strong>漏景</strong>：通过镂空的墙或窗透景，增加园林的趣味性，如苏州园林的花窗</li>
                    <li><strong>对景</strong>：在园林中设置相对的景观，相互呼应，如颐和园的佛香阁和昆明湖</li>
                    <li><strong>分景</strong>：将园林分为多个景区，每个景区有不同的主题，如颐和园的前山景区和后山景区</li>
                    <li><strong>隔景</strong>：用墙、廊等将园林分隔成不同的空间，增加园林的层次感</li>
                    <li><strong>点景</strong>：在园林中设置标志性的景观，如颐和园的铜牛、拙政园的冠云峰</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">相关人物</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li><strong>计成</strong>：明代造园家，著有《园冶》一书，是中国古代造园理论的重要著作，对中国古代造园艺术产生了深远影响</li>
                    <li><strong>张南垣</strong>：明末清初造园家，擅长叠石，被称为“山子张”，对江南园林的发展做出了重要贡献</li>
                    <li><strong>戈裕良</strong>：清代造园家，以叠石技艺著称，创造了“钩带法”，对中国古代叠石艺术的发展做出了重要贡献</li>
                    <li><strong>陈从周</strong>：现代著名园林学家，著有《苏州园林》等著作，对中国古代园林的研究和保护做出了重要贡献</li>
                    <li><strong>文震亨</strong>：明代文人，著有《长物志》，对园林设计有重要影响，体现了明代文人的审美情趣</li>
                    <li><strong>李渔</strong>：清代文学家，著有《闲情偶寄》，对园林设计有独特见解，体现了清代文人的生活情趣</li>
                    <li><strong>米万钟</strong>：明代文人，擅长造园，是北京勺园的设计者，对北方园林的发展做出了重要贡献</li>
                    <li><strong>乾隆皇帝</strong>：清朝皇帝，对皇家园林的建设做出了重要贡献，如颐和园、避暑山庄等</li>
                    <li><strong>康熙皇帝</strong>：清朝皇帝，对皇家园林的建设做出了重要贡献，如避暑山庄等</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">文化意义</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>体现了中国古代的审美观念和艺术追求，是中国古代艺术的重要组成部分</li>
                    <li>反映了中国古代的哲学思想，如“天人合一”、“道法自然”等，体现了中国古代对人与自然关系的认识</li>
                    <li>是中国古代造园艺术的杰出代表，展示了中国古代的造园技术和艺术水平</li>
                    <li>承载着丰富的文化内涵，融合了诗、画、书法等艺术形式，体现了中国古代的文化多样性</li>
                    <li>对世界园林艺术产生了深远影响，如日本枯山水园林、欧洲中式园林等，是世界园林艺术的重要组成部分</li>
                    <li>是中国传统文化的重要组成部分，体现了中国古代的文化传统和生活方式</li>
                    <li>具有重要的历史、艺术和科学价值，是人类文明的重要遗产</li>
                    <li>促进了不同文化之间的交流与融合，是中外文化交流的重要载体</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">保护现状</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>许多园林被列为文物保护单位，如苏州园林、颐和园、避暑山庄等</li>
                    <li>一些园林得到了修复和保护，如拙政园、留园、网师园等</li>
                    <li>园林的保护面临着现代化的挑战，如城市化进程、环境污染、游客过多等</li>
                    <li>园林的文化价值逐渐被人们认识和重视，保护意识不断提高</li>
                    <li>相关部门采取了一系列措施，加强对园林的保护和管理，如制定保护法规、限制游客数量等</li>
                    <li>一些园林被开发为旅游景点，促进了当地经济的发展，同时也提高了园林的知名度</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'defense' && (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">防御建筑</h3>
            <div className="mb-6">
              <p className="mb-4">
                防御建筑是为了抵御外敌入侵而建造的建筑，包括城墙、关隘、烽火台等。
                防御建筑通常高大坚固，具有很强的防御功能，是中国古代军事建筑的杰出代表。
                中国古代防御建筑的发展经历了漫长的历史过程，从早期的简单城墙到后来的复杂防御体系，
                形成了一套完整的防御建筑体系。防御建筑不仅是军事防御的重要设施，也是中国传统文化的重要载体，
                体现了中国古代的军事思想和防御策略。
                中国古代防御建筑以其独特的建筑风格和深厚的历史文化内涵，成为世界建筑史上的重要组成部分。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">代表作品</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>长城</strong>：中国古代最伟大的防御工程，始建于秦朝。长城是中国古代为了抵御北方游牧民族的入侵而修建的防御工程，全长超过21000公里。长城不仅是中国古代军事防御体系的重要组成部分，也是中国古代劳动人民智慧和勇气的象征。</li>
                    <li><strong>山海关</strong>：明长城的东起点，被称为"天下第一关"。山海关始建于明朝洪武十四年（1381年），是明长城的重要关隘之一。山海关地势险要，是连接东北和华北的咽喉要道，历史上曾多次发生重要的战役。</li>
                    <li><strong>嘉峪关</strong>：明长城的西起点，位于甘肃省。嘉峪关始建于明朝洪武五年（1372年），是明长城的重要关隘之一。嘉峪关是丝绸之路上的重要节点，也是中国古代西部边防的重要屏障。</li>
                    <li><strong>居庸关</strong>：北京西北的重要关隘，地势险要。居庸关始建于秦朝，是长城的重要关隘之一。居庸关是北京的北大门，历史上曾多次发生重要的战役。</li>
                    <li><strong>雁门关</strong>：位于山西省北部，是长城的重要关隘之一。雁门关始建于战国时期，是中国古代北方的重要边防要塞，历史上曾多次发生重要的战役。</li>
                    <li><strong>紫荆关</strong>：位于河北省易县，是长城的重要关隘之一。紫荆关始建于战国时期，是北京的南大门，历史上曾多次发生重要的战役。</li>
                    <li><strong>娘子关</strong>：位于山西省平定县，是长城的重要关隘之一。娘子关始建于唐朝，因平阳公主率领娘子军在此驻守而得名，历史上曾多次发生重要的战役。</li>
                    <li><strong>潼关</strong>：位于陕西省潼关县，是关中地区的东大门，地势险要，是连接中原和关中的咽喉要道。潼关始建于秦朝，历史上曾多次发生重要的战役。</li>
                    <li><strong>函谷关</strong>：位于河南省灵宝市，是关中地区的东大门，地势险要，是连接中原和关中的咽喉要道。函谷关始建于周朝，历史上曾多次发生重要的战役。</li>
                    <li><strong>剑门关</strong>：位于四川省剑阁县，是四川盆地的北大门，地势险要，是连接四川和中原的咽喉要道。剑门关始建于三国时期，历史上曾多次发生重要的战役。</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">建筑特点</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>选址险要，易守难攻，通常建在交通要道或地势险要的地方</li>
                    <li>建筑高大坚固，防御功能强，能够抵御外敌的入侵</li>
                    <li>烽火台等设施用于传递信号，形成完整的通信体系</li>
                    <li>与自然地形相结合，形成完整的防御体系，如长城与山脉的结合</li>
                    <li>建筑形式多样，适应不同的地形条件，如山地、平原、沙漠等</li>
                    <li>防御设施齐全，包括城墙、关隘、烽火台、城楼、敌楼等</li>
                    <li>建筑材料就地取材，如石头、砖、土等，适应不同地区的自然环境</li>
                    <li>建筑工艺精湛，体现了中国古代的建筑技术水平，如夯土技术、砖石技术等</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">防御设施</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li><strong>城墙</strong>：环绕城市或城堡的防御墙，如南京城墙、西安城墙、平遥城墙等</li>
                    <li><strong>关隘</strong>：位于交通要道的防御工事，如山海关、嘉峪关、居庸关等</li>
                    <li><strong>烽火台</strong>：用于传递军事信号的高台，如长城沿线的烽火台、汉代烽火台等</li>
                    <li><strong>城楼</strong>：城墙上的防御建筑，如天安门、箭楼、永定门城楼等</li>
                    <li><strong>敌楼</strong>：城墙上的防御设施，用于观察和射击，如长城敌楼、南京城墙敌楼等</li>
                    <li><strong>护城河</strong>：城墙外的防御设施，用于阻挡敌人进攻，如南京护城河、西安护城河等</li>
                    <li><strong>瓮城</strong>：城门外的防御设施，用于诱敌深入，如北京正阳门瓮城、南京聚宝门瓮城等</li>
                    <li><strong>马面</strong>：城墙上的突出部分，用于增强防御能力，如平遥城墙马面、西安城墙马面等</li>
                    <li><strong>吊桥</strong>：横跨护城河的桥梁，可升降，用于控制城门的通行，如南京聚宝门吊桥、北京正阳门吊桥等</li>
                    <li><strong>角楼</strong>：城墙拐角处的建筑，用于观察和防御，如北京故宫角楼、南京城墙角楼等</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">历史演变</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li><strong>先秦时期</strong>：开始修建城墙和关隘，如楚国的方城、齐国的长城、燕国的长城等</li>
                    <li><strong>秦汉时期</strong>：大规模修建长城，如秦长城、汉长城等，用于抵御匈奴的入侵</li>
                    <li><strong>魏晋南北朝时期</strong>：继续修建长城，抵御北方游牧民族，如北魏长城、北齐长城等</li>
                    <li><strong>隋唐时期</strong>：完善防御体系，如隋长城、唐长城等，用于抵御突厥的入侵</li>
                    <li><strong>宋元时期</strong>：修建长城，抵御辽、金、蒙古等政权，如宋长城、元长城等</li>
                    <li><strong>明清时期</strong>：修建明长城，防御体系更加完善，用于抵御蒙古、满族的入侵</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">建筑技术</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>夯土筑城</strong>：早期城墙的主要建造方法，如秦长城、汉长城等</li>
                    <li><strong>砖石城墙</strong>：后期城墙的主要建造方法，如明长城、南京城墙等</li>
                    <li><strong>敌楼</strong>：城墙上的防御设施，用于观察和射击，如长城敌楼、南京城墙敌楼等</li>
                    <li><strong>护城河</strong>：城墙外的防御设施，用于阻挡敌人进攻，如南京护城河、西安护城河等</li>
                    <li><strong>烽火台</strong>：用于传递军事信号，如白天放烟，晚上点火，形成完整的通信体系</li>
                    <li><strong>瓮城</strong>：城门外的防御设施，用于诱敌深入，形成"瓮中捉鳖"的效果</li>
                    <li><strong>马面</strong>：城墙上的突出部分，用于增强防御能力，增加防御的角度</li>
                    <li><strong>吊桥</strong>：横跨护城河的桥梁，可升降，用于控制城门的通行</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">相关人物</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li><strong>蒙恬</strong>：秦朝大将，负责修建长城，抵御匈奴，是长城修建的重要组织者</li>
                    <li><strong>戚继光</strong>：明朝抗倭名将，负责修建明长城，抵御蒙古，改进了长城的防御设施</li>
                    <li><strong>徐达</strong>：明朝开国大将，负责修建山海关，是明长城修建的重要组织者</li>
                    <li><strong>袁崇焕</strong>：明朝末年将领，曾在宁远城抵御清军，是明朝末年的重要军事将领</li>
                    <li><strong>秦始皇</strong>：统一六国后，下令修建长城，是中国历史上第一个大规模修建长城的皇帝</li>
                    <li><strong>汉武帝</strong>：派卫青、霍去病等将领修建长城，抵御匈奴，扩大了长城的规模</li>
                    <li><strong>明成祖</strong>：下令修建明长城，抵御蒙古，完善了长城的防御体系</li>
                    <li><strong>李成梁</strong>：明朝大将，负责修建明长城的辽东段，是明长城修建的重要组织者</li>
                    <li><strong>袁崇焕</strong>：明朝末年将领，负责守卫长城的山海关段，抵御后金的入侵</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">文化意义</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>体现了中国古代的军事思想和防御策略，如"知己知彼，百战不殆"</li>
                    <li>反映了中国古代的民族关系和边疆政策，如"和亲"、"羁縻"等</li>
                    <li>是中国古代建筑技术的杰出代表，展示了中国古代的建筑技术和艺术水平</li>
                    <li>承载着丰富的历史文化信息，是研究中国古代历史的重要资料</li>
                    <li>是中华民族坚韧不拔精神的象征，体现了中华民族的团结协作精神</li>
                    <li>是中国传统文化的重要组成部分，体现了中国古代的文化传统</li>
                    <li>对世界军事建筑产生了深远影响，如欧洲的城堡建筑等</li>
                    <li>是人类文明的重要遗产，具有重要的历史、艺术和科学价值</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-primary mb-2 transition-all duration-300 hover:text-red-600 hover:scale-105">保护现状</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>许多防御建筑被列为文物保护单位，如长城、山海关、嘉峪关等</li>
                    <li>一些防御建筑得到了修复和保护，如八达岭长城、慕田峪长城、山海关等</li>
                    <li>防御建筑的保护面临着现代化的挑战，如城市化进程、环境污染、游客过多等</li>
                    <li>防御建筑的文化价值逐渐被人们认识和重视，保护意识不断提高</li>
                    <li>相关部门采取了一系列措施，加强对防御建筑的保护和管理，如制定保护法规、限制游客数量等</li>
                    <li>一些防御建筑被开发为旅游景点，促进了当地经济的发展，同时也提高了防御建筑的知名度</li>
                    <li>国际社会对中国防御建筑的保护给予了高度关注，如长城被列为世界文化遗产</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 学习提示 */}
      <div className="mt-8 bg-secondary bg-opacity-10 rounded-lg p-6 border-l-4 border-primary">
        <h4 className="text-xl font-semibold text-primary mb-2">学习提示</h4>
        <p className="mb-2">
          本模块的内容与闯关游戏中的题目密切相关，建议您：
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>仔细阅读每个建筑类型的特点和代表作品</li>
          <li>注意建筑的地理位置和历史背景</li>
          <li>了解不同建筑类型的独特之处</li>
          <li>学习后尝试回答闯关游戏中的题目，检验自己的掌握程度</li>
        </ul>
      </div>
    </div>
  );
};

export default ArchitectureIntroduction;