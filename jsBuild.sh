#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

# Update npm packages, including dev dependencies
echo "Updating npm packages..."
npm update --include=dev

# Install gulp globally if not already installed
echo "Installing gulp..."
npm install -g gulp

# Build the design system
echo "Building the design system..."
gulp dsbuild

# Modify the date-picker.js file
echo "Modifying date-picker.js..."
DATE_PICKER_FILE="ApiVisualiser/wwwroot/lib/designsystem/components/date-picker/date-picker.js"
# Use sed to remove '/lib/designsystem' from the path on line 26
# This ensures the correct relative path is used without altering other parts of the line
sed -i '26s|/lib/designsystem||' "$DATE_PICKER_FILE"

echo "Styling the app..."
gulp styleapp

# Bundle and minimize JavaScript
echo "Bundling and minimizing JavaScript..."
gulp jses5app

echo "Build and packaging process completed successfully!"