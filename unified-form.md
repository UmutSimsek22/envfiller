# Plan: Tek Sayfa Birleşik Form ve Bağımsız Kaydırma (Independent Scroll)

## Hedef
Sol form panelindeki sekmeli/adımlı (İleri/Geri) yapıyı kaldırıp tüm form bölümlerini dikeyde alt alta sıralanmış tek bir liste haline getirmek; sol form paneli ile sağ A4 önizleme panelini birbirinden tamamen bağımsız olarak kaydırılabilir (independent scroll) hale getirmek.

## Mümkün mü ve Nasıl Çalışacak? (Teknik İnceleme)
Evet, bu modern web arayüzlerinde (özellikle doküman editörleri ve form oluşturucularda) standart ve kullanıcı deneyimi açısından son derece rahat bir yöntemdir.

### Teknik Mantık:
1. **Ekran Yüksekliğine Sabitleme:** Ana gövde (`<main>`), tarayıcı penceresinin yüksekliğine kilitlenir (`h-[calc(100dvh-headerHeight)] overflow-hidden`).
2. **Sol Panel (Form):** `h-full overflow-y-auto` yapılarak, kullanıcı form elemanlarını doldururken sadece sol sütun dikeyde kayar.
3. **Sağ Panel (Önizleme):** `h-full overflow-y-auto` yapılarak, sol panel kaydırılırken sağdaki A4 sayfaları sabit kalır; istenirse sağ panel kendi içinde bağımsızca kaydırılabilir.
4. **Form Düzeni:** `FormPanel.tsx` içindeki `activeTab` ve "İleri/Geri" butonları kaldırılarak 4 ana kategori (Genel Bilgiler, Ders Bilgileri, Zarf İçeriği, Teslimat & İmzalar) temiz kart blokları (`Card / Fieldset`) halinde alt alta sıralanır.

---

## Görev Listesi (Tasks)

- [ ] **Task 1: Sayfa Layout'unu Bağımsız Kaydırmaya Uyarlama (`page.tsx`)**
  - `<main>` konteynerine `h-[calc(100vh-65px)] overflow-hidden` verilerek sayfa taşması engellenecek.
  - Sol `<aside>` ve sağ `<section>` etiketlerinin her ikisine de bağımsız `h-full overflow-y-auto` uygulanacak.
  - *Verify:* Sol panelde kaydırma yapılırken sağ panelin pozisyonunun değişmediği doğrulanacak.

- [ ] **Task 2: FormPanel'i Tek Sayfa Dikey Sıralı Yapıya Dönüştürme (`FormPanel.tsx`)**
  - Sekme çubuğu (Tab Bar) ve alt kısımdaki "Önceki / Sonraki" butonları kaldırılacak.
  - 4 bölüm (1. Genel Bilgiler, 2. Ders Bilgileri, 3. Zarf İçeriği, 4. Teslimat ve İmzalar) başlıklarıyla birlikte alt alta, ferah aralıklarla (`space-y-6`) kart blokları şeklinde yerleştirilecek.
  - *Verify:* Tüm form alanlarının tek ekranda aşağı kaydırılarak doldurulabildiği ve anlık önizlemeyi tetiklediği doğrulanacak.

- [ ] **Task 3: Görsel ve Hiyerarşik Tasarım İyileştirmesi**
  - Bölüm başlıklarına zarif ikonlar ve kurumsal Lacivert (`#1F3860`) / Altın (`#C5A059`) vurgular eklenerek formun okunabilirliği artırılacak.
  - *Verify:* Formun uzun görünümde karmaşıklaşmadığı, kart sınırlarının belirgin olduğu doğrulanacak.

- [ ] **Task 4: Derleme ve Fonksiyonel Kontroller**
  - `npm run build` ve `npm run lint` testleri çalıştırılacak.
  - *Verify:* Docx indirme, taslak kaydetme/yükleme ve anlık önizleme fonksiyonlarının eksiksiz çalıştığı doğrulanacak.

---

## Done When (Bittiğinde)
- [ ] Kullanıcı hiçbir sekmeye veya ileri/geri butonuna basmadan tüm formu yukarıdan aşağıya doğru kaydırarak doldurabiliyor.
- [ ] Sol taraf aşağı kaydırılırken sağ taraftaki A4 sayfası kaybolmuyor, sağ panel bağımsız kalıyor.
- [ ] İki panel de kendi içinde ayrı ayrı kaydırılabiliyor.
