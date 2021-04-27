//database
let arrayItems = [{
		'idElement': 1000,
		'image': '<img src="images/01.jpg" alt="error" />',
		'name': 'MacBook 2020',
		'price': 1999,
		'description': '<p>На 20% быстрее.<br>Почти невесомый<br>Четыре миллиона пикселей...</p>',
		'fullDescription': 'Этот зверь способен на многое.Дважды... Благодаря усилиям инженеров Apple. Сдесь установлен новый процессор Bionic322, с iIntelegent data system и поддержкой алгоритма UTF-8. Реализуй свою креативность, будь на скале вдохновения, напор воды регулируется нажатием рычажка. Двойная способность воспринимать восприятие эмоций спектр. Теперь ты способен на все и даже больше. Живи в Mac. Выбирай лучшее.',
		'inStock': 10
	},
	{
		'idElement': 1001,
		'image': '<img src="images/16.jpg" alt="error" />',
		'name': 'MacBook Pro',
		'price': 2199,
		'description': '<p>Больше мощи в каждом ядре.<br>Больше функций в одно касание.</p>',
		'fullDescription': 'Что может быть лучше Mac? Только новый Mac. Благодаря распознаванию лиц. Ты сможешь мгновенно получить доступ к новым продвинутым функциям iFunctions. Семейный доступ, евроинтеграция сервесов. Новая функция TrueTone от Apple. Попробуйте больше нового, вдохновение.',
		'inStock': 10
	},
	{
		'idElement': 1002,
		'image': '<img src="products/IPad/Pro/top.png" alt="error" />',
		'name': 'IPad Pro',
		'price': 1200,
		'description': '<p>Новый iPad Pro с дисплеем от края до края просто волшебен,<br> он справится со всеми вашими задачами</p>',
		'fullDescription': 'iPad Pro',
		'inStock': 5
	},
	{
		'idElement': 1003,
		'image': '<img src="images/14.jpg" alt="error" />',
		'name': 'MacBook Air 2018 Gold',
		'price': 1399,
		'description': '<p>На 20% быстрее.<br>Почти невесомый<br>Четыре миллиона пикселей...</p>',
		'fullDescription': 'Это самый любимый Mac, в который можно заново влюбиться. Новый MacBook Air — ещё более тонкий и лёгкий, оснащён дисплеем Retina, Touch ID, клавиатурой нового поколения, трекпадом Force Touch. И представлен в трёх цветах — серебристом, золотом и «серый космос». Это самый экологичный Mac. Сохранив его культовый дизайн, мы использовали для корпуса только переработанный алюминий. И это невероятно удобный MacBook Air — он работает весь день без подзарядки и может справиться с любыми задачами',
		'inStock': 3
	},
	{
		'idElement': 1004,
		'image': '<img src="products/HomePode/top.png" alt="error" />',
		'name': 'Home Pode',
		'price': 399,
		'description': '<p>На 20% быстрее.<br>Почти невесомый<br>Четыре миллиона пикселей...</p>',
		'fullDescription': 'Вы когда-нибудь задумывались над тем как делать, чтото лучше. Развивайтесь, учитесь. Новая экологическая умная система от Apple создана для людей. Звук, которые вы ранее не слышали, и система распознавания голоса. Встраивайте в ваш дом сегодня и получайте преимущества. Думай иначе. Будь креативным. Мы создали новое, снова.',
		'inStock': 4
	},
	{
		'idElement': 1005,
		'image': '<img src="images/11.jpg" alt="error" />',
		'name': 'MacBook Air 2017',
		'price': 1000,
		'description': '<p>На 20% быстрее.<br>Почти невесомый<br>Четыре миллиона пикселей...</p>',
		'fullDescription': 'Пандемониум вдохновения. Открой новые горизонты. Мы в Apple создали Mac..Снова..  Не такой как другие Mac, этот Mac способен на многое. Первый Mac созданный на территории США. Быстрый и экологичный. Это самый революционный продукт Apple. Наша компания заботится о ваших данных. Все хранятся в защищенном виде на наших серверах.',
		'inStock': 0
	},
	{
		'idElement': 1006,
		'image': '<img src="images/12.jpg" alt="error" />',
		'name': 'MacBook Pro TouchBar',
		'price': 2899,
		'description': '<p>Наxdsasdasd 20% быстрее.<br>Почти невесомый<br>Четыре миллиона пикселей...</p>',
		'fullDescription': 'Как делать больше, используя меньше. Мы в Apple нарушаем законы физики снова. Получайте уникальный TochBar и экран, который показывает изображение. Взгляни вперед. Это будущее. Сейчас Mac покупай. ',
		'inStock': 0
	},
	{
		'idElement': 1007,
		'image': '<img src="images/11.jpg" alt="error" />',
		'name': 'MacBook Adasdair 2017',
		'price': 100089,
		'description': '<p>Наxdsasdasd 20% быстрее.<br>Почти невесомый<br>Четыре миллиона пикселей...</p>',
		'fullDescription': 'Per aspera,ad astra. Данный продукт заставляет задуматся. Мы переосмыслили дизайн. Посмотрите по новому, глазами. Преуспевайте в ваших начинаниях. Узрите вечное. Наслаждайтесь новым MacBook Edition. Двойна камера HoloLens.',
		'inStock': 0
	},
	{
		'idElement': 1008,
		'image': '<img src="images/11.jpg" alt="error" />',
		'name': 'MacBook Adasdair 2017',
		'price': 100089,
		'description': '<p>Наxdsasdasd 20% быстрее.<br>Почти невесомый<br>Четыре миллиона пикселей...</p>',
		'fullDescription': 'Подобно дереву, мы в Apple растем и развиваемся. Это первый компьютер с полноценной поддержкой HTML, и даже CSS. Настоящая революция. Ведьмак в мире MacBook. Сильный как сила. Снова. И еще кое-что. Способен на многое.',
		'inStock': 0
	},
	{
		'idElement': 1009,
		'image': '<img src="images/11.jpg" alt="error" />',
		'name': 'MacBook Adasdair 2017',
		'price': 10008,
		'description': '<p>Наxdsasdasd 20% быстрее.<br>Почти невесомый<br>Четыре миллиона пикселей...</p>',
		'fullDescription': 'И? Терпение.Трение.Инерция. MacBook. Иначе поддержка систем. Осуществляется за счет нового высокоскоростного чипа с поддержкой революционной системы програмного обеспечения MacOS 2.0 и Minecraft. Получайте бонусы. Высаживайтесь вниз. Как полет, и даже лучше.',
		'inStock': 0
	},
	{
		'idElement': 1010,
		'image': '<img src="images/11.jpg" alt="error" />',
		'name': 'MacBook Adasdair 2017',
		'price': 10008,
		'description': '<p>Наxdsasdasd 20% быстрее.<br>Почти невесомый<br>Четыре миллиона пикселей...</p>',
		'fullDescription': 'Ваши усилия . Наш софт. Избранный MacBook . Первый, среди первых, среди первых. Получение опыта из воздуха. Направляйтесь с мыслями. Не потомпляемая система AppleNoWater Plus сбережет ваши данные. Спаси и сохрани. Увлекайтесь. Жизнь это время. Понимайте процесс происходящего . И снова. Уверенность в завтрашнем дне. Данная технология работает. С течением. Новый процесс преобразует. В новое. Как думать, но дважды.',
		'inStock': 0
	},
	{
		'idElement': 1011,
		'image': '<img src="images/11.jpg" alt="error" />',
		'name': 'MacBook Adasdair 2017',
		'price': 100089,
		'description': '<p>Наxdsasdasd 20% быстрее.<br>Почти невесомый<br>Четыре миллиона пикселей...</p>',
		'inStock': 0
	},
	{
		'idElement': 1012,
		'image': '<img src="images/11.jpg" alt="error" />',
		'name': 'MacBook Adasdair 2017',
		'price': 1000897,
		'description': '<p>Наxdsasdasd 20% быстрее.<br>Почти невесомый<br>Четыре миллиона пикселей...</p>',
		'inStock': 0
	},
	{
		'idElement': 1013,
		'image': '<img src="images/11.jpg" alt="error" />',
		'name': 'MacBook Adasdair 2017',
		'price': 10008,
		'description': '<p>Наxdsasdasd 20% быстрее.<br>Почти невесомый<br>Четыре миллиона пикселей...</p>',
		'inStock': 0
	},
	{
		'idElement': 1014,
		'image': '<img src="products/Watch/3/top.png" alt="error" />',
		'name': 'Apple Watch Series 3',
		'price': 149,
		'description': '<p>Будьте активнее.<br>Следите за здоровьем.<br>Оставайтесь на связи.</p>',
		'inStock': 0
	},
	{
		'idElement': 1015,
		'image': '<img src="products/Watch/4/top.png" alt="error" />',
		'name': 'Apple Watch Series 4',
		'price': 249,
		'description': '<p>Эти часы не спускают глаз с вашего сердца.<br>Взгляни на время по новому.</p>',
		'inStock': 20
	},
	{
		'idElement': 1016,
		'image': '<img src="products/Watch/5/top.png" alt="error" />',
		'name': 'Apple Watch Series 5',
		'price': 349,
		'description': '<p>Таких часов вы ещё не видели.<br>Их стиль можно менять на свой вкус.</p>',
		'inStock': 10
	},
	{
		'idElement': 1017,
		'image': '<img src="products/Mac/IMacPro/top.png" alt="error" />',
		'name': 'IMac Pro',
		'price': 2199,
		'description': '<p>Просто монстр.<br>Четыре миллиона пикселей.</p>',
		'inStock': 4
	},
	{
		'idElement': 1018,
		'image': '<img src="products/IPad/Air/top.png" alt="error" />',
		'name': 'IPad Air',
		'price': 999,
		'description': '<p>Невероятные возможности.<br>Доступны для многих.</p>',
		'inStock': 10
	},
	{
		'idElement': 1019,
		'image': '<img src="products/IPad/Mini/top.png" alt="error" />',
		'name': 'IPad Mini',
		'price': 699,
		'description': '<p>Впечатляет не размером, а делом.<br>Как компьютер, не как любой компьютер.</p>',
		'inStock': 5
	},
	{
		'idElement': 1020,
		'image': '<img src="products/Mac/IMac(27-inch)/top.png" alt="error" />',
		'name': 'IMac 27 дюймов',
		'price': 1699,
		'description': '<p>Двигатели прогресса.<br>Машина для мечты.</p>',
		'inStock': 3
	}, {
		'idElement': 1021,
		'image': '<img src="products/AppleTV/4K/top.png" alt="error" />',
		'name': 'Apple TV 4K',
		'price': 129,
		'description': '<p>Развлечения начинаются.<br>Смотрите всё в одном приложении.<br>Как в кино.</p>',
		'inStock': 20
	},
	{
		'idElement': 1022,
		'image': '<img src="products/AppleTV/HD/top.png" alt="error" />',
		'name': 'Apple TV HD',
		'price': 109,
		'description': '<p>Развлечения начинаются.<br>Смотрите всё в одном приложении.<br>Как в кино.</p>',
		'inStock': 10
	},
	{
		'idElement': 1023,
		'image': '<img src="products/Mac/MacMini/top.png" alt="error" />',
		'name': 'Mac mini',
		'price': 799,
		'description': '<p>Вы только посмотрите.<br>Ретина экран</p>',
		'inStock': 0
	},
	{
		'idElement': 1024,
		'image': '<img src="products/Mac/Pod/top.png" alt="error" />',
		'name': 'Mac mini',
		'price': 799,
		'description': '<p>Работает во весь опор.<br>Новый уровень безопасности.</p>',
		'inStock': 0
	},
	{
		'idElement': 1025,
		'image': '<img src="products/AirPods/AirPods.png" alt="error" />',
		'name': 'AirPods',
		'price': 259,
		'description': '<p>AirPods — уникальные беспроводные наушники.<br>Они подойдут ко всем вашим устройствам.</p>',
		'inStock': 15
	},
	{
		'idElement': 1026,
		'image': '<img src="images/13.jpg" alt="error" />',
		'name': 'MacBook Air',
		'price': 1199,
		'description': '<p>На 20% быстрее.<br>Почти невесомый<br>Четыре миллиона пикселей...</p>',
		'inStock': 5
	},
];