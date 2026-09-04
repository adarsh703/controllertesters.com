import type { SupportedLang } from '../languages';
import type { FAQItem } from './indexContent';

export const localizedReactionMatrixFaqs: Record<SupportedLang, FAQItem[]> = {
  en: [
    {
      q: "What is reaction time and what is considered a normal human benchmark?",
      a: "Reaction time is the elapsed duration between a sensory stimulus (visual, auditory, tactile) and the execution of a physical motor response. The median human visual reaction time is ~250 milliseconds (0.25s), while simple audio reaction time averages 170ms."
    },
    {
      q: "Is a reaction time of 200ms good? Is 250ms considered slow?",
      a: "A reaction time of 200ms is well above average, placing you in the top 15% of human reflexes. 250ms is the median human population average. Sub-180ms is pro athlete / esports tier, while over 280ms typically reflects 60Hz display lag or physical fatigue."
    },
    {
      q: "How fast is a 12-year-old's reaction time compared to adults?",
      a: "A 12-year-old typically averages 240ms to 270ms. Human visual reflexes naturally peak in speed between ages 18 and 24 (averaging 190ms–220ms) as neural synaptic pathways reach full physiological maturity."
    },
    {
      q: "Can you improve reaction time, and what are effective training methods?",
      a: "Yes! Regular reflex training, using high-refresh gaming displays (144Hz–240Hz+), playing fast tactical shooters, maintaining optimal hydration, and getting 8 hours of sleep can improve response consistency by 15ms to 35ms."
    },
    {
      q: "Why is auditory reaction time faster than visual reaction time?",
      a: "Audio impulses reach the brainstem via the cochlear auditory nerve in only 8–10ms, whereas visual phototransduction in the retina takes 20–40ms before transmitting signals along the optic nerve to the visual cortex."
    },
    {
      q: "What is Hick's Law and how does choice reaction time differ from simple reaction time?",
      a: "Hick's Law states that reaction time increases logarithmically with the number of stimulus options. Simple reaction (1 known target) takes ~200ms, while multi-choice gamepad reaction (deciding between 4 to 18 buttons) adds 80ms to 150ms of cognitive processing."
    }
  ],
  'pt-br': [
    { q: "O que é tempo de reação e qual é a média humana normal?", a: "É o intervalo entre um estímulo sensorial e a resposta motora. A média visual humana é de ~250 milissegundos (0.25s), enquanto a média auditiva é de ~170ms." },
    { q: "Um tempo de reação de 200ms é bom? 250ms é ruim?", a: "200ms é excelente (top 15% da população). 250ms é a média exata. Menos de 180ms é nível profissional de e-sports, e acima de 280ms indica fadiga ou atraso de tela." },
    { q: "Qual a diferença entre reflexo infantil e de adultos?", a: "Crianças de 12 anos têm média de 240ms–270ms. O ápice dos reflexos humanos ocorre entre 18 e 24 anos (190ms–220ms), quando as vias neurais atingem maturidade." },
    { q: "É possível melhorar o tempo de reação com treino?", a: "Sim! Treinos regulares de reflexo, monitores de 144Hz+, boa hidratação e sono adequado melhoram a consistência em 15ms a 35ms." },
    { q: "Por que a resposta ao som é mais rápida que à visão?", a: "O som chega ao cérebro pelo nervo auditivo em 8–10ms, enquanto a retina leva 20–40ms para processar a luz antes de enviar o sinal ao córtex visual." },
    { q: "O que é a Lei de Hick e reação de múltipla escolha?", a: "A Lei de Hick afirma que o tempo de decisão aumenta com o número de opções. Reagir a 1 luz leva ~200ms; escolher entre 18 botões adiciona 80ms–150ms de processamento mental." }
  ],
  tr: [
    { q: "Reaksiyon süresi nedir ve normal insan ortalaması kaçtır?", a: "Duyusal bir uyarana verilen fiziksel tepki süresidir. Ortalama insan görsel tepki süresi ~250ms, işitsel tepki süresi ise ~170ms'dir." },
    { q: "200ms reaksiyon süresi iyi midir?", a: "Evet, 200ms insan reflekslerinin en iyi %15'lik dilimindedir. 180ms altı espor oyuncusu seviyesidir." },
    { q: "Yaş reaksiyon süresini nasıl etkiler?", a: "İnsan refleksleri 18-24 yaş aralığında zirveye ulaşır (190ms-220ms). 12 yaşındaki bireylerde ortalama 240ms-270ms arasındadır." },
    { q: "Refleksler antrenmanla geliştirilebilir mi?", a: "Evet, 144Hz+ yüksek yenileme hızlı monitörler, düzenli uyku ve refleks çalışmaları tepki süresini 15-35ms iyileştirebilir." },
    { q: "Ses uyarısına verilen tepki neden ışıktan daha hızlıdır?", a: "Ses sinyalleri işitme sinirleriyle beyne 8-10ms'de ulaşırken, retinada ışığın işlenmesi 20-40ms sürer." },
    { q: "Hick Yasası nedir?", a: "Karar verilecek seçenek sayısı arttıkça tepki süresinin uzadığını belirten kuraldır. Çoktan seçmeli kararlar 80-150ms ek süre gerektirir." }
  ],
  ar: [
    { q: "ما هو زمن الاستجابة ورد الفعل وما هو المعدل البشري الطبيعي؟", a: "هو الوقت المستغرق بين رؤية أو سماع المثير وبدء الحركة العضلية. المعدل البشري البصري الطبيعي هو ~250 مللي ثانية، والصوتي ~170 مللي ثانية." },
    { q: "هل سرعة 200 مللي ثانية تعتبر ممتازة؟", a: "نعم، 200ms تضعك ضمن أسرع 15% من البشر. أقل من 180ms هو مستوى أبطال العالم والرياضات الإلكترونية." },
    { q: "في أي عمر تكون سرعة رد الفعل في ذروتها؟", a: "تبلغ الانعكاسات البصرية ذروتها بين سن 18 و 24 عاماً بمعدل 190ms–220ms بفضل اكتمال نضج المسارات العصبية." },
    { q: "هل يمكن تسريع رد الفعل بالتدريب؟", a: "نعم، استخدام شاشات 144Hz+ والنوم الكافي والتدريب اليومي يحسن سرعة الاستجابة بما بين 15 و 35 مللي ثانية." },
    { q: "لماذا الاستجابة للصوت أسرع من الضوء؟", a: "لأن الإشارة الصوتية تصل لجذع المخ في 8–10ms، بينما تستغرق شبكية العين 20–40ms لتحويل الضوء لإشارات عصبية." },
    { q: "ما هو قانون هيك Hick's Law؟", a: "ينص على أن زمن اتخاذ القرار يزداد كلما زادت الخيارات المعروضة، حيث يضيف الاختيار بين أزرار متعددة 80-150 مللي ثانية." }
  ],
  es: [
    { q: "¿Qué es el tiempo de reacción y cuál es el promedio humano?", a: "Es el tiempo transcurrido entre un estímulo sensorial y la respuesta motora. La media visual humana es de ~250ms y la auditiva de ~170ms." },
    { q: "¿Un tiempo de 200ms es bueno? ¿250ms es lento?", a: "200ms es excelente (top 15%). 250ms es el promedio exacto. Menos de 180ms es nivel profesional de e-sports." },
    { q: "¿A qué edad son más rápidos los reflejos?", a: "Los reflejos visuales alcanzan su pico entre los 18 y 24 años (190ms–220ms) gracias a la maduración sináptica completa." },
    { q: "¿Se pueden mejorar los reflejos con entrenamiento?", a: "¡Sí! El entrenamiento regular, monitores de 144Hz+, hidratación y descanso adecuado mejoran el tiempo en 15ms a 35ms." },
    { q: "¿Por qué reaccionamos más rápido al sonido que a la luz?", a: "El sonido viaja por el nervio auditivo en 8–10ms, mientras la retina requiere 20–40ms para procesar la luz." },
    { q: "¿Qué es la Ley de Hick?", a: "Establece que el tiempo de reacción aumenta con el número de opciones. Elegir entre varios botones suma 80ms–150ms de procesamiento mental." }
  ],
  ja: [
    { q: "反応速度とは何ですか？人間の平均値は？", a: "感覚刺激を受けてから筋肉が動くまでの経過時間です。視覚刺激の平均は約250ミリ秒（0.25秒）、聴覚刺激は約170ミリ秒です。" },
    { q: "200msは速いですか？遅いですか？", a: "200msは上位15%に入る優れた数値です。180ms以下はプロゲーマーやF1ドライバー級の反射神経です。" },
    { q: "反射神経が最も優れている年齢層は？", a: "神経伝達速度が成熟する18歳〜24歳がピーク（平均190ms〜220ms）となります。" },
    { q: "トレーニングで反応速度は向上しますか？", a: "はい。144Hz以上のゲーミングモニター、適切な睡眠、反復練習で15ms〜35ms短縮可能です。" },
    { q: "なぜ光よりも音の方が反応が速いのですか？", a: "聴覚信号は8〜10msで脳幹に届きますが、網膜の光電変換には20〜40msの遅延が生じるためです。" },
    { q: "ヒックの法則（Hick's Law）とは？", a: "選択肢の数が増えるほど判断時間が長くなる法則です。複数ボタンの選択判断には80ms〜150msの認知時間が加算されます。" }
  ],
  fr: [
    { q: "Qu'est-ce que le temps de réaction et quelle est la moyenne humaine ?", a: "C'est la durée entre un stimulus et la réponse motrice. La moyenne visuelle humaine est de ~250ms, et auditive de ~170ms." },
    { q: "Un temps de réaction de 200ms est-il bon ?", a: "200ms est un excellent score (top 15%). Moins de 180ms est le niveau des pilotes professionnels et joueurs d'e-sport." },
    { q: "À quel âge les réflexes sont-ils les plus rapides ?", a: "Les réflexes atteignent leur vitesse maximale entre 18 et 24 ans (190ms–220ms) avec la pleine maturité synaptique." },
    { q: "Peut-on améliorer ses réflexes avec l'entraînement ?", a: "Oui ! Un écran 144Hz+, un bon sommeil et un entraînement régulier permettent de gagner 15ms à 35ms." },
    { q: "Pourquoi réagit-on plus vite au son qu'à la lumière ?", a: "Le son atteint le cerveau en 8–10ms, alors que la rétine met 20–40ms pour convertir la lumière en signaux nerveux." },
    { q: "Qu'est-ce que la loi de Hick ?", a: "Elle stipule que le temps de décision augmente avec le nombre de choix. Choisir entre plusieurs boutons ajoute 80ms à 150ms de calcul mental." }
  ],
  de: [
    { q: "Was ist Reaktionszeit und was ist der menschliche Durchschnitt?", a: "Die Zeitspanne zwischen Reiz und Muskelbewegung. Der visuelle Durchschnitt liegt bei ~250ms, akustisch bei ~170ms." },
    { q: "Sind 200ms Reaktionszeit gut?", a: "Ja, 200ms gehört zu den besten 15% der Bevölkerung. Unter 180ms entspricht Profi-Athleten und E-Sportlern." },
    { q: "In welchem Alter sind die Reflexe am schnellsten?", a: "Die Reaktionsgeschwindigkeit erreicht ihren Höhepunkt zwischen 18 und 24 Jahren (190ms–220ms)." },
    { q: "Kann man die Reaktionszeit trainieren?", a: "Ja, durch 144Hz+ Monitore, ausreichend Schlaf und gezieltes Reflex-Training um 15ms bis 35ms." },
    { q: "Warum reagiert das Gehirn auf Töne schneller als auf Licht?", a: "Tonsignale erreichen das Gehirn in 8–10ms, während die Netzhaut 20–40ms für die Umwandlung von Licht benötigt." },
    { q: "Was besagt das Hicksche Gesetz?", a: "Es besagt, dass die Entscheidungszeit mit der Anzahl der Optionen steigt. Mehrfachauswahl-Tasten benötigen 80–150ms mehr Bedenkzeit." }
  ],
  pt: [
    { q: "O que é o tempo de reação e qual é a média humana?", a: "É o tempo decorrido entre um estímulo e a resposta física. A média visual é de ~250ms e a auditiva de ~170ms." },
    { q: "Um tempo de 200ms é bom?", a: "200ms é excelente (top 15%). Menos de 180ms é nível de atletas profissionais e pilotos." },
    { q: "Em que idade os reflexos atingem o pico?", a: "Entre os 18 e 24 anos (190ms–220ms), quando as vias neurais atingem a maturidade fisiológica." },
    { q: "É possível melhorar os reflexos com treino?", a: "Sim! Monitores de 144Hz+, descanso adequado e treino constante reduzem o tempo em 15ms a 35ms." },
    { q: "Por que razão reagimos mais depressa ao som?", a: "O som chega ao cérebro em 8–10ms, enquanto a retina demora 20–40ms a processar a luz." },
    { q: "O que é a Lei de Hick?", a: "Determina que o tempo de reação aumenta com o número de escolhas. Decidir entre vários botões acrescenta 80ms a 150ms de esforço mental." }
  ],
  ko: [
    { q: "반응속도란 무엇이며 인간의 평균치는 얼마인가요?", a: "자극을 감지하고 신체 근육이 반응할 때까지 걸리는 시간입니다. 인간의 평균 시각 반응속도는 ~250ms(0.25초), 청각 반응속도는 ~170ms입니다." },
    { q: "200ms 반응속도는 빠른 편인가요?", a: "네, 200ms는 상위 15%에 속하는 매우 우수한 수치입니다. 180ms 미만은 프로게이머 및 F1 드라이버 수준입니다." },
    { q: "반응속도가 가장 빠른 전성기 나이는?", a: "신경계가 완전히 성숙하는 만 18세~24세 사이에 시각 반사신경이 최고조(평균 190ms~220ms)에 달합니다." },
    { q: "훈련을 통해 반응속도를 단축할 수 있나요?", a: "네! 144Hz 이상 고주사율 모니터, 충분한 수면, 규칙적인 반사 훈련으로 15ms~35ms를 단축할 수 있습니다." },
    { q: "빛보다 소리에 더 빠르게 반응하는 이유는?", a: "청각 신호는 8~10ms 만에 뇌간에 도달하지만, 망막의 광전기 변환 과정은 20~40ms의 생리학적 지연이 발생하기 때문입니다." },
    { q: "힉의 법칙(Hick's Law)이란 무엇인가요?", a: "선택해야 할 자극의 수가 많을수록 반응 시간이 길어진다는 법칙으로, 다중 버튼 선택 시 80ms~150ms의 인지 지연이 추가됩니다." }
  ],
  it: [
    { q: "Cos'è il tempo di reazione e qual è la media umana?", a: "È il tempo tra uno stimolo e la risposta muscolare. La media visiva umana è di ~250ms, mentre quella uditiva è di ~170ms." },
    { q: "Un tempo di reazione di 200ms è buono?", a: "200ms è un valore eccellente (top 15%). Sotto i 180ms è livello professionistico di e-sport e motorsport." },
    { q: "A che età i riflessi sono più veloci?", a: "I riflessi visivi raggiungono il picco tra i 18 e i 24 anni (190ms–220ms) con la piena maturazione sinaptica." },
    { q: "Si possono migliorare i riflessi con l'allenamento?", a: "Sì! Monitor a 144Hz+, sonno adeguato ed esercizio costante migliorano la reattività di 15ms-35ms." },
    { q: "Perché reagiamo più velocemente al suono che alla luce?", a: "Il suono raggiunge il cervello in 8–10ms, mentre la retina impiega 20–40ms per processare la luce." },
    { q: "Cos'è la Legge di Hick?", a: "Afferma che il tempo di reazione aumenta con il numero di opzioni. Scegliere tra diversi tasti aggiunge 80ms–150ms di tempo decisionale." }
  ]
};
