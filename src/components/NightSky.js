import React from 'react';
import Particles from 'react-particles-js';

export default function NightSky () {
    return (
        <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 120,
                        "density": {
                            "enable": true,
                            "value_area": 1500
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "opacity": 0.03
                    },
                    "move": {
                        "direction": "right",
                        "speed": 0.2
                    },
                    "size": {
                        "value": 1
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.1
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 1
                        }
                    }
                },
                "retina_detect": true
        }} />
    );
}