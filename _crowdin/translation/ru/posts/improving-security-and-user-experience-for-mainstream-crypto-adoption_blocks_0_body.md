Технологические инновации в блокчейне за последние несколько лет процветали — СТАРК, СНАРК, EIP-1559, слияние Ethereum — все это огромные технологические достижения. Тем не менее, дизайн UX и пользовательского интерфейса не сохранился. Люди все еще застряли на 16-словесных фразах семян, и попадание в DeFi без централизованного посредника все еще слишком запугивает для многих . На борту следующего миллиарда пользователей в Web3 решающее значение имеет улучшение работы пользователя.

Как показал FTX (и Гемини, Цельсиус и М.Гекс), сохранение собственного владения активами имеет решающее значение. Тем не менее, до недавнего времени кошельки самохранилища были сложными и заблуждались для обычного пользователя. Большинство людей ежемесячно забывают свои пароли Web2; как пользователи должны хранить свои seed фразы и закрытые ключи для вечности?

Просто положите, это штурм безопасности. Как мы видели, бесчисленное количество раз, один неверный шаг, будь то по инициативе плохих актеров или халатности, может привести к потере миллионов долларов.

В качестве первого контактного пункта для новых пользователей криптовалюты, Ethereum кошельки должны быть простыми в использовании, безопасными и настраиваемыми для удовлетворения потребностей каждого пользователя. Это требует от разработчиков интеграции простоты Web2 финансовых продуктов с функциями Web3.

Это именно то, что достигает абстракция аккаунта.

Абстракция аккаунта повышает безопасность и безопасность продуктов для самохранилища за счет устрашения пользователей от приватного ключа и создания кошельков более программируемых. С этим улучшением UX кошельки без хранилища могут наконец масштабироваться миллионам обычных пользователей криптовалют.

Но чтобы в полной мере понять влияние абстракции аккаунта, мы должны обновиться на то, как работают счета Ethereum.

### Основы счетов Ethereum

Существует два типа счетов Ethereum:

1. Счета, принадлежащие внешнему сектору (EOA)
2. Счета контракта (CA)

Давайте отложим каждое вниз немного дальше.

### Внешние счета

Для пользователей Ethereum типичным типом счетов являются внешние учетные записи, такие как MetaMask и Coinbase Wallet. Каждый EOA состоит из частного и публичного ключа, называемого клавиши.

Все транзакции авторизованы и подписаны приватными ключами. После подписания транзакции EVM проверяет, что подпись действительна с использованием адреса учетной записи EOA. Твердокодированная логика в EVM означает, что аккаунт (объект, содержащий ваши токены) и закрытый ключ (подписчик) объединяются как один.

Потеря вашего закрытого ключа означает потерю ваших средств или даже контроль над вашим аккаунтом навсегда.

### Контрактные счета

Тем временем контрактные счета, синонимы абстракции аккаунта, являются смарт-контрактами, развернутыми на блокчейне Ethereum. Эти контракты контролируются кодовой логикой и не требуют приватных ключей. В отличие от EOA, контрактные счета не могут инициировать транзакции. Вместо этого их транзакции инициируются инструкциями от EOA.

### Почему вопросы абстракции счета

абстракция счета влечет за собой введение жесткой логики авторизации вне ОСЗ, превращение каждого аккаунта в программируемый интеллектуальный контракт, который может быть адаптирован для удовлетворения потребностей любого человека.

Как объяснили соучредитель Аргента и главный научный сотрудник Жюлиан Нисет в ходе недавнего[Stark @ Home event](https://www.crowdcast.io/e/7olimxqv), эта гибкая логика авторизации дает возможность разработчикам играть с такими функциями, как…

**Аппаратные дизайнеры:**Используя защищённый анклав iPhone или Android, чтобы превратить любой смартфон в аппаратный кошелек. Отсюда пользователи могут проверить транзакции, используя биометрические данные, такие как отпечаток пальца или Apple Face ID. Мы уже начали видеть собственные кошельки, такие как Braavos[раскинуть эту функцию.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Paymasters:**Позволяют пользователям оплачивать газовые сборы в любом токене, или даже оплачивать транзакции по разработанному третьим лицам.

**Социальное восстановление:**В случае потери или взлома закрытого ключа, пользователи могут авторизовать новый ключ в качестве законного владельца кошелька. Это может включать в себя различные методы восстановления через доверенные контакты, аппаратные кошельки или сторонние сервисы. Идея заключается в том, чтобы восстановить доступ к вашему аккаунту так же просто, как и восстановить пароль к вашему банковскому счету через электронную почту.

**Многофакторная аутентификация:**аналогично обычной практике Web2 2FA, пользователи могут настроить два (или более) способа аутентификации для своих криптовалютных кошельков, , транзакция подписана только после подтверждения пользователем одобрения через вторую опцию, такую как электронная почта или SMS. Пользователи также могут устанавливать ежедневные лимиты на передачу данных или списки адресов, с которых кошелек автоматически блокируется от взаимодействия.

**Quantum Resistant and Gas-Efficient Signatures:**Схема текущей подписи Ethereum, ECDSA является вычислительной обширной (читается более высокий сбор газа) и может быть нарушена квантовыми компьютерами. Благодаря абстракции подписей различные контракты с клиентами используют более эффективные и надежные схемы подписи. StarkNet использует свои собственные проприетарные кривые для СТАРК.

Эти функции не только обеспечивают пользователям большую безопасность и более гибкость, но и, что еще важнее, приводят к**лучшему**опыту пользователей.

Размещенные Виталиком Батерином как «долгой мечты» сообщества Ethereum разработчиков, инновации вокруг абстракции счетов, в основном EIP-2938 и EIP-3074, с 2020 года. Вместе с тем оба требуют компромиссов в отношении безопасности и осуществления. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), наиболее перспективная разработка до сих пор, предлагает абстракцию учётной записи без необходимости внесения изменений в протокол Ethereum.

### **Абстракция аккаунта и Starknet**

В отличие от Bitcoin и Ethereum, которые модифицируют свои текущие протоколы для поддержки абстракции аккаунта,[StarkNet](https://starkware.co/starknet/)внедрил абстракцию аккаунта с самого дня. В сочетании с масштабируемостью и возможностями наших доказательств STARK потенциал для инновации кошельков является бесконечным. Вот почему следующее поколение кошельков самохранилища типа Argent и Braavos в настоящее время строятся на вершине нашей сети.

Подход StarkNet схож с EIP-4337,[признавая, что](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)полная абстракция аккаунта все еще приводит к путанице UX и[может открыть дверь](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)для атак на последовательности. Скорее, она нацелена на достижение абстракции подписей и выплат путем мутации некоторых из требуемых инфраструктур в сети и вне ее.

И хотя предстоит еще многое сделать, абстракция учётной записи набирает обороты за пределы небольшого круга коренных криптовалют. В декабре[Visa предложила](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)использовать абстракцию аккаунта для автоматической настройки повторяющихся платежей в StarkNet. Используя делегируемый аккаунт, пользователи могут предоставить разрешение для начала оплаты заранее утвержденного смарт-контракта. Отсюда будет запрограммирован смарт-контракт для вычета установленной суммы платежа на определенный день в течение установленного срока. В то время как виза еще не раскрыла свои планы по собственным услугам, только один процент говорит об объемах, и может предвидеть мир, в котором такие платформы как Netflix и Spotify могли бы охватить криптовалютным принятием.

Что касается того, что держится в будущем, то будет сказано только время. Но одна вещь уверена. Создавая кошельки более простыми и безопасными для использования, абстракция аккаунта будет служить мощным катализатором для самохранилища кошельков блокчейна для масштабирования миллионов обычных криптовалют. Тем временем мы будем продолжать строительство.