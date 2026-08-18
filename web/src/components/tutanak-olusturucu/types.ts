export interface TutanakFormData {
  sinavTarihi: string;
  gozetmen: string;
  egitimYili: string;
  yariyil: string;
  programTuru: "lisansustu" | "lisans" | "onlisans" | "";
  bolumProgram: string;
  dersKodu: string;
  dersAdi: string;
  ogretimElemani: string;
  sinavCesidi: string;
  belgeler: boolean[];
  teslimEdenAd: string;
  teslimEdenTarih: string;
  teslimAlanAd: string;
  teslimAlanTarih: string;
  kontrolEdenAd: string;
  kontrolEdenTarih: string;
}

export const BELGE_LISTESI = [
  "Sınav Tutanağı",
  "UNIPA Sisteminden Alınan Ders Devam Listesi (Sadece Final Sınavında)",
  "UNIPA Sisteminden Alınan Öğrenci Sınav Notları Çıktısı",
  "Sınav Yoklama Listesi",
  "Soru Kağıdı Örneği",
  "Cevap Anahtarı",
  "Değerlendirilmiş Sınav Kağıtları",
  "Optik Sınav Kağıtları (Kullanılması durumunda)",
  "Ders İzlence Formu (Syllabus - Kütüphanemizde bulunan en az beş kaynak içermelidir.)",
] as const;

export const INITIAL_FORM_DATA: TutanakFormData = {
  sinavTarihi: "",
  gozetmen: "",
  egitimYili: "",
  yariyil: "",
  programTuru: "",
  bolumProgram: "",
  dersKodu: "",
  dersAdi: "",
  ogretimElemani: "",
  sinavCesidi: "",
  belgeler: Array(9).fill(false),
  teslimEdenAd: "",
  teslimEdenTarih: "",
  teslimAlanAd: "",
  teslimAlanTarih: "",
  kontrolEdenAd: "",
  kontrolEdenTarih: "",
};

export interface Preset {
  id: string;
  name: string;
  data: TutanakFormData;
  createdAt: string;
}
