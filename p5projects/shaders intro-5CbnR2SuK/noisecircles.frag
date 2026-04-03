precision mediump float;

varying vec2 pos;

const int num_circles = 40;
uniform vec3 circles[num_circles];
uniform float m;

float rand(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}


void main() {
  
  float sw = 1.0;
  for (int i = 0; i < num_circles; i++) {
    float d = length(pos - circles[i].xy) - circles[i].z;
    d = step(0.0, d);
    sw *= d;
  }  
  float color = -1.0 * sw + rand(pos * m);

  gl_FragColor = vec4(1., 0.4, color,1.);
}