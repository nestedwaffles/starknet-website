### TL;DR

* *StarkNet Alpha يتم تشغيله على Mainnet Ethereum بحلول نوفمبر*
* الوقت للبناء على StarkNet الآن

### تاريخ موجز

لقد أعلنا رؤيتنا لـ[StarkNet](https://starkware.co/product/starknet/)في بداية السنة: لجلب قدرة هائلة على التوسع إلى إيثيريوم مع الحفاظ على أمن L1، التفاعلات بلا إذن واللامركزية.\
أطلقنا**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**على شبكة اختبار عامة في حزيران/يونيه. يدعم هذا الإصدار العقود الذكية العامة للحساب التي لا أذونات لها بالكامل. لقد قمنا منذ ذلك الحين بترقيتها مرتين: أولا إلى**ألفا 1**- توفير[L1<>L2 المراسلة والبيانات على السلسلة](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f)، ومن ثم إلى**ألفا 2**- داعما[إمكانية التسمين](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

يدعم StarkNet Alpha 2 الآن العقود الذكية للحساب العام في حالة شبيهة بإيثيريوم, مع قدرة عقدي L1 و L2 على التفاعل فيما بينهما. اقرأ المزيد[هنا](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### ما هو StarkNet Alpha على Mainnet؟

ستدعم StarkNet Alpha على Mainnet ميزات مماثلة للميزات المتاحة حاليا على شبكة جورلي للاختبار العام.

#### **ماذا نتوقع**

لأن StarkNet لا يزال قيد التطوير، نريد أن نقدم القدرات بطريقة تدريجية وأن نضمن تحقيق توقعات المطورين في كل خطوة على حدة. وهناك جانبان مهمان بشكل خاص نود أن نشدد عليهما وهما:

* **السماح بنشر العقد الذكي**: سوف نتابع قائمة التشغيل المعقولة التي قدمها زملاؤنا المتفائلين: ابدأ بـ*إذن*نشر العقد. سيتم نشر البروتوكول الذي يحدد كيفية طلب إدراج العقد الذكي الخاص بك في هذه القائمة البيضاء الأولية في الأسابيع القادمة.
* **لا يوجد ضمان للتوافق الخلفي**: نحن نتوقع الانتقال المستقبلي من StarkNet Alpha إلى StarkNet Beta ليشمل regenesis of the State. وستبدأ الشبكة من المربع 0، وسيتعين على التطبيقات إعادة نشر عقودها. وعلاوة على ذلك، ينبغي للمطورين والمستعملين أن يلاحظوا أن ستارك نيت بيتا المتوقعة قد لا تكون متفقة مع ستاركنيت ألفا (StarkNet Alpha)، هو. . قد يحتاج المطورين إلى تعديل عقودهم. ومن الواضح أننا سنحاول السماح بانتقال سهل للطلبات، مع إدخال الحد الأدنى من التغييرات المطلوبة.

#### ميزات إضافية قريبة الأجل

وكجزء من انتقال StarkNet Alpha من StarkNet Alpha إلى Mainnet، سنقوم بما يلي:

1. إضافة بناءين إلى العقود.
2. تحسين إطار الاختبار.
3. للكتل والمعاملات، انتقل من استخدام معرف إلى استخدام التجزئة.

نحن نعتزم الاستمرار في نشر ميزات جديدة في موقع عادي، تماما كما فعلنا على اختبار الجمهور. وفي الأجل القريب، نخطط للتحسينات التالية:

1. عقود الحساب وعقود الرمز المميز - فتح الطريق أمام تطبيقات DeFi للتفاعل مع StarkNet بالطريقة المألوفة بها.
2. تحسين وظيفة العقود - دعم تحسين العقود والأحداث
3. تحذير: سيسمح مجمع التضامن إلى القاهرة الذي طورته هولندا بالانتقال السلس من العقود الذكية للتضامن إلى العقود الذكية StarkNet.
4. التوقيعات في إيثيريوم: سيسمح الدعم الأصلي لـ ECDSA عبر secp256k1 بتكامل أسهل مع المحافظ الموجودة.
5. العقد الكاملة لـ StarkNet : سوف تسمح عقدة كاملة للمستخدمين بالمشاركة في الشبكة مع متطلبات الأجهزة على قدم المساواة مع متطلبات عقدة إيثيريوم الكاملة.

#### آلية الرسوم

وسيتم تشغيل آلية الرسوم بمجرد إضافة عقود الحساب والعقود الرمزية إلى StarkNet Alpha.

ستتكبد جميع المعاملات المقدمة إلى شركة StarkNet رسوما مصممة لتغطية تكاليف L1 وخارج السلسلة. وستفرض هذه الرسوم في البداية بالدولار. وستنخفض تكلفة معاملة واحدة كلما زادت شركة StarkNet جدولها (كما هو الحال بالنسبة لجميع النظم القائمة القائمة القائمة على ستار ك). عند صياغة آليات الرسوم الأولية، نحبذ البساطة بدلا من التسعير الدقيق للمعاملات وفقا للموارد التي تستهلكها. ويتوقع صقل هذه الآلية وتحسينها بمرور الزمن.

مع الحرص على جعل StarkNet شبكة مستدامة وتحفيز مشغليها ومطوريها، وسيوزع جزء من الإيرادات المحصلة من الرسوم على مطوري التطبيقات ومطوري نواة StarkNet الأساسيين.

#### أمان

سوف يتبع نموذج StarkNet Alpha's للأمان على Mainnet النموذج الحالي على شبكة الاختبار:

* وكل دولة تمر بمرحلة انتقالية مدعومة بإثبات من معاهدة تخفيض الأسلحة الهجومية الاستراتيجية والحد منها (STARK)، ومن ثم يتم التأكد من صحتها.
* سيتم نشر جميع بيانات الولاية على السلسلة بحيث تكون الولاية بناءة بالكامل من L1.
* سيكون هناك متسلسل واحد.
* وستكون الشبكة قابلة للتحديث دون أي تأخير زمني.

### النظام الإيكولوجي لشبكة StarkNet آخذ في النمو

فتح StarkNet للعالم اجتذب موجة هائلة من المطورين المهتمين بتعلم القاهرة وتطوير عبر StarkNet. لقد قدموا ملاحظات قيمة، وكان من دواعي السرور الحقيقي أن نرى مناقشات نشطة على شبكة StarkNet[ديسكورد](https://discord.gg/uJ9HZTUk2Y).

علاوة على ذلك، يتم تطوير StarkNet ليس فقط من قبل فريق StarkWare ولكن أيضًا من قبل بعض أقوى الفرق في النظام الإيكولوجي للبلوكشين:

* وتعمل هولندا على تنفيذ مشروعين:

1. **[تحذير](https://github.com/NethermindEth/warp)**: مترجم تضامن للقاهرة

2. **[Voyager](https://voyager.online/)**: مستكشف كتلة StarkNet

* يعمل برنامج فتح Zeppelin على تنفيذ[العقود المعيارية](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)ل StarkNet كما بدأ العمل على بيئة المطور:[Nile](https://github.com/martriay/nile).
* يعمل ShardLabs على[StarkNet HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)وعلى إطار اختبار أفضل.
* يعمل فريق إريغون على توسيع عقدة إيثيريوم الكاملة لدعم StarkNet (codename: Fermion). وهم يعملون معنا على تصميم الآليات الأساسية لـ StarkNet.
* يعمل التوازن على تنفيذ عقدة ستارك نيت كاملة في روست،
* خدمات مراجعة الحسابات في القاهرة: في الأشهر المقبلة، ستجري شركة ABDK، وشركة توافق الآراء ديلينس، وبيكشيلد، وتريل بيتس عمليات مراجعة حسابات في القاهرة.
* مراجعة حسابات StarkNet: بدأنا بمراجعة أسس الشبكة:

1. **خبراء التشفير**سيجرون مراجعة لأداة التحقق للتضامن في القاهرة.
2. تم مؤخرا إكمال**دليل LEAN**لمقاييس القاهرة ونشرت في[ورقة](https://arxiv.org/abs/2109.14534)و GitHub[repo](https://github.com/starkware-libs/formal-proofs).

توقع المزيد من التعاون المثير للاهتمام سيتم نشره في الأشهر القادمة!

### ستارك تتقلص اليوم

نحن نقترب من إطلاق StarkNet Alpha بثقة ، كما أن StarkEx، قياسنا المستقل لساس، قد برهنت على كيف يمكن لـ STARKs توسيع نطاق تطبيقات إيثيريوم على نطاق واسع. أطلقنا StarkEx لـ[dYdX](https://dydx.exchange/)(العقود الدائمة)،[DeversiFi](https://www.deversifi.com/)(التجارة والمدفوعات الفورية)، بالإضافة إلى[منحوت](https://www.immutable.com/)و[الفرز](https://sorare.com/)(مناجم وتجارة NFT). وشهدنا تكاليف الغاز/tx الخاصة بهم انخفضت بمقدار 100X-200X إلى نحو 650 غاز/tx في فاليديوم (بيانات خارج السلسلة)، و1100 غاز/tx في ZK-Rollup.

وحتى الآن، قامت شركة StarkEx بتسوية مبلغ 80 دولارا أمريكيا في عمليات تجارية وما يزيد على 27 مليون صفقة، وهو ما يكتنفه إلى حد بعيد أي حل آخر من حلول L2 - وجميعها مجتمعة.

### تصرّف الآن

لم يكن هناك أبدا وقت أفضل للانضمام إلى نظام StarkNet المتنامي عن طريق بناء أجهزة dApp أو أدوات المطور المفيدة.

نحن ندعوك:

1. انضم إلى[Discord StarkNet](https://discord.gg/uJ9HZTUk2Y)، حيث يمكنك الالتقاء وإشراك مجتمع StarkNet.
2. [ابدأ تعلم](https://www.cairo-lang.org/docs/hello_starknet/index.html)كيفية كتابة العقود الذكية لـ StarkNet.
3. [DM لدينا](https://twitter.com/StarkWareLtd)- فريقنا حريص على مساعدة أفكارك ومبادراتك في الحياة.

**تحديث (نوفمبر 2021):**StarkNet Alpha حية على ماين إيثيريوم