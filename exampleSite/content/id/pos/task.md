+++
title = 'Daftar Tugas'
date = '2024-01-26'
tags = ['fitur']
type = 'post'
task = true
+++

## Daftar tugas

- [ ] tugas 1
- [X] tugas 2
- [ ] tugas 3

Sekarang dengan `task = true` pada _preamble_, daftar tugas siap digunakan dengan input dari pengguna.
Simbol poin-poinnya masih terlihat di browser berbasis Firefox.

## Sekarang dengan deklarasi `task`

{{< task >}}
- [ ] tugas 1
- [X] tugas 2
- [ ] tugas 3

Sekarang daftar tugas tercoret ketika dicentang.
Sayangnya, ini hanya berfungsi di browser berbasis Chrome karena terbatasnya dukungan _selektor_ CSS pada Firefox.
Tapi simbol poin-poinnya sudah hilang.

## Bungkus dalam lingkup `task`

{{< task "begin" >}}
{{< task item="tugas 1" >}}
{{< task item="tugas 2" >}}
{{< task item="tugas 3" >}}
{{< task "end" >}}

Gunakan jika coretan pada masukan pengguna diperlukan, agar pengguna tidak melewatkan setiap langkah.