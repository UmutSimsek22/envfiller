"use client";

import React, { useState, useEffect } from "react";
import {
  Bookmark,
  ChevronDown,
  Save,
  Trash2,
  Upload,
  RotateCcw,
} from "lucide-react";
import type { TutanakFormData, Preset } from "./types";
import { INITIAL_FORM_DATA } from "./types";

interface PresetManagerProps {
  formData: TutanakFormData;
  onLoad: (data: TutanakFormData) => void;
}

const STORAGE_KEY = "tutanak_presets";

export function PresetManager({ formData, onLoad }: PresetManagerProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [presetName, setPresetName] = useState("");
  const [presets, setPresets] = useState<Preset[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setPresets(JSON.parse(saved));
      }
    } catch {
      setPresets([]);
    }
  }, []);

  const savePresetsToStorage = (updatedPresets: Preset[]) => {
    setPresets(updatedPresets);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPresets));
    } catch {
      // Silently fail on storage quota exceeded
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = presetName.trim();
    if (!trimmedName) return;

    const newPreset: Preset = {
      id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      name: trimmedName,
      data: formData,
      createdAt: new Date().toISOString(),
    };

    savePresetsToStorage([newPreset, ...presets]);
    setPresetName("");
  };

  const handleDelete = (id: string) => {
    const updated = presets.filter((preset) => preset.id !== id);
    savePresetsToStorage(updated);
  };

  const handleLoad = (presetData: TutanakFormData) => {
    onLoad(presetData);
  };

  const handleReset = () => {
    onLoad(INITIAL_FORM_DATA);
  };

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return isoString;
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-xs overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full px-4 py-3 bg-[#1F3860]/5 hover:bg-[#1F3860]/10 flex items-center justify-between transition-colors text-left cursor-pointer"
      >
        <div className="flex items-center gap-2 text-[#1F3860] font-semibold text-sm">
          <Bookmark size={18} className="text-[#C5A059]" />
          <span>Taslaklar</span>
          {presets.length > 0 && (
            <span className="text-xs bg-[#1F3860] text-white px-2 py-0.5 rounded-full font-normal">
              {presets.length}
            </span>
          )}
        </div>
        <ChevronDown
          size={18}
          className={`text-[#1F3860] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="p-4 space-y-4">
          <form onSubmit={handleSave} className="flex gap-2">
            <input
              type="text"
              placeholder="Taslak adı girin..."
              value={presetName}
              onChange={(e) => setPresetName(e.target.value)}
              className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent"
            />
            <button
              type="submit"
              disabled={!presetName.trim()}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#C5A059] hover:bg-[#B08A3E] text-[#1F3860] text-sm font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shrink-0 shadow-xs"
            >
              <Save size={15} />
              <span>Kaydet</span>
            </button>
          </form>

          {presets.length === 0 ? (
            <div className="text-center py-4 text-xs text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-200">
              Kayıtlı taslak bulunmuyor.
            </div>
          ) : (
            <div className="space-y-2 max-h-56 overflow-y-auto pr-0.5">
              {presets.map((preset) => (
                <div
                  key={preset.id}
                  className="flex items-center justify-between p-2.5 bg-gray-50 hover:bg-gray-100/80 border border-gray-200 hover:border-gray-300 rounded-lg transition-all gap-2"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-[#1F3860] truncate">
                      {preset.name}
                    </p>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      {formatDate(preset.createdAt)}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleLoad(preset.data)}
                      className="flex items-center gap-1 px-2.5 py-1 bg-[#1F3860] hover:bg-[#162947] text-white text-xs font-medium rounded-md transition-colors shadow-xs cursor-pointer"
                      title="Taslağı Yükle"
                    >
                      <Upload size={13} />
                      <span>Yükle</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(preset.id)}
                      className="flex items-center justify-center p-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
                      title="Taslağı Sil"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="pt-2 border-t border-gray-100">
            <button
              type="button"
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 hover:text-red-600 hover:bg-red-50 border border-gray-200 hover:border-red-200 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw size={13} />
              <span>Formu Temizle</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
