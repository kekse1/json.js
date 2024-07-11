<img src="https://kekse.biz/github.php?draw&override=github:json.js" />

# **`JSON`.js**
Just started this one as a really small JSON extension, implemented in **JavaScript**.

It's a **Pre-Processor**, not a Parser.

## Features
The `.json` files can now also:

* Contain **comments** `/* ... */`

* Beneath the **"** string literal now also supported **'** and **\`**
* This also holds for escaping 'em, it's also supported.
* All both in keys and in values.

* //**TODO??**?// maybe more features will come l8rs.. dunno.

## Download
* [Version **v0.2.2**](js/json.js) (updated **2024-07-09**)

## Example / Test
* [`first-tiny-test`.json](json/first-tiny-test.json)

## Details
I'm just parsing it 'byte by byte'. With one `open` state. That's all.

## More
I'd be happy if you'd send me your own ideas how to extend the JSON format.

## Bugs / TODO
One tiny mistake atm.: I encoded a string within the _backtick_ **\`**, and when I
_escaped_ another one (within the text itself), the resulting text was a
_double quote_ **"** (instead of a real _backtick_ **\`**).
**TODO**; will be fixed very soon, I promise..! ^\_^

# Copyright and License
The Copyright is [(c) Sebastian Kucharczyk](./COPYRIGHT.txt),
and it's licensed under the [MIT](./LICENSE.txt) (also known as 'X' or 'X11' license).

<a href="favicon.512px.png" target="_blank">
<img src="favicon.png" alt="Favicon" />
</a>

