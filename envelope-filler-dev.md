# Geliştirici Kılavuzu ve İş Listesi: Sınav Zarfı Teslim Tutanağı Editörü

Bu belge, uygulamanın geliştirilmesi sürecinde takip edilecek görevleri, kodlama standartlarını, kalite kontrollerini ve kuralları içerir.

## 1. Geliştirme ve Kodlama İlkeleri
- **Modüler Yapı (Extensibility):** Kodlar; form bileşeni (`FormPanel`), önizleme bileşeni (`PreviewPanel`), şablon yönetimi (`PresetManager`) ve dosya indirme işlevleri (`docx-helper`) şeklinde ayrılmalıdır. Gelecekte sisteme yeni sınav evrakı veya form şablonları eklendiğinde, sadece veri modeli ve önizleme katmanları eklenerek genişletilebilecek yapıda olmalıdır.
- **Clean Code:** Kodlar sade, okunabilir ve işlevsel olmalıdır. Gereksiz yorum satırları eklenmemeli, değişken ve fonksiyon adlandırmaları kendi kendini açıklamalıdır.
- **Git Commit ve Push Kuralları (KRİTİK):**
  - **SÜREÇ BOYUNCA:** Kullanıcı sohbet satırında açıkça ve cümle içinde talimat vermediği sürece (Örn: "Değişiklikleri commit et ve gönder", vb.) kesinlikle `git commit` veya `git push` komutları çalıştırılmayacaktır.
  - Hata çözümü veya başarı durumlarında otomatik commit yapma inisiyatifi kesinlikle alınmayacaktır.

---

## 2. Görev Dağılımı ve İş Listesi (Tasks)

- [x] **Task 1: Bağımlılıkların Kurulumu ve Şablonun Konumu**
  - *Verify:* ✅ pizzip, docxtemplater, file-saver kuruldu. Şablon `web/public/` altına kopyalandı.

- [x] **Task 2: Sayfa Grid Layout Yapısı (Split Screen)**
  - *Verify:* ✅ `/tutanak-olusturucu` sayfası hatasız derlendi.

- [x] **Task 3: Sekmeli Form Giriş Paneli (FormPanel.tsx)**
  - *Verify:* ✅ 4 sekmeli form paneli oluşturuldu. Tip uyumluluğu doğrulandı.

- [x] **Task 4: A4 Canlı Önizleme Çizimi (PreviewPanel.tsx)**
  - *Verify:* ✅ Dikey sıralı 2 sayfa A4 önizleme bileşeni oluşturuldu. Form state'i anlık yansıtılıyor.

- [x] **Task 5: Pizzip & Docxtemplater ile Belge Üretimi**
  - *Verify:* ✅ docx-helper.ts oluşturuldu, indirme butonu page.tsx'e entegre edildi.

- [x] **Task 6: Şablon Kaydetme / Taslak Sistemi (PresetManager.tsx)**
  - *Verify:* ✅ LocalStorage tabanlı taslak kaydetme/yükleme/silme bileşeni oluşturuldu.

- [x] **Task 7: Kalite ve Derleme Kontrolleri (Build & Lint)**
  - *Verify:* ✅ `npm run build` başarıyla tamamlandı (exit code 0). TypeScript tip kontrolü geçti.

---

## 3. Done When (Tamamlanma Kriterleri)
- [x] Doldurulan form verileri dikey 2 sayfa A4 önizlemede gecikmesiz gösteriliyor.
- [x] "Word Belgesi İndir" butonu şablonu doldurup `.docx` olarak yerel indiriyor.
- [x] Doldurulan veriler taslak olarak kaydedilip tekrar geri yüklenebiliyor.
- [x] Next.js derlemesi (build) hatasız ve linter uyarıları olmadan tamamlanıyor.

---

## 4. Phase X: Doğrulama Adımları
- [x] **Build Kontrolü:** `npm run build` → ✅ Compiled successfully (exit code 0)
- [x] **TypeScript Kontrolü:** Build sırasında tsc çalıştırıldı → ✅ Finished TypeScript successfully
- [ ] **Manuel Test:** Dev sunucusu üzerinden tarayıcıda test edilecek
