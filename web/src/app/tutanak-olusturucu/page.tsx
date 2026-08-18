"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { FormPanel } from "@/components/tutanak-olusturucu/FormPanel";
import { PreviewPanel } from "@/components/tutanak-olusturucu/PreviewPanel";
import { PresetManager } from "@/components/tutanak-olusturucu/PresetManager";
import { generateAndDownloadDocx } from "@/components/tutanak-olusturucu/docx-helper";
import { INITIAL_FORM_DATA } from "@/components/tutanak-olusturucu/types";
import type { TutanakFormData } from "@/components/tutanak-olusturucu/types";

export default function TutanakOlusturucuPage() {
  const [formData, setFormData] = useState<TutanakFormData>(INITIAL_FORM_DATA);
  const [isDownloading, setIsDownloading] = useState(false);

  async function handleDownload() {
    setIsDownloading(true);
    try {
      await generateAndDownloadDocx(formData);
    } catch (error) {
      console.error("Belge oluşturulurken hata oluştu:", error);
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <div className="h-screen flex flex-col bg-[#F3F4F6] text-gray-900 overflow-hidden">
      {/* Fixed Top Header */}
      <header className="bg-[#1F3860] text-white px-5 py-3 flex items-center justify-between shadow-md shrink-0 z-10">
        <div>
          <h1 className="text-lg sm:text-xl font-bold tracking-wide">
            Sınav Zarfı Teslim Tutanağı Editörü
          </h1>
          <p className="text-xs text-white/70">
            İstanbul Esenyurt Üniversitesi
          </p>
        </div>
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center gap-2 bg-[#C5A059] hover:bg-[#B08A3E] text-[#1F3860] font-semibold px-4 py-2 text-sm rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm cursor-pointer"
        >
          <Download size={16} />
          {isDownloading ? "Hazırlanıyor..." : "Word Belgesi İndir"}
        </button>
      </header>

      {/* Split-Screen: Dual Independent Scroll Layout */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[minmax(380px,46%)_1fr] overflow-hidden min-h-0">
        {/* Left Side: Scrollable Form Panel */}
        <aside className="h-full overflow-y-auto border-r border-gray-200 bg-gray-50/40 p-4 lg:p-5 space-y-4">
          <PresetManager formData={formData} onLoad={setFormData} />
          <FormPanel formData={formData} onChange={setFormData} />
        </aside>

        {/* Right Side: Scrollable Live A4 Preview Panel */}
        <section className="h-full overflow-hidden bg-[#E8E8E8]">
          <PreviewPanel formData={formData} />
        </section>
      </main>
    </div>
  );
}
