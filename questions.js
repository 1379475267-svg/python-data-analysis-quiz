window.QUESTION_BANK = [
  {
    "id": "tf-1",
    "number": 1,
    "section": "判断题",
    "type": "true_false",
    "stem": "数据分析的核心价值在于辅助决策，通过客观数据减少主观偏差。",
    "answer": [
      "√"
    ],
    "explanation": "数据分析的核心价值在于辅助决策，通过客观数据减少主观偏差，这是数据分析在现代商业决策中的基本共识。"
  },
  {
    "id": "tf-2",
    "number": 2,
    "section": "判断题",
    "type": "true_false",
    "stem": "数据预处理阶段包括缺失值处理、异常值检测、重复数据删除等操作。",
    "answer": [
      "√"
    ],
    "explanation": "数据预处理阶段的核心工作确实包括缺失值处理、异常值检测、重复数据删除以及数据格式转换等，是数据分析的基础环节。"
  },
  {
    "id": "tf-3",
    "number": 3,
    "section": "判断题",
    "type": "true_false",
    "stem": "探索性数据分析（EDA）通常在模型评估之后进行，用于验证模型效果。",
    "answer": [
      "×"
    ],
    "explanation": "探索性数据分析（EDA）通常在正式建模之前进行，用于理解数据结构、发现异常值、验证假设等；而模型评估是在建模之后。因此该说法错误。"
  },
  {
    "id": "tf-4",
    "number": 4,
    "section": "判断题",
    "type": "true_false",
    "stem": "相关系数矩阵可以用于识别数值属性之间的冗余关系，判断是否存在高度相关性。",
    "answer": [
      "√"
    ],
    "explanation": "相关系数矩阵（如Pearson相关系数）可以有效识别数值属性之间的线性相关性，当两个属性高度相关时可能存在冗余，是常用的冗余识别方法。"
  },
  {
    "id": "tf-5",
    "number": 5,
    "section": "判断题",
    "type": "true_false",
    "stem": "在数据集成过程中，为了保留更多信息，应尽可能保留所有属性，无需考虑冗余问题。",
    "answer": [
      "×"
    ],
    "explanation": "在数据集成过程中，冗余属性会增加存储负担和计算复杂度，甚至可能导致多重共线性问题，因此需要识别并剔除冗余属性，而不是无条件保留所有属性。"
  },
  {
    "id": "tf-6",
    "number": 6,
    "section": "判断题",
    "type": "true_false",
    "stem": "数据分析与数据挖掘是完全独立的概念，彼此之间没有任何交集。",
    "answer": [
      "×"
    ],
    "explanation": "数据分析与数据挖掘有密切联系，广义的数据分析包含数据挖掘（如聚类、关联规则等），数据挖掘是数据分析的深入阶段，两者并非完全独立。"
  },
  {
    "id": "tf-7",
    "number": 7,
    "section": "判断题",
    "type": "true_false",
    "stem": "可视化分析仅用于最终报告展示，在数据分析前期和中期无需使用可视化。",
    "answer": [
      "×"
    ],
    "explanation": "数据可视化贯穿数据分析的整个流程，在数据探索（EDA）、特征分析、模型诊断以及最终报告展示阶段都起到重要作用，并非仅用于最终报告。"
  },
  {
    "id": "tf-8",
    "number": 8,
    "section": "判断题",
    "type": "true_false",
    "stem": "Python中的列表（List）是不可变数据类型，创建后不能修改其元素。",
    "answer": [
      "×"
    ],
    "explanation": "Python中的列表（List）是可变数据类型，创建后可以修改、添加或删除元素；元组（Tuple）才是不可变数据类型。因此该说法错误。"
  },
  {
    "id": "tf-9",
    "number": 9,
    "section": "判断题",
    "type": "true_false",
    "stem": "在Python中，可以使用 for 循环直接遍历字符串中的每一个字符。",
    "answer": [
      "√"
    ],
    "explanation": "Python的for循环非常灵活，可以直接遍历任何可迭代对象，包括字符串，例如 for ch in \"Python\": 可以遍历每个字符。"
  },
  {
    "id": "tf-10",
    "number": 10,
    "section": "判断题",
    "type": "true_false",
    "stem": "函数定义时，带有默认值的参数必须放在所有没有默认值的参数之后。",
    "answer": [
      "√"
    ],
    "explanation": "在Python函数定义中，带有默认值的参数（默认参数）必须放在所有没有默认值的参数之后，否则会引发语法错误。"
  },
  {
    "id": "tf-11",
    "number": 11,
    "section": "判断题",
    "type": "true_false",
    "stem": "集合（Set）中的元素可以是任意可变对象，例如列表（List）。",
    "answer": [
      "×"
    ],
    "explanation": "集合（Set）中的元素必须是可哈希（hashable）且不可变的类型，而列表是可变对象，不能作为集合的元素（会抛出TypeError）。"
  },
  {
    "id": "tf-12",
    "number": 12,
    "section": "判断题",
    "type": "true_false",
    "stem": "正则表达式中的元字符 \\d+ 可以匹配一个或多个数字。",
    "answer": [
      "√"
    ],
    "explanation": "正则表达式中，\\d 匹配任意单个数字，加上 + 表示匹配一个或多个数字，因此 \\d+ 可以匹配连续的数字序列。"
  },
  {
    "id": "tf-13",
    "number": 13,
    "section": "判断题",
    "type": "true_false",
    "stem": "在Python循环结构中，break 语句用于跳过当前循环的剩余语句，直接进入下一次循环。",
    "answer": [
      "×"
    ],
    "explanation": "break语句用于立即终止整个循环；而跳过当前循环剩余语句、直接进入下一次循环的功能应由 continue 语句实现。题干描述错误。"
  },
  {
    "id": "tf-14",
    "number": 14,
    "section": "判断题",
    "type": "true_false",
    "stem": "字典（Dictionary）的键（Key）必须是不可变类型，如数字、字符串或元组。",
    "answer": [
      "√"
    ],
    "explanation": "字典的键（Key）必须为不可变类型，常见的有数字、字符串、元组；列表、字典等可变类型不能作为字典的键。"
  },
  {
    "id": "tf-15",
    "number": 15,
    "section": "判断题",
    "type": "true_false",
    "stem": "在函数定义时，使用 *args 可以接收任意数量的关键字参数，而使用 **kwargs 可以接收任意数量的位置参数。",
    "answer": [
      "×"
    ],
    "explanation": "在函数定义中，*args 用于接收任意数量的位置参数（以元组形式存储），而 **kwargs 用于接收任意数量的关键字参数（以字典形式存储）。题干将两者功能说反了，因此错误。"
  },
  {
    "id": "tf-16",
    "number": 16,
    "section": "判断题",
    "type": "true_false",
    "stem": "数据清洗只需要处理缺失值，不需要处理重复数据。",
    "answer": [
      "×"
    ],
    "explanation": "数据清洗不仅要处理缺失值，重复数据、异常值、格式错误、冗余数据等都属于数据清洗的核心工作内容。重复数据会造成统计偏差、计算冗余，必须进行去重处理。"
  },
  {
    "id": "tf-17",
    "number": 17,
    "section": "判断题",
    "type": "true_false",
    "stem": "导入绘图模块的常用写法是import matplotlib.pyplot as plt。",
    "answer": [
      "√"
    ],
    "explanation": "这是 Python 使用 Matplotlib 绘图时标准且最常用的导入写法。"
  },
  {
    "id": "tf-18",
    "number": 18,
    "section": "判断题",
    "type": "true_false",
    "stem": "所有缺失值都必须直接删除，不能进行填充处理。",
    "answer": [
      "×"
    ],
    "explanation": "缺失值处理方式不只有删除，还可根据场景做均值、中位数、众数、插值、模型预测等填充。盲目删除会造成数据量减少、信息丢失。"
  },
  {
    "id": "tf-19",
    "number": 19,
    "section": "判断题",
    "type": "true_false",
    "stem": "np.zeros用于创建元素全为 1 的数组。",
    "answer": [
      "×"
    ],
    "explanation": "np.zeros() 创建元素全为0的数组；创建全1数组使用 np.ones() 。"
  },
  {
    "id": "tf-20",
    "number": 20,
    "section": "判断题",
    "type": "true_false",
    "stem": "绘图模块中，一张画布可以绘制多种类型的图表。",
    "answer": [
      "√"
    ],
    "explanation": "同一张画布上可以叠加折线图、柱状图、散点图等不同类型图表。"
  },
  {
    "id": "tf-21",
    "number": 21,
    "section": "判断题",
    "type": "true_false",
    "stem": "格式混乱的日期、文本不需要做数据清洗。",
    "answer": [
      "×"
    ],
    "explanation": "格式混乱的日期、文本会影响数据分析与运算，属于数据清洗的处理范畴，需要统一规范格式。"
  },
  {
    "id": "tf-22",
    "number": 22,
    "section": "判断题",
    "type": "true_false",
    "stem": "数据集成主要工作是整合多个数据源的数据。",
    "answer": [
      "√"
    ],
    "explanation": "数据集成就是将来自不同数据源、不同结构的数据合并、整合到一起，形成统一数据集。"
  },
  {
    "id": "tf-23",
    "number": 23,
    "section": "判断题",
    "type": "true_false",
    "stem": "NumPy支持对整个数组做加减乘除等向量化运算。",
    "answer": [
      "√"
    ],
    "explanation": "NumPy 数组支持向量化运算，可直接对整个数组执行四则运算，无需循环，运算效率更高。"
  },
  {
    "id": "tf-24",
    "number": 24,
    "section": "判断题",
    "type": "true_false",
    "stem": "Matplotlib仅能绘制折线图，不支持散点图、饼图。",
    "answer": [
      "×"
    ],
    "explanation": "Matplotlib 功能丰富，除折线图外，还支持散点图、饼图、柱状图、直方图等多种图表。"
  },
  {
    "id": "tf-25",
    "number": 25,
    "section": "判断题",
    "type": "true_false",
    "stem": "plt.plot一般用来绘制柱状图。",
    "answer": [
      "×"
    ],
    "explanation": "plt.plot() 主要绘制折线图；柱状图使用 plt.bar() 。"
  },
  {
    "id": "tf-26",
    "number": 26,
    "section": "判断题",
    "type": "true_false",
    "stem": "Pandas的DataFrame是二维数据结构。",
    "answer": [
      "√"
    ],
    "explanation": "DataFrame 是 Pandas 核心的二维表格型数据结构，由行和列组成。"
  },
  {
    "id": "tf-27",
    "number": 27,
    "section": "判断题",
    "type": "true_false",
    "stem": "使用pd.read_csv可以读取 csv 格式文件。",
    "answer": [
      "√"
    ],
    "explanation": "pd.read_csv() 是 Pandas 专门用于读取 CSV 格式文件的常用函数。"
  },
  {
    "id": "tf-28",
    "number": 28,
    "section": "判断题",
    "type": "true_false",
    "stem": "np.array可以将Python列表转换为NumPy数组。",
    "answer": [
      "√"
    ],
    "explanation": "np.array() 可接收 Python 列表，将其转换为 NumPy 数组。"
  },
  {
    "id": "tf-29",
    "number": 29,
    "section": "判断题",
    "type": "true_false",
    "stem": "arr.shape可以查看数组的维度和形状。",
    "answer": [
      "√"
    ],
    "explanation": "shape 属性会返回数组的行列维度信息，直观展示数组形状。"
  },
  {
    "id": "tf-30",
    "number": 30,
    "section": "判断题",
    "type": "true_false",
    "stem": "Matplotlib 主要用于数据分析不能进行数据的可视化绘图。",
    "answer": [
      "×"
    ],
    "explanation": "Matplotlib 是Python主流数据可视化绘图库，核心作用就是绘制各类图表，并非用于数据分析。"
  },
  {
    "id": "mc-1",
    "number": 1,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "下列哪个不是Python中的可变数据类型？",
    "options": [
      "A. 列表（list）",
      "B. 字典（dict）",
      "C. 元组（tuple）",
      "D. 集合（set）"
    ],
    "answer": [
      "C"
    ],
    "answerText": "C",
    "explanation": "元组是不可变序列，创建后不能修改；列表、字典、集合都是可变的。"
  },
  {
    "id": "mc-2",
    "number": 2,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "以下代码的输出结果是：print(2 ** 3 ** 2)",
    "options": [
      "A. 64",
      "B. 512",
      "C. 12",
      "D. 报错"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "幂运算符是右结合的，即 2 ** 3 ** 2 等价于 2 ** (3 ** 2) = 2 ** 9 = 512。"
  },
  {
    "id": "mc-3",
    "number": 3,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "下列哪个表达式用于判断变量x是否为整数？",
    "options": [
      "A. type(x) is int",
      "B. isinstance(x, int)",
      "C. x is int",
      "D. x.type() == int"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "isinstance(x, int) 是推荐的类型检查方法，会考虑继承关系；type(x) is int 也可行但不够灵活。"
  },
  {
    "id": "mc-4",
    "number": 4,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "对于列表 lst = [1, 2, 3, 4]，执行 lst[1:3] = [7, 8, 9] 后，lst 的值是？",
    "options": [
      "A. [1, 7, 8, 9, 4]",
      "B. [1, 7, 8, 9]",
      "C. [1, 2, 7, 8, 9, 4]",
      "D. [1, 7, 8, 9, 3, 4]"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "切片赋值会用右侧的可迭代对象替换指定切片位置的元素。lst[1:3] 对应索引1和2的元素[2,3]，替换为[7,8,9]后列表变为[1,7,8,9,4]。"
  },
  {
    "id": "mc-5",
    "number": 5,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "Python中，range(5) 产生的序列包含哪些整数？",
    "options": [
      "A. 1,2,3,4,5",
      "B. 0,1,2,3,4,5",
      "C. 0,1,2,3,4",
      "D. 1,2,3,4"
    ],
    "answer": [
      "C"
    ],
    "answerText": "C",
    "explanation": "range(stop) 生成从0到stop-1的整数序列，不包含stop。"
  },
  {
    "id": "mc-6",
    "number": 6,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "下列哪种方式可以正确创建一个空集合？",
    "options": [
      "A. s = {}",
      "B. s = set()",
      "C. s = []",
      "D. s = ()"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "{} 创建空字典，[] 创建空列表，() 创建空元组，set() 创建空集合。"
  },
  {
    "id": "mc-7",
    "number": 7,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "关于函数 def func(a, b=[]): 的说法，正确的是？",
    "options": [
      "A. 默认参数 b 在每次调用时都会重新创建为空列表",
      "B. 默认参数 b 在函数定义时被创建，多次调用会共享同一个列表",
      "C. 这样的定义会引发语法错误",
      "D. 默认参数不能使用列表类型"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "Python 的默认参数在函数定义时被创建并绑定，如果默认值是可变对象，多次调用时对其修改会累积影响。"
  },
  {
    "id": "mc-8",
    "number": 8,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "下列哪个语句用于捕获异常？",
    "options": [
      "A. try...except",
      "B. if...else",
      "C. for...in",
      "D. with...as"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "try...except 用于捕获和处理异常；with...as 用于上下文管理。"
  },
  {
    "id": "mc-9",
    "number": 9,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "表达式 [x for x in range(10) if x % 2 == 0] 的结果是？",
    "options": [
      "A. [0,2,4,6,8]",
      "B. [1,3,5,7,9]",
      "C. [0,1,2,3,4,5,6,7,8,9]",
      "D. []"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "列表推导式生成0-9中的偶数，即0,2,4,6,8。"
  },
  {
    "id": "mc-10",
    "number": 10,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "字典 d = {'a':1, 'b':2}，执行 d.get('c', 0) 返回什么？",
    "options": [
      "A. None",
      "B. 0",
      "C. KeyError",
      "D. 'c'"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "get(key, default) 方法在键不存在时返回指定的默认值0，不会抛出异常。"
  },
  {
    "id": "mc-11",
    "number": 11,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "以下代码的输出是：print(\"Hello\" * 3)",
    "options": [
      "A. HelloHelloHello",
      "B. Hello3",
      "C. 报错",
      "D. Hello Hello Hello"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "字符串与整数相乘表示重复拼接该字符串。"
  },
  {
    "id": "mc-12",
    "number": 12,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "关于 global 关键字的说法，正确的是？",
    "options": [
      "A. 在函数内声明全局变量",
      "B. 在函数内修改全局变量时必须使用",
      "C. 用于定义全局常量",
      "D. 只能用于函数外部"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "在函数内如果要对全局变量重新赋值（不是修改可变对象内部），需要使用 global 声明。"
  },
  {
    "id": "mc-13",
    "number": 13,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "下列哪个函数用于获取用户从键盘输入？",
    "options": [
      "A. input()",
      "B. print()",
      "C. eval()",
      "D. format()"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "input() 读取用户输入并返回字符串；print() 输出；eval() 执行字符串表达式。"
  },
  {
    "id": "mc-14",
    "number": 14,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "表达式 len(\"中国\") 在 Python 3 中的结果是？",
    "options": [
      "A. 2",
      "B. 4",
      "C. 6",
      "D. 取决于编码"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "Python 3 中字符串内部以 Unicode 字符存储，len() 统计字符个数，中文字符每个算1个。"
  },
  {
    "id": "mc-15",
    "number": 15,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "以下哪个方法用于向列表末尾添加一个元素？",
    "options": [
      "A. insert()",
      "B. extend()",
      "C. append()",
      "D. add()"
    ],
    "answer": [
      "C"
    ],
    "answerText": "C",
    "explanation": "append() 在列表末尾追加单个元素；extend() 追加可迭代对象中的元素；insert() 在指定位置插入。"
  },
  {
    "id": "mc-16",
    "number": 16,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "sorted([3,1,2], reverse=True) 的结果是？",
    "options": [
      "A. [1,2,3]",
      "B. [3,2,1]",
      "C. [3,1,2]",
      "D. [2,1,3]"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "sorted 返回新列表，reverse=True 表示降序排列，结果为 [3,2,1]。"
  },
  {
    "id": "mc-17",
    "number": 17,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "下列哪个符号用于单行注释？",
    "options": [
      "A. //",
      "B. /*",
      "C. #",
      "D. --"
    ],
    "answer": [
      "C"
    ],
    "answerText": "C",
    "explanation": "Python 中使用 # 进行单行注释，\"\"\" 或 ''' 用于多行字符串/注释。"
  },
  {
    "id": "mc-18",
    "number": 18,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "关于 break 和 continue 的说法，错误的是？",
    "options": [
      "A. break 用于终止当前循环",
      "B. continue 用于跳过本次循环剩余部分",
      "C. break 可以出现在 else 子句中",
      "D. break 和 continue 只能用于 for 循环"
    ],
    "answer": [
      "D"
    ],
    "answerText": "D",
    "explanation": "break 和 continue 可用于 for 和 while 循环，不能用于 if 等非循环结构。"
  },
  {
    "id": "mc-19",
    "number": 19,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "以下代码的输出：a = [1,2,3]; b = a; a = [4,5,6]; print(b)",
    "options": [
      "A. [1,2,3]",
      "B. [4,5,6]",
      "C. [1,2,3,4,5,6]",
      "D. None"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "b = a 使 b 指向原列表；之后 a = [4,5,6] 让 a 指向新列表，b 仍指向原列表。"
  },
  {
    "id": "mc-20",
    "number": 20,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "以下哪个表达式的结果为 True？",
    "options": [
      "A. 0 == False",
      "B. 1 is True",
      "C. [] == False",
      "D. \"\" == False"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "在 Python 中，布尔值是 int 的子类，False 等于整数 0，True 等于整数 1。但 is 比较身份，1 is True 为 False（虽然值相等，但不同对象）。空列表和空字符串与 False 值不等。"
  },
  {
    "id": "mc-21",
    "number": 21,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "创建 NumPy 数组时，哪个函数可以生成一个 3×3 的单位矩阵？",
    "options": [
      "A. np.eye(3)",
      "B. np.identity(3)",
      "C. np.ones((3,3))",
      "D. 以上都是"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A（注意：A 和 B 都能创建单位矩阵；若单选只能选一个，通常取 A。D 不严谨，因为 np.ones((3,3)) 不是单位矩阵。）",
    "explanation": "np.eye(3) 和 np.identity(3) 都可以生成 3×3 单位矩阵；np.ones((3,3)) 生成的是全 1 矩阵，不是单位矩阵。因此“以上都是”不成立。考试如果沿用题库原标准，应留意老师给出的口径。"
  },
  {
    "id": "mc-22",
    "number": 22,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "对于数组 arr = np.array([[1,2],[3,4]])，arr.shape 的值是？",
    "options": [
      "A. (2,)",
      "B. (2,2)",
      "C. (4,)",
      "D. (1,4)"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "shape 属性返回一个元组，表示每个维度的大小。此处是2行2列，故为 (2,2)。"
  },
  {
    "id": "mc-23",
    "number": 23,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "下列哪个操作能够实现 NumPy 数组的逐元素乘法？",
    "options": [
      "A. np.dot(arr1, arr2)",
      "B. arr1 * arr2",
      "C. arr1 @ arr2",
      "D. np.matmul(arr1, arr2)"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "* 运算符在 NumPy 中表示逐元素乘法（Hadamard product）。np.dot、@、np.matmul 用于矩阵乘法。"
  },
  {
    "id": "mc-24",
    "number": 24,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "np.arange(2, 10, 2) 生成的数组是？",
    "options": [
      "A. [2,4,6,8,10]",
      "B. [2,4,6,8]",
      "C. [2,3,4,5,6,7,8,9]",
      "D. [2,4,6,8,10,12]"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "arange(start, stop, step) 从 start 开始，以 step 步长递增，不包含 stop。2到10（不包括10），步长2，得到 [2,4,6,8]。"
  },
  {
    "id": "mc-25",
    "number": 25,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "以下哪个是 NumPy 中用于生成随机整数（范围0~10，形状3×4）的函数？",
    "options": [
      "A. np.random.rand(3,4)",
      "B. np.random.randint(0, 10, (3,4))",
      "C. np.random.random((3,4))",
      "D. np.random.normal(0,1,(3,4))"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "randint(low, high, size) 生成指定范围的随机整数；rand 生成 [0,1) 均匀分布浮点数；random 类似；normal 生成正态分布。"
  },
  {
    "id": "mc-26",
    "number": 26,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "对于二维数组 a = np.array([[1,2,3],[4,5,6]])，a[:, 1] 的结果是？",
    "options": [
      "A. [2,5]",
      "B. [[2],[5]]",
      "C. [1,4]",
      "D. [2,5,8]"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "切片 [:, 1] 表示取所有行的索引为1的列，结果是一维数组 [2,5]。"
  },
  {
    "id": "mc-27",
    "number": 27,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "np.linspace(0, 1, 5) 返回的元素个数是？",
    "options": [
      "A. 4",
      "B. 5",
      "C. 6",
      "D. 1"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "linspace(start, stop, num) 生成包含 num 个元素的等间隔序列，包含端点。0到1之间均匀取5个点。"
  },
  {
    "id": "mc-28",
    "number": 28,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "想要计算数组 arr 所有元素的和，应该使用？",
    "options": [
      "A. arr.sum()",
      "B. sum(arr)",
      "C. np.sum(arr)",
      "D. A 和 C 都正确"
    ],
    "answer": [
      "D"
    ],
    "answerText": "D",
    "explanation": "arr.sum() 是数组方法，np.sum(arr) 是函数，两者都能计算和。"
  },
  {
    "id": "mc-29",
    "number": 29,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "下列哪个属性表示 NumPy 数组中每个元素占用的字节数？",
    "options": [
      "A. itemsize",
      "B. size",
      "C. nbytes",
      "D. dtype"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "itemsize 返回每个元素的字节大小；size 返回元素个数；nbytes 返回总字节数（size × itemsize）；dtype 返回数据类型。"
  },
  {
    "id": "mc-30",
    "number": 30,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "关于 np.reshape 的说法，正确的是？",
    "options": [
      "A. 原数组的形状必须与目标形状元素个数一致",
      "B. 会修改原数组",
      "C. 不能将一维数组转为多维",
      "D. 只能用于方阵"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "reshape 新形状的元素总数必须与原数组相同；它默认返回新数组，不修改原数组；可以任意转换维度。"
  },
  {
    "id": "mc-31",
    "number": 31,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "以下哪个函数可以沿指定轴拼接两个 NumPy 数组？",
    "options": [
      "A. np.concatenate()",
      "B. np.hstack()",
      "C. np.vstack()",
      "D. 以上都是"
    ],
    "answer": [
      "D"
    ],
    "answerText": "D",
    "explanation": "concatenate 可通过 axis 指定轴；hstack 水平（列）拼接；vstack 垂直（行）拼接。三者均可实现拼接。"
  },
  {
    "id": "mc-32",
    "number": 32,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "np.zeros((2,3)) 创建的数据类型默认是？",
    "options": [
      "A. int",
      "B. float",
      "C. bool",
      "D. complex"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "np.zeros 默认 dtype 为 float64。"
  },
  {
    "id": "mc-33",
    "number": 33,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "对于布尔数组 mask = np.array([True, False, True])，对其使用 mask.any() 的结果是？",
    "options": [
      "A. True",
      "B. False",
      "C. [True, False, True]",
      "D. 1"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "any() 判断是否有至少一个 True，此处有 True 故返回 True。"
  },
  {
    "id": "mc-34",
    "number": 34,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "下列哪个函数用于对数组进行排序（返回新数组）？",
    "options": [
      "A. arr.sort()",
      "B. np.sort(arr)",
      "C. arr.sorted()",
      "D. 两者都是 B"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "np.sort(arr) 返回排序后的新数组，arr.sort() 原地排序并返回 None。"
  },
  {
    "id": "mc-35",
    "number": 35,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "执行 np.array([1,2,3]) + np.array([4,5,6]) 的结果是？",
    "options": [
      "A. [5,7,9]",
      "B. [1,2,3,4,5,6]",
      "C. 报错",
      "D. [4,10,18]"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "NumPy 的广播机制将两个形状相同的数组逐元素相加。"
  },
  {
    "id": "mc-36",
    "number": 36,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "创建 Series 对象时，如果没有指定索引，默认索引是？",
    "options": [
      "A. 从0开始的整数",
      "B. 从1开始的整数",
      "C. 随机整数",
      "D. None"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "Pandas Series 默认使用 0,1,2,... 作为索引。"
  },
  {
    "id": "mc-37",
    "number": 37,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "下列哪个方法用于查看 DataFrame 的前几行（默认5行）？",
    "options": [
      "A. df.head()",
      "B. df.tail()",
      "C. df.info()",
      "D. df.describe()"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "head() 查看前几行，tail() 查看后几行，info() 查看基本信息，describe() 生成统计摘要。"
  },
  {
    "id": "mc-38",
    "number": 38,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "从 DataFrame 中选取单列，返回的数据类型是？",
    "options": [
      "A. DataFrame",
      "B. Series",
      "C. ndarray",
      "D. list"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "df['列名'] 或 df.列名 返回 Series；使用双括号 df[['列名']] 返回单列 DataFrame。"
  },
  {
    "id": "mc-39",
    "number": 39,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "想要删除 DataFrame 中含缺失值的所有行，应使用？",
    "options": [
      "A. df.dropna(axis=0)",
      "B. df.dropna(axis=1)",
      "C. df.fillna(0)",
      "D. df.drop_duplicates()"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "dropna(axis=0) 删除包含缺失值的行，axis=1 删除列；fillna 填充缺失值；drop_duplicates 删除重复行。"
  },
  {
    "id": "mc-40",
    "number": 40,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "对于 DataFrame df = pd.DataFrame({'A':[1,2,3], 'B':[4,5,6]})，df.mean() 的结果是？",
    "options": [
      "A. 每列的平均值，返回 Series",
      "B. 每行的平均值，返回 Series",
      "C. 所有元素的平均值，返回标量",
      "D. 报错"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "mean() 默认 axis=0，计算每列的平均值，返回 Series。"
  },
  {
    "id": "mc-41",
    "number": 41,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "以下哪个函数用于合并两个 DataFrame，类似 SQL 的 JOIN？",
    "options": [
      "A. pd.concat()",
      "B. pd.merge()",
      "C. df.join()",
      "D. B 和 C 都正确"
    ],
    "answer": [
      "D"
    ],
    "answerText": "D",
    "explanation": "pd.merge() 和 df.join() 都可用于合并（join 基于索引或列），concat 用于堆叠。"
  },
  {
    "id": "mc-42",
    "number": 42,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "下列哪个方法用于对 DataFrame 按某列的值进行分组？",
    "options": [
      "A. df.groupby()",
      "B. df.sort_values()",
      "C. df.pivot_table()",
      "D. df.aggregate()"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "groupby 是分组操作的核心方法，返回 GroupBy 对象后可应用聚合函数。"
  },
  {
    "id": "mc-43",
    "number": 43,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "读取 CSV 文件时，想要将第一列作为索引，应该设置参数？",
    "options": [
      "A. index_col=0",
      "B. header=0",
      "C. usecols=[0]",
      "D. parse_dates=[0]"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "index_col 参数指定将哪一列作为行索引。"
  },
  {
    "id": "mc-44",
    "number": 44,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "对于 Series s = pd.Series([1,2,3,4], index=['a','b','c','d'])，s['b':'d'] 的结果是？",
    "options": [
      "A. 包含索引 b,c,d 的元素",
      "B. 包含索引 b,c 的元素（不包括 d）",
      "C. 报错",
      "D. 包含索引 b 和 d 的元素"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "使用标签切片时，包含终点（与整数切片不同）。'b':'d' 会取出 b,c,d 对应的值。"
  },
  {
    "id": "mc-45",
    "number": 45,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "下列哪个方法用于对缺失值进行前向填充？",
    "options": [
      "A. df.fillna(method='ffill')",
      "B. df.fillna(method='bfill')",
      "C. df.interpolate()",
      "D. df.dropna()"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "fillna(method='ffill') 使用前一个非缺失值填充，bfill 使用后一个填充。"
  },
  {
    "id": "mc-46",
    "number": 46,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "想要将 DataFrame 的索引重置为默认整数索引，并保留原索引为一列，应使用？",
    "options": [
      "A. df.reset_index(drop=False)",
      "B. df.reset_index(drop=True)",
      "C. df.set_index()",
      "D. df.reindex()"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "reset_index(drop=False) 将原索引变成新列（列名为 'index'），并生成新的整数索引；drop=True 则丢弃原索引。"
  },
  {
    "id": "mc-47",
    "number": 47,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "以下哪个操作可以实现对 DataFrame 中某列应用一个自定义函数？",
    "options": [
      "A. df.applymap()",
      "B. df.apply()",
      "C. df.map()",
      "D. B 和 C 都可"
    ],
    "answer": [
      "D"
    ],
    "answerText": "D",
    "explanation": "df.apply(func) 可对列或行应用函数；df['col'].map(func) 对 Series 的元素应用函数；applymap 对 DataFrame 的每个元素应用函数。"
  },
  {
    "id": "mc-48",
    "number": 48,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "pd.date_range('2023-01-01', periods=3, freq='M') 生成的结果是？",
    "options": [
      "A. ['2023-01-01', '2023-02-01', '2023-03-01']",
      "B. ['2023-01-31', '2023-02-28', '2023-03-31']",
      "C. ['2023-01-01', '2023-01-02', '2023-01-03']",
      "D. ['2023-01-01', '2023-02-01', '2023-03-01']"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "freq='M' 表示月末日期，periods=3 生成连续的3个月末：2023-01-31, 2023-02-28, 2023-03-31。"
  },
  {
    "id": "mc-49",
    "number": 49,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "想要将 DataFrame 中某列的所有值都减去该列的平均值，应使用？",
    "options": [
      "A. df['col'] - df['col'].mean()",
      "B. df['col'].subtract(df['col'].mean())",
      "C. 两者均可",
      "D. 无法直接运算"
    ],
    "answer": [
      "C"
    ],
    "answerText": "C",
    "explanation": "Pandas 支持向量化运算，直接减或使用 subtract 方法均可。"
  },
  {
    "id": "mc-50",
    "number": 50,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "以下哪个函数用于读取 Excel 文件？",
    "options": [
      "A. pd.read_excel()",
      "B. pd.ExcelFile()",
      "C. pd.read_csv()",
      "D. A 和 B 都可以"
    ],
    "answer": [
      "D"
    ],
    "answerText": "D",
    "explanation": "pd.read_excel() 直接读取返回 DataFrame；pd.ExcelFile() 创建一个 Excel 文件对象，可进一步解析。两者都可处理 Excel。"
  },
  {
    "id": "mc-51",
    "number": 51,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "下列哪个函数用于创建一幅新的图形（figure）？",
    "options": [
      "A. plt.plot()",
      "B. plt.figure()",
      "C. plt.subplot()",
      "D. plt.show()"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "plt.figure() 创建一个新的图形窗口，可以指定大小等参数；plot 用于绘制；subplot 创建子图；show 显示图形。"
  },
  {
    "id": "mc-52",
    "number": 52,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "想要在同一个坐标轴中绘制两条曲线，应如何操作？",
    "options": [
      "A. 先后调用两次 plt.plot()",
      "B. 调用一次 plt.plot() 并传入多组数据",
      "C. 使用 plt.subplots() 分别绘制",
      "D. A 和 B 都正确"
    ],
    "answer": [
      "D"
    ],
    "answerText": "D",
    "explanation": "可以连续调用 plt.plot，也可以在单次 plot 中传入多对 x,y 数据。"
  },
  {
    "id": "mc-53",
    "number": 53,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "以下哪个函数用于给图形添加标题？",
    "options": [
      "A. plt.xlabel()",
      "B. plt.ylabel()",
      "C. plt.title()",
      "D. plt.legend()"
    ],
    "answer": [
      "C"
    ],
    "answerText": "C",
    "explanation": "title 设置图形标题；xlabel/ylabel 设置坐标轴标签；legend 显示图例。"
  },
  {
    "id": "mc-54",
    "number": 54,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "绘制散点图应使用哪个函数？",
    "options": [
      "A. plt.plot()",
      "B. plt.scatter()",
      "C. plt.bar()",
      "D. plt.hist()"
    ],
    "answer": [
      "B"
    ],
    "answerText": "B",
    "explanation": "scatter 专用于散点图；plot 默认是折线图，也可用 'o' 绘制点但功能弱于 scatter。"
  },
  {
    "id": "mc-55",
    "number": 55,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "想要将图形保存为 PNG 文件，应调用？",
    "options": [
      "A. plt.savefig('filename.png')",
      "B. plt.save('filename.png')",
      "C. plt.export('filename.png')",
      "D. plt.write('filename.png')"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "plt.savefig() 是保存图形的标准方法。"
  },
  {
    "id": "mc-56",
    "number": 56,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "以下哪个参数可以设置折线的颜色为红色？",
    "options": [
      "A. color='red'",
      "B. c='r'",
      "C. 'r' 作为颜色简写",
      "D. 以上都可以"
    ],
    "answer": [
      "D"
    ],
    "answerText": "D",
    "explanation": "Matplotlib 中可以使用 color='red'、c='r'、或者在 plot 中使用格式字符串 'r' 指定颜色。"
  },
  {
    "id": "mc-57",
    "number": 57,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "创建包含多个子图的图形，使用 plt.subplots(2, 2) 返回的对象是？",
    "options": [
      "A. 一个 Figure 对象和一个 2×2 的 Axes 数组",
      "B. 仅一个 Figure 对象",
      "C. 仅一个 Axes 对象",
      "D. 一个元组包含 Figure 和单个 Axes"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "plt.subplots(nrows, ncols) 返回一个元组 (fig, axes)，其中 axes 是形状为 (nrows, ncols) 的 Axes 对象数组。"
  },
  {
    "id": "mc-58",
    "number": 58,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "以下哪个语句可以设置 x 轴的范围为 0 到 10？",
    "options": [
      "A. plt.xlim(0, 10)",
      "B. plt.axis([0,10])",
      "C. plt.xlim([0,10])",
      "D. 以上都可以"
    ],
    "answer": [
      "A",
      "C"
    ],
    "answerText": "A 或 C（注意：题库若把 D 作为答案，是因为把 plt.axis 写成了完整四参数形式；但原选项 B 的 plt.axis([0,10]) 写法不完整。）",
    "explanation": "设置 x 轴范围可以使用 plt.xlim(0, 10) 或 plt.xlim([0, 10])。plt.axis() 若要同时设置坐标范围，通常应写成 plt.axis([xmin, xmax, ymin, ymax])，需要四个值；所以选项 B 只写两个值不规范。"
  },
  {
    "id": "mc-59",
    "number": 59,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "想要在图形中添加网格线，应使用？",
    "options": [
      "A. plt.grid(True)",
      "B. plt.grid()",
      "C. plt.show(grid=True)",
      "D. A 和 B 都正确"
    ],
    "answer": [
      "D"
    ],
    "answerText": "D",
    "explanation": "plt.grid(True) 显示网格；plt.grid() 默认也是 True（如果没有任何参数，切换状态，但通常默认显示）。一般来说两者均可。"
  },
  {
    "id": "mc-60",
    "number": 60,
    "section": "单项选择题",
    "type": "single_choice",
    "stem": "绘制饼图时，哪个函数用于避免饼图挤压成椭圆？",
    "options": [
      "A. plt.axis('equal')",
      "B. plt.axis('square')",
      "C. plt.pie(aspect='equal')",
      "D. plt.set_aspect()"
    ],
    "answer": [
      "A"
    ],
    "answerText": "A",
    "explanation": "调用 plt.axis('equal') 可设置等轴比例，使饼图为正圆。"
  },
  {
    "id": "fill-21",
    "number": 21,
    "section": "填空题",
    "type": "fill_blank",
    "stem": "数据分析是利用_______________________ 、_______________________理论相结合的科学统计方法。",
    "answer": [
      "数学",
      "统计学"
    ],
    "answerText": "数学；统计学",
    "explanation": "考察数据分析的概念。数据分析的理论基础是数学和统计学。"
  },
  {
    "id": "fill-22",
    "number": 22,
    "section": "填空题",
    "type": "fill_blank",
    "stem": "常用的数据分析工具有 _________________、_______________________、SPSS、R语言。",
    "answer": [
      "Excel",
      "Python语言"
    ],
    "answerText": "Excel；Python语言",
    "explanation": "考察常用的数据分析工具。Python语言是本门课程重点学习的，Excel是经常用到的。"
  },
  {
    "id": "fill-23",
    "number": 23,
    "section": "填空题",
    "type": "fill_blank",
    "stem": "Python语言的标准库中，提供访问操作系统接口的是______________模块，用于生成伪随机数的是______________模块。",
    "answer": [
      "os",
      "random"
    ],
    "answerText": "os；random",
    "explanation": "考察常用的Python标准库。os提供访问操作系统接口，random生成伪随机数，这两个模块是实验课经常使用的。"
  },
  {
    "id": "fill-24",
    "number": 24,
    "section": "填空题",
    "type": "fill_blank",
    "stem": "常用的Python开发工具是______________和______________。",
    "answer": [
      "PyCharm",
      "IDLE"
    ],
    "answerText": "PyCharm；IDLE",
    "explanation": "考察常用的Python开发工具。PyCharm是最常用的，IDLE也比较常用。"
  },
  {
    "id": "fill-25",
    "number": 25,
    "section": "填空题",
    "type": "fill_blank",
    "stem": "Python是一种__________语言，这意味着Python代码不需要________________就可以直接运行。",
    "answer": [
      "解释型",
      "编译成机器码"
    ],
    "answerText": "解释型；编译成机器码",
    "explanation": "考察Python的特点。Python是一种解释型语言，不需要编译变成机器码就可以直接运行，这是Python的特点之一。"
  },
  {
    "id": "fill-26",
    "number": 26,
    "section": "填空题",
    "type": "fill_blank",
    "stem": "对于列表list=['广东','重庆','四川']，想要获取元素'四川'，使用正向单索引的写法是__________，使用负向单索引的写法是__________。",
    "answer": [
      "list[2]",
      "list[-1]"
    ],
    "answerText": "list[2]；list[-1]",
    "explanation": "考察列表的索引。索引从0开始，因此正向单索引是list[2]；负向单索引最后一个元素用list[-1]表示。"
  },
  {
    "id": "fill-27",
    "number": 27,
    "section": "填空题",
    "type": "fill_blank",
    "stem": "对于列表list=[1,2,5,10,100,200]，在末尾增加一个元素500的程序代码是__________，在元素10后面插入元素20的程序代码是__________。",
    "answer": [
      "list.append"
    ],
    "answerText": "list.append(500)；list.insert(4,20)",
    "explanation": "考察列表元素的增加。在列表末尾增加元素使用append()方法；在列表中插入元素使用insert()方法，在元素10后面插入元素20后，20的索引是4，所以是list.insert(4,20)。"
  },
  {
    "id": "fill-28",
    "number": 28,
    "section": "填空题",
    "type": "fill_blank",
    "stem": "import pandas as pd datafile='../data/data.xls'，读出datafile中的数据的程序代码是data=__________，对data进行最小-最大规范化的程序代码是__________。",
    "answer": [
      "pd.read_excel"
    ],
    "answerText": "pd.read_excel(datafile)；(data-data.min())/(data.max()-data.min())",
    "explanation": "考察数据读取和规范化。从Excel文件中读取数据使用read_excel()方法；data的最大值的data.max()，最小值是data.min()，因此对data进行最小-最大规范化的程序代码是(data-data.min())/(data.max()-data.min())。"
  },
  {
    "id": "fill-29",
    "number": 29,
    "section": "填空题",
    "type": "fill_blank",
    "stem": "Python自定义函数的参数包括必选参数、默认参数、__________和__________。",
    "answer": [
      "可变参数",
      "关键字参数"
    ],
    "answerText": "可变参数；关键字参数",
    "explanation": "考察自定义函数的参数。自定义函数的参数有必选参数、默认参数、可变参数和关键字参数。"
  },
  {
    "id": "fill-30",
    "number": 30,
    "section": "填空题",
    "type": "fill_blank",
    "stem": "经过零-均值规范化处理后的数据的均值为__________，标准差为__________。",
    "answer": [
      "0",
      "1"
    ],
    "answerText": "0；1",
    "explanation": "考察零-均值规范化。数据经过零-均值规范化处理后，均值为0，标准差为1。"
  },
  {
    "id": "fill-31",
    "number": 31,
    "section": "填空题",
    "type": "fill_blank",
    "stem": "使用Matplotlib绘图时，创建第一个画布的程序代码是__________，把画布划分为2×2图形阵，选择第1涨图片的程序代码是__________。",
    "answer": [
      "plt.figure"
    ],
    "answerText": "plt.figure(1)；plt.subplot(2,2,1)",
    "explanation": "考察画布的创建和选择。plt.figure(1)创建第一个画布，plt.subplot(2,2,1)把画布划分为2×2图形阵，并选择第1涨图片，'2,2'表示2×2图形阵，'1'表示第1张图片。"
  },
  {
    "id": "fill-32",
    "number": 32,
    "section": "填空题",
    "type": "fill_blank",
    "stem": "绘制线性图时，参数'b*-'表示数据点为__________，颜色为__________。",
    "answer": [
      "星形",
      "蓝色"
    ],
    "answerText": "星形；蓝色",
    "explanation": "考察线性图绘制的参数。*表示星形，b表示蓝色。"
  },
  {
    "id": "fill-33",
    "number": 33,
    "section": "填空题",
    "type": "fill_blank",
    "stem": "绘制柱状图使用__________方法，绘制直方图使用__________方法。",
    "answer": [
      "bar"
    ],
    "answerText": "bar()；hist()",
    "explanation": "考察柱状图和直方图的绘制。绘制柱状图使用bar()方法，绘制直方图使用hist()方法。"
  },
  {
    "id": "fill-34",
    "number": 34,
    "section": "填空题",
    "type": "fill_blank",
    "stem": "箱线图包含的5个统计量是上边缘、下边缘、中位数、__________和__________。",
    "answer": [
      "上四分位数",
      "下四分位数"
    ],
    "answerText": "上四分位数；下四分位数",
    "explanation": "考察箱线图的统计量。箱线图包含的5个统计量是上边缘、下边缘、中位数、上四分位数、下四分位数。"
  },
  {
    "id": "fill-35",
    "number": 35,
    "section": "填空题",
    "type": "fill_blank",
    "stem": "Matplotlib显示图片使用__________方法，保存图片使用__________方法。",
    "answer": [
      "show"
    ],
    "answerText": "show()；savefig()",
    "explanation": "Matplotlib图片的显示和保存。显示图片使用show()，保存图片使用savefig()。"
  },
  {
    "id": "codefill-36",
    "number": 36,
    "section": "阅读并完善程序",
    "type": "code_fill",
    "stem": "补全下列代码，实现向列表中添加元素的功能。",
    "code": "fruits = ['苹果', '香蕉']\n# 在列表末尾添加一个元素'橘子'\nfruits.__________('橘子')\n# 在列表末尾添加多个元素['葡萄', '西瓜']\nfruits.__________(['葡萄', '西瓜'])\nprint(fruits)",
    "answer": [
      "append",
      "extend"
    ],
    "answerText": "append；extend",
    "explanation": "append() 方法用于在列表末尾添加单个元素；extend() 方法用于在列表末尾添加多个元素（将可迭代对象中的元素逐一添加到列表中）。两者是列表操作中最常用的添加元素方法。"
  },
  {
    "id": "codefill-37",
    "number": 37,
    "section": "阅读并完善程序",
    "type": "code_fill",
    "stem": "补全下列代码，实现字典的访问与键的获取。",
    "code": "student = {'姓名': '张三', '年龄': 20, '成绩': 85}\n# 通过键获取'姓名'对应的值\nname = student.__________('姓名')\n# 获取字典中所有的键\nkeys = student.__________()\nprint(name, keys)",
    "answer": [
      "get",
      "keys"
    ],
    "answerText": "get；keys",
    "explanation": "get() 方法通过键获取字典中对应的值，若键不存在不会报错而是返回 None；keys() 方法返回字典中所有键的视图对象。这两个方法是字典操作中最常用的查询方法。"
  },
  {
    "id": "codefill-38",
    "number": 38,
    "section": "阅读并完善程序",
    "type": "code_fill",
    "stem": "补全下列代码，实现计算1到100之间所有偶数的和。",
    "code": "# 计算1到100之间所有偶数的和\ntotal = 0\nfor i in range(2, 101, __________):\n    total += __________\nprint(\"1到100的偶数和为：%d\" % total)",
    "answer": [
      "2",
      "i"
    ],
    "answerText": "2；i",
    "explanation": "range(2, 101, 2) 生成从2开始到100结束、步长为2的偶数序列，即2, 4, 6, ..., 100。循环变量 i 依次取每个偶数值，通过 total += i 将其累加到总和中。"
  },
  {
    "id": "codefill-39",
    "number": 39,
    "section": "阅读并完善程序",
    "type": "code_fill",
    "stem": "补全下列代码，实现字符串的去除空格与分割操作。",
    "code": "text = \"  Hello, Python数据分析  \"\n# 去除字符串首尾的空格\ntext1 = text.__________()\n# 将字符串按逗号分割\ntext2 = text1.__________(',')\nprint(text2)",
    "answer": [
      "strip",
      "split"
    ],
    "answerText": "strip；split",
    "explanation": "strip() 方法用于去除字符串首尾的空白字符（包括空格、制表符、换行符等）；split() 方法按照指定的分隔符将字符串分割成列表。执行后 text2 的值为 ['Hello', ' Python数据分析']。"
  },
  {
    "id": "codefill-40",
    "number": 40,
    "section": "阅读并完善程序",
    "type": "code_fill",
    "stem": "补全下列代码，使用正则表达式查找手机号码并替换数字。",
    "code": "import re\ntext = \"联系方式：电话13812345678，邮箱test@example.com\"\n# 使用正则表达式查找所有手机号码\nphones = re.__________(r'1\\d{10}', text)\n# 将文本中的数字替换为'*'\nresult = re.__________(r'\\d', '*', text)\nprint(phones)\nprint(result)",
    "answer": [
      "findall",
      "sub"
    ],
    "answerText": "findall；sub",
    "explanation": "re.findall() 用于查找字符串中所有匹配正则表达式的子串，返回一个列表；re.sub() 用于将字符串中匹配正则表达式的部分替换为指定的字符串。r'1\\d{10}' 匹配以1开头的11位手机号码。"
  },
  {
    "id": "codefill-41",
    "number": 41,
    "section": "阅读并完善程序",
    "type": "code_fill",
    "stem": "补全下列代码，使用def定义函数和使用lambda创建匿名函数。",
    "code": "import math\n# 使用def定义一个计算圆面积的函数\ndef circle_area(__________):\n    return math.pi * radius ** 2\n# 使用lambda定义一个求平方的匿名函数\nsquare = __________ x: x ** 2\nprint(circle_area(5))\nprint(square(4))",
    "answer": [
      "radius",
      "lambda"
    ],
    "answerText": "radius；lambda",
    "explanation": "def 关键字用于定义命名函数，circle_area 函数需要一个参数 radius（半径）来计算圆面积。lambda 关键字用于创建匿名函数，语法为 lambda 参数: 表达式，此处 lambda x: x ** 2 定义了一个求平方的匿名函数。"
  },
  {
    "id": "codefill-42",
    "number": 42,
    "section": "阅读并完善程序",
    "type": "code_fill",
    "stem": "补全下列代码，使用NumPy创建数组并重塑形状。",
    "code": "import numpy as np\n# 创建一个从0到11的一维数组\narr = np.__________(12)\n# 将一维数组重塑为3行4列的二维数组\narr2d = arr.__________(3, 4)\nprint(arr2d)",
    "answer": [
      "arange",
      "reshape"
    ],
    "answerText": "arange；reshape",
    "explanation": "np.arange(12) 生成从0到11的一维数组 [0, 1, 2, ..., 11]；reshape(3, 4) 将一维数组重塑为3行4列的二维数组。这是NumPy中最常用的数组创建和形状变换方法。"
  },
  {
    "id": "codefill-43",
    "number": 43,
    "section": "阅读并完善程序",
    "type": "code_fill",
    "stem": "补全下列代码，使用Pandas读取CSV文件并查看数据。",
    "code": "import pandas as pd\n# 读取CSV文件\ndf = pd.__________('data.csv')\n# 查看DataFrame的前5行\nprint(df.__________())",
    "answer": [
      "read_csv",
      "head"
    ],
    "answerText": "read_csv；head",
    "explanation": "pd.read_csv() 是Pandas读取CSV文件的标准函数，返回一个DataFrame对象；head() 方法默认返回DataFrame的前5行数据，常用于快速预览数据内容。"
  },
  {
    "id": "codefill-44",
    "number": 44,
    "section": "阅读并完善程序",
    "type": "code_fill",
    "stem": "补全下列代码，实现对DataFrame中缺失值的删除与填充。",
    "code": "import pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'A': [1, np.nan, 3], 'B': [4, 5, np.nan]})\n# 删除含有缺失值的行\ndf1 = df.__________()\n# 用0填充所有缺失值\ndf2 = df.__________(0)\nprint(df1)\nprint(df2)",
    "answer": [
      "dropna",
      "fillna"
    ],
    "answerText": "dropna；fillna",
    "explanation": "dropna() 方法用于删除含有缺失值（NaN）的行或列；fillna() 方法用于用指定值填充缺失值。两者是Pandas数据清洗中最常用的缺失值处理方法。"
  },
  {
    "id": "codefill-45",
    "number": 45,
    "section": "阅读并完善程序",
    "type": "code_fill",
    "stem": "补全下列代码，使用MinMaxScaler将数据规范化到[0,1]区间。",
    "code": "from sklearn.preprocessing import __________\nimport numpy as np\ndata = np.array([[10], [20], [30], [40], [50]])\n# 创建对象并将数据规范化到[0,1]区间\nscaler = MinMaxScaler()\nresult = scaler.__________(data)\nprint(result)",
    "answer": [
      "MinMaxScaler",
      "fit_transform"
    ],
    "answerText": "MinMaxScaler；fit_transform",
    "explanation": "MinMaxScaler 是 sklearn.preprocessing 模块中用于数据规范化的类，将数据线性变换到 [0,1] 区间；fit_transform() 方法同时完成拟合（计算最小值和最大值）和转换（应用规范化）两个步骤。"
  },
  {
    "id": "codefill-46",
    "number": 46,
    "section": "阅读并完善程序",
    "type": "code_fill",
    "stem": "补全下列代码，使用Matplotlib绘制折线图并添加标题。",
    "code": "import matplotlib.pyplot as plt\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 6, 8, 10]\n# 绘制折线图\nplt.__________(x, y)\n# 添加图表标题\nplt.__________('折线图示例')\nplt.show()",
    "answer": [
      "plot",
      "title"
    ],
    "answerText": "plot；title",
    "explanation": "plt.plot() 是Matplotlib中最基本的绘图函数，用于绘制折线图；plt.title() 用于设置图表的标题。两者是Matplotlib绑图时最常用的函数。"
  },
  {
    "id": "codefill-47",
    "number": 47,
    "section": "阅读并完善程序",
    "type": "code_fill",
    "stem": "补全下列代码，使用Matplotlib绘制柱状图并设置坐标轴标签。",
    "code": "import matplotlib.pyplot as plt\nx = ['一季度', '二季度', '三季度', '四季度']\ny = [100, 150, 130, 180]\n# 绘制柱状图\nplt.__________(x, y)\n# 设置x轴标签\nplt.__________('季度')\nplt.ylabel('销售额（万元）')\nplt.show()",
    "answer": [
      "bar",
      "xlabel"
    ],
    "answerText": "bar；xlabel",
    "explanation": "plt.bar() 用于绘制柱状图，参数 x 为类别标签，y 为对应数值；plt.xlabel() 用于设置x轴的标签文字。配合 plt.ylabel() 可以完整标注两个坐标轴的含义。"
  },
  {
    "id": "open-简单编程题-1",
    "number": 1,
    "section": "简单编程题",
    "type": "open_code",
    "stem": "编写一个程序，实现从 n 到 m（n<m）的累加和，每次运行程序从键盘输入 n 和 m 的值（n、m 均为正整数）。",
    "code": "n = int(input('请输入n：'))\nm = int(input('请输入m：'))\n\ns = 0\nfor i in range(n, m + 1):\n    s += i\n\nprint('累加和为：', s)",
    "answerText": "参考答案见代码块",
    "explanation": "range(n, m + 1) 表示从 n 一直取到 m，因为 range 的右端点不包含，所以要写 m + 1。循环中不断把 i 加到 s 上即可。也可以写 sum(range(n, m + 1))。"
  },
  {
    "id": "open-简单编程题-2",
    "number": 2,
    "section": "简单编程题",
    "type": "open_code",
    "stem": "请统计 data 字典中每个学生的平均分。",
    "code": "import pandas as pd\n\ndata = {\n    '学号': ['2026001', '2026002', '2026003', '2026004', '2026005',\n           '2026006', '2026007', '2026008', '2026009', '2026010'],\n    '姓名': ['张三', '李四', '王五', '赵六', '钱七', '孙八', '周九', '吴十', '郑一', '陈二'],\n    '语文': [95, 92, 38, 88, 95, 76, 52, 90, 87, 79],\n    '数学': [90, 88, 25, 52, 78, 84, 53, 86, 83, 64],\n    '英语': [88, 85, 40, 86, 91, 82, 47, 89, 84, 88],\n    '物理': [92, 89, 54, 45, 88, 79, 46, 90, 81, 75],\n    '化学': [86, 91, 82, 89, 87, 83, 88, 85, 86, 89]\n}\n\ndf = pd.DataFrame(data)\nscore_cols = ['语文', '数学', '英语', '物理', '化学']\ndf['平均分'] = df[score_cols].mean(axis=1)\n\nprint(df[['学号', '姓名', '平均分']])",
    "answerText": "参考答案见代码块",
    "explanation": "先把字典转成 DataFrame，再选出五门成绩列。mean(axis=1) 表示按“行”求平均，也就是每个学生一行求一个平均分。"
  },
  {
    "id": "open-简单编程题-3",
    "number": 3,
    "section": "简单编程题",
    "type": "open_code",
    "stem": "从键盘输入三个整数，按从大到小输出。",
    "code": "nums = []\nfor i in range(3):\n    nums.append(int(input('请输入整数：')))\n\nnums.sort(reverse=True)\nprint('从大到小输出：', nums)",
    "answerText": "参考答案见代码块",
    "explanation": "把输入的 3 个整数放到列表中，sort(reverse=True) 表示降序排列。输出时也可以用 print(*nums) 让三个数分开显示。"
  },
  {
    "id": "open-简单编程题-4",
    "number": 4,
    "section": "简单编程题",
    "type": "open_code",
    "stem": "从键盘输入 5 个分数，去掉一个最高分和一个最低分，计算剩余 3 个分数的平均分，并保留两位小数输出。",
    "code": "scores = []\nfor i in range(5):\n    score = float(input('请输入分数：'))\n    scores.append(score)\n\nscores.remove(max(scores))\nscores.remove(min(scores))\navg = sum(scores) / len(scores)\n\nprint('平均分为：%.2f' % avg)",
    "answerText": "参考答案见代码块",
    "explanation": "max(scores) 找最高分，min(scores) 找最低分，remove() 删除对应元素。剩下 3 个分数后，用 sum(scores) / len(scores) 求平均值，%.2f 表示保留两位小数。"
  },
  {
    "id": "open-简单编程题-5",
    "number": 5,
    "section": "简单编程题",
    "type": "open_code",
    "stem": "给定商品单价字典 prices 和购买数量字典 cart，计算购物车总价，保留一位小数。",
    "code": "prices = {'苹果': 5.5, '西瓜': 3.0, '牛奶': 12.0, '面包': 8.5}\ncart = {'苹果': 2, '牛奶': 1, '西瓜': 5.0, '面包': 3}\n\ntotal = 0\nfor name, count in cart.items():\n    total += prices[name] * count\n\nprint('总价为：%.1f' % total)",
    "answerText": "参考答案见代码块",
    "explanation": "cart.items() 可以同时取出商品名和数量。用商品名到 prices 中查单价，再乘以购买数量并累加。本题总价为 63.5。"
  },
  {
    "id": "open-简单编程题-6",
    "number": 6,
    "section": "简单编程题",
    "type": "open_code",
    "stem": "输入一个字符串，反向输出；如果正向与反向相同，还需输出“该字符串是回文”。",
    "code": "s = input('请输入字符串：')\nreverse_s = s[::-1]\n\nprint(reverse_s)\n\nif s == reverse_s:\n    print('该字符串是回文')",
    "answerText": "参考答案见代码块",
    "explanation": "s[::-1] 是 Python 字符串反向切片写法。若原字符串和反向字符串完全相同，就说明它是回文，例如 level、上海自来水来自海上。"
  }
];
