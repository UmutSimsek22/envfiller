# Teknik Şartname ve Sistem Mimarisi: Sınav Zarfı Teslim Tutanağı Editörü

Bu belge, tarayıcı tabanlı sınav zarfı teslim tutanağı editörü uygulamasının teknik detaylarını, şablon yapısını ve sistem mimarisini tanımlar.

## 1. Teknolojik Altyapı ve Bağımlılıklar
- **Framework:** React 19 & Next.js 16 (App Router, TypeScript).
- **Styling:** Tailwind CSS v4 (Kurumsal renk paleti ve A4 sayfa simülasyonu için özel CSS).
- **Word (.docx) Doldurma:**
  - `pizzip`: Binary zip işlemleri için (docx dosyaları aslında sıkıştırılmış XML yapılarıdır).
  - `docxtemplater`: `.docx` şablonu içerisindeki çift süslü parantezli `{{placeholders}}` etiketlerini JavaScript objesinden gelen verilerle değiştirmek için.
- **İkon Kütüphanesi:** `lucide-react` (Kullanıcı arayüzü butonları ve sekmeler için).

## 2. Arayüz ve Görsel Düzen (UI/UX)
- **Ekran Yerleşimi (Split Screen):**
  - **Sol Panel (%45 Genişlik):** Form giriş alanları ve Taslak/Şablon yönetimi.
  - **Sağ Panel (%55 Genişlik):** Gri arka plan üzerinde beyaz, gölgeli ve dikey sıralı 2 sayfa A4 önizlemesi (Simüle edilmiş sayfa yapısı).
- **Kurumsal Renk Teması (İstanbul Esenyurt Üniversitesi):**
  - **Ana Renk (Navy Blue):** `#1F3860` (Başlıklar, butonlar ve kurumsal ögeler).
  - **Detay/Vurgu Rengi (Gold):** `#C5A059` (Aktif sekmeler, kenarlıklar ve özel işaretçiler).
  - **Arka Plan:** Gri tonları (`#F3F4F6`) ile A4 kağıt sınırlarını ayıran temiz gölgeler.

## 3. Sayfa Yapısı ve Canlı Önizleme Detayları
- **Sayfa 1: Teslim Tutanağı**
  - Form verilerinin anlık olarak A4 kağıdı üzerindeki ilgili hücrelerde ve çizgilerde güncellendiği ana şablon.
- **Sayfa 2: Notlar**
  - "NOTLAR" başlığı altında dikey sıralı 15 adet yazma çizgisi. Bu çizgiler tarayıcıda CSS ile borderless bir tablonun alt kenarlıkları (bottom-border) olarak çizilir ve Word çıktısında da aynı yapıda yer alır.

## 4. Şablon Değişkenleri (Placeholders)
Word belgesindeki şablonda kullanılan ve JavaScript form state'i tarafından doldurulacak etiketler şunlardır:

### Üst Kısım
- `{{SINAV_TARIHI}}`: Sınav Tarihi (gg.aa.yyyy)
- `{{GOZETMEN}}`: Gözetmen Adı Soyadı
- `{{EGITIM_YILI}}`: Eğitim - Öğretim Yılı (Örn: 2025-2026)
- `{{YARIYIL}}`: Yarıyıl (Örn: Güz / Bahar / Yaz)

### Program Türü Seçimi (Tablo 1 - Hücre 0)
- `{{CHECK_LISANSUSTU}}`: Lisansüstü için seçim işareti (örn. `[X]` veya `[ ]` / `☒` veya `☐`)
- `{{CHECK_LISANS}}`: Lisans için seçim işareti
- `{{CHECK_ONLISANS}}`: Önlisans için seçim işareti

### Ders ve Program Bilgileri (Tablo 1 - Kalan Hücreler)
- `{{BOLUM_PROGRAM}}`: Bölüm / Program Adı
- `{{DERS_KODU}}`: Ders Kodu
- `{{DERS_ADI}}`: Ders Adı
- `{{OGRET_ELEMANI}}`: Öğretim Elemanı Adı
- `{{SINAV_CESIDI}}`: Sınav Çeşidi (Örn: Vize, Final, Mazeret)

### Zarf İçi Belgeler Kontrolü (Tablo 2)
Her bir belge için onay durumu:
- `{{CHECK_DOC_1}}`: Sınav Tutanağı
- `{{CHECK_DOC_2}}`: UNIPA Ders Devam Listesi
- `{{CHECK_DOC_3}}`: UNIPA Öğrenci Sınav Notları Çıktısı
- `{{CHECK_DOC_4}}`: Sınav Yoklama Listesi
- `{{CHECK_DOC_5}}`: Soru Kağıdı Örneği
- `{{CHECK_DOC_6}}`: Cevap Anahtarı
- `{{CHECK_DOC_7}}`: Değerlendirilmiş Sınav Kağıtları
- `{{CHECK_DOC_8}}`: Optik Sınav Kağıtları
- `{{CHECK_DOC_9}}`: Ders İzlence Formu

### Teslimat ve İmza Bilgileri (Tablo 3)
- `{{TESLIM_EDEN_AD}}`, `{{TESLIM_EDEN_TARIH}}`: Teslim Eden Öğretim Elemanı
- `{{TESLIM_ALAN_AD}}`, `{{TESLIM_ALAN_TARIH}}`: Teslim Alan Öğretim Elemanı
- `{{KONTROL_EDEN_AD}}`, `{{KONTROL_EDEN_TARIH}}`: Kontrol Grubu Öğretim Elemanı
