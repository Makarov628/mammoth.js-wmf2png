# Mammoth converter with wmf2png 

This is a custom option for mammoth.js with wm2png using for converting `.wmf` (Windows Metafile) to `.png` image that is added to HTML.

### Used Repositories:
[travispaul/wmf2png](https://github.com/travispaul/wmf2png),  
[lvyue/libwmf](https://github.com/lvyue/libwmf)  


## Getting started


### In Windows:  
Use `wmf2png.exe` 

### In Ubuntu/Debian:
```sh
sudo apt-get install libwmf-bin 
```

### In Cent OS / RedHat / Fedora :
```sh
yum install libwmf
```  

### In Mac OS X:
```sh  
brew install libwmf
```  

## Usage
    node app.js

## Troubleshoot
`wmf2png.exe` converts `.wmf` to `.png` better then `libwmf` (math chars loss, incorrect aspect ratio).

