class HotSpotter {
	constructor(containerSelector, options) {
		this.container = document.querySelector(containerSelector);
		this.image = this.container.querySelector('img');
		this.pins = [];
		this.pinId = 0;

		this.options = {
			tooltip: options.tooltip !== undefined ? options.tooltip : true,
			addPins: options.addPins !== undefined ? options.addPins : true,
		};

		this.init();
	}

	init() {
		this.image.addEventListener('click', (event) => {
			this.addPin(event);
		});
	}

	addPin(event) {
		if (!this.options.addPins) return;
		const pin = document.createElement('div');
		pin.className = 'pin';
		pin.id = `pin${this.pinId}`;

		const containerWidth = this.container.clientWidth;
		const containerHeight = this.container.clientHeight;
		const xPercentage = (event.offsetX / containerWidth) * 100;
		const yPercentage = (event.offsetY / containerHeight) * 100;

		pin.style.left = `${xPercentage}%`;
		pin.style.top = `${yPercentage}%`;

		this.container.appendChild(pin);
		this.addToolTip(this.pinId);
		this.pins.push(pin);
		this.pinId++;
	}

	addToolTip(pinId) {
		if (!this.options.addPins || !this.options.tooltip) return;
		let promptText = prompt('Add ToolTip', '');
		document
			.querySelector(`#pin${pinId}`)
			.setAttribute('data-tooltip', promptText);
		document.querySelector(`#pin${pinId}`).classList.add('has-tooltip');
	}

	setPresetPins(presetPins) {
		for (const presetPin of presetPins) {
			const pin = document.createElement('div');
			pin.className = 'pin';
			pin.id = `pin${this.pinId}`;

			if (presetPin.tooltip !== undefined && this.options.tooltip) {
				pin.setAttribute('data-tooltip', presetPin.tooltip);
				pin.classList.add('has-tooltip');
			}

			this.pinId++;

			pin.style.left = presetPin.x;
			pin.style.top = presetPin.y;

			this.container.appendChild(pin);
			this.pins.push(pin);
		}
	}
}
