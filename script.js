document.addEventListener("DOMContentLoaded", function () {
    const welcomeScreen = document.getElementById("welcomeScreen");

    if (!welcomeScreen) {
        console.error("Elemen welcomeScreen tidak ditemukan.");
        return;
    }

    // EFEK MENGETIK
    let typingTimer;

    function typeText(element, text, speed = 30) {
        clearTimeout(typingTimer);
        element.textContent = "";
        let index = 0;

        function typeNext() {
            if (!element.isConnected) return;

            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                typingTimer = setTimeout(typeNext, speed);
            }
        }

        typeNext();
    }

    // STIKER AWAL
    function openingStickers() {
        return `
            <div class="sticker-row">
                <img src="sticker-awal-hati.webp"
                     class="birthday-sticker sticker-pop"
                     alt="Stiker hati"
                     onerror="this.style.display='none'">

                <img src="sticker-awal-kucing.webp"
                     class="birthday-sticker sticker-float"
                     alt="Stiker kucing"
                     onerror="this.style.display='none'">
            </div>
        `;
    }

    // STIKER AKHIR
    function endingStickers() {
        return `
            <div class="sticker-row ending-stickers">
                <img src="sticker-akhir-snoopy.webp"
                     class="birthday-sticker sticker-float"
                     alt="Snoopy membawa kue"
                     onerror="this.style.display='none'">

                <img src="sticker-akhir-emoji.webp"
                     class="birthday-sticker sticker-pop"
                     alt="Emoji lucu"
                     onerror="this.style.display='none'">
            </div>
        `;
    }

    // TEMPLATE KARTU
    function renderCard(content) {
        welcomeScreen.innerHTML = `
            <div class="card welcome-card">
                ${content}
            </div>
        `;
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // HALAMAN 1: PEMBUKA
    function showWelcome() {
        renderCard(`
            ${openingStickers()}

            <div class="decoration">♡ ✧ ♡ ✧ ♡</div>
            <div class="cake">🎂</div>

            <p class="eyebrow">A SPECIAL DAY FOR SOMEONE SPECIAL</p>
            <h1>Happy Birthday!</h1>
            <h2>Franklin Rumabutar ♡</h2>
            <p class="chapter">Chapter 21 Begins ✨</p>

            <p id="welcomeText" class="description"></p>

            <button id="startButton" class="button" type="button">
                Open Your Surprise ♡
            </button>

            <footer>Made with ♡ just for you</footer>
        `);

        typeText(
            document.getElementById("welcomeText"),
            "Ada sesuatu yang spesial menunggumu. Sebuah kejutan kecil yang dibuat khusus untukmu. 💙",
            35
        );

        document.getElementById("startButton").addEventListener("click", showPassword);
    }

    // HALAMAN 2: PASSWORD
    function showPassword() {
        renderCard(`
            <div class="decoration">♡ ✧ ♡ ✧ ♡</div>
            <div class="cake">🔐</div>

            <p class="eyebrow">A LITTLE SECRET FOR YOU</p>
            <h1>One Little Secret...</h1>
            <h2>Can you guess the password? ♡</h2>

            <p id="passwordIntro" class="description"></p>

            <form id="passwordForm">
                <input
                    id="passwordInput"
                    type="password"
                    placeholder="Enter the password..."
                    autocomplete="off"
                    required
                >

                <button class="button" type="submit">
                    Unlock Your Surprise ♡
                </button>
            </form>

            <p id="passwordMessage" class="description" aria-live="polite"></p>

            <footer>Hint: A date that's special ♡</footer>
        `);

        const input = document.getElementById("passwordInput");

        Object.assign(input.style, {
            display: "block",
            width: "100%",
            maxWidth: "380px",
            margin: "20px auto",
            padding: "16px",
            border: "1px solid #f4d58d",
            borderRadius: "30px",
            background: "#142d49",
            color: "#f7f9ff",
            fontSize: "16px",
            textAlign: "center",
            boxSizing: "border-box"
        });

        typeText(
            document.getElementById("passwordIntro"),
            "Ada rahasia kecil yang menunggumu. Masukkan password untuk membuka hadiahmu. 💙",
            35
        );

        document.getElementById("passwordForm").addEventListener("submit", function (event) {
            event.preventDefault();

            if (input.value.trim() === "20051101") {
                showBirthday();
            } else {
                document.getElementById("passwordMessage").textContent =
                    "Oops! Password-nya belum tepat. Coba lagi, ya! 💙";
                input.value = "";
                input.focus();
            }
        });
    }

    // HALAMAN 3: FOTO DAN UCAPAN
    function showBirthday() {
        renderCard(`
            <div class="decoration">🎉 ✧ 🎂 ✧ 🎉</div>

            <p class="eyebrow">TODAY IS YOUR DAY</p>
            <h1>Happy Birthday!</h1>
            <h2>Franklin Rumabutar ♡</h2>

            <img
                src="franklin.jpeg"
                alt="Foto Franklin Rumabutar"
                class="franklin-photo"
                onerror="this.alt='Foto Franklin belum ditemukan'; this.style.display='none';"
            >

            <p class="chapter">Chapter 21 Begins ✨</p>
            <p id="birthdayMessage" class="description"></p>

            <button id="personalButton" class="button" type="button">
                One More Thing... ♡
            </button>

            <footer>Wishing you all the best 💙</footer>
        `);

        typeText(
            document.getElementById("birthdayMessage"),
            "Selamat ulang tahun yang ke-21, Franklin! 💙 Semoga kamu selalu diberi kesehatan, kebahagiaan, kelancaran dalam setiap urusan, dan keberanian untuk mengejar semua impianmu. May this new chapter bring you meaningful memories, genuine happiness, and success in everything you do. Keep growing, keep believing in yourself, and never stop chasing your dreams! ✨",
            30
        );

        document.getElementById("personalButton").addEventListener("click", showPersonalMessage);
    }

    // HALAMAN 4: PESAN PERSONAL
    function showPersonalMessage() {
        renderCard(`
            <div class="decoration">♡ ✧ ♡ ✧ ♡</div>
            <div class="cake">💌</div>

            <p class="eyebrow">A LITTLE MESSAGE FOR YOU</p>
            <h1>For Franklin ♡</h1>

            <p id="personalMessage" class="description"></p>

            <button id="thankYouButton" class="button" type="button">
                Last Little Surprise ♡
            </button>

            <footer>With warm wishes, always ♡</footer>
        `);

        typeText(
            document.getElementById("personalMessage"),
            "Semoga kamu selalu dikelilingi orang-orang baik, dipertemukan dengan banyak hal indah, dan tetap menjadi dirimu sendiri. 💙 Life won't always be easy, but I hope you always find a reason to smile, the strength to keep going, and the courage to become the person you dream of being. Enjoy your special day. You deserve beautiful things and wonderful memories. Keep shining in your own way! ✨",
            30
        );

        document.getElementById("thankYouButton").addEventListener("click", showThankYou);
    }

    // HALAMAN 5: PENUTUP DAN BERBAGI
    function showThankYou() {
        renderCard(`
            ${endingStickers()}

            <div class="decoration">♡ ✧ ♡ ✧ ♡</div>
            <div class="cake">🎁</div>

            <p class="eyebrow">END OF THIS LITTLE SURPRISE</p>
            <h1>Thank You! 💙</h1>
            <h2>For Opening This Little Gift ♡</h2>

            <p id="thankYouMessage" class="description"></p>

            <div class="cake">🎉 🥳 🎈</div>

            <p class="description">
                Suka kejutan kecil ini? Bagikan momen ulang tahun ini! ✨
            </p>

            <button id="shareWhatsApp" class="button share-button" type="button">
                💚 Bagikan ke WhatsApp
            </button>

            <button id="shareInstagram" class="button share-button" type="button">
                💜 Bagikan ke Instagram
            </button>

            <button id="copyLink" class="button share-button" type="button">
                🔗 Salin Link Website
            </button>

            <p id="shareMessage" class="description" aria-live="polite"></p>

            <footer>Made with ♡, just for you.</footer>
        `);

        typeText(
            document.getElementById("thankYouMessage"),
            "Thank you for taking the time to open this little birthday surprise. 💙 Semoga kamu suka kejutan kecil ini dan semoga hari ulang tahunmu penuh dengan kebahagiaan, tawa, serta kenangan yang indah. Once again, happy 21st birthday, Franklin! 🎂✨",
            35
        );

        // LINK WEBSITE
        function getShareURL() {
            return window.location.href;
        }

        // WHATSAPP
        document.getElementById("shareWhatsApp").addEventListener("click", function () {
            const message =
                "🎂💙 Happy 21st Birthday, Franklin! Aku punya kejutan kecil untukmu! ✨\n\n" +
                "Buka kejutanmu di sini: " + getShareURL();

            window.open(
                "https://wa.me/?text=" + encodeURIComponent(message),
                "_blank",
                "noopener,noreferrer"
            );
        });

        // INSTAGRAM: BAGIKAN MELALUI MENU SHARE PERANGKAT JIKA TERSEDIA
        document.getElementById("shareInstagram").addEventListener("click", async function () {
            const message = document.getElementById("shareMessage");
            const shareData = {
                title: "Happy Birthday, Franklin! 💙",
                text: "A little birthday surprise for Franklin! 🎂✨",
                url: getShareURL()
            };

            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                    message.textContent =
                        "Pilih Instagram jika muncul di menu berbagi perangkatmu. 💜";
                } catch (error) {
                    if (error.name !== "AbortError") {
                        message.textContent =
                            "Salin link website, lalu buka Instagram untuk membagikannya ke Story. 💜";
                    }
                }
            } else {
                message.textContent =
                    "Salin link website, lalu buka Instagram dan tempelkan link tersebut di Story atau bagikan melalui pesan. 💜";

                window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
            }
        });

        // SALIN LINK
        document.getElementById("copyLink").addEventListener("click", async function () {
            const message = document.getElementById("shareMessage");

            try {
                await navigator.clipboard.writeText(getShareURL());
                message.textContent =
                    "Link berhasil disalin! Kamu bisa membagikannya. 💙";
            } catch (error) {
                message.textContent =
                    "Salin link dari bilah alamat browser kamu. 💙";
            }
        });
    }

    // MULAI
    showWelcome();
});