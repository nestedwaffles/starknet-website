### TL;DR

StarkNet Alpha 1 لديه ميزتان جديدتان:

* التفاعل L1<>L2
* بيانات السلسلة

### مقدمة

في بداية السنة، أعلنا أن StarkWare بصدد بناء[StarkNet](https://starkware.co/product/starknet/)، يعمل كشبكة L2 عبر إيثيريوم بدون إذن STARK-Rollup1 الموجودة في ZK. تسمح StarkNet لأي تطبيق DApp بتحقيق مقياس غير محدود لحسابه - دون المساس بقدرة إيثيريوم على التكوينات والأمان.

في الشهر الماضي،[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)تم نشره في العالم. وللمرة الأولى، يمكن للمطورين[كتابة](https://kobi.one/2021/07/14/stardrop.html)أي عقد ذكي ونشره، بدون إذن، إلى ZK-Rollup. يمكن للمستخدمين إرسال المعاملات إلى الشبكة، على نمط إيثيريوم.

اليوم نحن نصدر نسخة جديدة؛ ألفا 1. نحن نطلق الميزات على أساس متجدد للسماح للمطورين بالتفاعل مع الميزات الجديدة في أقرب وقت ممكن. ونتوقع أن يؤدي هذا إلى تشديد دورة التغذية المرتدة والسماح للمجتمع بتحسين StarkNet بسرعة.

### **مميزات ألفا 1**

#### L1<>L2 التفاعل

يتضمن Alpha 1 بروتوكولا للرسائل L1<L2 يسمح للمطورين بتنفيذ تدفقات معاملات سلسة بين L1 و L2. ويمكن للمطورين الآن إرسال رسائل من العقود في L1 إلى العقود في L2 والعكس بالعكس.

أحد جمال ZK-Rollups هو أن التحديثات التي تجريها الدولة نهائية دون أي تأخير. وهذا يعني أن الرسائل التي أرسلت من L2 إلى L1 يمكن إرسالها على الفور إلى عقد الوجهة المقصودة. هذا يفتح الطريق لبناء تطبيقات قابلة حقاً للتشغيل المتبادل بين الطبقات.

هل ترغب في محاولة ذلك؟ أفضل طريقة للبدء هي اتباع البرنامج التعليمي[هنا](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html).

ويدين بروتوكولنا L1<>L2 بالكثير لسائر L2s (ولا سيما التفاؤل والتحكيم) التي كان لعملها السابق في هذا المجال تأثير على تصميمنا.

#### توفر البيانات على سلسلة

يتم الآن نشر تحديث حالة StarkNet، كبيانات على السلسلة على الإيثيريوم. هذا يسمح لأي مستخدم ببناء حالة StarkNet، بشكل كامل، من بيانات L1. يتضمن كل تحديث الولاية الحالة المختلفة, أي ماهية التخزين الذي تم تغييره وقيمته الجديدة.

هنا أيضا، ZK-Rollup يظهر قوته. على النقيض من التراكم المتفائل، حيث لابد من إرسال بيانات المعاملات الكاملة على السلسلة، في ZK-Rollups، لا ترسل على السلسلة سوى الحد الأدنى المطلق من البيانات المطلوبة لاستخلاص الفجوة بين الولايات.

فكر في مثال رائع للسعر الأوركليز. عادة ما تحتوي معاملة لتحديث سعر أوراكل على معاملات متعددة ولكن تقوم بتحديث خلية تخزين واحدة فقط؛ سعر الزوج. البيانات الموجودة على السلسلة المطلوبة لتحديث الحالة التي تحتوي على معاملات أوراكل الأسعار في دورة تفاعلية تنمو بشكل خطي مع عدد التحديثات، أثناء وجوده في ZK-Rollup، سيكون دائما تحديث وحدة تخزين واحدة.

علاوة على ذلك، يمكن تطبيق خوارزميات الضغط على البيانات المنشورة، وسيشهد على صلاحيتها برهان ستارك، مما يقلل بدرجة أكبر من البصمة في السلسلة. ستدخل الإصدارات المقبلة من StarkNet تحسينات ابتكارية في هذا المجال.

#### StarkNet OS

نحن أيضا نصدر رمز نظام التشغيل StarkNet. نظام تشغيل StarkNet هو برنامج القاهرة الذي يدير StarkNet. ويتناول نظام التشغيل كل ما يتم على الشبكة - نشر العقود، وتنفيذ المعاملات، والرسائل L1<L2 والمزيد. وستشرح بنية وتصميم StarkNet OS بالتفصيل في وظيفة منفصلة.

#### ميزات إضافية

لم يتم فقط تطوير StarkNet Alpha ، بل نحن أيضا نحسن باستمرار بالقاهرة. للحصول على وصف كامل للميزات الجديدة في القاهرة v0.3.0، راجع ملاحظات الإصدار[هنا](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### النظام الإيكولوجي آخذ في النمو

وإلى جانب العمل المستمر بشأن نواة StarkNet، فإن عمل النظام الإيكولوجي في شبكة StarkNet، يتسع باستمرار. ويسرنا أن نتعاون مع بعض أكثر الأفرقة موهبة في النظام الإيكولوجي.

يقوم فريق إريغون (TurboGeth) بتنمية أول جهد للعقدة الكاملة لفيريميون، و StarkNet. واستنادا إلى معرفتهم الهائلة المكتسبة من العمل في إيثيريوم، يمكننا أن نعمل معهم لبناء عقدة كاملة قوية، ويضم العديد من الدروس المستفادة أثناء البناء من أجل إيثيريوم، ويستفيد في الوقت نفسه من المقياس الذي توفره أدلة ستارك.

وتعكف هولندا على العمل في ورب، وهو جامع من EVM إلى القاهرة. وإذ نلتزم بثقافتنا المتمثلة في تقديم أدوات جديدة عندما تكون جاهزة، كل ما نستطيع قوله هو، توقع أخبار مثيرة على هذه الجبهة قريبا جداً! ومع ذلك، يمكننا أن نقول إنهم يتحركون بسرعة حرجة.

### ما يعقبه المستقبل

وستتمثل نقطة التوقف التالية على طريقنا إلى شركة StarkNet في إمكانية التسمين - مما يسمح للعقود بالتفاعل فيما بينها. ابق مترقبا.

[StarkWare](https://starkware.co/)

(1) كما قلنا سابقا، فإن مصطلح ZK-Rollup، أصبح الآن مصطلحا شائعا الاستخدام، ولكنه مضلل للغاية: لا توفر هذه الحلول (حاليا) معرفة مطلقة.

**تحديث (نوفمبر 2021):**StarkNet Alpha حية على ماين إيثيريوم