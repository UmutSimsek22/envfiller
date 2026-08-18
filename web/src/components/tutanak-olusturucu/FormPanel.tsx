"use client";

import { Info, BookOpen, ClipboardCheck, Pen } from "lucide-react";
import type { TutanakFormData } from "./types";
import { BELGE_LISTESI } from "./types";

interface FormPanelProps {
  formData: TutanakFormData;
  onChange: (data: TutanakFormData) => void;
}

const PROGRAM_TURLERI = [
  { value: "lisansustu" as const, label: "Lisansüstü" },
  { value: "lisans" as const, label: "Lisans" },
  { value: "onlisans" as const, label: "Önlisans" },
];

export function FormPanel({ formData, onChange }: FormPanelProps) {
  function updateField<K extends keyof TutanakFormData>(
    field: K,
    value: TutanakFormData[K],
  ) {
    onChange({ ...formData, [field]: value });
  }

  function toggleBelge(index: number) {
    const updated = [...formData.belgeler];
    updated[index] = !updated[index];
    updateField("belgeler", updated);
  }

  return (
    <div className="w-full space-y-5">
      {/* 1. Genel Bilgiler */}
      <section className="bg-white rounded-xl shadow-xs border border-gray-200 p-5 space-y-4">
        <div className="flex items-center gap-2 text-[#1F3860] font-semibold text-sm pb-2 border-b border-gray-100">
          <Info size={18} className="text-[#C5A059]" />
          <span>1. Genel Bilgiler</span>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 text-xs font-medium text-gray-700">
                Eğitim Yılı
              </label>
              <input
                type="text"
                value={formData.egitimYili}
                onChange={(e) => updateField("egitimYili", e.target.value)}
                placeholder="Örn: 2025-2026"
                className="px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-xs font-medium text-gray-700">
                Yarıyıl
              </label>
              <select
                value={formData.yariyil}
                onChange={(e) => updateField("yariyil", e.target.value)}
                className="px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
              >
                <option value="">Seçiniz</option>
                <option value="Güz">Güz</option>
                <option value="Bahar">Bahar</option>
                <option value="Yaz">Yaz</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 text-xs font-medium text-gray-700">
                Sınav Tarihi
              </label>
              <input
                type="date"
                value={formData.sinavTarihi}
                onChange={(e) => updateField("sinavTarihi", e.target.value)}
                className="px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-xs font-medium text-gray-700">
                Gözetmen
              </label>
              <input
                type="text"
                value={formData.gozetmen}
                onChange={(e) => updateField("gozetmen", e.target.value)}
                placeholder="Ad Soyad"
                className="px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
              />
            </div>
          </div>

          <div className="flex flex-col pt-1">
            <label className="mb-2 text-xs font-medium text-gray-700">
              Program Türü
            </label>
            <div className="flex flex-wrap gap-4">
              {PROGRAM_TURLERI.map((pt) => (
                <label
                  key={pt.value}
                  className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-gray-900"
                >
                  <input
                    type="radio"
                    name="programTuru"
                    value={pt.value}
                    checked={formData.programTuru === pt.value}
                    onChange={(e) =>
                      updateField(
                        "programTuru",
                        e.target.value as TutanakFormData["programTuru"],
                      )
                    }
                    className="w-4 h-4 accent-[#1F3860]"
                  />
                  <span>{pt.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ders Bilgileri */}
      <section className="bg-white rounded-xl shadow-xs border border-gray-200 p-5 space-y-4">
        <div className="flex items-center gap-2 text-[#1F3860] font-semibold text-sm pb-2 border-b border-gray-100">
          <BookOpen size={18} className="text-[#C5A059]" />
          <span>2. Ders Bilgileri</span>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 text-xs font-medium text-gray-700">
              Bölüm / Program
            </label>
            <input
              type="text"
              value={formData.bolumProgram}
              onChange={(e) => updateField("bolumProgram", e.target.value)}
              placeholder="Örn: Bilgisayar Mühendisliği"
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 text-xs font-medium text-gray-700">
                Ders Kodu
              </label>
              <input
                type="text"
                value={formData.dersKodu}
                onChange={(e) => updateField("dersKodu", e.target.value)}
                placeholder="Örn: BLM101"
                className="px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-xs font-medium text-gray-700">
                Sınav Çeşidi
              </label>
              <select
                value={formData.sinavCesidi}
                onChange={(e) => updateField("sinavCesidi", e.target.value)}
                className="px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
              >
                <option value="">Seçiniz</option>
                <option value="Vize">Vize</option>
                <option value="Final">Final</option>
                <option value="Bütünleme">Bütünleme</option>
                <option value="Mazeret">Mazeret</option>
                <option value="Tek Ders">Tek Ders</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-xs font-medium text-gray-700">
              Ders Adı
            </label>
            <input
              type="text"
              value={formData.dersAdi}
              onChange={(e) => updateField("dersAdi", e.target.value)}
              placeholder="Örn: Programlamaya Giriş"
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-xs font-medium text-gray-700">
              Öğretim Elemanı
            </label>
            <input
              type="text"
              value={formData.ogretimElemani}
              onChange={(e) => updateField("ogretimElemani", e.target.value)}
              placeholder="Örn: Dr. Öğr. Üyesi Ahmet Yılmaz"
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
            />
          </div>
        </div>
      </section>

      {/* 3. Zarf İçeriği */}
      <section className="bg-white rounded-xl shadow-xs border border-gray-200 p-5 space-y-3">
        <div className="flex items-center gap-2 text-[#1F3860] font-semibold text-sm pb-2 border-b border-gray-100">
          <ClipboardCheck size={18} className="text-[#C5A059]" />
          <span>3. Zarf İçeriği (Belge Kontrolü)</span>
        </div>

        <div className="space-y-1 pt-1">
          {BELGE_LISTESI.map((belge, index) => (
            <label
              key={index}
              className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.belgeler[index]}
                onChange={() => toggleBelge(index)}
                className="w-4 h-4 mt-0.5 accent-[#1F3860] rounded cursor-pointer"
              />
              <span className="text-xs sm:text-sm text-gray-700 leading-snug select-none">
                <strong className="text-gray-900">{index + 1}.</strong> {belge}
              </span>
            </label>
          ))}
        </div>
      </section>

      {/* 4. Teslimat ve İmzalar */}
      <section className="bg-white rounded-xl shadow-xs border border-gray-200 p-5 space-y-4">
        <div className="flex items-center gap-2 text-[#1F3860] font-semibold text-sm pb-2 border-b border-gray-100">
          <Pen size={18} className="text-[#C5A059]" />
          <span>4. Teslimat ve İmzalar</span>
        </div>

        <div className="space-y-4">
          {/* Teslim Eden */}
          <div className="p-3.5 border border-gray-200 rounded-lg bg-gray-50/50 space-y-3">
            <span className="text-xs font-semibold text-[#1F3860] uppercase tracking-wider block">
              Teslim Eden Öğretim Elemanı
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="mb-1 text-xs font-medium text-gray-600">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  value={formData.teslimEdenAd}
                  onChange={(e) => updateField("teslimEdenAd", e.target.value)}
                  placeholder="Ad Soyad"
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-xs font-medium text-gray-600">
                  Tarih
                </label>
                <input
                  type="date"
                  value={formData.teslimEdenTarih}
                  onChange={(e) =>
                    updateField("teslimEdenTarih", e.target.value)
                  }
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
                />
              </div>
            </div>
          </div>

          {/* Teslim Alan */}
          <div className="p-3.5 border border-gray-200 rounded-lg bg-gray-50/50 space-y-3">
            <span className="text-xs font-semibold text-[#1F3860] uppercase tracking-wider block">
              Teslim Alan Öğretim Elemanı
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="mb-1 text-xs font-medium text-gray-600">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  value={formData.teslimAlanAd}
                  onChange={(e) => updateField("teslimAlanAd", e.target.value)}
                  placeholder="Ad Soyad"
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-xs font-medium text-gray-600">
                  Tarih
                </label>
                <input
                  type="date"
                  value={formData.teslimAlanTarih}
                  onChange={(e) =>
                    updateField("teslimAlanTarih", e.target.value)
                  }
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
                />
              </div>
            </div>
          </div>

          {/* Kontrol Grubu */}
          <div className="p-3.5 border border-gray-200 rounded-lg bg-gray-50/50 space-y-3">
            <span className="text-xs font-semibold text-[#1F3860] uppercase tracking-wider block">
              Kontrol Grubu Öğretim Elemanı
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="mb-1 text-xs font-medium text-gray-600">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  value={formData.kontrolEdenAd}
                  onChange={(e) =>
                    updateField("kontrolEdenAd", e.target.value)
                  }
                  placeholder="Ad Soyad"
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-xs font-medium text-gray-600">
                  Tarih
                </label>
                <input
                  type="date"
                  value={formData.kontrolEdenTarih}
                  onChange={(e) =>
                    updateField("kontrolEdenTarih", e.target.value)
                  }
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
