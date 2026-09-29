#!/usr/bin/env zsh
set -euo pipefail

script_dir=${0:a:h}
gallery_dir="$script_dir/gallery"
manifest_file="$script_dir/gallery-manifest.js"

images=(${gallery_dir}/*.(avif|gif|jpg|jpeg|png|webp|AVIF|GIF|JPG|JPEG|PNG|WEBP)(N.on))
cover_image="$gallery_dir/1.jpg"
if [[ -f "$cover_image" ]]; then
  images=("$cover_image" ${images:#$cover_image})
fi
excluded_files=(071A6482.JPG 071A6542.JPG 071A6587.JPG)
for excluded_file in "${excluded_files[@]}"; do
  excluded_image="$gallery_dir/$excluded_file"
  images=(${images:#$excluded_image})
done

{
  print "window.galleryImages = ["
  total=${#images[@]}
  index=1
  for image in "${images[@]}"; do
    file=${image:t}
    comma="," 
    if [[ $index -eq $total ]]; then
      comma=""
    fi
    print "  { src: \"gallery/$file\", alt: \"Khoảnh khắc cưới $index\" }$comma"
    index=$((index + 1))
  done
  print "];"
} > "$manifest_file"

print "Updated gallery-manifest.js with $total image(s)."