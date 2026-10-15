/**
 * data/undangan-pricing.js — AURA GLOBAL Digital Web Studio
 * Konfigurasi paket harga undangan pernikahan digital.
 * Catatan: Harga resmi belum ditetapkan oleh pemilik.
 * Bila nilai kosong/null, sistem menampilkan "Hubungi untuk penawaran".
 */

const undanganPricing = {
  paketMinimalis: null,
  paketElegan: null,
  paketKustom: null,
  displayNote: "Hubungi untuk penawaran"
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { undanganPricing };
}
