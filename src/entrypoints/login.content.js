export default defineContentScript({
    matches: ["https://*.duosecurity.com/frame/*/auth/prompt*", "https://*.duosecurity.com/frame/prompt*", "https://*.duosecurity.com/prompt/*"],
    allFrames: true,
    main() {
        let lastCode;
        function notify() {
            const raw = document.querySelector(".verification-code, .code-box .code-text")?.innerText.trim() || "";
            const code = /^[\d\s]+$/.test(raw) ? raw.replace(/\s/g, "") : "";
            if (code === lastCode) return;
            lastCode = code;
            browser.runtime.sendMessage({
                intent: "onLoginPage",
                params: { verificationCode: code }
            }).catch((error) => console.error("Could not notify Auto Duo of the login page", error));
        }

        notify();
        new MutationObserver(notify).observe(document.documentElement, {
            childList: true,
            characterData: true,
            subtree: true,
        });
    }
});
