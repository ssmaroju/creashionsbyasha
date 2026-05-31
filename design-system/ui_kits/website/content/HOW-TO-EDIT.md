# How to update your shop 🦋
### A plain-English guide for Asha — no coding needed

Your website reads everything — your products, prices, photos, and the words on the
homepage — from **one file**: `content/store.json`. Change that file, and your site
changes. You have **two ways** to do it. Use whichever feels comfy.

---

## ✨ The easy way — the Studio page (recommended)

You have a built-in editor. **Open `admin.html`** in your browser (double-click it, or
visit `yoursite.com/admin.html`).

1. **Products tab** — see every item.
   - Click any product to edit its name, price, photo, description, etc.
   - Click **+ Add product** to make a new one.
   - Use the ✎ edit, ⧉ duplicate, or 🗑 delete buttons on each row.
2. **Homepage text tab** — change the big headline, the intro sentence, the top banner,
   and the little stats.
3. When you're happy, click **Save changes (download)** at the top right. Your browser
   downloads a file called **`store.json`**.
4. **Put that file into the `content` folder**, replacing the old `store.json`.
5. Refresh your site — done! 🎉

> The Studio page never breaks your site on its own. Nothing changes until you download
> the file and drop it into the `content` folder.

---

## 📸 Adding or changing a photo

Photos live in the folder **`assets/products`**. The website only needs the **file name**.

1. Save your photo into `assets/products`. Give it a simple name, all lowercase, with
   dashes instead of spaces, e.g. `rose-gold-tumbler.png` (no spaces, no capitals).
2. In the Studio (or in the file), put that exact file name in the product's **photo**
   field: `rose-gold-tumbler.png`.
3. That's it. **Tip:** square photos (same width and height) look best.

---

## 📝 The manual way — editing the file directly

If you'd rather edit the file, open `content/store.json` in any text editor (even
Notepad). It's a list of products that looks like this — copy a block, paste it, and
change the words between the quote marks:

```json
{
  "id": "rose-gold-tumbler",
  "name": "Rose Gold Floral Tumbler",
  "cat": "Tumblers",
  "price": 55,
  "image": "rose-gold-tumbler.png",
  "theme": "Floral",
  "size": "20oz",
  "badge": "Bestseller",
  "blurb": "A short, lovely sentence about this piece."
}
```

What each line means:
| Field | What to put | Notes |
|---|---|---|
| `id` | a short nickname, no spaces | must be **different** for every product |
| `name` | the title customers see | anything you like |
| `cat` | the category | use one of the categories listed at the top of the file |
| `price` | a number | no `$` sign, just `55` |
| `image` | the photo file name | the file must be in `assets/products` |
| `theme` | a collection | Coastal, Floral, Western, Festive, Spiritual, Patriotic, Galaxy |
| `size` | e.g. `20oz` | leave as `""` if it doesn't apply |
| `badge` | `Bestseller`, `Ready to ship`, or `""` | `""` means no badge |
| `blurb` | one or two sentences | the description |

**The golden rules of this file:**
- Keep every `"quote mark"` and `,` comma exactly where they are.
- Put a comma between products, but **not** after the very last one.
- If the site looks blank after editing, a comma or quote is probably missing — undo your
  last change. (Tip: paste the file into <https://jsonlint.com> — it points out mistakes.)

---

## 🎀 Changing the homepage words
In `store.json`, the top `"site"` section holds the headline, intro, banner, and stats.
Just change the words between the quote marks. The Studio's **Homepage text** tab does
the same thing with friendly boxes.

---

## 💬 The custom-order form & reviews
- The **custom order form** (the "Custom" page) collects requests — connect it to your
  email when the site goes live (your web host can do this).
- The **reviews** on the homepage are set in the code for now; ask your developer to wire
  them to real reviews later, or tell me and I'll make them editable here too.

---

Stuck? Keep a backup: before editing, make a copy of `store.json` and call it
`store-backup.json`. If anything goes wrong, rename the backup back. You've got this. 💛
