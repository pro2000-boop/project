# دليل رفع مشروع أسطول المملكة

## المشكلة الحالية
Git غير مثبت على النظام. إليك الحلول البديلة:

## الحل الأول: تثبيت Git
1. اذهب إلى: https://git-scm.com/download/win
2. حمل Git for Windows
3. ثبته واعد تشغيل الطرفية
4. تحقق من التثبيت: `git --version`

## الحل الثاني: استخدام GitHub Desktop
1. حمل GitHub Desktop من: https://desktop.github.com/
2. سجل دخول بحسابك GitHub
3. اختر "Add an Existing Repository from your Hard Drive"
4. اختر مجلد المشروع: `c:\Users\77182\Desktop\trip-management-app-main`
5. اضغط "Publish repository" واختر اسم المستودع: `project`

## الحل الثالث: رفع مباشر عبر GitHub Web
1. اذهب إلى: https://github.com/pro2000-boop
2. اضغط "New repository"
3. اسم المستودع: `project`
4. اجعله Public
5. اضغط "Create repository"
6. اضغط "uploading an existing file"
7. اسحب جميع ملفات المشروع إلى المتصفح

## بعد رفع الملفات:

### تفعيل GitHub Pages:
1. اذهب إلى إعدادات المستودع (Settings)
2. انتقل إلى قسم "Pages" في الشريط الجانبي
3. في "Source" اختر "Deploy from a branch"
4. اختر الفرع "gh-pages" (سيظهر بعد أول نشر)
5. اضغط "Save"

### تشغيل النشر:
بعد تثبيت Git أو استخدام GitHub Desktop:
```bash
npm install
npm run deploy
```

## الرابط النهائي:
https://pro2000-boop.github.io/project

## ملاحظات:
- المشروع جاهز للنشر بجميع الإعدادات المطلوبة
- نظام الترجمة العربي/الإنجليزي سيعمل بشكل كامل
- جميع المميزات ستكون متاحة على الإنترنت

## إذا واجهت مشاكل:
1. تأكد من أن المستودع public
2. انتظر 5-10 دقائق بعد النشر
3. تحقق من إعدادات GitHub Pages
4. تأكد من وجود ملف .nojekyll في المجلد العام
