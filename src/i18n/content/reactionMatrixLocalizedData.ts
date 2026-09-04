import type { SupportedLang } from '../languages';
import type { ReflexRankingTier } from './reactionMatrixContent';

export const localizedRankingTiers: Record<SupportedLang, ReflexRankingTier[]> = {
  en: [
    { time: "< 160ms", tier: "Tier 0 // God-Tier", category: "Esports Pros & Fighter Pilots", desc: "Top 0.1% human neural latency. Near theoretical human biological limits for visual perception and synaptic motor triggering.", color: "text-[#0fa336]" },
    { time: "160ms – 190ms", tier: "Tier 1 // Elite Reflex", category: "Formula 1 Drivers & Pro Gamers", desc: "Exceptional visual stimulus reaction speed. Common among professional F1 drivers off starting lights and competitive tactical shooter pros.", color: "text-m-blue-light" },
    { time: "190ms – 230ms", tier: "Tier 2 // Fast Gamer", category: "Dedicated Gamers & Young Adults", desc: "Well above average human reflexes. Indicates high cognitive alertness, optimal sleep, and low hardware display latency.", color: "text-m-blue-dark" },
    { time: "230ms – 270ms", tier: "Tier 3 // Human Average", category: "Median Population Benchmark", desc: "The median human visual reaction benchmark on standard 60Hz consumer displays. Represents typical everyday reflex performance.", color: "text-[#f4b400]" },
    { time: "> 270ms", tier: "Tier 4 // Relaxed / Lagged", category: "Casual / Latency Affected", desc: "Reflects physical fatigue, eye strain, wireless controller interference, or high display input lag (TVs without Game Mode enabled).", color: "text-m-red" }
  ],
  'pt-br': [
    { time: "< 160ms", tier: "Tier 0 // Divino", category: "Pro Players & Pilotos de Caça", desc: "Top 0.1% da latência neural humana. Limite biológico quase teórico para percepção visual e disparo motor sináptico.", color: "text-[#0fa336]" },
    { time: "160ms – 190ms", tier: "Tier 1 // Reflexo de Elite", category: "Pilotos de F1 & Gamers Pro", desc: "Velocidade de reação excepcional. Comum em pilotos de Fórmula 1 e jogadores profissionais de FPS tático.", color: "text-m-blue-light" },
    { time: "190ms – 230ms", tier: "Tier 2 // Gamer Rápido", category: "Gamers Dedicados & Jovens", desc: "Bem acima da média populacional. Indica alta atenção cognitiva, sono em dia e baixa latência de tela.", color: "text-m-blue-dark" },
    { time: "230ms – 270ms", tier: "Tier 3 // Média Humana", category: "Média Global da População", desc: "A média exata da reação visual humana em telas comuns de 60Hz. Representa os reflexos cotidianos típicos.", color: "text-[#f4b400]" },
    { time: "> 270ms", tier: "Tier 4 // Atrasado / Cansado", category: "Casual / Afetado por Lag", desc: "Reflete cansaço físico, fadiga ocular, interferência wireless ou alta latência de entrada da TV/monitor.", color: "text-m-red" }
  ],
  tr: [
    { time: "< 160ms", tier: "Kademe 0 // İlah Seviye", category: "Esporcular & Savaş Pilotları", desc: "İnsan sinirsel iletiminin en iyi %0.1'i. Görsel algı ve motor tetikleme için teorik biyolojik sınırlara yakındır.", color: "text-[#0fa336]" },
    { time: "160ms – 190ms", tier: "Kademe 1 // Elit Refleks", category: "F1 Pilotları & Pro Oyuncular", desc: "Olağanüstü görsel tepki hızı. F1 pilotlarında ve profesyonel FPS oyuncularında yaygın görülür.", color: "text-m-blue-light" },
    { time: "190ms – 230ms", tier: "Kademe 2 // Hızlı Oyuncu", category: "Düzenli Oyuncular & Gençler", desc: "İnsan ortalamasının oldukça üzerinde. Yüksek odaklanma ve düşük ekran gecikmesini gösterir.", color: "text-m-blue-dark" },
    { time: "230ms – 270ms", tier: "Kademe 3 // İnsan Ortalaması", category: "Genel Nüfus Ortalaması", desc: "Standart 60Hz ekranlarda ölçülen medyan insan görsel tepki süresi. Tipik günlük performansı temsil eder.", color: "text-[#f4b400]" },
    { time: "> 270ms", tier: "Kademe 4 // Yavaş / Gecikmeli", category: "Gündelik / Yorgunluk Etkili", desc: "Fiziksel yorgunluk, göz kuruluğu, kablosuz sinyal paraziti veya yüksek ekran gecikmesine işaret eder.", color: "text-m-red" }
  ],
  ar: [
    { time: "< 160ms", tier: "المستوى 0 // خارق للطبيعة", category: "محترفو الألعاب وطيارو المقاتلات", desc: "ضمن أسرع 0.1% من البشر. يقترب من الحدود البيولوجية النظرية للإدراك البصري العصبي.", color: "text-[#0fa336]" },
    { time: "160ms – 190ms", tier: "المستوى 1 // رد فعل نخبوي", category: "سائقو الفورمولا 1 والمحترفون", desc: "سرعة استجابة بصرية استثنائية تميز سائقي F1 المحترفين عند انطفاء أضواء الانطلاق ولعيبة التصويب.", color: "text-m-blue-light" },
    { time: "190ms – 230ms", tier: "المستوى 2 // لاعب سريع", category: "اللاعبون المتمرسون والشباب", desc: "أعلى بكثير من المعدل البشري العام، ويعكس تركيزاً ذهنياً عالياً وشاشات ذات استجابة منخفضة.", color: "text-m-blue-dark" },
    { time: "230ms – 270ms", tier: "المستوى 3 // المعدل البشري", category: "متوسط المجتمع العام", desc: "المعدل الطبيعي العام للإنسان على شاشات 60Hz العادية ويمثل الأداء اليومي المعتاد.", color: "text-[#f4b400]" },
    { time: "> 270ms", tier: "المستوى 4 // متأخر أو مجهد", category: "تأثر بالإجهاد وبطء الشاشة", desc: "يشير إلى الإجهاد البدني أو إرهاق العين أو تأخير الإدخال العالي في الشاشات غير المخصصة للألعاب.", color: "text-m-red" }
  ],
  es: [
    { time: "< 160ms", tier: "Nivel 0 // Divino", category: "Pros de Esports y Pilotos de Caza", desc: "Top 0.1% de latencia neuronal. Cerca del límite biológico teórico de percepción visual y respuesta motora.", color: "text-[#0fa336]" },
    { time: "160ms – 190ms", tier: "Nivel 1 // Reflejo Élite", category: "Pilotos de F1 y Gamers Pros", desc: "Velocidad de reacción sobresaliente, habitual en pilotos de F1 en salidas y jugadores de shooters tácticos.", color: "text-m-blue-light" },
    { time: "190ms – 230ms", tier: "Nivel 2 // Gamer Rápido", category: "Gamers Dedicados y Jóvenes", desc: "Muy por encima de la media. Refleja alta agilidad mental, buen descanso y baja latencia de pantalla.", color: "text-m-blue-dark" },
    { time: "230ms – 270ms", tier: "Nivel 3 // Media Humana", category: "Promedio de la Población", desc: "La media exacta de reacción visual en pantallas estándar de 60Hz. Representa el reflejo cotidiano.", color: "text-[#f4b400]" },
    { time: "> 270ms", tier: "Nivel 4 // Relajado / Lento", category: "Casual / Afectado por Lag", desc: "Indica fatiga física, cansancio visual o alto retraso de entrada (pantallas de TV sin Modo Juego).", color: "text-m-red" }
  ],
  ja: [
    { time: "< 160ms", tier: "ランク 0 // 神の領域", category: "プロeスポーツ選手・戦闘機パイロット", desc: "全人類の上位0.1%の神経伝達速度。視覚認識と運動神経の理論的限界値に達しています。", color: "text-[#0fa336]" },
    { time: "160ms – 190ms", tier: "ランク 1 // エリート反射神経", category: "F1ドライバー・プロゲーマー", desc: "極めて優れた視覚反応速度。F1のスタートダッシュや競技FPSのプロ選手に共通する数値です。", color: "text-m-blue-light" },
    { time: "190ms – 230ms", tier: "ランク 2 // 高速ゲーマー", category: "コアゲーマー・若年層", desc: "人間の平均を大きく上回る俊敏さ。高い集中力、十分な睡眠、低遅延ディスプレイ環境を示します。", color: "text-m-blue-dark" },
    { time: "230ms – 270ms", tier: "ランク 3 // 人間平均", category: "一般人口の中央値", desc: "一般的な60Hzモニター環境における標準的な人間の視覚反応速度の中央値です。", color: "text-[#f4b400]" },
    { time: "> 270ms", tier: "ランク 4 // 遅延・疲労状態", category: "カジュアル・遅延の影響大", desc: "身体的な疲労、目の疲れ、ワイヤレス通信の干渉、またはテレビの表示遅延が影響しています。", color: "text-m-red" }
  ],
  fr: [
    { time: "< 160ms", tier: "Rang 0 // Divin", category: "Pros d'Esport & Pilotes de Chasse", desc: "Top 0.1% de latence neuronale humaine. Proche des limites biologiques théoriques de la perception visuelle.", color: "text-[#0fa336]" },
    { time: "160ms – 190ms", tier: "Rang 1 // Réflexe Élite", category: "Pilotes de F1 & Joueurs Pros", desc: "Vitesse de réaction exceptionnelle, courante chez les pilotes de Formule 1 au départ et les joueurs de FPS.", color: "text-m-blue-light" },
    { time: "190ms – 230ms", tier: "Rang 2 // Gamer Rapide", category: "Joueurs Réguliers & Jeunes", desc: "Nettement supérieur à la moyenne. Indique une excellente vivacité d'esprit et un écran à faible latence.", color: "text-m-blue-dark" },
    { time: "230ms – 270ms", tier: "Rang 3 // Moyenne Humaine", category: "Moyenne de la Population", desc: "La médiane humaine sur un écran standard 60Hz. Représente le niveau de réflexe quotidien typique.", color: "text-[#f4b400]" },
    { time: "> 270ms", tier: "Rang 4 // Ralenti / Fatigué", category: "Occasionnel / Impacté par l'Input Lag", desc: "Reflète la fatigue physique, visuelle, ou un input lag élevé sur le téléviseur (sans Mode Jeu).", color: "text-m-red" }
  ],
  de: [
    { time: "< 160ms", tier: "Rang 0 // Göttergleich", category: "E-Sport-Profis & Kampfpiloten", desc: "Top 0,1% menschliche Nervenleitgeschwindigkeit. Nahe an den biologischen Grenzen der Reizwahrnehmung.", color: "text-[#0fa336]" },
    { time: "160ms – 190ms", tier: "Rang 1 // Elite-Reflexe", category: "F1-Piloten & Profi-Gamer", desc: "Außergewöhnliche Reaktionsgeschwindigkeit, typisch für Formel-1-Starts und taktische Shooter-Profis.", color: "text-m-blue-light" },
    { time: "190ms – 230ms", tier: "Rang 2 // Schneller Gamer", category: "Engagierte Spieler & Jugendliche", desc: "Deutlich überdurchschnittlich. Zeigt hohe geistige Wachheit und geringe Monitor-Latenz.", color: "text-m-blue-dark" },
    { time: "230ms – 270ms", tier: "Rang 3 // Menschlicher Schnitt", category: "Median der Bevölkerung", desc: "Der durchschnittliche visuelle Richtwert auf 60Hz-Standardmonitoren im Alltag.", color: "text-[#f4b400]" },
    { time: "> 270ms", tier: "Rang 4 // Ermüdet / Verzögert", category: "Casual / Latenzbeeinträchtigt", desc: "Deutet auf Übermüdung, Augenbelastung oder hohe Eingabeverzögerung des Bildschirms hin.", color: "text-m-red" }
  ],
  pt: [
    { time: "< 160ms", tier: "Tier 0 // Divino", category: "Jogadores Pro & Pilotos de Caça", desc: "Top 0.1% da velocidade neural humana. Perto dos limites biológicos da perceção e disparo motor.", color: "text-[#0fa336]" },
    { time: "160ms – 190ms", tier: "Tier 1 // Reflexo de Elite", category: "Pilotos de F1 & Gamers Pro", desc: "Velocidade de reação extraordinária, comum em pilotos de Fórmula 1 e profissionais de FPS tático.", color: "text-m-blue-light" },
    { time: "190ms – 230ms", tier: "Tier 2 // Gamer Rápido", category: "Gamers Dedicados & Jovens", desc: "Muito acima da média. Indica excelente agilidade mental e baixa latência de ecrã.", color: "text-m-blue-dark" },
    { time: "230ms – 270ms", tier: "Tier 3 // Média Humana", category: "Média Global da População", desc: "A mediana visual humana em ecrãs normais de 60Hz. Representa o desempenho comum diário.", color: "text-[#f4b400]" },
    { time: "> 270ms", tier: "Tier 4 // Atrasado / Cansado", category: "Casual / Afetado por Lag", desc: "Reflete fadiga física, cansaço ocular ou atraso de entrada elevado na televisão/monitor.", color: "text-m-red" }
  ],
  ko: [
    { time: "< 160ms", tier: "0단계 // 신의 반응", category: "e스포츠 프로게이머 & 전투기 조종사", desc: "인간 신경 전달 속도 상위 0.1%. 시각 인지 및 근육 운동 전달의 이론적 생물학적 한계치입니다.", color: "text-[#0fa336]" },
    { time: "160ms – 190ms", tier: "1단계 // 엘리트 반사신경", category: "F1 드라이버 & 최상위 게이머", desc: "F1 출발 신호등 및 전술 FPS 프로게이머들에게서 나타나는 독보적인 시각 반응속도입니다.", color: "text-m-blue-light" },
    { time: "190ms – 230ms", tier: "2단계 // 고속 게이머", category: "하드코어 게이머 & 청년층", desc: "인간 평균을 크게 상회하는 수치로 높은 각성 상태, 충분한 휴식, 저지연 디스플레이를 나타냅니다.", color: "text-m-blue-dark" },
    { time: "230ms – 270ms", tier: "3단계 // 일반인 평균", category: "전 세계 인구 표준 중앙값", desc: "일반 60Hz 모니터 환경에서 측정되는 표준적인 인간 시각 반응속도 중앙값입니다.", color: "text-[#f4b400]" },
    { time: "> 270ms", tier: "4단계 // 지연 / 피로 누적", category: "캐주얼 / 피로 및 디스플레이 지연", desc: "신체적 피로, 눈의 피로, 무선 신호 간섭 또는 TV 게임 모드 미적용으로 인한 입력 지연 상태입니다.", color: "text-m-red" }
  ],
  it: [
    { time: "< 160ms", tier: "Livello 0 // Divino", category: "Pro Gamer & Piloti Militari", desc: "Top 0.1% della latenza neurale umana. Vicino ai limiti biologici di percezione visiva e riflesso motorio.", color: "text-[#0fa336]" },
    { time: "160ms – 190ms", tier: "Livello 1 // Riflessi d'Élite", category: "Piloti di F1 & Pro Player", desc: "Velocità di reazione eccezionale, tipica dei piloti di F1 allo spegnimento dei semafori e pro negli FPS.", color: "text-m-blue-light" },
    { time: "190ms – 230ms", tier: "Livello 2 // Gamer Veloce", category: "Gamer Dedicati & Giovani", desc: "Molto sopra la media. Indica prontezza mentale, buon riposo e bassa latenza del monitor.", color: "text-m-blue-dark" },
    { time: "230ms – 270ms", tier: "Livello 3 // Media Umana", category: "Mediana della Popolazione", desc: "La media esatta della risposta visiva umana su display standard a 60Hz. Rappresenta i riflessi quotidiani.", color: "text-[#f4b400]" },
    { time: "> 270ms", tier: "Livello 4 // Rallentato / Affaticato", category: "Casual / Influenzato da Lag", desc: "Indica stanchezza fisica, affaticamento visivo o elevato input lag del monitor/TV.", color: "text-m-red" }
  ]
};

export const localizedScienceCards: Record<SupportedLang, Array<{ tag: string; title: string; desc: string }>> = {
  en: [
    { tag: "01 // Cognitive Load", title: "Simple vs. Choice Reaction (Hick's Law)", desc: "Simple visual reaction (reacting to 1 known signal like F1 lights) averages ~200ms. Multi-choice reaction (deciding which button to press) adds 80–150ms of cognitive processing time." },
    { tag: "02 // Sensory Pathways", title: "Auditory Reflex vs. Visual Retinal Lag", desc: "Audio signals reach the brain stem via the cochlear nerve in just 8–10ms, whereas phototransduction in the human retina requires 20–40ms before transmitting to the visual cortex." },
    { tag: "03 // Display Bottlenecks", title: "Monitor Refresh Rate & Input Lag", desc: "A standard 60Hz monitor introduces 16.6ms of frame delay. Upgrading to a 144Hz (6.9ms) or 240Hz (4.1ms) gaming display eliminates up to 12ms of artificial benchmark latency." }
  ],
  'pt-br': [
    { tag: "01 // Carga Cognitiva", title: "Reação Simples vs Escolha (Lei de Hick)", desc: "A reação simples (1 estímulo como luzes de F1) tem média de ~200ms. A reação de múltipla escolha (decidir qual botão apertar) adiciona de 80ms a 150ms de processamento mental." },
    { tag: "02 // Vias Sensoriais", title: "Reflexo Auditivo vs Retiniano", desc: "Sinais de áudio chegam ao cérebro pelo nervo auditivo em 8–10ms, enquanto a retina leva 20–40ms para converter a luz antes de enviar ao córtex visual." },
    { tag: "03 // Atraso de Tela", title: "Taxa de Atualização e Input Lag", desc: "Monitores padrão de 60Hz introduzem 16.6ms de atraso de quadro. Usar telas de 144Hz (6.9ms) ou 240Hz (4.1ms) reduz até 12ms de latência artificial no teste." }
  ],
  tr: [
    { tag: "01 // Bilişsel Yük", title: "Basit ve Çoktan Seçmeli Reaksiyon (Hick Yasası)", desc: "Basit görsel reaksiyon (F1 ışığı gibi tek uyarana tepki) ~200ms sürer. Çoktan seçmeli kararlar (hangi tuşa basılacağını seçmek) 80-150ms zihinsel işleme süresi ekler." },
    { tag: "02 // Duyusal Yollar", title: "İşitsel Refleks ve Retina Gecikmesi", desc: "Ses sinyalleri işitme siniriyle beyin sapına 8-10ms'de ulaşırken, retinada ışığın işlenmesi 20-40ms gecikmeye neden olur." },
    { tag: "03 // Ekran Engelleri", title: "Monitör Yenileme Hızı ve Gecikme", desc: "Standart 60Hz monitörler 16.6ms kare gecikmesi yaratır. 144Hz (6.9ms) veya 240Hz (4.1ms) panellere geçmek 12ms'ye kadar yapay gecikmeyi yok eder." }
  ],
  ar: [
    { tag: "01 // المعالجة الذهنية", title: "الاستجابة البسيطة مقابل الاختيار المتعدد (قانون هيك)", desc: "الاستجابة البسيطة لمثير واحد (مثل إشارات F1) تستغرق ~200ms، بينما يضيف اتخاذ القرار بين عدة أزرار 80-150ms من التفكير العصبي." },
    { tag: "02 // المسارات العصبية", title: "رد الفعل السمعي مقابل تأخير شبكية العين", desc: "تصل الإشارات الصوتية لجذع المخ في 8-10ms عبر العصب السمعي، بينما تستغرق شبكية العين 20-40ms لمعالجة الضوء." },
    { tag: "03 // شاشات العرض", title: "معدل تحديث الشاشة وتأخير الإدخال", desc: "تضيف شاشات 60Hz تأخيراً بمقدار 16.6ms لكل إطار، بينما الترقية لشاشات 144Hz (6.9ms) أو 240Hz (4.1ms) تقلل ما يصل إلى 12ms من التأخير." }
  ],
  es: [
    { tag: "01 // Carga Cognitiva", title: "Reacción Simple vs Elección (Ley de Hick)", desc: "La reacción simple (un único estímulo como en F1) promedia ~200ms. La elección múltiple (decidir qué botón pulsar) añade 80–150ms de procesamiento mental." },
    { tag: "02 // Vías Sensoriales", title: "Reflejo Auditivo vs Retiniano", desc: "El sonido llega al cerebro por el nervio auditivo en 8–10ms, mientras la retina requiere 20–40ms para convertir la luz antes de transmitirla." },
    { tag: "03 // Retraso de Pantalla", title: "Frecuencia de Actualización del Monitor", desc: "Un monitor estándar de 60Hz añade 16.6ms de retraso por cuadro. Usar 144Hz (6.9ms) o 240Hz (4.1ms) reduce hasta 12ms de latencia artificial." }
  ],
  ja: [
    { tag: "01 // 認知負荷", title: "単純反応 vs 選択反応（ヒックの法則）", desc: "単一の光に反応する単純反応は約200msですが、どのボタンを押すか判断する選択反応では脳内で80〜150msの判断処理時間が追加されます。" },
    { tag: "02 // 感覚経路", title: "聴覚反射 vs 網膜の光電変換遅延", desc: "音声信号は蝸牛神経を通じてわずか8〜10msで脳幹に届きますが、網膜の光処理には20〜40msの生化学的遅延が発生します。" },
    { tag: "03 // 表示遅延", title: "モニターのリフレッシュレートと入力遅延", desc: "一般的な60Hzモニターは1フレーム（16.6ms）の遅延を生みます。144Hz（6.9ms）や240Hz（4.1ms）のゲーミングモニターを使用すると最大12msの測定遅延を短縮できます。" }
  ],
  fr: [
    { tag: "01 // Charge Cognitive", title: "Réaction Simple vs Choix (Loi de Hick)", desc: "La réaction simple (réagir à 1 signal comme en F1) tourne autour de ~200ms. Réagir à un choix multiple de boutons ajoute 80 à 150ms de calcul cérébral." },
    { tag: "02 // Voies Sensorielles", title: "Réflexe Auditif vs Rétinien", desc: "Le son atteint le tronc cérébral en 8–10ms, tandis que la rétine met 20–40ms à convertir la lumière avant transmission au cortex visuel." },
    { tag: "03 // Écran & Input Lag", title: "Taux de Rafraîchissement du Moniteur", desc: "Un écran 60Hz standard impose 16.6ms de délai par image. Passer à un écran 144Hz (6.9ms) ou 240Hz (4.1ms) élimine jusqu'à 12ms de latence artificielle." }
  ],
  de: [
    { tag: "01 // Kognitive Last", title: "Einfache vs. Wahl-Reaktion (Hicksches Gesetz)", desc: "Einfache Reaktionen (z. B. F1-Startampel) dauern ~200ms. Eine Wahl-Reaktion zwischen verschiedenen Tasten erfordert 80–150ms zusätzliche Denkzeit." },
    { tag: "02 // Sinnespfade", title: "Akustischer Reflex vs. Netzhaut-Latenz", desc: "Schallsignale erreichen das Gehirn in 8–10ms, während die Phototransduktion der Netzhaut 20–40ms vor der Signalweiterleitung benötigt." },
    { tag: "03 // Bildschirm-Latenz", title: "Monitor-Bildwiederholrate & Input-Lag", desc: "Ein 60Hz-Monitor erzeugt 16,6ms Bildverzögerung. Ein Gaming-Monitor mit 144Hz (6,9ms) oder 240Hz (4,1ms) spart bis zu 12ms künstliche Latenz ein." }
  ],
  pt: [
    { tag: "01 // Carga Cognitiva", title: "Reação Simples vs Escolha (Lei de Hick)", desc: "A reação simples (1 sinal como luzes de F1) ronda os ~200ms. A reação com escolha entre múltiplos botões adiciona 80ms a 150ms de processamento mental." },
    { tag: "02 // Vias Sensoriais", title: "Reflexo Auditivo vs Atraso Retiniano", desc: "O som atinge o cérebro em 8–10ms, ao passo que a retina necessita de 20–40ms para processar a luz antes de enviar o sinal ao córtex." },
    { tag: "03 // Atraso de Ecrã", title: "Taxa de Atualização e Input Lag", desc: "Monitores vulgares de 60Hz criam 16.6ms de atraso. O uso de monitores de 144Hz (6.9ms) ou 240Hz (4.1ms) elimina até 12ms de latência artificial no teste." }
  ],
  ko: [
    { tag: "01 // 인지 처리 부하", title: "단순 반응 vs 선택 반응 (힉의 법칙)", desc: "단일 신호에 반응하는 단순 반응(F1 소등 등)은 평균 ~200ms이지만, 어떤 버튼을 누를지 결정하는 다중 선택 반응은 80~150ms의 뇌내 연산 지연이 추가됩니다." },
    { tag: "02 // 감각 전달 경로", title: "청각 반사 vs 망막 광전기 변환 지연", desc: "청각 신호는 청신경을 통해 8~10ms 만에 뇌간에 도달하지만, 망막의 빛 감지 및 신호 변환 과정은 20~40ms의 생리학적 지연이 발생합니다." },
    { tag: "03 // 디스플레이 병목", title: "모니터 주사율 및 인풋랙 영향", desc: "일반 60Hz 모니터는 프레임당 16.6ms의 지연을 유발합니다. 144Hz(6.9ms) 또는 240Hz(4.1ms) 게이밍 모니터 사용 시 최대 12ms의 불필요한 지연을 제거할 수 있습니다." }
  ],
  it: [
    { tag: "01 // Carico Cognitivo", title: "Reazione Semplice vs Scelta (Legge di Hick)", desc: "La reazione semplice (1 solo stimolo come in F1) richiede circa ~200ms. La scelta tra diversi pulsanti aggiunge 80–150ms di elaborazione cerebrale." },
    { tag: "02 // Vie Sensoriali", title: "Riflesso Uditivo vs Ritardo Retinico", desc: "Il suono raggiunge il tronco encefalico in 8–10ms, mentre la retina impiega 20–40ms per convertire la luce prima di trasmettere il segnale." },
    { tag: "03 // Latenza del Display", title: "Frequenza di Aggiornamento del Monitor", desc: "Un monitor standard a 60Hz genera 16.6ms di ritardo per fotogramma. Passare a 144Hz (6.9ms) o 240Hz (4.1ms) elimina fino a 12ms di latenza artificiale." }
  ]
};

export const localizedTrainingTips: Record<SupportedLang, Array<{ step: string; title: string; desc: string }>> = {
  en: [
    { step: "Tip 01 // Hardware Setup", title: "Wired USB & Monitor Game Mode", desc: "Always connect your controller via direct wired USB to eliminate Bluetooth polling jitter, and ensure your gaming monitor is set to Low Input Lag / Game Mode." },
    { step: "Tip 02 // Neural Focus", title: "Anticipatory Focus & Pre-Tensioning", desc: "Keep your finger lightly pre-tensed over the trigger without actuating it. Psychological readiness and gaze fixation on the lights shave 15–25ms off reaction times." },
    { step: "Tip 03 // Consistency", title: "10-Round Average Benchmark", desc: "Individual runs can fluctuate due to random timing. Always complete 5 to 10 consecutive trials to compute your true median reflex benchmark." }
  ],
  'pt-br': [
    { step: "Dica 01 // Hardware", title: "Conexão USB Direta e Modo Jogo", desc: "Conecte o controle via cabo USB direto para evitar jitter no Bluetooth e ative o 'Modo Jogo' com baixa latência no monitor ou TV." },
    { step: "Dica 02 // Foco Neural", title: "Pré-Tensão e Atenção Visual", desc: "Mantenha o dedo levemente pré-tensionado sobre o gatilho. O foco visual antecipado reduz de 15ms a 25ms o tempo de resposta." },
    { step: "Dica 03 // Consistência", title: "Média de 10 Rodadas", desc: "Resultados individuais variam com o tempo aleatório. Faça sempre de 5 a 10 testes consecutivos para obter sua mediana real." }
  ],
  tr: [
    { step: "İpucu 01 // Donanım", title: "Kablolu USB ve Oyun Modu", desc: "Bluetooth gecikmelerini önlemek için kolu kablolu bağlayın ve monitörünüzde Düşük Giriş Gecikmesi / Oyun Modunu açın." },
    { step: "İpucu 02 // Odaklanma", title: "Parmak Ön Gerilimi ve Görsel Odak", desc: "Parmağınızı tetiğe basmadan hafif gergin tutun. Odaklanmış görsel dikkat reaksiyon süresini 15-25ms kısaltır." },
    { step: "İpucu 03 // İstikrar", title: "10 Turluk Ortalama Ölçümü", desc: "Tek denemeler yanıltıcı olabilir. Gerçek refleks skorunuzu görmek için her zaman 5-10 denemenin medyanını alın." }
  ],
  ar: [
    { tag: "", step: "نصيحة 01 // العتاد", title: "التوصيل السلكي ووضع الألعاب", desc: "قم بتوصيل يد التحكم بكابل USB مباشر لإلغاء أي تذبذب لاسلكي، وتأكد من تفعيل وضع الألعاب (Game Mode) في الشاشة." },
    { tag: "", step: "نصيحة 02 // التركيز", title: "الشد العضلي المسبق والانتباه", desc: "ضع إصبعك على المحفز مع شد عضلي خفيف دون الضغط عليه، فالاستعداد النفسي يوفر 15-25 مللي ثانية من وقت الاستجابة." },
    { tag: "", step: "نصيحة 03 // الدقة", title: "معدل 10 محاولات متتالية", desc: "قد تختلف المحاولات الفردية، احرص دائماً على إكمال 5 إلى 10 محاولات متتالية لحساب المتوسط الحقيقي لسرعتك." }
  ],
  es: [
    { step: "Consejo 01 // Hardware", title: "Conexión USB por Cable y Modo Juego", desc: "Conecta tu mando por cable USB para evitar fluctuaciones por Bluetooth y activa el Modo Juego en tu monitor o televisor." },
    { step: "Consejo 02 // Enfoque Neural", title: "Pre-Tensión Muscular y Concentración", desc: "Mantén el dedo preparado sobre el gatillo sin presionarlo. La atención visual y preparación muscular reducen entre 15ms y 25ms." },
    { step: "Consejo 03 // Consistencia", title: "Promedio de 10 Rondas", desc: "Las rondas individuales fluctúan. Realiza de 5 a 10 pruebas seguidas para calcular tu verdadera puntuación media." }
  ],
  ja: [
    { step: "ポイント 01 // 機材環境", title: "有線USB接続＆ゲームモード設定", desc: "Bluetoothの通信揺らぎを防ぐため有線USBで接続し、モニターを低遅延ゲームモードに設定してください。" },
    { step: "ポイント 02 // 神経集中", title: "指の予備緊張と視覚集中", desc: "トリガーを押し込まないギリギリの状態で指の筋肉を緊張させます。事前の集中により反応速度が15ms〜25ms向上します。" },
    { step: "ポイント 03 // 測定の正確さ", title: "10回連続トライアルの中央値", desc: "1回の試行には偶然のブレが生じます。真の反射神経を計測するために5〜10回の連続計測を行ってください。" }
  ],
  fr: [
    { step: "Conseil 01 // Matériel", title: "Connexion USB Filaire & Mode Jeu", desc: "Branchez votre manette en USB filaire direct pour supprimer le jitter Bluetooth, et activez le Mode Jeu sur votre écran." },
    { step: "Conseil 02 // Préparation", title: "Pré-Tension Musculaire & Focalisation", desc: "Gardez votre doigt pré-tendu sur la gâchette sans l'enfoncer. L'anticipation visuelle fait gagner 15 à 25ms." },
    { step: "Conseil 03 // Régularité", title: "Moyenne sur 10 Essais", desc: "Les scores individuels varient. Réalisez toujours 5 à 10 essais consécutifs pour calculer votre médiane réelle." }
  ],
  de: [
    { step: "Tipp 01 // Hardware-Setup", title: "Kabelgebundenes USB & Gaming-Modus", desc: "Nutzen Sie eine direkte USB-Kabelverbindung zur Vermeidung von Bluetooth-Jitter und aktivieren Sie den Gaming-Modus am Monitor." },
    { step: "Tipp 02 // Mentale Vorbereitung", title: "Muskelvorspannung & Blickfokus", desc: "Halten Sie den Finger leicht vorgespannt auf dem Trigger. Gezielter Blickfokus spart 15–25ms Reaktionszeit ein." },
    { step: "Tipp 03 // Genauigkeit", title: "10-Runden-Durchschnitt", desc: "Einzelne Versuche schwanken. Führen Sie 5 bis 10 Durchgänge durch, um Ihren verlässlichen Medianwert zu ermitteln." }
  ],
  pt: [
    { step: "Dica 01 // Hardware", title: "Ligação USB por Cabo e Modo de Jogo", desc: "Ligue o comando por cabo USB para eliminar variações no Bluetooth e ative o Modo de Jogo com baixa latência no monitor." },
    { step: "Dica 02 // Foco Neural", title: "Pré-Tensão Muscular nos Dedos", desc: "Mantenha o dedo ligeiramente pré-tensionado sobre o gatilho sem o premir. O foco visual antecipado reduz 15ms a 25ms." },
    { step: "Dica 03 // Consistência", title: "Média de 10 Tentativas", desc: "Resultados isolados podem variar. Faça sempre 5 a 10 tentativas consecutivas para calcular o seu valor mediano real." }
  ],
  ko: [
    { step: "팁 01 // 하드웨어 환경", title: "유선 USB 직결 및 모니터 게임 모드", desc: "블루투스 전송 지연을 방지하기 위해 유선 USB로 연결하고 모니터의 로우 인풋랙 / 게임 모드를 활성화하세요." },
    { step: "팁 02 // 신경 집중", title: "손가락 근육 사전 긴장 및 시각 집중", desc: "트리거를 누르기 직전 상태로 손가락 근육을 가볍게 사전 긴장시키면 반응 시간을 15ms~25ms 단축할 수 있습니다." },
    { step: "팁 03 // 측정 일관성", title: "10회 연속 측정 중앙값 산출", desc: "단일 시도는 타이밍 편차가 발생할 수 있습니다. 5회에서 10회 연속 측정을 완료하여 본인의 실제 중앙값을 확인하세요." }
  ],
  it: [
    { step: "Consiglio 01 // Hardware", title: "Connessione USB Cablata e Modalità Gioco", desc: "Collega il controller via cavo USB diretto per eliminare il jitter Bluetooth e attiva la Modalità Gioco a bassa latenza sul monitor." },
    { step: "Consiglio 02 // Focus Mentale", title: "Pre-Tensione Muscolare delle Dita", desc: "Mantieni il dito leggermente pre-teso sul grilletto senza premerlo. La prontezza visiva fa guadagnare 15–25ms sui riflessi." },
    { step: "Consiglio 03 // Precisione", title: "Media su 10 Prove Consecutive", desc: "I singoli tentativi possono oscillare. Completa sempre da 5 a 10 prove per calcolare la tua vera mediana riflessa." }
  ]
};
