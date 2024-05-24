# Mad Power Struggle

> Every mad scientist needs ominous lights.
> - Everybody

Add dmx-controlled lights to your secret lair. Control the lights with cheap hardware (any respectible mad scientist keep their world-domination budget under control).

Manage your lights from a web-based dashboard, similar to (but more free-er) a stream deck. Configure colors

## Setting everything up

### Step 1: Build the DMX light controller

See https://mischief-tech.com/lights for instructions on building a lights controller and hooking it up to this. Don't worry: parts are cheap and instructions are simple.

Code is in the `dmx-controller` folder.

### Step 2: Run web app

Install and run the Angular app:

```
npm install
ng serve
```

### Step 3: Configure lights

First, update the code for your lights (*todo: Make this part easier*)

Second, click on config and enter the IP address of the ESP32. Click Save.

If you want to edit or otherwise modify your light colors you can. Turn on the edit mode toggle in the top right corner. Click a color to edit.

## Running everything

* Click on a color to apply it
* 