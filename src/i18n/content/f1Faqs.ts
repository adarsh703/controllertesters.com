import type { SupportedLang } from '../languages';
import type { FAQItem } from './indexContent';

export const localizedF1Faqs: Record<SupportedLang, FAQItem[]> = {
  en: [
    {
      q: "How fast are F1 drivers' reaction times, and what is a good launch score?",
      a: "Formula 1 drivers average a launch reaction time of 180ms to 220ms (0.18s–0.22s) from gantry lights extinction to clutch paddle release. A score between 190ms and 220ms is considered professional driver tier, while 220ms to 250ms is average."
    },
    {
      q: "Why is any reaction time under 100ms (0.1s) classified as a jump start by the FIA?",
      a: "Physiologically, retinal phototransduction takes ~25ms, optic nerve transmission ~30ms, cortical decision processing ~50ms, and motor nerve firing ~30ms (total ~135ms minimum). Under FIA rules, any reaction under 100ms is classified as an illegal anticipatory jump start."
    },
    {
      q: "What is the fastest legal reaction time in F1 history?",
      a: "At the 2017 Austrian Grand Prix, Mercedes driver Valtteri Bottas launched in a verified 165 milliseconds (0.165s), confirmed 100% legal by FIA optical sensors."
    },
    {
      q: "Why is the F1 start delay randomized between 0.2s and 3.0s?",
      a: "Randomization prevents drivers from rhythmically counting or predicting the exact release moment, forcing pure reactionary visual firing rather than anticipatory jumping."
    },
    {
      q: "How do Formula 1 drivers train their reaction speed off the track?",
      a: "F1 drivers use specialized Batak Pro light boards (hitting illuminated targets in 360°), juggle reaction balls that bounce unpredictably, and perform isometric finger pre-tensioning exercises to prime their neuromuscular reflexes."
    },
    {
      q: "Can I use a gamepad trigger, mouse click, or spacebar for this F1 test?",
      a: "Yes! You can use any gamepad trigger (LT/RT, L2/R2) or button, a computer mouse click, or the keyboard Spacebar. For esports accuracy, wired connections provide the lowest latency."
    }
  ],
  'pt-br': [
    { q: "Qual é o tempo de reação dos pilotos de F1 e o que é uma boa pontuação?", a: "Pilotos de Fórmula 1 têm média de largada entre 180ms e 220ms (0.18s a 0.22s). Fazer entre 190ms e 220ms é nível piloto profissional." },
    { q: "Por que reações abaixo de 100ms são consideradas largada queimada pela FIA?", a: "O cérebro humano precisa de pelo menos 135ms para processar a luz e acionar o músculo. Qualquer tempo abaixo de 100ms é considerado antecipação ilegal (queima de largada)." },
    { q: "Qual foi a largada mais rápida da história da F1?", a: "No GP da Áustria de 2017, Valtteri Bottas largou em impressionantes 165 milissegundos (0.165s), comprovados 100% legais pelos sensores da FIA." },
    { q: "Por que o tempo de apagamento das luzes é aleatório (0.2s a 3.0s)?", a: "Para impedir que os pilotos façam contagem rítmica ou adivinhem o momento, exigindo puro reflexo visual." },
    { q: "Como os pilotos treinam seus reflexos fora da pista?", a: "Eles usam painéis luminosos Batak Pro, bolas de reação com quique imprevisível e exercícios de pré-tensão muscular nos dedos." },
    { q: "Posso usar os gatilhos do controle, mouse ou barra de espaço?", a: "Sim! Você pode usar gatilhos analógicos (L2/R2, LT/RT), botões do controle, clique do mouse ou a barra de espaço do teclado." }
  ],
  tr: [
    { q: "F1 pilotlarının reaksiyon süresi kaçtır ve iyi bir kalkış skoru nedir?", a: "F1 pilotları ışıkların sönmesi ile debriyajı bırakma arasında ortalama 180ms-220ms tepki verir. 190ms-220ms arası profesyonel pilot seviyesidir." },
    { q: "FIA neden 100ms altındaki tepkileri erken kalkış (jump start) sayar?", a: "İnsan biyolojisinde görsel sinyalin kasa iletilmesi minimum ~135ms sürer. 100ms altı, tahmine dayalı erken kalkış kabul edilir." },
    { q: "F1 tarihindeki en hızlı yasal kalkış reaksiyonu kime aittir?", a: "2017 Avusturya GP'sinde Valtteri Bottas 165 milisaniye ile F1 tarihinin en hızlı yasal kalkışını gerçekleştirmiştir." },
    { q: "Işıkların sönme süresi neden 0.2s ile 3.0s arasında rastgeledir?", a: "Pilotların ritmik sayarak tahmin yapmasını engellemek ve saf görsel refleksle kalkış yapmalarını sağlamak içindir." },
    { q: "F1 pilotları reflekslerini nasıl eğitir?", a: "Batak ışık panolarında çalışarak, düzensiz seken reaksiyon topları kullanarak ve parmak kaslarını ön gerilimde tutarak eğitirler." },
    { q: "Bu testte oyun kolu, fare veya klavye kullanabilir miyim?", a: "Evet! Kol tetikleri (L2/R2), tuşlar, fare tıklaması veya klavye Boşluk tuşu ile test yapabilirsiniz." }
  ],
  ar: [
    { q: "ما هي سرعة انطلاق سائقي الفورمولا 1 وما هي النتيجة الممتازة؟", a: "يتراوح متوسط زمن رد فعل سائقي F1 بين 180ms و 220ms. الحصول على نتيجة بين 190ms و 220ms يعتبر بمستوى سائق سباقات محترف." },
    { q: "لماذا يعتبر الاتحاد الدولي FIA أي رد فعل أقل من 100ms انطلاقة خاطئة؟", a: "لأن الإشارات العصبية البصرية والحركية تستغرق فسيولوجياً 135ms كحد أدنى، وأي زمن أقل من 100ms يعد تخميناً مسبقاً غير قانوني." },
    { q: "ما هو أسرع زمن انطلاق قانوني في تاريخ الفورمولا 1؟", a: "في سباق جائزة النمسا الكبرى 2017، سجل فالتيري بوتاس انطلاقة تاريخية بزمن 165 مللي ثانية تم تأكيد قانونيتها بأجهزة الاستشعار." },
    { q: "لماذا يتغير زمن انطفاء الأضواء عشوائياً بين 0.2 و 3.0 ثانية؟", a: "لمنع السائقين من التنبؤ بلحظة الانطلاق وإجبارهم على الاعتماد على سرعة الاستجابة البصرية الخالصة." },
    { q: "كيف يتدرب سائقو الفورمولا 1 على زيادة سرعة رد الفعل؟", a: "باستخدام لوحات إضاءة Batak Pro التفاعلية، وكرات رد الفعل غير المنتظمة، وتمارين شد الأعصاب والعضلات." },
    { q: "هل يمكنني استخدام يد التحكم أو الفأرة أو زر المسافة في هذا الاختبار؟", a: "نعم! يدعم الاختبار محفزات اليد (L2/R2, LT/RT) ونقرات الفأرة وزر المسافة (Spacebar) بدقة متناهية." }
  ],
  es: [
    { q: "¿Cuál es el tiempo de reacción de los pilotos de F1?", a: "Los pilotos de F1 promedian entre 180ms y 220ms (0.18s–0.22s) en la salida. Marcar entre 190ms y 220ms es nivel de piloto profesional." },
    { q: "¿Por qué la FIA sanciona reacciones inferiores a 100ms?", a: "Fisiológicamente, el ojo y los nervios tardan al menos 135ms en reaccionar. Menos de 100ms se considera salida en falso por anticipación." },
    { q: "¿Cuál es el récord de salida más rápida en la F1?", a: "En el GP de Austria 2017, Valtteri Bottas reaccionó en unos increíbles 165 milisegundos (0.165s), verificado 100% legal por la FIA." },
    { q: "¿Por qué el apagado de luces es aleatorio (0.2s a 3.0s)?", a: "Para evitar que los pilotos cuenten mentalmente y forzar un reflejo visual instantáneo." },
    { q: "¿Cómo entrenan sus reflejos los pilotos de F1?", a: "Utilizan paneles de luces Batak Pro, pelotas de reacción irregulares y ejercicios de pre-tensión muscular en los dedos." },
    { q: "¿Puedo usar gatillos de mando, ratón o teclado?", a: "¡Sí! Puedes usar los gatillos (L2/R2, LT/RT), botones del mando, el clic del ratón o la barra espaciadora." }
  ],
  ja: [
    { q: "F1ドライバーの反応速度はどれくらいですか？", a: "F1ドライバーのシグナル消灯からクラッチ操作までの平均時間は180ms〜220ms（0.18〜0.22秒）です。190ms〜220msはプロレベルです。" },
    { q: "なぜ100ms未満はFIAでフライング判定されるのですか？", a: "網膜から筋肉への神経伝達には生理学的に最低135ms必要であり、100ms未満は消灯前のヤマ勘（フライング）とみなされるためです。" },
    { q: "F1史上最速の合法スタート記録は？", a: "2017年オーストリアGPでバルテリ・ボッタスが記録した165ミリ秒（0.165秒）が史上最速の合法スタートです。" },
    { q: "なぜ消灯時間が0.2秒〜3.0秒でランダムなのですか？", a: "タイミング予測やカウントを排除し、純粋な視覚反射でのみスタートさせるためです。" },
    { q: "F1ドライバーは普段どうやって反射神経を鍛えていますか？", a: "360度配置されたLEDを叩くBatakボード訓練や、不規則に跳ねるリアクションボールでのトレーニングを行っています。" },
    { q: "コントローラーのトリガーやマウス、スペースキーで計測できますか？", a: "はい！ゲームパッドのL2/R2トリガー、ボタン、マウス左クリック、キーボードのスペースバーすべてに対応しています。" }
  ],
  fr: [
    { q: "Quel est le temps de réaction des pilotes de F1 ?", a: "Les pilotes de F1 réagissent en moyenne entre 180ms et 220ms à l'extinction des feux. Un temps entre 190ms et 220ms est digne d'un pilote professionnel." },
    { q: "Pourquoi tout temps inférieur à 100ms est un faux départ selon la FIA ?", a: "Le système nerveux humain met au minimum 135ms pour transmettre l'ordre. Moins de 100ms est considéré comme une anticipation illégale." },
    { q: "Quel est le record du départ le plus rapide de l'histoire de la F1 ?", a: "Au GP d'Autriche 2017, Valtteri Bottas a réalisé un départ validé à 165 millisecondes (0.165s)." },
    { q: "Pourquoi le délai d'extinction est-il aléatoire (0.2s à 3.0s) ?", a: "Pour empêcher les pilotes d'anticiper au rythme et forcer un pur réflexe visuel." },
    { q: "Comment les pilotes s'entraînent-ils ?", a: "Avec des murs de lumière Batak, des balles de réaction et des exercices de pré-tension musculaire." },
    { q: "Peut-on utiliser les gâchettes de manette, la souris ou le clavier ?", a: "Oui ! Le test prend en charge les gâchettes (L2/R2, LT/RT), les boutons, le clic de souris et la barre d'espace." }
  ],
  de: [
    { q: "Wie schnell sind F1-Fahrer und was ist ein guter Wert?", a: "Formel-1-Fahrer erreichen Reaktionszeiten von 180ms bis 220ms. Werte zwischen 190ms und 220ms gelten als Profi-Niveau." },
    { q: "Warum gilt eine Zeit unter 100ms bei der FIA als Frühstart?", a: "Die menschliche Reizübertragung dauert mindestens 135ms. Zeiten unter 100ms gelten als unzulässige Spekulation." },
    { q: "Was ist die schnellste legale Startreaktion der F1-Geschichte?", a: "Beim GP von Österreich 2017 startete Valtteri Bottas in verifizierten 165 Millisekunden (0.165s)." },
    { q: "Warum erlöschen die Lichter zufällig zwischen 0.2s und 3.0s?", a: "Damit Fahrer den Startmoment nicht vorausberechnen können, sondern rein visuell reagieren müssen." },
    { q: "Wie trainieren F1-Piloten ihre Reflexe?", a: "Mit Batak-Lichtwänden, unberechenbaren Reaktionsbällen und Muskelvorspannungsübungen der Finger." },
    { q: "Funktioniert der Test mit Gamepad-Triggern, Maus oder Leertaste?", a: "Ja! Trigger (L2/R2, LT/RT), Controller-Tasten, Mausklicks und die Leertaste werden präzise unterstützt." }
  ],
  pt: [
    { q: "Qual é o tempo de reação dos pilotos de F1?", a: "Os pilotos de Fórmula 1 têm uma média de arranque entre 180ms e 220ms. Fazer 190ms a 220ms é nível profissional." },
    { q: "Por que razão tempos abaixo de 100ms são falsa partida pela FIA?", a: "O cérebro demora no mínimo 135ms a processar a luz e agir. Menos de 100ms é considerado antecipação ilegal." },
    { q: "Qual foi a partida mais rápida da história da F1?", a: "No GP da Áustria de 2017, Valtteri Bottas arrancou em 165 milissegundos (0.165s), 100% legal segundo a FIA." },
    { q: "Por que razão o apagamento das luzes é aleatório?", a: "Para impedir contagens rítmicas e exigir puro reflexo visual instantâneo." },
    { q: "Como treinam os pilotos os seus reflexos?", a: "Com painéis luminosos Batak Pro, bolas de reação irregular e pré-tensão muscular nos dedos." },
    { q: "Posso usar gatilhos do comando, rato ou teclado?", a: "Sim! Suporta gatilhos (L2/R2, LT/RT), botões do comando, clique do rato ou a barra de espaços." }
  ],
  ko: [
    { q: "F1 드라이버의 반응속도는 얼마이며 우수한 점수는?", a: "F1 드라이버의 신호등 소등 후 클러치 조작 평균 시간은 180ms~220ms입니다. 190ms~220ms는 월드클래스 프로 수준입니다." },
    { q: "FIA가 100ms 미만 반응을 부정출발(Jump Start)로 규정하는 이유는?", a: "인간의 신경 생리학상 빛을 보고 반응하는 데 최소 135ms가 소요되므로, 100ms 미만은 예측에 의한 부정 출발로 판정됩니다." },
    { q: "F1 역사상 가장 빠른 공식 합법 출발 기록은?", a: "2017년 오스트리아 GP에서 발테리 보타스가 기록한 165밀리초(0.165초)가 공식 최속 기록입니다." },
    { q: "신호등 소등 시간이 0.2초~3.0초 사이 무작위인 이유는?", a: "출발 타이밍을 미리 예측하거나 박자를 맞추는 행위를 원천 차단하고 순수 시각 반사신경을 측정하기 위함입니다." },
    { q: "F1 드라이버들은 어떻게 반사신경을 단련하나요?", a: "Batak 라이트 보드 반응 훈련, 불규칙 반사구 훈련 및 손가락 근육 사전 긴장 기법을 사용합니다." },
    { q: "게임패드 트리거, 마우스, 스페이스바로 측정할 수 있나요?", a: "네! 게임패드 아날로그 트리거(L2/R2, LT/RT), 버튼, 마우스 클릭, 키보드 스페이스바를 모두 지원합니다." }
  ],
  it: [
    { q: "Qual è il tempo di reazione dei piloti di F1?", a: "I piloti di Formula 1 hanno una media di partenza tra 180ms e 220ms. Un punteggio tra 190ms e 220ms è livello pilota professionista." },
    { q: "Perché tempi sotto i 100ms sono considerati partenza anticipata dalla FIA?", a: "La trasmissione nervosa umana richiede almeno 135ms. Sotto i 100ms viene considerata anticipazione non consentita." },
    { q: "Qual è la partenza più veloce della storia della F1?", a: "Al GP d'Austria 2017, Valtteri Bottas è scattato in appena 165 millisecondi (0.165s), verificati 100% legali dalla FIA." },
    { q: "Perché lo spegnimento delle luci è casuale (0.2s - 3.0s)?", a: "Per impedire ai piloti di contare il tempo ed esigere una pura reazione visiva immediata." },
    { q: "Come si allenano i piloti di Formula 1?", a: "Con tabelloni luminosi Batak Pro, palline da reazione a rimbalzo imprevedibile ed esercizi di pre-tensione muscolare." },
    { q: "Posso usare grilletti del gamepad, mouse o barra spaziatrice?", a: "Sì! Il test riconosce grilletti analogici (L2/R2, LT/RT), pulsanti, click del mouse e barra spaziatrice." }
  ]
};
