+++
author = "Penyusun Hugo"
title = "Panduan Sintaks Markdown"
date = "2019-03-11"
description = "Contoh artikel yang menampilkan sintaks Markdown dasar dan pemformatan untuk elemen HTML."
tags = [
    "markdown",
    "css",
    "html",
]
categories = [
    "tema",
    "sintaks",
]
type = "post"
series = ["Themes Guide"]
aliases = ["migrate-from-jekyl"]
+++

Artikel ini menawarkan contoh sintaks Markdown dasar yang dapat digunakan dalam file konten Hugo, juga menunjukkan apakah elemen HTML dasar dihiasi dengan CSS dalam tema Hugo.<!--more-->

## Judul

Elemen HTML `<h1>`—`<h6>` berikut mewakili enam tingkat judul bagian. `<h1>` adalah tingkat bagian tertinggi sedangkan `<h6>` adalah yang terendah.

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Paragraf

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Blockquote

Elemen blockquote mewakili konten yang dikutip dari sumber lain, secara opsional, dengan kutipan yang harus berada dalam elemen `footer` atau `cite`, dan dengan perubahan dalam satu baris seperti anotasi dan singkatan.

#### Blockquote tanpa atribusi

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Catatan** bahwa Anda dapat menggunakan *Sintaks markdown* dalam blockquote.

#### Blockquote dengan atribusi

> Jangan berkomunikasi dengan cara berbagi memori, berbagilah memori dengan cara berkomunikasi.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: Kutipan di atas dikutip dari [pembicaraan](https://www.youtube.com/watch?v=PAAkCSZUG1c) Rob Pike selama Gopherfest, 18 November 2015.

## Tabel

Tabel bukan bagian dari spesifikasi inti Markdown, tetapi Hugo mendukungnya secara langsung.

   Nama | Umur
--------|------
   Budi | 27
    Ani | 23

#### Baris Markdown dalam Tabel

| Miring   | Tebal     | Kode |
| -------- | --------  | ------ |
| *miring* | **tebal** | `kode` |

## Blok Kode

### Blok kode dengan tanda-petik

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

### Blok kode dengan empat spasi

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

### Blok kode dengan shotcode highlight internal Hugo
{{< highlight html >}}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

## Jenis Daftar

### Daftar Berurutan

1. Butir pertama
2. Butir kedua
3. Butir ketiga

### Daftar Tidak Berurutan

* Butir item
* Item lainnya
* Dan item lainnya

### Daftar bertumpuk

* Buah
   * Apel
   * Oranye
   * Pisang
* Produk susu
   * Susu
   * Keju

## Elemen Lainnya — abbr, sub, sup, kbd, mark

<p>
<abbr title="Graphics Interchange Format">GIF</abbr> adalah format gambar bitmap.

<p>
H<sub>2</sub>O

<p>
X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<p>
Tekan <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> untuk mengakhiri sesi.

<p>
Kebanyakan <mark>salamander</mark> aktif di malam hari dan berburu serangga, cacing, dan makhluk kecil lainnya.