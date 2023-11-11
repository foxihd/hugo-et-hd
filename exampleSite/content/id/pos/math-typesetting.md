---
author: Penyusun Hugo
title: Notasi Matematika
date: 2019-03-08
description: Panduan singkat untuk mengatur KaTeX
math: true
type: post
---

Notasi matematika dalam proyek Hugo dapat diaktifkan dengan menggunakan pustaka JavaScript dari pihak ketiga.
<!--more-->

Dalam contoh ini kita akan menggunakan [KaTeX](https://katex.org/)
- Untuk mengaktifkan KaTex secara global, atur parameter `math` ke `true` dalam konfigurasi proyek
- Untuk mengaktifkan KaTex per halaman, sertakan parameter `math: true` dalam file konten

**Catatan:** Gunakan referensi online [Fungsi TeX yang Didukung](https://katex.org/docs/supported.html)

### Contoh

Rumus dalam baris: \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)

Blok rumus:
$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } } 
$$