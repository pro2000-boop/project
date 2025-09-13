# نشر تطبيق أسطول المملكة على GitHub Pages

## الخطوات المطلوبة للنشر:

### 1. تثبيت gh-pages (إذا لم يكن مثبتاً)
```bash
npm install --save-dev gh-pages
```

### 2. إعداد Git والربط بـ GitHub
```bash
# تهيئة المشروع
git add .
git commit -m "تهيئة المشروع للنشر على GitHub Pages"

# التأكد من الفرع الرئيسي
git branch -M main

# ربط المستودع (إذا لم يكن مربوطاً)
git remote add origin https://github.com/pro2000-boop/project.git

# رفع الكود
git push -u origin main
```

### 3. بناء ونشر المشروع
```bash
# بناء المشروع للإنتاج
npm run build

# نشر على GitHub Pages
npm run deploy
```

### 4. الوصول للموقع
بعد النشر، سيكون الموقع متاحاً على:
```
https://pro2000-boop.github.io/project
```

## الإعدادات المطبقة:

### package.json
- ✅ إضافة `homepage` للمستودع
- ✅ إضافة سكريبت `predeploy` للبناء التلقائي
- ✅ إضافة سكريبت `deploy` للنشر
- ✅ إضافة `gh-pages` كاعتمادية تطوير

### next.config.mjs
- ✅ تفعيل `output: 'export'` للتصدير الثابت
- ✅ إعداد `basePath` و `assetPrefix` لـ GitHub Pages
- ✅ تفعيل `images.unoptimized` للصور
- ✅ إضافة `trailingSlash: true`

### ملفات إضافية
- ✅ إنشاء `.nojekyll` لتجنب معالجة Jekyll

## المميزات المتاحة بعد النشر:
- 🌐 نظام ترجمة كامل (عربي/إنجليزي)
- 📱 تصميم متجاوب لجميع الأجهزة
- 🔔 نظام إشعارات متقدم
- 📋 نظام حجز احترافي
- 📍 تتبع الطلبات المباشر
- 👨‍💼 لوحة إدارة شاملة
- 🎨 واجهة مستخدم احترافية بتصميم سعودي

## ملاحظات مهمة:
1. تأكد من وجود اتصال بالإنترنت أثناء النشر
2. قد يستغرق النشر بضع دقائق للظهور
3. في حالة عدم ظهور التحديثات، انتظر 5-10 دقائق
4. يمكن إعادة النشر بتشغيل `npm run deploy` عند أي تحديث
