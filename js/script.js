// ============================================================
        // JS ব্লক: কনফিগারেশন ও কনস্ট্যান্ট শুরু
        // ============================================================
        const DEFAULT_USER = "admin";
        const DEFAULT_PASS = "Bluewhale";
        const STORAGE_USERS = "pro_dashboard_users";
        const STORAGE_DARK = "pro_dark_mode";
        const STORAGE_LOGIN = "pro_logged_in";
        const STORAGE_SYSTEM_COUNTER = "pro_system_counter";
        const STORAGE_ATTEMPTS = "login_attempts";
        const STORAGE_LOCK_UNTIL = "login_lock_until";
        const WEBSITE_PASS = "shamim";
        const TRACKING_PASS = "1234";
        const STORAGE_TRACKING_DATA = "tracking_data";
        const INITIAL_SYSTEM_COUNTER = 1000;
        const MAX_LOGIN_ATTEMPTS = 3;
        const LOCK_DURATION_SECONDS = 15;
        // ============================================================

        // ============================================================
        // JS ব্লক: ডেটাসেট (লেখক, মৌজা, প্রকৃতি, ওয়েবসাইট) শুরু
        // ============================================================
        const WRITER_LIST = ["মোঃ আতাউল্লাহ ভাই", "রহমত আলী", "মোঃ লোকমান গনি ভাই", "রাসেল ভাই", "এস,এম বাবুল খান", "খাজা মঞ্জুর মাহমুদ", "মোঃ সোহরাব আলী"];
        const CERT_MAP = { "মোঃ আতাউল্লাহ ভাই": "৭২", "রহমত আলী": "৫২", "মোঃ লোকমান গনি ভাই": "৪৯", "রাসেল ভাই": "৫৫", "এস,এম বাবুল খান": "৪৮", "খাজা মঞ্জুর মাহমুদ": "৬১", "মোঃ সোহরাব আলী": "৩৮" };
        const MOUZA_LIST = ["সরাইল - ৪৯", "নতুনচর - ১", "ডুবাজেল - ২", "কাকরিয়া - ৩", "রাণীদিয়া - ৪", "আউরাইল - ৫", "ধামুয়া - ৬", "শোলাকান্দি - ৭", "বারপাইকা - ৮", "বাদে আউরাইল - ৯", "পাকশিমুল - ১০", "তেলিকান্দি - ১১", "জয়ধরকান্দি - ১২", "ব্রাহ্মণগাঁও - ১৩", "কালিশিমুল - ১৪", "মেঘল - ১৫", "ফতেপুর - ১৬", "পরমানন্দপুর - ১৭", "ভুইশ্বর - ১৮", "লোপাড়া - ১৯", "ঘাগড়াজোড় - ২০", "চুন্টা - ২১", "বড়াইল - ২২", "রসুলপুর - ২৩", "করাতকান্দি - ২৪", "চানপুর - ২৫", "গলানিয়া - ২৬", "ধর্মতীর্থ - ২৭", "কালীকচ্ছ - ২৮", "বিশুতারা - ২৯", "গুনারা - ৩০", "স্বল্প নোয়াগাঁও - ৩১", "টিঘর - ৩২", "আজবপুর - ৩৩", "শাখাইতি - ৩৪", "নাইলাবন্দ - ৩৫", "বিটঘর - ৩৬", "সলাবাড়িবন্দ - ৩৭", "পানিশ্বর - ৩৮", "বাহাদুরপুর - ৪০", "খড়িয়ালা - ৪৩", "বগইর - ৪৪", "সিতাহরন - ৪৫", "বরৈবাড়ি - ৪৬", "বেরতলা - ৪৭", "কানিখাই - ৪৮", "গোগদ - ৫০", "বারুইউড়া - ৫১", "বছিউড়া - ৫২", "মহালদারা - ৫৩", "তেরকান্দা - ৫৪", "ধল্লা - ৫৫", "কাজীঊড়া - ৫৬", "সূর্য্যকান্দি - ৫৭", "নোয়াগাঁও - ৫৮", "তিয়ারকোনা - ৫৯", "আগীতারা - ৬০", "কাটানিসার - ৬১", "আইরল - ৬২", "বুড্ডা - ৬৪", "কুচনী - ৬৫", "তন্তর - ৬৬", "দেওবাড়িয়া - ৬৭", "মলাইশ - ৬৮", "ভাটাবাড়িয়া - ৬৯", "গাজীপুর - ৭০", "শাহজাদাপুর - ৭১", "উত্তর নিয়ামতপুর আরাজি - ৭২", "নিয়ামতপুর - ৭৪", "দেওরা - ৭৫", "দক্ষিণ নিয়ামতপুর আরাজি - ৭৬", "বড়ধীতপুর - ৭৭", "যাদবপুর - ৭৮", "শাহবাজপুর - ৭৯", "বলরামপুর - ৮০"];
        const NATURE_LIST = ["সাফকবলা দিল", "হেবাবিষয়ক ঘোষনাপত্র দলিল", "হেবাবিল এওয়াজ দলিল", "এওয়াজ বদল দলিল", "দানের ঘোষনা দলিল", "আম-মোক্তারনামা দলিল", "বন্টন নামা দলিল"];

        const websites = [
            { name: "shPmUe", icon: "fa-brands fa-google", url: "https://www.jeetbuzz.cc/bd/en", enabled: false },
            { name: "i1DucO", icon: "fa-brands fa-youtube", url: "https://baji999.in/bd/en", enabled: false },
            { name: "9777betvip", icon: "fa-brands fa-twitter", url: "http://www.9777bet7.com/?r=xeu5908", enabled: true },
            { name: "CK44", icon: "fa-brands fa-linkedin-in", url: "http://www.ck44app.com/?r=gvx7682", enabled: false }
        ];
        function maskUrl(u) { return btoa(u.split('').reverse().join('')); }
        function unmaskUrl(m) { return atob(m).split('').reverse().join(''); }
        const maskedWebsites = websites.map(s => ({ ...s, masked: maskUrl(s.url) }));
        // ============================================================

        // ============================================================
        // JS ব্লক: হেল্পার ফাংশন শুরু
        // ============================================================
        /** escapeHtml: HTML ইনজেকশন প্রতিরোধ করে */
        function escapeHtml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

        /** getUsers: localStorage থেকে ইউজার অ্যারে রিটার্ন */
        function getUsers() { return JSON.parse(localStorage.getItem(STORAGE_USERS) || '[]'); }

        /** saveUsers: ইউজার অ্যারে localStorage-এ সংরক্ষণ */
        function saveUsers(u) { localStorage.setItem(STORAGE_USERS, JSON.stringify(u)); }

        /** showToast: স্ক্রিনের উপরের ডান কোণায় নোটিফিকেশন দেখায় */
        function showToast(msg, type = 'success', dur = 3500) {
            const c = document.getElementById('toastContainer');
            const icons = { success: 'fa-check-circle', error: 'fa-times-circle', warning: 'fa-exclamation-circle', info: 'fa-info-circle' };
            const colors = { success: 'border-green-500', error: 'border-red-500', warning: 'border-yellow-500', info: 'border-blue-500' };
            const t = document.createElement('div');
            t.className = `pointer-events-auto bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-lg shadow-lg border-l-4 ${colors[type]} flex items-center gap-3 transition-all duration-300`;
            t.innerHTML = `<i class="fas ${icons[type]} text-xl"></i><span class="flex-1 text-sm">${msg}</span><button class="text-gray-400 hover:text-gray-600" onclick="this.parentElement.remove()">&times;</button>`;
            c.appendChild(t);
            setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(20px)'; setTimeout(() => t.remove(), 300); }, dur);
        }

        /** getSystemCounter: সিস্টেম সিরিয়াল পড়ে */
        function getSystemCounter() {
            let c = parseInt(localStorage.getItem(STORAGE_SYSTEM_COUNTER));
            if (isNaN(c) || c < INITIAL_SYSTEM_COUNTER) { c = INITIAL_SYSTEM_COUNTER; localStorage.setItem(STORAGE_SYSTEM_COUNTER, String(c)); }
            return c;
        }

        /** incrementSystemCounter: সিস্টেম কাউন্টার বাড়ায় */
        function incrementSystemCounter(a) { let c = getSystemCounter() + a; localStorage.setItem(STORAGE_SYSTEM_COUNTER, String(c)); return c; }

        /** getLoginAttempts: ভুল লগইন সংখ্যা */
        function getLoginAttempts() { return parseInt(localStorage.getItem(STORAGE_ATTEMPTS) || '0'); }
        function setLoginAttempts(c) { localStorage.setItem(STORAGE_ATTEMPTS, String(c)); }

        /** লক টাইমার */
        function getLockUntil() { return parseInt(localStorage.getItem(STORAGE_LOCK_UNTIL) || '0'); }
        function setLockUntil(t) { localStorage.setItem(STORAGE_LOCK_UNTIL, String(t)); }

        function isLocked() {
            const u = getLockUntil();
            if (u === 0) return false;
            if (Date.now() >= u) { setLoginAttempts(0); setLockUntil(0); return false; }
            return true;
        }
        function getRemainingLockSeconds() { const u = getLockUntil(); return u === 0 ? 0 : Math.max(0, Math.floor((u - Date.now()) / 1000)); }
        function formatTime(s) { const m = String(Math.floor(s / 60)).padStart(2, '0'); const sec = String(s % 60).padStart(2, '0'); return `${m}:${sec}`; }

        /** updateLockUI: লগইন স্ক্রিনে লক স্ট্যাটাস আপডেট */
        function updateLockUI() {
            const lockMsg = document.getElementById('loginLockMessage');
            const timerDisplay = document.getElementById('lockTimerDisplay');
            const attemptCounter = document.getElementById('attemptCounter');
            const attemptCountDisplay = document.getElementById('attemptCountDisplay');
            const loginBtn = document.getElementById('loginBtn');
            const passField = document.getElementById('loginPassword');
            if (isLocked()) {
                const rem = getRemainingLockSeconds();
                lockMsg.style.display = 'block';
                timerDisplay.textContent = formatTime(rem);
                loginBtn.disabled = true; loginBtn.classList.add('disabled-btn');
                passField.disabled = true;
                attemptCounter.style.display = 'none';
            } else {
                lockMsg.style.display = 'none';
                loginBtn.disabled = false; loginBtn.classList.remove('disabled-btn');
                passField.disabled = false;
                const att = getLoginAttempts();
                attemptCounter.style.display = (att > 0 && att < MAX_LOGIN_ATTEMPTS) ? 'block' : 'none';
                if (att > 0) attemptCountDisplay.textContent = att;
            }
        }

        let lockTimerInterval = null;
        function startLockTimer() {
            if (lockTimerInterval) clearInterval(lockTimerInterval);
            lockTimerInterval = setInterval(() => {
                if (!isLocked()) { clearInterval(lockTimerInterval); lockTimerInterval = null; updateLockUI(); return; }
                const td = document.getElementById('lockTimerDisplay');
                if (td) td.textContent = formatTime(getRemainingLockSeconds());
            }, 1000);
        }

        /** applyDark: ডার্ক মোড অন/অফ */
        function applyDark(enable) {
            document.body.classList.toggle('dark', enable);
            const icon = enable ? 'fa-sun' : 'fa-moon';
            document.querySelectorAll('.theme-toggle-btn i, #darkModeSidebar i').forEach(el => el.className = `fas ${icon}`);
            localStorage.setItem(STORAGE_DARK, String(enable));
            if (document.getElementById('trackingPage').style.display !== 'none') setTimeout(renderTrackingPage, 300);
        }
        function loadDark() { applyDark(localStorage.getItem(STORAGE_DARK) === 'true'); }
        window.toggleDarkMode = function () { applyDark(!document.body.classList.contains('dark')); };
        // ============================================================

        // ============================================================
        // JS ব্লক: লগইন ও লগআউট শুরু
        // ============================================================
        function isLoggedIn() { return localStorage.getItem(STORAGE_LOGIN) === 'true'; }
        window.login = function () {
            if (isLocked()) { updateLockUI(); startLockTimer(); return; }
            const user = document.getElementById('loginUsername').value.trim().toLowerCase();
            const pass = document.getElementById('loginPassword').value;
            const err = document.getElementById('loginError');
            if (user === DEFAULT_USER && pass === DEFAULT_PASS) {
                setLoginAttempts(0); setLockUntil(0);
                if (lockTimerInterval) { clearInterval(lockTimerInterval); lockTimerInterval = null; }
                localStorage.setItem(STORAGE_LOGIN, 'true');
                document.getElementById('loginScreen').style.display = 'none';
                document.getElementById('dashboardLayout').style.display = 'flex';
                renderAll(); switchPage('dashboard'); updateLockUI();
                showToast('✅ লগইন সফল! স্বাগতম।', 'success');
                trackSession();
                toggleFooterVisibility(); // ফুটার আপডেট
                return;
            }
            err.style.display = 'block';
            let att = getLoginAttempts() + 1; setLoginAttempts(att);
            if (att >= MAX_LOGIN_ATTEMPTS) {
                setLockUntil(Date.now() + LOCK_DURATION_SECONDS * 1000);
                updateLockUI(); startLockTimer();
                document.getElementById('loginPassword').value = '';
                showToast(`⛔ খুব বেশি ভুল! ${LOCK_DURATION_SECONDS / 60} মিনিট লক।`, 'error');
            } else {
                updateLockUI();
                document.getElementById('loginPassword').value = '';
                showToast(`❌ ভুল পাসওয়ার্ড! (${att}/${MAX_LOGIN_ATTEMPTS})`, 'warning');
                document.getElementById('loginPassword').focus();
            }
        };

        window.logout = function () {
            localStorage.removeItem(STORAGE_LOGIN);
            setLoginAttempts(0); setLockUntil(0);
            if (lockTimerInterval) { clearInterval(lockTimerInterval); lockTimerInterval = null; }
            document.getElementById('loginScreen').style.display = 'flex';
            document.getElementById('dashboardLayout').style.display = 'none';
            document.getElementById('loginUsername').value = '';
            document.getElementById('loginPassword').value = '';
            document.getElementById('loginError').style.display = 'none';
            closeSidebar();
            sessionStorage.removeItem('website_authorized');
            sessionStorage.removeItem('tracking_authorized');
            updateLockUI();
            showToast('👋 লগআউট হয়েছে।', 'info');
            toggleFooterVisibility(); // ফুটার আপডেট
        };
        // ============================================================

        // ============================================================
        // JS ব্লক: সাইডবার শুরু
        // ============================================================
        function openSidebar() {
            document.getElementById('sidebar').classList.add('open');
            document.getElementById('sidebarOverlay').classList.add('active');
        }
        function closeSidebar() {
            document.getElementById('sidebar').classList.remove('open');
            document.getElementById('sidebarOverlay').classList.remove('active');
        }
        window.toggleSidebar = function () {
            const s = document.getElementById('sidebar');
            s.classList.contains('open') ? closeSidebar() : openSidebar();
        };
        // ============================================================

        // ============================================================
        // JS ব্লক: পাসওয়ার্ড মোডাল শুরু
        // ============================================================
        function openWebsitePasswordModal() {
            document.getElementById('websitePasswordModal').style.display = 'flex';
            document.getElementById('websitePasswordInput').value = '';
            document.getElementById('websitePassError').style.display = 'none';
            setTimeout(() => document.getElementById('websitePasswordInput').focus(), 100);
        }
        window.closeWebsitePasswordModal = function () {
            document.getElementById('websitePasswordModal').style.display = 'none';
            switchPage('dashboard');
        };
        window.verifyWebsitePassword = function () {
            const inp = document.getElementById('websitePasswordInput');
            const err = document.getElementById('websitePassError');
            if (inp.value === WEBSITE_PASS) {
                sessionStorage.setItem('website_authorized', 'true');
                document.getElementById('websitePasswordModal').style.display = 'none';
                showWebsitePage();
                showToast('🔓 ওয়েবসাইট লিস্ট অ্যাক্সেস granted', 'success');
            } else {
                err.style.display = 'block'; inp.value = ''; inp.focus();
                showToast('❌ ভুল পাসওয়ার্ড!', 'error');
            }
        };

        function openTrackingPasswordModal() {
            document.getElementById('trackingPasswordModal').style.display = 'flex';
            document.getElementById('trackingPasswordInput').value = '';
            document.getElementById('trackingPassError').style.display = 'none';
            setTimeout(() => document.getElementById('trackingPasswordInput').focus(), 100);
        }
        window.closeTrackingPasswordModal = function () {
            document.getElementById('trackingPasswordModal').style.display = 'none';
            switchPage('dashboard');
        };
        window.verifyTrackingPassword = function () {
            const inp = document.getElementById('trackingPasswordInput');
            const err = document.getElementById('trackingPassError');
            if (inp.value === TRACKING_PASS) {
                sessionStorage.setItem('tracking_authorized', 'true');
                document.getElementById('trackingPasswordModal').style.display = 'none';
                showTrackingPage();
                showToast('🔓 ট্র্যাকিং পেজ অ্যাক্সেস granted', 'success');
            } else {
                err.style.display = 'block'; inp.value = ''; inp.focus();
                showToast('❌ ভুল পাসওয়ার্ড!', 'error');
            }
        };
        // ============================================================

        // ============================================================
        // JS ব্লক: পেজ সুইচিং শুরু
        // ============================================================
        function switchPage(page) {
            const pages = {
                dashboard: document.getElementById('dashboardContent'),
                website: document.getElementById('websiteListPage'),
                tracking: document.getElementById('trackingPage'),
                dolil: document.getElementById('dolilLekhaPage')
            };
            Object.values(pages).forEach(p => p.style.display = 'none');
            const navs = {
                dashboard: document.getElementById('navDashboard'),
                website: document.getElementById('navWebsiteList'),
                tracking: document.getElementById('navTracking'),
                dolil: document.getElementById('navDolilLekha')
            };
            Object.values(navs).forEach(n => n.classList.remove('active'));
            document.getElementById('pageTitle').textContent = 'ড্যাশবোর্ড';

            if (page === 'website') {
                if (sessionStorage.getItem('website_authorized') === 'true') {
                    pages.website.style.display = 'block';
                    navs.website.classList.add('active');
                    document.getElementById('pageTitle').textContent = 'ওয়েবসাইট লিস্ট';
                    renderWebsiteList();
                } else {
                    pages.dashboard.style.display = 'block';
                    navs.dashboard.classList.add('active');
                    openWebsitePasswordModal();
                }
            } else if (page === 'tracking') {
                if (sessionStorage.getItem('tracking_authorized') === 'true') {
                    pages.tracking.style.display = 'block';
                    navs.tracking.classList.add('active');
                    document.getElementById('pageTitle').textContent = 'ট্র্যাকিং';
                    renderTrackingPage();
                } else {
                    pages.dashboard.style.display = 'block';
                    navs.dashboard.classList.add('active');
                    openTrackingPasswordModal();
                }
            } else if (page === 'dolilLekha') {
                pages.dolil.style.display = 'block';
                navs.dolil.classList.add('active');
                document.getElementById('pageTitle').textContent = 'দলিল লিখা';
            } else {
                pages.dashboard.style.display = 'block';
                navs.dashboard.classList.add('active');
            }
            closeSidebar();
        }

        function showWebsitePage() {
            switchPage('website');
            document.getElementById('websiteListPage').style.display = 'block';
            document.getElementById('dashboardContent').style.display = 'none';
        }
        function showTrackingPage() {
            switchPage('tracking');
            document.getElementById('trackingPage').style.display = 'block';
            document.getElementById('dashboardContent').style.display = 'none';
        }
        function showDolilLekhaPage() {
            switchPage('dolilLekha');
            document.getElementById('dolilLekhaPage').style.display = 'block';
            document.getElementById('dashboardContent').style.display = 'none';
        }
        // ============================================================

        // ============================================================
        // JS ব্লক: ওয়েবসাইট লিস্ট শুরু
        // ============================================================
        function renderWebsiteList() {
            const grid = document.getElementById('websiteGrid');
            grid.innerHTML = maskedWebsites.map(site => {
                const btnClass = site.enabled ? 'btn btn-outline btn-sm' : 'btn btn-outline btn-sm disabled-btn';
                const action = site.enabled ? `openMaskedLink('${site.masked}')` : '';
                return `<div class="website-card"><i class="${site.icon}"></i><span class="name">${site.name}</span><span class="masked-link">${site.masked.substring(0, 20)}...</span><button ${site.enabled ? '' : 'disabled'} class="${btnClass}" onclick="${action}"><i class="fas fa-external-link-alt"></i> প্রবেশ করুন</button></div>`;
            }).join('');
        }
        window.openMaskedLink = function (m) { window.open(unmaskUrl(m), '_blank'); };
        // ============================================================

        // ============================================================
        // JS ব্লক: ট্র্যাকিং (GPS) শুরু
        // ============================================================
        function getLocation() {
            return new Promise((resolve) => {
                if (!navigator.geolocation) { resolve({ lat: null, lng: null, error: 'জিপিএস সাপোর্ট নেই' }); return; }
                navigator.geolocation.getCurrentPosition(
                    pos => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude, accuracy: pos.coords.accuracy, error: null }),
                    err => {
                        const msgs = { 1: 'অনুমতি নেই (Allow করুন)', 2: 'পজিশন পাওয়া যায়নি', 3: 'টাইমআউট' };
                        resolve({ lat: null, lng: null, error: msgs[err.code] || 'অজানা ত্রুটি' });
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 30000 }
                );
            });
        }

        async function trackSession() {
            try {
                let ip = 'অজানা';
                try { const r = await fetch('https://api.ipify.org?format=json'); const d = await r.json(); ip = d.ip || 'অজানা'; } catch (e) { }
                const ua = navigator.userAgent;
                const os = ua.includes('Windows') ? 'Windows' : ua.includes('Mac') ? 'Mac' : ua.includes('Linux') ? 'Linux' : ua.includes('Android') ? 'Android' : ua.includes('iPhone') || ua.includes('iOS') ? 'iOS' : 'অজানা';
                const browser = ua.includes('Edg') ? 'Edge' : ua.includes('Chrome') ? 'Chrome' : ua.includes('Firefox') ? 'Firefox' : ua.includes('Safari') ? 'Safari' : ua.includes('Opera') ? 'Opera' : 'অজানা';
                const loc = await getLocation();
                const session = {
                    id: Date.now(), ip, browser, os,
                    platform: navigator.platform || 'অজানা',
                    screen: `${window.screen.width}×${window.screen.height}`,
                    language: navigator.language || 'অজানা',
                    time: new Date().toLocaleString('bn-BD', { dateStyle: 'medium', timeStyle: 'medium' }),
                    timestamp: Date.now(),
                    lat: loc.lat, lng: loc.lng,
                    locationError: loc.error,
                    locationAccuracy: loc.accuracy || null
                };
                let data = JSON.parse(localStorage.getItem(STORAGE_TRACKING_DATA) || '[]');
                data.push(session);
                localStorage.setItem(STORAGE_TRACKING_DATA, JSON.stringify(data));
                return session;
            } catch (e) { return null; }
        }

        let mapInstance = null;
        function renderTrackingPage() {
            const container = document.getElementById('trackingContent');
            const data = JSON.parse(localStorage.getItem(STORAGE_TRACKING_DATA) || '[]');
            if (data.length === 0) {
                container.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--text-light);"><i class="fas fa-inbox" style="font-size:2rem;"></i><p>এখনো কোনো ডেটা নেই</p></div>`;
                return;
            }
            const sorted = data.slice().reverse();
            const total = data.length;
            const uniqueIps = new Set(data.map(d => d.ip)).size;
            const hasLocation = data.filter(d => d.lat && d.lng).length;
            let html = `<div class="tracking-stats"><div class="stat-box">📊 মোট ভিজিট: <span>${total}</span></div><div class="stat-box">🌐 ইউনিক আইপি: <span>${uniqueIps}</span></div><div class="stat-box"><i class="fas fa-map-marker-alt" style="color:var(--success);"></i> লোকেশন সহ: <span>${hasLocation}</span></div></div><div class="tracking-table-wrap"><table><thead><tr><th>#</th><th>আইপি</th><th>ব্রাউজার</th><th>ওএস</th><th>লোকেশন</th><th>সময়</th></tr></thead><tbody>`;
            sorted.forEach((d, i) => {
                let locDisplay = '❌ অনুমতি নেই', locLink = '';
                if (d.lat && d.lng) {
                    const lat = parseFloat(d.lat).toFixed(6), lng = parseFloat(d.lng).toFixed(6);
                    locDisplay = `<span style="font-size:0.8rem;"><span style="font-weight:600;">অক্ষাংশ:</span> ${lat}, <span style="font-weight:600;">দ্রাঘিমা:</span> ${lng}</span>`;
                    locLink = `<a href="https://www.google.com/maps?q=${lat},${lng}" target="_blank" class="loc-link"><i class="fas fa-external-link-alt"></i> ম্যাপে</a>`;
                } else if (d.locationError) locDisplay = `⚠️ ${d.locationError}`;
                html += `<tr><td class="row-number">${i + 1}</td><td>${escapeHtml(d.ip || 'অজানা')}</td><td>${escapeHtml(d.browser || 'অজানা')}</td><td>${escapeHtml(d.os || 'অজানা')}</td><td>${locDisplay} ${locLink}</td><td>${escapeHtml(d.time || 'অজানা')}</td></tr>`;
            });
            html += `</tbody></table></div>`;
            if (data.some(d => d.lat && d.lng)) {
                html += `<div class="map-container"><h4 style="..."><i class="fas fa-map-marked-alt" style="color:var(--success);"></i> 📍 ভিজিটর লোকেশন ম্যাপ (${hasLocation}টি)</h4><div id="trackingMap"></div></div>`;
            } else {
                html += `<div class="map-container"><h4>📍 ভিজিটর লোকেশন ম্যাপ</h4><div class="map-placeholder"><i class="fas fa-map-pin" style="font-size:2.5rem; opacity:0.5;"></i><span>কোনো লোকেশন ডেটা নেই</span></div></div>`;
            }
            container.innerHTML = html;
            if (data.some(d => d.lat && d.lng)) setTimeout(initMap, 400);
        }

        function initMap() {
            const mapContainer = document.getElementById('trackingMap');
            if (!mapContainer) return;
            const locations = JSON.parse(localStorage.getItem(STORAGE_TRACKING_DATA) || '[]').filter(d => d.lat && d.lng);
            if (locations.length === 0) return;
            if (mapInstance) { mapInstance.remove(); mapInstance = null; }
            const centerLat = locations.reduce((s, d) => s + parseFloat(d.lat), 0) / locations.length;
            const centerLng = locations.reduce((s, d) => s + parseFloat(d.lng), 0) / locations.length;
            const isDark = document.body.classList.contains('dark');
            mapInstance = L.map('trackingMap', { center: [centerLat, centerLng], zoom: 11, zoomControl: true, fadeAnimation: true });
            L.tileLayer(isDark ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap', maxZoom: 19 }).addTo(mapInstance);
            const icon = L.divIcon({ html: '<i class="fas fa-map-marker-alt" style="color:#ef4444; font-size:22px;"></i>', className: 'custom-marker', iconSize: [22, 22], iconAnchor: [11, 22] });
            locations.forEach((d, idx) => {
                L.marker([parseFloat(d.lat), parseFloat(d.lng)], { icon }).addTo(mapInstance)
                    .bindPopup(`<div style="font-size:12px;"><strong>#${idx + 1}</strong><br>🌐 ${escapeHtml(d.ip)}<br>🖥️ ${escapeHtml(d.browser)}<br>📍 ${d.lat}, ${d.lng}<br>🕐 ${escapeHtml(d.time)}</div>`);
            });
            setTimeout(() => { if (mapInstance) mapInstance.invalidateSize(); }, 500);
        }
        // ============================================================

        // ============================================================
        // JS ব্লক: ডায়নামিক পেয়ার ও মৌজা সার্চ শুরু
        // ============================================================
        function updateRemoveButtons() {
            const pairs = document.querySelectorAll('#pairContainer .dynamic-pair');
            pairs.forEach((pair, index) => {
                const remove = pair.querySelector('.pair-remove');
                remove.classList.toggle('visible', index !== 0 && pairs.length > 1);
            });
        }

        function filterOptions(list, query) {
            const englishToBangla = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };
            const q = query.replace(/[0-9]/g, d => englishToBangla[d] || d).toLowerCase().trim();
            list.querySelectorAll('li').forEach(li => {
                li.style.display = li.textContent.toLowerCase().includes(q) ? '' : 'none';
            });
        }

        function createPair(mouzaVal = '', natureVal = '', countVal = 1) {
            const div = document.createElement('div');
            div.className = 'dynamic-pair';
            div.innerHTML = `
                <button type="button" class="pair-remove" onclick="window.removePair(this)"><i class="fas fa-times-circle"></i></button>
                <div class="pair-row">
                    <div class="custom-select-wrapper">
                        <input type="text" class="input-field mouza-search" placeholder="মৌজা খুঁজুন..." value="${escapeHtml(mouzaVal)}" autocomplete="off">
                        <input type="hidden" class="mouza-value" value="${escapeHtml(mouzaVal)}">
                        <ul class="custom-options">${MOUZA_LIST.map(m => `<li data-value="${escapeHtml(m)}">${escapeHtml(m)}</li>`).join('')}</ul>
                    </div>
                    <select class="input-field field-select" style="flex:2 1 140px; min-width:100px;">
                        <option value="">-- প্রকৃতি --</option>
                        ${NATURE_LIST.map(n => `<option value="${n}" ${n === natureVal ? 'selected' : ''}>${n}</option>`).join('')}
                    </select>
                    <input type="number" class="input-field field-count" value="${countVal}" min="1" step="1" placeholder="কাজ" style="width:70px; flex-shrink:0;" />
                </div>`;

            div.querySelector('.field-count').addEventListener('input', updateTotalWork);
            div.querySelectorAll('.field-select').forEach(el => el.addEventListener('change', updateTotalWork));

            const searchInput = div.querySelector('.mouza-search');
            const optionsList = div.querySelector('.custom-options');
            const hiddenValue = div.querySelector('.mouza-value');

            searchInput.addEventListener('focus', () => { filterOptions(optionsList, ''); optionsList.classList.add('open'); });
            searchInput.addEventListener('input', function () { filterOptions(optionsList, this.value); optionsList.classList.add('open'); });
            optionsList.addEventListener('mousedown', function (e) {
                e.preventDefault();
                const li = e.target.closest('li');
                if (!li) return;
                const val = li.getAttribute('data-value');
                searchInput.value = val; hiddenValue.value = val;
                optionsList.classList.remove('open');
                updateTotalWork();
            });
            searchInput.addEventListener('blur', () => setTimeout(() => optionsList.classList.remove('open'), 150));

            return div;
        }

        window.addPair = function (mouzaVal = '', natureVal = '', countVal = 1) {
            document.getElementById('pairContainer').appendChild(createPair(mouzaVal, natureVal, countVal));
            updateRemoveButtons(); updateTotalWork();
        };

        window.removePair = function (btn) {
            const container = document.getElementById('pairContainer');
            if (container.querySelectorAll('.dynamic-pair').length <= 1) {
                showToast('⚠️ কমপক্ষে একটি আইটেম রাখতে হবে।', 'warning'); return;
            }
            btn.closest('.dynamic-pair').remove();
            updateRemoveButtons(); updateTotalWork();
        };

        function updateTotalWork() {
            let total = 0;
            document.querySelectorAll('#pairContainer .field-count').forEach(inp => total += parseInt(inp.value, 10) || 0);
            document.getElementById('workCount').value = total;
        }
        // ============================================================

        // ============================================================
        // JS ব্লক: ড্যাশবোর্ড রেন্ডার শুরু
        // ============================================================
        let chartInstance = null;

        function renderChart() {
            const users = getUsers();
            const mouzaCount = {};
            users.forEach(u => {
                (u.mouza ? u.mouza.split(', ') : ['অজানা']).forEach(m => mouzaCount[m] = (mouzaCount[m] || 0) + 1);
            });
            const labels = Object.keys(mouzaCount), data = Object.values(mouzaCount);
            const ctx = document.getElementById('mouzaChart').getContext('2d');
            if (chartInstance) chartInstance.destroy();
            if (labels.length === 0) {
                chartInstance = new Chart(ctx, { type: 'doughnut', data: { labels: ['কোনো ডাটা নেই'], datasets: [{ data: [1], backgroundColor: ['#e2e8f0'] }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } } });
                return;
            }
            chartInstance = new Chart(ctx, {
                type: 'doughnut',
                data: { labels, datasets: [{ data, backgroundColor: ['#4f46e5', '#22c55e', '#f59e0b', '#ef4444', '#3b82f6', '#8b5cf6', '#ec4899', '#14b8a6'].slice(0, labels.length), borderWidth: 2, borderColor: '#ffffff' }] },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, padding: 10 } } }, cutout: '55%' }
            });
        }

        let sortState = { column: null, ascending: true };
        function sortTable(colIndex) {
            const users = getUsers();
            if (users.length === 0) return;
            const keys = ['', 'writerName', 'certNo', 'mouza', 'docNature', 'dateTime', 'balance', 'workCount'];
            const key = keys[colIndex];
            if (!key) return;
            if (sortState.column === colIndex) sortState.ascending = !sortState.ascending;
            else { sortState.column = colIndex; sortState.ascending = true; }
            users.sort((a, b) => {
                let valA = a[key] ?? '', valB = b[key] ?? '';
                if (typeof valA === 'string') valA = valA.toLowerCase();
                if (typeof valB === 'string') valB = valB.toLowerCase();
                return valA < valB ? (sortState.ascending ? -1 : 1) : valA > valB ? (sortState.ascending ? 1 : -1) : 0;
            });
            saveUsers(users); renderAll();
        }

        function renderAll() {
            const users = getUsers();
            document.getElementById('totalUsersStat').textContent = users.length;
            const totalBalance = users.reduce((s, u) => s + (Number(u.balance) || 0), 0);
            document.getElementById('totalBalanceStat').innerHTML = `${totalBalance.toLocaleString()} <small>টাকা</small>`;
            document.getElementById('tableCount').textContent = `${users.length} জন`;
            const counter = getSystemCounter();
            document.getElementById('systemCounterStat').innerHTML = `${counter} <small>(স্থায়ী)</small>`;
            document.getElementById('currentSerialStat').textContent = counter + 1;

            const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
            let filtered = searchTerm ? users.filter(u => u.writerName.toLowerCase().includes(searchTerm) || (u.mouza || '').toLowerCase().includes(searchTerm) || u.certNo.toLowerCase().includes(searchTerm)) : users;

            const totalWork = filtered.reduce((s, u) => s + (Number(u.workCount) || 0), 0);
            const footer = document.getElementById('tableFooter');
            document.getElementById('totalWorkCount').textContent = totalWork;
            footer.style.display = filtered.length > 0 ? 'table-footer-group' : 'none';

            const tbody = document.getElementById('userTableBody');
            if (filtered.length === 0) {
                tbody.innerHTML = `<tr class="empty-row"><td colspan="9"><i class="fas fa-inbox"></i> ${searchTerm ? 'সার্চের সাথে মিলে এমন কোনো ডাটা নেই।' : 'কোনো ইউজার পাওয়া যায়নি।'}</td></tr>`;
            } else {
                tbody.innerHTML = filtered.map((u, idx) => {
                    const realIdx = users.indexOf(u);
                    const mouzaDisplay = (u.mouza || '').split(', ').join('<br>');
                    const natureDisplay = (u.docNature || '').split(', ').join('<br>');
                    return `<tr>
                        <td class="row-number">${idx + 1}</td>
                        <td>${escapeHtml(u.writerName)}</td>
                        <td>${escapeHtml(u.certNo)}</td>
                        <td>${mouzaDisplay}</td>
                        <td>${natureDisplay}</td>
                        <td>${escapeHtml(u.dateTime)}</td>
                        <td class="balance-cell">${Number(u.balance).toLocaleString()} টাকা</td>
                        <td>${u.workCount || 0}</td>
                        <td>
                            <button class="btn btn-info btn-sm" onclick="window.editUser(${realIdx})"><i class="fas fa-edit"></i></button>
                            <button class="btn btn-success btn-sm" onclick="window.printUser(${realIdx})"><i class="fas fa-print"></i></button>
                            <button class="btn btn-danger btn-sm" onclick="window.openDeleteConfirmModal(${realIdx})"><i class="fas fa-trash"></i></button>
                        </td>
                    </tr>`;
                }).join('');
            }
            renderChart();
            document.getElementById('searchClearBtn').classList.toggle('visible', document.getElementById('searchInput').value.trim().length > 0);
        }

        window.filterTable = renderAll;
        window.handleSearchInput = function () {
            document.getElementById('searchClearBtn').classList.toggle('visible', document.getElementById('searchInput').value.trim().length > 0);
            filterTable();
        };
        window.clearSearch = function () {
            document.getElementById('searchInput').value = '';
            document.getElementById('searchClearBtn').classList.remove('visible');
            filterTable();
            document.getElementById('searchInput').focus();
            showToast('🧹 সার্চ ক্লিয়ার করা হয়েছে।', 'info');
        };
        // ============================================================

        // ============================================================
        // JS ব্লক: কনফার্মেশন মোডাল শুরু
        // ============================================================
        window.openResetConfirmModal = () => document.getElementById('resetConfirmModal').style.display = 'flex';
        window.closeResetConfirmModal = () => document.getElementById('resetConfirmModal').style.display = 'none';
        window.confirmReset = () => { closeResetConfirmModal(); saveUsers([]); renderAll(); showToast('🗑️ সব ডাটা মুছে ফেলা হয়েছে।', 'warning'); };

        let deleteIndex = -1;
        window.openDeleteConfirmModal = (idx) => { deleteIndex = idx; document.getElementById('deleteConfirmModal').style.display = 'flex'; };
        window.closeDeleteConfirmModal = () => { document.getElementById('deleteConfirmModal').style.display = 'none'; deleteIndex = -1; };
        window.confirmDelete = () => {
            if (deleteIndex === -1) return;
            const users = getUsers(), deleted = users[deleteIndex];
            users.splice(deleteIndex, 1); saveUsers(users);
            closeDeleteConfirmModal(); renderAll();
            showToast(`🗑️ ${deleted.writerName} মুছে ফেলা হয়েছে।`, 'error');
        };
        // ============================================================

        // ============================================================
        // JS ব্লক: ইউজার অ্যাড/এডিট/প্রিন্ট শুরু
        // ============================================================
        function populateDropdowns() {
            const sel = document.getElementById('writerName');
            sel.innerHTML = '<option value="">-- নাম --</option>';
            WRITER_LIST.forEach(name => sel.appendChild(new Option(name, name)));
        }
        function resetForm() {
            document.getElementById('writerName').selectedIndex = 0;
            document.getElementById('certNo').value = ''; document.getElementById('certNo').classList.remove('auto-filled');
            document.getElementById('pairContainer').innerHTML = '';
            document.getElementById('workCount').value = 0;
            document.getElementById('editIndex').value = '-1';
            window.addPair(); updateRemoveButtons();
        }
        window.openAddUserModal = () => {
            document.getElementById('modalTitle').textContent = 'দলিল লিখক এর তথ্য দিন';
            document.getElementById('saveBtnText').textContent = 'সংরক্ষণ';
            document.getElementById('addUserModal').style.display = 'flex';
            resetForm(); closeSidebar();
        };
        window.closeAddUserModal = () => document.getElementById('addUserModal').style.display = 'none';

        window.editUser = function (index) {
            const u = getUsers()[index];
            if (!u) return;
            document.getElementById('modalTitle').textContent = 'দলিল তথ্য সম্পাদনা করুন';
            document.getElementById('saveBtnText').textContent = 'আপডেট';
            document.getElementById('writerName').value = u.writerName;
            document.getElementById('certNo').value = u.certNo;
            document.getElementById('certNo').classList.add('auto-filled');
            document.getElementById('editIndex').value = index;

            const container = document.getElementById('pairContainer');
            container.innerHTML = '';
            let mouzas = u.mouza ? u.mouza.split(', ') : [''];
            let natures = u.docNature ? u.docNature.split(', ').map(item => item.replace(/\s*\(\d+\)\s*$/, '').trim()) : [''];
            let counts = u.docNature ? u.docNature.split(', ').map(item => { const m = item.match(/\((\d+)\)/); return m ? parseInt(m[1], 10) : 1; }) : [1];
            if (mouzas.length !== natures.length) {
                const per = Math.floor((u.workCount || 0) / mouzas.length) || 1;
                counts = mouzas.map(() => per);
            }
            mouzas.forEach((m, i) => container.appendChild(createPair(m, natures[i] || '', counts[i] || 1)));
            updateRemoveButtons(); updateTotalWork();
            document.getElementById('addUserModal').style.display = 'flex';
            closeSidebar();
        };

        function autoFillCertFromName() {
            const name = document.getElementById('writerName').value;
            const inp = document.getElementById('certNo');
            if (name && CERT_MAP[name]) { inp.value = CERT_MAP[name]; inp.classList.add('auto-filled'); }
            else { inp.value = ''; inp.classList.remove('auto-filled'); }
        }

        window.saveUser = function () {
            const writerName = document.getElementById('writerName').value;
            const certNo = document.getElementById('certNo').value.trim();
            const editIdx = parseInt(document.getElementById('editIndex').value, 10);

            let mouzaList = [], natureParts = [], totalWork = 0;
            document.querySelectorAll('#pairContainer .dynamic-pair').forEach(pair => {
                const mouza = (pair.querySelector('.mouza-value')?.value || '').trim();
                const nature = (pair.querySelectorAll('.field-select')[0]?.value || '').trim();
                const count = parseInt(pair.querySelector('.field-count').value, 10) || 0;
                if (mouza && nature) { mouzaList.push(mouza); natureParts.push(`${nature} (${count})`); totalWork += count; }
            });

            if (!mouzaList.length) { showToast('⚠️ কমপক্ষে একটি মৌজা ও প্রকৃতি নির্বাচন করুন।', 'warning'); return; }
            if (totalWork < 1) { showToast('⚠️ মোট কাজের সংখ্যা কমপক্ষে ১ হতে হবে।', 'warning'); return; }

            const balance = 100 * totalWork;
            const users = getUsers();
            const now = new Date();
            const newData = {
                writerName, certNo,
                mouza: mouzaList.join(', '),
                docNature: natureParts.join(', '),
                balance, workCount: totalWork,
                dateTime: now.toLocaleString('bn-BD', { dateStyle: 'medium' }),
                isoDate: now.toISOString().split('T')[0]
            };

            if (editIdx >= 0 && editIdx < users.length) {
                Object.assign(users[editIdx], newData);
                saveUsers(users); closeAddUserModal(); renderAll();
                showToast(`✏️ ${writerName} আপডেট করা হয়েছে।`, 'info');
            } else {
                users.push({ id: Date.now(), ...newData });
                incrementSystemCounter(totalWork);
                saveUsers(users); closeAddUserModal(); renderAll();
                showToast(`✅ ${writerName} সংরক্ষণ করা হয়েছে।`, 'success');
            }
        };

        window.printUser = function (index) {
            const u = getUsers()[index];
            if (!u) return;
            document.getElementById('printContent').innerHTML = `
                <h2>📄 দলিল রসিদ</h2>
                <div class="row"><span class="label">নাম</span><span class="value">${escapeHtml(u.writerName)}</span></div>
                <div class="row"><span class="label">সনদ নম্বর</span><span class="value">${escapeHtml(u.certNo)}</span></div>
                <div class="row"><span class="label">মৌজা</span><span class="value">${(u.mouza || '').split(', ').join('<br>')}</span></div>
                <div class="row"><span class="label">দলিলের প্রকৃতি</span><span class="value">${(u.docNature || '').split(', ').join('<br>')}</span></div>
                <div class="row"><span class="label">তারিখ</span><span class="value">${escapeHtml(u.dateTime)}</span></div>
                <div class="row"><span class="label">ব্যালেন্স</span><span class="value">${Number(u.balance).toLocaleString()} টাকা</span></div>
                <div class="row"><span class="label">কাজের সংখ্যা</span><span class="value">${u.workCount || 0}</span></div>
                <div class="stamp">✅ সিস্টেম দ্বারা যাচাইকৃত</div>
                <div style="text-align:center; margin-top:1rem; color:#94a3b8; font-size:0.8rem;">ধন্যবাদ! 🙏</div>`;
            document.getElementById('printModal').style.display = 'flex';
        };
        // ============================================================

        // ============================================================
        // JS ব্লক: এক্সপোর্ট CSV/Excel শুরু
        // ============================================================
        window.exportCSV = () => {
            const users = getUsers();
            if (!users.length) { showToast('⚠️ কোনো ডাটা নেই।', 'warning'); return; }
            let csv = '\uFEFFক্রমিক,নাম,সনদ নং,মৌজা,প্রকৃতি,তারিখ,ব্যালেন্স,কাজের সংখ্যা\n';
            users.forEach((u, i) => csv += `${i + 1},"${u.writerName}","${u.certNo}","${u.mouza || ''}","${u.docNature || ''}","${u.dateTime}",${u.balance},${u.workCount || 0}\n`);
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = 'দলিল_তালিকা.csv'; link.click();
            showToast('📥 CSV ডাউনলোড হয়েছে।', 'success');
        };
        window.exportExcel = () => {
            const users = getUsers();
            if (!users.length) { showToast('⚠️ কোনো ডাটা নেই।', 'warning'); return; }
            const data = users.map((u, i) => ({ 'ক্রমিক': i + 1, 'নাম': u.writerName, 'সনদ নং': u.certNo, 'মৌজা': u.mouza || '', 'প্রকৃতি': u.docNature || '', 'তারিখ': u.dateTime, 'ব্যালেন্স (টাকা)': u.balance, 'কাজের সংখ্যা': u.workCount || 0 }));
            const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(data), 'দলিল তালিকা');
            const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([XLSX.write(wb, { bookType: 'xlsx', type: 'array' })], { type: 'application/octet-stream' })); link.download = 'দলিল_তালিকা.xlsx'; link.click();
            showToast('📥 Excel ডাউনলোড হয়েছে।', 'success');
        };
        // ============================================================

        // ============================================================
        // JS ব্লক: চ্যাটবট শুরু
        // ============================================================
        (function () {
            const chatToggle = document.getElementById('chatToggle');
            const chatWindow = document.getElementById('chatWindow');
            const chatBody = document.getElementById('chatBody');
            const chatInput = document.getElementById('chatInput');
            const chatBadge = document.getElementById('chatBadge');
            chatWindow.classList.remove('open'); chatBadge.style.display = 'flex';

            const qaDatabase = [
                { keywords: ['দলিল', 'কী'], answer: 'দলিল হলো কোনো সম্পত্তি বা অধিকার হস্তান্তরের আইনগত নথি।' },
                { keywords: ['ইউজার', 'যোগ'], answer: 'সাইডবারের "ইউজার অ্যাড" বাটনে ক্লিক করে তথ্য দিয়ে সংরক্ষণ করুন।' },
                { keywords: ['ব্যালেন্স', 'টাকা'], answer: 'প্রতি কাজের জন্য ১০০ টাকা যোগ হয়।' },
                { keywords: ['সনদ', 'নম্বর'], answer: 'নাম নির্বাচন করলে সনদ নম্বর স্বয়ংক্রিয়ভাবে আসে।' },
                { keywords: ['মৌজা'], answer: 'মৌজা হলো ভূমির এলাকা চিহ্নিতকারী নাম। ৮০টির বেশি মৌজা আছে।' },
                { keywords: ['প্রিন্ট', 'রসিদ'], answer: 'টেবিলের শেষ কলামে প্রিন্ট বাটনে ক্লিক করে রসিদ প্রিন্ট করুন।' },
                { keywords: ['এক্সপোর্ট', 'CSV', 'Excel'], answer: '"CSV" বা "Excel" বাটনে ক্লিক করে ডাটা এক্সপোর্ট করুন।' },
                { keywords: ['ডিলিট', 'মুছুন'], answer: 'টেবিলের ট্রাশ আইকনে ক্লিক করে ইউজার ডিলিট করুন।' }
            ];

            window.toggleChat = function () {
                const opening = !chatWindow.classList.contains('open');
                chatWindow.classList.toggle('open');
                if (opening) { chatInput.focus(); chatBadge.style.display = 'none'; if (!chatBody.querySelectorAll('.msg').length) addMessage('👋 স্বাগতম! দলিল সম্পর্কিত প্রশ্ন করুন।', 'bot'); }
            };
            function addMessage(text, sender) {
                const div = document.createElement('div'); div.className = `msg ${sender}`; div.textContent = text;
                chatBody.appendChild(div); chatBody.scrollTop = chatBody.scrollHeight;
            }
            window.sendMessage = function () {
                const text = chatInput.value.trim();
                if (!text) return;
                addMessage(text, 'user'); chatInput.value = '';
                const reply = qaDatabase.find(qa => qa.keywords.some(k => text.toLowerCase().includes(k)))?.answer || 'দুঃখিত, উত্তর জানি না।';
                addMessage(reply, 'bot');
            };
            chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); window.sendMessage(); } });
            window.addEventListener('load', () => { chatWindow.classList.remove('open'); chatBadge.style.display = 'flex'; });
        })();
        // ============================================================

        // ============================================================
        // JS ব্লক: যোগাযোগ ফর্ম শুরু
        // ============================================================
        window.openContactModal = function () {
            document.getElementById('contactModal').style.display = 'flex';
            ['contactName', 'contactEmail', 'contactPhone'].forEach(id => document.getElementById(id).value = '');
            document.getElementById('contactFormError').style.display = 'none';
            setTimeout(() => document.getElementById('contactName').focus(), 100);
        };
        window.closeContactModal = function () { document.getElementById('contactModal').style.display = 'none'; };
        window.submitContact = function () {
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const phone = document.getElementById('contactPhone').value.trim();
            const error = document.getElementById('contactFormError');
            if (!name || !email || !phone) { error.style.display = 'block'; error.textContent = 'সব তথ্য পূরণ করুন।'; return; }
            if (!email.includes('@') || !email.includes('.')) { error.style.display = 'block'; error.textContent = 'বৈধ ইমেইল দিন।'; return; }
            error.style.display = 'none';
            let contacts = JSON.parse(localStorage.getItem('contact_messages') || '[]');
            contacts.push({ name, email, phone, time: new Date().toLocaleString('bn-BD') });
            localStorage.setItem('contact_messages', JSON.stringify(contacts));
            closeContactModal();
            showToast('✅ আপনার বার্তা জমা হয়েছে।', 'success');
        };
        // ============================================================
        // JS ব্লক: ফুটার ভিজিবিলিটি ও ইয়ার শুরু
        // ============================================================
        function toggleFooterVisibility() {
            const contactBtn = document.getElementById('footerContactBtn');
            if (contactBtn) {
                contactBtn.style.display = 'inline-flex'; // সবসময় দেখাবে
            }
        }
        // ============================================================
        // JS ব্লক: DOM রেডি ইভেন্ট শুরু
        // ============================================================
        document.addEventListener('DOMContentLoaded', function () {
            populateDropdowns(); window.addPair(); updateRemoveButtons();
            loadDark();
            if (!localStorage.getItem(STORAGE_SYSTEM_COUNTER)) localStorage.setItem(STORAGE_SYSTEM_COUNTER, String(INITIAL_SYSTEM_COUNTER));
            updateLockUI();
            if (isLocked()) startLockTimer();

            if (isLoggedIn()) {
                document.getElementById('loginScreen').style.display = 'none';
                document.getElementById('dashboardLayout').style.display = 'flex';
                renderAll(); switchPage('dashboard');
                showToast('👋 স্বাগতম!', 'success');
                trackSession();
            } else {
                document.getElementById('loginScreen').style.display = 'flex';
                document.getElementById('dashboardLayout').style.display = 'none';
            }

            document.getElementById('menuToggle').addEventListener('click', e => { e.stopPropagation(); toggleSidebar(); });
            document.getElementById('sidebarClose').addEventListener('click', e => { e.stopPropagation(); closeSidebar(); });
            document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

            document.getElementById('navDashboard').addEventListener('click', e => { e.preventDefault(); switchPage('dashboard'); });
            document.getElementById('navDolilLekha').addEventListener('click', e => { e.preventDefault(); switchPage('dolilLekha'); });
            document.getElementById('navWebsiteList').addEventListener('click', e => { e.preventDefault(); switchPage('website'); });
            document.getElementById('navTracking').addEventListener('click', e => { e.preventDefault(); switchPage('tracking'); });

            ['loginPassword', 'loginUsername'].forEach(id => document.getElementById(id).addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); login(); } }));
            document.getElementById('websitePasswordInput').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); verifyWebsitePassword(); } });
            document.getElementById('trackingPasswordInput').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); verifyTrackingPassword(); } });

            window.addEventListener('click', e => {
                const modals = ['addUserModal', 'resetConfirmModal', 'deleteConfirmModal', 'printModal', 'websitePasswordModal', 'trackingPasswordModal', 'contactModal'];
                modals.forEach(id => { if (e.target === document.getElementById(id)) document.getElementById(id).style.display = 'none'; });
            });

            document.addEventListener('keydown', e => {
                if (e.key === 'Escape') {
                    document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
                    if (document.getElementById('sidebar').classList.contains('open')) closeSidebar();
                }
            });

            document.getElementById('writerName').addEventListener('change', autoFillCertFromName);
            renderWebsiteList();

            // ফুটার ইয়ার সেট
            const yearSpan = document.getElementById('footerYear');
            if (yearSpan) yearSpan.textContent = new Date().getFullYear();

            // যোগাযোগ বাটন ক্লিক ইভেন্ট
            document.getElementById('footerContactBtn')?.addEventListener('click', function (e) {
                e.preventDefault();
                openContactModal(); // সরাসরি মোডাল খুলবে
            });

            toggleFooterVisibility(); // প্রাথমিক ফুটার স্টেট

            let resizeTimer;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => { if (mapInstance) mapInstance.invalidateSize(); }, 300);
            });
        });
        // ============================================================
