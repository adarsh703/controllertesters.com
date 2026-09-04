import type { SupportedLang } from '../languages';
import type { CircularityTier } from './stickDriftContent';

export const localizedCircularityTiers: Record<SupportedLang, CircularityTier[]> = {
  en: [
    { range: "0.0% – 5.0%", grade: "Flawless // Hall Effect & Esports Spec", desc: "Exceptional spherical boundary accuracy with zero deadzone requirement. Typical of factory-calibrated Hall Effect magnetic joysticks (TMR / Hall sensors).", statusColor: "text-[#0fa336]" },
    { range: "5.0% – 12.0%", grade: "Good // Standard OEM Factory Spec", desc: "Standard factory tolerance on brand-new official controllers (DualSense, Xbox Wireless, Switch Pro). Normal in-game deadzones (5–8%) absorb this completely.", statusColor: "text-m-blue-light" },
    { range: "12.0% – 18.0%", grade: "Moderate Wear // Noticeable Deadzone Needed", desc: "Potentiometer carbon track friction wear is present. You may notice subtle slow-turn in FPS games unless in-game deadzone is raised to 10%–12%.", statusColor: "text-[#f4b400]" },
    { range: "> 18.0%", grade: "Severe Drift // Hardware Repair Required", desc: "Significant physical gating clipping, severe mechanical spring fatigue, or graphite dust buildup. Requires potentiometer flush or joystick module replacement.", statusColor: "text-m-red" }
  ],
  'pt-br': [
    { range: "0.0% – 5.0%", grade: "Impecável // Padrão Hall Effect e Esports", desc: "Precisão esférica excepcional sem necessidade de deadzone. Típico de analógicos magnéticos Hall Effect e TMR calibrados de fábrica.", statusColor: "text-[#0fa336]" },
    { range: "5.0% – 12.0%", grade: "Bom // Padrão Oficial de Fábrica", desc: "Tolerância padrão em controles originais novos (DualSense, Xbox Wireless, Switch Pro). Deadzones padrão dos jogos (5% a 8%) absorvem totalmente.", statusColor: "text-m-blue-light" },
    { range: "12.0% – 18.0%", grade: "Desgaste Moderado // Deadzone Necessária", desc: "Desgaste por atrito nas trilhas de carbono. Pode causar mira lenta em jogos de tiro a menos que a deadzone seja aumentada para 10%–12%.", statusColor: "text-[#f4b400]" },
    { range: "> 18.0%", grade: "Drift Severo // Reparo Necessário", desc: "Distorção física acentuada, mola frouxa ou acúmulo severo de pó de carbono. Requer limpeza com álcool isopropílico ou troca do analógico.", statusColor: "text-m-red" }
  ],
  tr: [
    { range: "%0.0 – %5.0", grade: "Kusursuz // Hall Effect ve Espor Standardı", desc: "Sıfır ölü bölge gereksinimiyle olağanüstü dairesel doğruluk. Fabrika kalibrasyonlu Hall Effect ve TMR manyetik analoglara özgüdür.", statusColor: "text-[#0fa336]" },
    { range: "%5.0 – %12.0", grade: "İyi // Standart Fabrika Toleransı", desc: "Sıfır resmi kollardaki (DualSense, Xbox, Switch Pro) standart fabrika toleransı. Oyun içi %5-%8 ölü bölge bunu tamamen dengeler.", statusColor: "text-m-blue-light" },
    { range: "%12.0 – %18.0", grade: "Orta Aşınma // Ölü Bölge Artırılmalı", desc: "Potansiyometre karbon yollarında aşınma mevcuttur. FPS oyunlarında hafif yavaş dönme fark edilebilir, ölü bölgeyi %10-%12 yapın.", statusColor: "text-[#f4b400]" },
    { range: "> %18.0", grade: "Şiddetli Drift // Donanım Onarımı Gerekir", desc: "Belirgin mekanik yay yorgunluğu veya aşırı grafit tozu birikimi. Potansiyometre temizliği veya modül değişimi gerektirir.", statusColor: "text-m-red" }
  ],
  ar: [
    { range: "0.0% – 5.0%", grade: "مثالي // معيار Hall Effect والبطولات", desc: "دقة دائرية استثنائية دون الحاجة لأي منطقة ميتة. مميز لحساسات Hall Effect و TMR المغناطيسية الحديثة.", statusColor: "text-[#0fa336]" },
    { range: "5.0% – 12.0%", grade: "جيد // معيار المصنع الرسمي", desc: "نسبة التفاوت الطبيعية لأذرع التحكم الجديدة (DualSense و Xbox و Switch Pro)، يمتصها الـ Deadzone الافتراضي للألعاب (5%-8%).", statusColor: "text-m-blue-light" },
    { range: "12.0% – 18.0%", grade: "تآكل متوسط // يتطلب زيادة Deadzone", desc: "تآكل في مسارات الكربون الاحتكاكية، قد تلاحظ حركة بطيئة في ألعاب التصويب ما لم ترفع الـ Deadzone إلى 10%-12%.", statusColor: "text-[#f4b400]" },
    { range: "> 18.0%", grade: "درفت حاد // يتطلب صيانة عتادية", desc: "تشوه ميكانيكي حاد في السبرينغ أو تراكم كثيف لغبار الكربون، يتطلب تنظيف المقاومة أو استبدال وحدة الأنالوج بالكامل.", statusColor: "text-m-red" }
  ],
  es: [
    { range: "0.0% – 5.0%", grade: "Impecable // Estándar Hall Effect y Esports", desc: "Precisión esférica excepcional sin necesidad de zona muerta. Típico de joysticks magnéticos Hall Effect y TMR de fábrica.", statusColor: "text-[#0fa336]" },
    { range: "5.0% – 12.0%", grade: "Bueno // Tolerancia Estándar de Fábrica", desc: "Tolerancia estándar en mandos oficiales nuevos (DualSense, Xbox, Switch Pro). Las zonas muertas por defecto (5% a 8%) lo absorben.", statusColor: "text-m-blue-light" },
    { range: "12.0% – 18.0%", grade: "Desgaste Moderado // Requiere Zona Muerta", desc: "Desgaste en las pistas de carbono. Puede provocar giros lentos en juegos de disparos a menos que subas la zona muerta al 10%–12%.", statusColor: "text-[#f4b400]" },
    { range: "> 18.0%", grade: "Drift Severo // Reparación Necesaria", desc: "Deformación física grave o acumulación de polvo de grafito. Requiere limpieza con alcohol isopropílico o cambio de módulo.", statusColor: "text-m-red" }
  ],
  ja: [
    { range: "0.0% – 5.0%", grade: "極めて高精度 // ホール効果・eスポーツ規格", desc: "デッドゾーン不要の完璧な円形度。工場出荷時に調整されたホール効果・TMR磁気センサースティックに特有です。", statusColor: "text-[#0fa336]" },
    { range: "5.0% – 12.0%", grade: "良好 // メーカー純正品の標準公差", desc: "新品の純正コントローラー（DualSense、Xbox、Switch Pro）の標準的な許容誤差。ゲーム内デッドゾーン（5〜8%）で完全に相殺されます。", statusColor: "text-m-blue-light" },
    { range: "12.0% – 18.0%", grade: "中度の摩耗 // デッドゾーンの拡大が必要", desc: "カーボン抵抗体の摩擦摩耗が発生しています。FPSゲームで視点移動の遅延を感じる場合はデッドゾーンを10%〜12%に広げてください。", statusColor: "text-[#f4b400]" },
    { range: "> 18.0%", grade: "重度ドリフト // ハードウェア修理・交換推奨", desc: "機械的バネのへたりやカーボン粉塵の蓄積による重度の入力歪み。無水エタノールでの洗浄またはスティック交換が必要です。", statusColor: "text-m-red" }
  ],
  fr: [
    { range: "0.0% – 5.0%", grade: "Parfait // Norme Hall Effect & Esports", desc: "Précision sphérique exceptionnelle sans aucune deadzone requise. Typique des sticks magnétiques Hall Effect et TMR calibrés d'usine.", statusColor: "text-[#0fa336]" },
    { range: "5.0% – 12.0%", grade: "Bon // Tolérance Standard d'Usine", desc: "Tolérance normale sur les manettes officielles neuves (DualSense, Xbox, Switch Pro). Les zones mortes en jeu (5% à 8%) l'absorbent totalement.", statusColor: "text-m-blue-light" },
    { range: "12.0% – 18.0%", grade: "Usure Modérée // Deadzone Nécessaire", desc: "Usure par friction des pistes en carbone. Peut provoquer une rotation lente en FPS sans deadzone ajustée à 10%–12%.", statusColor: "text-[#f4b400]" },
    { range: "> 18.0%", grade: "Drift Sévère // Réparation Requise", desc: "Déformation mécanique importante ou accumulation de poussière de carbone. Nécessite un nettoyage IPA ou le remplacement du module.", statusColor: "text-m-red" }
  ],
  de: [
    { range: "0.0% – 5.0%", grade: "Makellos // Hall-Effekt & E-Sport-Standard", desc: "Hervorragende Kreisgenauigkeit ohne erforderliche Deadzone. Typisch für werkskalibrierte Hall-Effekt- und TMR-Magnetsticks.", statusColor: "text-[#0fa336]" },
    { range: "5.0% – 12.0%", grade: "Gut // Standard-Werkstoleranz", desc: "Standardtoleranz fabrikneuer Original-Controller (DualSense, Xbox, Switch Pro). Normale In-Game-Deadzones (5–8%) fangen dies vollständig auf.", statusColor: "text-m-blue-light" },
    { range: "12.0% – 18.0%", grade: "Mäßiger Verschleiß // Deadzone Erforderlich", desc: "Abrieb auf den Kohleschleifbahnen vorhanden. Kann in Shootern zu langsamer Drehung führen, sofern die Deadzone nicht auf 10%–12% erhöht wird.", statusColor: "text-[#f4b400]" },
    { range: "> 18.0%", grade: "Schwerer Drift // Reparatur Erforderlich", desc: "Erhebliche mechanische Federermüdung oder Schmutzablagerung. Erfordert eine Reinigung mit Isopropanol oder Modul-Austausch.", statusColor: "text-m-red" }
  ],
  pt: [
    { range: "0.0% – 5.0%", grade: "Impecável // Padrão Hall Effect e Esports", desc: "Precisão esférica de topo sem necessidade de deadzone. Característico de manípulos magnéticos Hall Effect e TMR calibrados de fábrica.", statusColor: "text-[#0fa336]" },
    { range: "5.0% – 12.0%", grade: "Bom // Padrão Oficial de Fábrica", desc: "Tolerância normal em comandos novos (DualSense, Xbox, Switch Pro). As zonas mortas dos jogos (5% a 8%) absorvem por completo.", statusColor: "text-m-blue-light" },
    { range: "12.0% – 18.0%", grade: "Desgaste Moderado // Deadzone Necessária", desc: "Desgaste por fricção nas pistas condutoras. Pode causar mira lenta em FPS a menos que a deadzone seja aumentada para 10%–12%.", statusColor: "text-[#f4b400]" },
    { range: "> 18.0%", grade: "Drift Severo // Reparação Necessária", desc: "Deformação mecânica acentuada ou pó de carbono acumulado. Exige limpeza com álcool isopropílico ou troca do potenciómetro.", statusColor: "text-m-red" }
  ],
  ko: [
    { range: "0.0% – 5.0%", grade: "완벽 // 홀 이펙트 & e스포츠 규격", desc: "데드존 설정이 전혀 필요 없는 완벽한 원형 정밀도. 공장 출고 시 정밀 보정된 홀 센서 및 TMR 자기장 아날로그 스틱에 해당합니다.", statusColor: "text-[#0fa336]" },
    { range: "5.0% – 12.0%", grade: "우수 // 제조사 공식 표준 허용 오차", desc: "새 정품 컨트롤러(듀얼센스, 엑스박스 패드, 프로콘)의 기본 제조 공차 범위. 게임 기본 데드존(5%~8%)으로 완벽히 상쇄됩니다.", statusColor: "text-m-blue-light" },
    { range: "12.0% – 18.0%", grade: "보통 마모 // 데드존 확장 필요", desc: "가변저항 탄소 피막 마모가 진행된 상태입니다. FPS 게임에서 미세한 회전 쏠림이 발생할 수 있으므로 데드존을 10%~12%로 상향하세요.", statusColor: "text-[#f4b400]" },
    { range: "> 18.0%", grade: "심각한 쏠림 // 하드웨어 수리 필요", desc: "스프링 장력 약화 또는 내부 이물질 고착으로 인한 왜곡. 이소프로필 알코올 세척 또는 스틱 모듈 교체가 필요합니다.", statusColor: "text-m-red" }
  ],
  it: [
    { range: "0.0% – 5.0%", grade: "Impeccabile // Standard Hall Effect ed Esports", desc: "Precisione sferica eccezionale senza necessità di deadzone. Tipico degli analogici magnetici Hall Effect e TMR calibrati in fabbrica.", statusColor: "text-[#0fa336]" },
    { range: "5.0% – 12.0%", grade: "Buono // Tolleranza Ufficiale di Fabbrica", desc: "Tolleranza standard su controller originali nuovi (DualSense, Xbox, Switch Pro). Le deadzone di gioco (5%–8%) la assorbono totalmente.", statusColor: "text-m-blue-light" },
    { range: "12.0% – 18.0%", grade: "Usura Moderata // Deadzone Necessaria", desc: "Usura da attrito sulle piste di grafite. Può causare lentezza di rotazione negli FPS a meno di non alzare la deadzone al 10%–12%.", statusColor: "text-[#f4b400]" },
    { range: "> 18.0%", grade: "Drift Grave // Riparazione Richiesta", desc: "Grave deformazione meccanica o accumulo di polvere conduttiva. Richiede pulizia con alcool isopropilico o sostituzione del modulo.", statusColor: "text-m-red" }
  ]
};

export const localizedCauses: Record<SupportedLang, Array<{ title: string; desc: string; tag: string }>> = {
  en: [
    { tag: "01 // Mechanical Friction", title: "Carbon Film Track Wear", desc: "Traditional joysticks use metal contact wipers scraping across resistive carbon tracks. Sprinting (L3/R3 clicks) grinds away microscopic carbon layers over time." },
    { tag: "02 // Spring Tension", title: "Centering Gimbal Spring Fatigue", desc: "The internal steel return spring gradually loses elasticity after millions of directional tilts, preventing the thumbstick from returning to exact mathematical zero (0.00000)." },
    { tag: "03 // Electrical Noise", title: "Graphite Debris & Contact Oxidation", desc: "Shed carbon dust gathers inside the sealed sensor housing, bridging contacts and creating rapid electrical voltage spikes (axis jitter) without user touch." }
  ],
  'pt-br': [
    { tag: "01 // Atrito Mecânico", title: "Desgaste das Trilhas de Carbono", desc: "Analógicos tradicionais usam contato metálico raspando em pistas de carbono. Correr pressionando L3/R3 desgasta as camadas microscópicas com o tempo." },
    { tag: "02 // Tensão da Mola", title: "Fadiga da Mola Central", desc: "A mola de retorno perde elasticidade após milhões de inclinações, impedindo que o analógico volte ao ponto zero matemático (0.00000)." },
    { tag: "03 // Ruído Elétrico", title: "Detritos de Grafite e Oxidação", desc: "O pó liberado pelo atrito se acumula no interior do sensor, causando curtos microscópicos e picos erráticos de voltagem (jitter)." }
  ],
  tr: [
    { tag: "01 // Mekanik Sürtünme", title: "Karbon Film Yolu Aşınması", desc: "Geleneksel joystikler dirençli karbon yolları üzerinde sürtünen metal temas ayakları kullanır. L3/R3 basışları zamanla karbon tabakasını aşındırır." },
    { tag: "02 // Yay Gerginliği", title: "Merkezleme Yayı Yorgunluğu", desc: "İç kısımdaki çelik geri dönüş yayı milyonlarca hareketten sonra esnekliğini kaybeder ve çubuğun tam sıfıra (0.00000) dönmesini engeller." },
    { tag: "03 // Elektriksel Gürültü", title: "Grafit Tozu ve Oksitlenme", desc: "Aşınan karbon tozu sensör yuvasında birikerek temas noktalarında parazit ve ani voltaj sıçramaları (jitter) oluşturur." }
  ],
  ar: [
    { tag: "01 // الاحتكاك الميكانيكي", title: "تآكل مسارات الكربون المقاومة", desc: "تستخدم المقاومات التقليدية أطرافاً معدنية تحتك بمسارات الكربون. الضغط المستمر للجري (L3/R3) يؤدي لتآكل طبقات الكربون تدريجياً." },
    { tag: "02 // ضعف السبرينغ", title: "فقدان مرونة سبرينغ المركز", desc: "يفقد السبرينغ الفولاذي الداخلي مرونته بعد ملايين الحركات، مما يمنع الأنالوج من العودة لنقطة الصفر الرياضية (0.00000)." },
    { tag: "03 // الضوضاء الكهربائية", title: "تراكم غبار الكربون والأكسدة", desc: "يتجمع غبار الكربون المتآكل داخل الحساس مسبباً توصيلاً خاطئاً وتذبذبات سريعة في الإشارة (Jitter) دون لمس الأنالوج." }
  ],
  es: [
    { tag: "01 // Fricción Mecánica", title: "Desgaste de Pistas de Carbono", desc: "Los joysticks tradicionales usan escobillas metálicas sobre pistas de carbono. Esprintar pulsando L3/R3 desgasta las capas microscópicas con el tiempo." },
    { tag: "02 // Tensión del Muelle", title: "Fatiga del Muelle de Centrado", desc: "El muelle interior de retorno pierde elasticidad tras millones de inclinaciones, impidiendo que el stick vuelva al cero matemático (0.00000)." },
    { tag: "03 // Ruido Eléctrico", title: "Residuos de Grafito y Oxidación", desc: "El polvo desprendido se acumula en el sensor, provocando picos de voltaje inestables (jitter) sin que el usuario toque el stick." }
  ],
  ja: [
    { tag: "01 // 機械的摩擦", title: "カーボン抵抗体の摩耗", desc: "従来のジョイスティックは金属ブラシがカーボンレール上を擦る構造です。L3/R3のダッシュ押し込みにより徐々に抵抗層が削れていきます。" },
    { tag: "02 // バネのへたり", title: "センタリングスプリングの劣化", desc: "内部の鋼鉄製復元スプリングが何百万回もの傾倒により弾性を失い、スティックが正確な中心（0.00000）に戻らなくなります。" },
    { tag: "03 // 電気ノイズ", title: "導電性粉塵と接触不良", desc: "削れたカーボン粉塵が密閉センサー内部に溜まり、微小な短絡を起こして触れていないのに座標が激しくブレる（ジッター）原因になります。" }
  ],
  fr: [
    { tag: "01 // Frottement Mécanique", title: "Usure des Pistes en Carbone", desc: "Les joysticks traditionnels utilisent des balais métalliques frottant sur du carbone. Courir en appuyant sur L3/R3 use les couches conductrices." },
    { tag: "02 // Tension du Ressort", title: "Fatigue du Ressort de Rappel", desc: "Le ressort en acier perd son élasticité après des millions de mouvements, empêchant le joystick de revenir au zéro absolu (0.00000)." },
    { tag: "03 // Bruit Électrique", title: "Résidus de Graphite & Oxydation", desc: "La poussière de carbone s'accumule dans le boîtier, créant des micro-courts-circuits et des sursauts erratiques de tension (jitter)." }
  ],
  de: [
    { tag: "01 // Mechanische Reibung", title: "Verschleiß der Kohleschicht", desc: "Klassische Joysticks nutzen Metallschleifer auf Widerstandsbahnen. Sprint-Klicks (L3/R3) schleifen mikroskopische Kohleschichten allmählich ab." },
    { tag: "02 // Federspannung", title: "Ermüdung der Zentrierfeder", desc: "Die innere Stahlfeder verliert nach Millionen Bewegungen an Spannkraft und verhindert das exakte Zurückfedern auf Null (0.00000)." },
    { tag: "03 // Elektrisches Rauschen", title: "Graphitstaub & Kontaktoxidation", desc: "Abgeriebener Kohlenstaub sammelt sich im Sensor, überbrückt Kontakte und erzeugt sprunghafte Spannungsspitzen (Jitter)." }
  ],
  pt: [
    { tag: "01 // Fricção Mecânica", title: "Desgaste das Pistas de Carbono", desc: "Manípulos clássicos usam contactos metálicos que raspam em pistas de carbono. Correr premindo L3/R3 desgasta a camada resistiva com o tempo." },
    { tag: "02 // Tensão da Mola", title: "Perda de Força da Mola Central", desc: "A mola de aço perde elasticidade após milhões de movimentos, impedindo que o manípulo retorne ao centro exato (0.00000)." },
    { tag: "03 // Ruído Elétrico", title: "Detritos de Grafite e Oxidação", desc: "O pó resultante do desgaste acumula-se no sensor, provocando picos de voltagem anómalos (jitter) sem qualquer toque." }
  ],
  ko: [
    { tag: "01 // 기계적 마찰", title: "가변저항 탄소 피막 마모", desc: "전통적인 아날로그 스틱은 금속 와이퍼가 탄소 저항 트랙을 긁는 방식입니다. 전력 질주(L3/R3) 클릭 시 미세한 탄소층이 점차 마모됩니다." },
    { tag: "02 // 스프링 장력 약화", title: "중심 복원 짐벌 스프링 피로", desc: "내부 강철 리턴 스프링이 수백만 번의 기울임을 겪으며 탄성을 잃어 스틱이 수학적 중심(0.00000)으로 완벽히 복귀하지 못합니다." },
    { tag: "03 // 전기적 노이즈", title: "탄소 분진 및 접점 산화", desc: "마모로 떨어진 탄소 가루가 밀폐된 센서 내부에 쌓여 단락을 일으키고, 손을 대지 않아도 좌표가 미세하게 요동치는 지터 노이즈를 유발합니다." }
  ],
  it: [
    { tag: "01 // Attrito Meccanico", title: "Usura Piste di Grafite", desc: "I joystick tradizionali usano lamelle metalliche a sfregamento su piste in carbonio. La corsa premendo L3/R3 consuma i microstrati conduttivi nel tempo." },
    { tag: "02 // Tensione della Molla", title: "Fatica della Molla di Ritorno", desc: "La molla interna in acciaio perde elasticità dopo milioni di inclinazioni, impedendo alla levetta di tornare allo zero matematico (0.00000)." },
    { tag: "03 // Rumore Elettrico", title: "Residui di Grafite e Ossidazione", desc: "La polvere di carbone si accumula nel sensore, creando falsi contatti e sbalzi anomali di tensione (jitter) senza alcun tocco." }
  ]
};

export const localizedFixes: Record<SupportedLang, Array<{ step: string; title: string; desc: string }>> = {
  en: [
    { step: "Step 01 // Software Fix", title: "Adjust In-Game Inner Deadzones", desc: "Open your game controller settings (Apex Legends, Warzone, Fortnite, Rocket League) and increase the Inner Deadzone to match your measured resting drift percentage (e.g. 5%–10%)." },
    { step: "Step 02 // Physical Maintenance", title: "99% Isopropyl Alcohol (IPA) Flush", desc: "Apply 2 drops of high-purity 99% Isopropyl Alcohol directly into the joystick gimbal gap while rotating the stick in full circles. This dissolves carbon grime without leaving moisture." },
    { step: "Step 03 // Permanent Upgrade", title: "Upgrade to Hall Effect Joysticks", desc: "Replace mechanical potentiometers with contactless magnetic Hall Effect or TMR sensors (GigaDrive / Gulikit / Junzen) for lifelong immunity against stick drift." }
  ],
  'pt-br': [
    { step: "Passo 01 // Correção por Software", title: "Ajustar Zonas Mortas nos Jogos", desc: "Abra as configurações do controle nos seus jogos (Apex, Warzone, Fortnite) e aumente a Deadzone Interna para igualar ao desvio medido (ex: 5% a 10%)." },
    { step: "Passo 02 // Manutenção Física", title: "Limpeza com Álcool Isopropílico 99%", desc: "Aplique 2 gotas de álcool isopropílico 99% na fresta da esfera do analógico enquanto gira em 360°. Isso dissolve a sujeira sem deixar umidade." },
    { step: "Passo 03 // Solução Definitiva", title: "Atualização para Hall Effect / TMR", desc: "Substitua os potenciômetros mecânicos por sensores magnéticos sem contato Hall Effect ou TMR para imunidade permanente contra drift." }
  ],
  tr: [
    { step: "Adım 01 // Yazılımsal Çözüm", title: "Oyun İçi Ölü Bölgeleri Ayarlayın", desc: "Oyun içi kumanda ayarlarınızı açın ve İç Ölü Bölge (Inner Deadzone) değerini ölçülen drift oranınıza göre (%5-%10) artırın." },
    { step: "Adım 02 // Fiziksel Bakım", title: "%99 İzopropil Alkol ile Temizlik", desc: "Analog çubuğu dairesel olarak döndürürken yuva aralığına 2 damla %99 izopropil alkol damlatarak karbon kalıntılarını temizleyin." },
    { step: "Adım 03 // Kalıcı Çözüm", title: "Hall Effect Manyetik Modüle Geçiş", desc: "Mekanik potansiyometreleri temassız manyetik Hall Effect veya TMR modülleriyle değiştirerek stick drifte kalıcı son verin." }
  ],
  ar: [
    { step: "الخطوة 01 // الحل البرمجي", title: "ضبط منطقة الموت في الألعاب", desc: "افتح إعدادات يد التحكم في ألعابك (Fortnite, Warzone, Apex) وقم برفع Inner Deadzone لتطابق نسبة الدرفت المقاسة (مثلاً 5% إلى 10%)." },
    { step: "الخطوة 02 // الصيانة المادية", title: "التنظيف بكحول آيزوبروبيلي 99%", desc: "ضع نقطتين من الكحول الآيزوبروبيلي 99% عالي النقاوة داخل فجوة الأنالوج مع تدويره بحركة دائرية كاملة لإذابة الرواسب بأمان." },
    { step: "الخطوة 03 // الحل النهائي", title: "الترقية لحساسات Hall Effect المغناطيسية", desc: "استبدال المقاومات الميكانيكية بحساسات مغناطيسية متطورة بدون تلامس لضمان الحماية الدائمة من درفت الأنالوج مدى الحياة." }
  ],
  es: [
    { step: "Paso 01 // Solución por Software", title: "Ajustar Zonas Muertas en Juegos", desc: "Abre los ajustes de mando en tus juegos (Warzone, Fortnite, Apex) y aumenta la zona muerta interior para igualar el drift medido (ej. 5%–10%)." },
    { step: "Paso 02 // Mantenimiento Físico", title: "Limpieza con Alcohol Isopropílico 99%", desc: "Aplica 2 gotas de alcohol isopropílico al 99% en la holgura del stick mientras lo giras en círculos. Disuelve el grafito sin dejar humedad." },
    { step: "Paso 03 // Solución Definitiva", title: "Actualizar a Joysticks Hall Effect", desc: "Sustituye los potenciómetros mecánicos por sensores magnéticos sin contacto Hall Effect o TMR para una inmunidad permanente al drift." }
  ],
  ja: [
    { step: "手順 01 // ソフトウェア調整", title: "ゲーム内デッドゾーンの拡大", desc: "Apex、Warzone、Fortniteなどの設定画面で、インナーデッドゾーンを測定されたドリフト値（例: 5%〜10%）に合わせて引き上げます。" },
    { step: "手順 02 // 物理メンテナンス", title: "無水エタノール（99% IPA）洗浄", desc: "スティックの隙間に高純度無水エタノールを2滴垂らし、360度回転させて内部のカーボン粉塵を溶かして洗浄します。" },
    { step: "手順 03 // 根本的アップグレード", title: "ホールエフェクト磁気スティック化", desc: "従来の接触式ポテンショメータを非接触のホール効果センサーまたはTMRセンサーに交換し、半永久的にドリフトを防止します。" }
  ],
  fr: [
    { step: "Étape 01 // Solution Logicielle", title: "Ajuster la Zone Morte en Jeu", desc: "Dans les paramètres de vos jeux (Fortnite, Warzone, Apex), augmentez la zone morte intérieure pour égaler le drift mesuré (ex: 5% à 10%)." },
    { step: "Étape 02 // Entretien Physique", title: "Nettoyage à l'Alcool Isopropylique 99%", desc: "Déposez 2 gouttes d'alcool isopropylique 99% dans l'interstice du stick tout en tournant à 360° pour dissoudre les résidus sans humidité." },
    { step: "Étape 03 // Amélioration Définitive", title: "Passer aux Joysticks Hall Effect", desc: "Remplacez les potentiomètres par des capteurs magnétiques sans contact Hall Effect ou TMR pour une immunité à vie contre le stick drift." }
  ],
  de: [
    { step: "Schritt 01 // Software-Lösung", title: "In-Game Deadzones Anpassen", desc: "Öffnen Sie die Controller-Einstellungen im Spiel (Warzone, Fortnite, Apex) und erhöhen Sie die innere Deadzone auf den gemessenen Wert (z. B. 5%–10%)." },
    { step: "Schritt 02 // Physische Wartung", title: "Reinigung mit 99% Isopropanol (IPA)", desc: "Geben Sie 2 Tropfen hochreines Isopropanol in die Gehäuseöffnung des Sticks und drehen Sie ihn kreisförmig, um Kohlenstaub rückstandsfrei zu lösen." },
    { step: "Schritt 03 // Dauerhafte Lösung", title: "Upgrade auf Hall-Effekt-Sticks", desc: "Ersetzen Sie mechanische Potenziometer durch kontaktlose Hall-Effekt- oder TMR-Magnetsensoren für dauerhafte Drift-Immunität." }
  ],
  pt: [
    { step: "Passo 01 // Ajuste de Software", title: "Ajustar Zonas Mortas nos Jogos", desc: "Abra as definições de comando nos jogos (Apex, Fortnite, Warzone) e aumente a Deadzone interior para compensar o desvio medido (ex: 5% a 10%)." },
    { step: "Passo 02 // Manutenção Física", title: "Limpeza com Álcool Isopropílico a 99%", desc: "Aplique 2 gotas de álcool isopropílico a 99% na junta do manípulo enquanto roda em círculos para dissolver o pó condutor com segurança." },
    { step: "Passo 03 // Solução Definitiva", title: "Atualizar para Sensores Hall Effect", desc: "Substitua os potenciómetros mecânicos por sensores magnéticos Hall Effect ou TMR sem contacto para proteção vitalícia contra o drift." }
  ],
  ko: [
    { step: "1단계 // 소프트웨어 해결법", title: "게임 내 내부 데드존 조정", desc: "에이펙스 레전드, 워존, 포트나이트 등 플레이하는 게임의 컨트롤러 설정에서 측정된 쏠림 비율만큼 내부 데드존을 5%~10%로 상향 조정합니다." },
    { step: "2단계 // 물리적 세척", title: "99% 순수 이소프로필 알코올 세척", desc: "스틱 틈새에 고순도 99% IPA 2방울을 떨어뜨리고 스틱을 360도로 여러 번 회전시켜 내부 탄소 찌꺼기를 안전하게 용해 및 세척합니다." },
    { step: "3단계 // 영구적 해결", title: "홀 이펙트(Hall Effect) 센서 교체", desc: "마모가 발생하는 기계식 가변저항을 비접촉 자기장 방식의 Hall Effect 또는 TMR 마그네틱 모듈로 교체하여 스틱 쏠림을 영구 차단합니다." }
  ],
  it: [
    { step: "Passo 01 // Soluzione Software", title: "Regolare la Deadzone nei Giochi", desc: "Apri le impostazioni del controller nei tuoi giochi (Fortnite, Warzone, Apex) e aumenta la deadzone interna pari alla deriva misurata (es: 5%–10%)." },
    { step: "Passo 02 // Manutenzione Fisica", title: "Pulizia con Alcool Isopropilico 99%", desc: "Applica 2 gocce di alcool isopropilico al 99% nella fessura della levetta mentre la ruoti a 360° per sciogliere i residui senza umidità." },
    { step: "Passo 03 // Soluzione Definitiva", title: "Upgrade a Joystick Hall Effect", desc: "Sostituisci i potenziometri meccanici con sensori magnetici senza contatto Hall Effect o TMR per una totale immunità al drift a vita." }
  ]
};
