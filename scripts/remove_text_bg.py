"""
remove_text_bg.py
Removes a white (or near-white) background from a text image, producing a
transparent PNG. Works by converting each pixel's brightness to an alpha
value — white → fully transparent, dark text → fully opaque.

Usage:
    python scripts/remove_text_bg.py [input] [output] [--threshold 240]

Defaults:
    input     src/images/intro-text.png
    output    src/images/intro-text-nobg.png
    threshold 240  (0-255; pixels with all channels >= threshold become transparent)
"""

import argparse
import sys
from pathlib import Path

try:
    from PIL import Image
    import numpy as np
except ImportError:
    sys.exit("Missing dependencies. Run:  pip install Pillow numpy")


def remove_white_bg(input_path: Path, output_path: Path, threshold: int = 240) -> None:
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img, dtype=np.float32)  # shape: (H, W, 4)

    r, g, b = data[:, :, 0], data[:, :, 1], data[:, :, 2]

    # Brightness of each pixel (perceptual luminance)
    brightness = 0.299 * r + 0.587 * g + 0.114 * b

    # Alpha = how dark the pixel is, scaled to 0-255.
    # Pixels at or above threshold get alpha 0 (transparent).
    # Pixels below threshold get alpha proportional to how dark they are.
    alpha = np.clip((threshold - brightness) / (threshold / 255.0), 0, 255).astype(np.uint8)

    data[:, :, 3] = alpha
    result = Image.fromarray(data.astype(np.uint8), "RGBA")
    result.save(output_path, "PNG")
    print(f"Saved: {output_path}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Remove white background from a text image.")
    parser.add_argument("input",  nargs="?", default="src/images/intro-text.png")
    parser.add_argument("output", nargs="?", default="src/images/intro-text-nobg.png")
    parser.add_argument("--threshold", type=int, default=240,
                        help="Brightness threshold (0-255). Pixels >= threshold become transparent.")
    args = parser.parse_args()

    inp = Path(args.input)
    out = Path(args.output)

    if not inp.exists():
        sys.exit(f"Input file not found: {inp}")

    out.parent.mkdir(parents=True, exist_ok=True)
    remove_white_bg(inp, out, args.threshold)
