# Mad Power Struggle

Lose your sanity all over again.

Add dmx-controlled lights to your secret lair. Control the lights with cheap hardware (any respectible mad scientist keeps their world-domination budget under control).

Manage your lights from a dashboard, similar to (but more free-er) a stream deck. Configure different fixture types, lights, and colors to your villainous liking.

For more information setting up the lights and the controller, see:

- https://mischief-tech.com/lair-lights - Full instructions
- https://lair-lights.mischief-tech.com - Hosted version of Mad Power Struggle
- https://github.com/camman3d/lair-lights-controller - Microcontroller code for the light controller


## Running Locally

```
npm install
npm run dev
```

Then open a browser to `http://localhost:4200`

## Building Desktop Application

```
npm run build-make
npm run make
```

When finished, the resulting binary will be under `out/make/...` (path varies by platform).
