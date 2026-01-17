# Image Rename Guide

## Files That Need to Be Renamed

To ensure web-safe URLs, please rename the following files and folders in `public/images/`:

### Folder Renames
1. `public/images/home page/` → `public/images/home-page/`

### File Renames
1. `public/images/home-page/home (1).jpg` → `public/images/home-page/home-header.jpg`
2. `public/images/home-page/tucker_headshot (1).jpg` → `public/images/home-page/tucker-headshot.jpg`
3. `public/images/about/IMG_8960-2 (1).jpg` → `public/images/about/tucker-nature.jpg`
4. `public/images/about/Monarch_on_Rough_Blazing_Star_(42664211220) (1).jpg` → `public/images/about/monarch-blazing-star.jpg`

## How to Rename

### On Windows (PowerShell)
```powershell
# Navigate to public/images
cd public/images

# Rename folder
Rename-Item "home page" "home-page"

# Rename files in home-page
cd home-page
Rename-Item "home (1).jpg" "home-header.jpg"
Rename-Item "tucker_headshot (1).jpg" "tucker-headshot.jpg"

# Rename files in about
cd ../about
Rename-Item "IMG_8960-2 (1).jpg" "tucker-nature.jpg"
Rename-Item "Monarch_on_Rough_Blazing_Star_(42664211220) (1).jpg" "monarch-blazing-star.jpg"
```

### On Mac/Linux
```bash
# Navigate to public/images
cd public/images

# Rename folder
mv "home page" "home-page"

# Rename files in home-page
cd home-page
mv "home (1).jpg" "home-header.jpg"
mv "tucker_headshot (1).jpg" "tucker-headshot.jpg"

# Rename files in about
cd ../about
mv "IMG_8960-2 (1).jpg" "tucker-nature.jpg"
mv "Monarch_on_Rough_Blazing_Star_(42664211220) (1).jpg" "monarch-blazing-star.jpg"
```

## Status

✅ JSON content files have been updated with new paths
⚠️ Physical files still need to be renamed (see above)

After renaming the files, the site will work correctly with the new paths.
