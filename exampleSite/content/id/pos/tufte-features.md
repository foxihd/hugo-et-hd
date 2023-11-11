+++
author = "AUTHOR NAME"
date = "2016-02-20T13:56:01-08:00"
meta = true
math = true
title = "Fitur bawaan Hugo-Tufte"
subtitle = "Fancy Subtitle"
toc = true
categories = ["katex", "latex", "tufte-css"]
type = "post"
+++

Ini adalah postingan demonstrasi sederhana. Pos ini berfungsi sebagai contoh fitur
dari tema ini. Salah satunya adalah $\LaTeX$ melalui [Katex](https://katex.org/).
{{< section "begin" >}}
## Sedikit Tentang Matematika

{{< epigraph pre="Shawn O'Hare, " cite="Matematika itu Menyenangkan" >}}
Ini adalah contoh _epigraph_ dengan beberapa rumus matematika
$ \mathbb N \subseteq \mathbb R $
untuk memulai awal suatu bagian.
{{< /epigraph >}}

<!--lebih lanjut-->

### Di barisan
Beberapa rumus matematika dalam satu baris:
{{< marginnote "mn-example" >}}Ini adalah _margin note_.{{< /marginnote >}}
$e^{i \pi} = -1$
 dan $\sqrt{-1} = i $
dan $ a_2 = 3 $.

### Dalam Block
Dan untuk menulis rumus dalam sebuah block gunakan kode `$$`:
{{< sidenote "sn-example" >}}Ini adalah _sidenote!_{{< /sidenote >}}
$$
  -- \cdot_H -- \colon B(G,H) \times B(H, K) \to B(G, K), \quad ([X], [Y]) \mapsto [X \times_H Y].
$$

### Lingkup

Saat ini, beberapa lingkup $\LaTeX$ tertentu perlu dikecualikan agar prosesor _markdown_ tidak mengacuhkan Katex. Saat ini, lingkup tampilan blok harus diapit oleh tag `<p>` dan baris kosong.
Contohnya:

<p>
$$
\begin{aligned}  
  \mu(A) &= \iint_{I^2} \chi_A (x,y) \ d(x,y) 
  = \int_I \left( \int_I  \chi_A (x,y) \ dx\right) dy 
  = \int_I 0 \ dy= 0 \quad \text{and} \\  
  \mu(A) &=\iint_{I^2}  \chi_A (x,y) \ d(x,y) 
  = \int_I \left(  \int_I \chi_A (x,y) \ dy \right) dx 
  =\int_I dx = 1,
\end{aligned} 
$$
</p>
<!-- Lihat https://github.com/jgm/pandoc/issues/3953#issuecomment-334670625 -->

dibuat dengan baris kode

```txt
<p>
$$
\begin{aligned}  
  \mu(A) &= \iint_{I^2} \chi_A (x,y) \ d(x,y) 
  = \int_I \left( \int_I  \chi_A (x,y) \ dx\right) dy 
  = \int_I 0 \ dy= 0 \quad \text{and} \\  
  \mu(A) &=\iint_{I^2}  \chi_A (x,y) \ d(x,y) 
  = \int_I \left(  \int_I \chi_A (x,y) \ dy \right) dx 
  =\int_I dx = 1,
\end{aligned} 
$$
</p>
```

### Blok Kutipan
Beberapa blok kutipan. Namun pertama-tama, kami mencoba mengutip secara manual melalui
<cite>Ini berada di antara tag kutipan dan memiliki matematika: $e^x $</cite>

{{< blockquote cite="www.shawnohare.com" footer="Shawn O'Hare" >}}
Ini adalah blockquote dengan dua paragraf, yang menggunakan _shortcode_ blockquote dari tema. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
{{< /blockquote >}}

### Pemikiran baru

<span class="newthought">Terkadang pemikiran baru</span> membedakan suatu bagian, seperti di sini. Saat ini ada dua cara untuk membuatnya. Salah satu caranya adalah dengan mentah
HTML seperti: `<span class="new thoughtt">...</span>`. Tema ini juga menyediakan _shortcode_ `newthought`.

### Kode
Ini adalah sebuah kode yang ditulis dalam satu baris: `go test -v -short`.
Dan ini adalah kode dalam blok baris kode:
```go {linenos=table,hl_lines=["2-5"],linenostart=199}
package main

import "log"

func add(x int, y int) int {
  log.Println("We are going to take the sum of two numbers, and leave a long comment.")
  return x + y
}

func main() {
  y := add(1, 2)
  log.Println(y)
}
```

Dan ini adalah contoh baris kode tanpa nomor urut baris. 
```go {hl_lines=["2-5"],linenostart=199}
package main

import "log"

func add(x int, y int) int {
  log.Println("We are going to take the sum of two numbers, and leave a very very very long comment.")
  return x + y
}

func main() {
  y := add(1, 2)
  log.Println(y)
}
```

### Gambar
Dibawah ini adalah gambar dengan lebar reguler.
{{< figure
  src="https://github.com/edwardtufte/tufte-css/raw/gh-pages/img/exports-imports.png"
  class="class param"
  title="Judul Gambar."
  caption="Ini adalah keterangan."
  label="mn-export-import"
  attr="Sumber gambar"
  attrlink="attribute link"
  alt="alt"
  link="link"
 >}}
{{< section "break" >}}

{{< figure
  src="https://edwardtufte.github.io/tufte-css/img/rhino.png"
  class="class param"
  type="margin"
  label="mn-rhino"
  title="Judul Gambar."
  label="mn-rhino"
  caption="Ini adlah keterangan gambar."
  attr="Atribusi gambar"
  attrlink="https://edwardtufte.github.io/tufte-css"
  alt="alt"
  link="link"
 >}}
Namun integrasi yang erat antara grafik dengan teks adalah inti dari karya Tufte bahkan ketika grafik tersebut merupakan tambahan pada bagian utama teks. Dalam banyak kasus, gambar pada margin mungkin merupakan pilihan yang paling tepat.
{{< section "break" >}}

Dibawah Ini adalah gambar dengan lebar penuh.
{{< figure
  src="https://edwardtufte.github.io/tufte-css/img/napoleons-march.png"
  type="full"
  label="mn-napoleonic-wars"
  title="Perang Napoleon"
  caption="Ini adalah keterangan."
  attr="Atribusi/sumber gambar"
  attrlink="attribute link"
  alt="Napoleonic wars"
  link="link"
 >}}
{{< section "end" >}}

{{< div class="bigskip" >}}
## Sebuah Cerita Tentang Kucing
Memanjat pohon, menunggu petugas pemadam kebakaran melompat ke petugas pemadam kebakaran lalu menggaruk wajahnya tidur di tempat tidur anjing, memaksa anjing tidur di lantai makanan ringan kucing, dan makan udang secara halus dengan cakar lalu jilat cakarnya sampai bersih cuci udang dengan pangkuan susu anyelir lalu mundurlah ke tempat terhangat di sofa untuk mencakar kain sebelum tidur siang, memanjat pohon, menunggu petugas pemadam kebakaran melompat ke petugas pemadam kebakaran lalu menggaruk wajahnya, memasukkan tikus mainan ke dalam mangkuk makanan, kehabisan kotak sampah dengan kecepatan penuh. Lihat pemiliknya, berlari ketakutan mengejar tikus, jadi memikirkan air garam tuna untuk memakan tanaman, membunuh tangan untuk membangunkan manusia untuk dimakan pada jam 4 pagi. Manusia sedang memandikanmu mengapa halp oh kengerian melarikan diri dari goresan desisan, gigitan, goresan furnitur, dan gosokkan wajah pada pemiliknya. Suka burger keju melihat pemiliknya, lari ketakutan mengunyah kabel. Kucing preman abaikan tupai, toh Anda tidak akan pernah bisa menangkapnya. Makan tanaman, matikan tangan, temukan tempat kosong di lemari dan tidur sepanjang hari jadi sembunyikan kepala di bawah selimut sehingga tidak ada yang bisa melihat namun suka bermain dengan ikat rambut pemilik, menggosok wajah pada segala hal, aku suka kucing besar dan aku tidak bisa berbohong. Bangunkan manusia untuk makan pada jam 4 pagi sambil menatap dinding, bermain dengan makanan dan dibingungkan oleh debu, namun kemudian kucing mengambil alih dunia dengan cepat. Periksa apa pun yang dibawa ke dalam rumah, dapatkan video yang diposting ke internet untuk mengejar titik merah. Kucing coklat dengan telinga merah muda mengunyah kaki dan meludahkannya ke karpet abu-abu terang, bukan di linoleum yang berdekatan. Saya adalah manusia terbaik yang bangun untuk makan pada jam 4 pagi, mengeong menyebarkan kotoran kucing ke seluruh rumah, untuk mengeong. Hancurkan piring dari meja, kepala tapi tidak bisa makan dari piringku sendiri, lompat dari balkon, ke kepala orang asing, kejar seutas tali, teriak ke bak mandi, tapi panjat kaki, lalu buka bungkus tisu toilet, tapi hancurkan sofa. Panjat pohon, tunggu petugas pemadam kebakaran melompat ke petugas pemadam kebakaran lalu garuk wajahnya. Tinggalkan rambut di mana-mana, usap kotoran di sekitar rumah, makan rumput, buang kembali, dan makan rumput, buang kembali. Kejar mainan ikan berwarna konyol di sekitar rumah.
{{< div "end" >}}

### Kami sangat menyukai kucing.

Ya, mereka lembut dan terlihat bahagia.