"use client";

import type { TutanakFormData } from "./types";
import { BELGE_LISTESI } from "./types";

interface PreviewPanelProps {
  formData: TutanakFormData;
}

export function PreviewPanel({ formData }: PreviewPanelProps) {
  const check = (value: boolean) => (value ? "☒" : "☐");

  return (
    <div className="h-full overflow-y-auto bg-[#E8E8E8] p-6 flex flex-col items-center gap-8">
      {/* Page 1 — Sınav Zarfı Teslim Tutanağı */}
      <div
        className="w-full max-w-[595px] aspect-[210/297] bg-white shadow-lg rounded-sm p-8 text-[10px] leading-tight relative flex flex-col"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-2">
          <div className="text-center font-bold leading-none text-[#1F3860]">
            <div className="text-sm">İSTANBUL ESENYURT</div>
            <div className="text-sm">ÜNİVERSİTESİ</div>
            <div className="text-[8px] mt-1 text-gray-500">2013</div>
          </div>
          <div className="text-right text-[8px] leading-relaxed">
            <div className="italic text-[#1F3860]">www.esenyurt.edu.tr</div>
            <div>Zafer Mah. Adile Naşit Bulvarı No: 1 Esenyurt/İSTANBUL</div>
            <div>T: 444 9 123 / F: +(90) 212 699 09 90 / bilgi@esenyurt.edu.tr</div>
            <div className="mt-2 text-[9px]">
              <span className="font-bold">SINAV TARİHİ: </span>
              {formData.sinavTarihi}
            </div>
            <div className="text-[9px]">
              <span className="font-bold">GÖZETMEN: </span>
              {formData.gozetmen}
            </div>
          </div>
        </div>

        <div className="w-full h-[2px] bg-[#1F3860] mb-3" />

        {/* Title */}
        <div className="text-center mb-3">
          <div className="text-[14px] font-bold text-[#1F3860]">
            SINAV ZARFI TESLİM TUTANAĞI
          </div>
          <div className="text-[11px] font-bold mt-1">
            {formData.egitimYili} EĞİTİM - ÖĞRETİM YILI {formData.yariyil} YARIYILI
          </div>
        </div>

        {/* Info Table */}
        <table className="w-full border-collapse border border-gray-400 mb-2 text-[9px]">
          <tbody>
            <tr>
              <td colSpan={3} className="border border-gray-400 p-1.5">
                <div className="flex gap-6 font-bold">
                  <span>{check(formData.programTuru === "lisansustu")} Lisansüstü</span>
                  <span>{check(formData.programTuru === "lisans")} Lisans</span>
                  <span>{check(formData.programTuru === "onlisans")} Önlisans</span>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-gray-400 p-1.5 font-bold w-[38%]">
                Bölüm / Program
              </td>
              <td className="border border-gray-400 p-1.5">{formData.bolumProgram}</td>
            </tr>
            <tr>
              <td rowSpan={3} className="border border-gray-400 p-1.5 font-bold text-center align-middle w-[14%]">
                DERSİN
              </td>
              <td className="border border-gray-400 p-1.5 font-bold w-[24%]">Kodu</td>
              <td className="border border-gray-400 p-1.5">{formData.dersKodu}</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-1.5 font-bold">Adı</td>
              <td className="border border-gray-400 p-1.5">{formData.dersAdi}</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-1.5 font-bold">Öğretim Elemanı</td>
              <td className="border border-gray-400 p-1.5">{formData.ogretimElemani}</td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-gray-400 p-1.5 font-bold">
                Sınav Çeşidi
              </td>
              <td className="border border-gray-400 p-1.5">{formData.sinavCesidi}</td>
            </tr>
          </tbody>
        </table>

        {/* Documents Header */}
        <div className="bg-gray-200 text-center font-bold p-1.5 border border-gray-400 border-b-0 text-[9px]">
          SINAV ZARFININ İÇİNDE BULUNMASI GEREKEN BELGELER
        </div>

        {/* Documents Table */}
        <table className="w-full border-collapse border border-gray-400 mb-1 text-[9px]">
          <tbody>
            {BELGE_LISTESI.map((belge, index) => (
              <tr key={index}>
                <td className="border border-gray-400 p-1 text-center w-6">{index + 1}</td>
                <td className="border border-gray-400 p-1">{belge}</td>
                <td className="border border-gray-400 p-1 text-center w-10 text-sm">
                  {check(formData.belgeler[index])}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Notes */}
        <div className="text-[7px] mb-2 leading-relaxed">
          <div>
            <span className="font-bold">Not: a.</span> Sadece sınav kağıdı kullanılmış ise,
            öğrencinin almış olduğu not değerlendirilmiş sınav kağıdının üzerine yazılı olacak,
            optik kağıt da kullanılmış ise yalnızca optik kağıdın üzerinde olacaktır.
          </div>
          <div className="ml-6">
            <span className="font-bold">b.</span> 2,3,5,6 ve 9. maddelerde istenen belgelerde
            öğretim elemanının imza onayı olmalıdır.
          </div>
        </div>

        {/* Signature Tables */}
        <div className="flex gap-2 mb-2 text-[8px]">
          <table className="w-1/2 border-collapse border border-gray-400">
            <tbody>
              <tr>
                <td colSpan={2} className="border border-gray-400 p-1 font-bold text-center bg-gray-100 text-[7px]">
                  SINAV BELGELERİNİ TESLİM EDEN ÖĞRETİM ELEMANI
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-1 font-bold w-1/3">Adı ve Soyadı</td>
                <td className="border border-gray-400 p-1">{formData.teslimEdenAd}</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-1 font-bold">Tarih</td>
                <td className="border border-gray-400 p-1">{formData.teslimEdenTarih}</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-1 font-bold h-6 align-top">İmza</td>
                <td className="border border-gray-400 p-1 h-6" />
              </tr>
            </tbody>
          </table>
          <table className="w-1/2 border-collapse border border-gray-400">
            <tbody>
              <tr>
                <td colSpan={2} className="border border-gray-400 p-1 font-bold text-center bg-gray-100 text-[7px]">
                  SINAV BELGELERİNİ TESLİM ALAN ÖĞRETİM ELEMANI
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-1 font-bold w-1/3">Adı ve Soyadı</td>
                <td className="border border-gray-400 p-1">{formData.teslimAlanAd}</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-1 font-bold">Tarih</td>
                <td className="border border-gray-400 p-1">{formData.teslimAlanTarih}</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-1 font-bold h-6 align-top">İmza</td>
                <td className="border border-gray-400 p-1 h-6" />
              </tr>
            </tbody>
          </table>
        </div>

        {/* Control Group */}
        <table className="w-3/5 mx-auto border-collapse border border-gray-400 mb-2 text-[8px]">
          <tbody>
            <tr>
              <td colSpan={2} className="border border-gray-400 p-1 font-bold text-center bg-gray-100 text-[7px]">
                Sınav Zarfları Kontrol Grubu Öğretim Elemanının
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-1 font-bold w-1/3">Adı ve Soyadı</td>
              <td className="border border-gray-400 p-1">{formData.kontrolEdenAd}</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-1 font-bold">Tarih</td>
              <td className="border border-gray-400 p-1">{formData.kontrolEdenTarih}</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-1 font-bold h-6 align-top">İmza</td>
              <td className="border border-gray-400 p-1 h-6" />
            </tr>
          </tbody>
        </table>

        {/* Footer */}
        <div className="mt-auto bg-[#1F3860] text-white text-[7px] p-2 text-center rounded-sm leading-relaxed">
          Bu dosya İstanbul Esenyurt Üniversitesi&apos;ne aittir. Bulunması halinde aşağıdaki
          adres ve telefonlarla iletişime geçilmesi ve İstanbul Esenyurt Üniversitesi Yazı İşleri
          ve Arşiv Direktörlüğü&apos;ne teslim edilmesi rica olunur.
        </div>
      </div>

      {/* Page 2 — Notlar */}
      <div
        className="w-full max-w-[595px] aspect-[210/297] bg-white shadow-lg rounded-sm p-8 text-[10px] leading-tight relative flex flex-col"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-2">
          <div className="text-center font-bold leading-none text-[#1F3860]">
            <div className="text-sm">İSTANBUL ESENYURT</div>
            <div className="text-sm">ÜNİVERSİTESİ</div>
            <div className="text-[8px] mt-1 text-gray-500">2013</div>
          </div>
          <div className="text-right text-[8px] leading-relaxed">
            <div className="italic text-[#1F3860]">www.esenyurt.edu.tr</div>
            <div>Zafer Mah. Adile Naşit Bulvarı No: 1 Esenyurt/İSTANBUL</div>
            <div>T: 444 9 123 / F: +(90) 212 699 09 90 / bilgi@esenyurt.edu.tr</div>
          </div>
        </div>

        <div className="w-full h-[2px] bg-[#1F3860] mb-6" />

        <div className="text-[14px] font-bold text-[#1F3860] mb-4">NOTLAR</div>

        <div className="flex-1 flex flex-col justify-between px-2">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="border-b border-gray-300 min-h-[20px]" />
          ))}
        </div>
      </div>
    </div>
  );
}
