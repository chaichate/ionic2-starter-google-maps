![Google Maps](https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=w100)

# Ionic 2 starter Google Maps
A minimal starter for native Google Maps implementation in Ionic 2. It locates the user, zooms the map to location and add a marker.

# Setup
Get the dependencies, install plugins, add platforms and you  are ready to go!

## Dependencies
Run `npm install` to install all the dependencies

## Platforms
Grab the Android API key and the  iOS SDK key from [Google APIs](https://console.developers.google.com).

Install the Google Maps ionic plugin `$ ionic plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"`

Add the Android and iOS platform `$ionic platform add android` & `$ionic platform add ios`

## Run
Run the app on a connected or virtual device `$ionic run android` or `$ionic run ios`

## Troubleshooting
- Check if you installed the plugin a correct way. 
- Validate your API keys at [Google APIs](https://console.developers.google.com).
- Be sure the HTML element where the maps get injected into has an predefined height property.
- Be sure you run your app on a connected or virtual device.