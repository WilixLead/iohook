{
	"targets": [{
		"target_name": "iohook",
		"win_delay_load_hook": "true",
		"type": "shared_library",
		"sources": [
			"src/iohook.cc",
			"src/iohook.h"
		],
		"dependencies": [
			"./uiohook.gyp:uiohook"
		],
		"cflags": [
			"-std=c99",
			"-fPIC"
		],
		"defines": [
			"USE_XKBCOMMON"
		],
		"include_dirs": [
			"<!(node -e \"require('nan')\")",
			"libuiohook/include"
		],
		"configurations": {
			"Release": {
			}
		}
	}]
}