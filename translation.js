// ============================================================================
// 雙語翻譯系統 - Bilingual Translation System
// ============================================================================

const translations = {
  'zh-TW': {
    // =========================================================================
    // 全域導航列
    // =========================================================================
    nav_home: '首頁',
    nav_natal: '命盤查詢',
    nav_compat: '星座配對',
    nav_horo: '星座運勢',
    nav_quiz: '遊戲測驗',
nav_knowledge: '星座知識',
    nav_blocks: '方塊遊戲',
    nav_home_brand: '星座命理',
    nav_subscribe: '訂閱通知',
    lucky_color_title: '🎨 今日開運顏色',
    lucky_color_for_you: '的專屬開運色',
    // Lucky color
    // =========================================================================
    // 首頁 - index.html
    // =========================================================================
    hero_title: '探索你的星象運命',
    hero_subtitle: '專業星座命理平台 | 遊戲測驗 | 流量變現',
    lucky_title: '🌟 今日幸運星座 TOP 3',
    today_horoscope_title: '📅 今日星座運勢',
    cta_natal: '🪐 查詢命盤',
    cta_compat: '💕 愛情合盤',
    cta_quiz: '🎮 遊戲測驗',
    feature_natal_title: '本命盤查詢',
    feature_natal_desc: '輸入生日時間地點，生成專業星盤。查看太陽、月亮、上升星座及十大行星位置。',
    feature_compat_title: '愛情合盤分析',
    feature_compat_desc: '輸入兩人出生資料，分析星座契合度、相處模式與未來發展建議。',
    feature_horo_title: '星座每日運勢',
    feature_horo_desc: '提供12星座今日/明日/本週/本月運勢分析，包括愛情、事業、財運提示。',
    feature_quiz_title: '星座遊戲測驗',
    feature_quiz_desc: '透過有趣的心理測驗，找出你內心的星座本質。發現你的遊戲人格！',
    feature_wheel_title: '星座幸運轉盤',
    feature_wheel_desc: '旋轉命運之輪，根據你的星座得到今日幸運提示！',
    feature_blocks_title: '方塊遊戲',
    feature_blocks_desc: '考驗反應與速度的方塊消除遊戲，支援鍵盤與觸控操作。',
    feature_knowledge_title: '星座知識庫',
    feature_knowledge_desc: '深入了解12星座的性格特質、幸運物、幸運色、適合職業等完整資訊。',
    feature_affiliate_title: '聯盟行銷',
    feature_affiliate_desc: '推廣連結賺取佣金。分享星座內容賺取額外收入，流量變現最佳工具。',
    tag_hot: '熱門功能',
    tag_new: 'new',
    tag_daily: '每日更新',
    // Blocks game
    blocks_title: '✨ 方塊遊戲',
    blocks_score: '分數',
    blocks_level: '等級',
    blocks_lines: '消除',
    blocks_next: '下一個',
    blocks_start: '開始遊戲',
    blocks_running: '遊戲進行中',
    blocks_pause: '暫停',
    blocks_restart: '重新開始',
    blocks_keys: '鍵盤操作：',
    blocks_key_left: '← →',
    blocks_key_move: '移動',
    blocks_key_rotate: '↑',
    blocks_key_rotate_text: '旋轉',
    blocks_key_down: '↓',
    blocks_key_soft: '軟降',
    blocks_key_drop: 'Space',
    blocks_key_hard: '硬降',
    blocks_key_pause: 'P',
    blocks_key_pause_text: '暫停',
    blocks_gameover: '遊戲結束',
    blocks_final: '最終分數：',
    blocks_retry: '再玩一次',
    blocks_home: '返回首頁',
    blocks_paused: '遊戲暫停',
    blocks_resume: '按下 P 或點擊按鈕繼續',
    blocks_resume_btn: '繼續遊戲',
    blocks_btn_left: '左',
    blocks_btn_right: '右',
    blocks_btn_down: '下',
    blocks_btn_rotate: '轉',
    subscribe_title: '📬 訂閱每日星座運勢',
    subscribe_desc: '輸入 Email，每日收到精選星座運勢預測',
    subscribe_placeholder: '輸入你的 Email',
    subscribe_btn: '立即訂閱',
    subscribe_note: '🔒 我們重視隱私，不會發送垃圾郵件。你可以隨時取消訂閱。',
    subscribe_success: '✅ 訂閱成功！感謝你的加入，我們會每天發送星座運勢到你的信箱。',
    affiliate_title: '🛒 蝦皮聯盟行銷',
    footer_copyright: '© 2024 SmartLink 星座命理平台',
    footer_affiliate: '聯盟行銷',
    footer_traffic: '流量變現 · 聯盟行銷 · 星座內容創作',

    // 十二星座名稱
    aries: '牡羊座', taurus: '金牛座', gemini: '雙子座', cancer: '巨蟹座',
    leo: '獅子座', virgo: '處女座', libra: '天秤座', scorpio: '天蠍座',
    sagittarius: '射手座', capricorn: '摩羯座', aquarius: '水瓶座', pisces: '雙魚座',

    // 星座運勢狀態
    status_super: '超旺', status_good: '好運', status_normal: '普通',
    score_unit: '分', rank_1: '第一名', rank_2: '第二名', rank_3: '第三名',

    // =========================================================================
    // 命盤頁 - natal.html
    // =========================================================================
    natal_title: '🪐 專業命盤查詢 — 探索你的本命星盤',
    natal_subtitle: '輸入您的出生日期、時間與地點，生成專業星盤',
    form_title: '出生資料',
    label_year: '年份', label_month: '月份', label_day: '日期',
    label_hour: '時間', label_place: '地點', label_house: '宮位系統',
    label_dst: '日光節約',
    placeholder_place: '輸入城市名稱，如：台北市',
    btn_calculate: '查詢命盤',
    btn_reset: '重置',
    house_placidus: 'Placidus', house_koch: 'Koch', house_equal: 'Equal',
    dst_auto: '自動偵測', dst_yes: '是', dst_no: '否',
    chart_title: '本命盤星盤圖',
    chart_no_data: '請先輸入出生資料並點擊「查詢命盤」',
    result_title: '命盤分析結果',
    result_planet: '行星位置',
    result_house: '宮位系統',
    result_aspect: '相位分析',
    planet_sun: '太陽', planet_moon: '月亮', planet_mercury: '水星',
    planet_venus: '金星', planet_mars: '火星', planet_jupiter: '木星',
    planet_saturn: '土星', planet_uranus: '天王星', planet_neptune: '海王星', planet_pluto: '冥王星',
    error_invalid_date: '請輸入有效的出生日期',
    error_future_date: '出生日期不可為未來',
    error_invalid_time: '請輸入有效的時間（00:00 - 23:59）',
    error_missing_place: '請輸入出生地點',
    error_no_results: '請先查詢命盤',
    share_title: '分享我的本命盤',
    share_text: '我的本命盤：太陽在{sign}、月亮在{moon}、上升在{asc}',
    result_missing_birthtime: '（需知道出生時間才能計算上升星座與宮位）',
    asc_label: '上升',
    mc_label: '天頂',
    th_planet: '行星', th_sign: '星座', th_degree: '度數', th_motion: '順逆行',
    th_house: '宮位', th_ruler: '守護星',
    result_element: '元素分布', result_lucky: '幸運條件',

    // =========================================================================
    // 配對頁 - compatibility.html
    // =========================================================================
    compat_title: '💕 愛情合盤分析 — 探索你們的星座契合度',
    compat_subtitle: '輸入雙方出生資料，分析星座契合度、相處模式與未來發展',
    tab_overview: '總覽',
    tab_personality: '性格分析',
    tab_love: '愛情',
    tab_career: '事業',
    tab_luck: '財運',
    result_overview_title: '契合度總覽',
    result_match_score: '契合度分數',
    result_match_desc: '分析和諧程度',
    result_planet_title: '行星互動',
    result_aspect_title: '相位分析',
    result_love_style: '愛情模式',
    result_communication: '溝通方式',
    result_longterm: '長期相處',
    result_advice: '相處建議',
    share_title_compat: '分享我們的契合度',
    male_label: '男方', female_label: '女方',
    gender_male: '男', gender_female: '女',

    // =========================================================================
    // 運勢頁 - horoscope.html
    // =========================================================================
    horo_title: '📅 星座運勢 — 每日/每週/每月預測',
    horo_subtitle: '了解12星座的愛情、事業、財運走勢',
    period_today: '今日', period_tomorrow: '明日', period_week: '本週', period_month: '本月',
    category_overall: '整體運', category_love: '愛情運', category_career: '事業運', category_money: '財運', category_health: '健康',
    lucky_num: '幸運數字', lucky_color: '幸運色', lucky_direction: '幸運方位', lucky_time: '幸運時段', lucky_conditions: '🍀 今日幸運條件',
    notify_title: '🔔 設定通知',
    notify_desc: '搶先收到星座運勢提醒',
    notify_btn: '開啟通知',
    notify_success: '✅ 通知設定成功！',
    nav_tip_title: '💡 想要更精確的分析？',
    nav_tip_desc: '輸入你的出生年月日時刻，查詢完整命盤，獲得個人化的行星位置與運勢預測。',
    nav_tip_link: '查詢完整命盤',
    site_title: '✨ 星座命理',
    footer_copyright: '星座命理平台',

    // =========================================================================
    // 測驗頁 - quiz.html
    // =========================================================================
    quiz_title: '🎮 星座心理測驗 — 發現你的內心本質',
    quiz_subtitle: '回答8道心理測驗題目，找出你的星座遊戲人格',
    quiz_progress: '第 {current} / {total} 題',
    quiz_start: '開始測驗',
    quiz_restart: '重新測驗',
    quiz_result_title: '測驗結果',
    quiz_result_desc: '你的星座遊戲人格是...',
    quiz_share: '分享結果',
    quiz_back: '返回首頁',

    // =========================================================================
    // 知識頁 - knowledge.html
    // =========================================================================
    knowledge_title: '📚 星座知識庫 — 深入了解12星座',
    knowledge_subtitle: '探索每個星座的性格特質、運勢預測與完整資料',
    tab_overview: '總覽',
    tab_personality: '性格',
    tab_career: '事業',
    tab_love: '愛情',
    tab_compatible: '速配星座',
    element_fire: '火象', element_earth: '土象', element_air: '風象', element_water: '水象',
    quality_cardinal: '基本宮', quality_fixed: '固定宮', quality_mutable: '變動宮',
    trait_strengths: '優點', trait_weaknesses: '缺點',
    compatible_signs: '速配', less_compatible: '不合',
    lucky_item: '幸運物', lucky_color: '幸運色', lucky_number: '幸運數字',
    ideal_partner: '理想伴侶', career_paths: '適合職業',
    search_placeholder: '搜尋星座名稱...',
    filter_all: '全部',
    label_ruler: '守護星',
    label_element: '元素',
    trait_personality: '✨ 性格特質',
    career_suitable: '💼 適合職業',
    footer_lang: '使用繁體中文與英文',

    // =========================================================================
    // 隱私權宣告
    // =========================================================================
    privacy_notice_title: '🔒 隱私權宣告',
    privacy_notice_text: '本網站為靜態星座命理平台，不會收集、儲存或傳輸任何個人資料。所有占卜計算皆在您的瀏覽器內完成，不會上傳至任何伺服器。',
    privacy_dismiss: '我知道了',

    // =========================================================================
    // 通用
    // =========================================================================
    loading: '載入中...',
    error_generic: '發生錯誤，請稍後再試',
    btn_close: '關閉',
    btn_confirm: '確認',
    btn_cancel: '取消',
  },

  'en': {
    // =========================================================================
    // Global Navigation
    // =========================================================================
    nav_home: 'Home',
    nav_natal: 'Natal Chart',
    nav_compat: 'Compatibility',
    nav_horo: 'Horoscope',
    nav_quiz: 'Quiz',
    nav_knowledge: 'Knowledge',
    nav_blocks: 'Block Game',
    nav_home_brand: 'Astrology',
    nav_subscribe: 'Subscribe',
    lucky_color_title: '🎨 Today\'s Lucky Color',
    lucky_color_for_you: ' lucky color',

    // =========================================================================
    // Homepage - index.html
    // =========================================================================
    hero_title: 'Explore Your Celestial Destiny',
    hero_subtitle: 'Professional Astrology Platform | Quiz | Traffic Monetization',
    lucky_title: '🌟 Today\'s Lucky Signs TOP 3',
    today_horoscope_title: '📅 Today\'s Horoscope',
    cta_natal: '🪐 Natal Chart',
    cta_compat: '💕 Love Match',
    cta_quiz: '🎮 Quiz',
    feature_natal_title: 'Natal Chart',
    feature_natal_desc: 'Enter your birth date, time, and location to generate a professional astrological chart. View Sun, Moon, Rising sign and all 10 planets.',
    feature_compat_title: 'Love Compatibility',
    feature_compat_desc: 'Enter both birth data to analyze zodiac compatibility, relationship patterns, and future development advice.',
    feature_horo_title: 'Daily Horoscope',
    feature_horo_desc: 'Daily/Weekly/Monthly predictions for all 12 signs, including love, career, and finance guidance.',
    feature_quiz_title: 'Astrology Quiz',
    feature_quiz_desc: 'Fun psychological tests to discover your inner zodiac nature. Find your quiz personality!',
    feature_wheel_title: 'Fortune Wheel',
    feature_wheel_desc: 'Spin the wheel of fate and get your daily lucky horoscope based on your zodiac sign!',
    feature_blocks_title: 'Block Puzzle',
    feature_blocks_desc: 'Test your reflexes with this classic block-stacking game. Keyboard and touch controls supported.',
    feature_knowledge_title: 'Zodiac Knowledge',
    feature_knowledge_desc: 'Deep dive into the personality traits, lucky items, colors, and ideal careers for all 12 signs.',
    feature_affiliate_title: 'Affiliate Program',
    feature_affiliate_desc: 'Earn commissions by promoting links. Monetize your zodiac content and grow your income.',
    tag_hot: 'Popular',
    tag_new: 'new',
    tag_daily: 'Daily Update',
    subscribe_title: '📬 Subscribe to Daily Horoscope',
    subscribe_desc: 'Enter your email to receive curated horoscope predictions every day.',
    subscribe_placeholder: 'Enter your Email',
    subscribe_btn: 'Subscribe Now',
    subscribe_note: '🔒 We respect your privacy. No spam, unsubscribe anytime.',
    subscribe_success: '✅ Subscribed! You\'ll receive daily horoscope predictions in your inbox.',
    affiliate_title: '🛒 Shopee Affiliate',
    // Blocks game
    blocks_title: '✨ Block Puzzle',
    blocks_score: 'Score',
    blocks_level: 'Level',
    blocks_lines: 'Lines',
    blocks_next: 'Next',
    blocks_start: 'Start Game',
    blocks_running: 'Playing',
    blocks_pause: 'Pause',
    blocks_restart: 'Restart',
    blocks_keys: 'Controls:',
    blocks_key_left: '← →',
    blocks_key_move: 'Move',
    blocks_key_rotate: '↑',
    blocks_key_rotate_text: 'Rotate',
    blocks_key_down: '↓',
    blocks_key_soft: 'Soft Drop',
    blocks_key_drop: 'Space',
    blocks_key_hard: 'Hard Drop',
    blocks_key_pause: 'P',
    blocks_key_pause_text: 'Pause',
    blocks_gameover: 'Game Over',
    blocks_final: 'Final Score:',
    blocks_retry: 'Play Again',
    blocks_home: 'Home',
    blocks_paused: 'Paused',
    blocks_resume: 'Press P or click to resume',
    blocks_resume_btn: 'Resume',
    blocks_btn_left: 'Left',
    blocks_btn_right: 'Right',
    blocks_btn_down: 'Down',
    blocks_btn_rotate: 'Rotate',
    footer_copyright: '© 2024 SmartLink Astrology Platform',
    footer_affiliate: 'Affiliate',
    footer_traffic: 'Traffic Monetization · Affiliate Marketing · Astrology Content',

    // 12 Zodiac Signs
    aries: 'Aries', taurus: 'Taurus', gemini: 'Gemini', cancer: 'Cancer',
    leo: 'Leo', virgo: 'Virgo', libra: 'Libra', scorpio: 'Scorpio',
    sagittarius: 'Sagittarius', capricorn: 'Capricorn', aquarius: 'Aquarius', pisces: 'Pisces',

    // Horoscope Status
    status_super: 'Excellent', status_good: 'Good', status_normal: 'Normal',
    score_unit: '', rank_1: '1st Place', rank_2: '2nd Place', rank_3: '3rd Place',

    // =========================================================================
    // Natal Page - natal.html
    // =========================================================================
    natal_title: '🪐 Professional Natal Chart — Explore Your Birth Chart',
    natal_subtitle: 'Enter your birth date, time, and location to generate your professional astrological chart',
    form_title: 'Birth Information',
    label_year: 'Year', label_month: 'Month', label_day: 'Day',
    label_hour: 'Time', label_place: 'Location', label_house: 'House System',
    label_dst: 'DST',
    placeholder_place: 'Enter city name, e.g., Taipei',
    btn_calculate: 'Calculate Chart',
    btn_reset: 'Reset',
    house_placidus: 'Placidus', house_koch: 'Koch', house_equal: 'Equal',
    dst_auto: 'Auto Detect', dst_yes: 'Yes', dst_no: 'No',
    chart_title: 'Birth Chart Wheel',
    chart_no_data: 'Please enter birth data and click "Calculate Chart"',
    result_title: 'Analysis Results',
    result_planet: 'Planet Positions',
    result_house: 'House System',
    result_aspect: 'Aspect Analysis',
    planet_sun: 'Sun', planet_moon: 'Moon', planet_mercury: 'Mercury',
    planet_venus: 'Venus', planet_mars: 'Mars', planet_jupiter: 'Jupiter',
    planet_saturn: 'Saturn', planet_uranus: 'Uranus', planet_neptune: 'Neptune', planet_pluto: 'Pluto',
    error_invalid_date: 'Please enter a valid birth date',
    error_future_date: 'Birth date cannot be in the future',
    error_invalid_time: 'Please enter a valid time (00:00 - 23:59)',
    error_missing_place: 'Please enter birth location',
    error_no_results: 'Please calculate your chart first',
    share_title: 'Share My Natal Chart',
    share_text: 'My Natal Chart: Sun in {sign}, Moon in {moon}, Asc in {asc}',
    result_missing_birthtime: '(Birth time required to calculate Ascendant and houses)',
    asc_label: 'Asc',
    mc_label: 'MC',
    th_planet: 'Planet', th_sign: 'Sign', th_degree: 'Degree', th_motion: 'Motion',
    th_house: 'House', th_ruler: 'Ruler',
    result_element: 'Element Distribution', result_lucky: 'Lucky Conditions',

    // =========================================================================
    // Compatibility Page - compatibility.html
    // =========================================================================
    compat_title: '💕 Love Compatibility Analysis — Explore Your Zodiac Match',
    compat_subtitle: 'Enter both birth data to analyze zodiac compatibility, relationship patterns, and future development',
    tab_overview: 'Overview',
    tab_personality: 'Personality',
    tab_love: 'Love',
    tab_career: 'Career',
    tab_luck: 'Fortune',
    result_overview_title: 'Compatibility Overview',
    result_match_score: 'Match Score',
    result_match_desc: 'Harmony Analysis',
    result_planet_title: 'Planetary Interactions',
    result_aspect_title: 'Aspect Analysis',
    result_love_style: 'Love Style',
    result_communication: 'Communication',
    result_longterm: 'Long-term Relationship',
    result_advice: 'Relationship Advice',
    share_title_compat: 'Share Our Compatibility',
    male_label: 'Male', female_label: 'Female',
    gender_male: 'Male', gender_female: 'Female',

    // =========================================================================
    // Horoscope Page - horoscope.html
    // =========================================================================
    horo_title: '📅 Horoscope — Daily/Weekly/Monthly Predictions',
    horo_subtitle: 'Love, career, and finance forecasts for all 12 zodiac signs',
    period_today: 'Today', period_tomorrow: 'Tomorrow', period_week: 'This Week', period_month: 'This Month',
    category_overall: 'Overall', category_love: 'Love', category_career: 'Career', category_money: 'Finance', category_health: 'Health',
    lucky_num: 'Lucky #', lucky_color: 'Lucky Color', lucky_direction: 'Lucky Direction', lucky_time: 'Lucky Time', lucky_conditions: '🍀 Today\'s Lucky Conditions',
    notify_title: '🔔 Enable Notifications',
    notify_desc: 'Get horoscope alerts first',
    notify_btn: 'Enable',
    notify_success: '✅ Notifications enabled!',
    nav_tip_title: '💡 Want More Accurate Analysis?',
    nav_tip_desc: 'Enter your birth date and time to get your full natal chart with personalized planetary positions and horoscope predictions.',
    nav_tip_link: 'Get Natal Chart',
    site_title: '✨ Astrology',
    footer_copyright: 'Astrology Platform',

    // =========================================================================
    // Quiz Page - quiz.html
    // =========================================================================
    quiz_title: '🎮 Astrology Quiz — Discover Your Inner Nature',
    quiz_subtitle: 'Answer 8 psychological questions to find your zodiac quiz personality',
    quiz_progress: 'Question {current} / {total}',
    quiz_start: 'Start Quiz',
    quiz_restart: 'Restart',
    quiz_result_title: 'Quiz Results',
    quiz_result_desc: 'Your zodiac quiz personality is...',
    quiz_share: 'Share Results',
    quiz_back: 'Back to Home',

    // =========================================================================
    // Knowledge Page - knowledge.html
    // =========================================================================
    knowledge_title: '📚 Zodiac Knowledge Base — Explore All 12 Signs',
    knowledge_subtitle: 'Discover personality traits, predictions, and complete information for each zodiac sign',
    tab_overview: 'Overview',
    tab_personality: 'Personality',
    tab_career: 'Career',
    tab_love: 'Love',
    tab_compatible: 'Compatibility',
    element_fire: 'Fire', element_earth: 'Earth', element_air: 'Air', element_water: 'Water',
    quality_cardinal: 'Cardinal', quality_fixed: 'Fixed', quality_mutable: 'Mutable',
    trait_strengths: 'Strengths', trait_weaknesses: 'Weaknesses',
    compatible_signs: 'Best Match', less_compatible: 'Least Compatible',
    lucky_item: 'Lucky Item', lucky_color: 'Lucky Color', lucky_number: 'Lucky Number',
    ideal_partner: 'Ideal Partner', career_paths: 'Ideal Careers',
    search_placeholder: 'Search zodiac name...',
    filter_all: 'All',
    label_ruler: 'Ruling Planet',
    label_element: 'Element',
    trait_personality: '✨ Personality Traits',
    career_suitable: '💼 Ideal Careers',
    footer_lang: 'Chinese & English',

    // =========================================================================
    // 隱私權宣告
    // =========================================================================
    privacy_notice_title: '🔒 Privacy Notice',
    privacy_notice_text: 'This is a static astrology platform. We do NOT collect, store, or transmit any personal data. All calculations are performed locally in your browser and no data is sent to any server.',
    privacy_dismiss: 'Got it',

    // =========================================================================
    // Common
    // =========================================================================
    loading: 'Loading...',
    error_generic: 'An error occurred, please try again',
    btn_close: 'Close',
    btn_confirm: 'Confirm',
    btn_cancel: 'Cancel',
  }
};

// ============================================================================
// 翻譯系統核心
// ============================================================================

let currentLang = 'zh-TW';
let translationCache = null;

/**
 * 設定語言
 * @param {string} lang - 'zh-TW' 或 'en'
 */
function setLanguage(lang) {
  if (!translations[lang]) {
    console.warn(`Language "${lang}" not found, falling back to zh-TW`);
    lang = 'zh-TW';
  }
  currentLang = lang;
  localStorage.setItem('zodiacLang', lang);
  applyTranslations();
  updateLangToggle();
}

/**
 * 取得翻譯文字
 * @param {string} key - 翻譯鍵
 * @returns {string}
 */
function t(key) {
  if (!translationCache) {
    translationCache = translations[currentLang] || translations['zh-TW'];
  }
  return translationCache[key] || key;
}

/**
 * 翻譯字串，支援模板變數
 * @param {string} key - 翻譯鍵
 * @param {object} vars - 模板變數
 * @returns {string}
 */
function tf(key, vars = {}) {
  let text = t(key);
  for (const [k, v] of Object.entries(vars)) {
    text = text.replace(`{${k}}`, v);
  }
  return text;
}

/**
 * 套用翻譯到所有具有 data-i18n 屬性的元素
 */
function applyTranslations() {
  translationCache = translations[currentLang] || translations['zh-TW'];

  // 翻譯所有 data-i18n 元素
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' && el.type === 'submit') {
      el.value = t(key);
    } else if (el.tagName === 'INPUT' && el.type === 'button') {
      el.value = t(key);
    } else if (el.tagName === 'INPUT' && el.placeholder !== undefined) {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });

  // 翻譯 title 屬性
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    el.title = t(key);
  });

  // 翻譯 placeholder（除了已由 data-i18n 處理的）
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  // 觸發自定義事件，讓頁面可以監聽語言變化
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
}

/**
 * 更新語言切換按鈕狀態
 */
function updateLangToggle() {
  const btns = document.querySelectorAll('.lang-btn');
  btns.forEach(btn => {
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/**
 * 初始化語言系統
 */
function initLanguage() {
  // 嘗試從 localStorage 恢復
  const savedLang = localStorage.getItem('zodiacLang');
  const browserLang = navigator.language || navigator.userLanguage;
  let defaultLang = 'zh-TW';

  // 如果瀏覽器是英文環境，預設使用英文
  if (browserLang.startsWith('en')) {
    defaultLang = 'en';
  }

  // 如果有儲存的偏好，使用儲存的
  if (savedLang && translations[savedLang]) {
    defaultLang = savedLang;
  }

  // 設定語言
  currentLang = defaultLang;
  translationCache = translations[currentLang];
  updateLangToggle();

  // 如果不是預設語言，立即套用
  if (defaultLang !== 'zh-TW') {
    applyTranslations();
  }
}

// ============================================================================
// 語言切換按鈕 HTML
// ============================================================================

function getLangToggleHTML() {
  return `
    <button class="lang-btn" data-lang="zh-TW" onclick="setLanguage('zh-TW')">繁</button>
    <button class="lang-btn" data-lang="en" onclick="setLanguage('en')">EN</button>
  `;
}

// DOM 載入後初始化
document.addEventListener('DOMContentLoaded', initLanguage);
