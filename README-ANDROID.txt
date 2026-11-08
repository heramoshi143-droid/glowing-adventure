WORLD AI — ANDROID PHONE BUILD GUIDE
====================================

WHAT IS INCLUDED
- index.html, styles.css, app.js: app interface and functionality
- manifest.json, sw.js, icons/: installable web-app files
- backend/: optional Node.js server for real AI chat and image generation

IMPORTANT
The app runs in demo mode without a server. For real AI chat and image generation,
you must deploy the optional backend and provide an API key there. Do NOT put
your private API key in app.js, index.html, or any public website.

PART A — TEST ON YOUR ANDROID PHONE
1. Extract world_ai_android_project.zip using your phone's Files app.
2. Install Acode (or another code editor) if you want to edit the files.
3. For an installable web app, publish the project files to an HTTPS website.
   GitHub Pages is one option. Create a GitHub account, create a public repository,
   upload index.html, styles.css, app.js, manifest.json, sw.js and the icons folder.
   In repository Settings > Pages, enable deployment from the main branch/root.
4. Wait for GitHub Pages to publish, then open the HTTPS address in Chrome.
5. In Chrome, open the three-dot menu and choose "Install app" or "Add to Home screen".
   This creates a home-screen web app, not yet a standalone APK.

PART B — PACKAGE AS AN APK
1. Open https://www.pwabuilder.com/ in Chrome.
2. Enter your published HTTPS website address and choose Start.
3. Review the PWA checks. Fix any manifest/icon/service-worker warnings shown.
4. Choose Package for Stores / Android (wording may vary), then follow the Android
   package instructions shown by PWABuilder.
5. Download the generated Android package if the service offers it for your project.
   Some Android packaging flows require signing keys or an additional build step.
6. If PWABuilder offers an APK/AAB, download the APK for direct phone installation.
   If it provides an AAB only, that is generally for Google Play and is not directly
   installable as an APK.
7. On Android, open the downloaded APK. If prompted, allow Chrome or Files to
   install unknown apps for this installation, then install. Only install packages
   you generated and trust.

PART C — OPTIONAL REAL AI BACKEND
This step is optional and requires an AI provider account/API key and a backend host.
1. Deploy the backend folder to a Node.js hosting service that supports environment
   variables and HTTPS.
2. Set OPENAI_API_KEY as a secret environment variable on that host.
3. Set OPENAI_CHAT_MODEL if needed (default: gpt-4o-mini).
4. Deploy and test https://YOUR-SERVER/health. It should return {"ok":true,...}.
5. In WORLD AI > Settings, enter https://YOUR-SERVER and tap Save settings.
6. Chat uses /api/chat and Image Studio uses /api/images.
7. API usage may cost money. Check provider pricing and availability first.

VOICE NOTES
- Microphone input uses the browser's SpeechRecognition feature when available.
  Browser/device support and Urdu recognition can vary.
- Speech synthesis can be added in a future version; this starter currently includes
  microphone dictation, not a full two-way voice conversation.

TROUBLESHOOTING
- Blank page: confirm all files are uploaded to the same folder and filenames match.
- App not updating: close it, reopen, or clear Chrome site data to refresh the cache.
- No live AI: confirm the backend URL, HTTPS, server logs, API key, and provider access.
- APK not offered: use the packaging steps displayed by PWABuilder; packaging options
  can change and may require Android signing/build tooling.

This is a starter project, not a finished Play Store release. Test carefully before
sharing it with other people.
