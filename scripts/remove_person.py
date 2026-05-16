"""
remove_person.py
Removes the person from about-me-photo.png and saves the result
as about-me-photo-bg-only.png in the same images folder.

Requirements:
    pip install rembg pillow opencv-python numpy
"""

from pathlib import Path
import numpy as np
from PIL import Image
import cv2
from rembg import remove

# ── paths ────────────────────────────────────────────────────────────
SCRIPT_DIR   = Path(__file__).resolve().parent
IMAGES_DIR   = SCRIPT_DIR.parent / "src" / "images"
INPUT_PATH   = IMAGES_DIR / "about-me-photo.png"
OUTPUT_PATH  = IMAGES_DIR / "about-me-photo-bg-only.png"

# ── 1. load original ─────────────────────────────────────────────────
print(f"Loading: {INPUT_PATH}")
original_pil = Image.open(INPUT_PATH).convert("RGBA")
original_np  = np.array(original_pil)

# ── 2. remove background → get RGBA where alpha = person mask ────────
print("Running rembg to extract person mask …")
nobg_pil  = remove(original_pil)           # returns RGBA; person has alpha > 0
nobg_np   = np.array(nobg_pil)

# Alpha channel: 255 = person, 0 = background
person_alpha = nobg_np[:, :, 3]            # shape (H, W)

# Dilate the mask slightly to avoid fringe artefacts
kernel       = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (15, 15))
person_mask  = cv2.dilate(person_alpha, kernel, iterations=2)

# ── 3. inpaint – fill person area with surrounding background ────────
print("Inpainting …")
# OpenCV inpaint expects uint8 BGR + uint8 mask
bgr = cv2.cvtColor(original_np[:, :, :3], cv2.COLOR_RGB2BGR)

# INPAINT_TELEA works well for large solid-colour backgrounds
result_bgr = cv2.inpaint(bgr, person_mask, inpaintRadius=12, flags=cv2.INPAINT_TELEA)

# ── 4. save ──────────────────────────────────────────────────────────
result_rgb = cv2.cvtColor(result_bgr, cv2.COLOR_BGR2RGB)
result_pil = Image.fromarray(result_rgb)
result_pil.save(OUTPUT_PATH)
print(f"Saved: {OUTPUT_PATH}")
