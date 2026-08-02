# Adding Dr. Jan Duffy's Photo

## Image File Location

The image file is already in the `public` directory:

```
public/Dr Duffy Blue_Headshot Enhanced 180 Size.jpg
```

## Image Requirements

- **File Name**: `Dr Duffy Blue_Headshot Enhanced 180 Size.jpg` (current file)
- **Recommended Size**: 800x600px or larger
- **Aspect Ratio**: 4:3 (width:height)
- **Format**: JPG or PNG
- **Optimization**: Compress the image for web (aim for under 200KB)

## Where the Photo Appears

The photo will automatically display on:

1. **Contact Page** (`/contact`) - "About Dr. Jan Duffy" card
2. **Homes Page** (`/homes`) - "Working with Dr. Jan Duffy" section  
3. **About Content Component** - Used in community/about sections

## Current Fallback

Until the image is added, a branded fallback will display with:
- Gradient background (blue theme)
- Dr. Jan Duffy's name and title
- Professional placeholder design

## Adding the Image

### Option 1: Direct File Upload
1. Save your image as `dr-jan-duffy.jpg`
2. Place it in the `public` folder at the root of the project
3. The image will automatically be available at `/dr-jan-duffy.jpg`

### Option 2: Using Cloudinary (Recommended for Production)
If you have Cloudinary set up:
1. Upload the image to Cloudinary
2. Get the Cloudinary image ID
3. Update the `AgentPhoto` component to use `getCloudinaryImageUrl()` instead

## Testing

After adding the image:
1. Restart your development server (`npm run dev`)
2. Visit `/contact`, `/homes`, or pages with the about section
3. The photo should display automatically

## Troubleshooting

If the image doesn't appear:
- The file name is: `Dr Duffy Blue_Headshot Enhanced 180 Size.jpg` (with spaces)
- Ensure the file is in the `public` directory (not `src/public`)
- Check browser console for any 404 errors
- Verify the image file isn't corrupted
- Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

