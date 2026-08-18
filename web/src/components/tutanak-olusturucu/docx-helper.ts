import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { saveAs } from "file-saver";
import type { TutanakFormData } from "./types";

function formatCheckbox(checked: boolean): string {
  return checked ? "☒" : "☐";
}

function buildTemplateData(formData: TutanakFormData) {
  return {
    SINAV_TARIHI: formData.sinavTarihi || "..................",
    GOZETMEN: formData.gozetmen || "..................",
    EGITIM_YILI: formData.egitimYili || "............",
    YARIYIL: formData.yariyil || "............",
    CHECK_LISANSUSTU: formatCheckbox(formData.programTuru === "lisansustu"),
    CHECK_LISANS: formatCheckbox(formData.programTuru === "lisans"),
    CHECK_ONLISANS: formatCheckbox(formData.programTuru === "onlisans"),
    BOLUM_PROGRAM: formData.bolumProgram,
    DERS_KODU: formData.dersKodu,
    DERS_ADI: formData.dersAdi,
    OGRET_ELEMANI: formData.ogretimElemani,
    SINAV_CESIDI: formData.sinavCesidi,
    CHECK_DOC_1: formatCheckbox(formData.belgeler[0]),
    CHECK_DOC_2: formatCheckbox(formData.belgeler[1]),
    CHECK_DOC_3: formatCheckbox(formData.belgeler[2]),
    CHECK_DOC_4: formatCheckbox(formData.belgeler[3]),
    CHECK_DOC_5: formatCheckbox(formData.belgeler[4]),
    CHECK_DOC_6: formatCheckbox(formData.belgeler[5]),
    CHECK_DOC_7: formatCheckbox(formData.belgeler[6]),
    CHECK_DOC_8: formatCheckbox(formData.belgeler[7]),
    CHECK_DOC_9: formatCheckbox(formData.belgeler[8]),
    TESLIM_EDEN_AD: formData.teslimEdenAd,
    TESLIM_EDEN_TARIH: formData.teslimEdenTarih,
    TESLIM_ALAN_AD: formData.teslimAlanAd,
    TESLIM_ALAN_TARIH: formData.teslimAlanTarih,
    KONTROL_EDEN_AD: formData.kontrolEdenAd,
    KONTROL_EDEN_TARIH: formData.kontrolEdenTarih,
  };
}

export async function generateAndDownloadDocx(
  formData: TutanakFormData,
): Promise<void> {
  const response = await fetch("/sinav_zarfi_tutanak.docx");
  const arrayBuffer = await response.arrayBuffer();

  const zip = new PizZip(arrayBuffer);
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
    delimiters: { start: "{{", end: "}}" },
  });

  doc.render(buildTemplateData(formData));

  const output = doc.getZip().generate({
    type: "blob",
    mimeType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  });

  const filename = formData.dersAdi
    ? `sinav_zarfi_${formData.dersAdi.replace(/\s+/g, "_")}.docx`
    : "sinav_zarfi_tutanak.docx";

  saveAs(output, filename);
}
