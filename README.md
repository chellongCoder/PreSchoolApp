# build app

1. `git clone https://github.com/chellongCoder/PreSchoolApp.git`
2. `cd PreSchoolApp`
3. `npm install`
4. `react-native run-android || react-native run-ios`

# Using code-push

`code-push app add [$YOURAPPNAME]-ANDROID android react-native`

`code-push app add [$YOURAPPNAME]-IOS ios react-native`

check code-push app with cmd: `code-push app ls`

Get deployment key and info of specific app: `code-push deployment ls [appName] -k`

## Key generation

```
# generate private RSA key and write it to private.pem file
openssl genrsa -out private.pem

# export public key from private.pem into public.pem
openssl rsa -pubout -in private.pem -out public.pem

```

Replace default production deployment key and public key (content of public.pem) with each platform

Android: /path_to_your_app/android/app/src/main/res/values/strings.xml
ios: info.plist

Update code-push-deployments.json with all deployments key you have and custom it as you want.

Update code using code-push-deployments.json.


# Setup for google signin

- Follow [this](https://github.com/react-native-community/react-native-google-signin/blob/master/docs/get-config-file.md) guide to get the configuration file.

- Download the `GoogleService-Info.plist` file at the end of the process


# Setup FBSDK ios 
- Download sdk and place at ~/Documents/FacebookSDK
  
- run `sudo chmod -R 755 ~/Documents/FacebookSDK`

- Set Framework search path  to $(HOME)/Documents/FacebookSDK 

- Set Framework search path of RCFBSDK.xcodeproj  to $(HOME)/Documents/FacebookSDK 

- If still missing framework try `clean build` and `rm -rf ~/Library/Developer/Xcode/DerivedData`


