# Image Hotspot

Shows and adds hotspots with tooltips to an image.

[Demo](https://kubism-dev.github.io/hotspotter/)

```javascript
const image = new HotSpotter('.hotspot', {
	tooltip: true,
	addPins: true,
});

const presetPins = [
	{ x: '10%', y: '20%', tooltip: 'Lorem Ipsum' },
	{ x: '30%', y: '50%', tooltip: 'Lorem Ipsum dolor' },
	{ x: '60%', y: '10%' },
];

image.setPresetPins(presetPins);
```

```html
<div class="hotspot">
	<img
		src="img/image.jpg"
		alt="Image"
	/>
</div>
```
