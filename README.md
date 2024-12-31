<img src="https://kekse.biz/github.php?draw&override=github:json.js" />

# **`JSON`.js**
Just started this one as a really small JSON extension, implemented in **JavaScript**.

It's a **Pre-Processor**, not a Parser!

## Index
* [Features](#features)
* [Download](#download)
* [Example/Test](#example--test)
* [Details](#details)
* [Copyright and License](#copyright-and-license)

## Features
The `.json` files can now also:

* Contain **comments** `/* ... */`
* Beneath the **"** string literal now also supported **'** and **\`**
* This also holds for escaping 'em, it's also supported.
* All both in keys and in values.
* Preserves original lines and columns (over comments, for debugging)

I'd be happy about your ideas, which other features could be implemented!

## Download
* [Version **v0.3.0**](js/json.js) (updated **2024-10-17**)

## Example / Test
* [`test.js`](test/test.js)
* [`test.json`](test/test.json)

## Details
I'm just parsing it 'byte by byte'. With one `open` state. That's all.

# Copyright and License
The Copyright is [(c) Sebastian Kucharczyk](./COPYRIGHT.txt),
and it's licensed under the [MIT](./LICENSE.txt) (also known as 'X' or 'X11' license).

<a href="https://kekse.biz/">
<img src="favicon.png" alt="Favicon" />
</a>

