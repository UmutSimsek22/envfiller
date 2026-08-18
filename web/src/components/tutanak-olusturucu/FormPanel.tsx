"use client";

import { useState } from "react";
import { Info, BookOpen, ClipboardCheck, Pen } from "lucide-react";
import type { TutanakFormData } from "./types";
import { BELGE_LISTESI } from "./types";

interface FormPanelProps {
  formData: TutanakFormData;
  onChange: (data: TutanakFormData) => void;
}

const TABS = [
  { id: 0, label: "Genel Bilgiler", icon: Info },
  { id: 1, label: "Ders Bilgileri", icon: BookOpen },
  { id: 2, label: "Zarf İçeriği", icon: ClipboardCheck },
  { id: 3, label: "Teslimat & İmzalar", icon: Pen },
] as const;

const PROGRAM_TURLERI = [
  { value: "lisansustu" as const, label: "Lisansüstü" },
  { value: "lisans" as const, label: "Lisans" },
  { value: "onlisans" as const, label: "Önlisans" },
];

export function FormPanel({ formData, onChange }: FormPanelProps) {
  const [activeTab, setActiveTab] = useState(0);

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
    <div className="w-full flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Tab Bar */}
      <div className="flex flex-wrap sm:flex-nowrap border-b border-gray-200 bg-gray-50">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 px-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#1F3860] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-6 min-h-[380px]">
        {activeTab === 0 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Eğitim Yılı
                </label>
                <input
                  type="text"
                  value={formData.egitimYili}
                  onChange={(e) => updateField("egitimYili", e.target.value)}
                  placeholder="Örn: 2025-2026"
                  className="px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Yarıyıl
                </label>
                <select
                  value={formData.yariyil}
                  onChange={(e) => updateField("yariyil", e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
                >
                  <option value="">Seçiniz</option>
                  <option value="Güz">Güz</option>
                  <option value="Bahar">Bahar</option>
                  <option value="Yaz">Yaz</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Sınav Tarihi
                </label>
                <input
                  type="date"
                  value={formData.sinavTarihi}
                  onChange={(e) => updateField("sinavTarihi", e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Gözetmen
                </label>
                <input
                  type="text"
                  value={formData.gozetmen}
                  onChange={(e) => updateField("gozetmen", e.target.value)}
                  placeholder="Ad Soyad"
                  className="px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">
                Program Türü
              </label>
              <div className="flex gap-5">
                {PROGRAM_TURLERI.map((pt) => (
                  <label key={pt.value} className="flex items-center gap-2 cursor-pointer">
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
                    <span className="text-sm text-gray-700">{pt.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Bölüm / Program
              </label>
              <input
                type="text"
                value={formData.bolumProgram}
                onChange={(e) => updateField("bolumProgram", e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Ders Kodu
                </label>
                <input
                  type="text"
                  value={formData.dersKodu}
                  onChange={(e) => updateField("dersKodu", e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Sınav Çeşidi
                </label>
                <select
                  value={formData.sinavCesidi}
                  onChange={(e) => updateField("sinavCesidi", e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
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
              <label className="mb-1 text-sm font-medium text-gray-700">
                Ders Adı
              </label>
              <input
                type="text"
                value={formData.dersAdi}
                onChange={(e) => updateField("dersAdi", e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Öğretim Elemanı
              </label>
              <input
                type="text"
                value={formData.ogretimElemani}
                onChange={(e) => updateField("ogretimElemani", e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
              />
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="space-y-3">
            <h3 className="font-medium text-gray-800 text-sm mb-1">
              Zarf İçerisinde Bulunan Belgeler
            </h3>
            <div className="space-y-1">
              {BELGE_LISTESI.map((belge, index) => (
                <label
                  key={index}
                  className="flex items-start gap-3 p-2.5 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.belgeler[index]}
                    onChange={() => toggleBelge(index)}
                    className="w-4 h-4 mt-0.5 accent-[#1F3860] rounded"
                  />
                  <span className="text-sm text-gray-700 leading-snug">
                    {index + 1}. {belge}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {activeTab === 3 && (
          <div className="space-y-5">
            <fieldset className="grid grid-cols-2 gap-4 p-4 border border-gray-200 rounded-lg bg-gray-50/50">
              <legend className="text-[#1F3860] font-semibold text-sm px-1">
                Teslim Eden Öğretim Elemanı
              </legend>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  value={formData.teslimEdenAd}
                  onChange={(e) => updateField("teslimEdenAd", e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Tarih
                </label>
                <input
                  type="date"
                  value={formData.teslimEdenTarih}
                  onChange={(e) => updateField("teslimEdenTarih", e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
                />
              </div>
            </fieldset>

            <fieldset className="grid grid-cols-2 gap-4 p-4 border border-gray-200 rounded-lg bg-gray-50/50">
              <legend className="text-[#1F3860] font-semibold text-sm px-1">
                Teslim Alan Öğretim Elemanı
              </legend>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  value={formData.teslimAlanAd}
                  onChange={(e) => updateField("teslimAlanAd", e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Tarih
                </label>
                <input
                  type="date"
                  value={formData.teslimAlanTarih}
                  onChange={(e) => updateField("teslimAlanTarih", e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
                />
              </div>
            </fieldset>

            <fieldset className="grid grid-cols-2 gap-4 p-4 border border-gray-200 rounded-lg bg-gray-50/50">
              <legend className="text-[#1F3860] font-semibold text-sm px-1">
                Kontrol Grubu Öğretim Elemanı
              </legend>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  value={formData.kontrolEdenAd}
                  onChange={(e) => updateField("kontrolEdenAd", e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Tarih
                </label>
                <input
                  type="date"
                  value={formData.kontrolEdenTarih}
                  onChange={(e) => updateField("kontrolEdenTarih", e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3860]"
                />
              </div>
            </fieldset>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="px-6 py-3.5 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
        <button
          onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
          disabled={activeTab === 0}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Önceki
        </button>
        <span className="text-xs text-gray-400">
          {activeTab + 1} / {TABS.length}
        </span>
        <button
          onClick={() => setActiveTab((prev) => Math.min(TABS.length - 1, prev + 1))}
          disabled={activeTab === TABS.length - 1}
          className="px-4 py-2 text-sm font-medium text-white bg-[#1F3860] border border-transparent rounded-md shadow-sm hover:bg-[#162b4a] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Sonraki
        </button>
      </div>
    </div>
  );
}
