// i18n.js — NCMConverter multilingual support
// Languages: en (English), zh (简体中文), ja (日本語)

const I18N = {
  en: {
    // Nav
    'nav.converter': 'Converter',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.privacy': 'Privacy',

    // Index — hero
    'index.hero.h1': 'Convert <span>.NCM</span> Files<br>to MP3 &amp; FLAC',
    'index.hero.p': 'Free, instant, and 100% private. Your files never leave your browser — no uploads, no accounts required.',
    'index.badge.noupload': 'No Upload',
    'index.badge.tags': 'Keeps Cover Art &amp; Tags',
    'index.badge.batch': 'Batch Convert',
    'index.badge.free': 'Free Forever',

    // Index — drop zone
    'index.drop.h2': 'Drop your .ncm files here',
    'index.drop.p': 'or <strong>click to browse</strong> — supports batch selection',

    // Index — actions
    'index.btn.clear': 'Clear All',
    'index.btn.convert': 'Convert All',
    'index.btn.download': '↓ Download',

    // Index — file status
    'index.status.waiting': 'Waiting',
    'index.status.converting': 'Converting…',
    'index.status.done': 'Done',
    'index.status.error': 'Error',

    // Index — features
    'index.feat.private.h': '100% Private',
    'index.feat.private.p': 'All processing happens locally in your browser. Zero data is sent to any server.',
    'index.feat.meta.h': 'Preserves Metadata',
    'index.feat.meta.p': 'Cover art, song title, artist, and album tags are all retained in the output file.',
    'index.feat.instant.h': 'Instant Conversion',
    'index.feat.instant.p': 'No waiting for uploads. Files convert in seconds directly on your device.',
    'index.feat.batch.h': 'Batch Support',
    'index.feat.batch.p': 'Select and convert multiple .ncm files at once — no need to go one by one.',

    // Index — FAQ
    'index.faq.title': 'Frequently Asked Questions',
    'index.faq.q1': 'What is an .ncm file?',
    'index.faq.a1': 'NCM is a proprietary encrypted audio format used by NetEase Cloud Music (网易云音乐). The file contains a standard MP3 or FLAC audio stream that has been encrypted so it can only be played inside the NetEase app. NCMConverter decrypts and extracts that audio so you can play it anywhere.',
    'index.faq.q2': 'Are my files uploaded to your server?',
    'index.faq.a2': 'No. Every step of the conversion runs entirely in your browser using JavaScript. Your music files never leave your device, and we never have access to them.',
    'index.faq.q3': 'What output formats are supported?',
    'index.faq.a3': 'NCM files internally contain either an MP3 or a FLAC audio stream. NCMConverter extracts and saves the original format — so you\'ll get an MP3 or FLAC file depending on what was stored inside the .ncm container. No re-encoding means zero quality loss.',
    'index.faq.q4': 'Is there a file size or quantity limit?',
    'index.faq.a4': 'There are no artificial limits. You can convert as many files as you like in one batch. The only practical limit is your browser\'s available memory, which is typically enough for dozens of files at once.',
    'index.faq.q5': 'Will cover art and song tags be preserved?',
    'index.faq.a5': 'Yes. NCMConverter reads the embedded metadata (track name, artist, album, cover image) stored inside the .ncm file and writes it into the output MP3 or FLAC, so your music library stays organized.',
    'index.faq.q6': 'Is this tool free to use?',
    'index.faq.a6': 'Yes, completely free. The site is supported by non-intrusive display advertising. No account, no subscription, no hidden fees.',

    // Cookie
    'cookie.text': 'We use cookies to improve your experience and serve relevant ads. See our',
    'cookie.privacy': 'Privacy Policy',
    'cookie.accept': 'Accept',

    // Footer
    'footer.copy': '© 2025 NCMConverter. All rights reserved.',
    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // About
    'about.h1': 'About <span>NCMConverter</span>',
    'about.subtitle': 'A free, privacy-first tool built for music lovers who want to play their NetEase library anywhere.',
    'about.story.h': 'Our Story',
    'about.story.p1': 'NCMConverter was born from a simple frustration: you download music from NetEase Cloud Music, but the .ncm format locks it inside a single app. Take your phone offline, switch devices, or just want to listen on a different player — and suddenly your own music library is inaccessible.',
    'about.story.p2': 'We built NCMConverter to solve that problem. The tool is free, runs entirely in your browser, and requires no account or personal information. Your files never leave your device.',
    'about.values.h': 'What We Believe',
    'about.val.privacy.h': 'Privacy by Default',
    'about.val.privacy.p': 'No file uploads, no servers, no tracking beyond standard analytics. Your music stays yours.',
    'about.val.simplicity.h': 'Simplicity First',
    'about.val.simplicity.p': 'One page, one job. Drop a file, click convert, download. That\'s it.',
    'about.val.free.h': 'Free for Everyone',
    'about.val.free.p': 'Supported by non-intrusive advertising so we can keep the lights on without charging users.',
    'about.val.quality.h': 'Zero Quality Loss',
    'about.val.quality.p': 'We extract the original audio stream — no re-encoding, no compression artifacts.',
    'about.how.h': 'How It Works',
    'about.how.p1': 'The .ncm format is a standard MP3 or FLAC file wrapped in a proprietary encryption layer. NCMConverter uses your browser\'s built-in cryptography (WebCrypto API) to decrypt the audio stream locally, then packages it with the original metadata and cover art.',
    'about.how.p2': 'Because everything runs in JavaScript inside your browser tab, there is no backend server involved. Processing speed depends only on your device\'s performance.',
    'about.responsible.h': 'Responsible Use',
    'about.responsible.p': 'NCMConverter is intended for personal use — converting music you have legitimately purchased or downloaded for offline playback. Please respect artists and copyright law in your jurisdiction. We do not condone or facilitate piracy.',

    // Contact
    'contact.h1': 'Get in <span>Touch</span>',
    'contact.subtitle': 'Have a question, found a bug, or want to work with us? We\'d love to hear from you.',
    'contact.email.h': 'Email',
    'contact.response.h': 'Response Time',
    'contact.response.p': 'Typically within 1–2 business days',
    'contact.form.h': 'Send a Message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.opt.bug': 'Bug Report',
    'contact.form.opt.feedback': 'Feedback / Feature Request',
    'contact.form.opt.ads': 'Advertising Inquiry',
    'contact.form.opt.other': 'Other',
    'contact.form.message': 'Message',
    'contact.form.msg.placeholder': 'Describe your issue or question...',
    'contact.form.submit': 'Send Message',
    'contact.form.note': 'We respect your privacy. Your information is never sold or shared with third parties.',
    'contact.success.h': 'Message Sent!',
    'contact.success.p': 'Thanks for reaching out. We\'ll get back to you within 1–2 business days.',

    // Privacy
    'privacy.h1': '<span>Privacy</span> Policy',
    'privacy.updated': 'Last updated: March 2025',
    'privacy.intro': 'NCMConverter ("we", "our", or "us") is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights. Please read it carefully.',

    // Terms
    'terms.h1': 'Terms of <span>Service</span>',
    'terms.updated': 'Last updated: March 2025',
    'terms.intro': 'Please read these Terms of Service carefully before using NCMConverter. By using the service, you agree to be bound by these terms.',
  },

  zh: {
    // Nav
    'nav.converter': '转换器',
    'nav.about': '关于',
    'nav.contact': '联系我们',
    'nav.privacy': '隐私政策',

    // Index — hero
    'index.hero.h1': '将 <span>.NCM</span> 文件<br>转换为 MP3 &amp; FLAC',
    'index.hero.p': '免费、即时、100% 私密。文件完全在浏览器本地处理，无需上传，无需注册。',
    'index.badge.noupload': '无需上传',
    'index.badge.tags': '保留封面与标签',
    'index.badge.batch': '批量转换',
    'index.badge.free': '永久免费',

    // Index — drop zone
    'index.drop.h2': '将 .ncm 文件拖放到此处',
    'index.drop.p': '或 <strong>点击选择文件</strong> — 支持批量选择',

    // Index — actions
    'index.btn.clear': '清空',
    'index.btn.convert': '全部转换',
    'index.btn.download': '↓ 下载',

    // Index — file status
    'index.status.waiting': '等待中',
    'index.status.converting': '转换中…',
    'index.status.done': '完成',
    'index.status.error': '错误',

    // Index — features
    'index.feat.private.h': '100% 私密',
    'index.feat.private.p': '所有处理均在浏览器本地完成，不向任何服务器发送数据。',
    'index.feat.meta.h': '保留元数据',
    'index.feat.meta.p': '封面图片、曲名、歌手、专辑标签均完整保留在输出文件中。',
    'index.feat.instant.h': '即时转换',
    'index.feat.instant.p': '无需等待上传，文件在您的设备上几秒内完成转换。',
    'index.feat.batch.h': '批量支持',
    'index.feat.batch.p': '一次选择并转换多个 .ncm 文件，无需逐个处理。',

    // Index — FAQ
    'index.faq.title': '常见问题',
    'index.faq.q1': '.ncm 文件是什么？',
    'index.faq.a1': 'NCM 是网易云音乐使用的专有加密音频格式，其内部包含经过加密的 MP3 或 FLAC 音频流，只能在网易云音乐客户端中播放。NCMConverter 可解密并提取音频，让您在任意播放器中使用。',
    'index.faq.q2': '我的文件会被上传到服务器吗？',
    'index.faq.a2': '不会。所有转换步骤完全在浏览器中通过 JavaScript 运行，您的音乐文件始终留在您的设备上，我们无法访问它们。',
    'index.faq.q3': '支持哪些输出格式？',
    'index.faq.a3': 'NCM 文件内部包含 MP3 或 FLAC 音频流，NCMConverter 会提取并保存原始格式，无需重新编码，零质量损失。',
    'index.faq.q4': '有文件大小或数量限制吗？',
    'index.faq.a4': '没有人为限制。您可以一次批量转换任意数量的文件，唯一的实际限制是浏览器的可用内存。',
    'index.faq.q5': '封面和歌曲标签会保留吗？',
    'index.faq.a5': '会。NCMConverter 会读取 .ncm 文件中内嵌的元数据（曲名、歌手、专辑、封面图片）并写入输出的 MP3 或 FLAC 文件。',
    'index.faq.q6': '这个工具是免费的吗？',
    'index.faq.a6': '是的，完全免费。网站通过非侵入式展示广告维持运营，无需账户、订阅或任何隐性费用。',

    // Cookie
    'cookie.text': '我们使用 Cookie 以改善您的体验并展示相关广告。请查看我们的',
    'cookie.privacy': '隐私政策',
    'cookie.accept': '接受',

    // Footer
    'footer.copy': '© 2025 NCMConverter. 保留所有权利。',
    'footer.about': '关于我们',
    'footer.contact': '联系我们',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',

    // About
    'about.h1': '关于 <span>NCMConverter</span>',
    'about.subtitle': '专为希望在任何地方播放网易云音乐曲库的音乐爱好者打造的免费、隐私优先工具。',
    'about.story.h': '我们的故事',
    'about.story.p1': 'NCMConverter 诞生于一个简单的困扰：您从网易云音乐下载了音乐，但 .ncm 格式将其锁定在单一应用中。手机离线、更换设备、或想用其他播放器——您自己的音乐库变得无法访问。',
    'about.story.p2': '我们构建了 NCMConverter 来解决这个问题。该工具免费、完全在浏览器中运行，不需要账户或任何个人信息。您的文件永远不会离开您的设备。',
    'about.values.h': '我们的信念',
    'about.val.privacy.h': '默认隐私',
    'about.val.privacy.p': '不上传文件，不需要服务器，不做超出标准分析的追踪。您的音乐始终属于您。',
    'about.val.simplicity.h': '简单至上',
    'about.val.simplicity.p': '一个页面，一件事。拖入文件，点击转换，下载。就这么简单。',
    'about.val.free.h': '人人免费',
    'about.val.free.p': '通过非侵入式广告维持运营，无需向用户收费。',
    'about.val.quality.h': '零质量损失',
    'about.val.quality.p': '直接提取原始音频流，无需重新编码，无压缩失真。',
    'about.how.h': '工作原理',
    'about.how.p1': '.ncm 格式是标准 MP3 或 FLAC 文件，外层包裹了专有加密层。NCMConverter 使用浏览器内置的 WebCrypto API 在本地解密音频流，并将原始元数据和封面图片一并打包。',
    'about.how.p2': '由于一切都在浏览器标签页内的 JavaScript 中运行，不涉及任何后端服务器。处理速度仅取决于您设备的性能。',
    'about.responsible.h': '合规使用',
    'about.responsible.p': 'NCMConverter 仅供个人使用——用于转换您合法购买或下载供离线播放的音乐。请遵守您所在地区的版权法律法规，我们不支持或协助任何盗版行为。',

    // Contact
    'contact.h1': '联系<span>我们</span>',
    'contact.subtitle': '有问题、发现了 Bug，或想与我们合作？欢迎随时联系。',
    'contact.email.h': '邮箱',
    'contact.response.h': '响应时间',
    'contact.response.p': '通常在 1–2 个工作日内回复',
    'contact.form.h': '发送消息',
    'contact.form.name': '您的姓名',
    'contact.form.email': '电子邮箱',
    'contact.form.subject': '主题',
    'contact.form.opt.bug': '错误报告',
    'contact.form.opt.feedback': '反馈 / 功能请求',
    'contact.form.opt.ads': '广告合作',
    'contact.form.opt.other': '其他',
    'contact.form.message': '消息内容',
    'contact.form.msg.placeholder': '请描述您的问题或需求……',
    'contact.form.submit': '发送消息',
    'contact.form.note': '我们尊重您的隐私，您的信息不会被出售或共享给第三方。',
    'contact.success.h': '消息已发送！',
    'contact.success.p': '感谢您的联系，我们将在 1–2 个工作日内回复您。',

    // Privacy
    'privacy.h1': '<span>隐私</span>政策',
    'privacy.updated': '最后更新：2025年3月',
    'privacy.intro': 'NCMConverter（"我们"）致力于保护您的隐私。本政策说明我们收集哪些信息、如何使用以及您享有的权利。请仔细阅读。',

    // Terms
    'terms.h1': '服务<span>条款</span>',
    'terms.updated': '最后更新：2025年3月',
    'terms.intro': '在使用 NCMConverter 之前，请仔细阅读本服务条款。使用本服务即表示您同意受本条款约束。',
  },

  ja: {
    // Nav
    'nav.converter': 'コンバーター',
    'nav.about': 'について',
    'nav.contact': 'お問い合わせ',
    'nav.privacy': 'プライバシー',

    // Index — hero
    'index.hero.h1': '<span>.NCM</span> ファイルを<br>MP3・FLAC に変換',
    'index.hero.p': '無料・即時・完全プライベート。ファイルはブラウザ外に出ません。アップロード不要、登録不要。',
    'index.badge.noupload': 'アップロード不要',
    'index.badge.tags': 'カバー・タグを保持',
    'index.badge.batch': 'バッチ変換',
    'index.badge.free': '永久無料',

    // Index — drop zone
    'index.drop.h2': '.ncm ファイルをここにドロップ',
    'index.drop.p': 'または <strong>クリックして選択</strong> — 複数ファイル対応',

    // Index — actions
    'index.btn.clear': 'すべてクリア',
    'index.btn.convert': 'すべて変換',
    'index.btn.download': '↓ ダウンロード',

    // Index — file status
    'index.status.waiting': '待機中',
    'index.status.converting': '変換中…',
    'index.status.done': '完了',
    'index.status.error': 'エラー',

    // Index — features
    'index.feat.private.h': '完全プライベート',
    'index.feat.private.p': 'すべての処理はブラウザ内で完結。サーバーにデータは送信されません。',
    'index.feat.meta.h': 'メタデータを保持',
    'index.feat.meta.p': 'カバーアート・タイトル・アーティスト・アルバムタグがすべて出力ファイルに保持されます。',
    'index.feat.instant.h': '即時変換',
    'index.feat.instant.p': 'アップロード待ちなし。ファイルはお使いのデバイスで数秒以内に変換されます。',
    'index.feat.batch.h': 'バッチ対応',
    'index.feat.batch.p': '複数の .ncm ファイルを一括選択・変換。1ファイルずつ行う必要はありません。',

    // Index — FAQ
    'index.faq.title': 'よくある質問',
    'index.faq.q1': '.ncm ファイルとは何ですか？',
    'index.faq.a1': 'NCM は NetEase Cloud Music（网易云音楽）が使用する独自暗号化音声フォーマットです。内部に標準 MP3 または FLAC ストリームが含まれており、NetEase アプリ内でしか再生できないよう暗号化されています。NCMConverter はその音声を復号・抽出し、どこでも再生できるようにします。',
    'index.faq.q2': 'ファイルはサーバーにアップロードされますか？',
    'index.faq.a2': 'されません。変換のすべての工程はブラウザ内の JavaScript で完結します。音楽ファイルがデバイスの外に出ることはなく、私たちがアクセスすることもありません。',
    'index.faq.q3': '出力フォーマットは何ですか？',
    'index.faq.a3': 'NCM ファイルの内部には MP3 または FLAC が格納されています。NCMConverter は元のフォーマットをそのまま抽出・保存するため、再エンコードなし・品質劣化ゼロです。',
    'index.faq.q4': 'ファイルサイズや数の制限はありますか？',
    'index.faq.a4': '人為的な制限はありません。バッチで何ファイルでも変換できます。実質的な制限はブラウザの利用可能メモリだけです。',
    'index.faq.q5': 'カバーアートや曲タグは保持されますか？',
    'index.faq.a5': 'はい。.ncm ファイルに埋め込まれたメタデータ（トラック名・アーティスト・アルバム・カバー画像）を読み取り、出力 MP3/FLAC に書き込みます。',
    'index.faq.q6': '無料で使えますか？',
    'index.faq.a6': 'はい、完全無料です。非侵入的なディスプレイ広告で運営を維持しています。アカウント・サブスクリプション・隠れた費用は一切ありません。',

    // Cookie
    'cookie.text': 'より良い体験と関連広告のためにクッキーを使用しています。詳しくは',
    'cookie.privacy': 'プライバシーポリシー',
    'cookie.accept': '同意する',

    // Footer
    'footer.copy': '© 2025 NCMConverter. All rights reserved.',
    'footer.about': '会社概要',
    'footer.contact': 'お問い合わせ',
    'footer.privacy': 'プライバシーポリシー',
    'footer.terms': '利用規約',

    // About
    'about.h1': '<span>NCMConverter</span> について',
    'about.subtitle': 'NetEase の音楽ライブラリをどこでも再生したい音楽愛好家のための、無料・プライバシー優先ツールです。',
    'about.story.h': '私たちのストーリー',
    'about.story.p1': 'NCMConverter はシンプルな不満から生まれました。NetEase Cloud Music で音楽をダウンロードしても、.ncm 形式はそれを一つのアプリに閉じ込めます。オフライン・デバイス変更・別プレーヤー——自分の音楽が突然使えなくなるのです。',
    'about.story.p2': '私たちはその問題を解決するために NCMConverter を作りました。無料で、ブラウザ内で完全動作し、アカウントや個人情報は一切不要。ファイルはデバイスを離れません。',
    'about.values.h': '私たちの信念',
    'about.val.privacy.h': 'デフォルトでプライバシー保護',
    'about.val.privacy.p': 'ファイルアップロードなし、サーバーなし、標準分析以上のトラッキングなし。あなたの音楽はあなたのものです。',
    'about.val.simplicity.h': 'シンプルさ最優先',
    'about.val.simplicity.p': '1ページ、1つの仕事。ファイルをドロップして変換してダウンロード。それだけです。',
    'about.val.free.h': '誰でも無料',
    'about.val.free.p': '非侵入的な広告で運営を維持し、ユーザーに課金せずにサービスを提供しています。',
    'about.val.quality.h': '品質劣化ゼロ',
    'about.val.quality.p': '元の音声ストリームをそのまま抽出——再エンコードなし、圧縮アーティファクトなし。',
    'about.how.h': '仕組み',
    'about.how.p1': '.ncm フォーマットは独自の暗号化レイヤーでラップされた標準 MP3/FLAC ファイルです。NCMConverter はブラウザ内蔵の WebCrypto API を使ってローカルで音声ストリームを復号し、元のメタデータとカバーアートとともにパッケージ化します。',
    'about.how.p2': 'すべてがブラウザのタブ内 JavaScript で実行されるため、バックエンドサーバーは関与しません。処理速度はお使いのデバイスの性能のみに依存します。',
    'about.responsible.h': '適切な使用',
    'about.responsible.p': 'NCMConverter は個人使用を目的としています——合法的に購入またはダウンロードしたオフライン再生用の音楽の変換にご利用ください。アーティストと各地域の著作権法を尊重してください。海賊版行為を支持・助長しません。',

    // Contact
    'contact.h1': '<span>お問い合わせ</span>',
    'contact.subtitle': 'ご質問、バグ報告、またはご協力いただける場合はお気軽にご連絡ください。',
    'contact.email.h': 'メール',
    'contact.response.h': '返信時間',
    'contact.response.p': '通常 1〜2 営業日以内に返信します',
    'contact.form.h': 'メッセージを送る',
    'contact.form.name': 'お名前',
    'contact.form.email': 'メールアドレス',
    'contact.form.subject': '件名',
    'contact.form.opt.bug': 'バグ報告',
    'contact.form.opt.feedback': 'フィードバック / 機能リクエスト',
    'contact.form.opt.ads': '広告掲載のお問い合わせ',
    'contact.form.opt.other': 'その他',
    'contact.form.message': 'メッセージ',
    'contact.form.msg.placeholder': 'ご質問や問題を詳しくお書きください…',
    'contact.form.submit': '送信する',
    'contact.form.note': 'プライバシーを尊重します。お客様の情報を第三者に販売・共有することはありません。',
    'contact.success.h': 'メッセージを送信しました！',
    'contact.success.p': 'ご連絡ありがとうございます。1〜2 営業日以内にご返信いたします。',

    // Privacy
    'privacy.h1': '<span>プライバシー</span>ポリシー',
    'privacy.updated': '最終更新：2025年3月',
    'privacy.intro': 'NCMConverter（「当社」）はお客様のプライバシー保護に取り組んでいます。このポリシーは、収集する情報・使用方法・お客様の権利について説明します。',

    // Terms
    'terms.h1': '利用<span>規約</span>',
    'terms.updated': '最終更新：2025年3月',
    'terms.intro': 'NCMConverter をご利用になる前に、本利用規約をよくお読みください。サービスを使用することで、本規約に同意したものとみなされます。',
  },
};

// ─── Engine ───────────────────────────────────────────────────────────────────

const LANG_KEY = 'ncm_lang';

function getLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved && I18N[saved]) return saved;
  const browser = navigator.language.toLowerCase();
  if (browser.startsWith('zh')) return 'zh';
  if (browser.startsWith('ja')) return 'ja';
  return 'en';
}

function setLang(lang) {
  if (!I18N[lang]) return;
  localStorage.setItem(LANG_KEY, lang);
  applyLang(lang);
  updateSwitcher(lang);
}

function t(key, lang) {
  return I18N[lang]?.[key] ?? I18N['en']?.[key] ?? key;
}

function applyLang(lang) {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang === 'ja' ? 'ja' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key, lang);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.getAttribute('data-i18n-attr') === 'placeholder') {
        el.placeholder = val;
      }
    } else {
      el.innerHTML = val;
    }
  });

  // Page title
  const titleKey = document.body.getAttribute('data-page');
  if (titleKey) {
    const titles = {
      en: { index: 'NCM Converter — Free Online NCM to MP3/FLAC Tool', about: 'About Us — NCMConverter', contact: 'Contact Us — NCMConverter', privacy: 'Privacy Policy — NCMConverter', terms: 'Terms of Service — NCMConverter' },
      zh: { index: 'NCM 转换器 — 免费在线 NCM 转 MP3/FLAC', about: '关于我们 — NCMConverter', contact: '联系我们 — NCMConverter', privacy: '隐私政策 — NCMConverter', terms: '服务条款 — NCMConverter' },
      ja: { index: 'NCM コンバーター — 無料オンライン NCM→MP3/FLAC ツール', about: '会社概要 — NCMConverter', contact: 'お問い合わせ — NCMConverter', privacy: 'プライバシーポリシー — NCMConverter', terms: '利用規約 — NCMConverter' },
    };
    document.title = titles[lang]?.[titleKey] || document.title;
  }
}

function updateSwitcher(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

function injectLangSwitcher() {
  const nav = document.querySelector('nav');
  if (!nav || document.querySelector('.lang-switcher')) return;

  const switcher = document.createElement('div');
  switcher.className = 'lang-switcher';
  switcher.innerHTML = `
    <button class="lang-btn" data-lang="en">EN</button>
    <button class="lang-btn" data-lang="zh">中</button>
    <button class="lang-btn" data-lang="ja">日</button>
  `;
  nav.appendChild(switcher);

  switcher.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });
}

// ─── Switcher styles ──────────────────────────────────────────────────────────

function injectStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .lang-switcher {
      display: flex;
      gap: 2px;
      background: rgba(0,0,0,.05);
      border-radius: 8px;
      padding: 3px;
      margin-left: 20px;
    }
    .lang-btn {
      background: none;
      border: none;
      border-radius: 6px;
      padding: 4px 9px;
      font-size: 12px;
      font-weight: 600;
      color: var(--text-muted, #6B625C);
      cursor: pointer;
      transition: background 0.15s, color 0.15s;
      font-family: inherit;
      letter-spacing: 0.01em;
    }
    .lang-btn:hover { color: var(--text, #2C2825); }
    .lang-btn.active {
      background: var(--surface, #FEFCF9);
      color: var(--text, #2C2825);
      box-shadow: 0 1px 3px rgba(0,0,0,.08);
    }
  `;
  document.head.appendChild(style);
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  injectStyles();
  injectLangSwitcher();
  const lang = getLang();
  applyLang(lang);
  updateSwitcher(lang);
});
