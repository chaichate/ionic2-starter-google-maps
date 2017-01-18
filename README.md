![Google Maps](https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=w300)

# Ionic 2 starter Google Maps
A minimal starter for native Google Maps implementation in Ionic 2. It locates the user, zooms the map to location and add a marker.

# Setup
Get the dependancies, install plugins, add platforms and you  are ready to go!

## Dependencies
Run `npm install` to install all the dependencies

## Platforms
Grab the Android API key and the  iOS SDK key from [Google APIs](https://console.developers.google.com).

Install the Google Maps ionic plugin `$ ionic plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"`

Add the Android and iOS platform `$ionic platform add Android` & `$ionic platform add iOS`

## Run
Run the app on a connected or virtual device `$ionic platform run Android` or `$ionic platform run iOS`