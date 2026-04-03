precision mediump float;

varying vec2 pos;

uniform float millis;

void main() {
  float c = (sin(pos.x * 16. + millis/1000.)+1.) / 2.;
  

  gl_FragColor = vec4(c, 0., 1.,1.);
}