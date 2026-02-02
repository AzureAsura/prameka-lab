export const navLinks = [
  {
    name: "Cari Dokter",
    href: "/cari-dokter",
  },
  {
    name: "Layanan Kesehatan",
    // Kalau ada 'items', berarti dia dropdown
    items: [
      {
        title: "Medical Check Up",
        href: "/layanan/mcu",
        description: "Pemeriksaan kesehatan menyeluruh untuk deteksi dini penyakit.",
      },
      {
        title: "Laboratorium",
        href: "/layanan/lab",
        description: "Uji sampel darah, urine, dan lainnya dengan hasil akurat.",
      },
      {
        title: "Radiologi",
        href: "/layanan/radiologi",
        description: "Layanan X-Ray, USG, dan pemindaian medis lainnya.",
      },
    ],
  },
  {
    name: "Pusat Unggulan",
    href: "/layanan-unggulan",
  },
  {
    name: "Pusat Informasi",
    items: [
      {
        title: "Klinik Kami",
        href: "/info/klinik",
        description: "Lokasi dan jadwal operasional cabang Prameka.",
      },
      {
        title: "Karir",
        href: "/info/karir",
        description: "Bergabunglah dengan tim profesional medis kami.",
      },
      {
        title: "Informasi Bantuan",
        href: "/info/bantuan",
        description: "Tanya jawab seputar layanan dan asuransi.",
      },
      {
        title: "Hubungi Kami",
        href: "/contact",
        description: "Kontak darurat dan layanan pelanggan 24/7.",
      },
    ],
  },
];