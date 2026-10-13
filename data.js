export const sources = [
 {id:'google',name:'Google · Machine Learning Crash Course',url:'https://developers.google.com/machine-learning/crash-course/',language:'EN / 中文',checked:'2026-10-11'},
 {id:'hf',name:'Hugging Face · LLM Course',url:'https://huggingface.co/learn/llm-course/chapter1/1',language:'EN / 中文',checked:'2026-10-11'},
 {id:'agents',name:'Anthropic · Building effective agents',url:'https://www.anthropic.com/engineering/building-effective-agents',language:'EN',checked:'2026-10-11'}
];
const rows = [
 ['foundations','AI 基础与边界','AI Foundations','基础',[], 'google','AI、机器学习与深度学习是包含关系。模型从数据中学习规律，但输出并不等于事实。先区分分类、预测和生成任务，再选择工具。','列出三个身边的 AI 应用，区分任务类型，并给每个应用写一个失败案例。','模型输出一定可靠吗？',['可靠，因为训练数据很多','不可靠，需要核实与评估','只要提示足够长就可靠'],1,'生成结果是概率性输出，数据偏差和幻觉仍然存在。'],
 ['prompt','提示词与结构化输出','Prompt Engineering','基础',['foundations'],'hf','把任务、上下文、输入、输出格式与限制分开。使用少量示例明确标准；比较多个输入上的表现，避免只调好一个例子。','为读书摘要设计提示词，用三段不同文本测试，记录遗漏和事实错误。','怎样判断提示词改进是否有效？',['只看一个成功样例','把提示写得更长','在固定的多样测试集上比较'],2,'固定测试集使版本之间的比较有依据。'],
 ['safety','事实核查与负责任使用','Responsible AI','基础',['foundations'],'google','记录来源、核查关键事实、保护个人信息。区分模型生成的解释和可核验的证据；评估不同人群受到的影响。','审查一段 AI 回答，标注事实、推断与未知，核查两条关键论断。','输入真实个人资料前应该？',['最小化并匿名化数据','直接粘贴全部资料','要求模型保密即可'],0,'减少收集和暴露是保护隐私的起点。'],
 ['multimodal','多模态与创意工作流','Multimodal AI','创作',['prompt','safety'],'hf','多模态系统处理文字、图像或音频。生成视觉资产时分别约束主体、构图、风格与用途；用一致的评价标准挑选结果。','设计一套三张主题海报的创作说明，记录一致性、可读性与版权检查。','系列图像应优先评估什么？',['文件名是否相同','主题一致性与用途匹配','提示词的字数'],1,'评估应服务于真实使用场景。'],
 ['python','Python 与数据处理','Python & Data','工程',[],'google','函数封装可复用行为，列表和字典组织数据。读取数据时检查缺失值、类型和重复项；训练集与测试集应分离。','清洗一份小型 CSV，统计缺失项，并写一个可重复运行的数据处理函数。','为何分离训练与测试数据？',['让文件变小','避免用已见数据高估效果','避免写函数'],1,'测试集用于估计对未见数据的泛化能力。'],
 ['llm','大模型与 Transformer','Large Language Model','工程',['foundations'],'hf','Token 是模型处理的文本单位。Transformer 用注意力建模上下文；预训练、微调和推理是不同阶段。上下文窗口有限，不能代替长期记忆。','用自己的话解释 token、注意力和上下文窗口，比较两段文本的切分差异。','上下文窗口意味着？',['模型永久记住所有对话','一次推理可处理的信息范围','模型训练数据大小'],1,'上下文是当次输入范围，不是永久记忆。'],
 ['api','模型 API 与应用开发','Model API','工程',['python','prompt'],'hf','应用通过请求调用模型，处理返回值、超时和错误。API 密钥应留在服务端；记录延迟、成本与失败率。先用 mock 验证流程，再连接服务。','构建一个带错误处理的摘要接口，准备成功、超时、无效输入三个测试场景。','API 密钥应该存在哪里？',['浏览器源码','公开仓库','服务端环境变量'],2,'客户端和公开仓库不能保护密钥。'],
 ['rag','检索增强生成','Retrieval-Augmented Generation','工程',['api','llm'],'hf','RAG 先检索相关文档，再将证据提供给模型。切分、向量检索和引用影响答案质量。没有证据时应表达未知，不能用生成补齐事实。','用五篇文档建立问答原型，准备十个问题，检查检索命中、引用与拒答。','RAG 质量差时先检查？',['仅增大模型','检索证据是否相关且完整','删除引用'],1,'错误检索会将错误上下文带入生成。'],
 ['agents','Agent 与工具调用','Agent & Tool Use','进阶',['api','safety'],'agents','工作流按预定步骤执行；Agent 根据反馈选择下一步。工具需明确参数和权限，执行应有停止条件、预算和人工审批边界。','设计一个资料研究助手，列出工具、权限、停止条件与失败恢复方案。','Agent 必须具备哪项边界？',['无限重试','全部系统权限','明确停止条件与权限'],2,'约束执行范围才能控制失败和成本。'],
 ['eval','评估与可观测性','Evaluation','进阶',['api','safety'],'agents','把质量目标转成可检查指标。保留代表性与对抗性案例，分别记录正确性、延迟、成本；人工评审与自动检查互补。','建立十条测试用例和评分标准，对两个版本做对照并写出结论。','发布新版本应该依据？',['测试集与实际指标','演示时的一次成功','模型名称'],0,'系统性评估比单次演示更能反映稳定性。'],
 ['finetune','微调与模型工程','Fine-tuning','进阶',['python','llm','eval'],'hf','微调改变模型权重，RAG 提供外部知识。先判断问题来自行为还是知识；检查训练数据质量、验证集与算力预算。','写一份微调决策说明：目标、数据、基线、验证集和停止标准。','需要频繁更新的知识优先考虑？',['每次重新训练','检索外部知识','扩大提示字体'],1,'检索便于独立更新知识并追踪来源。'],
 ['product','AI 产品与综合交付','AI Product Design','进阶',['prompt','safety','eval'],'agents','从用户任务出发定义成功标准，设计失败提示、人工接管和反馈入口。用实际用户任务验证价值，不以模型能力代替产品目标。','为 AI 产品写一页方案：用户、任务、成功指标、失败边界和验证方法。','AI 产品的成功首先取决于？',['是否用了最贵模型','是否解决用户任务','是否包含最多功能'],1,'产品价值来自任务结果。']
];
export const modules = rows.map(([id,title,en,level,prereqs,source,lesson,task,question,options,answer,explanation])=>({id,title,en,level,prereqs,source,lesson,task,quiz:{question,options,answer,explanation},version:'1.2.0',updated:'2026-10-12',terms:en.split(' & ')}));
export const paths = [
 {id:'explore',name:'AI 通识探索者',subtitle:'理解、判断、有效使用',ids:['foundations','prompt','safety','llm','multimodal']},
 {id:'creator',name:'AI 创意实践者',subtitle:'从灵感到可复用创作流程',ids:['foundations','prompt','safety','multimodal','api','eval','product']},
 {id:'builder',name:'AI 应用构建者',subtitle:'从代码到可靠的智能应用',ids:['python','foundations','prompt','safety','llm','api','rag','agents','eval','product']},
 {id:'engineer',name:'模型工程探索者',subtitle:'理解模型、数据与评估',ids:['foundations','python','prompt','safety','llm','api','eval','finetune']}
];
export const projects = [
 {id:'prompt-lab',name:'提示词对照实验',tag:'入门',requires:['prompt'],brief:'同一任务，用两个提示版本处理三组输入，记录结果差异。',deliverables:['两个提示版本','三组输入与结果','评价标准与复盘']},
 {id:'creative',name:'多模态创意工作室',tag:'创作',requires:['multimodal','safety'],brief:'围绕一个主题设计三张海报，建立统一视觉与核查流程。',deliverables:['创作说明与成品链接','一致性检查','素材来源记录']},
 {id:'knowledge',name:'带引用的知识库问答',tag:'工程',requires:['rag','eval'],brief:'用自选文档建立问答应用，评估证据质量与无答案时的表现。',deliverables:['代码或演示链接','十条评估用例','引用与拒答报告']},
 {id:'research',name:'有边界的研究 Agent',tag:'进阶',requires:['agents','eval'],brief:'设计具备工具权限、预算和停止条件的研究助手。',deliverables:['流程与工具定义','失败恢复案例','质量与成本报告']},
 {id:'compass',name:'AI Compass',tag:'可选综合项目',requires:['rag','agents','product'],brief:'构建个人 AI 信息导航：检索可信资料、组织知识、提供可追溯推荐。可自由替换为自己的综合项目。',deliverables:['需求与用户任务','可运行原型链接','来源、评估与迭代报告']}
];
export const history = [{version:'1.2.0',date:'2026-10-12',note:'Orbit 卡片学习空间：保留可交互知识球，采用看概念、改示例、记发现的自主学习方式，兼容已有进度。'},{version:'1.0.0',date:'2026-10-11',note:'建立 12 个能力模块、4 条路径、5 个实践项目；整理官方学习来源。知识内容为编辑摘要，非官方课程认证。'}];
